import { useLayoutEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useLocation, useNavigationType } from 'react-router-dom'
import { savedPageScroll } from '../lib/pageScroll'
import { ProfileContact, ProfileHero } from './ProfileSidebar'
import { Work } from '../sections/Work'
import { canvasPanelOffset, cancelSectionNavigation, navigateToSection, scrollToCanvasTarget } from '../lib/canvasNavigation'
import { useLocale } from '../i18n/locale'

type CanvasPanel = { element: HTMLElement; label: string; offset: number }

function nearestPanel(panels: CanvasPanel[], offset: number) {
  return panels.reduce((nearest, panel, index) =>
    Math.abs(panel.offset - offset) < Math.abs(panels[nearest].offset - offset) ? index : nearest, 0)
}

/** Scroll remains native: no wheel interception, artificial inertia or snapping. */
export function HomeCanvas() {
  const { locale } = useLocale()
  const root = useRef<HTMLElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const [horizontal, setHorizontal] = useState(false)
  const [height, setHeight] = useState<number>()
  const [activePanel, setActivePanel] = useState(0)
  const [panels, setPanels] = useState<CanvasPanel[]>([])
  const panelPositions = useRef<CanvasPanel[]>([])
  const reduced = useReducedMotion()
  const location = useLocation()
  const navigationType = useNavigationType()
  const positioned = useRef<string | null>(null)
  const prepared = useRef(false)
  const mountPosition = useRef(savedPageScroll(location.key))
  const distance = useMotionValue(0)
  const start = useMotionValue(0)
  const { scrollY } = useScroll()
  // Pixel-for-pixel travel keeps native wheel, trackpad and keyboard scrolling.
  const transform = useTransform(() => `translate3d(${-Math.max(0, Math.min(scrollY.get() - start.get(), distance.get()))}px, 0, 0)`)
  useMotionValueEvent(scrollY, 'change', value => {
    setActivePanel(nearestPanel(panelPositions.current, value - start.get()))
  })

  useLayoutEffect(() => {
    const media = window.matchMedia('(min-width: 1101px) and (prefers-reduced-motion: no-preference)')
    const update = () => setHorizontal(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useLayoutEffect(() => {
    if (prepared.current) return
    prepared.current = true
    cancelSectionNavigation()
    const origin = window.scrollY + (root.current?.getBoundingClientRect().top ?? 0)
    window.scrollTo({ top: origin, behavior: 'instant' })
    scrollY.set(window.scrollY)
    start.set(origin)
    distance.set(0)
    setActivePanel(0)
  }, [scrollY, start, distance])

  useLayoutEffect(() => {
    // On a fresh document the browser's native fragment scroll runs after the
    // first layout effects. Resolve that fragment once, after native loading,
    // using the canvas's actual coordinates instead of its vertical DOM order.
    if (document.readyState === 'complete') return
    let frame = 0
    let interacted = false
    const markInteraction = () => { interacted = true }
    window.addEventListener('wheel', markInteraction, { passive: true })
    window.addEventListener('touchstart', markInteraction, { passive: true })
    window.addEventListener('keydown', markInteraction)
    const finish = () => {
      frame = requestAnimationFrame(() => {
        if (positioned.current !== location.key || interacted) return
        const target = location.hash ? document.getElementById(location.hash.slice(1)) : null
        if (target) navigateToSection(target, 'instant')
        else if (!location.hash && mountPosition.current === undefined)
          window.scrollTo({ top: start.get(), behavior: 'instant' })
        scrollY.set(window.scrollY)
      })
    }
    window.addEventListener('load', finish, { once: true })
    return () => {
      window.removeEventListener('load', finish)
      window.removeEventListener('wheel', markInteraction)
      window.removeEventListener('touchstart', markInteraction)
      window.removeEventListener('keydown', markInteraction)
      cancelAnimationFrame(frame)
    }
  }, [location.key, location.hash, scrollY, start])

  useLayoutEffect(() => {
    const element = track.current
    if (!element) return
    const measure = () => {
      const travel = horizontal ? Math.max(0, element.scrollWidth - document.documentElement.clientWidth) : 0
      start.set(window.scrollY + (root.current?.getBoundingClientRect().top ?? 0))
      distance.set(travel)
      const measured = Array.from(element.querySelectorAll<HTMLElement>('[data-canvas-panel]')).map(panel => {
        const heading = panel.querySelector<HTMLElement>('h1, h2')
        const label = panel.getAttribute('aria-label') ?? heading?.getAttribute('aria-label') ?? heading?.textContent?.replace(/\s+/g, ' ').trim() ?? ''
        return { element: panel, label, offset: canvasPanelOffset(panel, element) }
      })
      // Three compact destinations: start, middle and end of the canvas.
      const destinations = measured.filter((_, index) =>
        index === 0 || index === Math.floor((measured.length - 1) / 2) || index === measured.length - 1)
      panelPositions.current = destinations
      setPanels(destinations)
      setActivePanel(nearestPanel(destinations, window.scrollY - start.get()))
      setHeight(horizontal ? travel + window.innerHeight : undefined)
    }
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(element)
    window.addEventListener('resize', measure)
    return () => { observer.disconnect(); window.removeEventListener('resize', measure) }
  }, [horizontal, distance, start, locale])

  useLayoutEffect(() => {
    const expectedHorizontal = window.matchMedia('(min-width: 1101px) and (prefers-reduced-motion: no-preference)').matches
    if (horizontal !== expectedHorizontal || (horizontal && height === undefined)) return
    if (positioned.current === location.key) return
    const first = positioned.current === null
    const restored = navigationType === 'POP' ? first ? mountPosition.current : savedPageScroll(location.key) : undefined
    positioned.current = location.key
    if (restored !== undefined) {
      window.scrollTo({ top: restored, behavior: 'instant' })
    } else if (location.hash) {
      const target = document.getElementById(location.hash.slice(1))
      if (target) navigateToSection(target, first || navigationType === 'POP' ? 'instant' : 'smooth')
    } else {
      window.scrollTo({ top: start.get(), behavior: 'instant' })
    }
    scrollY.set(window.scrollY)
    setActivePanel(nearestPanel(panelPositions.current, window.scrollY - start.get()))
  }, [horizontal, height, location.hash, location.key, navigationType, scrollY, start])

  return <main id="main-content" className="home-canvas" ref={root} tabIndex={-1}
    data-horizontal={horizontal} style={{ height }} onFocusCapture={event => {
      if (horizontal && event.target instanceof Element && event.target.closest('[data-canvas-panel]'))
        scrollToCanvasTarget(event.target)
    }}>
    <div className="canvas-viewport">
      <motion.div className="canvas-track" ref={track} style={{ transform: horizontal && !reduced ? transform : 'none' }}>
        <ProfileHero />
        <Work />
        <ProfileContact />
      </motion.div>
      {horizontal && <nav className="canvas-zone-indicator" aria-label="Экраны портфолио">
        {panels.map((panel, index) => <button key={index} type="button"
          aria-label={`Перейти к экрану ${index + 1}: ${panel.label}`}
          aria-current={activePanel === index ? 'step' : undefined}
          onClick={() => navigateToSection(panel.element, reduced ? 'instant' : 'smooth')}>
          <span aria-hidden="true" />
        </button>)}
      </nav>}
    </div>
  </main>
}
