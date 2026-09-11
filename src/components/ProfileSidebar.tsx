import { education, experience, profile, toolLogos } from '../data/portfolio'
import type { Experience } from '../data/portfolio'
import { Icon } from './Icon'

function ToolsStrip() {
  return (
    <ul className="tools-strip" aria-label="Инструменты">
      {Array.from({ length: 16 }, (_, index) => {
        const tool = index < 8 ? toolLogos[index] : index >= 11 && index < 14 ? toolLogos[index - 3] : undefined
        return tool ? (
        <li
          className={`tool-tile tool-tile--${tool.id}`}
          key={tool.id}
          title={tool.label}
        >
          <img
            src={`/icons/tools/${tool.id}.svg.svg`}
            alt={tool.label}
            width="32"
            height="32"
          />
        </li>
        ) : <li className="tool-tile tool-tile--spacer" key={`spacer-${index}`} aria-hidden="true" />
      })}
    </ul>
  )
}

function ResumeEntries({ items }: { items: Experience[] }) {
  return (
    <ol className="resume-entries">
      {items.map((item) => (
        <li key={item.company}>
          <span className="company-logo" aria-hidden="true">
            {item.logo ? (
              <img src={item.logo} alt="" width="36" height="36" />
            ) : null}
          </span>
          <div>
            <h3>
              {item.company} • {item.role}
            </h3>
            <p>{item.period}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

export function ProfileSidebar() {
  return (
    <aside className="profile-shell" aria-label="О дизайнере">
      <ToolsStrip />
      <section className="profile-info">
        <div className="profile-avatar" aria-hidden="true" />
        <header className="profile-heading">
          <h1>{profile.name}</h1>
          <a className="button button--contact" href={profile.telegram} target="_blank" rel="noreferrer">
            <span className="icon-motion"><Icon name="telegram" /></span> Связаться
          </a>
          <p className="profile-role">{profile.role}</p>
          <p className="profile-location">{profile.location}</p>
        </header>
        <nav className="profile-links" aria-label="Профили и контакты">
          <a href={profile.cv} target="_blank" rel="noreferrer">
            <span className="icon-motion"><Icon name="document" /></span> Резюме
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <span className="icon-motion"><Icon name="linkedin" /></span> LinkedIn
          </a>
          <a href={profile.email}>
            <span className="icon-motion"><Icon name="mail" /></span> Почта
          </a>
        </nav>
        <p className="profile-about">{profile.about}</p>
      </section>
      <section className="experience" aria-labelledby="experience-title" data-reveal>
        <h2 id="experience-title">Опыт работы</h2>
        <ResumeEntries items={experience} />
      </section>
      <section
        className="experience education"
        aria-labelledby="education-title"
        data-reveal
      >
        <h2 id="education-title">Образование и курсы</h2>
        <ResumeEntries items={education} />
      </section>
    </aside>
  )
}
