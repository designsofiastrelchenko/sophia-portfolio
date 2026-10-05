import { useEffect, useMemo, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LayoutGroup, motion, useReducedMotion } from 'framer-motion'
import { caseSections, projects } from '../data/portfolio'
import { publicAsset } from '../lib/publicAsset'
import { Icon } from './Icon'

const homeLinks = [
  { href: '/#profile', label: 'Обо мне' },
  { href: '/#experience', label: 'Опыт работы' },
  { href: '/#education', label: 'Образование и курсы' },
  { href: '/#work', label: 'Проекты' },
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
  const isConcept = pathname === '/projects/concepts'
  const isShort = new URLSearchParams(search).get('version') === 'short'
  const sections = useMemo(() => isConcept
    ? projects[0].videos?.map(({ id, shortTitle }) => ({ id, label: shortTitle })) ?? []
    : caseSections.filter(({ id }) => !isShort || id === 'context' || id === 'final'),
  [isConcept, isShort])

  useEffect(() => {
    const ids = isCase
      ? sections.map(({ id }) => id)
      : homeLinks.map(({ href }) => href.split('#')[1])
    let frame = 0
    const update = () => {
      frame = 0
      const line = (headerRef.current?.getBoundingClientRect().bottom ?? 0) + 24
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
    const mobile = window.matchMedia('(max-width: 760px)')
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
    })
  }

  return (
    <header className="mobile-header" ref={headerRef}>
      <div className="mobile-menu-backdrop" data-open={open} aria-hidden="true" onClick={() => setOpenFor(null)} />
      <div className={`mobile-header-inner${isCase ? ' mobile-header-inner--case' : ' mobile-header-inner--home'}`}>
        {isCase ? (
          <Link className="icon-action mobile-header-back" to="/" aria-label="Назад к проектам" onClick={() => setOpenFor(null)}>
            <Icon name="arrow-left" />
          </Link>
        ) : null}
        <Link
          className="mobile-brand"
          to="/"
          aria-label="На главную"
          onClick={() => setOpenFor(null)}
        >
          <img src={publicAsset('icons/favicon/Logo 64 — Light.svg')} alt="" width="40" height="40" />
        </Link>
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
        <LayoutGroup id={`mobile-menu-${pathname}`}>
        {isCase ? (
          <>
            <Link to="/" onClick={() => setOpenFor(null)} style={{ '--menu-order': 0 } as CSSProperties}>
              <span className="mobile-menu-link-label">Все проекты</span>
            </Link>
            {sections.length > 0 && <span className="mobile-menu-label" style={{ '--menu-order': 1 } as CSSProperties}>Разделы кейса</span>}
            {sections.map((section, index) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                aria-current={activeSection === section.id ? 'location' : undefined}
                onClick={() => closeAtSection(section.id)}
                style={{ '--menu-order': index + 2 } as CSSProperties}
              >
                {activeSection === section.id && (
                  <motion.span className="mobile-menu-active-marker" layoutId="activeSection" aria-hidden="true"
                    transition={reducedMotion ? { duration: 0 } : { type: 'spring', duration: 0.5, bounce: 0.2 }}>{section.label}</motion.span>
                )}
                <span className="mobile-menu-link-label">{section.label}</span>
              </a>
            ))}
          </>
        ) : (
          homeLinks.map((link, index) => (
            <Link
              key={link.href}
              to={link.href}
              aria-current={activeSection === link.href.split('#')[1] ? 'location' : undefined}
              onClick={() => closeAtSection(link.href.split('#')[1])}
              style={{ '--menu-order': index } as CSSProperties}
            >
              {activeSection === link.href.split('#')[1] && (
                <motion.span className="mobile-menu-active-marker" layoutId="activeSection" aria-hidden="true"
                  transition={reducedMotion ? { duration: 0 } : { type: 'spring', duration: 0.5, bounce: 0.2 }}>{link.label}</motion.span>
              )}
              <span className="mobile-menu-link-label">{link.label}</span>
            </Link>
          ))
        )}
        </LayoutGroup>
      </nav>
    </header>
  )
}
