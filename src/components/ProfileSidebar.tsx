import { motion } from 'framer-motion'
import { aboutPresentation, aboutTools, education, experience, profile, toolLogos } from '../data/portfolio'
import type { Experience } from '../data/portfolio'
import { Icon } from './Icon'
import { SocialIconLinks, TelegramLink } from './ContactLinks'
import { MetaSeparatedText } from './MetaSeparatedText'
import { publicAsset } from '../lib/publicAsset'
import { Footer } from './Footer'
import { Typography } from './Typography'
import { useMotionSystem } from '../lib/motion'

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
    <Typography><li>
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
    </li></Typography>
  )
}

function ResumeEntries({ items }: { items: Experience[] }) {
  return (
    <ol className="resume-entries">
      {items.map((item) => <ResumeEntry key={item.company} item={item} />)}
    </ol>
  )
}

export function ProfileHero() {
  const { variants } = useMotionSystem()
  return <section className="profile-hero" data-canvas-panel aria-labelledby="hero-title">
    <motion.div className="hero-copy" initial="hidden" animate="visible">
      <motion.div className="hero-identity" variants={variants('fade', .04)}>
        <p>{profile.name}</p>
      </motion.div>
      <motion.h1 id="hero-title" className="profile-role">
        <motion.span className="hero-headline-line" variants={variants('left', 0.120)}>UX/UI&nbsp;&amp;&nbsp;Product дизайнер</motion.span>{' '}
        <motion.span className="hero-headline-line" variants={variants('left', 0.185)}>с&nbsp;опытом в&nbsp;финтехе,</motion.span>{' '}
        <motion.span className="hero-headline-line" variants={variants('left', 0.250)}>цифровых экосистемах</motion.span>{' '}
        <motion.span className="hero-headline-line" variants={variants('left', 0.315)}>и&nbsp;B2B/B2C‑продуктах</motion.span>
      </motion.h1>
      <motion.div className="hero-links" variants={variants('soft', .34)}><SocialIconLinks location="hero" /></motion.div>
      <motion.p className="hero-location" variants={variants('fade', .4)}><MetaSeparatedText value={profile.location} /></motion.p>
    </motion.div>
    <div className="hero-visual">
      <motion.div className="profile-avatar" initial="hidden" animate="visible" variants={variants('scale', .18)}>
        <img src={publicAsset('cases/avatar.jpg')} alt={`Фото ${profile.name}`} width="400" height="400" decoding="async" fetchPriority="high" />
      </motion.div>
    </div>
  </section>
}

export function ProfileAbout() {
  const { variants, hoverLift } = useMotionSystem()
  return <Typography><motion.section className="profile-about" id="about" data-canvas-panel aria-label="Обо мне"
    initial="hidden" whileInView="visible" viewport={{ once: true, amount: .08 }}>
    <div className="about-intro">
    <motion.h2 id="about-title" className="about-statement" variants={variants('fade')}>
      {aboutPresentation.statement} <span>{aboutPresentation.emphasis}</span>
    </motion.h2>
    <motion.p className="about-background" variants={variants('soft', .08)}>{aboutPresentation.background}</motion.p>
    </div>
    <motion.div className="about-principles" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .04 }}>
      {aboutPresentation.principles.map((principle, index) => <motion.div className="about-principle" key={principle.title} variants={variants('soft', .16 + index * .04)}>
        <h3>{principle.title}</h3>
        <p>{principle.description}</p>
      </motion.div>)}
    </motion.div>
    <motion.footer className="about-bottom" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .04 }} variants={variants('fade', .12)}>
      <ul className="about-tool-chips" aria-label="Инструменты">
        {aboutTools.map(tool => <motion.li key={tool.id} {...hoverLift}>{tool.label}</motion.li>)}
      </ul>
    </motion.footer>
  </motion.section></Typography>
}

export function ExperienceContent() {
  return <Typography><div className="profile-details">
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
  </div></Typography>
}

export function ProfileContact() {
  const { variants } = useMotionSystem()
  return (
    <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: .08 }} className="contacts-section" id="contacts" data-canvas-panel aria-labelledby="contacts-title">
      <div className="contact-copy">
        <motion.h2 id="contacts-title" variants={variants('fade')}>Будем на связи!</motion.h2>
        <motion.div className="contact-actions" variants={variants('soft', .12)}><TelegramLink location="contacts" label="Связаться" showIcon={false} /><SocialIconLinks location="contacts" first="hh" /></motion.div>
      </div>
      <motion.div className="contact-signature" variants={variants('left', .22)}>@wsslxq</motion.div>
      <motion.img variants={variants('scale', .18)} className="contact-portrait" src={publicAsset('cases/contact-portrait.jpg')} alt="Фото Софьи Стрельченко" width="2592" height="3240" loading="lazy" />
      <Footer />
    </motion.section>
  )
}
