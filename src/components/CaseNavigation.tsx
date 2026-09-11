import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { caseSections } from '../data/portfolio'
import { Icon } from './Icon'

export function CaseNavigation({ isShort, projectId }: { isShort: boolean; projectId: string }) {
  const [active, setActive] = useState('')
  const disclosure = useRef<HTMLDetailsElement>(null)
  const visibleSections = caseSections.filter(section => !isShort || section.id === 'context' || section.id === 'final')

  useEffect(() => {
    const sections = caseSections.flatMap(({ id }) => {
      const section = document.getElementById(id)
      return section ? [section] : []
    })
    let frame = 0
    const update = () => {
      frame = 0
      const line = window.innerHeight * 0.35
      let current = ''
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= line) current = section.id
      }
      setActive(current)
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
  }, [isShort, projectId])

  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      const menu = disclosure.current
      if (menu?.open && event.target instanceof Node && !menu.contains(event.target)) menu.open = false
    }
    document.addEventListener('pointerdown', closeOutside)
    return () => document.removeEventListener('pointerdown', closeOutside)
  }, [])

  function closeMenu(returnFocus: boolean) {
    const menu = disclosure.current
    if (!menu) return
    menu.open = false
    if (returnFocus) menu.querySelector('summary')?.focus({ preventScroll: true })
  }

  const sectionLinks = visibleSections.map(section => (
    <a key={section.id} href={`#${section.id}`} aria-current={active === section.id ? 'location' : undefined}
      onClick={() => closeMenu(true)}>
      {section.label}
    </a>
  ))

  return (
    <nav className="case-navigation" aria-label="Разделы проекта">
      <Link className="back-link" to="/">
        <span className="icon-motion"><Icon name="back" /></span> На главную
      </Link>
      <div className="case-section-links">{sectionLinks}</div>
      <details className="case-mobile-navigation" ref={disclosure} key={`${projectId}-${isShort}`}
        onKeyDown={event => { if (event.key === 'Escape') { event.preventDefault(); closeMenu(true) } }}>
        <summary>
          <span>{visibleSections.find(section => section.id === active)?.label ?? 'Разделы кейса'}</span>
          <span className="disclosure-icon"><Icon name="chevron-down" /></span>
        </summary>
        <div className="case-mobile-panel">{sectionLinks}</div>
      </details>
    </nav>
  )
}
