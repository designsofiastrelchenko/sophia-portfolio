import { useMotionSystem } from '../lib/motion'
import { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion, useScroll } from 'framer-motion'
import { projects } from '../data/portfolio'
import { getCaseNavigationSections } from '../data/caseContent'
import { bindShortWords } from '../lib/typography'
import { TelegramLink } from './ContactLinks'
import { BackButton } from './BackButton'
import { CaseSectionMenu } from './CaseSectionMenu'

export function CaseHeader() {
  const { variants, hoverLift, navHover } = useMotionSystem()
  const { pathname, search } = useLocation()
  const navigate = useNavigate()
  const project = projects.find(item => pathname === `/projects/${item.id}`)
  const sections = useMemo(() => project ? getCaseNavigationSections(project) : [], [project])
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
    // Keep a real router history key, so back/forward can restore this entry.
    navigate({ pathname, search, hash: `#${id}` })
  }

  return <>
    {project && <motion.div className="case-reading-progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />}
    <motion.header initial="hidden" animate="visible" variants={variants('fade')} className="site-header case-site-header">
      <div className="case-header-controls">
        <BackButton to={pathname === '/copyright' ? '/' : '/#work'} />
        {sections.length > 0 ? <nav className="case-header-anchors" aria-label="Разделы проекта">
          {sections.map(section => <motion.a style={{ transform: 'translateY(0px) scale(1)' }} whileHover={navHover} whileTap={hoverLift.whileTap} transition={hoverLift.transition} key={section.id} href={`#${section.id}`}
            aria-current={active === section.id ? 'location' : undefined}
            onClick={event => {
              if (event.button || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return
              event.preventDefault()
              goTo(section.id)
            }}>{bindShortWords(section.label)}</motion.a>)}
        </nav> : <div className="case-header-spacer" />}
        {sections.length > 0 && <CaseSectionMenu sections={sections} active={active} onNavigate={goTo} />}
        <TelegramLink location="case-header" label="TG" />
      </div>
    </motion.header>
  </>
}
