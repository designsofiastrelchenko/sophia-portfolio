import { useEffect, useMemo, useRef, useState } from 'react'
import type { MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import { LayoutGroup, motion, useReducedMotion } from 'framer-motion'
import { caseSections } from '../data/portfolio'
import { useGroupedRows } from '../hooks/useGroupedRows'
import { Icon } from './Icon'

export function CaseNavigation({ isShort, projectId, sections }: { isShort: boolean; projectId: string; sections?: { id: string; label: string }[] }) {
  const visibleSections = useMemo(
    () => sections ?? caseSections.filter(section => !isShort || section.id === 'context' || section.id === 'final'),
    [isShort, sections],
  )
  const [active, setActive] = useState(visibleSections[0]?.id ?? '')
  const reducedMotion = useReducedMotion()
  const navRef = useRef<HTMLElement>(null)
  const pendingActiveRef = useRef<string | null>(null)
  const pendingScrollTopRef = useRef(0)
  const pendingTimeoutRef = useRef<number | null>(null)
  const groupRef = useGroupedRows(visibleSections.length)

  useEffect(() => {
    const sections = visibleSections.flatMap(({ id }) => {
      const section = document.getElementById(id)
      return section ? [section] : []
    })
    let frame = 0
    const update = () => {
      frame = 0
      const line = (navRef.current?.getBoundingClientRect().bottom ?? 0) + 18
      const pending = pendingActiveRef.current
      if (pending) {
        setActive(pending)
        return
      }
      let current = sections[0]?.id ?? ''
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= line) current = section.id
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        current = sections.at(-1)?.id ?? current
      }
      setActive(current)
    }
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update) }
    const finishNavigation = () => {
      const pending = pendingActiveRef.current
      if (!pending) return
      if (Math.abs(window.scrollY - pendingScrollTopRef.current) > 4) return
      pendingActiveRef.current = null
      if (pendingTimeoutRef.current !== null) window.clearTimeout(pendingTimeoutRef.current)
      pendingTimeoutRef.current = null
      setActive(pending)
    }
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('scrollend', finishNavigation)
    window.addEventListener('resize', schedule)
    const cancelPending = () => {
      pendingActiveRef.current = null
      if (pendingTimeoutRef.current !== null) window.clearTimeout(pendingTimeoutRef.current)
      pendingTimeoutRef.current = null
      schedule()
    }
    window.addEventListener('wheel', cancelPending, { passive: true })
    window.addEventListener('touchstart', cancelPending, { passive: true })
    window.addEventListener('keydown', cancelPending)
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('scrollend', finishNavigation)
      window.removeEventListener('resize', schedule)
      window.removeEventListener('wheel', cancelPending)
      window.removeEventListener('touchstart', cancelPending)
      window.removeEventListener('keydown', cancelPending)
      if (pendingTimeoutRef.current !== null) window.clearTimeout(pendingTimeoutRef.current)
      cancelAnimationFrame(frame)
    }
  }, [visibleSections, projectId])

  function goToSection(event: MouseEvent<HTMLAnchorElement>, id: string) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    const section = document.getElementById(id)
    if (!section) return
    event.preventDefault()
    const mobile = window.matchMedia('(max-width: 760px)').matches
    const headerHeight = mobile ? document.querySelector('.mobile-header')?.getBoundingClientRect().height ?? 0 : 0
    const navTop = mobile ? headerHeight + 8 : 12
    const navHeight = navRef.current?.getBoundingClientRect().height ?? 0
    const top = window.scrollY + section.getBoundingClientRect().top - navTop - navHeight - 16
    window.history.pushState(null, '', `#${id}`)
    if (pendingTimeoutRef.current !== null) window.clearTimeout(pendingTimeoutRef.current)
    pendingActiveRef.current = id
    pendingScrollTopRef.current = Math.max(0, Math.min(top, document.documentElement.scrollHeight - window.innerHeight))
    setActive(id)
    window.scrollTo({ top, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
    pendingTimeoutRef.current = window.setTimeout(() => {
      pendingActiveRef.current = null
      pendingTimeoutRef.current = null
    }, 1800)
  }

  return (
    <nav className={`case-navigation${projectId === 'concepts' ? ' case-navigation--concepts' : ''}`} aria-label="Разделы проекта" ref={navRef}>
      <Link className="icon-action back-link" to="/" aria-label="На главную" title="На главную">
        <span className="icon-motion"><Icon name="back" /></span>
      </Link>
      <LayoutGroup id={`case-navigation-${projectId}`}>
        <div className="case-section-links segmented-group" ref={groupRef}>
          {visibleSections.map(section => (
            <a key={section.id} href={`#${section.id}`} aria-current={active === section.id ? 'location' : undefined}
              onClick={event => goToSection(event, section.id)}>
              {active === section.id && (
                <motion.div
                  className="section-active-marker"
                  layoutId="activeTab"
                  aria-hidden="true"
                  transition={reducedMotion ? { duration: 0 } : { type: 'tween', duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
              <span className="section-link-label">{section.label}</span>
            </a>
          ))}
        </div>
      </LayoutGroup>
    </nav>
  )
}
