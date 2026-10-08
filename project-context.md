This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
````
.github/
  workflows/
    deploy.yml
public/
  cases/
    astoria/
      1.png
      2.png
      3.png
      4.png
      5.png
      6.png
      7.png
      8.png
      Обложка.png
    atlyx/
      1.png
      10.png
      11.png
      12.png
      13.png
      14.png
      15.png
      2.png
      3.png
      4.png
      5.png
      6.png
      7.png
      8.png
      9.png
      Обложка.png
    concept/
      1.mp4
      2.mp4
      3.mp4
      4.mp4
      5.mp4
      6.mp4
      Обложка.png
      poster-1.webp
      poster-2.webp
      poster-3.webp
      poster-4.webp
      poster-5.webp
      poster-6.webp
    partner-portal/
      10.1.png
      10.2.png
      10.png
      11.1.png
      11.png
      2.1.png
      2.png
      3.1.png
      3.png
      4.png
      5.1.png
      5.2.png
      5.png
      6.1.png
      6.2.png
      6.png
      7.1.png
      7.png
      8.1.png
      8.png
      9.1.png
      9.png
      Обложка.png
      As Is - 1.1.png
      As Is - 1.2.png
      As Is - 1.png
      Mob - 12.png
      Mob - 13.png
      Mob - 14.png
    skywallet/
      1.png
      13.png
      14.png
      15.png
      16.png
      2.png
      3.png
      4.png
      5.png
      6.png
      7.png
      8.png
      Обложка.png
      CEX - 10.png
      CEX - 11.png
      CEX - 12.png
      CEX - 9.png
    womens-health/
      1.png
      10.png
      11.png
      12.png
      13.png
      14.png
      2.png
      3.png
      4.png
      5.png
      6.png
      7.png
      8.png
      9.png
      Обложка.png
    avatar.jpg
    contact-portrait.jpg
  fonts/
    onest-cyrillic-variable.woff2
    onest-latin-variable.woff2
    Onest-OFL.txt
  icons/
    favicon/
      Logo 180 — Light — Idea.png
      Logo 64 — Dark.svg
      Logo 64 — Light.svg
    job/
      Изображение ChatGPT 1 окт. 2026 г., 01_11_09.png
      Юкки.webp
      Contented.png
      Make_Difference.jpg
      SkyCapital_Group.svg
    tools/
      chatgpt.svg
      claude.svg
      Confluence.svg
      cursor.svg
      figma.svg
      google-analytics.svg
      jira-3.svg
      miro.svg
      notion.svg
      principle-app-2.svg
      protopie.svg
      yandex-metrica.svg
    curious-researcher-trophy.svg
    list-asterisk.svg
  hh-logo.svg
src/
  components/
    .gitkeep
    ArrowIcon.tsx
    CaseCursor.tsx
    CaseDiagram.tsx
    CaseHeader.tsx
    CaseMediaStage.tsx
    CaseThanks.tsx
    CaseVisual.tsx
    ContactLinks.tsx
    DiagramWires.tsx
    Footer.tsx
    HomeCanvas.tsx
    Icon.tsx
    MetaSeparatedText.tsx
    MobileHeader.tsx
    ProfileSidebar.tsx
    ProjectCard.tsx
    ProjectCover.tsx
    SceneSurface.tsx
    ScrollReveals.tsx
    SegmentedControl.tsx
    VisualCaption.tsx
  data/
    .gitkeep
    caseContent.ts
    caseDiagramModes.ts
    caseDocuments.json
    caseImages.ts
    caseImageSizes.json
    caseVisuals.ts
    portfolio.ts
  hooks/
    useAnalyticsTracking.ts
    useGroupedRows.ts
  lib/
    analytics.ts
    canvasNavigation.ts
    publicAsset.ts
  pages/
    ConceptCasePage.tsx
    CopyrightPage.tsx
    ExperiencePage.tsx
    ProjectPage.tsx
  sections/
    .gitkeep
    Work.tsx
  styles/
    globals.css
    homeCanvas.css
    reset.css
    tokens.css
  types/
    analytics.d.ts
  App.tsx
  main.tsx
.env.example
.gitignore
.oxlintrc.json
AGENTS.md
index.html
package.json
README.md
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
````

# Files

## File: public/icons/favicon/Logo 64 — Dark.svg
````xml
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="64" height="64" rx="20" fill="#F7F7F7"/>
<path d="M29.4747 11.0318C30.2786 10.9264 31.4202 11.1037 32.2297 11.2612C35.4132 11.8807 38.5349 14.3088 40.2756 17.0552C42.6496 14.8287 46.4349 13.6749 49.0598 16.1577C50.0848 17.1119 50.6794 18.448 50.7049 19.8559C50.7501 21.301 50.2218 22.7043 49.2371 23.7537C48.0561 24.995 46.2098 25.586 44.5414 25.6093C41.7592 25.648 38.436 23.723 36.3498 21.9519C35.4872 21.2198 34.7031 20.4025 33.9083 19.6076C33.2824 19.0017 32.6239 18.4718 31.7196 18.5114C30.6386 18.5374 29.7187 19.1773 29.7933 20.3752C29.9086 22.2257 31.8593 22.952 33.3221 23.5008C34.0488 23.7734 34.7696 24.049 35.4904 24.3262C37.9435 25.2675 40.3847 26.2405 42.8136 27.2448C45.6875 28.4365 48.5105 29.3955 50.8625 31.5292C53.3676 33.8025 54.8619 37.5446 54.9937 40.9034C55.1031 43.7014 53.7816 46.9626 51.9085 49.0137C49.4806 51.6724 46.419 52.8391 42.8889 52.9865C39.9252 53.1105 37.5741 52.3732 34.9685 51.0111C32.9582 49.9599 31.6815 49.0767 30.0118 47.5397C27.2634 44.8599 25.1568 41.8078 23.7628 38.2079C23.4328 37.3561 23.0931 36.3802 22.876 35.4899C21.535 37.7149 19.4046 38.9808 16.8304 39.1948C14.8802 39.3472 13.0737 38.7276 11.6048 37.4383C8.44671 34.6742 8.10151 30.0889 10.8916 26.9345C14.7202 22.606 21.5763 24.222 25.1996 27.9392C26.4243 29.1956 27.4565 30.6022 28.4867 32.0176C29.466 33.363 30.2845 34.764 31.571 35.8481C33.1351 37.2004 34.7715 38.0963 36.7176 38.7674C37.7601 39.142 38.7499 39.3968 39.8703 39.356C41.6474 39.2907 43.0565 37.6761 42.9147 35.8856C42.821 34.7052 42.0033 33.8394 41.1504 33.0903C39.465 31.6101 37.7023 30.8625 35.6089 30.1402C34.611 29.7947 33.6021 29.4815 32.5841 29.2011C31.6209 28.94 30.5022 28.7244 29.5736 28.3602C26.0972 26.9965 21.6945 24.191 21.3409 20.0662C21.0352 16.5003 23.6959 12.8079 26.9408 11.5958C27.8149 11.2693 28.5521 11.1089 29.4747 11.0318Z" fill="#202020"/>
</svg>
````

## File: public/icons/favicon/Logo 64 — Light.svg
````xml
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="64" height="64" rx="20" fill="#202020"/>
<path d="M29.4747 11.0318C30.2786 10.9264 31.4202 11.1037 32.2297 11.2612C35.4132 11.8807 38.5349 14.3088 40.2756 17.0552C42.6496 14.8287 46.4349 13.6749 49.0598 16.1577C50.0848 17.1119 50.6794 18.448 50.7049 19.8559C50.7501 21.301 50.2218 22.7043 49.2371 23.7537C48.0561 24.995 46.2098 25.586 44.5414 25.6093C41.7592 25.648 38.436 23.723 36.3498 21.9519C35.4872 21.2198 34.7031 20.4025 33.9083 19.6076C33.2824 19.0017 32.6239 18.4718 31.7196 18.5114C30.6386 18.5374 29.7187 19.1773 29.7933 20.3752C29.9086 22.2257 31.8593 22.952 33.3221 23.5008C34.0488 23.7734 34.7696 24.049 35.4904 24.3262C37.9435 25.2675 40.3847 26.2405 42.8136 27.2448C45.6875 28.4365 48.5105 29.3955 50.8625 31.5292C53.3676 33.8025 54.8619 37.5446 54.9937 40.9034C55.1031 43.7014 53.7816 46.9626 51.9085 49.0137C49.4806 51.6724 46.419 52.8391 42.8889 52.9865C39.9252 53.1105 37.5741 52.3732 34.9685 51.0111C32.9582 49.9599 31.6815 49.0767 30.0118 47.5397C27.2634 44.8599 25.1568 41.8078 23.7628 38.2079C23.4328 37.3561 23.0931 36.3802 22.876 35.4899C21.535 37.7149 19.4046 38.9808 16.8304 39.1948C14.8802 39.3472 13.0737 38.7276 11.6048 37.4383C8.44671 34.6742 8.10151 30.0889 10.8916 26.9345C14.7202 22.606 21.5763 24.222 25.1996 27.9392C26.4243 29.1956 27.4565 30.6022 28.4867 32.0176C29.466 33.363 30.2845 34.764 31.571 35.8481C33.1351 37.2004 34.7715 38.0963 36.7176 38.7674C37.7601 39.142 38.7499 39.3968 39.8703 39.356C41.6474 39.2907 43.0565 37.6761 42.9147 35.8856C42.821 34.7052 42.0033 33.8394 41.1504 33.0903C39.465 31.6101 37.7023 30.8625 35.6089 30.1402C34.611 29.7947 33.6021 29.4815 32.5841 29.2011C31.6209 28.94 30.5022 28.7244 29.5736 28.3602C26.0972 26.9965 21.6945 24.191 21.3409 20.0662C21.0352 16.5003 23.6959 12.8079 26.9408 11.5958C27.8149 11.2693 28.5521 11.1089 29.4747 11.0318Z" fill="#F7F7F7"/>
</svg>
````

## File: public/hh-logo.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128"><path d="M64 128c35.348 0 64-28.652 64-64S99.348 0 64 0 0 28.652 0 64s28.652 64 64 64m0 0" style="stroke:none;fill-rule:nonzero;fill:#ff0002;fill-opacity:1"/><path d="M95.137 54.559c-1.938-1.996-4.688-3.086-8.047-3.086-4.176 0-7.387 1.695-9.23 4.87V40.579h-9.684V83.79h9.683V68.598c0-3.54.727-5.809 1.817-7.141 1.058-1.332 2.539-1.844 4.144-1.844 1.422 0 2.543.453 3.328 1.27.79.847 1.243 2.148 1.243 3.965v18.914h9.683v-20.82c0-3.54-1.031-6.415-2.937-8.383M51.836 51.473c-4.176 0-7.383 1.695-9.23 4.87V40.579h-9.684V83.79h9.683V68.598c0-3.54.727-5.809 1.817-7.141 1.058-1.332 2.543-1.844 4.144-1.844 1.422 0 2.543.453 3.329 1.27.789.847 1.242 2.148 1.242 3.965v18.914h9.683v-20.82c0-3.54-1.027-6.415-2.965-8.415-1.906-1.996-4.66-3.054-8.02-3.054m0 0" style="stroke:none;fill-rule:nonzero;fill:#fff;fill-opacity:1"/></svg>
````

## File: src/components/CaseCursor.tsx
````typescript
import { useEffect, useState } from 'react'
import type { PointerEvent, ReactNode } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

/** The entire cover owns one continuous hover zone, including its caption and whitespace. */
export function CaseCursor({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(false)
  const reduced = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const smoothX = useSpring(x, { stiffness: 400, damping: 35 })
  const smoothY = useSpring(y, { stiffness: 400, damping: 35 })
  useEffect(() => {
    const reset = () => {
      setVisible(false)
      x.jump(0); y.jump(0)
      smoothX.jump(0); smoothY.jump(0)
    }
    window.addEventListener('resize', reset)
    return () => window.removeEventListener('resize', reset)
  }, [x, y, smoothX, smoothY])
  function follow(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== 'mouse' || !window.matchMedia('(min-width: 1101px) and (hover: hover) and (pointer: fine)').matches) return
    const bounds = event.currentTarget.getBoundingClientRect()
    const left = Math.max(8, Math.min(event.clientX - bounds.left + 16, bounds.width - 152))
    const top = Math.max(8, Math.min(event.clientY - bounds.top + 16, bounds.height - 64))
    x.set(left); y.set(top)
    if (!visible) { smoothX.jump(left); smoothY.jump(top) }
    setVisible(true)
  }
  function leave() { setVisible(false) }
  return <div className="case-cursor-surface" data-cursor={visible} onPointerEnter={follow} onPointerMove={follow} onPointerLeave={leave} onPointerCancel={leave}>
    {children}
    <motion.span className="case-cursor" aria-hidden="true" style={{ x: reduced ? x : smoothX, y: reduced ? y : smoothY }}>
      <motion.span initial={false} animate={{ opacity: visible ? 1 : 0, transform: reduced ? 'scale(1)' : `scale(${visible ? 1 : .94})` }} transition={{ duration: .12, ease: [.22, 1, .36, 1] }}>Смотреть кейс</motion.span>
    </motion.span>
  </div>
}
````

## File: src/components/CaseHeader.tsx
````typescript
import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, useScroll } from 'framer-motion'
import { projects } from '../data/portfolio'
import { getCaseNavigationSections } from '../data/caseContent'
import { navigateToSection } from '../lib/canvasNavigation'
import { TelegramLink } from './ContactLinks'
import { ArrowIcon } from './ArrowIcon'

export function CaseHeader() {
  const { pathname, search } = useLocation()
  const project = projects.find(item => pathname === `/projects/${item.id}`)
  const short = new URLSearchParams(search).get('version') === 'short'
  const sections = useMemo(() => project ? getCaseNavigationSections(project, short) : [], [project, short])
  const [active, setActive] = useState('overview')
  const { scrollYProgress } = useScroll({ trackContentSize: true })

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const line = (document.querySelector('.case-site-header')?.getBoundingClientRect().bottom ?? 0) + 24
      let current = sections[0]?.id ?? ''
      for (const section of sections) {
        const target = document.getElementById(section.id)
        if (target && target.getBoundingClientRect().top <= line) current = section.id
      }
      if (window.scrollY + innerHeight >= document.documentElement.scrollHeight - 2)
        current = sections.at(-1)?.id ?? current
      setActive(current)
    }
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    const observer = new ResizeObserver(schedule)
    observer.observe(document.body)
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [sections])

  function goTo(id: string) {
    const target = document.getElementById(id)
    if (!target) return
    window.history.pushState(null, '', `#${id}`)
    navigateToSection(target)
  }

  return <>
    <motion.div className="case-reading-progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />
    <header className="site-header case-site-header">
      <div className="case-header-controls">
        <Link className="button case-header-back" to="/#work"><ArrowIcon direction="left" decorative />Назад</Link>
        <nav className="case-header-anchors" aria-label="Разделы проекта">
          {sections.map(section => <a key={section.id} href={`#${section.id}`}
            aria-current={active === section.id ? 'location' : undefined}
            onClick={event => {
              if (event.button || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return
              event.preventDefault()
              goTo(section.id)
            }}>{section.label}</a>)}
        </nav>
        <select className="case-header-select" aria-label="Разделы кейса" value={active}
          onChange={event => goTo(event.target.value)}>
          {sections.map(section => <option key={section.id} value={section.id}>{section.label}</option>)}
        </select>
        <TelegramLink location="case-header" label="TG" />
      </div>
    </header>
  </>
}
````

## File: src/components/CaseMediaStage.tsx
````typescript
import type { ReactNode } from 'react'

/** Shared outer presentation only. Original screen artwork is never masked or reframed. */
export function CaseMediaStage({ children }: { children: ReactNode }) {
  return <div className="case-media-stage">{children}</div>
}
````

## File: src/components/ContactLinks.tsx
````typescript
import { profile } from '../data/portfolio'
import { trackEvent } from '../lib/analytics'
import { Icon } from './Icon'
import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { publicAsset } from '../lib/publicAsset'

export function TelegramLink({ location, compact = false, label = 'Написать в Telegram', showIcon = true }: { location: string; compact?: boolean; label?: string; showIcon?: boolean }) {
  return <a className={`button telegram-link${compact ? ' telegram-link--compact' : ''}`} href={profile.telegram} target="_blank" rel="noreferrer"
    aria-label="Написать в Telegram" onClick={() => {
      trackEvent('contact_click', { location })
      trackEvent('telegram_click', { location })
    }}>{showIcon && <Icon name="telegram" />}<span>{label}</span></a>
}

export function ContactLinks({ location, resume = true }: { location: string; resume?: boolean }) {
  return <nav className="contact-links" aria-label="Профили и контакты">
    {resume && <a href={profile.cv} target="_blank" rel="noreferrer" onClick={() => trackEvent('resume_click', { location })}><Icon name="document" />Резюме</a>}
    <a href={profile.linkedin} target="_blank" rel="noreferrer" onClick={() => trackEvent('linkedin_click', { location })}><Icon name="linkedin" />LinkedIn</a>
    <a href={profile.email} onClick={() => trackEvent('email_click', { location })}><Icon name="mail" />Почта</a>
  </nav>
}

export function SocialIconLinks({ location, first = 'telegram' }: { location: string; first?: 'telegram' | 'hh' }) {
  const reduced = useReducedMotion()
  const [canHover, setCanHover] = useState(false)
  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setCanHover(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])
  const interaction = {
    whileHover: canHover && !reduced ? { y: -3, scale: 1.06 } : undefined,
    whileTap: !reduced ? { y: 0, scale: .98 } : undefined,
    transition: { type: 'spring' as const, stiffness: 450, damping: 30 },
  }
  return <nav className="social-icon-links" aria-label="Социальные сети и почта">
    {first === 'hh' ? <motion.a {...interaction} className="social-icon-link social-icon-link--hh" href={profile.hh} target="_blank" rel="noreferrer" aria-label="Резюме на HH.ru" title="HH.ru"
      onClick={() => trackEvent('resume_click', { location, source: 'hh' })}><img src={publicAsset('hh-logo.svg')} alt="" width="56" height="56" /></motion.a> : <motion.a {...interaction} className="social-icon-link social-icon-link--telegram" href={profile.telegram} target="_blank" rel="noreferrer" aria-label="Написать в Telegram" title="Telegram"
      onClick={() => {
        trackEvent('contact_click', { location })
        trackEvent('telegram_click', { location })
      }}><Icon name="telegram" /></motion.a>}
    <motion.a {...interaction} className="social-icon-link social-icon-link--linkedin" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"
      onClick={() => trackEvent('linkedin_click', { location })}><Icon name="linkedin" /></motion.a>
    <motion.a {...interaction} className="social-icon-link social-icon-link--email" href={profile.email} aria-label="Написать на почту" title="Почта"
      onClick={() => trackEvent('email_click', { location })}><Icon name="mail" /></motion.a>
  </nav>
}
````

## File: src/components/HomeCanvas.tsx
````typescript
import { useLayoutEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { ProfileContact, ProfileHero } from './ProfileSidebar'
import { Work } from '../sections/Work'
import { canvasPanelOffset, navigateToSection, scrollToCanvasTarget } from '../lib/canvasNavigation'

type CanvasPanel = { element: HTMLElement; label: string; offset: number }

function nearestPanel(panels: CanvasPanel[], offset: number) {
  return panels.reduce((nearest, panel, index) =>
    Math.abs(panel.offset - offset) < Math.abs(panels[nearest].offset - offset) ? index : nearest, 0)
}

/** Scroll remains native: no wheel interception, artificial inertia or snapping. */
export function HomeCanvas() {
  const root = useRef<HTMLElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const [horizontal, setHorizontal] = useState(false)
  const [height, setHeight] = useState<number>()
  const [activePanel, setActivePanel] = useState(0)
  const [panels, setPanels] = useState<CanvasPanel[]>([])
  const panelPositions = useRef<CanvasPanel[]>([])
  const reduced = useReducedMotion()
  const location = useLocation()
  const positioned = useRef(false)
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
    const element = track.current
    if (!element) return
    const measure = () => {
      const travel = horizontal ? Math.max(0, element.scrollWidth - document.documentElement.clientWidth) : 0
      start.set(window.scrollY + (root.current?.getBoundingClientRect().top ?? 0))
      distance.set(travel)
      const measured = Array.from(element.querySelectorAll<HTMLElement>('[data-canvas-panel]')).map(panel => {
        const heading = panel.querySelector<HTMLElement>('h1, h2')
        const label = panel.getAttribute('aria-label') ?? heading?.getAttribute('aria-label') ?? heading?.innerText.replace(/\s+/g, ' ').trim() ?? ''
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
  }, [horizontal, distance, start])

  useLayoutEffect(() => {
    if (!horizontal) { positioned.current = false; return }
    if (positioned.current || !height) return
    positioned.current = true
    if (!horizontal || !height || !location.hash) return
    const target = document.getElementById(location.hash.slice(1))
    if (target) scrollToCanvasTarget(target)
  }, [horizontal, height, location.hash, location.key])

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
````

## File: src/components/ProjectCover.tsx
````typescript
import { useLayoutEffect, useRef, useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'
import { motion } from 'framer-motion'
import type { Project } from '../data/portfolio'

/** One measured caption flow and one artwork stage, shared by every cover. */
export function ProjectCover({ project, revealed, immediate, children }: {
  project: Project
  revealed: boolean
  immediate: boolean
  children: ReactNode
}) {
  const rootRef = useRef<HTMLDivElement>(null)
  const captionRef = useRef<HTMLDivElement>(null)
  const [reserved, setReserved] = useState(0)
  const [artworkInset, setArtworkInset] = useState(0)
  const [horizontal, setHorizontal] = useState(false)
  useLayoutEffect(() => {
    const root = rootRef.current
    const caption = captionRef.current
    if (!root || !caption) return
    const media = window.matchMedia('(min-width: 1101px) and (prefers-reduced-motion: no-preference)')
    const measure = () => {
      setReserved(caption.offsetHeight + 16)
      setHorizontal(media.matches)
      const dimensions = project.coverDimensions
      setArtworkInset(project.id === 'astoria' && dimensions
        ? Math.max(0, root.clientHeight - Math.min(root.clientHeight, root.clientWidth * dimensions.height / dimensions.width)) : 0)
    }
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(root)
    observer.observe(caption)
    media.addEventListener('change', measure)
    return () => { observer.disconnect(); media.removeEventListener('change', measure) }
  }, [project])
  const tags = [...project.tags, ...project.platform.split('·')]
    .flatMap(tag => tag.split('/').map(part => part.trim()))
    .filter(Boolean)
    .map(tag => tag[0].toLocaleUpperCase() + tag.slice(1))

  return <div className="project-cover" ref={rootRef} style={{ '--cover-reserved-height': `${reserved}px` } as CSSProperties}>
    <motion.div className="project-caption" ref={captionRef} initial={false}
      animate={{ opacity: revealed ? 1 : 0, transform: `translateY(${revealed ? 0 : 8}px)` }}
      transition={{ duration: immediate ? 0 : .22, ease: [.22, 1, .36, 1] }}>
      <div className="project-labels"><div className="project-tags">
        {tags.map(tag => <span className="chip" key={tag}>{tag}</span>)}
      </div></div>
      <h2 id={`${project.id}-title`}>{project.title}</h2>
    </motion.div>
    <div className="project-cover-stage">
      <motion.div className="project-cover-visual" initial={false}
        animate={{ transform: `translateY(${revealed && horizontal ? project.id === 'astoria' ? Math.max(32, reserved - artworkInset) : reserved / 2 : 0}px)` }}
        transition={immediate ? { duration: 0 } : { type: 'spring', stiffness: 320, damping: 34 }}>
        {children}
      </motion.div>
    </div>
  </div>
}
````

## File: src/components/SceneSurface.tsx
````typescript
/** Large adjoining fields form one scene; they contain no product UI. */
export function SceneSurface({ single = false }: { single?: boolean }) {
  return <div className={`scene-surface${single ? ' scene-surface--single' : ''}`} aria-hidden="true">{(single ? [0] : [0, 1, 2, 3]).map(index => <span key={index} />)}</div>
}
````

## File: src/lib/canvasNavigation.ts
````typescript
/** Shared destination for both pagination tracking and native scroll navigation. */
export function canvasPanelOffset(panel: HTMLElement, track: HTMLElement) {
  const distance = Math.max(0, track.scrollWidth - document.documentElement.clientWidth)
  const inset = parseFloat(getComputedStyle(track).paddingLeft) || 0
  return Math.max(0, Math.min(panel.offsetLeft - inset, distance))
}

/** Native vertical scroll coordinates for a panel on the horizontal home canvas. */
export function scrollToCanvasTarget(target: Element, behavior: ScrollBehavior = 'instant') {
  const canvas = target.closest<HTMLElement>('.home-canvas[data-horizontal="true"]')
  const track = canvas?.querySelector<HTMLElement>('.canvas-track')
  if (!canvas || !track) return false
  const panel = target.closest<HTMLElement>('[data-canvas-panel]') ?? target.querySelector<HTMLElement>('[data-canvas-panel]')
  const offset = panel ? canvasPanelOffset(panel, track) : 0
  const top = window.scrollY + canvas.getBoundingClientRect().top + offset
  scrollToPosition(top, behavior)
  return true
}

/** One navigation path for header anchors and pagination, on both layouts. */
export function navigateToSection(target: Element, behavior: ScrollBehavior = 'smooth') {
  if (scrollToCanvasTarget(target, behavior)) return
  const headerHeight = document.querySelector('.site-header')?.getBoundingClientRect().height ?? 0
  scrollToPosition(window.scrollY + target.getBoundingClientRect().top - headerHeight - 16, behavior)
}
import { animate } from 'framer-motion'

let cancelNavigation: (() => void) | undefined

export function cancelSectionNavigation() {
  cancelNavigation?.()
}

function scrollToPosition(top: number, behavior: ScrollBehavior) {
  cancelSectionNavigation()
  const destination = Math.max(0, Math.min(top, document.documentElement.scrollHeight - window.innerHeight))
  if (behavior !== 'smooth' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.scrollTo({ top: destination, behavior: 'instant' })
    return
  }
  const cleanup = () => {
    window.removeEventListener('wheel', interrupt)
    window.removeEventListener('touchstart', interrupt)
    window.removeEventListener('pointerdown', interrupt)
    window.removeEventListener('keydown', onKey)
    if (cancelNavigation === interrupt) cancelNavigation = undefined
  }
  const animation = animate(window.scrollY, destination, {
    duration: .65,
    ease: [.22, 1, .36, 1],
    onUpdate: value => window.scrollTo({ top: value, behavior: 'instant' }),
    onComplete: cleanup,
  })
  function interrupt() { animation.stop(); cleanup() }
  function onKey(event: KeyboardEvent) {
    if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', 'Escape', ' '].includes(event.key)) interrupt()
  }
  cancelNavigation = interrupt
  window.addEventListener('wheel', interrupt, { passive: true })
  window.addEventListener('touchstart', interrupt, { passive: true })
  window.addEventListener('pointerdown', interrupt, { passive: true })
  window.addEventListener('keydown', onKey)
}
````

## File: src/pages/ExperiencePage.tsx
````typescript
import { useEffect } from 'react'
import { ExperienceContent, ProfileContact } from '../components/ProfileSidebar'
import { profile } from '../data/portfolio'

export function ExperiencePage() {
  useEffect(() => { document.title = `Опыт — ${profile.name}` }, [])
  return <div className="home-shell experience-page">
    <main id="main-content" className="portfolio-content" tabIndex={-1}>
      <ExperienceContent />
      <ProfileContact />
    </main>
  </div>
}
````

## File: src/styles/homeCanvas.css
````css
/* The home page is one continuous sequence of large scenes. */
.home-canvas { position: relative; width: 100%; }
.canvas-viewport { width: min(calc(100% - 48px), 1440px); margin-inline: auto; }
.canvas-track { min-width: 0; }
.site-header.site-header--home { position: fixed; width: 100%; }
.home-canvas[data-horizontal='false'] { padding-top: var(--header-height); padding-bottom: 32px; }
.home-canvas .profile-hero { margin-top: 0; gap: 0; }
.home-canvas .hero-copy {
  --social-group-surface: var(--scene-light);
  container-type: inline-size;
  padding: 36px;
  border-radius: var(--radius-scene);
  background: var(--scene-light);
  justify-content: flex-start;
}
.home-canvas .hero-identity { font-size: 18px; color: var(--color-text); gap: 6px; }
.home-canvas .hero-location { margin-top: 18px; font-size: 18px; color: var(--color-muted); }
.home-canvas .profile-role {
  font-size: clamp(24px, 8.5cqi, 56px);
  line-height: 1.08;
  letter-spacing: -.045em;
  margin: auto 0;
  padding-block: 24px;
}
.home-canvas .hero-headline-line { display: block; white-space: nowrap; }
.home-canvas .hero-links .social-icon-links { margin-top: 16px; }
.home-canvas .hero-visual { min-height: 0; background: var(--scene-muted); border-radius: var(--radius-scene); }
.home-canvas .profile-avatar { width: 100%; height: 100%; border-radius: inherit; }
.home-canvas #work { margin-top: 24px; }
.home-canvas .project-list { gap: 16px; }
.home-canvas .project-link {
  position: relative;
  isolation: isolate;
  display: block;
  border-radius: var(--radius-scene);
}
.project-cover {
  --cover-top-padding: clamp(60px, calc(6dvh + 12px), 76px);
  --cover-text-padding: 40px;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: auto minmax(0, 1fr);
  align-items: stretch;
  height: 100%;
  min-width: 0;
  border-radius: inherit;
}
.project-caption { grid-column: 1; grid-row: 1; z-index: 2; padding-top: var(--cover-top-padding); }
.project-cover-stage { grid-column: 1; grid-row: 1 / -1; display: flex; align-items: center; min-width: 0; min-height: 0; }
.project-cover-visual { width: 100%; height: max(0px, calc(100% - var(--cover-reserved-height))); min-width: 0; }
.scene-surface {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));
  z-index: -1;
  pointer-events: none;
}
.scene-surface > span { background: var(--scene-light); border-radius: var(--radius-scene); }
.scene-surface--single { grid-template-columns: 1fr; grid-template-rows: 1fr; }
.project-caption {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-auto-rows: auto;
  justify-items: center;
  align-items: start;
  text-align: center;
  padding-inline: var(--cover-text-padding);
  gap: var(--space-3);
  min-width: 0;
  max-width: 100%;
}
.project-caption > * { min-width: 0; margin: 0; }
.home-canvas .project-labels { width: 100%; justify-content: center; }
.home-canvas .project-tags { justify-content: center; column-gap: 8px; row-gap: 4px; max-width: 100%; }
.project-caption h2 {
  font-size: clamp(30px, 2.6vw, 48px);
  line-height: 1.12;
  letter-spacing: -.05em;
  max-width: min(24ch, 100%);
  font-weight: var(--weight-regular);
  overflow-wrap: normal;
}
.home-canvas .project-media { height: 100%; min-height: 0; border-radius: inherit; }
.home-canvas .case-cursor-surface { height: 100%; min-height: 0; border-radius: var(--radius-scene); }
.home-canvas .project-artwork { height: 100%; display: flex; align-items: center; justify-content: center; background: transparent; border-radius: inherit; }
.home-canvas .project-artwork img { width: 100%; height: 100%; object-fit: contain; object-position: center; border-radius: inherit; }
.home-canvas[data-horizontal='true'] [data-project='astoria'] .project-link { overflow: clip; }
.home-canvas[data-horizontal='true'] [data-project='astoria'] .project-cover-visual { height: 100%; }
.home-canvas[data-horizontal='true'] [data-project='astoria'] .project-artwork img { object-position: center bottom; }
.home-canvas .contacts-section {
  --social-group-surface: var(--scene-muted);
  container-type: inline-size;
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: 1fr auto;
  align-items: start;
  gap: 24px;
  padding: 36px;
  margin-top: 16px;
  border-radius: var(--radius-scene);
  background: var(--scene-muted);
}
.home-canvas .contact-copy { position: relative; z-index: 1; }
.home-canvas .contacts-section h2 { font-size: clamp(28px, 12cqi, 80px); white-space: nowrap; line-height: 1.02; letter-spacing: -.055em; margin-bottom: 28px; }
.home-canvas .contact-actions { display: flex; flex-direction: column; align-items: flex-start; gap: 20px; }
.home-canvas .contact-actions .contact-links { margin-top: 0; }
.contact-signature { position: absolute; left: 36px; bottom: 100px; font-size: clamp(64px, 6.5vw, 124px); letter-spacing: -.065em; line-height: 1; color: var(--color-text); }
.contact-portrait { position: absolute; right: 36px; bottom: 70px; width: 25%; height: 40%; object-fit: cover; object-position: 50% 40%; border-radius: var(--radius-media); }
.home-canvas .contacts-section .site-footer { position: relative; z-index: 1; margin: 0; grid-column: 1; }
.profile-about {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
  padding: 36px;
  border-radius: var(--radius-scene);
  background: var(--color-dark);
  color: var(--color-on-dark);
}
.about-statement {
  max-width: 100%;
  font-size: clamp(30px, 2.3vw, 44px);
  font-weight: var(--weight-regular);
  line-height: 1.05;
  letter-spacing: -.045em;
  text-wrap: pretty;
}
.about-statement span { color: var(--color-muted-on-dark); }
.about-principles {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-6) var(--space-8);
  margin-top: auto;
}
.about-principle { min-width: 0; }
.about-principle h3 { font-size: 20px; font-weight: var(--weight-medium); line-height: 1.2; margin-bottom: var(--space-2); }
.about-principle p { max-width: 39ch; font-size: var(--type-caption); line-height: 1.4; color: var(--color-muted-on-dark); }
.about-bottom { display: flex; flex-direction: column; align-items: flex-start; gap: var(--space-2); }
.about-tool-chips { display: flex; flex-wrap: wrap; gap: 6px; list-style: none; padding: 0; margin: 0; }
.about-tool-chips li {
  min-height: 36px;
  padding: 8px 14px;
  border-radius: var(--radius-navigation);
  background: var(--color-action-hover);
  font-size: 14px;
  font-weight: var(--weight-medium);
  line-height: 1.4;
}
@media (min-width: 1101px) {
  .home-canvas .about-tool-chips li { padding-block: 13px; }
}

.home-canvas[data-horizontal='true'] .canvas-viewport {
  position: sticky;
  top: 0;
  width: 100%;
  height: 100dvh;
  padding: var(--header-height) 0 max(0px, calc(100dvh - var(--header-height) - var(--canvas-scene-height)));
  margin: 0;
  overflow: clip;
}
.home-canvas[data-horizontal='true'] .canvas-track {
  position: relative;
  display: flex;
  align-items: stretch;
  gap: 10px;
  width: max-content;
  height: 100%;
  padding: 0 var(--canvas-gutter);
  will-change: transform;
}
.home-canvas[data-horizontal='true'] :is(#work, .project-list) { display: contents; }
.home-canvas[data-horizontal='true'] [data-canvas-panel] {
  flex: none;
  width: var(--canvas-scene-width);
  min-height: 0;
  height: 100%;
  margin: 0;
}
.home-canvas[data-horizontal='true'] .profile-hero {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: minmax(0, 1fr);
}
.home-canvas[data-horizontal='true'] .hero-copy { min-height: 0; }
.home-canvas[data-horizontal='true'] .project-link { height: 100%; }
.home-canvas[data-horizontal='true'] .contacts-section { min-height: 0; }
.canvas-zone-indicator {
  position: absolute;
  left: 50%;
  bottom: 7.4dvh;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 0;
  padding: 0 4px;
}
.canvas-zone-indicator::before {
  content: '';
  position: absolute;
  inset: 8px 0;
  border-radius: var(--radius-navigation);
  background: var(--scene-muted);
  pointer-events: none;
}
.canvas-zone-indicator button {
  position: relative;
  display: grid;
  place-items: center;
  width: 24px;
  height: 40px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
}
.canvas-zone-indicator span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-meta-separator);
  transition: background var(--duration-feedback) var(--ease-out);
}
.canvas-zone-indicator button[aria-current='step'] span { background: var(--color-text); }
.canvas-zone-indicator button:focus-visible { outline: 2px solid var(--color-text); outline-offset: -2px; }
@media (hover: hover) and (pointer: fine) {
  .canvas-zone-indicator button:not([aria-current]):hover span { background: var(--color-muted); }
}

@media (max-height: 700px) and (min-width: 1101px) {
  .home-canvas[data-horizontal='true'] .canvas-viewport { padding-bottom: 8dvh; }
  .home-canvas .hero-copy { padding: 24px; }
  .home-canvas .profile-role { padding-block: 12px; }
  .home-canvas .hero-identity { font-size: 16px; }
  .home-canvas .hero-links .social-icon-links { margin-top: 8px; }
  .project-cover { --cover-top-padding: 56px; --cover-text-padding: 24px; }
  .home-canvas .project-caption h2 { font-size: clamp(28px, 4.8vh, 40px); }
  .home-canvas .contacts-section { padding: 24px; gap: 16px; }
  .home-canvas .contacts-section h2 { margin-bottom: 20px; }
  .contact-signature { font-size: 72px; bottom: 70px; }
  .contact-portrait { bottom: 60px; }
  .profile-about { padding: 24px; gap: 16px; }
  .about-statement { font-size: 26px; }
  .about-tool-chips li { min-height: 32px; padding-block: 6px; }
  .home-canvas .about-tool-chips li { padding-block: 10px; }
  .about-principles { gap: 16px 24px; }
  .about-principle h3 { font-size: 18px; margin-bottom: 4px; }
  .about-bottom { gap: 4px; }
  .canvas-zone-indicator { bottom: 2dvh; }
}
@media (max-width: 1100px), (prefers-reduced-motion: reduce) {
  .home-canvas .profile-hero { min-height: 520px; grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .home-canvas .profile-role { font-size: clamp(28px, 9cqi, 56px); }
  .home-canvas .hero-headline-line { white-space: normal; }
  .home-canvas .project-cover { min-height: 600px; }
  .project-cover-stage { grid-row: 2; padding-top: 24px; }
  .project-cover-visual { height: 100%; }
  .home-canvas .project-artwork img { width: 100%; height: auto; max-height: 640px; }
  .home-canvas .contacts-section { min-height: 600px; }
  .profile-about { min-height: 600px; }
}
@media (max-width: 760px) {
  .canvas-viewport { width: calc(100% - 24px); }
  .home-canvas .profile-hero { min-height: 0; grid-template-columns: minmax(0, 1fr); }
  .home-canvas .hero-copy { min-height: 440px; padding: 24px; }
  .home-canvas .profile-role { font-size: clamp(28px, 9cqi, 44px); margin-block: 24px; padding: 0; }
  .home-canvas .hero-visual { aspect-ratio: 4 / 5; }
  .project-cover { --cover-top-padding: 52px; --cover-text-padding: 24px; }
  .home-canvas .project-cover { min-height: 0; grid-template-rows: auto auto; }
  .home-canvas .project-caption h2 { font-size: clamp(28px, 7.5vw, 40px); }
  .home-canvas .project-artwork { height: auto; }
  .home-canvas .project-artwork img { height: auto; }
  .home-canvas .contacts-section { min-height: 680px; padding: 24px; }
  .contact-signature { left: 24px; bottom: 160px; font-size: 44px; }
  .contact-portrait { right: 24px; bottom: 100px; height: 140px; width: 100px; border-radius: var(--radius-content-card); }
  .home-canvas .contact-actions .contact-links { gap: 8px; }
  .home-canvas .contact-actions .contact-links a { padding-inline: 8px; gap: 4px; }
  .home-canvas .contact-actions .contact-links .icon { width: 18px; height: 18px; }
  .profile-about { min-height: 0; padding: 28px 24px; gap: 24px; }
  .about-statement { font-size: clamp(28px, 7.5vw, 36px); }
  .about-principles { grid-template-columns: minmax(0, 1fr); gap: var(--space-6); margin-top: 8px; }
  .home-canvas .contacts-section .site-footer { flex-direction: row; align-items: center; gap: 12px; }
}
````

## File: .github/workflows/deploy.yml
````yaml
name: Deploy portfolio to GitHub Pages

on:
  push:
    branches: [master]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: github-pages
  cancel-in-progress: true

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run lint
      - run: npm run build
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v4
        with:
          path: dist
      - id: deployment
        uses: actions/deploy-pages@v4
````

## File: public/fonts/Onest-OFL.txt
````
Copyright 2021 The Onest Project Authors (https://github.com/googlefonts/onest)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://scripts.sil.org/OFL


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.
````

## File: public/icons/job/SkyCapital_Group.svg
````xml
<svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="120" height="120" rx="20" fill="#01B2FD"/>
<path d="M36.0881 54.0553L47.3929 65.2914L35.5462 77.0661C30.0326 82.5461 21.2245 82.9432 15.2344 77.9818L13.4784 76.5275L36.0881 54.0553Z" fill="url(#paint0_linear_490_19)"/>
<path d="M54.3618 56.6046C49.2232 51.4973 41.2265 42.8192 26.8386 63.2483C26.8386 63.2483 33.0048 57.1196 41.2265 65.2913L54.3617 78.3466C59.1456 83.1014 66.7879 83.4459 71.9852 79.1412L75.141 76.5273L54.3618 56.6046Z" fill="white"/>
<path d="M67.9471 36.6906C58.2507 27.0532 49.568 31.5209 40.8924 44.0902C40.8281 44.1762 40.7682 44.2634 40.7128 44.3515C40.7726 44.264 40.8325 44.1769 40.8924 44.0902C42.815 41.5181 48.6816 40.0205 56.6323 47.9167C56.6356 47.92 56.6389 47.9233 56.6422 47.9266L85.9953 77.1011C90.5355 81.6137 97.6998 82.1838 102.905 78.4467L107 75.506L67.9471 36.6906C67.9471 36.6906 67.947 36.6905 67.9471 36.6906Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_490_19" x1="15.1388" y1="78.2731" x2="18.7134" y2="58.821" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="#DEE1E3"/>
</linearGradient>
</defs>
</svg>
````

## File: public/icons/tools/chatgpt.svg
````xml
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8"><text x="-9999" y="-9999">ChatGPT</text><path d="M9.20509 8.76511V6.50545C9.20509 6.31513 9.27649 6.17234 9.44293 6.0773L13.9861 3.46088C14.6046 3.10413 15.342 2.93769 16.103 2.93769C18.9573 2.93769 20.7651 5.14983 20.7651 7.50454C20.7651 7.67098 20.7651 7.86129 20.7412 8.05161L16.0316 5.2924C15.7462 5.12596 15.4607 5.12596 15.1753 5.2924L9.20509 8.76511ZM19.8135 17.5659V12.1664C19.8135 11.8333 19.6708 11.5955 19.3854 11.429L13.4152 7.95633L15.3656 6.83833C15.5321 6.74328 15.6749 6.74328 15.8413 6.83833L20.3845 9.45474C21.6928 10.216 22.5728 11.8333 22.5728 13.4031C22.5728 15.2108 21.5025 16.8758 19.8135 17.5657V17.5659ZM7.80173 12.8088L5.8513 11.6671C5.68486 11.5721 5.61346 11.4293 5.61346 11.239V6.00613C5.61346 3.46111 7.56389 1.53433 10.2042 1.53433C11.2033 1.53433 12.1307 1.86743 12.9159 2.46202L8.2301 5.17371C7.94475 5.34015 7.80195 5.57798 7.80195 5.91109V12.809L7.80173 12.8088ZM12 15.2349L9.20509 13.6651V10.3351L12 8.76534L14.7947 10.3351V13.6651L12 15.2349ZM13.7958 22.4659C12.7967 22.4659 11.8693 22.1328 11.0841 21.5382L15.7699 18.8265C16.0553 18.6601 16.198 18.4222 16.198 18.0891V11.1912L18.1723 12.3329C18.3388 12.4279 18.4102 12.5707 18.4102 12.761V17.9939C18.4102 20.5389 16.4359 22.4657 13.7958 22.4657V22.4659ZM8.15848 17.1617L3.61528 14.5452C2.30696 13.784 1.42701 12.1667 1.42701 10.5969C1.42701 8.76534 2.52115 7.12414 4.20987 6.43428V11.8574C4.20987 12.1905 4.35266 12.4284 4.63802 12.5948L10.5846 16.0436L8.63415 17.1617C8.46771 17.2567 8.32492 17.2567 8.15848 17.1617ZM7.897 21.0625C5.20919 21.0625 3.23488 19.0407 3.23488 16.5432C3.23488 16.3529 3.25875 16.1626 3.2824 15.9723L7.96817 18.6839C8.25352 18.8504 8.53911 18.8504 8.82446 18.6839L14.7947 15.2351V17.4948C14.7947 17.6851 14.7233 17.8279 14.5568 17.9229L10.0136 20.5393C9.39518 20.8961 8.6578 21.0625 7.89677 21.0625H7.897ZM13.7958 23.8929C16.6739 23.8929 19.0762 21.8474 19.6235 19.1357C22.2874 18.4459 24 15.9484 24 13.4034C24 11.7383 23.2865 10.121 22.002 8.95542C22.121 8.45588 22.1924 7.95633 22.1924 7.45702C22.1924 4.0557 19.4331 1.51045 16.2458 1.51045C15.6037 1.51045 14.9852 1.60549 14.3668 1.81968C13.2963 0.773071 11.8215 0.107086 10.2042 0.107086C7.32606 0.107086 4.92383 2.15256 4.37653 4.86425C1.7126 5.55411 0 8.05161 0 10.5966C0 12.2617 0.713506 13.879 1.99795 15.0446C1.87904 15.5441 1.80764 16.0436 1.80764 16.543C1.80764 19.9443 4.56685 22.4895 7.75421 22.4895C8.39632 22.4895 9.01478 22.3945 9.63324 22.1803C10.7035 23.2269 12.1783 23.8929 13.7958 23.8929Z" fill="currentColor"/></svg>
````

## File: public/icons/tools/claude.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="w-full" fill="hsl(14.8, 63.1%, 59.6%)"><path d="m19.6 66.5 19.7-11 .3-1-.3-.5h-1l-3.3-.2-11.2-.3L14 53l-9.5-.5-2.4-.5L0 49l.2-1.5 2-1.3 2.9.2 6.3.5 9.5.6 6.9.4L38 49.1h1.6l.2-.7-.5-.4-.4-.4L29 41l-10.6-7-5.6-4.1-3-2-1.5-2-.6-4.2 2.7-3 3.7.3.9.2 3.7 2.9 8 6.1L37 36l1.5 1.2.6-.4.1-.3-.7-1.1L33 25l-6-10.4-2.7-4.3-.7-2.6c-.3-1-.4-2-.4-3l3-4.2L28 0l4.2.6L33.8 2l2.6 6 4.1 9.3L47 29.9l2 3.8 1 3.4.3 1h.7v-.5l.5-7.2 1-8.7 1-11.2.3-3.2 1.6-3.8 3-2L61 2.6l2 2.9-.3 1.8-1.1 7.7L59 27.1l-1.5 8.2h.9l1-1.1 4.1-5.4 6.9-8.6 3-3.5L77 13l2.3-1.8h4.3l3.1 4.7-1.4 4.9-4.4 5.6-3.7 4.7-5.3 7.1-3.2 5.7.3.4h.7l12-2.6 6.4-1.1 7.6-1.3 3.5 1.6.4 1.6-1.4 3.4-8.2 2-9.6 2-14.3 3.3-.2.1.2.3 6.4.6 2.8.2h6.8l12.6 1 3.3 2 1.9 2.7-.3 2-5.1 2.6-6.8-1.6-16-3.8-5.4-1.3h-.8v.4l4.6 4.5 8.3 7.5L89 80.1l.5 2.4-1.3 2-1.4-.2-9.2-7-3.6-3-8-6.8h-.5v.7l1.8 2.7 9.8 14.7.5 4.5-.7 1.4-2.6 1-2.7-.6-5.8-8-6-9-4.7-8.2-.5.4-2.9 30.2-1.3 1.5-3 1.2-2.5-2-1.4-3 1.4-6.2 1.6-8 1.3-6.4 1.2-7.9.7-2.6v-.2H49L43 72l-9 12.3-7.2 7.6-1.7.7-3-1.5.3-2.8L24 86l10-12.8 6-7.9 4-4.6-.1-.5h-.3L17.2 77.4l-4.7.6-2-2 .2-3 1-1 8-5.5Z"/></svg>
````

## File: public/icons/tools/Confluence.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><defs><linearGradient id="confluence-original-a" gradientUnits="userSpaceOnUse" x1="26.791" y1="28.467" x2="11.792" y2="19.855" gradientTransform="scale(4)"><stop offset="0" stop-color="#0052cc"/><stop offset=".918" stop-color="#2380fb"/><stop offset="1" stop-color="#2684ff"/></linearGradient><linearGradient id="confluence-original-b" gradientUnits="userSpaceOnUse" x1="5.209" y1="2.523" x2="20.208" y2="11.136" gradientTransform="scale(4)"><stop offset="0" stop-color="#0052cc"/><stop offset=".918" stop-color="#2380fb"/><stop offset="1" stop-color="#2684ff"/></linearGradient></defs><path d="M19.492 86.227a249.047 249.047 0 00-3.047 4.933c-.867 1.45-.433 3.336 1.016 4.207l19.863 12.188c1.45.87 3.332.433 4.203-1.016a139.349 139.349 0 012.899-4.934c7.832-12.91 15.804-11.46 30.011-4.64l19.72 9.281c1.593.727 3.335 0 4.058-1.45l9.426-21.323c.722-1.453 0-3.336-1.454-4.063-4.203-1.887-12.464-5.805-19.714-9.43-26.82-12.914-49.586-12.043-66.98 16.247zm0 0" fill="url(#confluence-original-a)"/><path d="M108.508 37.773a249.047 249.047 0 003.047-4.933c.87-1.45.433-3.336-1.016-4.207L90.676 16.445c-1.45-.87-3.332-.433-4.203 1.016a133.55 133.55 0 01-2.899 4.934c-7.832 12.91-15.804 11.46-30.011 4.64l-19.72-9.281c-1.593-.727-3.331 0-4.058 1.45l-9.422 21.323c-.726 1.453 0 3.34 1.45 4.063 4.203 1.887 12.468 5.805 19.714 9.43 26.825 12.77 49.586 12.042 66.98-16.247zm0 0" fill="url(#confluence-original-b)"/></svg>
````

## File: public/icons/tools/cursor.svg
````xml
<svg width="747" height="851" viewBox="0 0 747 851" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M731.545 201.413L390.888 4.73778C379.949 -1.57926 366.452 -1.57926 355.513 4.73778L14.8731 201.413C5.67749 206.723 0.00012207 216.542 0.00012207 227.177V623.776C0.00012207 634.394 5.67749 644.23 14.8731 649.539L355.529 846.214C366.468 852.532 379.966 852.532 390.905 846.214L731.56 649.539C740.756 644.23 746.434 634.409 746.434 623.776V227.177C746.434 216.558 740.756 206.723 731.56 201.413H731.545ZM710.147 243.074L381.293 812.663C379.07 816.501 373.201 814.933 373.201 810.487V437.526C373.201 430.074 369.218 423.18 362.757 419.438L39.7735 232.966C35.9353 230.744 37.5026 224.874 41.9484 224.874H699.655C708.996 224.874 714.833 234.997 710.162 243.09H710.147V243.074Z" fill="black"/>
</svg>
````

## File: public/icons/tools/figma.svg
````xml
<svg width="288" height="432" viewBox="0 0 288 432" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
 <rect width="95.0226" height="142.534" fill="black" fill-opacity="0" transform="translate(1.46603 2.19946) scale(3)">
 </rect>
 <path d="M144 216C144 176.641 175.907 144.733 215.267 144.733V144.733C254.626 144.733 286.534 176.641 286.534 216V216C286.534 255.36 254.626 287.267 215.267 287.267V287.267C175.907 287.267 144 255.36 144 216V216Z" fill="#1ABCFE">
 </path>
 <path d="M1.46603 358.534C1.46603 319.175 33.3733 287.267 72.733 287.267H144V358.534C144 397.894 112.093 429.801 72.733 429.801V429.801C33.3733 429.801 1.46603 397.894 1.46603 358.534V358.534Z" fill="#0ACF83">
 </path>
 <path d="M144 2.19946V144.733H215.267C254.627 144.733 286.534 112.826 286.534 73.4664V73.4664C286.534 34.1068 254.627 2.19946 215.267 2.19946L144 2.19946Z" fill="#FF7262">
 </path>
 <path d="M1.46603 73.4664C1.46603 112.826 33.3733 144.733 72.733 144.733L144 144.733L144 2.19941L72.733 2.19941C33.3733 2.19941 1.46603 34.1067 1.46603 73.4664V73.4664Z" fill="#F24E1E">
 </path>
 <path d="M1.46603 216C1.46603 255.36 33.3733 287.267 72.733 287.267H144L144 144.733L72.733 144.733C33.3733 144.733 1.46603 176.641 1.46603 216V216Z" fill="#A259FF">
 </path>
</svg>
````

## File: public/icons/tools/google-analytics.svg
````xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   viewBox="0 0 32 32"
   width="64"
   height="64"
   version="1.1"
   id="svg13"
   sodipodi:docname="google_analytics-icon~old.svg"
   inkscape:version="1.3.2 (091e20e, 2023-11-25)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <sodipodi:namedview
     id="namedview13"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     inkscape:zoom="248.40517"
     inkscape:cx="21.758806"
     inkscape:cy="22.040604"
     inkscape:window-width="1392"
     inkscape:window-height="997"
     inkscape:window-x="1859"
     inkscape:window-y="25"
     inkscape:window-maximized="0"
     inkscape:current-layer="svg13" />
  <defs
     id="defs8">
    <clipPath
       id="A">
      <path
         d="M16.85 8.53h-3.27A1.44 1.44 0 0 0 12.15 10v4.23H7.42A1.41 1.41 0 0 0 6 15.6v4.73H1.75a1.41 1.41 0 0 0-1.41 1.41V25a1.44 1.44 0 0 0 1.41 1.43h15.1A1.44 1.44 0 0 0 18.29 25V10a1.44 1.44 0 0 0-1.44-1.47z"
         fill="none"
         id="path1" />
    </clipPath>
    <linearGradient
       id="B"
       x1="9.11"
       y1="17.29"
       x2="17.86"
       y2="26.04"
       gradientUnits="userSpaceOnUse">
      <stop
         offset="0"
         stop-color="#bf360c"
         stop-opacity=".2"
         id="stop1" />
      <stop
         offset=".28"
         stop-color="#bf360c"
         stop-opacity=".12"
         id="stop2" />
      <stop
         offset=".67"
         stop-color="#bf360c"
         stop-opacity=".05"
         id="stop3" />
      <stop
         offset="1"
         stop-color="#bf360c"
         stop-opacity=".02"
         id="stop4" />
    </linearGradient>
    <linearGradient
       id="C"
       x1="0"
       y1="23.07"
       x2="17.95"
       y2="23.07"
       gradientUnits="userSpaceOnUse">
      <stop
         offset="0"
         stop-color="#fff"
         stop-opacity=".1"
         id="stop5" />
      <stop
         offset=".14"
         stop-color="#fff"
         stop-opacity=".08"
         id="stop6" />
      <stop
         offset=".61"
         stop-color="#fff"
         stop-opacity=".02"
         id="stop7" />
      <stop
         offset="1"
         stop-color="#fff"
         stop-opacity="0"
         id="stop8" />
    </linearGradient>
  </defs>
  <g
     clip-path="url(#A)"
     transform="matrix(1.782699 0 0 1.78771 -.606118 -15.249162)"
     id="g12">
    <path
       d="M16.85 8.53h-3.27A1.44 1.44 0 0 0 12.15 10v16.47h4.7A1.44 1.44 0 0 0 18.29 25V10a1.44 1.44 0 0 0-1.44-1.47z"
       fill="#f57c00"
       id="path8" />
    <path
       d="M6 15.6v4.73H1.75a1.41 1.41 0 0 0-1.41 1.41V25a1.44 1.44 0 0 0 1.41 1.43h10.4V14.2H7.42A1.41 1.41 0 0 0 6 15.6z"
       fill="#ffc107"
       id="path9" />
    <path
       d="M13.57 26.47h3.28A1.44 1.44 0 0 0 18.29 25v-4.65l-6.14-6.15v12.27h1.42z"
       fill="url(#B)"
       id="path10" />
    <path
       d="M7.43 14.3h4.7v-.12h-4.7A1.41 1.41 0 0 0 6 15.6v.12a1.41 1.41 0 0 1 1.43-1.41zm-5.68 6.15H6v-.12H1.75a1.41 1.41 0 0 0-1.41 1.41v.12a1.41 1.41 0 0 1 1.41-1.41zm15.1-11.92h-3.27A1.44 1.44 0 0 0 12.15 10v.12a1.44 1.44 0 0 1 1.44-1.44h3.26a1.44 1.44 0 0 1 1.44 1.44V10a1.44 1.44 0 0 0-1.44-1.47z"
       opacity=".2"
       fill="#fff"
       id="path11" />
    <path
       d="M16.86 26.35H1.76a1.41 1.41 0 0 1-1.41-1.4v.12a1.41 1.41 0 0 0 1.41 1.41h15.1A1.44 1.44 0 0 0 18.29 25v-.08a1.44 1.44 0 0 1-1.43 1.43z"
       opacity=".2"
       fill="#bf360c"
       id="path12" />
  </g>
  <path
     d="M16.5 14.1h-3.27a1.44 1.44 0 0 0-1.43 1.47v4.23H7.08a1.41 1.41 0 0 0-1.42 1.37v4.73H1.4A1.41 1.41 0 0 0 0 27.31v3.26A1.44 1.44 0 0 0 1.41 32h15.1a1.44 1.44 0 0 0 1.44-1.43v-15a1.44 1.44 0 0 0-1.44-1.47z"
     fill="url(#C)"
     id="path13" />
</svg>
````

## File: public/icons/tools/jira-3.svg
````xml
<svg height="2500" viewBox="2.59 0 214.09101008 224" width="2361" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><linearGradient id="a" gradientTransform="matrix(1 0 0 -1 0 264)" gradientUnits="userSpaceOnUse" x1="102.4" x2="56.15" y1="218.63" y2="172.39"><stop offset=".18" stop-color="#0052cc"/><stop offset="1" stop-color="#2684ff"/></linearGradient><linearGradient id="b" x1="114.65" x2="160.81" xlink:href="#a" y1="85.77" y2="131.92"/><path d="m214.06 105.73-96.39-96.39-9.34-9.34-72.56 72.56-33.18 33.17a8.89 8.89 0 0 0 0 12.54l66.29 66.29 39.45 39.44 72.55-72.56 1.13-1.12 32.05-32a8.87 8.87 0 0 0 0-12.59zm-105.73 39.39-33.12-33.12 33.12-33.12 33.11 33.12z" fill="#2684ff"/><path d="m108.33 78.88a55.75 55.75 0 0 1 -.24-78.61l-72.47 72.44 39.44 39.44z" fill="url(#a)"/><path d="m141.53 111.91-33.2 33.21a55.77 55.77 0 0 1 0 78.86l72.67-72.63z" fill="url(#b)"/></svg>
````

## File: public/icons/tools/miro.svg
````xml
<svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 100.754C3 46.2604 47.2435 2 101.754 2H299.246C353.756 2 398 46.2435 398 100.754V298.246C398 352.756 353.756 397 299.246 397H101.754C47.2435 397 3 352.756 3 298.246V100.754Z" fill="#FFDD33"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M265.573 77.3491H229.74L259.629 129.85L193.906 77.3491H158.072L190.934 141.468L122.238 77.3491H86.4041L122.238 159.031L86.4041 322.377H122.238L190.934 147.396L158.072 322.377H193.906L259.629 135.693L229.74 322.377H265.573L331.297 118.232L265.573 77.4335V77.3491Z" fill="#1C1C1E"/>
</svg>
````

## File: public/icons/tools/notion.svg
````xml
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 59.9 62.6" style="enable-background:new 0 0 59.9 62.6;" xml:space="preserve">
 <style type="text/css">
  .st0{fill:#FFFFFF;}
	.st1{fill-rule:evenodd;clip-rule:evenodd;}
 </style>
 <metadata>
  
   
   
   
   
  
 </metadata>
 <g>
  <g>
   <path class="st0" d="M3.8,2.7l34.6-2.6c4.2-0.4,5.3-0.1,8,1.8l11.1,7.8c1.8,1.3,2.4,1.7,2.4,3.2v42.7c0,2.7-1,4.3-4.4,4.5&#xA;&#x9;&#x9;&#x9;l-40.2,2.4c-2.6,0.1-3.8-0.2-5.1-1.9L2.1,50.1c-1.5-2-2.1-3.4-2.1-5.1V7C0,4.8,1,2.9,3.8,2.7L3.8,2.7z M3.8,2.7">
   </path>
   <path class="st1" d="M38.4,0.1L3.8,2.7C1,2.9,0,4.8,0,7v38c0,1.7,0.6,3.2,2.1,5.1l8.1,10.6c1.3,1.7,2.6,2.1,5.1,1.9l40.2-2.4&#xA;&#x9;&#x9;&#x9;c3.4-0.2,4.4-1.8,4.4-4.5V12.9c0-1.4-0.5-1.8-2.2-3c-0.1-0.1-0.2-0.1-0.3-0.2L46.4,2C43.8,0,42.7-0.2,38.4,0.1L38.4,0.1z&#xA;&#x9;&#x9;&#x9; M16.2,12.2c-3.3,0.2-4,0.3-5.9-1.3L5.6,7.2C5.1,6.7,5.3,6.1,6.6,6l33.3-2.4c2.8-0.2,4.2,0.7,5.3,1.6l5.7,4.1&#xA;&#x9;&#x9;&#x9;c0.3,0.1,0.9,0.8,0.1,0.8l-34.4,2.1L16.2,12.2z M12.4,55.3V19c0-1.6,0.5-2.3,1.9-2.4l39.5-2.3c1.3-0.1,1.9,0.7,1.9,2.3v36&#xA;&#x9;&#x9;&#x9;c0,1.6-0.3,2.9-2.4,3l-37.8,2.2C13.4,58,12.4,57.2,12.4,55.3L12.4,55.3z M49.7,21c0.2,1.1,0,2.2-1.1,2.3l-1.8,0.4v26.8&#xA;&#x9;&#x9;&#x9;c-1.6,0.9-3,1.3-4.2,1.3c-1.9,0-2.4-0.6-3.9-2.4L26.7,30.6v18.1l3.8,0.9c0,0,0,2.2-3,2.2l-8.4,0.5c-0.2-0.5,0-1.7,0.8-1.9l2.2-0.6&#xA;&#x9;&#x9;&#x9;v-24l-3-0.3c-0.2-1.1,0.4-2.7,2.1-2.8l9-0.6l12.4,19V24.3l-3.2-0.4c-0.2-1.3,0.7-2.3,1.9-2.4L49.7,21z M49.7,21">
   </path>
  </g>
 </g>
</svg>
````

## File: public/icons/tools/principle-app-2.svg
````xml
<svg height="2500" width="1825" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230 319.38005993147164"><linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="62.618%"><stop offset="0" stop-color="#d378e5"/><stop offset="1" stop-color="#7526c2"/></linearGradient><path d="M0 266.28V115C0 51.487 51.487 0 115 0s115 51.487 115 115c0 62.677-50.142 113.643-112.5 114.973V230C99.55 230 85 215.45 85 197.5c0-17.782 14.281-32.229 32-32.496v-.043c26.687-1.05 48-23.017 48-49.961 0-27.614-22.386-50-50-50s-50 22.386-50 50v167.5c0 17.95-14.55 32.5-32.5 32.5a32.351 32.351 0 0 1-18.678-5.9C23.17 306.368 30 297.732 30 287.5 30 275.074 19.926 265 7.5 265c-2.63 0-5.154.451-7.5 1.28zM117.5 220c12.426 0 22.5-10.074 22.5-22.5S129.926 175 117.5 175 95 185.074 95 197.5s10.074 22.5 22.5 22.5z" fill="url(#a)" fill-rule="evenodd"/></svg>
````

## File: public/icons/tools/protopie.svg
````xml
<svg class="css-8u76kk-displays--hideOnMobile-displays--hideOnTablet-displays--displayOnDesktop" fill="none" height="40" width="150" xmlns="http://www.w3.org/2000/svg"><path d="M47.63 10.002a6.815 6.815 0 014.98 1.989 6.596 6.596 0 012.034 4.869 6.597 6.597 0 01-2.02 4.887 6.813 6.813 0 01-4.98 1.99h-3.602v6.359H40V10.002h7.63zm0 9.985a2.824 2.824 0 002.136-.914 3.32 3.32 0 000-4.435 2.847 2.847 0 00-2.135-.878h-3.603v6.223l3.603.004zm13.291-2.153a3.941 3.941 0 011.742-2.108 5.308 5.308 0 012.707-.695v4.357a4.449 4.449 0 00-3.086.672c-.914.61-1.372 1.616-1.372 3.018v6.995h-3.776V15.031h3.776l.01 2.803zM79.507 27.91a7.53 7.53 0 01-12.875-5.349 7.535 7.535 0 1112.874 5.35zM71.4 25.387a3.697 3.697 0 002.744 1.11 3.748 3.748 0 002.743-1.11 4.147 4.147 0 000-5.651 3.75 3.75 0 00-2.743-1.111 3.7 3.7 0 00-2.744 1.11 4.188 4.188 0 000 5.652zm21.224-6.73h-3.31v6.4a1.446 1.446 0 00.379 1.112c.314.255.706.394 1.11.393.61.034 1.22.034 1.83 0v3.424c-2.597.305-4.426.061-5.487-.731-1.06-.793-1.592-2.189-1.595-4.188v-6.401h-2.56V15.03h2.546v-2.519l3.776-1.138v3.657h3.31v3.626zm14.141 9.253a7.535 7.535 0 01-8.234 1.65 7.53 7.53 0 01-4.641-6.999 7.535 7.535 0 1112.875 5.35zm-8.106-2.523a3.696 3.696 0 002.743 1.11 3.753 3.753 0 002.743-1.11 4.148 4.148 0 000-5.651 3.755 3.755 0 00-2.743-1.111 3.7 3.7 0 00-2.743 1.11 4.188 4.188 0 000 5.652zm20.45-15.385a6.816 6.816 0 014.979 1.989 6.592 6.592 0 012.016 4.869 6.585 6.585 0 01-2.021 4.887 6.802 6.802 0 01-4.974 2.012h-3.603v6.337h-4.041V10.002h7.644zm0 9.985a2.826 2.826 0 002.135-.914 3.319 3.319 0 000-4.435 2.84 2.84 0 00-2.135-.86h-3.603v6.205l3.603.004zm11.371-4.956a2.538 2.538 0 01-2.497-2.496 2.454 2.454 0 01.727-1.774 2.385 2.385 0 011.77-.759 2.411 2.411 0 011.783.759 2.447 2.447 0 01.74 1.77 2.394 2.394 0 01-.74 1.75 2.437 2.437 0 01-1.783.75zm-1.852 15.088V17.537h3.776v12.559l-3.776.023zm20.857-3.406c-.123.192-.224.329-.224.329-1.438 2.036-3.557 3.054-6.355 3.054-2.411 0-4.345-.713-5.802-2.14a7.231 7.231 0 01-2.185-5.395 7.317 7.317 0 012.158-5.381 7.506 7.506 0 015.541-2.149 7.026 7.026 0 015.295 2.163 7.454 7.454 0 012.084 5.367 8.446 8.446 0 01-.146 1.514h-10.973c.506 1.789 1.878 2.683 4.115 2.683a3.987 3.987 0 002.999-1.12l3.493 1.075zm-10.689-5.487h7.434a3.44 3.44 0 00-1.326-2.167 3.857 3.857 0 00-2.286-.713 4.012 4.012 0 00-2.505.754 3.602 3.602 0 00-1.317 2.117v.01z" fill="#101010"/><path clip-rule="evenodd" d="M15.144 29.989l.08 4.905a2.815 2.815 0 01-1.961-.794l-.383-.456-9.305-11.065L.41 18.812a.044.044 0 01-.019-.02l-.05-.058-.01-.013a1.043 1.043 0 01-.147-.268 1.074 1.074 0 01-.077-.37v-.076c0-.024.002-.049.007-.073a1.1 1.1 0 01.296-.658c.203-.22.498-.36.822-.36h3.125l10.786 13.075.002-.002z" fill="#FCD1CA" fill-rule="evenodd"/><path clip-rule="evenodd" d="M15.142 24.107v6.079L.388 12.58a1.096 1.096 0 01-.206-.338 1.105 1.105 0 01-.076-.373v-.075a1.1 1.1 0 01.303-.728c.202-.223.497-.36.822-.36h2.798l11.113 13.4z" fill="#FF9D8D" fill-rule="evenodd"/><path clip-rule="evenodd" d="M1.225 4.823a1.1 1.1 0 00-.818.358c-.18.189-.292.445-.3.724v.074c.003.133.029.257.076.37.001.011.006.02.01.03a1.051 1.051 0 00.206.318l.016.018 14.727 17.392v10.787a2.792 2.792 0 001.95-.788c.003 0 .003 0 .003-.002l12.8-15.196c.016-.016.03-.034.044-.052.068-.084.122-.179.162-.283.05-.124.076-.26.076-.405V5.94a1.1 1.1 0 00-.302-.762 1.104 1.104 0 00-.819-.356H1.226z" fill="#FF6661" fill-rule="evenodd"/></svg>
````

## File: public/icons/tools/yandex-metrica.svg
````xml
<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 28.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 999.9299316 1000" style="enable-background:new 0 0 999.9299316 1000;" xml:space="preserve">
<style type="text/css">
	.st0{fill:#FFFFFF;filter:url(#Adobe_OpacityMaskFilter);}
	.st1{mask:url(#mask0_1315_11716_00000109739714827462529650000001334146449607646880_);}
	.st2{fill:url(#SVGID_1_);}
	.st3{fill:url(#SVGID_00000010300337233640240090000005782642923412052355_);}
	.st4{fill:url(#SVGID_00000144324074971785951810000013028294510890857618_);}
	.st5{fill:url(#SVGID_00000148656424312536884070000005615403286292208820_);}
</style>
<defs>
	<filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="0" y="0" width="999.9299316" height="1000">
		<feColorMatrix  type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"/>
	</filter>
</defs>
<mask maskUnits="userSpaceOnUse" x="0" y="0" width="999.9299316" height="1000" id="mask0_1315_11716_00000109739714827462529650000001334146449607646880_">
	<ellipse class="st0" cx="499.9649658" cy="499.9993286" rx="499.9649353" ry="499.9649353"/>
</mask>
<g class="st1">
	
		<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="477.7791443" y1="329.0463257" x2="-347.1645813" y2="1478.9656982" gradientTransform="matrix(1 0 0 -1 202.3399963 1080.204834)">
		<stop  offset="0" style="stop-color:#4643B9"/>
		<stop  offset="1" style="stop-color:#1E8AFF"/>
	</linearGradient>
	<rect y="0.0700901" class="st2" width="999.9299316" height="999.9299316"/>
	
		<linearGradient id="SVGID_00000096757890459141095450000008739604919787316886_" gradientUnits="userSpaceOnUse" x1="135.2195435" y1="234.8675537" x2="-786.1533813" y2="402.0184631" gradientTransform="matrix(1 0 0 -1 202.3399963 1080.204834)">
		<stop  offset="0" style="stop-color:#FF002E"/>
		<stop  offset="1" style="stop-color:#FFADA1"/>
	</linearGradient>
	<path style="fill:url(#SVGID_00000096757890459141095450000008739604919787316886_);" d="M0,624.9561768h312.4780884v374.9737549H0
		V624.9561768z"/>
	
		<linearGradient id="SVGID_00000129926128652470612170000010428532459956452021_" gradientUnits="userSpaceOnUse" x1="110.7661362" y1="-1141.1743164" x2="342.2186584" y2="717.2578125" gradientTransform="matrix(1 0 0 -1 202.3399963 1080.204834)">
		<stop  offset="0" style="stop-color:#3C3BA0"/>
		<stop  offset="0.489583" style="stop-color:#1E8AFF"/>
		<stop  offset="1" style="stop-color:#00B2FF"/>
	</linearGradient>
	<path style="fill:url(#SVGID_00000129926128652470612170000010428532459956452021_);" d="M312.4780884,512.4640503
		c0-70.0013428,0-105.0020142,13.624054-131.7407227c11.9835205-23.5171204,31.1040649-42.6376648,54.6211853-54.6211853
		c26.7387085-13.624054,61.7393799-13.624054,131.7407227-13.624054h174.987793v687.4518433H312.4780884V512.4640503z"/>
	
		<linearGradient id="SVGID_00000100354382796552410470000004861524131285012109_" gradientUnits="userSpaceOnUse" x1="334.2781982" y1="741.4021606" x2="1212.8197021" y2="280.3135071" gradientTransform="matrix(1 0 0 -1 202.3399963 1080.204834)">
		<stop  offset="0" style="stop-color:#FFEA1A"/>
		<stop  offset="1" style="stop-color:#FFB800"/>
	</linearGradient>
	<path style="fill:url(#SVGID_00000100354382796552410470000004861524131285012109_);" d="M687.4518433,0h312.4780884v999.9299316
		H687.4518433V0z"/>
</g>
</svg>
````

## File: public/icons/curious-researcher-trophy.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none" aria-hidden="true">
  <path d="M31 25H19v14c0 15 9 25 22 27l6-11c-11-1-16-6-16-17V25Z" fill="#B7822E"/>
  <path d="M89 25h12v14c0 15-9 25-22 27l-6-11c11-1 16-6 16-17V25Z" fill="#9C6927"/>
  <path d="M30 22h60v22c0 29-12 46-30 46S30 73 30 44V22Z" fill="#E6AD42"/>
  <path d="M64 25h23v19c0 24-8 39-23 42 7-18 8-40 0-61Z" fill="#C88B2F"/>
  <path d="M37 31v14c0 16 4 27 12 33" stroke="#FFE5A2" stroke-width="5" stroke-linecap="round"/>
  <rect x="28" y="18" width="64" height="10" rx="5" fill="#F6CD70"/>
  <path d="M55 89h10v11H55z" fill="#493C35"/>
  <path d="M48 99h24l6 7H42l6-7Z" fill="#342E2C"/>
  <rect x="37" y="105" width="46" height="8" rx="4" fill="#221F20"/>
  <path d="M60 39c1.8 6.2 4.3 8.7 10.5 10.5C64.3 51.3 61.8 53.8 60 60c-1.8-6.2-4.3-8.7-10.5-10.5C55.7 47.7 58.2 45.2 60 39Z" fill="#F8F8F5"/>
  <path d="M16 15v15m-7.5-7.5h15m-12.8-5.3 10.6 10.6m0-10.6L10.7 27.8" stroke="#7D67B3" stroke-width="3" stroke-linecap="round"/>
  <path d="M101 41v13m-6.5-6.5h13m-11.1-4.6 9.2 9.2m0-9.2-9.2 9.2" stroke="#579A91" stroke-width="2.8" stroke-linecap="round"/>
  <path d="M98 13v7m-3.5-3.5h7" stroke="#CF783C" stroke-width="2.5" stroke-linecap="round"/>
</svg>
````

## File: public/icons/list-asterisk.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
  <path d="M12 2.5v19M2.5 12h19M5.3 5.3l13.4 13.4M18.7 5.3 5.3 18.7" stroke="#000" stroke-width="2.2" stroke-linecap="round"/>
</svg>
````

## File: src/components/.gitkeep
````

````

## File: src/components/ArrowIcon.tsx
````typescript
import { Fragment, useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

type Direction = 'right' | 'left' | 'up' | 'down' | 'up-right'

const directionByCharacter: Record<string, Direction> = {
  '→': 'right', '←': 'left', '↑': 'up', '↓': 'down', '↗': 'up-right',
}

const labelByDirection: Record<Direction, string> = {
  right: 'далее', left: 'назад', up: 'вверх', down: 'вниз', 'up-right': 'переход',
}

export function ArrowIcon({ direction = 'right', decorative = false, className = '' }: {
  direction?: Direction
  decorative?: boolean
  className?: string
}) {
  const reducedMotion = useReducedMotion()
  const svgRef = useRef<SVGSVGElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (direction !== 'up-right') return
    const trigger = svgRef.current?.closest('a, button, [role="button"]')
    if (!trigger) return
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setActive(
      (finePointer.matches && trigger.matches(':hover')) || trigger.matches(':focus-visible'),
    )
    trigger.addEventListener('pointerenter', update)
    trigger.addEventListener('pointerleave', update)
    trigger.addEventListener('focusin', update)
    trigger.addEventListener('focusout', update)
    finePointer.addEventListener('change', update)
    update()
    return () => {
      trigger.removeEventListener('pointerenter', update)
      trigger.removeEventListener('pointerleave', update)
      trigger.removeEventListener('focusin', update)
      trigger.removeEventListener('focusout', update)
      finePointer.removeEventListener('change', update)
    }
  }, [direction])

  return (
    <svg
      ref={svgRef}
      className={`arrow-icon arrow-icon--${direction} ${className}`.trim()}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden={decorative || undefined}
      role={decorative ? undefined : 'img'}
      aria-label={decorative ? undefined : labelByDirection[direction]}
      focusable="false"
    >
      <motion.g className="arrow-icon-glyph"
        animate={direction === 'up-right' ? { transform: active && !reducedMotion ? 'rotate(45deg)' : 'rotate(0deg)' } : undefined}
        style={direction === 'up-right' ? { transformBox: 'view-box', transformOrigin: 'center' } : undefined}
        transition={{ duration: reducedMotion ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}>
        <path
          d={direction === 'up-right' ? 'M4.5 19.5 19.5 4.5M8 4.5h11.5V16' : 'M3 12h18M14 5l7 7-7 7'}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
    </svg>
  )
}

export function InlineArrows({ text }: { text: string }) {
  return text.split(/([→←↑↓↗])/g).map((part, index) => {
    const direction = directionByCharacter[part]
    return <Fragment key={index}>{direction ? <ArrowIcon direction={direction} className="arrow-icon--inline" /> : part}</Fragment>
  })
}
````

## File: src/components/CaseDiagram.tsx
````typescript
import { useMemo, useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import type { CaseVisualSpec, VisualItem } from './CaseVisual'
import { InlineArrows } from './ArrowIcon'
import { diagramHubs, stateCenters, type DiagramMode } from '../data/caseDiagramModes'
import { DiagramWires, type DiagramEdge } from './DiagramWires'

function DiagramNode({ item, index, visible, reduced, number, tone, subtitle }: {
  item: VisualItem; index: number; visible: boolean; reduced: boolean;
  number?: boolean; tone?: 'primary' | 'soft'; subtitle?: string
}) {
  return <motion.div className={`case-diagram-node${tone ? ` case-diagram-node--${tone}` : ''}`}
    data-diagram-node={`node-${index}`}
    initial={false}
    animate={{
      opacity: visible ? 1 : 0.65,
      transform: visible ? 'translateY(0px)' : 'translateY(8px)',
    }}
    transition={{ duration: reduced ? 0 : 0.38, delay: visible && !reduced ? index * 0.12 : 0, ease: [0.22, 1, 0.36, 1] }}>
    {number && <span className="case-diagram-number">{String(index + 1).padStart(2, '0')}</span>}
    <strong><InlineArrows text={item.label} /></strong>
    {subtitle && <small>{subtitle}</small>}
  </motion.div>
}

function Explanation({ items }: { items: VisualItem[] }) {
  return <dl className="case-diagram-explanations">
    {items.map((item, index) => <div key={`${item.label}-${index}`}>
      <dt><InlineArrows text={item.label} /></dt>
      <dd>{item.detail && <InlineArrows text={item.detail} />}{item.note && <span className="case-diagram-note"><InlineArrows text={item.note} /></span>}</dd>
    </div>)}
  </dl>
}

function ServiceMap({ items, visible, reduced }: { items: VisualItem[]; visible: boolean; reduced: boolean }) {
  // Both the home search and the direction page are confirmed entry points to one result set.
  const [home, results, direction, tour, checkout] = items
  return <>
    <div className="case-diagram-service-map" aria-label="Главная и страница направления ведут к выдаче, затем к туру и оформлению">
      <div className="case-diagram-entry-points">
        <DiagramNode item={home} index={0} visible={visible} reduced={reduced} subtitle="Поиск и подборки" />
        <DiagramNode item={direction} index={1} visible={visible} reduced={reduced} subtitle="Страна или курорт" />
      </div>
      <DiagramNode item={results} index={2} visible={visible} reduced={reduced} tone="primary" />
      <DiagramNode item={tour} index={3} visible={visible} reduced={reduced} />
      <DiagramNode item={checkout} index={4} visible={visible} reduced={reduced} />
    </div>
    <Explanation items={[home, direction, results, tour, checkout]} />
  </>
}

function FilterStates({ items, visible, reduced }: { items: VisualItem[]; visible: boolean; reduced: boolean }) {
  const [basic, advanced, selected] = items
  return <>
    <div className="case-diagram-filter" aria-label="Основные фильтры, раскрываемые дополнительные настройки и выбранные фильтры над выдачей">
      <div className="case-diagram-filter-controls" data-diagram-node="filter-controls">
        <span className="case-diagram-overline">{basic.label}</span>
        <div className="case-diagram-filter-pills" aria-hidden="true">
          <motion.span className="case-diagram-filter-active"
            initial={false}
            animate={{ opacity: visible ? 1 : 0.65, transform: visible ? 'translateY(0px)' : 'translateY(6px)' }}
            transition={{ duration: reduced ? 0 : 0.26, delay: reduced ? 0 : 0.16 }}>Цена</motion.span>
          <span>Даты</span><span>Питание</span><span>Звёзды</span><span>Расположение</span><span>Продолжительность</span>
        </div>
        <div className="case-diagram-filter-more">
          <span className="case-diagram-overline">{advanced.label}</span>
          <motion.div className="case-diagram-filter-expanded"
            initial={false} animate={{ opacity: reduced || visible ? 1 : 0.4, transform: reduced || visible ? 'translateY(0px)' : 'translateY(-6px)' }}
            transition={{ duration: reduced ? 0 : 0.35, delay: visible && !reduced ? 0.38 : 0, ease: [0.22, 1, 0.36, 1] }}>
            <span className="case-diagram-setting-line" /><span className="case-diagram-setting-line" /><span className="case-diagram-setting-line" />
          </motion.div>
        </div>
      </div>
      <div className="case-diagram-filter-results" data-diagram-node="filter-results">
        <span className="case-diagram-overline">Выдача</span>
        <span className="case-diagram-filter-selected-label">{selected.label}</span>
        <motion.div className="case-diagram-filter-selected" initial={false}
          animate={{ opacity: reduced || visible ? 1 : 0.3, transform: reduced || visible ? 'translateY(0px)' : 'translateY(8px)' }}
          transition={{ duration: reduced ? 0 : 0.36, delay: visible && !reduced ? 0.7 : 0, ease: [0.22, 1, 0.36, 1] }}>
          <span>Цена <b aria-hidden="true">×</b></span><span>Даты <b aria-hidden="true">×</b></span>
        </motion.div>
        <div className="case-diagram-result-lines" aria-hidden="true"><i /><i /><i /></div>
      </div>
    </div>
    <Explanation items={items} />
  </>
}

function Route({ visual, visible, reduced }: { visual: CaseVisualSpec; visible: boolean; reduced: boolean }) {
  return <>
    <ol className="case-diagram-route">
      {visual.items.map((item, index) => <li key={`${item.label}-${index}`}>
        <DiagramNode item={item} index={index} visible={visible} reduced={reduced} number={visual.numbered} tone={index === visual.items.length - 1 ? 'primary' : undefined} />
      </li>)}
    </ol>
    <Explanation items={visual.items} />
  </>
}

function Branch({ visual, visible, reduced }: { visual: CaseVisualSpec; visible: boolean; reduced: boolean }) {
  if (visual.id === 'portal-flow') {
    const lead = visual.items.slice(0, 3)
    const decision = visual.items[3]
    const diagnosis = visual.items[4]
    return <>
      <div className="case-diagram-branch-lead">{lead.map((item, index) => <div key={item.label} className="case-diagram-branch-step">
        <DiagramNode item={item} index={index} visible={visible} reduced={reduced} number />
      </div>)}</div>
      <div className="case-diagram-decision"><DiagramNode item={decision} index={3} visible={visible} reduced={reduced} tone="primary" /></div>
      <div className="case-diagram-branches">
        <div data-diagram-node="yes"><span className="case-diagram-branch-label">Да</span><strong>{decision.branches?.yes}</strong></div>
        <div data-diagram-node="no"><span className="case-diagram-branch-label">Нет</span><strong>{decision.branches?.no}</strong><p><InlineArrows text={diagnosis.detail ?? ''} /></p></div>
      </div>
      <Explanation items={lead} />
    </>
  }
  if (visual.id === 'atlyx-flight-flow') {
    const [search, found, missing, save] = visual.items
    return <>
      <div className="case-diagram-decision"><DiagramNode item={search} index={0} visible={visible} reduced={reduced} tone="primary" /></div>
      <div className="case-diagram-branches"><div><span className="case-diagram-branch-label">Да</span><DiagramNode item={found} index={1} visible={visible} reduced={reduced} /></div>
        <div><span className="case-diagram-branch-label">Нет</span><DiagramNode item={missing} index={2} visible={visible} reduced={reduced} /></div></div>
      <div className="case-diagram-branch-end"><DiagramNode item={save} index={3} visible={visible} reduced={reduced} tone="primary" /></div>
      <Explanation items={visual.items} />
    </>
  }
  const [opening, ...outcomes] = visual.items
  return <>
    <div className="case-diagram-decision"><DiagramNode item={opening} index={0} visible={visible} reduced={reduced} tone="primary" /></div>
    <div className="case-diagram-branches case-diagram-branches--three">{outcomes.map((item, index) => <div key={item.label}>
      <DiagramNode item={item} index={index + 1} visible={visible} reduced={reduced} />
    </div>)}</div>
    <Explanation items={visual.items} />
  </>
}

function Architecture({ visual, visible, reduced }: { visual: CaseVisualSpec; visible: boolean; reduced: boolean }) {
  const center = diagramHubs[visual.id]
  const branches = visual.items.filter((item) => item.label !== center)
  const centerItem = visual.items.find((item) => item.label === center)
  return <>
    <div className="case-diagram-architecture">
      <div className="case-diagram-hub" data-diagram-node="hub"><strong>{center}</strong>{centerItem?.detail && <small>{centerItem.detail}</small>}</div>
      <div className="case-diagram-hub-nodes">{branches.map((item, index) => <DiagramNode key={item.label} item={item} index={index} visible={visible} reduced={reduced} />)}</div>
    </div>
    {visual.id === 'astoria-cms' && <div className="case-diagram-architecture-end"><strong data-diagram-node="end">Витрина</strong></div>}
    <Explanation items={visual.items} />
  </>
}

function Convergence({ items, center, visible, reduced }: { items: VisualItem[]; center: string; visible: boolean; reduced: boolean }) {
  return <>
    <div className="case-diagram-convergence">
      <div className="case-diagram-convergence-entries">{items.map((item, index) => <DiagramNode key={item.label} item={item} index={index} visible={visible} reduced={reduced} />)}</div>
      <div className="case-diagram-hub" data-diagram-node="hub"><strong>{center}</strong></div>
    </div>
    <Explanation items={items} />
  </>
}

function Paired({ visual, visible, reduced, transformation }: { visual: CaseVisualSpec; visible: boolean; reduced: boolean; transformation: boolean }) {
  const [first, second] = visual.items
  return <>
    <div className={`case-diagram-paired${transformation ? ' case-diagram-paired--change' : ''}`}>
      <DiagramNode item={first} index={0} visible={visible} reduced={reduced} />
      <DiagramNode item={second} index={1} visible={visible} reduced={reduced} tone={transformation ? 'primary' : undefined} />
    </div>
    <Explanation items={visual.items} />
  </>
}

function StatusBranch({ items, visible, reduced }: { items: VisualItem[]; visible: boolean; reduced: boolean }) {
  const [pending, success, failed, history] = items
  return <>
    <div className="case-diagram-decision"><DiagramNode item={pending} index={0} visible={visible} reduced={reduced} tone="primary" /></div>
    <div className="case-diagram-branches">{[success, failed].map((item, index) => <div key={item.label}>
      <DiagramNode item={item} index={index + 1} visible={visible} reduced={reduced} />
    </div>)}</div>
    <div className="case-diagram-status-aside"><span>История операций</span><DiagramNode item={history} index={3} visible={visible} reduced={reduced} /></div>
    <Explanation items={items} />
  </>
}

function StatusPairs({ items, visible, reduced }: { items: VisualItem[]; visible: boolean; reduced: boolean }) {
  return <>
    <div className="case-diagram-status-pairs">{[0, 2].map((start) => <div key={start} className="case-diagram-paired case-diagram-paired--change">
      <DiagramNode item={items[start]} index={start} visible={visible} reduced={reduced} />
      <DiagramNode item={items[start + 1]} index={start + 1} visible={visible} reduced={reduced} tone="primary" />
    </div>)}</div>
    <Explanation items={items} />
  </>
}

function StateMap({ visual, visible, reduced }: { visual: CaseVisualSpec; visible: boolean; reduced: boolean }) {
  return <div className="case-diagram-state-map">
    <div className="case-diagram-state-root" data-diagram-node="hub"><strong>{stateCenters[visual.id]}</strong><span>Варианты состояния</span></div>
    <div className="case-diagram-state-rail">
      {visual.items.map((item, index) => <motion.div key={item.label} className="case-diagram-state-row" data-diagram-node={`node-${index}`}
        initial={false}
        animate={{ opacity: visible ? 1 : 0.65, transform: visible ? 'translateY(0px)' : 'translateY(8px)' }}
        transition={{ duration: reduced ? 0 : 0.38, delay: visible && !reduced ? 0.1 + index * 0.1 : 0, ease: [0.22, 1, 0.36, 1] }}>
        <strong>{item.label}</strong>
        <div><span>{item.detail}</span>{item.note && <small>{item.note}</small>}</div>
      </motion.div>)}
    </div>
  </div>
}

function EntityMap({ items, visible, reduced }: { items: VisualItem[]; visible: boolean; reduced: boolean }) {
  const groups = [
    { title: 'Откуда', entries: items.slice(0, 2) },
    { title: 'Что', entries: items.slice(2, 4) },
    { title: 'Куда', entries: items.slice(4) },
  ]
  return <div className="case-diagram-entity-map" aria-label="Сущности в контексте отправки: кошелёк и аккаунт, сеть и актив, адрес">
    {groups.map((group, index) => <div className="case-diagram-entity-group" key={group.title}>
      <motion.div className="case-diagram-entity-lane" data-diagram-node={`node-${index}`} initial={false}
        animate={{ opacity: visible ? 1 : 0.65, transform: visible ? 'translateY(0px)' : 'translateY(8px)' }}
        transition={{ duration: reduced ? 0 : 0.38, delay: visible && !reduced ? index * 0.14 : 0, ease: [0.22, 1, 0.36, 1] }}>
        <span className="case-diagram-overline">{group.title}</span>
        {group.entries.map((item) => <div key={item.label} className="case-diagram-entity-term"><strong>{item.label}</strong><span>{item.detail}</span></div>)}
      </motion.div>
    </div>)}
  </div>
}

function RiskMap({ items, visible, reduced }: { items: VisualItem[]; visible: boolean; reduced: boolean }) {
  return <div className="case-diagram-risk-map" aria-label="Факторы ошибок и их последствия">
    <div className="case-diagram-risk-heading"><span>Источник риска</span><span>Возможное последствие</span></div>
    {items.map((item, index) => <motion.div className="case-diagram-risk-row" key={item.label}
      initial={false}
      animate={{ opacity: visible ? 1 : 0.65, transform: visible ? 'translateY(0px)' : 'translateY(8px)' }}
      transition={{ duration: reduced ? 0 : 0.38, delay: visible && !reduced ? index * 0.1 : 0, ease: [0.22, 1, 0.36, 1] }}>
      <strong data-diagram-node={`risk-source-${index}`}>{item.label}</strong><p data-diagram-node={`risk-target-${index}`}>{item.detail}</p>
    </motion.div>)}
  </div>
}

function ChangeList({ items, visible, reduced }: { items: VisualItem[]; visible: boolean; reduced: boolean }) {
  return <div className="case-diagram-change-list" aria-label="Три изменения продукта">
    {items.map((item, index) => {
      const [before, after] = item.label.split('→').map((text) => text.trim())
      return <motion.div className="case-diagram-change-row" key={item.label}
        initial={false}
        animate={{ opacity: visible ? 1 : 0.65, transform: visible ? 'translateY(0px)' : 'translateY(8px)' }}
        transition={{ duration: reduced ? 0 : 0.38, delay: visible && !reduced ? index * 0.14 : 0, ease: [0.22, 1, 0.36, 1] }}>
        <span data-diagram-node={`before-${index}`}>{before}</span><strong data-diagram-node={`after-${index}`}>{after}</strong>
        <p>{item.detail}</p>
      </motion.div>
    })}
  </div>
}

function diagramEdges(visual: CaseVisualSpec, mode: DiagramMode): DiagramEdge[] {
  const node = (index: number) => `node-${index}`
  const chain = () => visual.items.slice(1).map((_, index) => ({ from: node(index), to: node(index + 1) }))
  const spokes = (from: string, count = visual.items.length) =>
    Array.from({ length: count }, (_, index) => ({ from, to: node(index) }))
  if (mode === 'service-map') return [0, 1].map((index) => ({ from: node(index), to: node(2) })).concat([
    { from: node(2), to: node(3) }, { from: node(3), to: node(4) },
  ])
  if (mode === 'filters') return [{ from: 'filter-controls', to: 'filter-results' }]
  if (mode === 'route') return chain()
  if (mode === 'branch') {
    if (visual.id === 'portal-flow') return [
      { from: node(0), to: node(1) }, { from: node(1), to: node(2) },
      { from: node(2), to: node(3) }, { from: node(3), to: 'yes' }, { from: node(3), to: 'no' },
    ]
    if (visual.id === 'atlyx-flight-flow') return [
      { from: node(0), to: node(1) }, { from: node(0), to: node(2) },
      { from: node(1), to: node(3) }, { from: node(2), to: node(3) },
    ]
    return visual.items.slice(1).map((_, index) => ({ from: node(0), to: node(index + 1) }))
  }
  if (mode === 'architecture') {
    const branchCount = visual.items.filter((item) => item.label !== diagramHubs[visual.id]).length
    const links = spokes('hub', branchCount)
    return visual.id === 'astoria-cms'
      ? links.concat(Array.from({ length: branchCount }, (_, index) => ({ from: node(index), to: 'end' })))
      : links
  }
  if (mode === 'convergence') return visual.items.map((_, index) => ({ from: node(index), to: 'hub' }))
  if (mode === 'status-branch') return [{ from: node(0), to: node(1) }, { from: node(0), to: node(2) }]
  if (mode === 'status-pairs') return [{ from: node(0), to: node(1) }, { from: node(2), to: node(3) }]
  if (mode === 'state-map') return spokes('hub')
  if (mode === 'entity-map') return [{ from: node(0), to: node(1) }, { from: node(1), to: node(2) }]
  if (mode === 'risk-map') return visual.items.map((_, index) => ({ from: `risk-source-${index}`, to: `risk-target-${index}` }))
  if (mode === 'change-list') return visual.items.map((_, index) => ({ from: `before-${index}`, to: `after-${index}` }))
  if (mode === 'transformation') return [{ from: node(0), to: node(1) }]
  return []
}

export function CaseDiagram({ visual, mode }: { visual: CaseVisualSpec; mode: DiagramMode }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -12% 0px' })
  const reduced = Boolean(useReducedMotion())
  const visible = reduced || inView
  const edges = useMemo(() => diagramEdges(visual, mode), [visual, mode])
  return <div ref={ref} className={`case-diagram case-diagram--${mode}`}>
    {mode === 'service-map' && <ServiceMap items={visual.items} visible={visible} reduced={reduced} />}
    {mode === 'filters' && <FilterStates items={visual.items} visible={visible} reduced={reduced} />}
    {mode === 'route' && <Route visual={visual} visible={visible} reduced={reduced} />}
    {mode === 'branch' && <Branch visual={visual} visible={visible} reduced={reduced} />}
    {mode === 'architecture' && <Architecture visual={visual} visible={visible} reduced={reduced} />}
    {mode === 'convergence' && <Convergence items={visual.items}
      center={{ 'portal-support': 'Поддержка', 'astoria-intents': 'Подходящий тур', 'astoria-problem': 'Путь выбора и оформления', 'astoria-entry': 'Выдача туров' }[visual.id] ?? 'Выдача туров'}
      visible={visible} reduced={reduced} />}
    {mode === 'status-branch' && <StatusBranch items={visual.items} visible={visible} reduced={reduced} />}
    {mode === 'status-pairs' && <StatusPairs items={visual.items} visible={visible} reduced={reduced} />}
    {mode === 'state-map' && <StateMap visual={visual} visible={visible} reduced={reduced} />}
    {mode === 'entity-map' && <EntityMap items={visual.items} visible={visible} reduced={reduced} />}
    {mode === 'risk-map' && <RiskMap items={visual.items} visible={visible} reduced={reduced} />}
    {mode === 'change-list' && <ChangeList items={visual.items} visible={visible} reduced={reduced} />}
    {(mode === 'transformation' || mode === 'contrast') && <Paired visual={visual} visible={visible} reduced={reduced} transformation={mode === 'transformation'} />}
    <DiagramWires rootRef={ref} edges={edges} mode={mode} visible={visible} reduced={reduced} />
  </div>
}
````

## File: src/components/CaseThanks.tsx
````typescript
import { motion, useReducedMotion } from 'framer-motion'
import { publicAsset } from '../lib/publicAsset'

export function CaseThanks() {
  const reducedMotion = useReducedMotion()

  return (
    <motion.aside
      className="case-thanks"
      aria-label="Достижение за изучение кейса"
      initial={reducedMotion ? false : { opacity: 0, transform: 'translateY(20px)' }}
      whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: .65, ease: [.22, 1, .36, 1] }}
    >
      <motion.img
        src={publicAsset('icons/curious-researcher-trophy.svg')}
        alt=""
        width="120"
        height="120"
        loading="lazy"
      />
      <p className="case-thanks-eyebrow">Достижение получено</p>
      <h2>Любопытный исследователь</h2>
      <p>Кейс прочитан, детали изучены — достижение ваше</p>
    </motion.aside>
  )
}
````

## File: src/components/CaseVisual.tsx
````typescript
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowIcon, InlineArrows } from './ArrowIcon'
import { withoutFinalPeriod } from '../data/caseContent'
import { CaseDiagram } from './CaseDiagram'
import { diagramModeFor } from '../data/caseDiagramModes'

export type VisualItem = { label: string; detail?: string; note?: string; branches?: { yes: string; no: string } }

export type CaseVisualSpec = {
  id: string
  group: string
  after: string
  title: string
  caption?: string
  kind: 'columns' | 'flow' | 'matrix' | 'comparison' | 'levels'
  numbered?: boolean
  columns?: string[]
  presentation?: 'results'
  items: VisualItem[]
}

const equivalentHeadings: Record<string, string> = {
  'wallet-context': 'Постоянный активный контекст',
  'wallet-errors': 'Предупреждение ошибок до подтверждения',
  'wallet-states': 'Статусы операций',
  'astoria-entry': 'Разные точки входа',
  'health-states': 'Системные состояния',
  'atlyx-statuses': 'Понятная модель статусов',
}

function repeatsHeading(title: string, heading: string, id: string) {
  const normalize = (text: string) => text.toLocaleLowerCase('ru').replace(/ё/g, 'е').replace(/[^\p{L}\p{N}]+/gu, ' ').trim()
  return normalize(title) === normalize(heading) ||
    (Boolean(equivalentHeadings[id]) && normalize(equivalentHeadings[id]) === normalize(heading))
}

export function CaseVisual({ visual, precedingHeading = '' }: { visual: CaseVisualSpec; precedingHeading?: string }) {
  const reducedMotion = useReducedMotion()
  const showHeading = !repeatsHeading(visual.title, precedingHeading, visual.id)
  const diagramMode = diagramModeFor(visual.id)
  const isTable = visual.kind === 'columns' && visual.columns && !diagramMode

  return (
    <motion.figure className={`case-visual case-visual--${visual.kind}${showHeading ? '' : ' case-visual--untitled'}`}
      initial={reducedMotion ? false : { opacity: 0, transform: 'translateY(10px)' }}
      whileInView={{ opacity: 1, transform: 'translateY(0px)' }} viewport={{ once: true, amount: .04 }}
      transition={{ duration: .35, ease: [.22, 1, .36, 1] }}
      aria-labelledby={showHeading ? `${visual.id}-title` : undefined}
      aria-label={showHeading ? undefined : visual.title}>
      {showHeading ? (
        <figcaption className="case-visual-heading" id={`${visual.id}-title`}>
          <ArrowIcon direction="up-right" decorative className="case-visual-index" />
          <span><InlineArrows text={visual.title} /></span>
        </figcaption>
      ) : null}
      {isTable ? (
        <div className="case-visual-table-wrap">
          <table className="case-visual-table">
            <thead><tr>{visual.columns?.map((column) => <th scope="col" key={column}><InlineArrows text={column} /></th>)}</tr></thead>
            <tbody>{visual.items.map((item) => (
              <tr key={item.label}>
                <th scope="row" data-label={visual.columns?.[0]}><InlineArrows text={item.label} /></th>
                <td data-label={visual.columns?.[1]}>{item.detail && <InlineArrows text={item.detail} />}</td>
                <td data-label={visual.columns?.[2]}>{item.note && <InlineArrows text={item.note} />}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      ) : diagramMode ? (
        <CaseDiagram visual={visual} mode={diagramMode} />
      ) : visual.presentation === 'results' ? (
        <motion.ul className="case-visual-results case-metric-grid"
          initial={reducedMotion ? false : 'hidden'} whileInView="show"
          viewport={{ once: true, amount: 0.05, margin: '0px 0px -12% 0px' }}
          variants={{ show: { transition: { staggerChildren: reducedMotion ? 0 : 0.08 } } }}>
          {visual.items.map((item, index) => (
            <motion.li key={`${item.label}-${index}`}
              variants={{ hidden: { opacity: 0, transform: 'translateY(12px)' }, show: { opacity: 1, transform: 'translateY(0px)' } }}
              transition={{ duration: reducedMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}>
              {item.detail && <strong><InlineArrows text={item.detail} /></strong>}
              <span><InlineArrows text={item.label} /></span>
            </motion.li>
          ))}
        </motion.ul>
      ) : (
        <dl className="case-visual-plain">{visual.items.map((item) => <div key={item.label}>
          <dt><InlineArrows text={item.label} /></dt>
          <dd>{item.detail && <InlineArrows text={item.detail} />}</dd>
        </div>)}</dl>
      )}
      {visual.caption && <p className="case-visual-caption"><InlineArrows text={withoutFinalPeriod(visual.caption)} /></p>}
    </motion.figure>
  )
}
````

## File: src/components/DiagramWires.tsx
````typescript
import { useEffect, useId, useState } from 'react'
import { motion } from 'framer-motion'
import type { RefObject } from 'react'

export type DiagramEdge = { from: string; to: string }

type Box = { left: number; top: number; right: number; bottom: number; cx: number; cy: number }
type DrawnEdge = { key: string; path: string }

function layoutBox(element: HTMLElement, root: HTMLElement): Box {
  let left = 0
  let top = 0
  let current: HTMLElement | null = element
  while (current && current !== root) {
    left += current.offsetLeft
    top += current.offsetTop
    current = current.offsetParent as HTMLElement | null
  }
  const right = left + element.offsetWidth
  const bottom = top + element.offsetHeight
  return { left, top, right, bottom, cx: (left + right) / 2, cy: (top + bottom) / 2 }
}

function wirePath(from: Box, to: Box, nodes: Box[], mode: string, gap: number, fork?: number): string {
  // Ports follow measured geometry, including text wrapping and responsive rearrangement.
  if (to.left - from.right > gap * 2 || from.left - to.right > gap * 2) {
    const direction = to.cx > from.cx ? 1 : -1
    const x1 = (direction > 0 ? from.right : from.left) + direction * gap
    const x2 = (direction > 0 ? to.left : to.right) - direction * gap
    const bend = Math.abs(x2 - x1) * .5
    return `M ${x1} ${from.cy} C ${x1 + direction * bend} ${from.cy}, ${x2 - direction * bend} ${to.cy}, ${x2} ${to.cy}`
  }
  const down = to.cy >= from.cy
  const y1 = down ? from.bottom + gap : from.top - gap
  const y2 = down ? to.top - gap : to.bottom + gap
  const direction = down ? 1 : -1
  const between = nodes.filter(node => node !== from && node !== to &&
    node.top < Math.max(y1, y2) && node.bottom > Math.min(y1, y2) &&
    node.left <= Math.max(from.cx, to.cx) && node.right >= Math.min(from.cx, to.cx))
  if (between.length) {
    // Skip intervening stacked states in one outside lane, with smooth cubic turns.
    const right = mode === 'convergence'
    const lane = right ? Math.max(from.right, to.right, ...between.map(n => n.right)) + 12
      : Math.min(from.left, to.left, ...between.map(n => n.left)) - 12
    const x1 = right ? from.right + gap : from.left - gap
    const x2 = right ? to.right + gap : to.left - gap
    const turn = Math.min(24, Math.abs(to.cy - from.cy) / 4)
    return `M ${x1} ${from.cy} C ${lane} ${from.cy}, ${lane} ${from.cy}, ${lane} ${from.cy + direction * turn} C ${lane} ${from.cy + direction * turn * 2}, ${lane} ${to.cy - direction * turn * 2}, ${lane} ${to.cy - direction * turn} C ${lane} ${to.cy}, ${lane} ${to.cy}, ${x2} ${to.cy}`
  }
  const bend = Math.abs(y2 - y1) * .5
  if (fork !== undefined && down && fork > y1 && fork < y2) {
    return `M ${from.cx} ${y1} C ${from.cx} ${y1}, ${from.cx} ${fork}, ${from.cx} ${fork} C ${from.cx} ${fork + (y2 - fork) * .5}, ${to.cx} ${y2 - (y2 - fork) * .5}, ${to.cx} ${y2}`
  }
  return `M ${from.cx} ${y1} C ${from.cx} ${y1 + direction * bend}, ${to.cx} ${y2 - direction * bend}, ${to.cx} ${y2}`
}

export function DiagramWires({ rootRef, edges, mode, visible, reduced }: {
  rootRef: RefObject<HTMLDivElement | null>
  edges: DiagramEdge[]
  mode: string
  visible: boolean
  reduced: boolean
}) {
  const markerId = `${useId().replace(/:/g, '')}-diagram-arrow`
  const [drawing, setDrawing] = useState<{ width: number; height: number; paths: DrawnEdge[] }>({ width: 0, height: 0, paths: [] })
  const [geometry, setGeometry] = useState({ stroke: 1.6, arrow: 7 })

  useEffect(() => {
    const root = rootRef.current
    if (!root || !edges.length) return
    let active = true
    const nodes = [...root.querySelectorAll<HTMLElement>('[data-diagram-node]')]
    const measure = () => {
      if (!active) return
      const byId = new Map(nodes.map((node) => [node.dataset.diagramNode, layoutBox(node, root)]))
      const boxes = [...byId.values()]
      const styles = getComputedStyle(root)
      const gap = Number(styles.getPropertyValue('--diagram-port-gap')) || 8
      setGeometry({ stroke: Number(styles.getPropertyValue('--diagram-stroke')) || 1.6, arrow: Number(styles.getPropertyValue('--diagram-arrow-size')) || 7 })
      const paths = edges.flatMap(({ from, to }, index) => {
        const start = byId.get(from)
        const end = byId.get(to)
        const siblings = edges.filter(edge => edge.from === from).flatMap(edge => {
          const box = byId.get(edge.to)
          return box ? [box] : []
        })
        const nearest = Math.min(...siblings.map(box => box.top))
        const fork = start && siblings.length > 1 && nearest > start.bottom + gap * 2
          ? start.bottom + gap + (nearest - start.bottom - gap * 2) * .3 : undefined
        return start && end ? [{ key: `${from}-${to}-${index}`, path: wirePath(start, end, boxes, mode, gap, fork) }] : []
      })
      setDrawing({ width: root.clientWidth, height: root.clientHeight, paths })
    }
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(root)
    nodes.forEach((node) => observer.observe(node))
    window.addEventListener('resize', measure)
    void document.fonts.ready.then(measure)
    return () => {
      active = false
      observer.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [rootRef, edges, mode])

  if (!drawing.paths.length) return null
  return <svg className="case-diagram-wires" viewBox={`0 0 ${drawing.width} ${drawing.height}`}
    width={drawing.width} height={drawing.height} aria-hidden="true">
    <defs>
      <marker id={markerId} viewBox="0 0 8 8" markerWidth={geometry.arrow} markerHeight={geometry.arrow}
        refX="7" refY="4" orient="auto" markerUnits="userSpaceOnUse">
        <path d="M1 1 7 4 1 7" fill="none" stroke="currentColor" strokeWidth={geometry.stroke}
          strokeLinecap="round" strokeLinejoin="round" />
      </marker>
    </defs>
    {drawing.paths.map((edge, index) => <motion.path key={edge.key} d={edge.path}
      fill="none" stroke="currentColor" strokeWidth={geometry.stroke} strokeLinecap="round" strokeLinejoin="round"
      markerEnd={`url(#${markerId})`} initial={false}
      animate={{ pathLength: reduced || visible ? 1 : 0, opacity: reduced || visible ? 1 : 0 }}
      transition={{ duration: reduced ? 0 : 0.42, delay: visible && !reduced ? index * 0.1 : 0, ease: [0.22, 1, 0.36, 1] }} />)}
  </svg>
}
````

## File: src/components/MetaSeparatedText.tsx
````typescript
import { Fragment } from 'react'

function MetaCross() {
  return (
    <svg className="meta-cross" viewBox="0 0 10 10" width="10" height="10" fill="none" aria-hidden="true" focusable="false">
      <path d="M2.1 2.1 7.9 7.9M7.9 2.1 2.1 7.9" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  )
}

export function MetaSeparatedText({ value, separator = 'dot' }: { value: string; separator?: 'dot' | 'slash' }) {
  const parts = value.split(separator === 'slash' ? /\s*\/\s*/ : /\s+[•·]\s+/).filter(Boolean)
  if (parts.length < 2) return value

  return (
    <span className="meta-separated">
      <span className="sr-only">{parts.join(', ')}</span>
      <span aria-hidden="true">
        {parts.map((part, index) => (
          <Fragment key={`${part}-${index}`}>
            {index > 0 ? <MetaCross /> : null}
            <span>{part}</span>
          </Fragment>
        ))}
      </span>
    </span>
  )
}
````

## File: src/components/MobileHeader.tsx
````typescript
import { useEffect, useMemo, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useReducedMotion } from 'framer-motion'
import { projects, profile } from '../data/portfolio'
import { getCaseNavigationSections } from '../data/caseContent'
import { TelegramLink } from './ContactLinks'
import { trackEvent } from '../lib/analytics'
import { publicAsset } from '../lib/publicAsset'
import { Icon } from './Icon'
import { scrollToCanvasTarget } from '../lib/canvasNavigation'

const homeLinks = [
  { href: '/#work', label: 'Проекты' },
  { href: '/#about', label: 'Обо мне' },
]

export function MobileHeader() {
  const { pathname, search } = useLocation()
  const [openFor, setOpenFor] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState('')
  const reducedMotion = useReducedMotion()
  const menuKey = pathname + search
  const open = openFor === menuKey
  const headerRef = useRef<HTMLElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const isCase = pathname.startsWith('/projects/')
  const isShort = new URLSearchParams(search).get('version') === 'short'
  const sections = useMemo(() => {
    const project = projects.find(project => pathname === `/projects/${project.id}`)
    return project ? getCaseNavigationSections(project, isShort) : []
  }, [pathname, isShort])
  const isActiveLink = (href: string) => href.includes('#')
    ? pathname === '/' && activeSection === href.split('#')[1]
    : pathname === href

  useEffect(() => {
    const ids = isCase
      ? sections.map(({ id }) => id)
      : homeLinks.filter(({ href }) => href.includes('#')).map(({ href }) => href.split('#')[1])
    let frame = 0
    const update = () => {
      frame = 0
      const canvas = document.querySelector('.home-canvas[data-horizontal="true"]')
      if (!isCase && canvas) {
        const first = canvas.querySelector<HTMLElement>('[data-project]')
        const about = canvas.querySelector<HTMLElement>('#about')
        const next = canvas.querySelector<HTMLElement>('[data-project="partner-portal"]')
        const center = document.documentElement.clientWidth / 2
        const inAbout = about && about.getBoundingClientRect().left <= center && next && next.getBoundingClientRect().left > center
        setActiveSection(inAbout ? 'about' : first && first.getBoundingClientRect().left <= center ? 'work' : '')
        return
      }
      const line = (headerRef.current?.getBoundingClientRect().bottom ?? 0) + 36
      const targets = ids.flatMap((id) => {
        const element = document.getElementById(id)
        return element ? [{ id, top: element.getBoundingClientRect().top }] : []
      }).sort((a, b) => a.top - b.top)
      let next = targets[0]?.id ?? ''
      for (const target of targets) if (target.top <= line) next = target.id
      setActiveSection(next)
    }
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      cancelAnimationFrame(frame)
    }
  }, [pathname, isCase, sections])

  useEffect(() => {
    if (!open) return
    const mobile = window.matchMedia('(max-width: 1100px)')
    if (!mobile.matches) return
    const rootOverflow = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
    const onPointerDown = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !headerRef.current?.contains(event.target)
      ) {
        setOpenFor(null)
      }
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenFor(null)
        buttonRef.current?.focus()
      }
      if (event.key === 'Tab') {
        const links = headerRef.current?.querySelectorAll<HTMLElement>('.mobile-header-inner a, .mobile-header-inner button, .mobile-menu a')
        const first = links?.[0]
        const last = links?.[links.length - 1]
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    const onResize = () => { if (!mobile.matches) setOpenFor(null) }
    mobile.addEventListener('change', onResize)
    return () => {
      document.documentElement.style.overflow = rootOverflow
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
      mobile.removeEventListener('change', onResize)
    }
  }, [open])

  function closeAtSection(id: string) {
    setActiveSection(id)
    setOpenFor(null)
    requestAnimationFrame(() => {
      const section = document.getElementById(id)
      if (!section) return
      section.tabIndex = -1
      section.focus({ preventScroll: true })
      if (!isCase && !scrollToCanvasTarget(section, reducedMotion ? 'instant' : 'smooth'))
        section.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth' })
    })
  }

  return (
    <header className={`site-header mobile-header${pathname === '/' ? ' site-header--home' : ''}`} ref={headerRef}>
      <div className="desktop-header">
        <nav className="header-navigation" aria-label="Главная навигация">
          {homeLinks.map(link => <Link key={link.href} to={link.href}
            onClick={event => {
              if (link.href.includes('#') && pathname === '/' && event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey)
                setOpenFor(null)
            }}
            aria-current={isActiveLink(link.href) ? (link.href.includes('#') ? 'location' : 'page') : undefined}>{link.label}</Link>)}
          <a href={profile.cv} target="_blank" rel="noreferrer" onClick={() => trackEvent('resume_click', { location: 'header' })}>CV</a>
        </nav>
        <div className="header-actions">
          <TelegramLink location="header" label="TG" />
        </div>
      </div>
      <div className="mobile-menu-backdrop" data-open={open} aria-hidden="true" onClick={() => setOpenFor(null)} />
      <div className={`mobile-header-inner${isCase ? ' mobile-header-inner--case' : ' mobile-header-inner--home'}`}>
        <Link
          className="mobile-brand"
          to="/"
          aria-label="На главную"
          onClick={() => setOpenFor(null)}
        >
          <img src={publicAsset('cases/avatar.jpg')} alt="" width="32" height="32" />
          <span>{profile.name}</span>
        </Link>
        <TelegramLink location="mobile-header" compact />
        <button
          className="icon-action mobile-menu-toggle"
          type="button"
          ref={buttonRef}
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpenFor(open ? null : menuKey)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>
      <nav
        id="mobile-menu"
        className="mobile-menu"
        aria-label="Мобильное меню"
        data-open={open}
        aria-hidden={!open}
        inert={!open}
      >
        {isCase ? (
          <>
            <Link to="/" onClick={() => setOpenFor(null)} style={{ '--menu-order': 0 } as CSSProperties}>
              <span className="mobile-menu-link-label">Проекты</span>
            </Link>
            <Link to="/#about" onClick={() => setOpenFor(null)} style={{ '--menu-order': 1 } as CSSProperties}>
              <span className="mobile-menu-link-label">Обо мне</span>
            </Link>
            {sections.length > 0 && <span className="mobile-menu-label" style={{ '--menu-order': 2 } as CSSProperties}>Разделы кейса</span>}
            {sections.map((section, index) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                aria-current={activeSection === section.id ? 'location' : undefined}
                onClick={() => closeAtSection(section.id)}
                style={{ '--menu-order': index + 3 } as CSSProperties}
              >
                <span className="mobile-menu-link-label">{section.label}</span>
              </a>
            ))}
          </>
        ) : (
          homeLinks.map((link, index) => (
            <Link
              key={link.href}
              to={link.href}
              aria-current={isActiveLink(link.href) ? (link.href.includes('#') ? 'location' : 'page') : undefined}
              onClick={() => setOpenFor(null)}
              style={{ '--menu-order': index } as CSSProperties}
            >
              <span className="mobile-menu-link-label">{link.label}</span>
            </Link>
          ))
        )}
        <a href={profile.cv} target="_blank" rel="noreferrer" onClick={() => trackEvent('resume_click', { location: 'mobile-menu' })}><span className="mobile-menu-link-label">CV</span></a>
      </nav>
    </header>
  )
}
````

## File: src/components/SegmentedControl.tsx
````typescript
type Option = { value: string; label: string }

export function SegmentedControl({
  label,
  value,
  options,
  controls,
  onChange,
}: {
  label: string
  value: string
  options: Option[]
  controls: string
  onChange: (value: string) => void
}) {
  return (
    <div
      className="segmented-group version-switch"
      role="group"
      aria-label={label}
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          aria-pressed={value === option.value}
          aria-controls={controls}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
````

## File: src/components/VisualCaption.tsx
````typescript
import type { ReactNode } from 'react'

export function VisualCaption({ children, action }: { children: ReactNode; action?: ReactNode }) {
  return (
    <figcaption className="visual-caption">
      <span className="visual-caption-text">{children}</span>
      {action}
    </figcaption>
  )
}
````

## File: src/data/.gitkeep
````

````

## File: src/data/caseContent.ts
````typescript
import type { CaseBlock, Project } from './portfolio'

export type CaseGroupId = 'context' | 'structure' | 'concept' | 'system' | 'final'

export type CaseNode =
  | { kind: 'heading'; text: string; level: 3 | 4 }
  | { kind: 'paragraph'; text: string }
  | { kind: 'list'; items: string[]; ordered?: boolean }

export type CaseGroup = {
  id: CaseGroupId
  title: string
  nodes: CaseNode[]
}

export function withoutFinalPeriod(text: string) {
  const trimmed = text.trimEnd()
  if (!trimmed.endsWith('.') || /\.\.{1,}$/.test(trimmed) ||
    /(?:\p{L}\.\s*\p{L}\.|(?:^|\s)(?:\p{L}|млн|млрд|тыс|руб|см)\.)$/iu.test(trimmed))
    return text
  return trimmed.slice(0, -1) + text.slice(trimmed.length)
}

const groupTitles: Record<CaseGroupId, string> = {
  context: 'Контекст',
  structure: 'Стратегия и сценарии',
  concept: 'UX/UI-решения',
  system: 'Система и команда',
  final: 'Результаты и выводы',
}

function groupForHeading(text: string): CaseGroupId | undefined {
  if (text === 'О проекте' || text === 'Discovery' || text === 'Исходная ситуация') return 'context'
  if (text === 'Продуктовая стратегия' || text === 'Проектирование сценариев')
    return 'structure'
  if (text === 'UX/UI-решения' || text === 'UX/UI решения') return 'concept'
  if (text === 'Системный подход' || text === 'Работа с командой') return 'system'
  if (text === 'Результаты' || text.startsWith('Рефлексия')) return 'final'
  return undefined
}

const bulletPrefix = /^\s*[•—>-]\s*/

// Source documents use plain paragraphs for a few named subtopics. Keep that
// semantic information here instead of inferring headings from their position.
const namedSubtopics = new Set([
  'Ключевые инсайты', 'Основной JTBD', 'Дополнительный JTBD',
  'Контроль бизнеса', 'Операционная работа', 'Диагностика и самообслуживание',
  'Главный продуктовый принцип', 'Логика выбора решения',
  'Контроль работы обменника', 'Поиск и проверка ордера',
  'Диагностика интеграции', 'Изменение комиссии',
  'Дашборд для общей картины', 'Компактные фильтры',
  'Последовательное чтение деталей', 'Проверка доставки вебхуков',
  'Явное изменение финансовых настроек', 'Документация в рабочем контексте',
  'Управление командой', 'Разные причины — разные состояния', 'Мобильная работа',
  'Выбранное решение',
])

const introducingLines = new Set([
  'Кабинет разделён на три уровня работы',
  'Структура кабинета объединяет несколько самостоятельных пользовательских путей',
])

const orderedTopics = new Set([
  'Контроль работы обменника', 'Поиск и проверка ордера',
  'Диагностика интеграции', 'Изменение комиссии', 'Управление активами',
  'Отправка средств', 'Получение средств', 'Обмен',
])

function appendList(nodes: CaseNode[], items: string[]) {
  if (!items.length) return
  const previous = nodes[nodes.length - 1]
  if (previous?.kind === 'list') previous.items.push(...items)
  else {
    const heading = nodes.findLast(node => node.kind === 'heading')
    // These source topics describe ordered actions, rather than categories or findings.
    const ordered = heading?.kind === 'heading' && orderedTopics.has(heading.text.trim())
    nodes.push({ kind: 'list', items, ordered })
  }
}

function appendBlock(nodes: CaseNode[], block: CaseBlock) {
  if (block.kind.startsWith('HEADING_') || namedSubtopics.has(block.text.trim())) {
    nodes.push({
      kind: 'heading',
      text: block.text,
      level: block.kind === 'HEADING_3' || block.kind === 'HEADING_4' || namedSubtopics.has(block.text.trim()) ? 4 : 3,
    })
    return
  }

  const lines = block.text.split('\n').map((line) => line.trim()).filter(Boolean)
  if (!lines.length) return
  // Arrow-delimited source paths are explicit sequences; findings stay unordered.
  if (lines.length > 1 && lines.slice(1).every(line => line.startsWith('→'))) {
    nodes.push({ kind: 'list', ordered: true, items: lines.map(line => line.replace(/^→\s*/, '')) })
    return
  }
  const prose: string[] = []
  const bullets: string[] = []
  for (const line of lines) {
    if (block.bullet || bulletPrefix.test(line)) {
      bullets.push(line.replace(bulletPrefix, ''))
    } else {
      if (bullets.length) {
        if (prose.length) nodes.push({ kind: 'paragraph', text: prose.join(' ') })
        appendList(nodes, bullets.splice(0))
        prose.length = 0
      }
      prose.push(line)
    }
  }
  if (prose.length) {
    const text = prose.join(' ')
    nodes.push({ kind: 'paragraph', text: introducingLines.has(text) ? `${text}:` : text })
  }
  appendList(nodes, bullets)
}

export function getCaseGroups(project: Project): CaseGroup[] {
  const groups = (Object.keys(groupTitles) as CaseGroupId[]).map((id) => ({
    id,
    title: groupTitles[id],
    nodes: [] as CaseNode[],
  }))
  let current = groups[0]
  for (let index = 1; index < project.document.length; index += 1) {
    const block = project.document[index]
    const text = block.text.trim()
    if (!text || /^(Роль|Платформа|Ниша|Индустрия):/.test(text)) continue
    const nextGroup = groupForHeading(text)
    if (nextGroup) {
      current = groups.find((group) => group.id === nextGroup) ?? current
      // The section heading already names its opening topic.
      if (current.nodes.length === 0) continue
    }
    appendBlock(
      current.nodes,
      nextGroup && block.kind === 'NORMAL_TEXT'
        ? { ...block, kind: 'HEADING_2' }
        : block,
    )
  }
  return groups.filter((group) => group.nodes.length > 0)
}

export function getCaseNavigationSections(project: Project, isShort = false) {
  if (project.videos) return [{ id: 'overview', label: 'О проекте' }, ...project.videos.map(video => ({ id: video.id, label: video.shortTitle }))]
  const groups = getCaseGroups(project).filter(group => !isShort || group.id === 'context' || group.id === 'final')
  const reflection = groups.flatMap(group => group.nodes).find(node => node.kind === 'heading' && node.text.startsWith('Рефлексия'))
  return [{ id: 'overview', label: 'О проекте' }, ...groups.map(group => ({ id: group.id, label: group.title })),
    ...(reflection?.kind === 'heading' ? [{ id: 'reflection', label: reflection.text }] : [])]
}
````

## File: src/data/caseDiagramModes.ts
````typescript
export type DiagramMode = 'service-map' | 'filters' | 'route' | 'branch' | 'architecture' | 'convergence' | 'transformation' | 'contrast' | 'status-branch' | 'status-pairs' | 'state-map' | 'entity-map' | 'risk-map' | 'change-list'

// Modes reflect relationships stated in the case, not the number of data items.
const routes = new Set([
  'portal-commission', 'wallet-onboarding', 'wallet-send', 'wallet-receive',
  'wallet-seed', 'wallet-handoff', 'wallet-context', 'astoria-readiness', 'astoria-main-flow',
  'health-blueprint', 'health-design-first', 'health-funnel', 'health-consultation', 'health-tool',
  'health-learning', 'atlyx-lifecycle', 'atlyx-cycles', 'atlyx-place-flow',
  'atlyx-flight-fallback', 'atlyx-disclosure', 'atlyx-loop', 'astoria-system',
])
const branches = new Set(['portal-flow', 'astoria-price', 'atlyx-flight-flow'])
export const diagramHubs: Record<string, string> = {
  'portal-map': 'Рабочий кабинет',
  'portal-components': 'Компоненты кабинета',
  'wallet-architecture': 'MVP SkyWallet',
  'wallet-components': 'Дизайн-система SkyWallet',
  'astoria-widget': 'Внешний виджет',
  'astoria-cms': 'CMS',
  'health-architecture': 'Продукт',
  'health-hub': 'Личный кабинет',
  'health-system': 'Компоненты платформы',
  'atlyx-ecosystem': 'Поездка',
}
export const stateCenters: Record<string, string> = {
  'portal-states': 'Дашборд',
  'astoria-states': 'Выбор и оформление тура',
  'health-states': 'Сценарий пользователя',
  'atlyx-states': 'Сценарии поездки',
}
const transformations = new Set([
  'portal-orders-before-after', 'portal-disclosure', 'wallet-send-design',
  'atlyx-architecture',
])
const contrasts = new Set([
  'portal-hierarchy', 'portal-diagnostics', 'wallet-ecosystem', 'wallet-contours',
  'astoria-card-depth', 'health-problem', 'health-jobs', 'health-mvp',
])

export function diagramModeFor(id: string): DiagramMode | null {
  if (id === 'astoria-map') return 'service-map'
  if (id === 'astoria-filters') return 'filters'
  if (id === 'wallet-states') return 'status-branch'
  if (id === 'atlyx-statuses') return 'status-pairs'
  if (id === 'wallet-entities') return 'entity-map'
  if (id === 'wallet-risks') return 'risk-map'
  if (id === 'health-outcomes') return 'change-list'
  if (id in stateCenters) return 'state-map'
  if (['astoria-entry', 'astoria-intents', 'portal-support', 'astoria-problem'].includes(id)) return 'convergence'
  if (branches.has(id)) return 'branch'
  if (routes.has(id)) return 'route'
  if (id in diagramHubs) return 'architecture'
  if (transformations.has(id)) return 'transformation'
  if (contrasts.has(id)) return 'contrast'
  return null
}
````

## File: src/data/caseDocuments.json
````json
{
  "partner-portal": [
    {
      "kind": "HEADING_1",
      "bullet": false,
      "text": "Partner Portal — проверка ордеров на 25% быстрее"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Роль: Product дизайнер\nПлатформа: Web · Mobile\nНиша: FinTech / Crypto"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Discovery"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "SkyCapital предоставляет обменникам инфраструктуру WhiteLabel. Партнёры передают заявки через API, а сотрудники обменника контролируют операции, сверяют обороты и комиссии и разбирают проблемные обмены"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "В существующем кабинете уже были ордера, детали операций, клиенты и управление командой. Однако интерфейс не давал общей картины за период, а проверка статусов и интеграции оставалась связана с обращениями в поддержку"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Задача Partner Portal — объединить контроль бизнеса, работу с операциями и диагностику в одном рабочем инструменте"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "На этапе проектирования я:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "изучила бизнес-требования и техническое задание"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "разобрала существующую структуру кабинета"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "выделила сценарии контроля, сверки и самообслуживания"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "определила порядок перехода от общей ситуации к конкретному ордеру"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "разделила финансовые и технические уровни информации"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "проработала структуру новых разделов и мобильные версии"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Ключевые инсайты"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Список ордеров помогает проверить отдельный обмен, но не показывает состояние бизнеса за период"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Для первичной проверки нужны статус, суммы и комиссии; технический запрос нужен при более глубоком разборе"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Статус операции и доставка уведомления в систему партнёра требуют отдельных инструментов проверки"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Отсутствие данных и ошибка загрузки могут выглядеть одинаково, но требуют разных действий"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Мобильная версия должна сохранять возможность проверить операцию без работы с широкой таблицей"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Продуктовая проблема"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Главная проблема заключалась в разрыве между доступом к данным и возможностью самостоятельно разобраться в ситуации"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Партнёр мог найти ордер, но для полноценного контроля ему также требовалось:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "оценить оборот и комиссии за выбранный период"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "понять распределение операций по статусам"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "сопоставить финансовые и пользовательские данные"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "проверить, доставлено ли уведомление в его систему"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "найти документацию или изменить настройки"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Когда эти задачи не объединены последовательной логикой, пользователь тратит больше времени на проверку и чаще обращается за уточнениями"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Для бизнеса это создаёт зависимость обслуживания партнёров от ручной коммуникации и увеличивает нагрузку на поддержку"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "JTBD"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Основной JTBD"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Когда я проверяю работу обменника за период, я хочу видеть оборот, комиссии и распределение статусов, чтобы понять общую ситуацию и заметить отклонения без просмотра каждого ордера"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Дополнительный JTBD"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Когда обмен не завершился или его статус не обновился в моей системе, я хочу проверить ордер и доставку уведомления, чтобы определить следующий шаг или передать поддержке конкретные данные"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Продуктовая стратегия"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Основой решения стала последовательность:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Обзор → поиск операции → проверка деталей → диагностика интеграции"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Кабинет разделён на три уровня работы"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Контроль бизнеса"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Дашборд показывает ключевые показатели, динамику и распределение статусов за период"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Операционная работа"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Ордера и детали помогают найти конкретный обмен и сверить его параметры"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Диагностика и самообслуживание"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Вебхуки, API-документация, комиссии и управление командой поддерживают проверку интеграции и регулярные настройки"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Главный продуктовый принцип"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "На каждом этапе пользователь должен понимать:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "какие данные он сейчас проверяет"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "что означает текущее состояние"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "где найти подробности"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "какое действие доступно дальше"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Логика выбора решения"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Косметическое обновление таблиц сохраняло бы отсутствие общего обзора и диагностики"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Размещение всех показателей и технических данных на одном экране увеличивало бы плотность информации"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Разделение на связанные рабочие разделы позволяет показывать нужную глубину данных по мере перехода от общей задачи к конкретному случаю"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Проектирование сценариев"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Структура кабинета объединяет несколько самостоятельных пользовательских путей"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Контроль работы обменника"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Выбор периода"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Просмотр количества ордеров, объёма, комиссии и среднего чека"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Проверка динамики и распределения статусов"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Переход к операциям, если требуется подробная сверка"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Поиск и проверка ордера"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Переход в список ордеров"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Поиск и применение фильтров"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Открытие конкретной операции"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Проверка статуса, сумм, комиссий и данных клиента"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Просмотр исходного API-запроса при необходимости"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Определение следующего действия или подготовка запроса в поддержку"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Диагностика интеграции"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Переход в раздел вебхуков"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Поиск нужного события"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Проверка результата доставки"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Просмотр запроса и ответа"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Повторная отправка, предусмотренная в макете"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Повторная проверка или передача данных в поддержку"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Изменение комиссии"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Просмотр текущего значения"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Открытие диалога редактирования"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Ввод нового значения"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Сохранение или отмена изменения"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Дополнительно проработаны доступ к API-документации, перегенерация ключей и управление сотрудниками"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "UX/UI-решения"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Дашборд для общей картины"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Добавила четыре ключевых показателя: количество ордеров, объём, комиссию и средний чек"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Динамика и распределение статусов дополняют сводку. Пользователь начинает проверку с общей ситуации, затем переходит к деталям"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Компактные фильтры"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Собрала фильтры в строку над таблицей ордеров. Это освободило больше места для рабочего списка и сохранило поиск рядом с результатами"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Статусы выделены визуально, финансовые данные сгруппированы для сверки"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Последовательное чтение деталей"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Перестроила страницу ордера вокруг информации об обмене, комиссиях и данных пользователя"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Исходный API-запрос вынесен в отдельный раскрываемый блок. Статусы и JSON уже существовали в старом интерфейсе; я изменила их подачу и порядок просмотра"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Проверка доставки вебхуков"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Спроектировала историю событий и просмотр деталей доставки с запросом и ответом"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Этот раздел помогает проверять обмен данными между системами отдельно от финансового статуса ордера"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Явное изменение финансовых настроек"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Разделила работу с комиссиями клиентов и настройку комиссии обменника"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Изменение значения выполняется в отдельном диалоге с пояснением и явным сохранением"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Документация в рабочем контексте"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Объединила API-ключи, быстрый старт и пример запроса в одном разделе"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Для перегенерации ключей предусмотрен диалог с предупреждением о последствиях"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Управление командой"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Проработала добавление сотрудника, подтверждение создания, управление доступом и выдачу данных для входа"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Разные причины — разные состояния"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Для дашборда предусмотрены:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "загрузка"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "отсутствие данных за период"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "ошибка отдельного виджета"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "ошибка всего экрана"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "При частичном сбое доступные данные остаются на экране. Для ненайденного ордера предусмотрено отдельное состояние с возвратом к списку"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Мобильная работа"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "На мобильных экранах:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "ордера представлены карточками"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "навигация открывается через меню"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "фильтры и формы размещаются в нижних панелях"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "детали операции выстроены в последовательные блоки"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Системный подход"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Кабинет объединён повторно используемыми компонентами и общими правилами взаимодействия"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "В систему интерфейса вошли:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "навигация"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "кнопки и поля ввода"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "фильтры и выбор периода"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "таблицы и карточки"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "статусы"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "диалоги"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "уведомления"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "блоки технических данных"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "загрузка, пустые и ошибочные состояния"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Повторное использование карточек, фильтров и статусов помогает сохранять привычную логику работы при добавлении новых разделов"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Для продукта также реализована тёмная тема. Структура экранов и смысл статусов, предупреждений и действий сохраняются независимо от оформления"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Работа с командой"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "При подготовке к разработке я зафиксировала основные сценарии, состояния и адаптивную компоновку в макетах"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Ключевыми вопросами для согласования были:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "доступные поля и статусы операций"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "данные для диагностики вебхуков"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "возможности повторной отправки"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "ограничения при изменении комиссии"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "поведение интерфейса при ошибках API"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "В исходном ТЗ вебхуки зависели от отдельной разработки, а диапазон и формат комиссии требовали уточнения"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Поэтому проектирование этих сценариев было связано с возможностями API и продуктовой логикой. Детализация интерфейса должна учитывать согласованные данные и действия"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Результаты"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Сокращение времени поиска и проверки ордера на 20–30%"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Рост Task Success Rate — успешных проверок без подсказок — на 10–15 п. п."
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Снижение обращений в поддержку на 15–25% на 1 000 ордеров"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Рост D30 Retention партнёров в портале — возвращаемости через месяц — на 3–5 п. п."
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Рефлексия"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Этот проект научил меня проектировать финансовый кабинет вокруг вопросов пользователя: что происходит, где искать причину и что делать дальше"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Я стала внимательнее к глубине информации и состояниям интерфейса. Для первичной проверки нужны статус и суммы, для диагностики — запросы и ответы. Ошибка загрузки и отсутствие операций тоже требуют разных пояснений"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Главный вывод — самостоятельность пользователя зависит от всей цепочки: обзора, поиска, деталей и обратной связи. В следующих проектах я хочу раньше определять критерии успешного сценария, чтобы оценивать решения по выполнению задачи"
    }
  ],
  "skywallet": [
    {
      "kind": "HEADING_1",
      "bullet": false,
      "text": "SkyWallet — ошибки переводов −30%"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Роль: Product дизайнер\nПлатформа: Mobile app\nИндустрия: Fintech / Crypto"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Discovery"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "SkyCapital развивает экосистему финансовых сервисов. Новым продуктом должен был стать мобильный криптокошелёк для русскоязычной аудитории, сопоставимый по базовой логике с Trust Wallet и MetaMask, но интегрированный с биржевой инфраструктурой SkyCapital"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Продукт объединял два ключевых сценария:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— самостоятельное хранение криптоактивов в некастодиальном кошельке\n— обмен, пополнение и вывод средств через централизованную биржу"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Основными пользователями стали люди с базовым и средним уровнем понимания криптовалют. Они уже могли пользоваться криптокошельками, но ожидали более понятный русскоязычный интерфейс, прозрачную работу с рублями и меньше рисков при выполнении финансовых операций"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "На этапе Discovery я:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— изучила бизнес-требования и техническое задание\n— разобрала механику некастодиальных и депозитарных кошельков\n— проанализировала MetaMask, Trust Wallet, Coinbase Wallet, TronLink и другие решения\n— сравнила сценарии создания кошелька, импорта, отправки, получения и обмена активов\n— определила основные пользовательские сегменты и их ожидания\n— провела UX-аудит критичных финансовых сценариев\n— построила информационную архитектуру и карту продукта\n— сформировала user flow для ключевых сценариев MVP"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Ключевые инсайты"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— пользователи плохо различают кошелёк, аккаунт, сеть и актив\n— при объединении DEX- и CEX-сценариев возникает риск смешения собственных средств и биржевого баланса\n— большая часть критичных ошибок происходит из-за неверной сети, адреса или недостаточного баланса для комиссии\n— новички ожидают, что доступ к некастодиальному кошельку можно восстановить через поддержку\n— перегруженные формы повышают вероятность ошибки при отправке средств\n— безопасность должна быть встроена в сценарий, а не вынесена в отдельные предупреждения"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Продуктовая проблема"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Главная сложность проекта заключалась в объединении двух принципиально разных финансовых контуров"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "В некастодиальном кошельке приватные ключи и seed-фраза находятся только у пользователя. SkyCapital не может восстановить доступ к активам или отменить транзакцию"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "В биржевом контуре средства хранятся на стороне платформы, а операции с рублями требуют идентификации пользователя и подчиняются другой логике"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Без чёткого разделения пользователь мог:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— не понимать, где именно находятся его средства\n— путать личный кошелёк и депозитарный счёт\n— выбрать неправильную сеть при переводе\n— потерять доступ к активам из-за утраты seed-фразы\n— ожидать отмену или восстановление необратимой операции\n— отправить средства с аккаунта, который не собирался использовать\n— не учесть сетевую комиссию"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Такие ошибки могли привести к дополнительным обращениям в поддержку, снижению доверия и финансовым потерям пользователей"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "JTBD"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Основной JTBD"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Когда я хочу хранить и использовать криптовалюту, я хочу видеть понятный контекст кошелька, сети и операции, чтобы безопасно управлять активами и не допустить ошибку при переводе или обмене"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Дополнительный JTBD"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Когда я хочу купить, обменять или вывести криптовалюту через Sky Capital, я хочу понимать, где находятся мои средства и какие правила действуют для операции, чтобы не путать личный кошелёк с биржевым счётом"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Продуктовая стратегия"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Основой решения стало разделение продукта на два самостоятельных финансовых контура"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "SkyWallet — некастодиальный контур"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Включал:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— создание и импорт кошелька\n— работу с seed-фразой\n— управление кошельками и аккаунтами\n— просмотр активов по сетям\n— отправку и получение средств\n— Swap через децентрализованные механики\n— историю и детали транзакций"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Приватные ключи не передавались на сервер, а чувствительные действия подтверждались локальным паролем"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Sky Capital — биржевой контур"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Включал:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— торговые пары\n— Market- и Limit-ордера\n— открытые и завершённые заявки\n— депозитарный счёт\n— пополнение и вывод криптовалюты\n— операции с рублями через СБП\n— идентификацию пользователя"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Контуры были разделены на уровне навигации, терминологии, структуры экранов и визуального контекста"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Главный продуктовый принцип"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Пользователь на каждом этапе должен понимать:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— где находятся его средства\n— какой кошелёк и аккаунт активны\n— в какой сети выполняется операция\n— можно ли восстановить или отменить действие\n— какая комиссия будет списана"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Рассматриваемые альтернативы"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Единый баланс для всех средств\nПодход выглядел проще, но создавал ложное ощущение, что некастодиальные и биржевые активы хранятся одинаково"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Переключатель DEX / CEX внутри одного экрана\nТакое решение экономило место, но повышало риск, что пользователь не заметит смену финансового контура"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Полное разделение на два приложения\nЭто снижало риск смешения сценариев, но усложняло вход в экосистему и увеличивало стоимость разработки"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "В результате было выбрано единое приложение с чётко разделёнными зонами и постоянным отображением текущего финансового контекста"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Проектирование сценариев"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Я построила общую карту продукта и разложила её на отдельные user flow"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Онбординг и безопасность"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Приветственный экран"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Создание нового или импорт существующего кошелька"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Просмотр seed-фразы"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Подтверждение слов в правильном порядке"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Создание локального пароля"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Вход в приложение"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Восстановление доступа через повторный импорт кошелька"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Критичной частью сценария стало объяснение, что локальный пароль нельзя восстановить через поддержку, а доступ к активам зависит от сохранённой seed-фразы"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Управление активами"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Выбор кошелька"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Выбор аккаунта"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Просмотр общего баланса"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Просмотр активов по сетям"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Переход в карточку актива"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Просмотр истории и деталей операций"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Отправка средств"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Выбор актива"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Ввод или сканирование адреса"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Ввод суммы"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Проверка валидности данных и баланса"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Просмотр сети и комиссии"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Подтверждение транзакции"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Отслеживание статуса"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Получение средств"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Выбор актива и сети"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Получение корректного адреса"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Копирование адреса или показ QR-кода"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Предупреждение о переводе только в выбранной сети"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Обмен"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Выбор DEX- или биржевого контура"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Выбор торговой пары"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Выбор Market- или Limit-ордера"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Ввод суммы"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Проверка курса и комиссии"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Подтверждение операции"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Просмотр статуса ордера"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "В результате была сформирована архитектура из нескольких десятков экранов и состояний, охватывающих основной функционал MVP"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "UX/UI-решения"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Разделение кошелька и биржи"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Некастодиальные и биржевые сценарии получили отдельную структуру и визуальный контекст"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Пользователь всегда видел, работает ли он:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— со средствами в собственном кошельке\n— с депозитарным балансом SkyCapital\n— в DEX- или CEX-сценарии"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Постоянный активный контекст"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "На ключевых экранах отображались:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— выбранный Wallet\n— активный Account\n— сеть\n— актив\n— доступный баланс"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Это снижало вероятность отправки средств не из того аккаунта или через неподходящую сеть"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Пошаговая отправка средств"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Вместо одной перегруженной формы сценарий был разделён на этапы:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— выбор актива\n— ввод данных\n— проверка транзакции\n— подтверждение"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Перед отправкой пользователь повторно видел сумму, адрес, сеть и комиссию"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Защита критичных действий"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Просмотр seed-фразы и приватных ключей был доступен только после:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— предупреждения о риске\n— ввода локального пароля\n— дополнительного подтверждения"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Понятное восстановление доступа"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "В интерфейсе отдельно объяснялось:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— почему поддержка не может восстановить seed-фразу\n— что произойдёт после сброса приложения\n— как вернуть доступ через повторный импорт кошелька\n— почему seed-фразу нельзя передавать другим людям"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Предупреждение ошибок до подтверждения"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Для критичных сценариев были предусмотрены:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— проверка формата адреса\n— проверка соответствия сети\n— недостаточный баланс\n— недостаточный баланс для комиссии\n— неподдерживаемая сеть\n— disabled-состояния\n— предупреждение о необратимости операции"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Статусы операций"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Для транзакций и ордеров были проработаны состояния:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— pending\n— success\n— failed\n— loading\n— empty\n— error"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Пользователь мог понимать, завершена ли операция, находится ли она в обработке и требуется ли дополнительное действие"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Работа с терминологией"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Сущности Wallet, Account, Network, Asset и Address были разведены через:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— устойчивую визуальную иерархию\n— отдельные подписи и селекторы\n— контекстные пояснения\n— последовательную терминологию во всех сценариях"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Это помогло снизить когнитивную нагрузку без чрезмерного упрощения финансовой логики"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Системный подход"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Параллельно с проектированием сценариев я разработала дизайн-систему SkyWallet"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "В неё вошли:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— цветовая система\n— типографика\n— сетка и spacing\n— кнопки и их состояния\n— поля ввода\n— селекты\n— карточки активов\n— статусы транзакций\n— предупреждения и информационные блоки\n— модальные окна\n— иконки активов и сетей\n— иллюстрации\n— skeleton-состояния"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Компоненты создавались с учётом разных состояний и дальнейшего масштабирования продукта"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Особое внимание уделялось консистентности между:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— онбордингом\n— кошельком\n— торговыми сценариями\n— историей операций\n— системными разделами\n— ошибками и предупреждениями"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "SkyWallet сохранил визуальную связь с экосистемой SkyCapital, но получил собственный характер, логотип и набор иллюстраций"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Работа с командой"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Я была единственным дизайнером проекта и отвечала за полный дизайн-процесс"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "В работе с командой я:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— уточняла бизнес-логику и требования к MVP\n— обсуждала механику хранения и движения средств\n— согласовывала архитектуру DEX- и CEX-контуров\n— прорабатывала технические ограничения вместе с разработчиками\n— уточняла требования безопасности\n— описывала поведение ошибок и системных состояний\n— готовила кликабельные прототипы\n— передавала макеты, компоненты и спецификации\n— объясняла сложные сценарии через user flow\n— участвовала в приоритизации функциональности MVP\n— готовила решения с учётом дальнейшего масштабирования продукта"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Результаты"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— рост завершённости создания или импорта кошелька на 15–20%\n— снижение ошибок при отправке средств на 20–30%\n— сокращение времени выполнения перевода на 15–25%\n— снижение обращений по seed-фразе, сетям и комиссиям на 15–20%\n— рост завершённости первой транзакции на 10–15%\n— снижение количества дизайн-доработок во время разработки на 20–30%"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Рефлексия"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Этот проект научил меня глубже разбираться в логике продукта до того, как переходить к интерфейсу. В SkyWallet многие решения напрямую зависели от того, где хранятся средства, как работают сети, комиссии и восстановление доступа"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Ещё один важный вывод — в финансовых сценариях нельзя проектировать только идеальный путь. Ошибки, ограничения и спорные состояния нужно продумывать сразу, потому что именно в них пользователь чаще всего теряется"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "После этого проекта я стала сильнее смотреть на дизайн как на работу с системой, а не с отдельными экранами"
    }
  ],
  "astoria": [
    {
      "kind": "HEADING_1",
      "bullet": false,
      "text": "Астория — +12% к заявкам"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Спроектировала адаптивный сервис для поиска, сравнения и оформления туров. Собственный интерфейс на базе API Турвизора позволил выйти за рамки готовых виджетов и заложить основу онлайн-турагентства"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Роль: UX/UI-дизайнер\nПлатформа: Web · Mobile\nНиша: TravelTech"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Исходная ситуация"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "На старте сайт использовал готовые виджеты Турвизора для поиска туров. Бизнес не мог самостоятельно менять логику выдачи и сценарий оформления, а также гибко работать со страницами направлений, промоблоками и SEO-контентом"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Вместо редизайна отдельного виджета нужно было спроектировать собственный сервис на базе API Турвизора и связать основные задачи пользователя в один сценарий:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— поиск тура\n — сравнение предложений\n — выбор страны, курорта и отеля\n — проверка состава и актуальной цены\n — отправка заявки или онлайн-оплата"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "На этапе погружения я:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— проанализировала существующий путь пользователя\n — разобрала структуру данных и ограничения API\n — определила ключевые сущности продукта\n — составила карту сайта и переходов\n — разделила сценарии по уровню готовности пользователя к покупке\n — зафиксировала функциональность клиентской части и CMS"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Продукт включал поисковую выдачу, страницы стран и курортов, карточку тура, форму заявки, оплату через ЮKassa и управление контентом через Strapi"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Ключевые инсайты"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Не все пользователи начинают выбор с точного поискового запроса: часть аудитории сначала изучает цены, страны и горячие предложения"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "В выдаче важно поддержать быстрое сравнение, а не показывать всю информацию о туре сразу"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Цена и наличие могут изменяться, поэтому пользователь должен понимать, когда данные проверены повторно"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Пользователю нужен альтернативный путь: оформить самостоятельно или обратиться к менеджеру"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Контентная структура должна работать не только на UX, но и на SEO и самостоятельное управление со стороны бизнеса"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Продуктовая проблема"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Внешний виджет решал отдельную функцию поиска, но не создавал целостный продуктовый опыт"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Пользователь сталкивался с несколькими проблемами:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— разрозненными точками входа\n — большим количеством параметров\n — недостатком контекста для сравнения\n — слабой связью между поиском, карточкой и заявкой\n — отсутствием прозрачного пути к оформлению"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Для бизнеса проблема заключалась в зависимости от стороннего интерфейса. Команда не могла гибко управлять выдачей, продвигать нужные направления, развивать SEO-страницы и тестировать новые сценарии"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Продуктовый вопрос"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Как помочь пользователю перейти от общего желания поехать в отпуск к выбору конкретного тура и отправке заявки, не перегружая его сложными параметрами?"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Бизнес-вопрос"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Как превратить внешний виджет в собственный управляемый продукт, который можно масштабировать без постоянной зависимости от стороннего решения?"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "JTBD"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Основной JTBD"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Когда я планирую отпуск и ещё не определилась с конкретным отелем, я хочу быстро сравнить подходящие туры по понятным критериям, чтобы выбрать лучший вариант и оформить поездку в одном сервисе"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Дополнительный JTBD"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Когда я ещё не выбрала направление, я хочу посмотреть горячие предложения, минимальные цены и подборки стран, чтобы понять, какие варианты подходят под мой бюджет"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Продуктовая стратегия"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Я выстроила сервис вокруг разных уровней готовности пользователя"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Пользователь знает параметры поездки"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Начинает с формы поиска, указывает направление, даты, город вылета и состав туристов"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Пользователь ещё выбирает"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Переходит в горячие туры, минимальные цены, подборки стран или популярные направления"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Пользователь сравнивает варианты"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Использует фильтры и сортировку, сопоставляет стоимость, питание, рейтинг, длительность и условия тура"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Пользователь готов оформить поездку"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Отправляет заявку менеджеру или переходит к онлайн-оплате"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Рассмотренные альтернативы"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Оставить внешний виджет и обновить только визуальную оболочку"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Решение было дешевле на старте, но сохраняло зависимость от стороннего интерфейса и не позволяло управлять поиском и оформлением"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Сделать только поиск и выдачу"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Такой подход закрывал основную функцию, но не поддерживал исследовательский сценарий и не создавал основу для SEO-продвижения"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Выбранное решение"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Собственный адаптивный агрегатор с несколькими точками входа, связанными единой поисковой логикой. Он поддерживает и быстрый поиск, и постепенный выбор направления"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Проектирование сценариев"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Основной путь пользователя:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Главная → параметры поездки → выдача → фильтрация → карточка тура → заявка или оплата"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "1. Начало поиска"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Пользователь задаёт:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— город вылета\n — страну или курорт\n — даты\n — продолжительность\n — количество туристов"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Пользователь без точного запроса может начать с подборки или страницы направления"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "2. Поисковая выдача"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Пользователь:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— просматривает доступные предложения\n — уточняет запрос через фильтры\n — сортирует туры\n — сравнивает ключевые параметры\n — переходит к выбранному отелю"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "3. Карточка тура"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Пользователь получает:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— фотографии и описание отеля\n — информацию о номере и питании\n — данные о перелёте\n — включённые услуги\n — продолжительность поездки\n — актуальную цену и наличие"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "При открытии карточки данные повторно проверяются через API, чтобы не показывать устаревшую стоимость"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "4. Оформление"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Предусмотрены два пути:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— заявка менеджеру\n — самостоятельная оплата через ЮKassa"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "После оплаты пользователь возвращается на страницу результата, а данные о заказе передаются в CRM"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "UX/UI-решения"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Единая поисковая логика"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Я связала главную, страницы направлений, подборки и горячие туры с одной выдачей. При переходе из контентного блока пользователь попадает в результаты с уже установленными параметрами"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Приоритизация фильтров"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Основные критерии вынесены на первый уровень:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— цена\n — даты\n — питание\n — звёзды\n — расположение\n — продолжительность"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Дополнительные параметры сгруппированы и раскрываются по необходимости. Это снижает когнитивную нагрузку и не превращает выдачу в длинную форму"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Карточки для сравнения"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "В карточке выдачи оставлена только информация, необходимая для решения о переходе:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— отель и рейтинг\n — направление\n — даты\n — питание\n — длительность\n — стоимость\n — специальные признаки тура"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Детали перелёта, размещения и услуг перенесены в карточку тура"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Разные точки входа"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "На главной предусмотрены:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— стартовый поиск\n — горячие туры\n — минимальные цены\n — спецпредложения\n — популярные направления\n — подборки стран и курортов"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Так сервис поддерживает пользователей как с точным запросом, так и без сформированного направления"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Контекстная помощь"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Блок обращения к менеджеру расположен на ключевых страницах, но не конкурирует с основным CTA. Пользователь может продолжить самостоятельное оформление или получить помощь"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Состояния интерфейса"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Проработаны:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— загрузка результатов\n — пустая выдача\n — изменение цены\n — отсутствие доступных туров\n — ошибки формы\n — успешная и неуспешная оплата\n — отправка заявки\n — повторная проверка наличия"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Адаптивность"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Для desktop, tablet и mobile подготовлены отдельные варианты ключевых экранов"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "В мобильной версии:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— фильтры открываются последовательно\n — формы разбиты на компактные блоки\n — карточки упрощены для вертикального просмотра\n — основные действия остаются доступными в длинных сценариях"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Системный подход"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Работу начала с продуктовой карты и зафиксировала основные сущности:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— страны\n — курорты\n — направления\n — отели\n — туры\n — подборки\n — горячие предложения\n — заявки\n — платежи\n — контентные страницы\n — промо-блоки"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "На основе повторяющихся паттернов подготовила компонентную структуру:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— поля поиска\n — селекторы дат и туристов\n — фильтры\n — карточки туров\n — ценовые блоки\n — теги и статусы\n — элементы сортировки\n — формы\n — уведомления\n — состояния загрузки и ошибок"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Компоненты использовались в разных частях продукта, что обеспечило консистентность главной, выдачи, страниц направлений и карточки тура"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Отдельно была спроектирована логика Strapi. Через CMS бизнес сможет управлять:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— текстами и изображениями\n — SEO-данными\n — баннерами\n — подборками\n — горячими турами\n — приоритетом направлений\n — структурой контентных страниц"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Это снижает зависимость от разработчиков при обновлении витрины"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Работа с командой"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Я отвечала за полный дизайн-цикл продукта:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— сформировала карту сайта\n — спроектировала пользовательские сценарии\n — подготовила wireframes\n — разработала UI-концепцию\n — создала адаптивные макеты\n — собрала кликабельный прототип\n — описала бизнес-логику и состояния\n — подготовила компоненты и спецификации"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Работала с учётом технической архитектуры:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— API Турвизора\n — backend-прослойка\n — Strapi\n — ЮKassa\n — CRM заказчика"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Совместно с командой учитывала ограничения интеграций, логику обновления цен, структуру данных и жизненный цикл платежа"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Результаты"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— +10% к конверсии из поиска тура в отправку заявки за счёт переработки поиска, фильтрации и карточек туров"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— +13% CTR карточек туров благодаря улучшению визуальной иерархии, структуры информации и CTA"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— −16% времени поиска подходящего тура за счёт оптимизации фильтров и структуры каталога"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— −5% отказов на этапе выбора тура благодаря более понятному пользовательскому сценарию"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Рефлексия"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Этот проект научил меня смотреть на сервис не как на набор отдельных экранов, а как на систему связанных сценариев и точек входа"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Главный вывод для меня — хороший продуктовый сценарий начинается не с интерфейса, а с понимания того, в каком состоянии пользователь приходит в продукт. В «Астории» часть пользователей уже знает параметры поездки, а часть только исследует направления и цены. Из-за этого одинаково важны и прямой поиск, и исследовательский путь через подборки, страны и курорты"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Ещё проект хорошо показал, насколько важно заранее разделять уровни информации. В выдаче пользователю нужно быстро сравнивать варианты, а в карточке — уже принимать решение. Если пытаться показать всё сразу, интерфейс становится тяжелее и выбор только усложняется."
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Также я сильнее начала учитывать системные и технические ограничения ещё на этапе UX: работу API, актуализацию цены, состояния недоступности, CMS и передачу данных между сервисами. Это помогает проектировать не только happy path, но и реальное поведение продукта."
    }
  ],
  "womens-health": [
    {
      "kind": "HEADING_1",
      "bullet": false,
      "text": "HealthTech: +25% Activation Rate"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Роль: UX/UI-дизайнер"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Платформа: Web · Mobile"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Ниша: FemTech / HealthTech"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "О проекте"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Шефова.онлайн — B2C-платформа в сфере женского здоровья, созданная на базе личного бренда врача-эксперта"
    },
    {
      "kind": "HEADING_1",
      "bullet": false,
      "text": "Discovery"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "На старте существовали личный бренд, активные социальные сети, Taplink, набор образовательных продуктов и идея будущей экосистемы. При этом не были определены единая архитектура продукта, приоритеты MVP и связи между отдельными направлениями"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Я начала работу с анализа текущей продуктовой модели:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— как пользовательницы знакомятся с экспертом\n — через какие точки входа находят курсы и марафоны\n — как записываются на консультацию\n — где получают бесплатный контент\n — как происходит оплата и выдача доступов\n — какие операции выполняются вручную\n — какие сценарии должны перейти в самостоятельный цифровой продукт"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Дополнительно я разобрала:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— структуру будущих образовательных продуктов\n — типы бесплатного и платного контента\n — логику консультаций\n — состав персональных данных\n — требования к веб- и мобильной версиям\n — технические ограничения первого этапа"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Ключевые выводы"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "1. Продукт нельзя было проектировать как обычный сайт"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Пользовательский путь не заканчивался на покупке. После оплаты пользовательнице требовалось возвращаться к курсу, следить за прогрессом, управлять консультациями, сохранять результаты и использовать инструменты платформы"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "2. Основной сценарий был фрагментирован"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Контент, продукты, консультации и бесплатные материалы находились в разных точках. Пользовательнице было сложно понять, какой следующий шаг соответствует её задаче"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "3. Коммерческие и удерживающие сценарии не были связаны"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Бесплатный контент формировал доверие, но не был встроен в понятный путь к консультации или подходящему образовательному продукту"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "4. Широкий scope создавал риск перегрузить первый релиз"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Первоначальная концепция включала сайт, приложение, LMS, CRM, подписку, несколько языков, медицинское хранилище и большое количество инструментов. Переход сразу к разработке мог привести к росту стоимости и переработке базовой логики"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Поэтому первым этапом стал Design First: определить архитектуру, ключевые сценарии и границы MVP до технической реализации. Такой формат также был зафиксирован в проектной документации как способ согласовать UX, UI и продуктовую логику до оценки разработки"
    },
    {
      "kind": "HEADING_1",
      "bullet": false,
      "text": "Продуктовая проблема"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Контент, покупка, обучение и консультации существовали отдельно: переходы между ними требовали ручных шагов"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Пользовательница могла увидеть экспертный материал в социальной сети, перейти в Taplink, открыть отдельную страницу продукта, написать для записи на консультацию, оплатить услугу и получить доступ через сообщения. Каждый этап существовал отдельно и зависел от ручной коммуникации"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "В результате пользовательнице было сложно понять:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— какие продукты доступны\n — чем отличаются курсы, гайды и марафоны\n — какой формат подходит под её задачу\n — как записаться на консультацию\n — где найти оплаченные материалы\n — как продолжить обучение\n — где хранить результаты и историю взаимодействия"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Для бизнеса это создавало несколько рисков:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— зависимость продаж от социальных сетей\n — ручная выдача доступов\n — высокая операционная нагрузка\n — отсутствие единой продуктовой аналитики\n — слабая связь между бесплатным контентом и покупкой\n — невозможность масштабировать количество продуктов без усложнения процессов"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Главный продуктовый вызов состоял в том, чтобы объединить коммерческие, образовательные и регулярные сценарии, не превратив платформу в перегруженный набор функций"
    },
    {
      "kind": "HEADING_1",
      "bullet": false,
      "text": "JTBD"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Основной JTBD"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Когда я хочу разобраться в вопросе женского здоровья или решить конкретную проблему, я хочу выбрать подходящую программу или консультацию у эксперта, которому доверяю, чтобы получить понятный план действий и доступ ко всему необходимому в одном месте"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Дополнительный JTBD"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Когда я хочу регулярно следить за своим состоянием, я хочу использовать понятные инструменты, трекеры и проверенные материалы, чтобы лучше понимать своё здоровье и не искать информацию заново в разных источниках"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "На основе JTBD я разделила продуктовые сценарии на две группы"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Конверсионные"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— выбор курса, гайда или марафона\n — изучение программы\n — выбор тарифа\n — покупка\n — запись на консультацию\n — оплата\n — получение доступа"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Удерживающие"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— продолжение обучения\n — отслеживание прогресса\n — просмотр статей, видео и подкастов\n — использование калькуляторов и тестов\n — сохранение результатов\n — управление консультациями\n — возвращение к персональным данным"
    },
    {
      "kind": "HEADING_1",
      "bullet": false,
      "text": "Продуктовая стратегия"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Я собрала продукт вокруг единой воронки:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "экспертный контент → бесплатная ценность → доверие → выбор решения → покупка → регулярное использование"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Вместо отдельных страниц и сервисов платформа должна была работать как связанная система"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Пользовательница могла:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Прийти из поиска или социальной сети"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Изучить бесплатный материал"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Перейти к связанному инструменту, курсу или консультации"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Выбрать подходящий формат"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Оплатить продукт"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Получить доступ в личном кабинете"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": true,
      "text": "Возвращаться к обучению, консультациям и персональным инструментам"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Приоритизация MVP"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "В первый релиз вошли функции, которые напрямую поддерживали основной пользовательский и коммерческий сценарий:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— главная страница\n — каталог продуктов\n — карточка курса или марафона\n — выбор тарифа\n — запись на консультацию\n — регистрация и авторизация\n — личный кабинет\n — доступ к купленным материалам\n — библиотека знаний\n — базовые тесты, калькуляторы и трекеры\n — уведомления и системные состояния"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "В последующие этапы были вынесены:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— собственная CRM\n — расширенное хранение медицинских данных\n — мультиязычность\n — офлайн-доступ\n — биометрическая защита\n — сложная подписочная логика\n — расширенная система уведомлений\n — часть мобильных сценариев"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Рассматриваемые альтернативы"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Отдельный маркетинговый сайт и внешняя LMS"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Решение было проще для быстрого запуска, но сохраняло разрыв между продажей, обучением, консультациями и персональными данными"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Полная экосистема в первом релизе"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Такой подход покрывал всю исходную концепцию, но существенно увеличивал стоимость, сроки и количество непроверенных гипотез"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Выбранный подход"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Единая архитектура с ограниченным MVP позволяла проверить основную ценность продукта и одновременно заложить основу для дальнейшего масштабирования"
    },
    {
      "kind": "HEADING_1",
      "bullet": false,
      "text": "Проектирование сценариев"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Я спроектировала карту продукта, информационную архитектуру и ключевые user flow для веб- и мобильной частей"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Покупка курса или марафона"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Главная страница\n → каталог\n → выбор направления\n → карточка продукта\n → программа и ожидаемый результат\n → выбор тарифа\n → авторизация\n → оплата\n → подтверждение\n → доступ в личном кабинете"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "В сценарии я разделила информационный и транзакционный этапы. Сначала пользовательница получает достаточно контекста для выбора, затем переходит к оплате без лишних отвлечений"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Запись на консультацию"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Страница консультаций\n → выбор специалиста или формата\n → выбор даты\n → выбор времени\n → ввод данных\n → оплата\n → подтверждение\n → отображение встречи в личном кабинете"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "После записи консультация становилась частью аккаунта пользователя, а не отдельным событием в переписке"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Использование бесплатного инструмента"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Главная, статья или раздел инструментов\n → выбор калькулятора или теста\n → последовательный ввод данных\n → результат\n → пояснение\n → связанный материал, программа или консультация"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Бесплатный инструмент выполнял сразу две задачи: давал самостоятельную ценность и помогал продолжить путь внутри продукта"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Возвращение к обучению"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Авторизация\n → личный кабинет\n → мои продукты\n → выбор программы\n → продолжение с последнего этапа\n → просмотр прогресса\n → переход к следующему материалу"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Управление персональными данными"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Профиль\n → личные данные\n → изменение email или пароля\n → подтверждение действия\n → успешное состояние"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Для чувствительных операций были проработаны подтверждения, загрузки, ошибки и сценарии восстановления доступа"
    },
    {
      "kind": "HEADING_1",
      "bullet": false,
      "text": "UX/UI-решения"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Единая навигационная модель"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Я объединила основные направления бренда в общей архитектуре:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— знания\n — продукты\n — инструменты\n — консультации\n — профиль"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Разделы сохранили самостоятельность, но были связаны через рекомендации, CTA и тематические переходы"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Например, статья о дефицитах могла вести к калькулятору, после результата — к релевантному гайду или консультации"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Понятная витрина продуктов"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Платные продукты были разделены по типу, теме и задаче пользователя"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "В карточке продукта я вынесла:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— кому подходит программа\n — какую задачу она решает\n — формат\n — длительность\n — программу\n — ожидаемый результат\n — информацию об эксперте\n — тарифы\n — стоимость\n — основной CTA"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Это помогало сравнивать продукты по одинаковой логике, а не разбираться в каждом предложении заново"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Личный кабинет как центр экосистемы"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Личный кабинет объединил:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— купленные программы\n — прогресс обучения\n — историю и будущие консультации\n — подписки\n — персональные данные\n — настройки уведомлений\n — результаты и сохранённые материалы"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Покупка переставала быть конечным действием и становилась началом регулярного пользовательского сценария"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Progressive disclosure"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Сложные действия были разделены на последовательные этапы:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— регистрация\n — восстановление пароля\n — изменение персональных данных\n — запись на консультацию\n — прохождение теста\n — настройка трекера"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Пользовательнице показывалась только информация, необходимая на текущем шаге. Это снижало когнитивную нагрузку и делало сценарии более предсказуемыми"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Снижение тревожности"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Поскольку продукт связан со здоровьем, интерфейс должен был поддерживать ощущение контроля, а не усиливать тревожность"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Для этого я использовала:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— спокойную визуальную иерархию\n — понятный язык без избыточной медицинской терминологии\n — явные статусы действий\n — последовательную структуру экранов\n — пояснения рядом со сложными полями\n — предупреждения без агрессивной визуальной подачи\n — безопасные сценарии работы с персональными данными"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Системные состояния"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Помимо основных экранов я проработала:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— loading\n — skeleton\n — success\n — error\n — empty state\n — отсутствие подключения\n — ошибка загрузки контента\n — ошибка записи\n — заблокированный контент\n — бесплатный и платный доступ\n — подтверждение выхода\n — подтверждение удаления или изменения данных"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Это позволило рассматривать сценарий как полный пользовательский путь, а не только как набор идеальных экранов"
    },
    {
      "kind": "HEADING_1",
      "bullet": false,
      "text": "Системный подход"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Продукт включал маркетинговый сайт, личный кабинет, образовательную среду, коммерческие сценарии и мобильную версию. Поэтому отдельные макеты необходимо было объединить в единую систему"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Я разработала UI-kit, в который вошли:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— цветовые роли\n — типографика\n — сетка\n — система отступов\n — кнопки\n — поля ввода\n — селекты\n — чекбоксы\n — карточки\n — теги\n — табы\n — навигация\n — модальные окна\n — уведомления\n — системные сообщения\n — состояния компонентов"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Компоненты создавались с учётом разных контекстов:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— web и mobile\n — платный и бесплатный контент\n — активное и заблокированное состояние\n — заполненные и пустые данные\n — пользователь с покупками и новый пользователь\n — успешные и ошибочные действия"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Отдельно была заложена единая логика для:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— карточек образовательного контента\n — карточек продуктов\n — прогресса обучения\n — записи на консультацию\n — калькуляторов и тестов\n — системных уведомлений"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Такой подход позволял добавлять новые направления и продукты без проектирования каждого раздела с нуля"
    },
    {
      "kind": "HEADING_1",
      "bullet": false,
      "text": "Работа с командой"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Я участвовала в проекте как единственный дизайнер и взаимодействовала с клиенткой, менеджером и разработчиками на всех этапах"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "С клиенткой-экспертом"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Уточняла:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— продуктовую модель\n — состав и различия продуктов\n — бизнес-приоритеты\n — логику консультаций\n — типы контента\n — предполагаемые пользовательские данные\n — ограничения MVP\n — будущие направления развития"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Моя задача заключалась не только в визуализации требований, но и в переводе широкой идеи в структуру цифрового продукта"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "С менеджером"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Согласовывала:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— объём этапов\n — приоритеты\n — зависимости между модулями\n — порядок согласования\n — границы первого релиза\n — материалы для оценки разработки"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "С разработчиками"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Обсуждала:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— общую архитектуру веб- и мобильной версий\n — авторизацию\n — оплату\n — календарь и бронирование\n — хранение пользовательских данных\n — повторное использование бизнес-логики\n — технические ограничения\n — этапность реализации\n — состав обязательных состояний"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Перед передачей в разработку я подготовила:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— карту продукта\n — user flow\n — UX- и UI-макеты\n — кликабельный прототип\n — библиотеку компонентов\n — состояния интерфейса\n — описание логики переходов\n — основу для технической оценки"
    },
    {
      "kind": "HEADING_1",
      "bullet": false,
      "text": "Результаты"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— +12% к активации новых пользователей за счёт выделения ключевого сценария первого использования и сокращения MVP до наиболее ценных функций"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— +10% к конверсии в запись на консультацию благодаря переработке пользовательского пути и усилению CTA"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— +8% D30 Retention за счёт объединения образовательного контента, консультаций и трекинга здоровья в единую экосистему"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— −15% времени до первого целевого действия благодаря упрощению навигации и продуктовой архитектуры"
    },
    {
      "kind": "HEADING_1",
      "bullet": false,
      "text": "Рефлексия по кейсу"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Этот проект показал мне, насколько важно начинать не с интерфейса, а со структуры продукта. Когда в одной идее одновременно есть обучение, консультации, трекеры, личный кабинет, подписка и работа с персональными данными, главная задача дизайнера — не «упаковать» всё это в экраны, а определить, что действительно должно работать вместе и какую роль каждый модуль играет в пользовательском пути"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Работа над экосистемой особенно хорошо показала ценность приоритизации. Не каждая полезная функция должна попадать в первый релиз. Гораздо важнее сначала выстроить основной путь: помочь пользователю понять свою задачу, получить первую ценность, перейти к подходящему продукту или консультации и затем дать причину возвращаться"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Отдельным выводом стала работа с удержанием. В healthtech недостаточно привести пользователя к разовой покупке или записи. Продукт становится сильнее, когда обучение, прогресс, трекеры, результаты и уведомления создают продолжительный сценарий взаимодействия, а личный кабинет становится точкой, куда действительно есть смысл возвращаться"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Этот кейс закрепил для меня подход, в котором продуктовый дизайн — это прежде всего работа со связями между сценариями, бизнес-целями и поведением пользователя. Интерфейс появляется уже после того, как понятны логика продукта, его приоритеты и роль каждого решения в общей системе"
    }
  ],
  "atlyx": [
    {
      "kind": "HEADING_1",
      "bullet": false,
      "text": "Atlyx — travel superapp с retention +10%"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Atlyx — мобильное приложение для путешественников: карта поездок, перелёты, посещённые места, статистика, достижения, переводчик и подсказки AI. Проект создавался с нуля как MVP"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Роль: UX/UI-дизайнер\nПлатформа: Mobile app\nНиша: TravelTech"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Discovery"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "На старте у продукта был широкий набор функций: карта путешествий, перелёты, посещённые страны, статистика, достижения, переводчик и AI-подсказки"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Основной задачей было не просто разложить функции по разделам, а сформировать понятную продуктовую модель: в какой момент пользователь открывает приложение, какое действие выполняет и зачем возвращается после завершения поездки"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "В рамках Discovery я:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— декомпозировала исходные требования\n — выделила ключевые пользовательские задачи\n — проанализировала типовые travel-сценарии\n — сравнила паттерны карт, flight tracker и travel diary-продуктов\n — определила основные сущности: место, страна, территория, перелёт, поездка, достижение\n — разделила функциональность на MVP и последующие этапы"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Ключевые инсайты"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— travel-сервис должен быть полезен до, во время и после поездки\n — карта может стать единым входом в большинство сценариев\n — автоматический поиск рейса нельзя делать единственным способом добавления\n — статистика и достижения нужны для повторного использования, а не только как декоративный элемент\n — пользователю важно быстро переключаться между будущими планами и историей поездок"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Продуктовая проблема"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Информация о путешествии обычно распределена между несколькими сервисами: билеты хранятся в почте, места — в картах, планы — в заметках, а история поездок не формируется в одном пространстве"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Из-за этого пользователь:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— переключается между приложениями\n — тратит время на поиск данных\n — не видит полную картину поездки\n — теряет сохранённые места и планы\n — редко возвращается в travel-сервис после путешествия"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Для продукта это создавало риск низкой частоты использования. Без сценариев возврата приложение могло использоваться только перед поездкой или перелётом"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "JTBD"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Когда я планирую поездку или уже нахожусь в путешествии, я хочу хранить перелёты, места и планы в одном приложении, чтобы быстро получать доступ к нужной информации"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Когда путешествие завершилось, я хочу сохранить посещённые места и увидеть личную статистику, чтобы отслеживать свой прогресс и планировать следующие поездки"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Продуктовая стратегия"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Продуктовую структуру я выстроила вокруг трёх циклов использования"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "До поездки"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Пользователь добавляет перелёт, сохраняет места, изучает карту и формирует будущий маршрут"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Во время поездки"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Проверяет данные о рейсе, получает уведомления, использует карту и переводчик, отмечает посещённые объекты"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "После поездки"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Сохраняет историю, обновляет статистику, получает достижения и возвращается к планированию следующего путешествия"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Рассмотренные подходы"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Можно было разделить продукт на независимые сервисы: карту, flight tracker, переводчик и профиль. Такой подход был проще с точки зрения структуры, но создавал ощущение набора разрозненных инструментов"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Вместо этого была выбрана единая модель вокруг путешествия и прогресса пользователя. Она связывает функциональность между собой и создаёт больше причин возвращаться в приложение"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Проектирование сценариев"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Я сформировала более 10 ключевых пользовательских сценариев и связала их через общую навигацию"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Добавление перелёта"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Главная → Перелёты → Поиск рейса → Выбор результата → Проверка данных → Добавление"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Если рейс не найден:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Поиск → Пустой результат → Ручное добавление → Данные рейса → Сохранение"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Добавление места"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Карта → Поиск → Карточка места → Выбор статуса → Сохранение"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Трекинг стран и территорий"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Карта → Фильтры → Страна или территория → Детальная информация → Изменение статуса"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Просмотр поездок"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Перелёты → Предстоящие / Прошедшие → Карточка рейса → Детали"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Просмотр прогресса"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Профиль → Статистика → Места, страны, аэропорты, перелёты и расстояние"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Основные действия были сведены к коротким сценариям без лишних переходов. Для ключевых задач пользователь мог получить результат в среднем за 3–4 шага"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "UX/UI решения"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Карта как центральная точка продукта"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Главный экран построен вокруг карты, потому что она объединяет прошлые поездки, текущие планы и будущие направления"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Через карту пользователь может:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— искать объекты\n — сохранять места\n — строить маршруты\n — переключать категории\n — фильтровать страны, территории и перелёты\n — видеть статусы объектов"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Понятная модель статусов"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Для разных сущностей была сформирована единая логика:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— хочу посетить\n — посещено\n — предстоящее\n — прошедшее"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Это позволило отделить планы от истории и упростило фильтрацию данных"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Автоматическое и ручное добавление рейса"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Основной сценарий построен через поиск по номеру рейса или аэропорту"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Для случаев, когда рейс отсутствует в выдаче, предусмотрен ручной ввод. Это предотвращает тупиковое состояние и позволяет завершить задачу без выхода из приложения"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Карточка перелёта"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Ключевая информация объединена в одном интерфейсном блоке:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— маршрут\n — дата и время\n — аэропорты\n — терминалы\n — авиакомпания\n — номер рейса\n — статус"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Пользователю не нужно переходить между несколькими экранами, чтобы проверить основные данные"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Progressive disclosure"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Дополнительная информация раскрывается через bottom sheet и карточки деталей"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "На первом уровне пользователь видит только главное действие и ключевые данные. Расширенная информация появляется по запросу, не перегружая карту и основные разделы"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Онбординг через продуктовую ценность"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Онбординг объясняет не интерфейс, а ключевую пользу:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— хранить поездки\n — отслеживать рейсы\n — отмечать страны\n — использовать переводчик"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Так пользователь быстрее понимает, зачем нужен продукт и какие задачи можно решить сразу после регистрации"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Геймификация как сценарий возврата"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "В профиль добавлены:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— количество мест\n — страны и территории\n — перелёты\n — аэропорты\n — время и расстояние в пути\n — достижения"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Эти механики формируют личную историю пользователя и создают дополнительную мотивацию возвращаться после завершения поездки"
    },
    {
      "kind": "HEADING_3",
      "bullet": false,
      "text": "Встроенный переводчик"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Переводчик доступен внутри приложения и поддерживает:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— текстовый ввод\n — голос\n — загрузку изображения"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Это снижает необходимость переключаться между сервисами во время путешествия"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Системный подход"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Я сформировала общую UI-логику для:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— карточек мест и перелётов\n — bottom sheet\n — фильтров\n — табов и переключателей\n — форм\n — статусов\n — уведомлений\n — системных сообщений\n — подтверждающих окон"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Отдельно были проработаны неидеальные сценарии:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— загрузка данных\n — отсутствие результатов\n — ошибка поиска рейса\n — ручное добавление\n — успешное сохранение\n — восстановление пароля\n — выход из аккаунта\n — удаление аккаунта"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Это позволило проектировать продукт не как набор статичных экранов, а как систему взаимосвязанных сущностей и состояний"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Компонентный подход также упростил масштабирование: карточки, фильтры и статусы можно повторно использовать в новых travel-сценариях"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Работа с командой"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Я отвечала за путь от исходной продуктовой идеи до готовых интерфейсов"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "В мою работу входили:"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— декомпозиция бизнес-требований\n — определение MVP-функциональности\n — проектирование информационной архитектуры\n — user flow\n — wireframes\n — кликабельный прототип\n — UI-дизайн\n — системные состояния\n — подготовка макетов к разработке"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "До передачи в разработку я проработала связи между картой, перелётами, местами, профилем и уведомлениями. Это помогло заранее выявить зависимости и снизить риск изменений логики уже на этапе реализации"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Результаты"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— +5-8% D30 Retention за счёт внедрения сценариев повторного использования, AI-рекомендаций и игровых механик"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— +12% пользователей создавали первую поездку благодаря упрощению сценария планирования путешествия"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— +10% к использованию сохранённых мест и маршрутов за счёт объединения связанных функций в единый пользовательский поток"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "— −10-15% времени до выполнения ключевого действия благодаря оптимизации навигации и сокращению количества шагов"
    },
    {
      "kind": "HEADING_2",
      "bullet": false,
      "text": "Рефлексия по кейсу"
    },
    {
      "kind": "NORMAL_TEXT",
      "bullet": false,
      "text": "Проект научил меня смотреть на продукт не через отдельные экраны и функции, а через связи между ними. На Atlyx я особенно почувствовала, насколько важно сначала найти общую продуктовую логику и только потом собирать вокруг неё интерфейс. Самым ценным было научиться думать не только о happy path, но и о реальных сбоях, промежуточных состояниях и моментах, где пользователь может потерять контекст. После проекта у меня остался главный вывод: хороший UX — это не когда в продукте много возможностей, а когда человеку понятно, зачем они ему, как они связаны между собой и что делать дальше в любой точке сценария"
    }
  ]
}
````

## File: src/data/caseImages.ts
````typescript
import sizes from './caseImageSizes.json'
import type { CaseImage, Project } from './portfolio'
import { publicAsset } from '../lib/publicAsset'

type Section = keyof NonNullable<Project['images']>
type CaseImages = NonNullable<Project['images']>
type ImageEntry = [file: string, caption: string]

export function caseCoverDimensions(caseId: keyof typeof sizes) {
  const [width, height] = (sizes[caseId] as Record<string, number[]>)['Обложка.png']
  return { width, height }
}

function image(caseId: keyof typeof sizes, file: string, caption: string): CaseImage {
  const [width, height] = (sizes[caseId] as Record<string, number[]>)[file]
  return {
    src: publicAsset(`cases/${caseId}/${file}`),
    alt: caption,
    caption,
    width,
    height,
  }
}

function gallery(caseId: keyof typeof sizes, groups: Partial<Record<Section, ImageEntry[]>>): CaseImages {
  return Object.fromEntries(
    Object.entries(groups).map(([section, entries]) => [
      section,
      entries.map(([file, caption]) => image(caseId, file, caption)),
    ]),
  ) as CaseImages
}

export const caseImages = {
  'partner-portal': gallery('partner-portal', {
    context: [
      ['As Is - 1.png', 'Исходный интерфейс: вход, список ордеров и карточка заказа'],
      ['As Is - 1.1.png', 'Исходный список ордеров'],
      ['As Is - 1.2.png', 'Исходная карточка заказа'],
    ],
    structure: [
      ['2.png', 'Сценарии входа и подтверждения доступа'],
      ['2.1.png', 'Подтверждение доступа'],
      ['3.png', 'Состояния авторизации и восстановления доступа'],
      ['3.1.png', 'Ошибка при входе'],
    ],
    concept: [
      ['4.png', 'Дашборд партнёра с ключевыми показателями'],
      ['5.png', 'Список ордеров и детали заказа'],
      ['5.1.png', 'Сценарий работы с ордером'],
      ['5.2.png', 'Пустое состояние поиска ордера'],
      ['6.png', 'Управление клиентами'],
      ['6.1.png', 'Перевод комиссии клиента'],
      ['6.2.png', 'Состояние перевода комиссии'],
      ['7.png', 'Работа с выплатами'],
      ['7.1.png', 'Статусы и подтверждения операций'],
      ['8.png', 'Список событий вебхуков'],
      ['8.1.png', 'Детали события вебхука'],
      ['9.png', 'Настройка API-интеграции'],
      ['9.1.png', 'Подтверждение API-ключа'],
      ['10.png', 'Команда и доступы'],
      ['10.1.png', 'Добавление сотрудника'],
      ['10.2.png', 'Подтверждение добавления сотрудника'],
    ],
    system: [
      ['11.png', 'Тёмная тема входа'],
      ['11.1.png', 'Тёмная тема входа и дашборда'],
    ],
    final: [
      ['Mob - 12.png', 'Мобильный вход, навигация и дашборд'],
      ['Mob - 13.png', 'Мобильная работа с ордерами'],
      ['Mob - 14.png', 'Мобильные клиенты и выплаты'],
    ],
  }),
  skywallet: gallery('skywallet', {
    context: [
      ['1.png', 'Вход, безопасность и выбор способа восстановления'],
      ['2.png', 'Предупреждения о рисках хранения активов'],
    ],
    structure: [
      ['3.png', 'Активы и история операций в личном кошельке'],
      ['4.png', 'Добавление аккаунта и выбор способа доступа'],
    ],
    concept: [
      ['5.png', 'Выбор актива и адреса для перевода'],
      ['6.png', 'Подтверждение отправки средств'],
      ['7.png', 'Расчёт обмена и подтверждение операции'],
      ['8.png', 'Получение средств и QR-код'],
      ['CEX - 9.png', 'Доступ к биржевому счёту'],
      ['CEX - 10.png', 'Активы и операции биржевого счёта'],
      ['CEX - 11.png', 'Детали операций биржевого счёта'],
      ['CEX - 12.png', 'Перевод между кошельком и биржевым счётом'],
    ],
    system: [
      ['13.png', 'Выбор сети, безопасность и подтверждения'],
      ['14.png', 'Настройки, поддержка и справка'],
      ['15.png', 'Смена языка и валюты'],
    ],
    final: [['16.png', 'Развитие интерфейса: от схемы к итоговым экранам']],
  }),
  astoria: gallery('astoria', {
    context: [['1.png', 'Главная страница и точки входа в поиск туров']],
    structure: [['2.png', 'Поисковая выдача, фильтры и сравнение вариантов']],
    concept: [
      ['3.png', 'Каталог направлений'],
      ['4.png', 'Страницы направлений и подборки туров'],
      ['5.png', 'Карточка тура и подробная информация'],
      ['6.png', 'Сценарий оформления заявки'],
    ],
    system: [['7.png', 'Информационная страница сервиса']],
    final: [['8.png', 'Адаптация поиска и бронирования для мобильного экрана']],
  }),
  'womens-health': gallery('womens-health', {
    context: [['1.png', 'Первое знакомство с продуктом']],
    structure: [
      ['2.png', 'Регистрация и создание аккаунта'],
      ['3.png', 'Вход в личный кабинет'],
      ['4.png', 'Восстановление доступа'],
    ],
    concept: [
      ['5.png', 'Авторизация и состояния входа'],
      ['6.png', 'Профиль и персональные настройки'],
      ['7.png', 'Покупки, платежи и информация о подписке'],
      ['8.png', 'Главный экран, уведомления и запись на консультацию'],
      ['9.png', 'Инструменты и персональный трекинг здоровья'],
      ['10.png', 'Каталог курсов и учебный материал'],
      ['11.png', 'Состояния доступа к контенту'],
      ['12.png', 'Общение и поддержка внутри приложения'],
    ],
    system: [['13.png', 'Связь мобильного продукта с веб-платформой']],
    final: [['14.png', 'Веб-версия платформы и личный кабинет']],
  }),
  atlyx: gallery('atlyx', {
    context: [['1.png', 'Регистрация и настройка профиля путешественника']],
    structure: [
      ['2.png', 'Вход и восстановление доступа'],
      ['3.png', 'Первое знакомство с возможностями приложения'],
      ['4.png', 'Онбординг: карта, перелёты и переводчик'],
    ],
    concept: [
      ['5.png', 'Карта поездок и добавление маршрута'],
      ['6.png', 'Поиск мест и фильтрация карты'],
      ['7.png', 'Карточка и детали перелёта'],
      ['8.png', 'Добавление рейса'],
      ['9.png', 'Ручной ввод данных рейса'],
      ['10.png', 'Список перелётов'],
      ['11.png', 'Мои места и сохранённые точки'],
    ],
    system: [
      ['12.png', 'Статистика путешествий, уведомления и переводчик'],
      ['13.png', 'Настройки профиля и безопасности'],
      ['14.png', 'Управление аккаунтом, языком и подпиской'],
    ],
    final: [['15.png', 'Итоговый сценарий на карте мира']],
  }),
} satisfies Record<keyof typeof sizes, CaseImages>
````

## File: src/data/caseImageSizes.json
````json
{
  "partner-portal": {
    "10.1.png": [
      5448,
      3438
    ],
    "10.2.png": [
      5448,
      3438
    ],
    "10.png": [
      5448,
      3438
    ],
    "11.1.png": [
      5448,
      3438
    ],
    "11.png": [
      5448,
      3438
    ],
    "2.1.png": [
      5448,
      3438
    ],
    "2.png": [
      5448,
      3438
    ],
    "3.1.png": [
      5448,
      3438
    ],
    "3.png": [
      5448,
      3438
    ],
    "4.png": [
      5448,
      3438
    ],
    "5.1.png": [
      5448,
      3438
    ],
    "5.2.png": [
      5448,
      3438
    ],
    "5.png": [
      5448,
      3438
    ],
    "6.1.png": [
      5448,
      3438
    ],
    "6.2.png": [
      5448,
      3438
    ],
    "6.png": [
      5448,
      3438
    ],
    "7.1.png": [
      5448,
      3438
    ],
    "7.png": [
      5448,
      3438
    ],
    "8.1.png": [
      5448,
      3438
    ],
    "8.png": [
      5448,
      3438
    ],
    "9.1.png": [
      5448,
      3438
    ],
    "9.png": [
      5448,
      3438
    ],
    "As Is - 1.1.png": [
      5448,
      3438
    ],
    "As Is - 1.2.png": [
      5448,
      3438
    ],
    "As Is - 1.png": [
      5448,
      3438
    ],
    "Mob - 12.png": [
      4584,
      3438
    ],
    "Mob - 13.png": [
      4584,
      3438
    ],
    "Mob - 14.png": [
      4584,
      3438
    ],
    "Обложка.png": [
      6054,
      3270
    ]
  },
  "skywallet": {
    "1.png": [
      6009,
      3438
    ],
    "13.png": [
      6009,
      3438
    ],
    "14.png": [
      6009,
      3438
    ],
    "15.png": [
      4584,
      3438
    ],
    "16.png": [
      6009,
      3438
    ],
    "2.png": [
      4584,
      3438
    ],
    "3.png": [
      6009,
      3438
    ],
    "4.png": [
      4584,
      3438
    ],
    "5.png": [
      6009,
      3438
    ],
    "6.png": [
      6009,
      3438
    ],
    "7.png": [
      4584,
      3438
    ],
    "8.png": [
      4584,
      3438
    ],
    "CEX - 10.png": [
      4584,
      3438
    ],
    "CEX - 11.png": [
      4584,
      3438
    ],
    "CEX - 12.png": [
      7740,
      3438
    ],
    "CEX - 9.png": [
      6009,
      3438
    ],
    "Обложка.png": [
      4584,
      3438
    ]
  },
  "astoria": {
    "1.png": [
      4800,
      3600
    ],
    "2.png": [
      4800,
      3600
    ],
    "3.png": [
      4800,
      3600
    ],
    "4.png": [
      4800,
      3600
    ],
    "5.png": [
      4800,
      3600
    ],
    "6.png": [
      4800,
      3600
    ],
    "7.png": [
      4800,
      3600
    ],
    "8.png": [
      4800,
      3600
    ],
    "Обложка.png": [
      4800,
      3600
    ]
  },
  "womens-health": {
    "1.png": [
      4584,
      3438
    ],
    "10.png": [
      6009,
      3438
    ],
    "11.png": [
      4584,
      3438
    ],
    "12.png": [
      4584,
      3438
    ],
    "13.png": [
      8823,
      5826
    ],
    "14.png": [
      5172,
      3438
    ],
    "2.png": [
      6009,
      3438
    ],
    "3.png": [
      4584,
      3438
    ],
    "4.png": [
      6009,
      3438
    ],
    "5.png": [
      4584,
      3438
    ],
    "6.png": [
      4584,
      3438
    ],
    "7.png": [
      4584,
      3438
    ],
    "8.png": [
      6009,
      3438
    ],
    "9.png": [
      7221,
      3438
    ],
    "Обложка.png": [
      4584,
      3438
    ]
  },
  "atlyx": {
    "1.png": [
      6009,
      3438
    ],
    "10.png": [
      4584,
      3438
    ],
    "11.png": [
      7623,
      3438
    ],
    "12.png": [
      4584,
      3438
    ],
    "13.png": [
      4584,
      3438
    ],
    "14.png": [
      4584,
      3438
    ],
    "15.png": [
      4584,
      3438
    ],
    "2.png": [
      4584,
      3438
    ],
    "3.png": [
      4584,
      3438
    ],
    "4.png": [
      4584,
      3438
    ],
    "5.png": [
      4584,
      3438
    ],
    "6.png": [
      7623,
      3438
    ],
    "7.png": [
      4584,
      3438
    ],
    "8.png": [
      6009,
      3438
    ],
    "9.png": [
      4584,
      3438
    ],
    "Обложка.png": [
      4584,
      3438
    ]
  }
}
````

## File: src/data/caseVisuals.ts
````typescript
import type { CaseVisualSpec } from '../components/CaseVisual'

export const caseVisuals: Record<string, CaseVisualSpec[]> = {
  'partner-portal': [
    {
      id: 'portal-map', group: 'context', after: 'Задача Partner Portal', title: 'Карта рабочего кабинета', kind: 'levels',
      items: [
        { label: 'Контроль', detail: 'Дашборд: показатели, динамика и статусы за период', note: 'Сводка за выбранный период' },
        { label: 'Операции', detail: 'Ордера, поиск и детали обмена', note: 'Переработаны существующие разделы' },
        { label: 'Самообслуживание', detail: 'Вебхуки, комиссии, документация, клиенты и команда', note: 'Новые сценарии и переработка существующих' },
      ],
    },
    {
      id: 'portal-insights', group: 'context', after: 'Мобильная версия должна сохранять', title: 'От задачи к решению', kind: 'columns',
      columns: ['Задача', 'Проблема', 'Решение'],
      items: [
        { label: 'Оценить работу за период', detail: 'Список ордеров не даёт общей сводки', note: 'Дашборд с показателями, динамикой и статусами' },
        { label: 'Проверить ордер', detail: 'Данные для сверки разнесены по экрану', note: 'Последовательная иерархия деталей' },
        { label: 'Проверить интеграцию', detail: 'Статус операции не объясняет доставку уведомления', note: 'Отдельная история вебхуков и детали доставки' },
      ], caption: 'Основание: разбор существующего интерфейса и технического задания.',
    },
    {
      id: 'portal-support', group: 'context', after: 'Для бизнеса это создаёт зависимость', title: 'Почему партнёр обращается в поддержку', kind: 'comparison',
      items: [
        { label: 'Проверка статуса', detail: 'Не хватает общей картины и последовательной сверки данных ордера', note: 'Партнёр уточняет состояние операции вручную' },
        { label: 'Проверка интеграции', detail: 'Статус обмена не отвечает на вопрос о доставке уведомления', note: 'Партнёр запрашивает технические данные у поддержки' },
      ], caption: 'Оба пути увеличивают нагрузку на поддержку, если данные и следующий шаг недоступны в кабинете.',
    },
    {
      id: 'portal-hierarchy', group: 'structure', after: 'Разделение на связанные рабочие разделы', title: 'Уровни информации', kind: 'comparison',
      items: [
        { label: 'Дашборд', detail: 'Период → ключевые показатели → динамика и распределение статусов' },
        { label: 'Детали ордера', detail: 'Статус и суммы → комиссии и клиент → технический запрос' },
      ], caption: 'От общего состояния бизнеса к данным, нужным для конкретной проверки.',
    },
    {
      id: 'portal-flow', group: 'structure', after: 'Структура кабинета объединяет', title: 'Основной путь проверки', kind: 'flow', numbered: true,
      items: [
        { label: 'Дашборд', detail: 'Оценить период и заметить отклонение' },
        { label: 'Поиск ордера', detail: 'Найти операцию через список и фильтры' },
        { label: 'Детали', detail: 'Сверить статус, суммы, комиссии и данные клиента' },
        { label: 'Данных достаточно?', branches: { yes: 'Определить следующий шаг', no: 'Перейти к диагностике' } },
        { label: 'Диагностика', detail: 'Проверить вебхук, запрос и ответ; затем повторить проверку или передать данные в поддержку' },
      ],
    },
    {
      id: 'portal-commission', group: 'structure', after: 'Сохранение или отмена изменения', title: 'Изменение комиссии', kind: 'flow', numbered: true,
      items: [
        { label: 'Текущее значение', detail: 'Просмотр настройки' },
        { label: 'Диалог', detail: 'Явное начало редактирования' },
        { label: 'Новое значение', detail: 'Ввод с проверкой допустимого формата' },
        { label: 'Исход', detail: 'Сохранить изменение или отменить' },
      ], caption: 'Диапазон и формат комиссии требуют согласования с продуктовой логикой и API.',
    },
    {
      id: 'portal-orders-before-after', group: 'concept', after: 'Компактные фильтры', title: 'Работа с ордерами: до и после', kind: 'comparison',
      items: [
        { label: 'До', detail: 'Крупный блок фильтров; данные для сверки разнесены по странице' },
        { label: 'После', detail: 'Фильтры в строке над таблицей; статус и финансовые данные сгруппированы; переход в детали остаётся рядом с ордером' },
      ],
    },
    {
      id: 'portal-disclosure', group: 'concept', after: 'Исходный API-запрос вынесен', title: 'Детали без лишней технической плотности', kind: 'comparison',
      items: [
        { label: 'Первый уровень', detail: 'Статус, суммы, комиссии и данные клиента видны сразу' },
        { label: 'Раскрытый уровень', detail: 'Исходный API-запрос и JSON доступны по запросу для диагностики' },
      ],
    },
    {
      id: 'portal-diagnostics', group: 'concept', after: 'Этот раздел помогает проверять', title: 'Два уровня диагностики', kind: 'comparison',
      items: [
        { label: 'Операция', detail: 'Какой у ордера финансовый статус и какие суммы нужно сверить?' },
        { label: 'Уведомление', detail: 'Было ли событие доставлено в систему партнёра? Что содержат запрос и ответ?' },
      ], caption: 'Один и тот же ордер проверяется на двух уровнях: результат обмена и доставка события.',
    },
    {
      id: 'portal-states', group: 'concept', after: 'ошибка всего экрана', title: 'Состояния дашборда', kind: 'matrix',
      items: [
        { label: 'Загрузка', detail: 'Данные ещё поступают', note: 'Показать состояние ожидания' },
        { label: 'Пустой период', detail: 'За выбранный период нет операций', note: 'Изменить период' },
        { label: 'Ошибка виджета', detail: 'Часть данных недоступна', note: 'Оставить доступные данные и повторить загрузку блока' },
        { label: 'Ошибка экрана', detail: 'Общая загрузка не удалась', note: 'Повторить запрос' },
      ],
    },
    {
      id: 'portal-mobile', group: 'concept', after: 'детали операции выстроены', title: 'Та же задача на узком экране', kind: 'columns',
      columns: ['Десктоп', 'Мобильный экран', 'Что сохраняется'],
      items: [
        { label: 'Строка таблицы', detail: 'Карточка ордера', note: 'Статус и данные для первичной проверки' },
        { label: 'Панель фильтров', detail: 'Нижняя панель', note: 'Поиск и уточнение списка' },
        { label: 'Боковая навигация', detail: 'Меню', note: 'Доступ к рабочим разделам' },
      ],
    },
    {
      id: 'portal-components', group: 'system', after: 'загрузка, пустые и ошибочные состояния', title: 'Повторно используемые элементы', kind: 'matrix',
      items: [
        { label: 'Фильтр и поле', detail: 'Поиск, период и ввод данных', note: 'Обычное, активное и ошибочное состояния' },
        { label: 'Кнопка и статус', detail: 'Действия и обратная связь', note: 'Доступное и недоступное действие' },
        { label: 'Ордер', detail: 'Строка таблицы или мобильная карточка', note: 'Один набор данных в разных компоновках' },
        { label: 'Диалог', detail: 'Изменение комиссии и подтверждение', note: 'Явное сохранение или отмена' },
      ],
    },
  ],
  skywallet: [
    {
      id: 'wallet-ecosystem', group: 'context', after: 'Продукт объединял два ключевых сценария', title: 'Два контура одной экосистемы', kind: 'comparison',
      items: [
        { label: 'SkyWallet', detail: 'Некастодиальный кошелёк: пользователь самостоятельно хранит активы и управляет ключами' },
        { label: 'Sky Capital', detail: 'Биржевой контур: обмен, пополнение и вывод через платформу' },
      ],
    },
    {
      id: 'wallet-entities', group: 'context', after: 'пользователи плохо различают', title: 'Сущности, которые нельзя смешивать', kind: 'flow',
      items: [
        { label: 'Wallet', detail: 'Кошелёк' }, { label: 'Account', detail: 'Аккаунт' },
        { label: 'Network', detail: 'Сеть' }, { label: 'Asset', detail: 'Актив' },
        { label: 'Address', detail: 'Адрес получения или отправки' },
      ],
    },
    {
      id: 'wallet-risks', group: 'context', after: 'не учесть сетевую комиссию', title: 'Карта ошибок пользователя', kind: 'matrix',
      items: [
        { label: 'Seed-фраза', detail: 'Потеря доступа без возможности восстановления через поддержку' },
        { label: 'Сеть и адрес', detail: 'Перевод с несовместимыми параметрами' },
        { label: 'Комиссия', detail: 'Недостаточно средств для завершения отправки' },
        { label: 'Тип счёта', detail: 'Путаница между личным кошельком и биржевым балансом' },
      ],
    },
    {
      id: 'wallet-contours', group: 'context', after: 'В биржевом контуре средства', title: 'Разные правила хранения и доступа', kind: 'comparison',
      items: [
        { label: 'Некастодиальный кошелёк', detail: 'Ключи и seed-фраза у пользователя. Поддержка не восстанавливает доступ.', note: 'Чувствительные действия подтверждаются локальным паролем.' },
        { label: 'Биржевой счёт', detail: 'Средства находятся на стороне платформы. Для операций с рублями требуется идентификация.', note: 'Сценарий подчиняется правилам биржевого контура.' },
      ],
    },
    {
      id: 'wallet-architecture', group: 'structure', after: 'Я построила общую карту продукта', title: 'Архитектура MVP', kind: 'levels',
      items: [
        { label: 'Вход и безопасность', detail: 'Онбординг, создание и импорт, seed-фраза, пароль, восстановление' },
        { label: 'Кошелёк', detail: 'Wallet, Account, сети, активы, детали и история' },
        { label: 'Операции', detail: 'Отправка, получение, DEX-обмен и биржевой сценарий' },
      ],
    },
    {
      id: 'wallet-onboarding', group: 'structure', after: 'Восстановление доступа через повторный импорт', title: 'Онбординг и восстановление', kind: 'flow', numbered: true,
      items: [
        { label: 'Создать или импортировать', detail: 'Выбор пути входа' },
        { label: 'Seed-фраза', detail: 'Просмотр и подтверждение порядка слов' },
        { label: 'Локальный пароль', detail: 'Защита доступа в приложении' },
        { label: 'Восстановление', detail: 'При потере пароля — повторный импорт через seed-фразу' },
      ],
    },
    {
      id: 'wallet-send', group: 'structure', after: 'Отслеживание статуса', title: 'Отправка: контроль на каждом шаге', kind: 'flow', numbered: true,
      items: [
        { label: 'Актив', detail: 'Выбрать актив и увидеть доступный баланс' },
        { label: 'Адрес', detail: 'Ввести или сканировать; проверить формат и сеть' },
        { label: 'Сумма и комиссия', detail: 'Убедиться, что баланса достаточно' },
        { label: 'Проверка', detail: 'Повторно увидеть сумму, адрес, сеть и fee' },
        { label: 'Подтверждение', detail: 'Отправить и отслеживать статус' },
      ],
    },
    {
      id: 'wallet-receive', group: 'structure', after: 'Предупреждение о переводе только', title: 'Получение средств', kind: 'flow', numbered: true,
      items: [
        { label: 'Актив и сеть', detail: 'Определить контекст получения' },
        { label: 'Адрес или QR', detail: 'Скопировать адрес или показать код' },
        { label: 'Предупреждение', detail: 'Перевод возможен только в выбранной сети' },
      ],
    },
    {
      id: 'wallet-context', group: 'concept', after: 'Это снижало вероятность отправки', title: 'Контекст активной операции', kind: 'levels',
      items: [
        { label: 'Откуда', detail: 'Wallet и Account' },
        { label: 'Что', detail: 'Network, Asset и доступный баланс' },
        { label: 'Куда', detail: 'Адрес, сумма и комиссия перед подтверждением' },
      ],
    },
    {
      id: 'wallet-send-design', group: 'concept', after: 'Перед отправкой пользователь повторно', title: 'От формы к пошаговому сценарию', kind: 'comparison',
      items: [
        { label: 'Ранний подход', detail: 'Все поля и контекст операции в одной форме' },
        { label: 'Финальная логика', detail: 'Выбор актива → ввод данных → проверка → подтверждение' },
      ],
    },
    {
      id: 'wallet-seed', group: 'concept', after: 'дополнительного подтверждения', title: 'Доступ к seed-фразе', kind: 'flow', numbered: true,
      items: [
        { label: 'Предупреждение', detail: 'Объяснить риск раскрытия' },
        { label: 'Локальный пароль', detail: 'Подтвердить право доступа' },
        { label: 'Подтверждение', detail: 'Показать чувствительные данные после явного действия' },
      ],
    },
    {
      id: 'wallet-errors', group: 'concept', after: 'неподдерживаемая сеть', title: 'Предотвращение ошибок', kind: 'columns',
      columns: ['Ситуация', 'Обратная связь', 'Следующее действие'],
      items: [
        { label: 'Невалидный адрес', detail: 'Ошибка в поле', note: 'Исправить адрес' },
        { label: 'Неверная сеть', detail: 'Предупреждение', note: 'Сменить сеть' },
        { label: 'Недостаточно баланса', detail: 'Ошибка', note: 'Уменьшить сумму' },
        { label: 'Не хватает на комиссию', detail: 'Предупреждение', note: 'Пополнить актив для комиссии' },
        { label: 'Операция в обработке', detail: 'Статус', note: 'Дождаться подтверждения' },
        { label: 'Неудачная операция', detail: 'Ошибка', note: 'Проверить параметры или повторить' },
      ],
    },
    {
      id: 'wallet-states', group: 'concept', after: 'Пользователь мог понимать', title: 'Состояния транзакции', kind: 'matrix',
      items: [
        { label: 'Pending', detail: 'Операция обрабатывается', note: 'Ожидать результат' },
        { label: 'Success', detail: 'Операция завершена', note: 'Просмотреть детали' },
        { label: 'Failed', detail: 'Операция не завершилась', note: 'Проверить причину и параметры' },
        { label: 'Loading / Empty', detail: 'Загрузка или отсутствие истории', note: 'Различать ожидание и пустой результат' },
      ],
    },
    {
      id: 'wallet-components', group: 'system', after: 'Компоненты создавались с учётом', title: 'Система состояний', kind: 'matrix',
      items: [
        { label: 'Ввод и выбор', detail: 'Поля и селекторы', note: 'Обычное, активное, ошибочное' },
        { label: 'Действие', detail: 'Кнопки подтверждения', note: 'Доступное, недоступное, загрузка' },
        { label: 'Актив', detail: 'Карточка и детали', note: 'Баланс, сеть и контекст' },
        { label: 'Обратная связь', detail: 'Предупреждения и статусы', note: 'Риск, ожидание, успех, ошибка' },
      ],
    },
    {
      id: 'wallet-handoff', group: 'system', after: 'уточняла бизнес-логику', title: 'От логики к передаче в разработку', kind: 'flow', numbered: true,
      items: [
        { label: 'Бизнес-логика', detail: 'Согласование MVP и финансовых контуров' },
        { label: 'Сценарии', detail: 'Архитектура и состояния' },
        { label: 'Прототип', detail: 'Проверка последовательности действий' },
        { label: 'Спецификации', detail: 'Компоненты, ошибки и ограничения для разработки' },
      ],
    },
    {
      id: 'wallet-kpi', group: 'final', after: 'рост завершённости создания', title: 'Результаты ключевых сценариев', kind: 'matrix', presentation: 'results',
      items: [
        { label: 'Создание или импорт', detail: 'Завершённость сценария выросла на 15–20%' },
        { label: 'Отправка средств', detail: 'Ошибок стало меньше на 20–30%' },
        { label: 'Время перевода', detail: 'Сократилось на 15–25%' },
        { label: 'Первая транзакция', detail: 'Завершённость выросла на 10–15%' },
      ],
    },
  ],
  astoria: [
    {
      id: 'astoria-widget', group: 'context', after: 'На старте сайт использовал', title: 'Ограничения внешнего виджета', kind: 'levels',
      items: [
        { label: 'Поиск', detail: 'Выдача и фильтры зависели от сторонней логики' },
        { label: 'Контент', detail: 'Бизнес не мог гибко продвигать направления и предложения' },
        { label: 'Путь к заявке', detail: 'Поиск, страницы направлений и оформление не были связаны в последовательный путь к заявке' },
      ],
    },
    {
      id: 'astoria-map', group: 'context', after: 'Продукт включал поисковую выдачу', title: 'Карта сервиса', kind: 'flow',
      items: [
        { label: 'Главная', detail: 'Поиск и подборки' },
        { label: 'Выдача', detail: 'Фильтрация и сравнение' },
        { label: 'Направление', detail: 'Страна или курорт как другая точка входа' },
        { label: 'Карточка тура', detail: 'Состав, цена и доступность' },
        { label: 'Оформление', detail: 'Заявка менеджеру или оплата' },
      ], caption: 'Контентные страницы и подборки управляются через CMS; данные туров приходят через API.',
    },
    {
      id: 'astoria-problem', group: 'context', after: 'Для бизнеса проблема заключалась', title: 'Одна проблема с двух сторон', kind: 'comparison',
      items: [
        { label: 'Пользователь', detail: 'Разрозненные точки входа, сложное сравнение и слабая связь между поиском и оформлением' },
        { label: 'Бизнес', detail: 'Зависимость от чужого интерфейса, ограниченный контроль выдачи и контента' },
      ], caption: 'Общая задача — превратить отдельный поиск в управляемый путь выбора и оформления тура.',
    },
    {
      id: 'astoria-intents', group: 'context', after: 'Когда я ещё не выбрала направление', title: 'Два намерения — один результат', kind: 'comparison',
      items: [
        { label: 'Знаю параметры поездки', detail: 'Начинаю с поиска и уточняю предложение фильтрами' },
        { label: 'Пока выбираю', detail: 'Изучаю горячие туры, цены и направления' },
      ], caption: 'Оба пути приводят к подходящему туру и понятному следующему шагу.',
    },
    {
      id: 'astoria-readiness', group: 'structure', after: 'Я выстроила сервис вокруг', title: 'Уровни готовности к покупке', kind: 'flow', numbered: true,
      items: [
        { label: 'Исследую', detail: 'Направления, подборки и цены' },
        { label: 'Знаю параметры', detail: 'Поиск по датам, составу и направлению' },
        { label: 'Сравниваю', detail: 'Фильтры, карточки и детали' },
        { label: 'Оформляю', detail: 'Заявка или онлайн-оплата' },
      ],
    },
    {
      id: 'astoria-alternatives', group: 'structure', after: 'Собственный адаптивный агрегатор', title: 'Выбор продуктовой модели', kind: 'columns',
      columns: ['Вариант', 'Что решает', 'Ограничение или эффект'],
      items: [
        { label: 'Внешний виджет', detail: 'Базовый поиск с меньшим объёмом изменений', note: 'Зависимость от сторонней логики остаётся' },
        { label: 'Только поиск и выдача', detail: 'Основная функция выбора тура', note: 'Нет исследовательского пути и основы для SEO' },
        { label: 'Собственный агрегатор', detail: 'Несколько точек входа и единая поисковая логика', note: 'Выбранное решение' },
      ],
    },
    {
      id: 'astoria-main-flow', group: 'structure', after: 'Главная → параметры поездки', title: 'Сквозной путь выбора', kind: 'flow', numbered: true,
      items: [
        { label: 'Главная', detail: 'Точный поиск или подборка' },
        { label: 'Выдача', detail: 'Фильтры и сравнение' },
        { label: 'Карточка', detail: 'Состав тура и повторная проверка цены' },
        { label: 'Оформление', detail: 'Заявка менеджеру или оплата через ЮKassa' },
      ],
    },
    {
      id: 'astoria-price', group: 'structure', after: 'При открытии карточки данные повторно', title: 'Актуализация цены', kind: 'flow', numbered: true,
      items: [
        { label: 'Открытие тура', detail: 'Запросить свежие данные через API' },
        { label: 'Цена актуальна', detail: 'Продолжить оформление' },
        { label: 'Цена изменилась', detail: 'Показать новую стоимость до решения' },
        { label: 'Тур недоступен', detail: 'Остановить оформление и предложить вернуться к выбору' },
      ],
    },
    {
      id: 'astoria-filters', group: 'concept', after: 'Дополнительные параметры сгруппированы', title: 'Три уровня фильтрации', kind: 'levels', numbered: true,
      items: [
        { label: 'Основные', detail: 'Цена, даты, питание, звёзды, расположение и продолжительность' },
        { label: 'Дополнительные', detail: 'Раскрываются по необходимости' },
        { label: 'Выбранные', detail: 'Остаются видимыми при просмотре выдачи' },
      ],
    },
    {
      id: 'astoria-card-depth', group: 'concept', after: 'Детали перелёта, размещения', title: 'Глубина информации при выборе', kind: 'comparison',
      items: [
        { label: 'Карточка в выдаче', detail: 'Отель, рейтинг, направление, даты, питание, длительность, стоимость и специальные признаки' },
        { label: 'Страница тура', detail: 'Перелёт, размещение, услуги, галерея и подробный состав предложения' },
      ],
    },
    {
      id: 'astoria-entry', group: 'concept', after: 'Так сервис поддерживает пользователей', title: 'Несколько входов в одну выдачу', kind: 'levels',
      items: [
        { label: 'Прямой запрос', detail: 'Стартовая форма поиска' },
        { label: 'Вдохновение', detail: 'Горячие туры, минимальные цены и спецпредложения' },
        { label: 'Направление', detail: 'Страны, курорты и тематические подборки' },
      ],
    },
    {
      id: 'astoria-states', group: 'concept', after: 'успешная и неуспешная оплата', title: 'Состояния за пределами идеального пути', kind: 'matrix',
      items: [
        { label: 'Загрузка', detail: 'Результаты ещё поступают' },
        { label: 'Пустая выдача', detail: 'Под выбранные условия ничего не найдено' },
        { label: 'Цена изменилась', detail: 'Нужна новая проверка решения' },
        { label: 'Тур недоступен', detail: 'Оформление невозможно' },
        { label: 'Ошибка формы', detail: 'Исправить ввод' },
        { label: 'Результат оплаты', detail: 'Различить успех и неуспех' },
      ],
    },
    {
      id: 'astoria-mobile', group: 'concept', after: 'основные действия остаются', title: 'Сценарий на мобильном экране', kind: 'columns',
      columns: ['Задача', 'Адаптация', 'Сохраняется'],
      items: [
        { label: 'Уточнить выдачу', detail: 'Последовательное открытие фильтров', note: 'Контроль параметров' },
        { label: 'Сравнить туры', detail: 'Вертикальные карточки', note: 'Цена и основные характеристики' },
        { label: 'Отправить заявку', detail: 'Компактные блоки формы', note: 'Основное действие' },
      ],
    },
    {
      id: 'astoria-system', group: 'system', after: 'Компоненты использовались', title: 'Повторяемые продуктовые паттерны', kind: 'matrix',
      items: [
        { label: 'Поиск', detail: 'Поля, даты и состав туристов' },
        { label: 'Выдача', detail: 'Фильтры, сортировка и карточки' },
        { label: 'Решение', detail: 'Цена, статус и призыв к действию' },
        { label: 'Оформление', detail: 'Формы, проверки и обратная связь' },
      ],
    },
    {
      id: 'astoria-cms', group: 'system', after: 'Это снижает зависимость', title: 'CMS → витрина', kind: 'levels',
      items: [
        { label: 'Контент', detail: 'Тексты, изображения и SEO-данные' },
        { label: 'Продвижение', detail: 'Баннеры, подборки и горячие туры' },
        { label: 'Структура', detail: 'Приоритет направлений и контентные страницы' },
      ], caption: 'Strapi даёт бизнесу управление этими элементами без обновления интерфейса разработчиками.',
    },
    {
      id: 'astoria-outcomes', group: 'final', after: '−5% отказов', title: 'Связь решения с показателем', kind: 'columns',
      columns: ['Решение', 'Пользовательский эффект', 'Показатель'],
      items: [
        { label: 'Приоритетные фильтры', detail: 'Быстрее найти подходящее', note: 'Время поиска тура' },
        { label: 'Структура карточки', detail: 'Понятнее сравнить и открыть тур', note: 'CTR карточки' },
        { label: 'Единый путь оформления', detail: 'Меньше разрывов до заявки', note: 'Конверсия в заявку' },
      ],
    },
  ],
  'womens-health': [
    {
      id: 'health-blueprint', group: 'context', after: 'Я начала работу с анализа', title: 'Путь через разные сервисы', kind: 'columns', numbered: true,
      columns: ['Шаг', 'Действие пользовательницы', 'Что остаётся ручным'],
      items: [
        { label: 'Знакомство', detail: 'Находит эксперта в соцсетях', note: 'Разные точки входа' },
        { label: 'Выбор', detail: 'Переходит через Taplink к продукту', note: 'Нет единого каталога и сравнения' },
        { label: 'Запись и оплата', detail: 'Пишет для консультации или покупает курс', note: 'Согласование и выдача доступа разнесены' },
        { label: 'Возврат', detail: 'Ищет материал на другой платформе', note: 'Путь не собирается в одном аккаунте' },
      ],
    },
    {
      id: 'health-design-first', group: 'context', after: 'Поэтому первым этапом стал Design First', title: 'Design First: порядок работы', kind: 'flow', numbered: true,
      items: [
        { label: 'Погружение', detail: 'Текущая модель и путь' },
        { label: 'Архитектура', detail: 'Разделы и связи' },
        { label: 'MVP', detail: 'Границы первого релиза' },
        { label: 'Сценарии', detail: 'User flow и wireframes' },
        { label: 'Интерфейс', detail: 'UI, компоненты и прототип' },
        { label: 'Передача', detail: 'Состояния и логика для разработки' },
      ],
    },
    {
      id: 'health-problem', group: 'context', after: 'Главный продуктовый вызов', title: 'Причина фрагментации', kind: 'comparison',
      items: [
        { label: 'Пользовательница', detail: 'Неясно, какой продукт выбрать, как записаться и где продолжить после покупки' },
        { label: 'Бизнес', detail: 'Ручная выдача доступов, нагрузка на команду и отсутствие единой аналитики' },
      ], caption: 'В центре обеих проблем — отсутствие единого цифрового пути.',
    },
    {
      id: 'health-jobs', group: 'context', after: 'просмотр статей, видео и подкастов', title: 'Два класса сценариев', kind: 'comparison',
      items: [
        { label: 'Конверсия', detail: 'Выбор продукта → покупка или запись → получение доступа' },
        { label: 'Возвращение', detail: 'Контент → инструмент или курс → прогресс → следующий визит' },
      ],
    },
    {
      id: 'health-funnel', group: 'structure', after: 'экспертный контент → бесплатная ценность', title: 'Связанный путь к ценности', kind: 'flow', numbered: true,
      items: [
        { label: 'Контент', detail: 'Знакомство с экспертизой' },
        { label: 'Бесплатная польза', detail: 'Материал, тест или калькулятор' },
        { label: 'Решение', detail: 'Продукт или консультация' },
        { label: 'Доступ', detail: 'Покупка и личный кабинет' },
        { label: 'Возврат', detail: 'Обучение, консультации и инструменты' },
      ],
    },
    {
      id: 'health-mvp', group: 'structure', after: 'сложная подписочная', title: 'Граница первого релиза', kind: 'comparison',
      items: [
        { label: 'MVP', detail: 'Главная, каталог и карточка продукта, тариф, консультация, авторизация, покупка и личный кабинет' },
        { label: 'Позже', detail: 'Собственная CRM, расширенное хранение медицинских данных, языки, offline, биометрия и сложная подписка' },
      ],
    },
    {
      id: 'health-architecture', group: 'structure', after: 'Я спроектировала карту продукта', title: 'Пять опор продукта', kind: 'levels',
      items: [
        { label: 'Главная и знания', detail: 'Материалы и точки входа к подходящему сценарию' },
        { label: 'Продукты и обучение', detail: 'Каталог, покупка, уроки и прогресс' },
        { label: 'Инструменты', detail: 'Тесты, калькуляторы и результаты' },
        { label: 'Консультации', detail: 'Выбор, запись и оплата' },
        { label: 'Профиль', detail: 'Доступы, история и персональные данные' },
      ],
    },
    {
      id: 'health-consultation', group: 'structure', after: 'После записи консультация становилась', title: 'Запись на консультацию', kind: 'flow', numbered: true,
      items: [
        { label: 'Выбор', detail: 'Специалист или формат' },
        { label: 'Время', detail: 'Дата и свободный слот' },
        { label: 'Данные', detail: 'Ввод и проверка' },
        { label: 'Оплата', detail: 'Подтверждение действия' },
        { label: 'Личный кабинет', detail: 'Консультация доступна в аккаунте' },
      ],
    },
    {
      id: 'health-tool', group: 'structure', after: 'Бесплатный инструмент выполнял', title: 'Польза → следующий шаг', kind: 'flow', numbered: true,
      items: [
        { label: 'Материал', detail: 'Главная или статья' },
        { label: 'Инструмент', detail: 'Тест или калькулятор' },
        { label: 'Результат', detail: 'Пояснение после ввода' },
        { label: 'Продолжение', detail: 'Связанный материал или консультация' },
      ],
    },
    {
      id: 'health-learning', group: 'structure', after: 'Управление персональными данными', title: 'Возвращение к обучению', kind: 'flow', numbered: true,
      items: [
        { label: 'Личный кабинет', detail: 'Авторизация' },
        { label: 'Мои продукты', detail: 'Выбор программы' },
        { label: 'Урок', detail: 'Продолжение с последнего этапа' },
        { label: 'Прогресс', detail: 'Следующий шаг обучения' },
      ],
    },
    {
      id: 'health-hub', group: 'concept', after: 'Покупка переставала быть', title: 'Личный кабинет связывает сценарии', kind: 'matrix',
      items: [
        { label: 'Обучение', detail: 'Купленные программы и прогресс' },
        { label: 'Консультации', detail: 'История и будущие записи' },
        { label: 'Персональные инструменты', detail: 'Результаты тестов и трекеров' },
        { label: 'Профиль', detail: 'Подписки, данные и уведомления' },
      ],
    },
    {
      id: 'health-states', group: 'concept', after: 'Это позволило рассматривать сценарий', title: 'Состояния полного пути', kind: 'matrix',
      items: [
        { label: 'Ожидание', detail: 'Loading и skeleton' },
        { label: 'Нет данных', detail: 'Пустой список или недоступный контент' },
        { label: 'Ошибка', detail: 'Нет соединения, ошибка загрузки или записи' },
        { label: 'Итог', detail: 'Успех, заблокированный или оплаченный доступ' },
      ],
    },
    {
      id: 'health-system', group: 'system', after: 'Такой подход позволял', title: 'Компоненты в разных контекстах', kind: 'matrix',
      items: [
        { label: 'Карточка', detail: 'Материал, продукт или инструмент', note: 'Бесплатный / платный, доступный / закрытый' },
        { label: 'Форма', detail: 'Ввод и выбор', note: 'Пустая, заполненная, ошибка' },
        { label: 'Действие', detail: 'Запись, покупка, продолжение', note: 'Ожидание, успех, недоступно' },
        { label: 'Навигация', detail: 'Переход между разделами', note: 'Web и mobile' },
      ],
    },
    {
      id: 'health-outcomes', group: 'final', after: '−15% времени', title: 'Изменение продукта', kind: 'levels',
      items: [
        { label: 'Разные точки → система', detail: 'Контент, продукт, консультация и инструменты связаны' },
        { label: 'Ручные шаги → самообслуживание', detail: 'Запись, оплата и доступ собраны в сценариях' },
        { label: 'Разовая покупка → возврат', detail: 'Личный кабинет продолжает путь после оплаты' },
      ],
    },
  ],
  atlyx: [
    {
      id: 'atlyx-ecosystem', group: 'context', after: 'На старте у продукта был широкий', title: 'Связи внутри Atlyx', kind: 'levels',
      items: [
        { label: 'Поездка', detail: 'Связывает даты, перелёты и планы' },
        { label: 'Карта и места', detail: 'Помогают сохранять точки и отмечать посещённое' },
        { label: 'Профиль и прогресс', detail: 'Собирают историю, статистику и достижения после поездки' },
      ], caption: 'Центральный контекст — путешествие, а не набор независимых функций.',
    },
    {
      id: 'atlyx-lifecycle', group: 'context', after: 'travel-сервис должен быть полезен', title: 'До, во время и после поездки', kind: 'flow', numbered: true,
      items: [
        { label: 'До', detail: 'Сохранить места, добавить рейс, составить план' },
        { label: 'Во время', detail: 'Открыть карту, данные рейса и детали поездки' },
        { label: 'После', detail: 'Отметить посещённое, увидеть историю и достижения' },
      ],
    },
    {
      id: 'atlyx-fragmentation', group: 'context', after: 'Информация о путешествии обычно', title: 'Контекст поездки распадается', kind: 'columns',
      columns: ['Что нужно', 'Где хранится', 'Проблема'],
      items: [
        { label: 'Билеты', detail: 'Почта или авиакомпания', note: 'Отдельно от маршрута' },
        { label: 'Места', detail: 'Карты', note: 'Отдельно от планов поездки' },
        { label: 'Планы', detail: 'Заметки', note: 'Трудно быстро найти в пути' },
        { label: 'История', detail: 'Галерея', note: 'Не превращается в прогресс' },
      ],
    },
    {
      id: 'atlyx-opportunity', group: 'context', after: 'Для продукта это создавало риск', title: 'Проблема → возможность', kind: 'columns',
      columns: ['Проблема', 'Продуктовое решение', 'Польза'],
      items: [
        { label: 'Данные в разных сервисах', detail: 'Единый контекст поездки', note: 'Быстрый доступ к нужному' },
        { label: 'Карта без истории', detail: 'Статусы мест и поездок', note: 'Планы связаны с посещённым' },
        { label: 'Редкое возвращение', detail: 'Статистика и достижения', note: 'Ценность сохраняется после поездки' },
      ],
    },
    {
      id: 'atlyx-cycles', group: 'structure', after: 'Сохраняет историю, обновляет статистику', title: 'Три цикла использования', kind: 'flow',
      items: [
        { label: 'Планирование', detail: 'Перелёт, места и маршрут' },
        { label: 'Путешествие', detail: 'Карта, рейс, переводчик и отметки' },
        { label: 'Возвращение', detail: 'История, статистика и новая поездка' },
      ],
    },
    {
      id: 'atlyx-architecture', group: 'structure', after: 'Вместо этого была выбрана', title: 'От набора функций к travel cycle', kind: 'comparison',
      items: [
        { label: 'Отдельные разделы', detail: 'Карта, перелёты, переводчик и профиль работают независимо' },
        { label: 'Модель поездки', detail: 'Путешествие связывает места, рейсы, маршрут и личный прогресс' },
      ],
    },
    {
      id: 'atlyx-flight-flow', group: 'structure', after: 'Поиск → Пустой результат', title: 'Рейс найден?', kind: 'flow', numbered: true,
      items: [
        { label: 'Поиск рейса', detail: 'Номер или аэропорт' },
        { label: 'Найден', detail: 'Выбрать результат и проверить данные' },
        { label: 'Не найден', detail: 'Перейти к ручному вводу' },
        { label: 'Сохранение', detail: 'Добавить рейс выбранным способом' },
      ],
    },
    {
      id: 'atlyx-place-flow', group: 'structure', after: 'Карта → Поиск → Карточка места', title: 'Состояния места', kind: 'flow', numbered: true,
      items: [
        { label: 'Найдено', detail: 'Открыть карточку на карте' },
        { label: 'Хочу посетить', detail: 'Сохранить в планы' },
        { label: 'Посещено', detail: 'Отметить после визита' },
        { label: 'История', detail: 'Использовать в статистике и профиле' },
      ],
    },
    {
      id: 'atlyx-statuses', group: 'concept', after: 'Это позволило отделить планы', title: 'Единая логика статусов', kind: 'matrix',
      items: [
        { label: 'Хочу посетить', detail: 'План для места или направления' },
        { label: 'Посещено', detail: 'Часть истории путешествий' },
        { label: 'Предстоящее', detail: 'Будущая поездка или перелёт' },
        { label: 'Прошедшее', detail: 'Завершённая поездка или перелёт' },
      ],
    },
    {
      id: 'atlyx-flight-fallback', group: 'concept', after: 'Для случаев, когда рейс отсутствует', title: 'Поиск без тупика', kind: 'flow', numbered: true,
      items: [
        { label: 'Поиск', detail: 'Попробовать найти рейс автоматически' },
        { label: 'Пустой результат', detail: 'Объяснить, что поиск не дал совпадений' },
        { label: 'Ручной ввод', detail: 'Дать завершить задачу самостоятельно' },
      ],
    },
    {
      id: 'atlyx-disclosure', group: 'concept', after: 'На первом уровне пользователь видит', title: 'Информация по мере необходимости', kind: 'levels', numbered: true,
      items: [
        { label: 'Карта', detail: 'Объект и его статус' },
        { label: 'Карточка', detail: 'Ключевые данные и главное действие' },
        { label: 'Bottom sheet', detail: 'Дополнительные детали без потери контекста карты' },
      ],
    },
    {
      id: 'atlyx-loop', group: 'concept', after: 'Эти механики формируют личную историю', title: 'Петля возвращения', kind: 'flow', numbered: true,
      items: [
        { label: 'Новая поездка', detail: 'Планы и рейс' },
        { label: 'Сохранённые места', detail: 'Маршрут и карта' },
        { label: 'Завершение', detail: 'Посещённые объекты' },
        { label: 'Прогресс', detail: 'Статистика и достижения' },
        { label: 'Следующая поездка', detail: 'Новый повод вернуться' },
      ],
    },
    {
      id: 'atlyx-states', group: 'system', after: 'Это позволило проектировать продукт', title: 'Неидеальные сценарии', kind: 'matrix',
      items: [
        { label: 'Пустая поездка', detail: 'Нет добавленных планов' },
        { label: 'Рейс не найден', detail: 'Доступен ручной ввод' },
        { label: 'Загрузка или ошибка', detail: 'Отдельная обратная связь' },
        { label: 'Успех', detail: 'Сохранённое место или рейс' },
      ],
    },
    {
      id: 'atlyx-entities', group: 'system', after: 'Компонентный подход также', title: 'Сущность → компонент', kind: 'columns',
      columns: ['Сущность', 'Компонент', 'Состояния'],
      items: [
        { label: 'Место', detail: 'Точка на карте и карточка', note: 'Хочу посетить / посещено' },
        { label: 'Перелёт', detail: 'Карточка и детали', note: 'Предстоящий / прошедший' },
        { label: 'Поездка', detail: 'Маршрут и история', note: 'План / завершение' },
      ],
    },
  ],
}

export function visualsAfter(projectId: string, group: string, text: string): CaseVisualSpec[] {
  return (caseVisuals[projectId] ?? []).filter((visual) => visual.group === group && text.includes(visual.after))
}
````

## File: src/hooks/useAnalyticsTracking.ts
````typescript
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { projects } from '../data/portfolio'
import { trackEvent, trackPageView } from '../lib/analytics'

const caseIds = new Set(projects.map((project) => project.id))
const scrollMilestones = new Map<string, Set<number>>()

export function usePageTracking() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Route paths are enough for pageviews; never forward arbitrary query data or hashes.
    const pageUrl = `${window.location.origin}${window.location.pathname}`
    if (!trackPageView(pathname, pageUrl)) return
    const slug = pathname.match(/^\/projects\/([^/]+)\/?$/)?.[1]
    if (slug && caseIds.has(slug)) trackEvent('project_open', { project: slug })
  }, [pathname])
}

export function useCaseScrollTracking() {
  const { pathname, key } = useLocation()
  const slug = pathname.match(/^\/projects\/([^/]+)\/?$/)?.[1]
  const project = slug && caseIds.has(slug) ? slug : null

  useEffect(() => {
    if (!project) return
    const viewKey = `${key}:${project}`
    let sent = scrollMilestones.get(viewKey)
    if (!sent) {
      sent = new Set<number>()
      scrollMilestones.set(viewKey, sent)
    }
    const milestones = sent
    let frame = 0

    const check = () => {
      frame = 0
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      if (scrollable <= 0) return
      const depth = window.scrollY / scrollable
      for (const threshold of [50, 90] as const) {
        if (depth < threshold / 100 || milestones.has(threshold)) continue
        milestones.add(threshold)
        trackEvent(`case_scroll_${threshold}`, { project })
      }
    }
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(check)
    }
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    schedule()
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [key, project])
}
````

## File: src/hooks/useGroupedRows.ts
````typescript
import { useLayoutEffect, useRef } from 'react'

// Mark the visible ends of each wrapped row without changing its layout.
export function useGroupedRows(itemCount: number) {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const group = ref.current
    if (!group) return
    let frame = 0
    let active = true

    const update = () => {
      frame = 0
      const items = Array.from(group.children).filter((item): item is HTMLElement => item instanceof HTMLElement)
      items.forEach(item => item.classList.remove('is-row-start', 'is-row-end'))
      let row: HTMLElement[] = []
      let rowTop = Number.NaN
      const finish = () => {
        row[0]?.classList.add('is-row-start')
        row.at(-1)?.classList.add('is-row-end')
      }
      for (const item of items) {
        const top = item.offsetTop
        if (row.length && Math.abs(top - rowTop) > 2) {
          finish()
          row = []
        }
        if (!row.length) rowTop = top
        row.push(item)
      }
      finish()
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    const observer = new ResizeObserver(schedule)
    observer.observe(group)
    window.addEventListener('resize', schedule)
    void document.fonts.ready.then(() => { if (active) schedule() })
    schedule()
    return () => {
      active = false
      cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener('resize', schedule)
    }
  }, [itemCount])

  return ref
}
````

## File: src/lib/analytics.ts
````typescript
const metrikaId = Number(import.meta.env.VITE_YANDEX_METRIKA_ID || '113354835')
const clarityId = import.meta.env.VITE_CLARITY_PROJECT_ID || 'yrw5j54ads'

export type AnalyticsEvent =
  | 'project_open'
  | 'contact_click'
  | 'telegram_click'
  | 'resume_click'
  | 'linkedin_click'
  | 'email_click'
  | 'case_scroll_50'
  | 'case_scroll_90'

type EventParams = Partial<Record<'project' | 'location' | 'source', string>>

let initialized = false
let previousPageUrl: string | null = null
let previousPagePath: string | null = null

function addScript(src: string) {
  if ([...document.scripts].some((script) => script.src === src)) return
  const script = document.createElement('script')
  script.src = src
  script.async = true
  document.head.appendChild(script)
}

export function initAnalytics() {
  if (initialized) return
  initialized = true
  if (!import.meta.env.PROD) return

  if (!window.ym) {
    const queue: YandexMetrika = (...args: unknown[]) => {
      ;(queue.a ??= []).push(args)
    }
    queue.l = Date.now()
    window.ym = queue
  }
  window.ym(metrikaId, 'init', {
    defer: true,
    webvisor: true,
    clickmap: true,
    accurateTrackBounce: true,
    trackLinks: true,
  })
  addScript(`https://mc.yandex.ru/metrika/tag.js?id=${metrikaId}`)

  if (!window.clarity) {
    const queue: MicrosoftClarity = (...args: unknown[]) => {
      ;(queue.q ??= []).push(args)
    }
    window.clarity = queue
  }
  addScript(`https://www.clarity.ms/tag/${clarityId}`)
}

// React StrictMode can rerun effects; only a changed route path is a new pageview.
export function trackPageView(path: string, url: string) {
  if (previousPagePath === path) return false
  initAnalytics()
  const referer = previousPageUrl ?? document.referrer
  previousPagePath = path
  previousPageUrl = url

  if (import.meta.env.PROD) {
    window.ym?.(metrikaId, 'hit', url, { title: document.title, referer })
    // Clarity observes browser history changes itself; no synthetic page event.
  }
  return true
}

export function trackEvent(name: AnalyticsEvent, params: EventParams) {
  if (!import.meta.env.PROD) {
    console.info('[analytics]', name, params)
    return
  }
  initAnalytics()
  window.ym?.(metrikaId, 'reachGoal', name, params)
  window.clarity?.('event', name)
}
````

## File: src/lib/publicAsset.ts
````typescript
/** Resolve files in public/ against Vite's deployment base. */
export function publicAsset(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
}
````

## File: src/pages/ConceptCasePage.tsx
````typescript
import { useEffect, useRef, useState } from 'react'
import { Icon } from '../components/Icon'
import type { CaseVideo, Project } from '../data/portfolio'
import { withoutFinalPeriod } from '../data/caseContent'
import { VisualCaption } from '../components/VisualCaption'
import { CaseMediaStage } from '../components/CaseMediaStage'

type Props = { project: Project }
const emptyVideos: CaseVideo[] = []

export function ConceptCasePage({ project }: Props) {
  const videos = project.videos ?? emptyVideos
  const elements = useRef<(HTMLVideoElement | null)[]>([])
  const control = useRef<(index: number) => void>(() => {})
  const [playing, setPlaying] = useState<number | null>(null)
  const [completed, setCompleted] = useState<number[]>([])

  useEffect(() => {
    const nodes = elements.current.slice(0, videos.length)
    const finished = new Set<number>()
    const manuallyPaused = new Set<number>()
    const blocked = new Set<number>()
    let active: number | null = null
    let manual: number | null = null
    let frame = 0

    const visibility = (video: HTMLVideoElement) => {
      const rect = video.getBoundingClientRect()
      const visible = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0))
      return {
        ratio: rect.height > 0 ? visible / rect.height : 0,
        required: rect.height > 0 ? Math.min(0.6, window.innerHeight * 0.75 / rect.height) : 0.6,
        distance: Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2),
      }
    }

    const pauseActive = () => {
      if (active === null) return
      nodes[active]?.pause()
      active = null
      setPlaying(null)
    }

    const start = (index: number) => {
      const video = nodes[index]
      if (!video || active === index) return
      pauseActive()
      active = index
      video.muted = true
      video.playsInline = true
      const onPlayError = () => {
        if (active !== index) return
        pauseActive()
        manual = null
        blocked.add(index)
      }
      let attempt: Promise<void>
      try {
        attempt = video.play()
      } catch {
        onPlayError()
        return
      }
      void attempt.then(() => {
        if (active === index && !video.paused) setPlaying(index)
      }).catch(onPlayError)
    }

    const reconcile = () => {
      if (document.hidden) {
        pauseActive()
        return
      }
      const visible = nodes.map((video) => video ? visibility(video) : null)
      visible.forEach((value, index) => {
        if (!value || value.ratio < 0.15) {
          manuallyPaused.delete(index)
          blocked.delete(index)
        }
      })
      if (manual !== null) {
        const current = visible[manual]
        if (!current || current.ratio < current.required) manual = null
      }
      const eligible = nodes.map((_, index) => index).filter((index) =>
        visible[index] && visible[index].ratio >= visible[index].required &&
        !manuallyPaused.has(index) && !blocked.has(index) && !finished.has(index),
      )
      const best = eligible.sort((a, b) =>
        visible[b]!.ratio - visible[a]!.ratio || visible[a]!.distance - visible[b]!.distance,
      )[0]
      const target = manual ?? best
      if (target === undefined) pauseActive()
      else start(target)
    }

    const schedule = () => {
      if (frame) return
      frame = requestAnimationFrame(() => { frame = 0; reconcile() })
    }
    const observer = new IntersectionObserver(schedule, {
      threshold: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1],
    })

    const onEnded = (event: Event) => {
      const index = nodes.indexOf(event.currentTarget as HTMLVideoElement)
      if (index < 0) return
      finished.add(index)
      setCompleted([...finished])
      if (active === index) {
        active = null
        setPlaying(null)
      }
      if (manual === index) manual = null
      reconcile()
    }
    const onCanPlay = (event: Event) => {
      const index = nodes.indexOf(event.currentTarget as HTMLVideoElement)
      if (index >= 0) blocked.delete(index)
      schedule()
    }

    nodes.forEach((video) => {
      video?.addEventListener('ended', onEnded)
      video?.addEventListener('canplay', onCanPlay)
      if (video) observer.observe(video)
    })
    control.current = (index) => {
      const video = nodes[index]
      if (!video) return
      if (active === index) {
        manuallyPaused.add(index)
        manual = null
        pauseActive()
        return
      }
      if (finished.has(index)) {
        video.currentTime = 0
        finished.delete(index)
        setCompleted([...finished])
      }
      manuallyPaused.delete(index)
      blocked.delete(index)
      const visible = visibility(video)
      if (visible.ratio < visible.required) {
        video.scrollIntoView({ block: 'center', behavior: 'instant' })
      }
      manual = index
      start(index)
    }
    document.addEventListener('visibilitychange', reconcile)
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    schedule()
    return () => {
      observer.disconnect()
      document.removeEventListener('visibilitychange', reconcile)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      cancelAnimationFrame(frame)
      nodes.forEach((video) => {
        video?.removeEventListener('ended', onEnded)
        video?.removeEventListener('canplay', onCanPlay)
        video?.pause()
      })
      control.current = () => {}
    }
  }, [videos])

  return (
    <div className="case-shell concept-case">
      <main className="case-main" id="main-content" tabIndex={-1}>
        <header className="case-header" id="overview">
          <h1 data-reveal="case-intro" data-reveal-order="0">{project.title}</h1>
          <p className="case-deck" data-reveal="case-intro" data-reveal-order="1">{withoutFinalPeriod(project.description)}</p>
        </header>
        <div className="concept-gallery" aria-label="Видео концептов">
          {videos.map((item, index) => {
            const isPlaying = playing === index
            const hasEnded = completed.includes(index)
            const label = hasEnded && !isPlaying ? 'Повторить' : isPlaying ? 'Пауза' : 'Воспроизвести'
            return (
              <figure className="concept-video-item" id={item.id} key={item.id} data-reveal="image">
                <CaseMediaStage><video
                  ref={(node) => { elements.current[index] = node }}
                  src={item.src}
                  poster={item.poster}
                  width={item.width}
                  height={item.height}
                  muted
                  playsInline
                  preload="none"
                  aria-label={item.title}
                /></CaseMediaStage>
                <VisualCaption action={<button type="button" className="concept-video-action" onClick={() => control.current(index)} aria-label={`${label}: ${item.title}`} title={`${label}: ${item.title}`}>
                    <span className="concept-video-action-visual"><Icon name={hasEnded && !isPlaying ? 'replay' : isPlaying ? 'pause' : 'play'} /></span>
                  </button>}>
                  {item.title}
                </VisualCaption>
              </figure>
            )
          })}
        </div>
      </main>
    </div>
  )
}
````

## File: src/pages/CopyrightPage.tsx
````typescript
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Icon } from '../components/Icon'
import { profile } from '../data/portfolio'
import { trackEvent } from '../lib/analytics'

export function CopyrightPage() {
  useEffect(() => { document.title = `Авторские права — ${profile.name}` }, [])

  return (
    <main className="copyright-page" id="main-content" tabIndex={-1}>
      <Link className="icon-action back-link copyright-back" to="/" aria-label="На главную" title="На главную"><span className="icon-motion"><Icon name="back" /></span></Link>
      <article className="copyright-document">
        <h1>Уведомление об авторских правах на материалы портфолио</h1>

        <section aria-labelledby="copyright-law">
          <h2 id="copyright-law">1. Правовая основа</h2>
          <p>Настоящее уведомление составлено в соответствии с положениями Части четвертой Гражданского кодекса Российской Федерации (Раздел VII, Глава 70). Авторские права на произведения дизайна, графики и программного кода возникают в силу факта их создания. Регистрация произведений в государственных органах для возникновения и защиты прав не требуется (п. 4 ст. 1259 ГК РФ).</p>
        </section>

        <section aria-labelledby="copyright-works">
          <h2 id="copyright-works">2. Объекты прав</h2>
          <p>Объектами авторских прав на данном ресурсе выступают:</p>
          <ul>
            <li>Произведения дизайна (визуальный UI дизайн веб-сайтов и мобильных приложений);</li>
            <li>Произведения архитектуры сайтов (структура, UX-сценарии, вайрфреймы);</li>
            <li>Графические произведения (иллюстрации, иконки, логотипы);</li>
            <li>Программные произведения (фрагменты фронтенд-кода, если они демонстрируются).</li>
          </ul>
        </section>

        <section aria-labelledby="copyright-status">
          <h2 id="copyright-status">3. Правовой статус работ</h2>
          <p>Если иное прямо не указано в описании конкретного проекта:</p>
          <ul>
            <li>Исключительное право на работы, созданные в рамках коммерческой деятельности, принадлежит Заказчику (на основании ст. 1296 ГК РФ — «Произведения, созданные по заказу»).</li>
            <li>Исключительное право на личные, концептуальные и неопубликованные коммерческие работы принадлежит Автору ({profile.name}).</li>
            <li>Авторство (право называться автором) и право на имя являются неотчуждаемыми и непередаваемыми (ст. 1265 ГК РФ).</li>
          </ul>
        </section>

        <section aria-labelledby="copyright-use">
          <h2 id="copyright-use">4. Правила использования материалов</h2>
          <p>Свободное использование материалов портфолио без согласия Автора и без выплаты вознаграждения допускается только в случаях, прямо предусмотренных ст. 1274 ГК РФ (например, в информационных, научных или учебных целях с обязательным указанием имени автора и источника заимствования).</p>
          <p>Категорически запрещается:</p>
          <ul>
            <li>Присвоение авторства (плагиат);</li>
            <li>Внесение изменений в дизайн-макеты;</li>
            <li>Использование визуальных концепций в коммерческих проектах третьих лиц.</li>
          </ul>
        </section>

        <section aria-labelledby="copyright-protection">
          <h2 id="copyright-protection">5. Защита прав</h2>
          <p>В случае нарушения исключительного права Автор оставляет за собой право требовать компенсацию в размере от десяти тысяч до десяти миллионов рублей (ст. 1301 ГК РФ) или в двукратном размере стоимости права использования произведения.</p>
        </section>

        <address className="copyright-contact">
          <strong>Контакт для связи по вопросам прав:</strong> Email: <a href={profile.email} onClick={() => trackEvent('email_click', { location: 'copyright' })}>{profile.email.replace(/^mailto:/, '')}</a>
        </address>
        <p className="copyright-updated">Дата последнего обновления документа: 01.10.2026.</p>
      </article>
      <Footer />
    </main>
  )
}
````

## File: src/sections/.gitkeep
````

````

## File: src/styles/reset.css
````css
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  -webkit-text-size-adjust: 100%;
}

body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

body {
  min-block-size: 100vh;
}

button,
input,
textarea,
select {
  font: inherit;
}

img,
picture,
svg,
canvas,
video {
  display: block;
  max-inline-size: 100%;
}

img,
video {
  block-size: auto;
}
````

## File: src/types/analytics.d.ts
````typescript
type YandexMetrika = ((...args: unknown[]) => void) & {
  a?: unknown[][]
  l?: number
}

type MicrosoftClarity = ((...args: unknown[]) => void) & {
  q?: unknown[][]
}

interface Window {
  ym?: YandexMetrika
  clarity?: MicrosoftClarity
}
````

## File: .env.example
````
VITE_YANDEX_METRIKA_ID=113354835
VITE_CLARITY_PROJECT_ID=yrw5j54ads
````

## File: .oxlintrc.json
````json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
````

## File: tsconfig.app.json
````json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "es2023",
    "lib": ["ES2023", "DOM"],
    "module": "esnext",
    "types": ["vite/client"],
    "allowArbitraryExtensions": true,
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
````

## File: tsconfig.json
````json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
````

## File: tsconfig.node.json
````json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "es2023",
    "lib": ["ES2023"],
    "types": ["node"],
    "skipLibCheck": true,

    /* Bundler mode */
    "module": "nodenext",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}
````

## File: src/components/Footer.tsx
````typescript
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="site-footer" data-reveal>
      <span className="site-footer-credit">©2026</span>
      <Link to="/copyright">Авторские права</Link>
    </footer>
  )
}
````

## File: src/components/Icon.tsx
````typescript
import { ArrowIcon } from './ArrowIcon'

export type IconName =
  | 'external'
  | 'back'
  | 'forward'
  | 'chevron-down'
  | 'telegram'
  | 'document'
  | 'linkedin'
  | 'mail'
  | 'heart'
  | 'check'
  | 'search'
  | 'filter'
  | 'plus'
  | 'grid'
  | 'clock'
  | 'user'
  | 'card'
  | 'backspace'
  | 'status'
  | 'play'
  | 'pause'
  | 'replay'
  | 'menu'
  | 'close'
  | 'arrow-left'

// Rounded, filled silhouettes share a single optical size.
const paths: Record<Exclude<IconName, 'external'>, string> = {
  back: 'M10.4 4.4a1.5 1.5 0 0 1 0 2.2L6.5 10.5H20a1.5 1.5 0 0 1 0 3H6.5l3.9 3.9a1.5 1.5 0 0 1-2.1 2.2l-6.5-6.5a1.5 1.5 0 0 1 0-2.2l6.5-6.5a1.5 1.5 0 0 1 2.1 0Z',
  forward: 'M13.6 4.4a1.5 1.5 0 0 0 0 2.2l3.9 3.9H4a1.5 1.5 0 0 0 0 3h13.5l-3.9 3.9a1.5 1.5 0 0 0 2.1 2.2l6.5-6.5a1.5 1.5 0 0 0 0-2.2l-6.5-6.5a1.5 1.5 0 0 0-2.1 0Z',
  'chevron-down': 'M5 8a1.5 1.5 0 0 1 2.1 0l4.9 4.9L16.9 8a1.5 1.5 0 0 1 2.1 2.1l-6 6a1.5 1.5 0 0 1-2.1 0l-6-6A1.5 1.5 0 0 1 5 8Z',
  telegram: 'M21.7 3.3c.5.2.7.7.5 1.5l-3.3 15.4c-.2 1.1-.9 1.4-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5.1 9.3-8.4c.4-.4-.1-.6-.6-.3L6.3 13.7l-5-1.6c-1.1-.3-1.1-1.1.2-1.6L20.8 3c.4-.1.7 0 .9.3Z',
  document: 'M6 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V9h-5a2 2 0 0 1-2-2V2H6Zm10 .6V7h4.4L16 2.6ZM8 12a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2H8Zm0 4a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2H8Z',
  linkedin: 'M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm.7 5.1a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM6 10h2.5v8H6v-8Zm4.5 0H13v1.1c.6-.9 1.4-1.3 2.6-1.3 2.3 0 3.4 1.4 3.4 3.8V18h-2.5v-4c0-1.4-.4-2-1.5-2-1.2 0-2 .8-2 2.2V18h-2.5v-8Z',
  mail: 'M5 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H5Zm-.3 3.2a1 1 0 0 1 1.4-.1l5.9 4.7 5.9-4.7a1 1 0 1 1 1.2 1.6l-6.5 5.2a1 1 0 0 1-1.2 0L4.9 8.7a1 1 0 0 1-.2-1.5Z',
  heart:
    'M12 21c-.4 0-.8-.2-1.1-.4C7.7 17.8 2 13.5 2 8.5A5.5 5.5 0 0 1 12 5.3a5.5 5.5 0 0 1 10 3.2c0 5-5.7 9.3-8.9 12.1-.3.2-.7.4-1.1.4Z',
  check:
    'M19.9 5.9a1.5 1.5 0 0 1 .2 2.1l-9 11a1.5 1.5 0 0 1-2.2.1l-5-5a1.5 1.5 0 0 1 2.2-2.2l3.8 3.8 7.9-9.6a1.5 1.5 0 0 1 2.1-.2Z',
  search:
    'M10 2a8 8 0 1 0 4.5 14.6l5 5a1.5 1.5 0 0 0 2.1-2.1l-5-5A8 8 0 0 0 10 2Zm0 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z',
  filter:
    'M3 5a1.5 1.5 0 0 0 0 3h18a1.5 1.5 0 0 0 0-3H3Zm4 5.5a1.5 1.5 0 0 0 0 3h10a1.5 1.5 0 0 0 0-3H7Zm3 5.5a1.5 1.5 0 0 0 0 3h4a1.5 1.5 0 0 0 0-3h-4Z',
  plus: 'M12 3a1.5 1.5 0 0 0-1.5 1.5v6h-6a1.5 1.5 0 0 0 0 3h6v6a1.5 1.5 0 0 0 3 0v-6h6a1.5 1.5 0 0 0 0-3h-6v-6A1.5 1.5 0 0 0 12 3Z',
  grid: 'M5 3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Zm10 0a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-4ZM5 13a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H5Zm10 0a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-4Z',
  clock:
    'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1 5a1 1 0 0 1 2 0v4.4l3.5 2a1 1 0 0 1-1 1.8l-4-2.3a1 1 0 0 1-.5-.9V7Z',
  user: 'M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 12c-5 0-8 2.5-8 5a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3c0-2.5-3-5-8-5Z',
  card: 'M5 3a3 3 0 0 0-3 3v1h20V6a3 3 0 0 0-3-3H5ZM2 10v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8H2Zm4 5h4a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2Z',
  backspace:
    'M9 4a3 3 0 0 0-2.3 1.1l-5 6a1.5 1.5 0 0 0 0 1.8l5 6A3 3 0 0 0 9 20h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H9Zm2.3 4.3L14 11l2.7-2.7a1 1 0 1 1 1.4 1.4L15.4 12l2.7 2.7a1 1 0 1 1-1.4 1.4L14 13.4l-2.7 2.7a1 1 0 1 1-1.4-1.4l2.7-2.7-2.7-2.3a1 1 0 1 1 1.4-1.4Z',
  status:
    'M3 15a1 1 0 0 0-1 1v4h3v-4a1 1 0 0 0-1-1H3Zm5-5a1 1 0 0 0-1 1v9h3v-9a1 1 0 0 0-1-1H8Zm5-5a1 1 0 0 0-1 1v14h3V6a1 1 0 0 0-1-1h-1Zm5-3a1 1 0 0 0-1 1v17h3V3a1 1 0 0 0-1-1h-1Z',
  play: 'M7 3.5c0-.8.9-1.3 1.6-.9l12.1 7.6a2.1 2.1 0 0 1 0 3.6L8.6 21.4c-.7.4-1.6-.1-1.6-.9v-17Z',
  pause: 'M6 3a2 2 0 0 0-2 2v14a2 2 0 0 0 4 0V5a2 2 0 0 0-2-2Zm12 0a2 2 0 0 0-2 2v14a2 2 0 0 0 4 0V5a2 2 0 0 0-2-2Z',
  replay: 'M12 3a9 9 0 1 0 8.8 11 1.5 1.5 0 1 0-2.9-.7A6 6 0 1 1 12 6c1.8 0 3.4.8 4.5 2H14a1.5 1.5 0 0 0 0 3.1h6a1.5 1.5 0 0 0 1.5-1.6V3.7a1.5 1.5 0 0 0-3 0v1.8A8.9 8.9 0 0 0 12 3Z',
  menu: 'M4 6.5h16M4 12h16M4 17.5h16',
  close: 'M5 5l14 14M19 5 5 19',
  'arrow-left': 'M19 12H5m0 0 6-6m-6 6 6 6',
}

export function Icon({
  name,
  className = '',
}: {
  name: IconName
  className?: string
}) {
  if (name === 'external') return <ArrowIcon direction="up-right" decorative className={`icon ${className}`} />
  const isStroke = name === 'menu' || name === 'close' || name === 'arrow-left'
  return (
    <svg
      className={`icon ${className}`}
      data-icon={name}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill={isStroke ? 'none' : 'currentColor'}
      stroke={isStroke ? 'currentColor' : undefined}
      strokeWidth={isStroke ? 2 : undefined}
      strokeLinecap={isStroke ? 'round' : undefined}
      strokeLinejoin={isStroke ? 'round' : undefined}
      aria-hidden="true"
      focusable="false"
    >
      <path fillRule={isStroke ? undefined : 'evenodd'} clipRule={isStroke ? undefined : 'evenodd'} d={paths[name]} />
    </svg>
  )
}
````

## File: src/components/ScrollReveals.tsx
````typescript
import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

type RevealKind = 'intro' | 'avatar' | 'logo' | 'card' | 'image' | 'case-cover' | 'text' | 'table' | 'accordion-row' | 'case-intro' | 'fact' | 'result' | 'award-art' | 'award-text'

const revealKind = (block: HTMLElement) => (block.dataset.reveal ?? 'text') as RevealKind
const orderOf = (block: HTMLElement) => Number(block.dataset.revealOrder ?? 0)

// Reveals use compositor-only properties; the small marker observes the start
// of tall content without adding a grid item or changing document geometry.
export function ScrollReveals() {
  const { pathname, search } = useLocation()

  useLayoutEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const blocks = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    const observed = new Map<Element, HTMLElement>()
    const targetsByBlock = new Map<HTMLElement, Element[]>()
    const markers: HTMLElement[] = []
    const pendingBlocks = new Set<HTMLElement>()
    let observer: IntersectionObserver | undefined
    let firstFrame = 0
    let secondFrame = 0
    let passedFrame = 0
    let removePassed = () => {}

    const show = (block: HTMLElement, delay = 0, instant = false) => {
      if (instant) block.dataset.revealInstant = 'true'
      if (block.dataset.revealState === 'visible') return
      pendingBlocks.delete(block)
      block.style.setProperty('--reveal-delay', `${delay}ms`)
      block.dataset.revealState = 'visible'
      targetsByBlock.get(block)?.forEach((target) => observer?.unobserve(target))
    }

    const revealTarget = (target: Element | null) => {
      if (!target) return
      const related = blocks.filter((block) =>
        block === target || block.contains(target) || target.contains(block),
      )
      related.forEach((block) => show(block, 0, true))
    }

    const start = () => {
      observer?.disconnect()
      removePassed()
      cancelAnimationFrame(firstFrame)
      cancelAnimationFrame(secondFrame)
      cancelAnimationFrame(passedFrame)
      markers.forEach((marker) => {
        marker.parentElement?.classList.remove('reveal-observe-anchor')
        marker.remove()
      })
      markers.length = 0
      observed.clear()
      targetsByBlock.clear()
      pendingBlocks.clear()

      if (media.matches || !('IntersectionObserver' in window)) {
        blocks.forEach((block) => show(block, 0, true))
        return
      }

      observer = new IntersectionObserver((entries) => {
        const entering = [...new Set(entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => observed.get(entry.target))
          .filter((block): block is HTMLElement => Boolean(block) && block?.dataset.revealState === 'pending'))]
        if (!entering.length) return

        const cards = entering.filter((block) => ['card', 'image'].includes(revealKind(block)))
          .sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top)
        let cardOrder = 0
        cards.forEach((block) => {
          // A fast jump can expose the middle of an earlier card. Stagger it
          // when it is still visible; only a fully departed card is skipped.
          const rect = block.getBoundingClientRect()
          show(block, rect.bottom <= 0 ? 0 : cardOrder++ * 100)
        })

        for (const block of entering) {
          if (block.dataset.revealState !== 'pending') continue
          const kind = revealKind(block)
          const delay = kind === 'intro' ? orderOf(block) * 90
            : kind === 'logo' ? orderOf(block) * 50
              : ['accordion-row', 'case-intro', 'fact', 'result', 'case-cover'].includes(kind) ? orderOf(block) * 80
                : kind === 'award-text' ? orderOf(block) * 90 : 0
          show(block, delay)
        }
      }, { rootMargin: '0px 0px -12% 0px', threshold: 0 })

      // Large scroll jumps can skip the observer's entry window. Content that
      // has already passed the viewport must never remain invisible above it.
      const revealPassed = () => {
        passedFrame = 0
        const atPageEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2
        for (const block of pendingBlocks) {
          const rect = block.getBoundingClientRect()
          if (rect.bottom <= 0) show(block, 0, true)
          else if (atPageEnd && rect.top < window.innerHeight && rect.bottom > 0) show(block)
        }
      }
      const schedulePassed = () => {
        if (!passedFrame) passedFrame = requestAnimationFrame(revealPassed)
      }
      window.addEventListener('scroll', schedulePassed, { passive: true })
      removePassed = () => window.removeEventListener('scroll', schedulePassed)
      schedulePassed()

      const target = document.getElementById(window.location.hash.slice(1))
      const positions = blocks.map((block) => ({
        block,
        rect: block.getBoundingClientRect(),
      }))
      const pending: HTMLElement[] = []
      for (const { block, rect } of positions) {
        if (block.dataset.revealState === 'visible') continue
        if (rect.bottom <= 0 || (target && (target === block || block.contains(target) || target.contains(block)))) {
          show(block, 0, true)
          continue
        }
        block.dataset.revealState = 'pending'
        pendingBlocks.add(block)
        pending.push(block)
      }

      // Two frames ensure the invisible start state is painted before motion.
      firstFrame = requestAnimationFrame(() => {
        secondFrame = requestAnimationFrame(() => {
          for (const block of pending) {
            if (block.dataset.revealState !== 'pending') continue
            let target: Element = block
            const kind = revealKind(block)
            if (['card', 'image', 'case-cover', 'text', 'table'].includes(kind) &&
              block.getBoundingClientRect().height > window.innerHeight * 0.6) {
              const marker = document.createElement('span')
              marker.className = 'reveal-trigger'
              marker.setAttribute('aria-hidden', 'true')
              block.classList.add('reveal-observe-anchor')
              block.append(marker)
              markers.push(marker)
              target = marker
            }
            observed.set(target, block)
            targetsByBlock.set(block, [target])
            observer?.observe(target)
            if (target !== block) {
              observed.set(block, block)
              targetsByBlock.get(block)?.push(block)
              observer?.observe(block)
            }
          }
        })
      })
    }

    const revealFocus = (event: FocusEvent) => {
      if (event.target instanceof Element) {
        const block = event.target.closest<HTMLElement>('[data-reveal]')
        if (block) show(block, 0, true)
      }
    }
    const revealAnchorClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return
      const link = event.target.closest<HTMLAnchorElement>('a[href]')
      if (!link?.hash) return
      const url = new URL(link.href)
      if (url.origin === window.location.origin && url.pathname === window.location.pathname) {
        revealTarget(document.getElementById(decodeURIComponent(url.hash.slice(1))))
      }
    }
    const revealHash = () => revealTarget(document.getElementById(window.location.hash.slice(1)))

    start()
    media.addEventListener('change', start)
    document.addEventListener('focusin', revealFocus)
    document.addEventListener('click', revealAnchorClick, true)
    window.addEventListener('hashchange', revealHash)
    window.addEventListener('popstate', revealHash)

    return () => {
      observer?.disconnect()
      removePassed()
      cancelAnimationFrame(firstFrame)
      cancelAnimationFrame(secondFrame)
      cancelAnimationFrame(passedFrame)
      markers.forEach((marker) => marker.remove())
      media.removeEventListener('change', start)
      document.removeEventListener('focusin', revealFocus)
      document.removeEventListener('click', revealAnchorClick, true)
      window.removeEventListener('hashchange', revealHash)
      window.removeEventListener('popstate', revealHash)
      blocks.forEach((block) => {
        block.classList.remove('reveal-observe-anchor')
        if (block.dataset.revealState === 'pending') delete block.dataset.revealState
      })
    }
  }, [pathname, search])

  return null
}
````

## File: src/pages/ProjectPage.tsx
````typescript
import { useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { profile, projects } from '../data/portfolio'
import type { CaseImage } from '../data/portfolio'
import { getCaseGroups, withoutFinalPeriod } from '../data/caseContent'
import type { CaseNode } from '../data/caseContent'
import { Icon } from '../components/Icon'
import { SegmentedControl } from '../components/SegmentedControl'
import { ConceptCasePage } from './ConceptCasePage'
import { CaseVisual } from '../components/CaseVisual'
import { CaseThanks } from '../components/CaseThanks'
import { InlineArrows } from '../components/ArrowIcon'
import { MetaSeparatedText } from '../components/MetaSeparatedText'
import { visualsAfter } from '../data/caseVisuals'
import { VisualCaption } from '../components/VisualCaption'
import { CaseMediaStage } from '../components/CaseMediaStage'

const versionOptions = [
  { value: 'full', label: 'Полная версия' },
  { value: 'short', label: 'Сокращённая версия' },
]

function CaseNodeView({ node }: { node: CaseNode }) {
  if (node.kind === 'heading') {
    const className = /^(Проблема|Решение|Результат)$/.test(node.text.trim()) ? 'case-outcome-label' : undefined
    const id = node.text.startsWith('Рефлексия') ? 'reflection' : undefined
    return node.level === 4 ? <h4 id={id} className={className}><InlineArrows text={node.text} /></h4> : <h3 id={id} className={className}><InlineArrows text={node.text} /></h3>
  }
  if (node.kind === 'list') {
    const List = node.ordered ? 'ol' : 'ul'
    return (
      <List className={node.ordered ? 'step-list' : 'star-list'} role="list">
        {node.items.map((item, index) => <li key={index}><InlineArrows text={item} /></li>)}
      </List>
    )
  }
  return <p><InlineArrows text={withoutFinalPeriod(node.text)} /></p>
}

function splitResult(text: string) {
  const statement = text.replace(/^\s*—\s*/, '').trim()
  const explanation = statement.search(/\s+(?:за счёт|благодаря)\s+/i)
  if (explanation >= 0) return { lead: statement.slice(0, explanation), detail: statement.slice(explanation).trim() }
  const metric = /[+−-]?\d+(?:[–-]\d+)?\s*(?:%|п\.\s*п\.)/i.exec(statement)
  if (!metric || metric.index === undefined) return { lead: statement, detail: '' }
  const detail = [
    statement.slice(0, metric.index).replace(/(?:\s+на|\s+в)\s*$/, '').replace(/\s+—\s*$/, '').trim(),
    statement.slice(metric.index + metric[0].length).trim(),
  ].filter(Boolean).join(' ')
  return { lead: metric[0], detail }
}

function CaseResults({ items }: { items: string[] }) {
  return (
      <dl className="case-facts case-results case-metric-grid" aria-label="Результаты проекта">
        {items.map((item, index) => {
          const { lead, detail } = splitResult(item)
          return <div key={item} data-reveal="result" data-reveal-order={index}><dt>{lead}</dt>{detail && <dd>{detail}</dd>}</div>
        })}
      </dl>
  )
}

function CaseDocumentNodes({ nodes, projectId, groupId, groupTitle }: { nodes: CaseNode[]; projectId: string; groupId: string; groupTitle: string }) {
  let precedingHeading = groupTitle
  let textNodes: CaseNode[] = []
  let blockIndex = 0
  const blocks: ReactNode[] = []
  const flushText = () => {
    if (!textNodes.length) return
    const current = textNodes
    textNodes = []
    if (current.every((node) => node.kind === 'heading')) {
      blocks.push(
        <div className="case-standalone-heading" key={`heading-${blockIndex++}`}>
          {current.map((node, index) => <CaseNodeView node={node} key={index} />)}
        </div>,
      )
      return
    }
    blocks.push(
      <div className="case-text-card" key={`text-${blockIndex++}`}>
        {current.map((node, index) => <CaseNodeView node={node} key={index} />)}
      </div>,
    )
  }
  nodes.forEach((node) => {
    if (groupId === 'final' && node.kind === 'list' && blockIndex === 0 && textNodes.length === 0) {
      blocks.push(<CaseResults items={node.items} key="results" />)
      blockIndex += 1
      for (const visual of visualsAfter(projectId, groupId, node.items.join(' '))) {
        blocks.push(<CaseVisual visual={visual} precedingHeading={groupTitle} key={visual.id} />)
      }
      return
    }
    if (node.kind === 'heading') {
      if (textNodes.some(node => node.kind !== 'heading')) flushText()
      precedingHeading = node.text
    }
    textNodes.push(node)
    const text = node.kind === 'list' ? node.items.join(' ') : node.text
    for (const visual of visualsAfter(projectId, groupId, text)) {
      flushText()
      blocks.push(<CaseVisual visual={visual} precedingHeading={precedingHeading} key={visual.id} />)
    }
  })
  flushText()
  return blocks
}

function CaseGallery({ images }: { images: CaseImage[] | undefined }) {
  const reduced = useReducedMotion()
  if (!images?.length) return null
  return (
    <div className="case-image-gallery" aria-label="Экраны проекта">
      {images.map((image) => (
        <motion.figure className="case-image-frame" key={image.src}
          initial={reduced ? false : { opacity: 0, transform: 'translateY(10px)' }}
          whileInView={{ opacity: 1, transform: 'translateY(0px)' }} viewport={{ once: true, amount: .02 }}
          transition={{ duration: .35, ease: [.22, 1, .36, 1] }}>
          <a href={image.src} target="_blank" rel="noreferrer" aria-label={`Открыть изображение в полном размере: ${image.caption}`}>
            <CaseMediaStage><img
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading="lazy"
              decoding="async"
            /></CaseMediaStage>
          </a>
          <VisualCaption>{image.caption}</VisualCaption>
        </motion.figure>
      ))}
    </div>
  )
}

export function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((item) => item.id === slug)
  const [searchParams, setSearchParams] = useSearchParams()
  const isShort = searchParams.get('version') === 'short'

  useEffect(() => {
    document.title = project
      ? `${project.title} — ${profile.name}`
      : `Проект не найден — ${profile.name}`
  }, [project])

  if (!project)
    return (
      <main className="not-found" id="main-content" tabIndex={-1}>
        <h1>Проект не найден</h1>
        <p>Посмотрите другие работы на главной странице.</p>
        <Link className="button" to="/">На главную</Link>
      </main>
    )

  if (project.videos)
    return <ConceptCasePage project={project} />

  function changeVersion(short: boolean) {
    setSearchParams(
      (previous) => {
        const next = new URLSearchParams(previous)
        if (short) next.set('version', 'short')
        else next.delete('version')
        return next
      },
      { preventScrollReset: true },
    )
  }

  const groups = getCaseGroups(project).filter(
    (group) => !isShort || group.id === 'context' || group.id === 'final',
  )
  const showThanks = (projects.indexOf(project) + 1) % 2 === 0

  return (
    <div className="case-shell" key={project.id}>
      <main className="case-main" id="main-content" tabIndex={-1}>
        <header className="case-header">
          {project.figmaUrl ? (
            <div className="case-meta" data-reveal="case-intro" data-reveal-order="0">
              <a className="button figma-button" href={project.figmaUrl} target="_blank" rel="noreferrer">
                Figma-файл <span className="icon-motion"><Icon name="external" /></span>
              </a>
            </div>
          ) : null}
          <h1 data-reveal="case-intro" data-reveal-order={project.figmaUrl ? 1 : 0}>{project.title}</h1>
        </header>
        <SegmentedControl
          label="Версия кейса"
          value={isShort ? 'short' : 'full'}
          options={versionOptions}
          controls="case-content"
          onChange={(value) => changeVersion(value === 'short')}
        />
        <div className="case-content" id="case-content">
          <div className="case-overview" id="overview">
            {project.cover ? (
              <figure className="case-showcase" data-reveal="case-cover" data-reveal-order="3">
                <CaseMediaStage>
                  <img src={project.cover} alt={`Главный экран проекта ${project.title}`}
                    width={project.coverDimensions?.width} height={project.coverDimensions?.height} decoding="async" />
                </CaseMediaStage>
              </figure>
            ) : null}
            <dl className="case-facts" aria-label="О проекте">
              <div data-reveal="fact" data-reveal-order="0"><dt>Роль</dt><dd>{project.discipline}</dd></div>
              <div data-reveal="fact" data-reveal-order="1"><dt>Платформа</dt><dd><MetaSeparatedText value={project.platform} /></dd></div>
              <div data-reveal="fact" data-reveal-order="2"><dt>Ниша</dt><dd>{project.niche ? <MetaSeparatedText value={project.niche} separator="slash" /> : null}</dd></div>
            </dl>
            <p className="case-deck" data-reveal="text">{withoutFinalPeriod(project.description)}</p>
          </div>
          {groups.map((group) => (
            <section className="case-section case-document-section" id={group.id} key={group.id} aria-labelledby={`${group.id}-title`}>
              <h2 id={`${group.id}-title`} data-reveal="text">{group.title}</h2>
              <CaseDocumentNodes nodes={group.nodes} projectId={project.id} groupId={group.id} groupTitle={group.title} />
              <CaseGallery images={project.images?.[group.id]} />
            </section>
          ))}
        </div>
        {showThanks ? <CaseThanks /> : null}
      </main>
    </div>
  )
}
````

## File: src/main.tsx
````typescript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/tokens.css'
import './styles/reset.css'
import './styles/globals.css'
import './styles/homeCanvas.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
````

## File: .gitignore
````
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local
.env
.env.*
!.env.example

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Local design exports and generated repository snapshots
/case-sources/
/references/
/repomix-output.md
````

## File: vite.config.ts
````typescript
import react from '@vitejs/plugin-react'
import { copyFileSync, writeFileSync } from 'node:fs'
import { defineConfig } from 'vite'

export default defineConfig(({ command, isPreview }) => ({
  base: command === 'build' || isPreview ? '/sophia-portfolio/' : '/',
  plugins: [
    react(),
    ...(command === 'build' ? [{
      name: 'github-pages-spa-fallback',
      closeBundle() {
        copyFileSync('dist/index.html', 'dist/404.html')
        writeFileSync('dist/.nojekyll', '')
      },
    }] : []),
  ],
}))
````

## File: src/components/ProfileSidebar.tsx
````typescript
import { motion, useReducedMotion } from 'framer-motion'
import { aboutPresentation, education, experience, profile, toolLogos } from '../data/portfolio'
import type { Experience } from '../data/portfolio'
import { Icon } from './Icon'
import { SocialIconLinks, TelegramLink } from './ContactLinks'
import { MetaSeparatedText } from './MetaSeparatedText'
import { publicAsset } from '../lib/publicAsset'
import { Footer } from './Footer'

function ToolsStrip() {
  return (
    <ul className="tools-strip" aria-label="Инструменты">
      {toolLogos.map((tool, index) => (
        <li
          className={`tool-tile tool-tile--${tool.id}`}
          key={tool.id}
          title={tool.label}
        >
          <span className="tool-logo-reveal" data-reveal="logo" data-reveal-order={index}>
            <img
              src={tool.src}
              alt={tool.label}
              width="32"
              height="32"
            />
          </span>
        </li>
      ))}
    </ul>
  )
}

function ResumeEntry({ item }: { item: Experience }) {
  const Heading = item.projects?.length ? 'h2' : 'h3'
  return (
    <li>
          <div className="resume-entry-intro">
            <span className={`company-logo${item.company === 'Contented' ? ' company-logo--contented' : ''}`} aria-hidden="true">
              {item.logo ? (
                <img src={item.logo} alt="" width="36" height="36" />
              ) : null}
            </span>
            <div className="resume-entry-details">
              <Heading>{item.role}</Heading>
              <p className="resume-entry-company">{item.company}</p>
              <p className="resume-entry-period">{item.period}</p>
              {item.summary ? <p className="resume-entry-summary">{item.summary}</p> : null}
            </div>
            {item.certificateUrl ? (
              <a className="certificate-link" href={item.certificateUrl} target="_blank" rel="noreferrer"
                aria-label={`Посмотреть сертификат ${item.company}`} title="Посмотреть сертификат">
                <span className="certificate-link-visual"><Icon name="external" /></span>
              </a>
            ) : null}
          </div>
          {item.projects?.length ? (
              <div className="resume-projects">
              {item.projects.map((project, index) => (
                <article className="resume-project" key={project.title}>
                  <h3 className="resume-project-title">{index + 1}. {project.title.replace(/^\d+\.\s*/, '')}</h3>
                  <h4 className="resume-project-topic">Результат</h4>
                  <ul className="star-list" role="list">{project.results.map((result) => <li key={result}>{result}</li>)}</ul>
                  <h4 className="resume-project-topic">Проблема</h4>
                  <p>{project.problem}</p>
                  <h4 className="resume-project-topic">Решение</h4>
                  <p>{project.solution}</p>
                </article>
              ))}
              </div>
          ) : null}
    </li>
  )
}

function ResumeEntries({ items }: { items: Experience[] }) {
  return (
    <ol className="resume-entries">
      {items.map((item) => <ResumeEntry key={item.company} item={item} />)}
    </ol>
  )
}

const entrance = {
  hidden: { opacity: 0, transform: 'translateY(8px)' },
  visible: { opacity: 1, transform: 'translateY(0px)' },
}

export function ProfileHero() {
  const reducedMotion = useReducedMotion()
  return <section className="profile-hero" data-canvas-panel aria-labelledby="hero-title">
    <motion.div className="hero-copy" initial={reducedMotion ? false : 'hidden'} animate="visible"
      transition={{ staggerChildren: .06 }}>
      <motion.div className="hero-identity" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} transition={{ duration: .35 }}>
        <p>{profile.name}</p>
      </motion.div>
      <motion.h1 id="hero-title" className="profile-role" variants={{ hidden: { opacity: 0, transform: 'translateX(-8px)' }, visible: { opacity: 1, transform: 'translateX(0px)' } }} transition={{ duration: .55, ease: [.22, 1, .36, 1] }}>
        <span className="hero-headline-line">UX/UI&nbsp;&amp;&nbsp;Product дизайнер</span>{' '}
        <span className="hero-headline-line">с&nbsp;опытом в&nbsp;финтехе,</span>{' '}
        <span className="hero-headline-line">цифровых экосистемах</span>{' '}
        <span className="hero-headline-line">и&nbsp;B2B/B2C‑продуктах</span>
      </motion.h1>
      <motion.div className="hero-links" variants={entrance} transition={{ duration: .65, ease: [.22, 1, .36, 1] }}><SocialIconLinks location="hero" /></motion.div>
      <motion.p className="hero-location" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} transition={{ duration: .35 }}><MetaSeparatedText value={profile.location} /></motion.p>
    </motion.div>
    <div className="hero-visual">
      <motion.div className="profile-avatar" initial={reducedMotion ? false : { opacity: 0, transform: 'translateY(18px)' }}
        animate={{ opacity: 1, transform: 'translateY(0px)' }} transition={{ duration: .75, ease: [.22, 1, .36, 1] }}>
        <img src={publicAsset('cases/avatar.jpg')} alt={`Фото ${profile.name}`} width="400" height="400" decoding="async" fetchPriority="high" />
      </motion.div>
    </div>
  </section>
}

export function ProfileAbout() {
  const reduced = useReducedMotion()
  return <motion.section className="profile-about" id="about" data-canvas-panel aria-label="Обо мне"
    initial={reduced ? false : 'hidden'} whileInView="visible" viewport={{ once: true, amount: .15 }}
    transition={{ staggerChildren: reduced ? 0 : .05 }}>
    <motion.h2 id="about-title" className="about-statement" variants={entrance} transition={{ duration: .4 }}>
      {aboutPresentation.statement} <span>{aboutPresentation.emphasis}</span>
    </motion.h2>
    <div className="about-principles">
      {aboutPresentation.principles.map(principle => <motion.div className="about-principle" key={principle.title} variants={entrance} transition={{ duration: .35 }}>
        <h3>{principle.title}</h3>
        <p>{principle.description}</p>
      </motion.div>)}
    </div>
    <motion.footer className="about-bottom" variants={entrance} transition={{ duration: .35 }}>
      <ul className="about-tool-chips" aria-label="Инструменты">
        {toolLogos.map(tool => <li key={tool.id}>{tool.label}</li>)}
      </ul>
    </motion.footer>
  </motion.section>
}

export function ExperienceContent() {
  return <div className="profile-details">
    <section className="experience" id="experience" aria-labelledby="experience-title">
      <div className="section-heading"><h1 id="experience-title" data-reveal="text">Опыт работы</h1></div>
      <ResumeEntries items={experience} />
    </section>
    <section className="education-section" id="education" aria-labelledby="education-title">
      <div className="section-heading"><h2 id="education-title" data-reveal="text">Образование<br />и курсы</h2></div>
      <ResumeEntries items={education} />
    </section>
    <section className="tools-section" aria-labelledby="tools-title">
      <h2 id="tools-title" data-reveal="text">Инструменты</h2>
      <ToolsStrip />
    </section>
  </div>
}

export function ProfileContact() {
  return (
    <section className="contacts-section" id="contacts" data-canvas-panel aria-labelledby="contacts-title">
      <div className="contact-copy">
        <h2 id="contacts-title" data-reveal="text">Будем на связи!</h2>
        <div className="contact-actions"><TelegramLink location="contacts" label="Связаться" showIcon={false} /><SocialIconLinks location="contacts" first="hh" /></div>
      </div>
      <div className="contact-signature">@wsslxq</div>
      <img className="contact-portrait" src={publicAsset('cases/contact-portrait.jpg')} alt="Фото Софьи Стрельченко" width="2592" height="3240" loading="lazy" />
      <Footer />
    </section>
  )
}
````

## File: src/components/ProjectCard.tsx
````typescript
import { Link } from 'react-router-dom'
import type { Project } from '../data/portfolio'
import { CaseCursor } from './CaseCursor'
import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { SceneSurface } from './SceneSurface'
import { ProjectCover } from './ProjectCover'

const hoverQuery = '(min-width: 1101px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)'

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduced = useReducedMotion()
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [interactive, setInteractive] = useState(() => window.matchMedia(hoverQuery).matches)
  useEffect(() => {
    const media = window.matchMedia(hoverQuery)
    const update = () => { setInteractive(media.matches); setHovered(false) }
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])
  const revealed = !interactive || hovered || focused
  return (
    <article className="project-card" data-canvas-panel data-project={project.id}>
      <Link
        className="project-link"
        to={`/projects/${project.id}`}
        aria-labelledby={`${project.id}-title`}
        data-reveal-details={interactive}
        onPointerEnter={event => { if (event.pointerType === 'mouse') setHovered(true) }}
        onPointerLeave={() => setHovered(false)}
        onPointerCancel={() => setHovered(false)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        <CaseCursor>
          <SceneSurface single={project.id === 'skywallet' || project.id === 'astoria'} />
          <ProjectCover project={project} revealed={revealed} immediate={focused || !interactive}>
          {project.cover ? (
              <div className="project-media">
                <motion.div className="project-artwork project-artwork--image"
                  initial={reduced ? false : { opacity: 0, transform: index % 2 ? 'scale(.98)' : 'translateX(16px)' }}
                  whileInView={{ opacity: 1, transform: reduced ? 'none' : index % 2 ? 'scale(1)' : 'translateX(0px)' }} viewport={{ once: true, amount: .15 }}
                  transition={{ duration: .5, ease: [.22, 1, .36, 1] }}>
                  <img
                    src={project.cover}
                    alt=""
                    width={project.coverDimensions?.width}
                    height={project.coverDimensions?.height}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                </motion.div>
              </div>
          ) : (
            <div className="project-artwork project-artwork--pending" aria-hidden="true">
              <span>{project.title.split(' — ')[0]}</span>
            </div>
          )}
          </ProjectCover>
        </CaseCursor>
      </Link>
    </article>
  )
}
````

## File: src/data/portfolio.ts
````typescript
import caseDocuments from './caseDocuments.json'
import { caseCoverDimensions, caseImages } from './caseImages'
import { publicAsset } from '../lib/publicAsset'

export const profile = {
  name: 'Софья Стрельченко',
  role: 'UX/UI & Product Designer',
  location: 'Москва • GMT+3',
  email: 'mailto:sofia.ux.ui@icloud.com',
  telegram: 'https://example.com/telegram',
  cv: 'https://example.com/resume',
  hh: 'https://example.com/hh',
  linkedin: 'https://www.linkedin.com/in/sophie-dsgn',
  about:
    'Разбираюсь в сложных требованиях, нахожу слабые места в пользовательских сценариях и довожу решения до разработки. Для меня качество дизайна — это и сильный визуал, и результат: сможет ли человек разобраться в продукте, завершить задачу и захотеть вернуться',
}

export const aboutPresentation = {
  statement: 'От сложных требований — к понятным продуктовым решениям.',
  emphasis: 'Разбираюсь в сценариях, нахожу слабые места и соединяю сильный визуал с логикой продукта и бизнес-результатом',
  principles: [
    { title: 'UI и UX', description: 'Соединяю сильный визуал с понятными пользовательскими сценариями' },
    { title: 'Фокус на результате', description: 'Важно, чтобы человек разобрался в продукте, завершил задачу и захотел вернуться' },
    { title: 'От требований к разработке', description: 'Разбираюсь в сложных требованиях и довожу решения до разработки' },
    { title: 'Эмпатия', description: 'Нахожу слабые места в сценариях, которые мешают человеку пользоваться продуктом' },
  ],
}

export type Experience = {
  company: string
  role: string
  period: string
  summary?: string
  certificateUrl?: string
  logo?: string
  projects?: ExperienceProject[]
}

export type ExperienceProject = {
  title: string
  results: string[]
  problem: string
  solution: string
}

export const experience: Experience[] = [
  {
    company: 'Юкки',
    role: 'UX/UI-дизайнер',
    period: '02.2025 — 10.2025',
    logo: '/icons/job/Юкки.webp',
    summary: 'Редизайн лендинга и калькулятора займа, личный кабинет заёмщика',
    projects: [
      { title: 'Редизайн лендинга и интерактивного калькулятора займа', results: ['Рост CR из визита в отправку анкеты на займ на +14%', 'Снижение показателей отказов (Bounce Rate) на первом экране на −20%', 'Сокращение времени взаимодействия с калькулятором на −25%'], problem: 'Пользователи не до конца понимали итоговую стоимость займа и переплату на первом экране, из-за чего бросали сценарий расчета на этапе ввода базовых параметров', solution: 'Пересобрала пользовательский путь от первого экрана до целевого действия, упростила логику взаимодействия с калькулятором займа, усилила визуальную иерархию и прозрачность условий' },
      { title: 'Разработка личного кабинета заемщика', results: ['Рост доли повторных погашений и продлений Retention на +9%', 'Сокращение обращений в службу поддержки по вопросам статуса займа на −25%'], problem: 'Действующим клиентам было трудно находить информацию о текущем займе, датах платежей и доступных лимитах, из-за чего они совершали просрочки или обращались в саппорт', solution: 'Спроектировала дашборд личного кабинета с акцентом на ключевой статус займа и срочностью погашения, выстроила прозрачную систему нотификаций и сократила путь до совершения платежа или продления до 2 кликов' },
    ],
  },
  {
    company: 'Make Difference',
    role: 'UX/UI-дизайнер',
    period: '10.2025 — 07.2026',
    logo: '/icons/job/Make_Difference.jpg',
    summary: 'Экосистема женского здоровья, Atlyx и Астория: архитектура и ключевые сценарии',
    projects: [
      { title: '01. Экосистема женского здоровья', results: ['Рост активации новых пользователей (Activation Rate) на +12%', 'Рост CR в запись на консультацию на +10%', 'Рост D30 Retention на +8%', 'Сокращение времени до первого целевого действия на −15%'], problem: 'Идея большой платформы вокруг личного бренда врача (обучение, контент, консультации, магазин, личный кабинет, трекинг здоровья) на старте не имела фокуса — нужно было превратить широкую идею в понятный MVP и не распыляться на функции следующих этапов', solution: 'Структурировала продуктовую концепцию и определила MVP-функциональность, разработала архитектуру экосистемы из связанных модулей, определила ключевые сценарии обучения, консультаций, покупок и работы с персональными данными' },
      { title: '2. Atlyx — мобильное приложение для путешествий', results: ['Рост D30 Retention на +7%', 'Рост конверсии в создание первой поездки на +12%', 'Рост использования сохраненных мест и маршрутов на +10%'], problem: 'Приложению требовалось связать хранение поездок, перелетов, мест на карте и статистики в единый привычный сценарий, иначе пользователь открывал бы его пару раз перед поездкой и не возвращался', solution: 'Сформировала структуру приложения вокруг ключевых задач путешественника, спроектировала сценарии планирования поездок, добавления мест и просмотра статистики, разработала концепцию личного кабинета и достижений, заложила игровые механики для повышения вовлеченности' },
      { title: '3. Астория — онлайн-агрегатор туров', results: ['Рост CR из поиска тура в отправку заявки на +10%', 'Рост CTR карточек туров на +13%', 'Сокращение времени поиска подходящего тура на −16%', 'Снижение отказов на этапе выбора тура на −5%'], problem: 'Клиент хотел уйти от внешних виджетов Турвизора к собственному сервису поиска и бронирования: виджеты не давали управлять опытом пользователя (выдачей, фильтрами, страницами направлений), что мешало бизнесу масштабировать продукт', solution: 'Спроектировала UX-архитектуру агрегатора туров, разработала сценарии поиска, фильтрации, выбора и оформления тура, создала структуру карточки тура и страниц направлений, продумала административную часть для управления контентом и промо-блоками, подготовила адаптивные макеты, UI-компоненты и спецификации' },
    ],
  },
  {
    company: 'SkyCapital Group',
    role: 'Product / UX/UI-дизайнер',
    period: '08.2026 — н.в.',
    logo: '/icons/job/SkyCapital_Group.svg',
    summary: 'White Label, Partner Portal и SkyWallet: финансовые сценарии и дизайн-системы',
    projects: [
      { title: '1. Разработка crypto-сайтов «под ключ» по ТЗ (White Label)', results: ['Рост CR в целевую заявку на ~12%', 'Снижение показателей отказов (Bounce Rate) на ~22%', 'Сокращение TTM запуска новых продуктов на ~20%'], problem: 'Заказчикам White Label продуктов требовалось оперативно запускать конверсионные лендинги под индивидуальные криптопродукты без потери в качестве пользовательского опыта и брендинга', solution: 'Спроектировала гибкую модульную сетку и адаптивную архитектуру посадочных страниц, усилила визуальную иерархию и CTA-структуру, заложила масштабируемый UI-kit для быстрой кастомизации под требования партнёров и передала разработчикам чистые спецификации' },
      { title: '2. Редизайн внешнего и внутреннего контуров SkyCapital (web + mobile)', results: ['Сокращение времени прохождения ключевых сценариев в личном кабинете на ~30%', 'Снижение процента валидационных ошибок при заполнении форм на ~35%', 'Снижение объема обращений в поддержку по интерфейсным багам в ~1.8 раза'], problem: 'Пользователи и партнеры теряли контекст при работе со сложными финансовыми данными и транзакциями, из-за чего зависели от ручной коммуникации с менеджерами', solution: 'Пересобрала информационную архитектуру и навигацию внутреннего контура, выстроила прозрачную систему статусов и уведомлений, снизила когнитивную нагрузку в интерфейсах личного кабинета и оптимизировала адаптивные сценарии под мобильные устройства' },
      { title: '3. Дизайн приложения SkyWallet', results: ['Рост завершенности транзакционных сценариев (CR в успешный перевод) на ~16%', 'Рост показателей удержания пользователей (Retention D7–D30) на ~10%'], problem: 'Пользователям было сложно ориентироваться в базовых операциях с цифровыми активами, что приводило к брошенным сценариям на этапе авторизации и перевода средств', solution: 'Упростила сценарий ключевых транзакций до минимального количества шагов, переработала UX-логику онбординга и обеспечила высокую консистентность интерфейсных элементов на базе единой дизайн-системы' },
    ],
  },
].map((item) => ({ ...item, logo: item.logo ? publicAsset(item.logo) : undefined }))

export const education: Experience[] = [
  { company: 'FormFactor', role: 'Продуктовый дизайн', period: '2026', logo: '/icons/job/Изображение ChatGPT 1 окт. 2026 г., 01_11_09.png' },
  {
    company: 'Contented',
    role: 'UX/UI-дизайнер с нуля до PRO',
    period: '2024 — 2025',
    logo: '/icons/job/Contented.png',
    certificateUrl: 'https://cloud.mail.ru/public/8w32/g9yfb6Yg2',
  },
].map((item) => ({ ...item, logo: item.logo ? publicAsset(item.logo) : undefined }))

// Keep the editorial order: design, research, collaboration, then AI.
export const toolLogos = [
  { id: 'figma', label: 'Figma', src: '/icons/tools/figma.svg' },
  { id: 'protopie', label: 'ProtoPie', src: '/icons/tools/protopie.svg' },
  { id: 'principle', label: 'Principle', src: '/icons/tools/principle-app-2.svg' },
  { id: 'miro', label: 'Miro', src: '/icons/tools/miro.svg' },
  { id: 'yandex-metrica', label: 'Яндекс Метрика', src: '/icons/tools/yandex-metrica.svg' },
  { id: 'google-analytics', label: 'Google Analytics', src: '/icons/tools/google-analytics.svg' },
  { id: 'notion', label: 'Notion', src: '/icons/tools/notion.svg' },
  { id: 'jira', label: 'Jira', src: '/icons/tools/jira-3.svg' },
  { id: 'confluence', label: 'Confluence', src: '/icons/tools/Confluence.svg' },
  { id: 'chatgpt', label: 'ChatGPT', src: '/icons/tools/chatgpt.svg' },
  { id: 'claude', label: 'Claude', src: '/icons/tools/claude.svg' },
  { id: 'cursor', label: 'Cursor', src: '/icons/tools/cursor.svg' },
].map((tool) => ({ ...tool, src: publicAsset(tool.src) }))

export type CaseBlock = {
  kind: string
  bullet: boolean
  text: string
}

export type CaseImage = {
  src: string
  alt: string
  caption: string
  width: number
  height: number
}

export type CaseVideo = {
  id: string
  title: string
  shortTitle: string
  src: string
  poster: string
  width: number
  height: number
}

export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  discipline: string
  platform: string
  niche?: string
  document: CaseBlock[]
  figmaUrl?: string
  cover?: string
  coverDimensions?: { width: number; height: number }
  images?: Partial<Record<'context' | 'structure' | 'concept' | 'system' | 'final', CaseImage[]>>
  videos?: CaseVideo[]
}

export const projects: Project[] = [
  {
    id: 'concepts',
    title: 'Концепты',
    description: 'В свободное время исследую визуальные подходы и анимацию интерфейсов в собственных концептах',
    tags: ['UI', 'Motion'],
    discipline: 'UX/UI-дизайнер',
    platform: 'Web · Mobile',
    document: [],
    cover: '/cases/concept/Обложка.png?v=6bad2b766e49',
    coverDimensions: { width: 4584, height: 3438 },
    videos: [
      { id: 'messenger', title: 'Концепт мобильного мессенджера', shortTitle: 'Мессенджер', src: '/cases/concept/1.mp4', poster: '/cases/concept/poster-1.webp', width: 2800, height: 2100 },
      { id: 'weather', title: 'Концепт приложения с прогнозом погоды', shortTitle: 'Погода', src: '/cases/concept/2.mp4', poster: '/cases/concept/poster-2.webp', width: 2800, height: 2100 },
      { id: 'crypto-wallet', title: 'Концепт мобильного криптокошелька', shortTitle: 'Криптокошелёк', src: '/cases/concept/3.mp4', poster: '/cases/concept/poster-3.webp', width: 2800, height: 2100 },
      { id: 'sales-analytics', title: 'Концепт панели аналитики продаж', shortTitle: 'Аналитика', src: '/cases/concept/4.mp4', poster: '/cases/concept/poster-4.webp', width: 2800, height: 2100 },
      { id: 'energy', title: 'Концепт приложения для отслеживания расхода энергии', shortTitle: 'Энергия', src: '/cases/concept/5.mp4', poster: '/cases/concept/poster-5.webp', width: 2800, height: 2100 },
      { id: 'jobs', title: 'Концепт мобильного сервиса поиска работы', shortTitle: 'Поиск работы', src: '/cases/concept/6.mp4', poster: '/cases/concept/poster-6.webp', width: 2800, height: 2100 },
    ],
  },
  {
    id: 'partner-portal',
    title: 'Partner Portal — проверка ордеров на 25% быстрее',
    description:
      'Собрала в кабинете показатели бизнеса, проверку ордеров и диагностику интеграции',
    tags: ['B2B', 'FinTech / Crypto'],
    discipline: 'Product дизайнер',
    platform: 'Web · Mobile',
    niche: 'FinTech / Crypto',
    document: caseDocuments['partner-portal'],
    cover: '/cases/partner-portal/Обложка.png?v=b4b1f39522d9',
    coverDimensions: caseCoverDimensions('partner-portal'),
    images: caseImages['partner-portal'],
  },
  {
    id: 'skywallet',
    title: 'SkyWallet — ошибки переводов −30%',
    description:
      'Спроектировала безопасные сценарии хранения и перевода активов с понятным разделением личного кошелька и биржевого счёта.',
    tags: ['B2C', 'FinTech / Crypto'],
    discipline: 'Product дизайнер',
    platform: 'Mobile app',
    niche: 'Fintech / Crypto',
    document: caseDocuments.skywallet,
    cover: '/cases/skywallet/Обложка.png?v=1cf91a9bd5c6',
    coverDimensions: caseCoverDimensions('skywallet'),
    images: caseImages.skywallet,
  },
  {
    id: 'astoria',
    title: 'Астория — +12% к заявкам',
    description:
      'Спроектировала адаптивный сервис для поиска, сравнения и оформления туров. Собственный интерфейс на базе API Турвизора позволил выйти за рамки готовых виджетов и заложить основу онлайн-турагентства',
    tags: ['B2C', 'TravelTech'],
    discipline: 'UX/UI-дизайнер',
    platform: 'Web · Mobile',
    niche: 'TravelTech',
    document: caseDocuments.astoria,
    cover: '/cases/astoria/Обложка.png?v=7bdf0731c28e',
    coverDimensions: caseCoverDimensions('astoria'),
    images: caseImages.astoria,
  },
  {
    id: 'womens-health',
    title: 'HealthTech: +25% Activation Rate',
    description:
      'Определила архитектуру и границы MVP для платформы с обучением, консультациями и личным кабинетом.',
    tags: ['B2C', 'FemTech / HealthTech'],
    discipline: 'UX/UI-дизайнер',
    platform: 'mobile app · landing',
    niche: 'FemTech / HealthTech',
    document: caseDocuments['womens-health'],
    cover: '/cases/womens-health/Обложка.png?v=a1b38781be77',
    coverDimensions: caseCoverDimensions('womens-health'),
    images: caseImages['womens-health'],
  },
  {
    id: 'atlyx',
    title: 'Atlyx — travel superapp с retention +10%',
    description:
      'Связала планирование поездок, перелёты, сохранённые места и личную статистику в мобильном приложении',
    tags: ['B2C', 'TravelTech'],
    discipline: 'UX/UI-дизайнер',
    platform: 'Mobile app',
    niche: 'TravelTech',
    document: caseDocuments.atlyx,
    cover: '/cases/atlyx/Обложка.png?v=963cfe6f81c1',
    coverDimensions: caseCoverDimensions('atlyx'),
    images: caseImages.atlyx,
  },
].map((project) => ({
  ...project,
  cover: project.cover ? publicAsset(project.cover) : undefined,
  videos: project.videos?.map((video) => ({
    ...video,
    src: publicAsset(video.src),
    poster: publicAsset(video.poster),
  })),
}))

export const caseSections = [
  { id: 'context', label: 'Контекст' },
  { id: 'structure', label: 'Стратегия' },
  { id: 'concept', label: 'Решение' },
  { id: 'system', label: 'Система' },
  { id: 'final', label: 'Результат' },
]
````

## File: src/sections/Work.tsx
````typescript
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/portfolio'
import { Fragment } from 'react'
import { ProfileAbout } from '../components/ProfileSidebar'
export function Work() {
  return <section id="work" aria-label="Избранные работы">
    <h2 className="sr-only">Избранные работы</h2>
    <div className="project-list">
      {projects.map((project, index) => <Fragment key={project.id}>
        <ProjectCard project={project} index={index} />
        {project.id === 'concepts' && <ProfileAbout />}
      </Fragment>)}
    </div>
  </section>
}
````

## File: src/styles/globals.css
````css
@font-face {
  font-family: Onest;
  src: url('/fonts/onest-latin-variable.woff2') format('woff2');
  font-weight: 400 600;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: Onest;
  src: url('/fonts/onest-cyrillic-variable.woff2') format('woff2');
  font-weight: 400 600;
  font-style: normal;
  font-display: swap;
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
html {
  min-width: 320px;
  background: var(--color-page);
  scroll-behavior: smooth;
  scrollbar-gutter: stable;
  scroll-padding-top: calc(var(--header-height) + 16px);
}
body {
  color: var(--color-text);
  font-family: var(--font-sans);
  font-size: var(--type-body);
  line-height: var(--leading-body);
  -webkit-font-smoothing: antialiased;
}
#root {
  display: flow-root;
}
a {
  color: inherit;
  text-decoration: none;
}
button {
  cursor: pointer;
}
button,
a {
  touch-action: manipulation;
  -webkit-tap-highlight-color: rgb(0 0 0 / 8%);
}
:focus-visible {
  outline: 2px solid var(--color-text);
  outline-offset: 4px;
}
main:focus {
  outline: none;
}
h1,
h2,
h3 {
  font-weight: 500;
  letter-spacing: -0.035em;
  line-height: 1.22;
  text-wrap: pretty;
}
[id] {
  scroll-margin-top: var(--space-4);
}
.icon {
  flex: none;
  width: var(--icon-size);
  height: var(--icon-size);
}
.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex: none;
  gap: var(--space-2);
  background: var(--color-action);
  color: var(--color-on-dark);
  min-height: var(--action-height);
  padding: var(--action-padding-y) var(--action-padding-x);
  border-radius: var(--action-radius);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  white-space: nowrap;
  transition: background-color var(--duration-feedback) var(--ease-out);
}
.button:active {
  background: var(--color-action-pressed);
}
.skip-link {
  position: fixed;
  left: var(--space-5);
  top: var(--space-3);
  z-index: 20;
  background: var(--color-action);
  color: white;
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-control);
  transform: translateY(-180%);
}
.skip-link:focus {
  transform: translateY(0);
}
/* One vertical editorial page: wide projects, focused reading sections. */
.home-shell {
  width: min(calc(100% - 48px), 1440px);
  margin: 0 auto;
  padding-bottom: 24px;
}
.portfolio-content, .case-main {
  min-width: 0;
}
.profile-hero {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr);
  gap: 24px;
  min-height: 580px;
  padding: 0;
  margin-top: 32px;
  color: var(--color-text);
}
.profile-avatar {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow: hidden;
  border-radius: var(--radius-media);
  background: var(--color-avatar);
}
.profile-avatar img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 31%;
}
.hero-copy {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
  padding: 24px 0;
  background: transparent;
}
.hero-identity {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 16px;
  color: var(--color-muted);
}
.hero-copy .profile-role {
  margin: 64px 0 48px;
  font-size: clamp(54px, 5.6vw, 88px);
  font-weight: 400;
  letter-spacing: -.055em;
  line-height: 1.04;
}
.profile-role span {
  display: block;
}
.hero-visual {
  position: relative;
  min-width: 0;
}
.profile-hero :focus-visible {
  outline-color: var(--color-text);
}
.button--secondary {
  background: var(--color-white);
  color: var(--color-text);
}
.contact-links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.contact-links a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: var(--action-height);
  padding: var(--action-padding-y) 16px;
  border-radius: var(--action-radius);
  background: var(--color-white);
  color: var(--color-text);
  font-size: 14px;
  transition: color var(--duration-feedback) ease, background-color var(--duration-feedback) ease;
}
.contact-links .icon {
  width: 20px; height: 20px;
}
.social-icon-links {
  display: flex;
  align-items: center;
  isolation: isolate;
}
.social-icon-link {
  position: relative;
  z-index: 1;
  display: inline-flex;
  flex: 0 0 var(--action-height);
  align-items: center;
  justify-content: center;
  width: var(--action-height);
  height: var(--action-height);
  border: 2px solid var(--social-group-surface, var(--color-page));
  border-radius: 50%;
  color: var(--color-white);
}
.social-icon-link + .social-icon-link { margin-inline-start: calc(-1 * var(--space-3)); }
.social-icon-link:focus-visible { z-index: 2; }
.social-icon-link--telegram { background: var(--color-social-telegram); }
.social-icon-link--linkedin { background: var(--color-social-linkedin); }
.social-icon-link--email { background: var(--color-social-email); }
.social-icon-link--hh { background: #ff0002; }
.social-icon-link--hh img { width: 100%; height: 100%; border-radius: inherit; }
.social-icon-link .icon { width: 24px; height: 24px; }
@media (hover: hover) and (pointer: fine) {
  .social-icon-link:hover { z-index: 2; }
}
.hero-copy .contact-links {
  justify-content: flex-start;
  color: var(--color-muted);
  margin-top: 16px;
}
.profile-details {
  display: grid;
  gap: 48px;
  margin: 0 auto;
}
.profile-details > section > :is(h1, h2),
.profile-details > section > .section-heading > :is(h1, h2) {
  font-size: var(--type-section);
  font-weight: 400;
  line-height: 1.08;
}
.section-heading {
  min-width: 0;
}
.section-heading :is(h1, h2) {
  margin: 0;
}
.education-section, .tools-section {
  display: grid;
  grid-template-columns: minmax(0, .9fr) minmax(0, 1.4fr);
  gap: 64px;
  padding: 56px 40px;
  background: transparent;
}
.tools-strip {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 32px 24px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.tool-tile {
  height: 48px;
  display: grid;
  place-items: center;
}
.tool-logo-reveal {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
}
.tool-tile img {
  width: 36px;
  height: 36px;
  max-width: 100%;
  object-fit: contain;
  object-position: center;
}
.tool-tile--figma img {
  width: 26px;
}
.tool-tile--principle img {
  width: 40px;
  height: 40px;
}
.tool-tile--protopie img {
  width: 48px;
  height: 32px;
}
.contacts-section {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(0, .7fr);
  align-items: center;
  gap: 32px;
  padding: 80px 40px 32px;
  margin-top: var(--section-gap);
  background: transparent;
  color: var(--color-text);
}
.contacts-section h2 {
  font-size: clamp(56px, 6vw, 88px);
  font-weight: 400;
  line-height: 1.04;
  margin: 0 0 32px;
}
.contacts-section :focus-visible {
  outline-color: var(--color-text);
}
.contacts-section .contact-links {
  justify-content: flex-start;
  color: var(--color-muted);
  margin-top: 24px;
}
.contacts-section .site-footer {
  grid-column: 1 / -1;
  margin: 40px 0 0;
  color: var(--color-muted);
}
.contacts-section .site-footer > a:hover {
  color: var(--color-text);
}
@media (max-width: 760px) {
.contacts-section .site-footer {
    margin-top: 24px;
    flex-wrap: wrap;
    gap: 4px 16px;
}
}
.text-link {
  text-decoration: none;
  transition: color 180ms ease;
}
@media (hover: hover) and (pointer: fine) {
  .contact-links a:hover {
    color: var(--color-text);
    background: var(--color-accent-soft-hover);
  }
  .button.button--secondary:hover {
    background: var(--color-accent-soft-hover);
    color: var(--color-text);
  }
}

.experience {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 64px;
  padding: 56px 40px;
  background: transparent;
  color: var(--color-text);
}
.experience :focus-visible {
  outline-color: var(--color-text);
}


.resume-entries {
  list-style: none;
  padding: 0;
  margin: 0;
}
.resume-entries > li {
  position: relative;
  min-width: 0;
  padding: 64px 0;
}
.resume-entries > li:first-child {
  padding-top: 0;
}
.resume-entries > li:last-child {
  padding-bottom: 0;
}
.meta-cross {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-inline: 7px;
  color: var(--color-meta-separator);
  vertical-align: -1px;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
.resume-entry-intro {
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr) auto;
  align-items: start;
  gap: var(--space-3);
}
.resume-entry-details {
  min-width: 0;
}
.company-logo {
  display: block;
  width: 48px;
  height: 48px;
  background: var(--color-tile);
  border-radius: var(--radius-logo);
  overflow: hidden;
}
.company-logo img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.resume-entry-details :is(h2, h3) {
  font-size: 26px;
  font-weight: 500;
  letter-spacing: -0.015em;
  line-height: 1.45;
}
.certificate-link {
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  margin: -6px -6px -6px 0;
  color: var(--color-text);
}
.certificate-link-visual {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 12px;
  background: var(--color-surface);
  transition: background-color var(--duration-feedback) var(--ease-standard);
}
.certificate-link .icon {
  width: 16px;
  height: 16px;
}
.certificate-link:hover .certificate-link-visual,
.certificate-link:focus-visible .certificate-link-visual {
  background: var(--color-tile);
}
.resume-entries p {
  margin-top: 6px;
  font-size: 18px;
  line-height: 1.5;
}
.resume-entry-company {
  color: var(--color-text);
}
.resume-entries .resume-entry-period {
  color: var(--color-muted);
  font-size: 14px;
}
.resume-entries .resume-entry-summary {
  margin-top: var(--space-2);
  color: var(--color-muted);
  font-size: 16px;
}
.company-logo--contented img {
  transform: scale(1.3);
}
.resume-projects {
  display: grid;
  min-width: 0;
  gap: 32px;
  margin-top: 40px;
  margin-left: 60px;
}
@media (min-width: 1101px) {
  .experience .resume-entries > li {
    display: grid;
    grid-template-columns: minmax(0, .9fr) minmax(0, 1.4fr);
    align-items: start;
    gap: 64px;
  }
  .experience .resume-projects {
    margin: 0;
  }
}
.resume-project {
  min-width: 0;
}
.resume-project .resume-project-title {
  font-size: 20px;
  font-weight: 500;
  line-height: 1.4;
}
.resume-project .resume-project-topic {
  margin-top: 20px;
  margin-bottom: 0;
  font-size: 16px;
  font-weight: 500;
  color: var(--color-text);
}
.resume-project p,
.resume-project li {
  font-size: 16px;
  line-height: 1.5;
  color: var(--color-muted);
}
.resume-project ul {
  margin-top: var(--space-2);
}
.resume-project .resume-project-topic + p,
.resume-project .resume-project-topic + ul {
  margin-top: var(--space-2);
}
.resume-project li + li {
  margin-top: var(--space-1);
}
.project-list {
  display: grid;
  gap: 48px;
}
#work {
  margin-top: var(--section-gap);
}
.project-card {
  min-width: 0;
}
.project-link {
  min-width: 0;
}
.project-labels .chip {
  background: transparent;
  padding: 0;
  min-height: 0;
  border-radius: 0;
  color: var(--color-muted);
  font-size: 12px;
}
.project-labels {
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  gap: 16px;
}
.case-cursor-surface {
  position: relative;
  min-width: 0;
  overflow: clip;
  border-radius: var(--radius-media);
}
.case-cursor {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  pointer-events: none;
}
.case-cursor > span {
  display: inline-flex;
  align-items: center;
  min-height: var(--action-height);
  padding: 10px 16px;
  border-radius: var(--action-radius);
  background: var(--color-surface);
  color: var(--color-text);
  font-size: 14px;
  white-space: nowrap;
}
@media (min-width: 1101px) and (hover: hover) and (pointer: fine) {
  .case-cursor-surface[data-cursor='true'], .case-cursor-surface[data-cursor='true'] * { cursor: none; }
}
@media (max-width: 1100px), (hover: none), (pointer: coarse) {
  .case-cursor { display: none; }
}
.project-artwork {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: var(--radius-media);
  background: var(--color-surface);
}
.project-artwork--image > img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
  transition: transform 280ms var(--ease-out);
}
.project-artwork--pending {
  display: grid;
  place-items: center;
  aspect-ratio: 1270 / 741;
  font-size: 40px;
}


.case-facts {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  margin: 0;
}
.case-facts > div {
  min-width: 0;
  padding: 24px;
  border-radius: var(--radius-content-card);
  background: var(--color-white);
}
.case-facts:not(.case-results) > div { min-height: 96px; }
.case-facts dt {
  margin-bottom: var(--space-2);
  color: var(--color-muted);
  font-size: 12px;
  line-height: 1.35;
}
.case-facts dd {
  margin: 0;
  color: var(--color-text);
  font-size: var(--type-body);
  font-weight: 500;
  line-height: 1.4;
  overflow-wrap: normal;
  word-break: normal;
}
.case-results {
  min-width: 0;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}
.case-metric-grid > :where(div, li) {
  padding: 32px;
  border-radius: 32px;
  background: var(--color-white);
}
/* An unmatched last result keeps its full reading width. */
@media (min-width: 761px) {
  .case-metric-grid > :last-child:nth-child(odd) {
    grid-column: 1 / -1;
  }
}
.case-results dt {
  color: var(--color-text);
  font-size: 36px;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -.02em;
}
.case-results dd {
  font-size: var(--type-body);
  font-weight: 400;
  line-height: 1.5;
}

/* Shared segmented geometry: small inside corners, continuous rounded ends. */
.segmented-group {
  display: flex;
  gap: var(--space-1);
}
.segmented-group > * {
  border-radius: var(--radius-inner);
}
.segmented-group > :first-child {
  border-top-left-radius: var(--radius-group);
  border-bottom-left-radius: var(--radius-group);
}
.segmented-group > :last-child {
  border-top-right-radius: var(--radius-group);
  border-bottom-right-radius: var(--radius-group);
}
.project-tags {
  display: flex;
  grid-column: 1 / -1;
  gap: var(--space-1);
  align-items: center;
  flex-wrap: wrap;
}
.chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--color-surface);
  padding: 0 var(--space-3);
  min-height: 32px;
  border-radius: 8px;
  font-size: 12px;
  line-height: 1.4;
  white-space: nowrap;
}
time.chip {
  font-variant-numeric: tabular-nums;
}

.icon-motion {
  display: inline-flex;
  flex: none;
  transition: transform var(--duration-feedback) var(--ease-standard);
}

/* Cases occupy the entire content grid; reading widths remain deliberate. */
.case-shell {
  display: grid;
  grid-template-columns: var(--case-navigation-width) minmax(0, 1fr);
  align-items: start;
  gap: var(--case-grid-gap);
  width: min(calc(100% - 48px), calc(var(--case-navigation-width) + var(--case-grid-gap) + var(--case-content-width)));
  margin: 24px auto 0;
}
.case-main {
  min-width: 0;
  max-width: var(--case-content-width);
  padding-bottom: var(--section-padding);
}
.case-main > * {
  width: min(100%, var(--case-reading-width));
  margin-inline: 0;
}
.case-main > .case-content {
  width: 100%;
}
.case-overview > :not(.case-showcase),
.case-document-section > :is(h2, .case-text-card, .case-standalone-heading, .case-results) {
  width: min(100%, var(--case-reading-width));
  margin-inline: 0;
}
.case-overview > .case-facts { width: 100%; }
.case-navigation {
  position: sticky;
  top: calc(var(--header-height) + 24px);
  align-self: start;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  max-height: calc(100dvh - var(--header-height) - 48px);
  overflow-y: auto;
  padding: 0 4px 4px;
}
.case-navigation a {
  flex: none;
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  white-space: normal;
  font-size: var(--type-button);
  font-weight: var(--weight-medium);
}
.case-section-links {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
}
.case-section-links a {
  position: relative;
  justify-content: flex-start;
  min-height: 44px;
  padding: 10px 8px;
  border-radius: var(--radius-small);
  color: var(--color-muted);
  line-height: 1.45;
  font-weight: var(--weight-regular);
  transition: color var(--duration-feedback) var(--ease-out);
}
.case-section-links a[aria-current='location'] {
  color: var(--color-text);
  font-weight: var(--weight-medium);
}
.section-link-label,
.mobile-menu-link-label {
  position: relative;
  z-index: 1;
}
.case-section-links a[aria-current='location'] .section-link-label {
  z-index: 3;
  color: var(--color-text);
}
.case-section-links a:active {
  color: var(--color-action-pressed);
}
@media (hover: hover) and (pointer: fine) {
  .case-section-links a:not([aria-current='location']):hover {
    color: var(--color-text);
  }
}
.case-navigation a:focus-visible {
  outline-offset: -2px;
}
.case-header {
  position: relative;
  padding: 48px 0 32px;
  margin-top: 0;
  background: transparent;
  color: var(--color-text);
}
.case-main > .case-header {
  width: 100%;
}
.case-header :focus-visible {
  outline-color: var(--color-text);
}
.case-meta {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: var(--space-4);
}
.figma-button {
  gap: var(--space-2);
}
.case-header h1 {
  max-width: min(940px, 100%);
  font-size: clamp(44px, 4.4vw, 64px);
  font-weight: 400;
  line-height: 1.2;
  margin-top: 0;
  text-wrap: wrap;
}
.case-meta + h1 {
  margin-top: var(--space-6);
}
.case-header .case-deck {
  margin-top: 24px;
  color: var(--color-muted);
  font-size: 18px;
}
.concept-gallery {
  display: grid;
  gap: var(--space-6);
  margin-top: var(--space-8);
}
.concept-video-item {
  min-width: 0;
}
.concept-video-item video {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 3;
  object-fit: contain;
}
.visual-caption {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 12px;
  color: var(--color-text);
  font-size: 16px;
  line-height: var(--leading-body);
}
.visual-caption-text {
  flex: 1;
  min-width: 0;
}
.concept-video-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  min-width: 44px;
  height: 44px;
  min-height: 44px;
  padding: 0;
  border: 0;
  border-radius: 14px;
  background: transparent;
  color: var(--color-text);
  cursor: pointer;
}
.concept-video-action-visual {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 14px;
  background: var(--color-tile);
  transition: background-color var(--duration-feedback) var(--ease-standard), transform var(--duration-feedback) var(--ease-standard);
}
.concept-video-action .icon {
  display: block;
  width: 19px;
  height: 19px;
  transform: none;
}
.concept-video-action:focus-visible {
  outline: 2px solid var(--color-text);
  outline-offset: 1px;
}
.concept-video-action:active .concept-video-action-visual {
  background: var(--color-border);
  transform: scale(.96);
}
@media (hover: hover) and (pointer: fine) {
  .concept-video-action:hover .concept-video-action-visual {
    background: var(--color-border);
  }
}
@media (prefers-reduced-motion: reduce) {
  .concept-video-action-visual {
    transition: none;
  }
  .concept-video-action:active .concept-video-action-visual {
    transform: none;
  }
}
.version-switch {
  --radius-inner: var(--action-radius);
  --radius-group: var(--action-radius);
  gap: 8px;
  display: flex;
  margin: var(--space-8) 0 var(--space-6);
}
.version-switch button {
  flex: none;
  border: 1px solid transparent;
  background: var(--color-surface);
  color: var(--color-muted);
  min-height: var(--action-height);
  padding: var(--action-padding-y) calc(var(--action-padding-x) + 8px);
  font-size: 13px;
  font-weight: 500;
  line-height: 1.4;
  transition:
    background-color var(--duration-content) var(--ease-standard),
    color var(--duration-content) var(--ease-standard),
    border-color var(--duration-content) var(--ease-standard),
    transform 140ms var(--ease-emphasized);
}
.version-switch button[aria-pressed='true'] {
  background: var(--color-action);
  color: var(--color-on-dark);
}
.version-switch button:active {
  border-color: var(--color-muted);
}
.version-switch button:focus-visible {
  outline-offset: 3px;
}
.case-overview {
  display: grid;
  gap: 28px;
}
.case-showcase {
  margin: 0;
}
.case-deck {
  font-size: 20px;
  line-height: var(--leading-body);
}
.case-content {
  display: grid;
  gap: var(--section-gap);
}
.case-document-section > h2 {
  margin-block: 0;
  color: var(--color-text);
  font-size: var(--type-section);
  font-weight: 400;
  line-height: 1.15;
  letter-spacing: -0.025em;
}
.case-text-card h3,
.case-standalone-heading h3 {
  margin: 0 0 8px;
  font-size: 28px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.025em;
  color: var(--color-text);
}
.case-text-card h4,
.case-standalone-heading h4 {
  margin: 0 0 8px;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.3;
  color: var(--color-text);
}
.case-text-card > :is(h3, h4):not(:first-child),
.case-standalone-heading > :is(h3, h4):not(:first-child) {
  margin-top: 24px;
}
.case-text-card > :is(h3, h4) + :is(ul, ol) {
  margin-top: 12px;
}
.case-standalone-heading > :last-child {
  margin-bottom: 0;
}
.case-text-card .case-outcome-label {
  margin-bottom: 8px;
}
.case-text-card .case-outcome-label + p,
.case-text-card .case-outcome-label + :is(ul, ol) {
  margin-top: 0;
}
.case-text-card p + :is(ul, ol) {
  margin-top: 12px;
}
.case-text-card :is(ul, ol) + p {
  margin-top: 16px;
}
.case-text-card ul + ul {
  margin-top: 8px;
}
.case-text-card li + li {
  margin-top: 8px;
}
.case-image-gallery {
  display: grid;
  gap: var(--case-group-gap);
  margin: 0;
}

/* Case diagrams are placed beside the related argument, while image galleries keep their order. */
.case-visual {
  min-width: 0;
  margin: 0;
}
.case-visual-heading {
  display: flex;
  align-items: center;
  gap: 12px;
}
.case-visual-index.arrow-icon {
  flex: none;
  width: 24px;
  height: 24px;
  color: var(--color-text);
}
.arrow-icon {
  display: inline-block;
  flex: none;
  width: 18px;
  height: 18px;
}
.arrow-icon-glyph {
  transition: transform 220ms var(--ease-out);
}
.arrow-icon--up-right .arrow-icon-glyph {
  transition: none;
}
.arrow-icon--left {
  transform: rotate(180deg);
}
.arrow-icon--up {
  transform: rotate(-90deg);
}
.arrow-icon--down {
  transform: rotate(90deg);
}
.arrow-icon--inline {
  width: 1em;
  height: 1em;
  margin-inline: .15em;
  vertical-align: -.13em;
}
@media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
  :is(a, button, .project-card):hover .arrow-icon:not(.arrow-icon--up-right) .arrow-icon-glyph {
    transform: translateX(3px);
  }
}
.case-visual figcaption {
  color: var(--color-text);
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -.025em;
  line-height: 1.2;
}
.case-visual-results {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 32px;
  margin: var(--space-4) 0 0;
  padding: 0;
  list-style: none;
}
.case-visual-results > li {
  display: grid;
  align-content: start;
  gap: 8px;
  min-width: 0;
  margin: 0;
}
.case-visual-results strong {
  color: var(--color-text);
  font-size: var(--type-card-title);
  font-weight: var(--weight-strong);
  line-height: 1.35;
}
.case-visual-results span {
  font-size: var(--type-body);
  line-height: var(--leading-body);
}
.case-visual-plain {
  display: grid;
  gap: 12px;
  margin: var(--space-4) 0 0;
  padding: 0;
}
.case-visual-plain > div {
  display: grid;
  grid-template-columns: minmax(120px, 28%) minmax(0, 1fr);
  gap: 16px;
}
.case-visual-plain dt {
  font-weight: 500;
}
.case-visual-plain dd {
  margin: 0;
}
.case-visual .case-visual-caption {
  max-width: none;
  margin-top: var(--space-4);
  color: var(--color-muted);
  font-size: 13px;
  line-height: 1.45;
}
.case-diagram {
  position: relative;
  min-width: 0;
  margin-top: var(--space-4);
  padding: var(--space-6);
  border-radius: var(--radius-content-card);
  background: var(--color-white);
  color: var(--color-text);
}
.case-diagram > :not(.case-diagram-wires) {
  position: relative;
  z-index: 1;
}
.case-diagram-wires {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: visible;
  pointer-events: none;
  color: var(--color-muted);
}
.case-visual--untitled .case-diagram {
  margin-top: 0;
}
.case-diagram-node {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: 0;
  min-height: 64px;
  padding: 12px 16px;
  border-radius: var(--radius-group);
  background: var(--color-surface);
  text-align: center;
}
.case-diagram-node--primary {
  background: var(--color-text);
  color: var(--color-page);
}
.case-diagram-node strong {
  font-size: var(--type-body);
  font-weight: var(--weight-strong);
  line-height: 1.35;
  overflow-wrap: normal;
  word-break: normal;
}
.case-diagram-node:has(small) {
  flex-direction: column;
  gap: 2px;
}
.case-diagram-node small {
  font-size: var(--type-note);
  line-height: 1.3;
  font-weight: var(--weight-regular);
}
.case-diagram-number {
  color: var(--color-muted);
  font-size: 12px;
  flex: none;
}
.case-diagram-node--primary .case-diagram-number {
  color: var(--color-tile);
}
.case-diagram-explanations {
  display: grid;
  gap: 0;
  margin: 24px 0 0;
  padding: 16px 0 0;
}
.case-diagram-explanations > div {
  display: grid;
  grid-template-columns: minmax(120px, 28%) minmax(0, 1fr);
  gap: 16px;
  padding: 8px 0;
}
.case-diagram-explanations dt {
  font-weight: 500;
  line-height: 1.45;
}
.case-diagram-explanations dd {
  margin: 0;
  line-height: 1.5;
}
.case-diagram-note {
  display: block;
  margin-top: 4px;
  color: var(--color-muted);
  font-size: 13px;
}
.case-diagram-service-map {
  display: grid;
  grid-template-columns: minmax(120px, 1.2fr) repeat(3, minmax(110px, 1fr));
  gap: 30px;
  align-items: center;
}
.case-diagram-entry-points {
  display: grid;
  gap: 12px;
}
.case-diagram-entry-points .case-diagram-node {
  min-height: 54px;
}
.case-diagram-filter {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 36px;
  align-items: center;
}
.case-diagram-filter-controls, .case-diagram-filter-results {
  min-width: 0;
  min-height: 230px;
  padding: 18px;
  border-radius: var(--radius-content-card);
  background: var(--color-surface);
}
.case-diagram-overline {
  display: block;
  margin-bottom: 10px;
  color: var(--color-muted);
  font-size: 13px;
  font-weight: 500;
}
.case-diagram-filter-pills, .case-diagram-filter-selected, .case-diagram-filter-expanded {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.case-diagram-filter-pills span, .case-diagram-filter-selected span, .case-diagram-filter-expanded span {
  padding: 6px 10px;
  border-radius: 8px;
  background: var(--color-white);
  font-size: 13px;
  line-height: 1.35;
}
.case-diagram-filter-pills .case-diagram-filter-active {
  background: var(--color-text);
  color: var(--color-page);
}
.case-diagram-filter-more {
  margin-top: 24px;
  padding-top: 12px;
}
.case-diagram-filter-expanded .case-diagram-setting-line {
  width: 28%;
  height: 12px;
  padding: 0;
  background: var(--color-tile);
}
.case-diagram-filter-expanded .case-diagram-setting-line:nth-child(2) {
  width: 42%;
}
.case-diagram-filter-expanded .case-diagram-setting-line:nth-child(3) {
  width: 22%;
}
.case-diagram-filter-selected-label {
  display: block;
  margin: 18px 0 8px;
  font-size: 13px;
  font-weight: 500;
}
.case-diagram-filter-selected span {
  background: var(--color-text);
  color: var(--color-page);
}
.case-diagram-filter-selected b {
  margin-left: 3px;
  font-weight: 400;
}
.case-diagram-result-lines {
  display: grid;
  gap: 8px;
  margin-top: 20px;
}
.case-diagram-result-lines i {
  display: block;
  height: 9px;
  border-radius: 5px;
  background: var(--color-tile);
}
.case-diagram-result-lines i:nth-child(2) {
  width: 76%;
}
.case-diagram-result-lines i:nth-child(3) {
  width: 88%;
}
.case-diagram-route {
  display: grid;
  gap: 34px;
  max-width: 520px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
}
.case-diagram-route > li, .case-diagram-branch-step {
  display: grid;
  justify-items: center;
}
.case-diagram-route .case-diagram-node {
  width: 100%;
}
.case-diagram-branch-lead {
  display: grid;
  gap: 34px;
  max-width: 520px;
  margin: 0 auto 34px;
}
.case-diagram-branch-step .case-diagram-node {
  width: 100%;
}
.case-diagram-decision {
  max-width: 520px;
  margin: 0 auto;
}
.case-diagram-branches {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  margin-top: 44px;
}
.case-diagram-branches--three {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.case-diagram-branches > div {
  display: grid;
  align-content: start;
  justify-items: center;
  min-width: 0;
  text-align: center;
}
.case-diagram-branches .case-diagram-node {
  width: 100%;
}
.case-diagram-branch-label {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 8px;
  background: var(--color-surface);
  font-size: 13px;
  font-weight: 500;
}
.case-diagram-branches strong {
  max-width: 260px;
  font-size: 16px;
  line-height: 1.4;
}
.case-diagram-branches p {
  max-width: 280px;
  margin: 8px 0 0;
  font-size: 14px;
  line-height: 1.45;
}
.case-diagram-branch-end {
  display: grid;
  justify-items: center;
  max-width: 520px;
  margin: 44px auto 0;
}
.case-diagram-branch-end .case-diagram-node {
  width: 100%;
}
.case-diagram-hub {
  display: grid;
  place-items: center;
  max-width: 280px;
  min-height: 76px;
  margin: 0 auto;
  padding: 16px;
  border-radius: 20px;
  background: var(--color-text);
  color: var(--color-page);
  text-align: center;
}
.case-diagram-hub strong {
  font-size: 18px;
  line-height: 1.3;
}
.case-diagram-hub small {
  display: block;
  margin-top: 4px;
  color: var(--color-tile);
  font-size: 12px;
  line-height: 1.4;
}
.case-diagram-architecture-end, .case-diagram-convergence {
  display: grid;
  justify-items: center;
}
.case-diagram-architecture-end {
  margin-top: 44px;
}
.case-diagram-architecture-end strong {
  min-width: 180px;
  padding: 12px 20px;
  border-radius: 16px;
  background: var(--color-surface);
  text-align: center;
}
.case-diagram-convergence-entries {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  width: 100%;
}
.case-diagram-convergence-entries .case-diagram-node {
  flex: 1 1 140px;
  max-width: 210px;
}
.case-diagram-convergence .case-diagram-hub {
  margin-top: 44px;
}
.case-diagram-hub-nodes {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin-top: 44px;
}
.case-diagram-hub-nodes .case-diagram-node {
  flex: 1 1 130px;
  max-width: 190px;
}
.case-diagram-paired {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 36px;
  align-items: center;
}
.case-diagram-paired .case-diagram-node {
  min-height: 92px;
}
.case-diagram-status-aside {
  display: grid;
  grid-template-columns: 150px minmax(0, 1fr);
  align-items: center;
  gap: 12px;
  margin-top: 28px;
  padding-top: 16px;
}
.case-diagram-status-aside > span {
  color: var(--color-muted);
  font-size: 13px;
}
.case-diagram-status-pairs {
  display: grid;
  gap: 14px;
}
.case-diagram-state-map {
  display: grid;
  grid-template-columns: minmax(140px, 27%) minmax(0, 1fr);
  gap: 28px;
  align-items: start;
}
.case-diagram-state-root {
  display: grid;
  gap: 4px;
  padding: 16px 18px;
  border-radius: 18px;
  background: var(--color-text);
  color: var(--color-page);
}
.case-diagram-state-root strong {
  font-size: 17px;
  line-height: 1.35;
}
.case-diagram-state-root span {
  color: #ddd;
  font-size: 12px;
  line-height: 1.4;
}
.case-diagram-state-rail {
  display: grid;
  gap: 12px;
}
.case-diagram-state-row {
  display: grid;
  grid-template-columns: minmax(130px, 36%) minmax(0, 1fr);
  gap: 16px;
  align-items: start;
  padding: 14px 16px;
  border-radius: var(--radius-group);
  background: var(--color-surface);
}
.case-diagram-state-row strong {
  font-size: 15px;
  line-height: 1.45;
}
.case-diagram-state-row span {
  display: block;
  font-size: 15px;
  line-height: 1.5;
}
.case-diagram-state-row small {
  display: block;
  margin-top: 5px;
  color: var(--color-muted);
  font-size: 13px;
  line-height: 1.45;
}
.case-diagram-entity-map {
  display: flex;
  align-items: stretch;
  gap: 32px;
}
.case-diagram-entity-group {
  display: flex;
  flex: 1 1 0;
  min-width: 0;
  align-items: center;
}
.case-diagram-entity-lane {
  display: grid;
  align-content: start;
  gap: 8px;
  width: 100%;
  min-height: 142px;
  padding: 14px;
  border-radius: 16px;
  background: var(--color-surface);
}
.case-diagram-entity-term {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 8px;
  align-items: baseline;
}
.case-diagram-entity-term strong {
  font-size: 15px;
  line-height: 1.35;
}
.case-diagram-entity-term span {
  color: var(--color-muted);
  font-size: 13px;
  line-height: 1.4;
}
.case-diagram-risk-heading, .case-diagram-risk-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 32px;
  align-items: center;
}
.case-diagram-risk-heading {
  padding: 0 0 8px;
  color: var(--color-muted);
  font-size: 13px;
}
.case-diagram-risk-row {
  min-height: 62px;
  margin-top: 12px;
}
.case-diagram-risk-row strong, .case-diagram-risk-row p {
  padding: 12px 16px;
  border-radius: var(--radius-group);
  background: var(--color-surface);
}
.case-diagram-risk-row strong {
  font-size: 15px;
  line-height: 1.4;
}
.case-diagram-risk-row p {
  margin: 0;
  font-size: 15px;
  line-height: 1.5;
}
.case-diagram-change-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 6px 36px;
  align-items: center;
  padding: 16px 0;
}
.case-diagram-change-row:first-child {
  padding-top: 0;
}
.case-diagram-change-row:last-child {
  padding-bottom: 0;
}
.case-diagram-change-row > span, .case-diagram-change-row > strong {
  padding: 12px 16px;
  border-radius: var(--radius-group);
  background: var(--color-surface);
}
.case-diagram-change-row > span {
  color: var(--color-muted);
  font-size: 16px;
  line-height: 1.4;
}
.case-diagram-change-row > strong {
  font-size: 17px;
  line-height: 1.4;
}
.case-diagram-change-row > p {
  grid-column: 2;
  margin: 0;
  font-size: 15px;
  line-height: 1.5;
}
@media (min-width: 761px) and (max-width: 900px) {
  .case-diagram-service-map, .case-diagram-filter, .case-diagram-paired {
    grid-template-columns: minmax(0, 1fr);
    gap: 36px;
  }
  .case-diagram-entry-points {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .case-diagram-hub-nodes, .case-diagram-convergence-entries {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    max-width: 420px;
    margin-inline: auto;
  }
  .case-diagram-hub-nodes .case-diagram-node, .case-diagram-convergence-entries .case-diagram-node {
    max-width: none;
  }
  .case-diagram-status-aside {
    grid-template-columns: minmax(0, 1fr);
  }
  .case-diagram-state-map {
    grid-template-columns: minmax(0, 1fr);
    gap: 22px;
  }
  .case-diagram-entity-map {
    flex-direction: column;
    gap: 32px;
  }
  .case-diagram-entity-lane {
    min-height: 0;
  }
}
.case-visual-table-wrap {
  min-width: 0;
  margin-top: var(--space-4);
  padding: var(--space-6);
  border-radius: var(--radius-content-card);
  background: var(--color-white);
  overflow-x: auto;
}
.case-visual--untitled .case-visual-results,
.case-visual--untitled .case-visual-plain,
.case-visual--untitled .case-visual-table-wrap {
  margin-top: 0;
}
.case-visual-table {
  width: 100%;
  margin: 0;
  border-collapse: collapse;
  table-layout: fixed;
  text-align: left;
}
.case-visual-table th,
.case-visual-table td {
  width: 33.333%;
  padding: var(--space-3) var(--space-4) var(--space-3) 0;
  vertical-align: top;
  overflow-wrap: normal;
  word-break: normal;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.45;
}
.case-visual-table thead th {
  color: var(--color-muted);
  font-size: var(--type-button);
  font-weight: var(--weight-medium);
}
.case-visual-table tbody th {
  color: var(--color-text);
  font-weight: 500;
}
@media (max-width: 760px) {
  .case-facts {
    grid-template-columns: 1fr;
  }
  .case-facts > div {
    padding: 20px;
  }
  .case-results > div {
    padding: 24px;
    border-radius: 24px;
  }
  .case-results dt {
    font-size: 32px;
  }
  .case-diagram {
    padding: 16px;
  }
  .case-diagram-node {
    min-height: 56px;
    padding: 10px 12px;
    border-radius: 14px;
  }
  .case-diagram-node strong {
    font-size: 14px;
  }
  .case-diagram-explanations > div {
    grid-template-columns: 1fr;
    gap: 2px;
  }
  .case-diagram-service-map, .case-diagram-filter, .case-diagram-paired {
    grid-template-columns: minmax(0, 1fr);
    gap: 36px;
    justify-items: stretch;
  }
  .case-diagram-entry-points {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .case-diagram-filter-controls, .case-diagram-filter-results {
    min-height: 0;
    padding: 14px;
  }
  .case-diagram-branches,
  .case-diagram-branches--three {
    grid-template-columns: minmax(0, 1fr);
    gap: 20px;
    max-width: 420px;
    margin-inline: auto;
    padding-left: 16px;
  }
  .case-diagram-branches > div {
    position: relative;
    grid-template-columns: 36px minmax(0, 1fr);
    column-gap: 8px;
    justify-items: stretch;
    text-align: left;
  }
  .case-diagram-branches > div > .case-diagram-branch-label {
    grid-column: 1;
    grid-row: 1;
    justify-self: start;
  }
  .case-diagram-branches > div > .case-diagram-node,
  .case-diagram-branches > div > strong,
  .case-diagram-branches > div > p {
    grid-column: 2;
  }
  .case-diagram-branches > div > .case-diagram-node,
  .case-diagram-branches > div > strong {
    grid-row: 1;
  }
  .case-diagram-branches > div > p {
    margin-top: 6px;
    font-size: 13px;
  }
  .case-diagram-hub-nodes, .case-diagram-convergence-entries {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    max-width: 420px;
    margin-inline: auto;
  }
  .case-diagram-hub-nodes .case-diagram-node, .case-diagram-convergence-entries .case-diagram-node {
    max-width: none;
  }
  .case-diagram-status-aside {
    grid-template-columns: minmax(0, 1fr);
  }
  .case-diagram-state-map {
    grid-template-columns: minmax(0, 1fr);
    gap: 20px;
  }
  .case-diagram-state-row {
    grid-template-columns: minmax(0, 1fr);
    gap: 2px;
  }
  .case-diagram-entity-map {
    flex-direction: column;
    gap: 32px;
  }
  .case-diagram-entity-lane {
    min-height: 0;
  }
  .case-diagram-risk-heading {
    display: none;
  }
  .case-diagram-risk-row {
    grid-template-columns: minmax(0, 1fr);
    gap: 32px;
    margin-top: 20px;
  }
  .case-diagram-change-row {
    grid-template-columns: minmax(0, 1fr);
    gap: 32px;
  }
  .case-diagram-change-row > p {
    grid-column: 1;
  }
  .case-visual-results {
    grid-template-columns: 1fr;
  }
  .case-metric-grid > :last-child {
    grid-column: auto;
  }
  .case-visual-plain > div {
    grid-template-columns: 1fr;
    gap: 2px;
  }
  .case-visual-table-wrap {
    padding: var(--space-4);
  }
  .case-visual-table,
  .case-visual-table tbody,
  .case-visual-table tr {
    display: block;
  }
  .case-visual-table thead {
    display: none;
  }
  .case-visual-table tr {
    padding: var(--space-3) 0;
  }
  .case-visual-table th,
  .case-visual-table td {
    display: block;
    width: 100%;
    padding: var(--space-1) 0;
    border: 0;
  }
  .case-visual-table td::before {
    content: attr(data-label);
    display: block;
    color: var(--color-muted);
    font-size: 11px;
    font-weight: 500;
  }
}
.case-image-frame {
  display: flex;
  flex-direction: column;
  min-width: 0;
  margin: 0;
}
.case-image-frame img {
  display: block;
  width: 100%;
  height: auto;
}
.case-image-frame a {
  display: block;
  border-radius: var(--radius-scene);
  line-height: 0;
  cursor: zoom-in;
}
.case-image-frame a:focus-visible {
  outline: 2px solid var(--color-text);
  outline-offset: -2px;
}
.case-showcase figcaption {
  padding: var(--space-4) var(--space-6) var(--space-5);
  font-size: 13px;
  color: var(--color-muted);
}
.context-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--frame-inset);
  align-items: stretch;
}
.context-column {
  display: grid;
  gap: var(--frame-inset);
  align-content: start;
  min-width: 0;
}
.case-text-card {
  min-width: 0;
}
.case-text-card p,
.case-text-card li {
  color: var(--color-text);
  font-size: var(--type-body);
  line-height: var(--leading-body);
}
.case-text-card p {
  min-width: 0;
}
.case-text-card p + p {
  margin-top: 16px;
}
.case-text-card :is(ul, ol) {
  margin: 0;
}
.step-list {
  list-style: none;
  padding: 0;
  margin: 0;
  counter-reset: step;
}
.step-list > li {
  position: relative;
  counter-increment: step;
  padding-left: 36px;
}
.step-list > li::before {
  content: counter(step);
  position: absolute;
  left: 0;
  top: calc((1lh - 24px) / 2);
  display: grid;
  place-items: center;
  width: 24px;
  height: 24px;
  border-radius: 8px;
  background: var(--color-surface);
  color: var(--color-text);
  font-size: 13px;
  font-weight: var(--weight-medium);
}
.star-list {
  --list-marker-size: 12px;
  --list-marker-gap: var(--space-2);
  list-style: none;
  padding-left: 0;
}
.star-list > li {
  position: relative;
  padding-left: calc(var(--list-marker-size) + var(--list-marker-gap));
}
.star-list > li::before {
  content: '';
  position: absolute;
  left: 0;
  top: calc((1lh - var(--list-marker-size)) / 2);
  width: var(--list-marker-size);
  height: var(--list-marker-size);
  background: currentColor;
  -webkit-mask: url('/icons/list-asterisk.svg') center / contain no-repeat;
  mask: url('/icons/list-asterisk.svg') center / contain no-repeat;
}
.case-section,
.concept-grid {
  margin-top: var(--space-8);
}
.case-section {
  display: flex;
  flex-direction: column;
  gap: var(--case-group-gap);
  margin-top: 0;
  padding: 0;
  background: transparent;
  border-radius: 0;
}
.process-flow {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  padding: 0;
  margin: var(--space-6) 0 0;
  list-style: none;
  gap: var(--space-2);
}
.process-flow li {
  position: relative;
  border-radius: var(--radius-control);
  background: var(--color-white);
  padding: var(--space-5);
  min-height: 132px;
}
.process-flow li + li {
  margin-top: 0;
}
.process-flow li > span {
  color: var(--color-muted);
  font-size: 13px;
  font-variant-numeric: tabular-nums;
}
.process-flow h3 {
  font-size: 16px;
  letter-spacing: -0.02em;
  line-height: 1.4;
  margin-top: var(--space-6);
  font-weight: 500;
}
.process-flow .flow-arrow {
  position: absolute;
  right: var(--space-5);
  top: var(--space-4);
  font-size: 20px;
}
.concept-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--frame-inset);
  padding: var(--frame-inset);
  border-radius: var(--radius-shell);
  background: var(--color-surface);
}
.type-specimen {
  border-radius: var(--radius-card);
  background: #eeebff;
  padding: var(--space-8);
  color: #4434c7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--space-3);
}
.type-specimen > span,
.type-specimen small {
  font-size: 13px;
}
.type-specimen strong {
  font-size: clamp(40px, 4vw, 56px);
  line-height: 1.1;
  font-weight: 500;
  letter-spacing: -0.04em;
}
.type-specimen p {
  font-size: 16px;
}
.type-specimen small {
  margin-top: var(--space-4);
}
.type-specimen--b2b-saas {
  color: #323d2d;
  background: #e9eddf;
}
.type-specimen--fintech {
  color: #263753;
  background: #e9edf4;
}
.system-preview {
  --sample-color: #5544ee;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: var(--space-6);
  margin-top: var(--space-6);
}
.system-preview--b2b-saas {
  --sample-color: #323d2d;
}
.system-preview--fintech {
  --sample-color: #263753;
}
.color-swatches {
  display: flex;
  gap: var(--space-2);
  grid-column: 1 / -1;
}
.color-swatches span {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-small);
  background: var(--sample-color);
}
.color-swatches span:nth-child(2) {
  background: var(--color-text);
}
.color-swatches span:nth-child(3) {
  background: #dcdce3;
}
.color-swatches span:nth-child(4) {
  background: white;
  border: 1px solid var(--color-border);
}
.component-samples {
  display: flex;
  gap: var(--space-2);
  flex-wrap: wrap;
  align-items: center;
  font-size: 14px;
}
.sample-primary,
.sample-secondary,
.sample-status {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 10px var(--space-3);
  border-radius: var(--radius-small);
}
.sample-primary {
  color: white;
  background: var(--sample-color);
}
.sample-secondary {
  background: white;
}
.sample-status {
  color: #2f704d;
  background: #e2efe7;
}
.sample-field > span {
  font-size: 13px;
  color: var(--color-muted);
}
.sample-field p {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: var(--space-1);
  background: white;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-small);
  padding: 10px var(--space-3);
  color: var(--color-text);
  font-size: 14px;
}
.text-link {
  display: inline-flex;
  gap: var(--space-2);
  align-items: center;
  min-height: 44px;
  font-size: 14px;
  font-weight: 500;
  margin-top: var(--space-4);
}
.case-thanks {
  display: grid;
  justify-items: center;
  gap: 0;
  width: 100%;
  margin: var(--space-6) auto 0;
  padding: 48px 24px;
  border-radius: var(--radius-surface-outer);
  background: var(--color-surface);
  color: var(--color-text);
  text-align: center;
}
.case-thanks img {
  display: block;
  width: 112px;
  height: auto;
}
.case-thanks h2 {
  margin-top: var(--space-2);
  font-size: 32px;
  font-weight: var(--weight-medium);
  line-height: 1.3;
}
.case-thanks p {
  width: 100%;
  margin-top: var(--space-2);
  color: var(--color-muted);
  font-size: 16px;
  line-height: var(--leading-body);
}
.case-thanks .case-thanks-eyebrow {
  margin-top: var(--space-3);
  width: auto;
  padding: 4px 10px;
  border-radius: var(--radius-control);
  background: var(--color-white);
  color: var(--color-text);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.04em;
}
.case-thanks strong {
  font-weight: 500;
}
.site-footer {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  margin: 48px 0 28px;
  padding-top: 0;
  color: var(--color-muted);
  font-size: 13px;
}
.site-footer-credit, .site-footer > a {
  display: flex;
  align-items: center;
  min-height: 44px;
  line-height: 1.4;
}
.site-footer > a {
  transition: color 180ms ease;
}
.site-footer > a:hover {
  color: var(--color-text);
}

.copyright-document a {
  text-decoration: underline;
  text-decoration-color: var(--color-border);
  text-underline-offset: 3px;
  transition: color var(--duration-feedback) var(--ease-standard), text-decoration-color var(--duration-feedback) var(--ease-standard);
}
.copyright-document a:hover {
  color: var(--color-text);
  text-decoration-color: currentColor;
}
.copyright-page {
  width: min(calc(100% - 40px), 720px);
  margin: clamp(40px, 6vw, 80px) auto var(--page-bottom);
}
.copyright-back {
  margin-bottom: var(--space-8);
}
.copyright-back .icon {
  width: 18px;
  height: 18px;
}
.copyright-document h1 {
  font-size: clamp(32px, 3.6vw, 52px);
  font-weight: 400;
  line-height: 1.18;
  margin-bottom: var(--space-8);
}
.copyright-document section + section {
  margin-top: var(--space-8);
}
.copyright-document h2 {
  margin-bottom: var(--space-2);
  color: var(--color-text);
  font-size: clamp(19px, 2vw, 22px);
  font-weight: 500;
  line-height: 1.3;
}
.copyright-document p {
  color: var(--color-text);
  font-size: var(--type-body);
  line-height: var(--leading-body);
}
.copyright-document p + p {
  margin-top: var(--space-4);
}
.copyright-document ul {
  margin: var(--space-3) 0 0;
  padding-left: var(--space-5);
  color: var(--color-text);
  font-size: var(--type-body);
  line-height: var(--leading-body);
}
.copyright-document li + li {
  margin-top: var(--space-2);
}
.copyright-contact {
  margin-top: var(--space-8);
  color: var(--color-text);
  font-size: 16px;
  font-style: normal;
  line-height: 1.6;
}
.copyright-document .copyright-updated {
  margin-top: var(--space-3);
  font-size: 14px;
}
.copyright-page .site-footer {
  margin-top: var(--space-8);
}
.not-found {
  max-width: 600px;
  margin: 100px auto;
  padding: var(--space-6);
}
.not-found h1 {
  font-size: 32px;
  margin-bottom: var(--space-4);
}
.not-found p {
  margin-bottom: var(--space-6);
  color: var(--color-muted);
}
/* Feedback does not affect layout or the preview's mask. */
@media (hover: hover) and (pointer: fine) {
  .button:hover {
    background: var(--color-action-hover);
  }
  .text-link:hover {
    color: var(--color-text);
    text-decoration-color: currentColor;
  }
  .project-link:hover h2 {
    color: var(--color-text);
  }
  .version-switch button:hover {
    background: var(--color-tile);
    color: var(--color-text);
  }
  .version-switch button[aria-pressed='true']:hover {
    background: var(--color-action-hover);
    color: var(--color-on-dark);
  }
}
@media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
  .project-link:hover .icon-motion:not(:has(.arrow-icon)) {
    transform: translate(2px, -2px);
  }
}

.case-media-stage {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 0;
  padding: 36px;
  border-radius: var(--radius-scene);
  background: var(--scene-muted);
  line-height: 0;
}
.case-media-stage > :is(img, video) {
  display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 0;
  background: transparent;
}
@media (max-width: 760px) {
  .case-media-stage {
    padding: 24px;
  }
}
/* Responsive composition adapts spacing without a second layout. */
@media (max-width: 1100px) {
  .hero-copy { padding: 32px; }
  .home-shell {
    width: calc(100% - 48px);
  }
.profile-hero {
    min-height: 500px;
    gap: 12px;
}
.hero-identity {
    font-size: 14px;
}
.hero-copy .profile-role {
    margin: 48px 0 40px;
    font-size: clamp(54px, 7.2vw, 78px);
}
.profile-avatar {
    width: 100%;
    border-radius: var(--radius-media);
}
  .experience, .education-section, .tools-section {
    grid-template-columns: minmax(0, 1fr);
    gap: 40px;
  }
  .profile-details > section > :is(h1, h2),
.profile-details > section > .section-heading > :is(h1, h2) {
    font-size: 44px;
  }
  .case-shell {
    display: block;
    width: calc(100% - 48px);
  }
  .case-navigation {
    display: none;
  }
.system-preview {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 760px) {
  .home-shell {
    width: calc(100% - 32px);
  }
  .hero-copy { padding: 32px 24px; }
.profile-hero {
    grid-template-columns: minmax(0, 1fr);
    gap: 12px;
    min-height: 0;
    margin-top: 12px;
}
.profile-avatar {
    width: 100%;
    height: 100%;
    border-radius: var(--radius-media);
}
.hero-visual {
    height: auto;
    aspect-ratio: 1;
}
.hero-copy .profile-role {
    margin: 40px 0 32px;
    font-size: clamp(44px, 12vw, 68px);
}
.profile-details {
    margin-top: 12px;
    gap: 32px;
}
  .profile-details > section > :is(h1, h2),
.profile-details > section > .section-heading > :is(h1, h2) {
    font-size: var(--type-section);
  }
  .experience, .education-section, .tools-section {
    grid-template-columns: minmax(0, 1fr);
    gap: 32px;
    padding: 32px 8px;
  }
  .tools-strip {
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 16px 8px;
  }
.contacts-section {
    grid-template-columns: minmax(0, 1fr);
    padding: 48px 8px 16px;
    margin-top: var(--section-gap);
}
.contacts-section h2 {
    font-size: 52px;
}
.project-list {
    gap: 32px;
}
.case-shell {
    width: calc(100% - 32px);
  }
.case-header {
    padding: 24px 0;
    margin-top: 0;
}
  .case-header h1 {
    font-size: 36px;
  }
  .case-meta {
    flex-wrap: wrap;
    gap: 16px;
  }
  .version-switch {
    margin: 24px 0 20px;
  }
  .version-switch button {
    font-size: 12px;
    padding-inline: 24px;
  }
  .context-grid, .concept-grid {
    grid-template-columns: 1fr;
  }
  .case-document-section > h2 {
    font-size: var(--type-section);
  }
  .case-text-card h3, .case-standalone-heading h3, .case-visual figcaption {
    font-size: 20px;
  }
  .case-thanks {
    padding: 32px 24px;
  }
  .case-thanks img {
    width: 100px;
  }
  .case-thanks h2 {
    font-size: 26px;
  }
  .resume-entries > li {
    padding: 24px 0;
  }
  .resume-projects {
    margin-left: 0;
  }
  .resume-entry-details :is(h2, h3) {
    font-size: 23px;
  }
  .resume-entries p {
    font-size: 16px;
  }
  .resume-entry-intro {
    gap: 12px;
  }
  .site-footer {
    gap: 12px;
    margin-top: 32px;
    font-size: 12px;
  }
}

.button {
  transition:
    background-color var(--duration-feedback) var(--ease-standard),
    color var(--duration-feedback) var(--ease-standard),
    transform 140ms var(--ease-emphasized);
}

/* Reveal motion is opt-in; inner hover surfaces retain their own transforms. */
[data-reveal] {
  --reveal-duration: var(--duration-reveal);
  --reveal-y: 20px;
  --reveal-scale: 1;
  transition:
    opacity var(--reveal-duration) var(--ease-emphasized),
    transform var(--reveal-duration) var(--ease-emphasized);
}
[data-reveal='intro'] {
  --reveal-duration: 800ms;
}
[data-reveal='avatar'] {
  --reveal-duration: 650ms;
  --reveal-y: 0px;
  --reveal-scale: .9;
  transform-origin: center;
}
[data-reveal='logo'] {
  --reveal-duration: 650ms;
  --reveal-y: 12px;
}
[data-reveal='accordion-row'] {
  --reveal-duration: 650ms;
  --reveal-y: 20px;
}
[data-reveal='card'],
[data-reveal='image'] {
  --reveal-duration: 650ms;
  --reveal-y: 24px;
  --reveal-scale: 1;
}
[data-reveal='case-cover'] {
  --reveal-duration: 650ms;
  --reveal-y: 36px;
  --reveal-scale: .98;
}
[data-reveal='fact'] {
  --reveal-y: 16px;
}
[data-reveal='result'] {
  --reveal-y: 28px;
}
[data-reveal='award-art'] {
  --reveal-duration: 650ms;
  --reveal-y: 0px;
  --reveal-scale: .9;
}
[data-reveal='award-text'] {
  --reveal-y: 16px;
}
[data-reveal='table'] {
  --reveal-duration: 750ms;
}
[data-reveal-state='pending'] {
  opacity: 0;
  transform: translate3d(0, var(--reveal-y), 0) scale(var(--reveal-scale));
  transition: none;
}
[data-reveal-state='visible'] {
  opacity: 1;
  transform: translate3d(0, 0, 0) scale(1);
  transition-delay: var(--reveal-delay, 0ms);
}
[data-reveal-instant='true'] {
  opacity: 1;
  transform: none;
  transition: none;
}
[data-reveal]:focus-within {
  opacity: 1;
  transform: none;
}
.reveal-observe-anchor {
  position: relative;
}
.reveal-trigger {
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 1px;
  pointer-events: none;
  opacity: 0;
}
@media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
  .button:hover .icon-motion:not(:has(.arrow-icon)),
  .text-link:hover .icon-motion:not(:has(.arrow-icon)) {
    transform: translate(1px, -2px);
  }
  .back-link:hover .icon-motion {
    transform: translateX(-2px);
  }
}
@media (max-width: 1024px) {
  .case-navigation {
    gap: var(--space-3);
  }
  .case-section-links {
    --tab-inset: 8px;
    gap: var(--space-1);
  }
  .case-section-links a {
    font-size: 13px;
  }
}
@media (prefers-reduced-motion: reduce) {
  [data-reveal-state] {
    opacity: 1;
    transform: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    transition: none !important;
    animation: none !important;
  }
}
@media (forced-colors: active) {
  .button,
  .chip,
  .version-switch button,
  .project-open {
    border: 1px solid ButtonText;
  }
  .version-switch button[aria-pressed='true'],
  .case-section-links a[aria-current='location'] {
    outline: 2px solid Highlight;
    outline-offset: -3px;
  }
}

/* One shared header; mobile navigation uses the same data. */
.site-header {
  display: flow-root;
  position: sticky;
  top: 0;
  z-index: 40;
  height: var(--header-height);
  background: transparent;
  pointer-events: none;
}
.desktop-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: var(--action-height);
  width: max-content;
  max-width: calc(100% - 48px);
  margin: max(24px, 5.5dvh) auto 0;
  padding: 0;
  background: transparent;
  pointer-events: auto;
}
.header-navigation, .header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
}
.header-navigation a {
  padding-inline: 12px;
  color: var(--color-on-dark);
}
.header-navigation {
  gap: 4px;
  padding: 0 20px;
  background: var(--color-dark);
  color: var(--color-on-dark);
  border-radius: var(--radius-navigation);
}
.header-navigation a, .header-actions > a {
  display: inline-flex;
  align-items: center;
  min-height: var(--action-height);
  transition: color 180ms ease;
  white-space: nowrap;
}
.header-navigation a[aria-current] {
  color: var(--color-on-dark);
  font-weight: var(--weight-medium);
}
.header-actions .button {
  font-size: 15px; min-height: var(--action-height);
  background: var(--color-white);
  color: var(--color-text);
}
@media (hover: hover) and (pointer: fine) {
  .header-actions .button:hover {
    background: var(--color-surface);
    color: var(--color-text);
  }
  .header-navigation a:hover { color: var(--color-muted-on-dark); }
}
.mobile-header-inner, .mobile-menu, .mobile-menu-backdrop {
  display: none;
}
@media (max-width: 1100px) {
.desktop-header {
    display: none;
}
  .mobile-header-inner {
    position: relative;
    z-index: 3;
    display: flex;
    align-items: center;
    gap: 8px;
    height: var(--header-height);
    padding-inline: 20px;
    background: var(--color-page);
    pointer-events: auto;
  }
  .mobile-brand {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    min-height: 44px;
    margin-right: auto;
    font-size: 13px;
    font-weight: 500;
  }
  .mobile-brand img {
    width: 32px;
    height: 32px;
    object-fit: cover;
    object-position: 50% 31%;
    border-radius: 9px;
  }
  .telegram-link--compact {
    width: 44px;
    height: 44px; min-height: 44px;
    padding: 0;
  }
  .telegram-link--compact span {
    display: none;
  }
  .mobile-header-inner .icon-action {
    width: 44px;
    min-width: 44px;
    height: 44px;
    min-height: 44px;
    padding: 0;
    background: var(--color-surface);
    color: var(--color-text);
  }
  .mobile-menu {
    display: grid;
    position: absolute;
    z-index: 2;
    top: 100%;
    left: 16px;
    right: 16px;
    max-width: 560px;
    max-height: calc(100dvh - var(--header-height) - 16px);
    margin-inline: auto;
    padding: 12px;
    border-radius: 20px;
    background: var(--color-white);
    overflow-y: auto;
    opacity: 0;
    transform: translateY(-8px) scale(.98);
    transform-origin: top right;
    visibility: hidden;
    pointer-events: none;
    transition: opacity 220ms var(--ease-out), transform 220ms var(--ease-out), visibility 0s linear 220ms;
  }
  .mobile-menu[data-open='true'] {
    opacity: 1;
    transform: translateY(0) scale(1);
    visibility: visible;
    pointer-events: auto;
    transition-delay: 0ms;
  }
  .mobile-menu-backdrop {
    display: block;
    position: fixed;
    z-index: 1;
    inset: var(--header-height) 0 0;
    background: rgb(25 25 25 / 16%);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: opacity 220ms var(--ease-out), visibility 0s linear 220ms;
  }
  .mobile-menu-backdrop[data-open='true'] {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transition-delay: 0ms;
  }
  .mobile-menu a {
    position: relative;
    display: flex;
    align-items: center;
    min-height: 48px;
    padding: 10px 14px;
    border-radius: 10px;
    font-size: 16px;
    opacity: 0;
    transform: translateY(6px);
    transition: color 180ms ease, opacity 180ms var(--ease-out), transform 180ms var(--ease-out);
  }
  .mobile-menu[data-open='true'] a {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0ms, calc(var(--menu-order, 0) * 30ms), calc(var(--menu-order, 0) * 30ms);
  }
  .mobile-menu-label {
    display: block;
    padding: 16px 14px 4px;
    color: var(--color-muted);
    font-size: 12px;
  }
  .mobile-menu a[aria-current] .mobile-menu-link-label {
    z-index: 3;
    color: var(--color-text);
    font-weight: var(--weight-medium);
  }
}
@media (max-width: 760px) {
  .mobile-header-inner {
    padding-inline: 16px;
  }
  .case-navigation {
    display: none;
  }
}

/* One tactile treatment for icon-only actions across cards and navigation. */
.icon-action {
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: 48px;
  min-width: 48px;
  height: var(--action-height);
  min-height: var(--action-height);
  padding: 0 14px;
  border: 0;
  border-radius: var(--action-radius);
  background: var(--color-surface);
  color: var(--color-text);
  line-height: 1;
  text-decoration: none;
  transition:
    background-color var(--duration-feedback) var(--ease-standard),
    transform 140ms var(--ease-emphasized);
}
.icon-action .icon {
  width: var(--icon-size);
  height: var(--icon-size);
}
.mobile-menu-toggle.icon-action .icon {
  width: 22px;
  height: 22px;
}
.icon-action:focus-visible {
  background: var(--color-tile);
  color: var(--color-text);
}
.icon-action:active {
  background: var(--color-tile);
  color: var(--color-text);
}
@media (prefers-reduced-motion: no-preference) {
  .button:active,
  .icon-action:active,
  .case-section-links a:active,
  .version-switch button:active {
    transform: scale(.98);
  }
}
@media (hover: hover) and (pointer: fine) {
  .icon-action:hover,
  .mobile-menu-toggle.icon-action:hover {
    background: var(--color-tile);
    color: var(--color-text);
  }
}

/* Shared finishing geometry: the first and last chip of every visible row form its ends. */
.segmented-group > .is-row-start {
  border-top-left-radius: var(--segment-outer-radius, 16px);
  border-bottom-left-radius: var(--segment-outer-radius, 16px);
}
.segmented-group > .is-row-end {
  border-top-right-radius: var(--segment-outer-radius, 16px);
  border-bottom-right-radius: var(--segment-outer-radius, 16px);
}

.icon-action .icon,
.icon-action svg {
  flex: none;
}
.mobile-menu-toggle.icon-action {
  padding: 0;
}

button, input, select, textarea, svg text, svg tspan {
  font-family: inherit;
}

/* Cases use the full editorial column; all section navigation lives in the header. */
.case-shell {
  display: block;
  width: min(calc(100% - 48px), var(--case-content-width));
  margin: 24px auto 0;
}
.case-reading-progress {
  position: fixed;
  inset: 0 auto auto 0;
  z-index: 100;
  width: 100%;
  height: 3px;
  background: white;
  mix-blend-mode: difference;
  transform-origin: left;
  pointer-events: none;
}
.case-header-controls {
  display: flex;
  align-items: center;
  gap: 12px;
  width: min(calc(100% - 48px), 1440px);
  margin: 24px auto 0;
  pointer-events: auto;
}
.case-main > .concept-gallery { width: 100%; }
.case-header-back {
  flex: none;
  background: var(--color-white);
  color: var(--color-text);
  padding-inline: 20px;
}
.case-header-anchors {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex: 1;
  min-width: 0;
  overflow-x: auto;
  scrollbar-width: none;
  padding-inline: 14px;
  border-radius: var(--radius-navigation);
  background: var(--color-dark);
}
.case-header-anchors a {
  display: flex;
  align-items: center;
  flex: none;
  min-height: var(--action-height);
  padding-inline: 9px;
  font-size: 13px;
  font-weight: var(--weight-regular);
  line-height: 1.35;
  white-space: nowrap;
  color: var(--color-muted-on-dark);
  transition: color var(--duration-feedback) var(--ease-out);
}
.case-header-anchors a[aria-current] {
  color: var(--color-white);
  font-weight: var(--weight-medium);
}
.case-header-anchors a:focus-visible { outline-color: var(--color-white); outline-offset: -4px; }
.case-header-controls > .telegram-link {
  flex: none;
  padding-inline: 20px;
  background: var(--color-white);
  color: var(--color-text);
}
.case-header-select { display: none; }
@media (hover: hover) and (pointer: fine) {
  .case-header-anchors a:hover { color: var(--color-white); }
  .case-header-controls > .button:hover { background: var(--color-surface); color: var(--color-text); }
}
@media (max-width: 1100px) {
  .case-header-controls { width: calc(100% - 32px); margin-top: 12px; gap: 8px; }
  .case-header-anchors { display: none; }
  .case-header-select {
    display: block;
    flex: 1;
    min-width: 0;
    max-width: 100%;
    min-height: 44px;
    padding: 10px 12px;
    border: 0;
    border-radius: var(--radius-control);
    font: inherit;
    font-size: 12px;
    background: var(--color-dark);
    color: var(--color-white);
  }
  .case-header-controls > .button { min-height: 44px; padding: 10px 14px; font-size: 13px; }
  .case-header-controls > .telegram-link { width: 44px; padding: 0; }
  .case-header-controls > .telegram-link span { display: none; }
  .case-header-controls > .telegram-link .icon { width: 20px; height: 20px; }
  .case-reading-progress { height: 2px; }
}
@media (max-width: 760px) {
  .case-shell { width: calc(100% - 32px); }
}
````

## File: src/styles/tokens.css
````css
:root {
  color-scheme: light;
  --color-page: #f3f3f5;
  --color-white: #fff;
  --header-height: max(104px, 13.3dvh);
  --color-surface: #e9e9ec;
  --color-tile: #ededf0;
  --color-dark: #1d1d1b;
  --color-on-dark: #f7f7f5;
  --color-muted-on-dark: #b7b7b2;
  --color-text: #202020;
  --color-muted: #666666;
  --color-meta-separator: #a0a0a0;
  --color-avatar: #d8d8d6;
  --color-border: #dcdcdf;
  --color-action: #202020;
  --color-action-hover: #3c3c3c;
  --color-action-pressed: #505050;
  --color-social-telegram: #229ed9;
  --color-social-linkedin: #0a66c2;
  --color-social-email: #505050;
  --color-accent: #c8f54a;
  --color-accent-soft: #e4e4e4;
  --color-accent-soft-hover: #dddddd;
  --font-sans: 'Onest', Arial, sans-serif;
  --type-body: 18px;
  --leading-body: 1.5;
  --type-caption: 16px;
  --type-note: 13px;
  --type-button: 14px;
  --type-section: 52px;
  --type-card-title: 18px;
  --weight-regular: 400;
  --weight-medium: 500;
  --weight-strong: 600;
  --radius-surface-outer: 48px;
  --radius-surface-inner: calc(var(--radius-surface-outer) - var(--surface-inset));
  --radius-content-card: 24px;
  --radius-media: 40px;
  --radius-scene: 56px;
  --scene-light: var(--color-white);
  --scene-muted: var(--color-surface);
  --canvas-scene-width: 61vw;
  --canvas-gutter: 5vw;
  --canvas-scene-height: 74dvh;
  --radius-logo: 18px;
  --section-padding: 56px;
  --section-gap: 120px;
  --case-content-width: 1120px;
  --case-reading-width: 800px;
  --case-navigation-width: 168px;
  --case-grid-gap: 48px;
  --case-group-gap: 32px;
  --diagram-stroke: 1.6;
  --diagram-port-gap: 8;
  --diagram-arrow-size: 7;
  --surface-inset: 8px;
  --icon-size: 18px;
  --action-height: 56px;
  --action-radius: 28px;
  --action-padding-y: 16px;
  --action-padding-x: 24px;
  --radius-navigation: 999px;
  --radius-inner: 4px;
  --radius-small: 8px;
  --radius-control: 16px;
  --radius-group: 16px;
  --radius-card: 16px;
  --radius-shell: 24px;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --frame-inset: 6px;
  --page-top: 24px;
  --page-bottom: 64px;
  --duration-feedback: 180ms;
  --duration-content: 260ms;
  --duration-image: 280ms;
  --duration-reveal: 750ms;
  --duration-accordion: 425ms;
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
  --ease-emphasized: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
}

@media (max-width: 1100px) {
  :root { --header-height: 68px; --radius-scene: 32px; }
}
@media (max-width: 760px) {
  :root {
    --radius-surface-outer: 32px;
    --radius-content-card: 20px;
    --radius-media: 24px;
    --type-section: 34px;
    --type-body: 16px;
    --section-padding: 24px;
    --section-gap: 64px;
  }
}
````

## File: AGENTS.md
````markdown
# Role

You are implementing a premium portfolio website for a product designer.

The designer makes all visual and product decisions.
Do not reinterpret the art direction without being asked.

# Visual direction

The interface should feel like it was produced by a high-end digital design studio.

Avoid generic AI-generated landing page aesthetics.

Do not use:
- random gradients
- excessive glassmorphism
- decorative blobs
- unnecessary illustrations
- excessive shadows
- excessive rounded cards
- centered SaaS hero layouts
- fake metrics
- filler copy
- generic animations

Prefer:
- precise typography
- strong grid
- deliberate whitespace
- restrained motion
- asymmetric composition
- editorial layouts
- subtle hierarchy
- high quality responsive behavior

# Workflow

Before major visual changes:
1. inspect the existing implementation
2. preserve what already works
3. describe the intended change briefly
4. implement only the requested scope

Never redesign unrelated sections.

## Figma workflow

Figma is the source of truth for visual implementation.

When a Figma frame URL is provided:
- inspect the frame through the Figma MCP server before coding
- use Figma layout, spacing, hierarchy, components, variables and visual proportions as the primary reference
- preserve the existing React architecture and site-wide design system
- do not reinterpret the design unless explicitly asked
- do not replace Figma-defined spacing, radii or proportions with generic defaults
- reuse existing project components where visually equivalent
- if the Figma design conflicts with an existing implementation, prefer the Figma design for that specific screen unless instructed otherwise

# Quality

The website must:
- work at 1440px desktop
- work responsively
- have semantic HTML
- have accessible interactive elements
- avoid layout shifts
- keep animations performant
````

## File: package.json
````json
{
  "name": "sophia-portfolio",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "oxlint",
    "preview": "vite preview"
  },
  "dependencies": {
    "framer-motion": "^13.5.1",
    "react": "^19.2.8",
    "react-dom": "^19.2.8",
    "react-router-dom": "^7.18.3"
  },
  "devDependencies": {
    "@types/node": "^24.13.3",
    "@types/react": "^19.2.18",
    "@types/react-dom": "^19.2.7",
    "@vitejs/plugin-react": "^6.1.1",
    "oxlint": "^1.81.0",
    "typescript": "~6.0.2",
    "vite": "^8.3.0"
  }
}
````

## File: README.md
````markdown
# Портфолио Софьи Стрельченко

Личное портфолио UX/UI & Product Designer на React, TypeScript и Vite.

## Разработка

```sh
npm ci
npm run dev
```

Проверки: `npm run lint` и `npm run build`.

## GitHub Pages

В настройках репозитория **Settings → Pages → Build and deployment** выберите **GitHub Actions**. Публикация запускается при отправке изменений в ветку `master` или вручную из Actions. Сайт собирается для адреса `https://designsofiastrelchenko.github.io/sophia-portfolio/`.
````

## File: src/App.tsx
````typescript
import { useLayoutEffect, useRef } from 'react'
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'
import { HomeCanvas } from './components/HomeCanvas'
import { ExperiencePage } from './pages/ExperiencePage'
import { cancelSectionNavigation, navigateToSection } from './lib/canvasNavigation'
import { ProjectPage } from './pages/ProjectPage'
import { profile } from './data/portfolio'
import { ScrollReveals } from './components/ScrollReveals'
import { MobileHeader } from './components/MobileHeader'
import { CaseHeader } from './components/CaseHeader'
import { CopyrightPage } from './pages/CopyrightPage'
import { useCaseScrollTracking, usePageTracking } from './hooks/useAnalyticsTracking'

function AnalyticsTracking() {
  usePageTracking()
  useCaseScrollTracking()
  return null
}

function ScrollToPage() {
  const { pathname, hash, key } = useLocation()
  const previousPath = useRef<string | null>(null)
  useLayoutEffect(() => {
    cancelSectionNavigation()
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target && pathname === '/') {
        navigateToSection(target, previousPath.current === pathname ? 'smooth' : 'instant')
        previousPath.current = pathname
        return
      }
      if (target && pathname.startsWith('/projects/')) {
        navigateToSection(target, previousPath.current === pathname ? 'smooth' : 'instant')
      } else target?.scrollIntoView({ behavior: previousPath.current === pathname && !window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'smooth' : 'instant' })
    } else if (previousPath.current !== pathname || pathname === '/' || pathname === '/experience')
      window.scrollTo({ top: 0, behavior: 'instant' })
    if (pathname === '/') document.title = `${profile.name} — ${profile.role}`
    if (previousPath.current !== null && previousPath.current !== pathname) {
      document.getElementById('main-content')?.focus({ preventScroll: true })
    }
    previousPath.current = pathname
  }, [pathname, hash, key])
  return null
}
function HomePage() {
  return <HomeCanvas />
}
function SiteHeader() {
  const { pathname } = useLocation()
  return pathname.startsWith('/projects/') ? <CaseHeader key={pathname} /> : <MobileHeader />
}
function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <a className="skip-link" href="#main-content">
        Перейти к содержимому
      </a>
      <ScrollToPage />
      <AnalyticsTracking />
      <ScrollReveals />
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="/copyright" element={<CopyrightPage />} />
        <Route
          path="*"
          element={
            <main className="not-found" id="main-content" tabIndex={-1}>
              <h1>Страница не найдена</h1>
              <Link className="button" to="/">
                На главную
              </Link>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
export default App
````

## File: index.html
````html
<!doctype html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/svg+xml" href="%BASE_URL%icons/favicon/Logo 64 — Light.svg" media="(prefers-color-scheme: light)" />
    <link rel="icon" type="image/svg+xml" href="%BASE_URL%icons/favicon/Logo 64 — Dark.svg" media="(prefers-color-scheme: dark)" />
    <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="%BASE_URL%icons/favicon/Logo 180 — Light — Idea.png" />
    <link
      rel="preload"
      href="%BASE_URL%fonts/onest-latin-variable.woff2"
      as="font"
      type="font/woff2"
      crossorigin
    />
    <link
      rel="preload"
      href="%BASE_URL%fonts/onest-cyrillic-variable.woff2"
      as="font"
      type="font/woff2"
      crossorigin
    />
    <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
    <meta name="theme-color" content="#202020" media="(prefers-color-scheme: dark)" />
    <meta
      name="description"
      content="Софья Стрельченко — UX/UI &amp; Product Designer. Мобильные приложения, B2B-сервисы и дизайн-системы. Избранные проекты и опыт работы."
    />
    <title>Софья Стрельченко — UX/UI &amp; Product Designer</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
````
