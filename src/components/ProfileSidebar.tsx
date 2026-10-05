import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { education, experience, profile, toolLogos } from '../data/portfolio'
import type { Experience } from '../data/portfolio'
import { Icon } from './Icon'
import { MetaSeparatedText } from './MetaSeparatedText'
import { trackEvent } from '../lib/analytics'
import { publicAsset } from '../lib/publicAsset'

function ResumeDivider() {
  return <span className="resume-divider" aria-hidden="true">
    <span className="resume-divider-line" />
    <span className="resume-divider-notch resume-divider-notch--left" />
    <span className="resume-divider-notch resume-divider-notch--right" />
  </span>
}

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

function ResumeEntry({ item, last }: { item: Experience; last: boolean }) {
  return (
    <li>
          <div className="resume-entry-intro">
            <span className={`company-logo${item.company === 'Contented' ? ' company-logo--contented' : ''}`} aria-hidden="true">
              {item.logo ? (
                <img src={item.logo} alt="" width="36" height="36" />
              ) : null}
            </span>
            <div className="resume-entry-details">
              <h3>{item.company}</h3>
              <p className="resume-entry-role">{item.role}</p>
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
                  <h4>{index + 1}. {project.title.replace(/^\d+\.\s*/, '')}</h4>
                  <h5>Результат</h5>
                  <ul className="star-list" role="list">{project.results.map((result) => <li key={result}>{result}</li>)}</ul>
                  <h5>Проблема</h5>
                  <p>{project.problem}</p>
                  <h5>Решение</h5>
                  <p>{project.solution}</p>
                </article>
              ))}
            </div>
          ) : null}
          {!last ? <ResumeDivider /> : null}
    </li>
  )
}

function ResumeEntries({ items }: { items: Experience[] }) {
  return (
    <ol className="resume-entries">
      {items.map((item, index) => <ResumeEntry key={item.company} item={item} last={index === items.length - 1} />)}
    </ol>
  )
}

type AccordionProps = {
  id: string
  title: string
  items: Experience[]
  open: boolean
  onToggle: (button: HTMLButtonElement) => void
  onCollapsed: () => void
}

function ResumeAccordion({ id, title, items, open, onToggle, onCollapsed }: AccordionProps) {
  const hiddenCount = Math.max(0, items.length - 2)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const foldRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const fold = foldRef.current
    const content = contentRef.current
    if (!fold || !content) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      fold.style.height = open ? 'auto' : '0px'
      return
    }
    fold.style.height = `${fold.getBoundingClientRect().height}px`
    void fold.offsetHeight
    fold.style.height = open ? `${content.scrollHeight}px` : '0px'
    if (!open) return
    const observer = new ResizeObserver(() => {
      if (fold.style.height !== 'auto') fold.style.height = `${content.scrollHeight}px`
    })
    observer.observe(content)
    return () => observer.disconnect()
  }, [open])

  return (
    <section className={`experience${open ? ' experience--open' : ''}`} id={id} aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`}>{title}</h2>
      <div className="experience-accordion">
        <button className="experience-accordion-toggle" type="button" ref={toggleRef}
          aria-expanded={open} aria-controls={`${id}-accordion-list`}
          onClick={() => { if (toggleRef.current) onToggle(toggleRef.current) }}>
          <span className="experience-accordion-heading" data-reveal="accordion-row" data-reveal-order="0">
            <span>{open ? title : items.slice(0, 2).map(item => item.company).join(', ')}</span>
            <span className="experience-accordion-meta" aria-hidden="true">
              {!open && hiddenCount > 0 ? <span className="experience-accordion-count">+{hiddenCount}</span> : null}
              <Icon name="chevron-down" />
            </span>
          </span>
          <span className="experience-accordion-hint" data-reveal="accordion-row" data-reveal-order="1">
            {open ? 'Нажмите, чтобы свернуть' : 'Нажмите, чтобы раскрыть'}
          </span>
        </button>
        <div className="experience-accordion-fold" ref={foldRef} id={`${id}-accordion-list`}
          aria-hidden={!open} inert={!open}
          onTransitionEnd={(event) => {
            if (event.target !== event.currentTarget || event.propertyName !== 'height') return
            if (open) event.currentTarget.style.height = 'auto'
            else onCollapsed()
          }}>
          <div className="experience-accordion-inner" ref={contentRef}>
            <ResumeEntries items={items} />
          </div>
        </div>
      </div>
    </section>
  )
}

export function ProfileSidebar() {
  const reducedMotion = useReducedMotion()
  const [experienceOpen, setExperienceOpen] = useState(false)
  const [educationOpen, setEducationOpen] = useState(false)
  const [stickyReady, setStickyReady] = useState(true)
  const shellRef = useRef<HTMLElement>(null)
  const lastToggleRef = useRef<HTMLButtonElement | null>(null)
  const toggleTopBeforeChange = useRef<number | null>(null)
  const stickyFallback = useRef<number | null>(null)

  useEffect(() => () => {
    if (stickyFallback.current !== null) window.clearTimeout(stickyFallback.current)
  }, [])

  useLayoutEffect(() => {
    const shell = shellRef.current
    if (!shell || experienceOpen || educationOpen || !stickyReady) return
    const measure = () => {
      const availableTop = window.innerHeight - shell.getBoundingClientRect().height - 24
      shell.style.setProperty('--profile-sticky-top', `${Math.min(24, availableTop)}px`)
    }
    const observer = new ResizeObserver(measure)
    observer.observe(shell)
    window.addEventListener('resize', measure)
    measure()
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [experienceOpen, educationOpen, stickyReady])

  useLayoutEffect(() => {
    const previousTop = toggleTopBeforeChange.current
    const button = lastToggleRef.current
    if (previousTop === null || !button) return
    toggleTopBeforeChange.current = null
    const shift = button.getBoundingClientRect().top - previousTop
    if (Math.abs(shift) > 1) window.scrollBy({ top: shift, behavior: 'instant' })
  }, [experienceOpen, educationOpen, stickyReady])

  const finishCollapse = () => {
    if (experienceOpen || educationOpen || stickyReady) return
    if (stickyFallback.current !== null) window.clearTimeout(stickyFallback.current)
    stickyFallback.current = null
    toggleTopBeforeChange.current = lastToggleRef.current?.getBoundingClientRect().top ?? null
    setStickyReady(true)
  }

  const toggleAccordion = (id: 'experience' | 'education', button: HTMLButtonElement) => {
    if (stickyFallback.current !== null) window.clearTimeout(stickyFallback.current)
    stickyFallback.current = null
    lastToggleRef.current = button
    toggleTopBeforeChange.current = button.getBoundingClientRect().top
    const isOpen = id === 'experience' ? experienceOpen : educationOpen
    if (id === 'experience') setExperienceOpen(!isOpen)
    else setEducationOpen(!isOpen)
    if (isOpen && !(id === 'experience' ? educationOpen : experienceOpen)) {
      stickyFallback.current = window.setTimeout(() => {
        stickyFallback.current = null
        toggleTopBeforeChange.current = button.getBoundingClientRect().top
        setStickyReady(true)
      }, window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 480)
    } else {
      setStickyReady(false)
    }
  }

  return (
    <aside ref={shellRef} className={`profile-shell${!experienceOpen && !educationOpen && stickyReady ? ' profile-shell--sticky' : ''}`} aria-label="О дизайнере">
      <ToolsStrip />
      <section className="profile-info" id="profile">
        <div className="profile-avatar" data-reveal="avatar">
          <img src={publicAsset('cases/avatar.jpg')} alt={`Фото ${profile.name}`} width="160" height="160" decoding="async" />
        </div>
        <header className="profile-heading">
          <div className="profile-heading-top">
            <div className="profile-identity">
              <h1 data-reveal="intro" data-reveal-order="0">{profile.name}</h1>
              <p className="profile-role" data-reveal="intro" data-reveal-order="1">{profile.role}</p>
            </div>
            <span className="profile-contact-reveal" data-reveal="intro" data-reveal-order="3">
              <motion.a className="icon-action button--contact" href={profile.telegram} target="_blank" rel="noreferrer" aria-label="Связаться в Telegram" title="Связаться в Telegram"
                onClick={() => { trackEvent('contact_click', { location: 'profile' }); trackEvent('telegram_click', { location: 'profile' }) }}
                initial="rest" whileHover={reducedMotion ? undefined : 'hover'}>
                <motion.span className="telegram-icon-motion" variants={{ rest: { transform: 'translate(0px, 0px) rotate(0deg)' }, hover: { transform: 'translate(2px, -2px) rotate(-10deg)' } }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}><Icon name="telegram" /></motion.span>
              </motion.a>
            </span>
          </div>
          <p className="profile-location" data-reveal="intro" data-reveal-order="1"><MetaSeparatedText value={profile.location} /></p>
        </header>
        <nav className="profile-links" id="contacts" aria-label="Профили и контакты" data-reveal="intro" data-reveal-order="3">
          <a href={profile.cv} target="_blank" rel="noreferrer" onClick={() => trackEvent('resume_click', { location: 'profile' })}>
            <span className="icon-motion"><Icon name="document" /></span> Резюме
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" onClick={() => trackEvent('linkedin_click', { location: 'profile' })}>
            <span className="icon-motion"><Icon name="linkedin" /></span> LinkedIn
          </a>
          <a href={profile.email} onClick={() => trackEvent('email_click', { location: 'profile' })}>
            <span className="icon-motion"><Icon name="mail" /></span> Почта
          </a>
        </nav>
        <p className="profile-about" data-reveal="intro" data-reveal-order="2">{profile.about}</p>
      </section>
      <ResumeAccordion id="experience" title="Опыт работы" items={experience} open={experienceOpen}
        onToggle={(button) => toggleAccordion('experience', button)} onCollapsed={finishCollapse} />
      <ResumeAccordion id="education" title="Образование и курсы" items={education} open={educationOpen}
        onToggle={(button) => toggleAccordion('education', button)} onCollapsed={finishCollapse} />
    </aside>
  )
}
