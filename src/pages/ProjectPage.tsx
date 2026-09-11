import { useEffect } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { profile, projects } from '../data/portfolio'
import { Icon } from '../components/Icon'
import { ProjectTags } from '../components/ProjectCard'
import { ProjectArtwork } from '../components/ProjectArtwork'
import { CaseNavigation } from '../components/CaseNavigation'
import { SegmentedControl } from '../components/SegmentedControl'
import { Footer } from '../components/Footer'

const versionOptions = [
  { value: 'full', label: 'Полная версия' },
  { value: 'short', label: 'Сокращённая версия' },
]

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
        <Link className="button" to="/">
          На главную
        </Link>
      </main>
    )

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
  const nextProject =
    projects[(projects.indexOf(project) + 1) % projects.length]
  return (
    <div className="case-shell" key={project.id}>
      <main className="case-main" id="main-content" tabIndex={-1}>
        <CaseNavigation isShort={isShort} projectId={project.id} />
        <header className="case-header">
          <div className="case-meta">
            <ProjectTags project={project} detail />
            <a
              className="button figma-button"
              href={project.figmaUrl}
              target="_blank"
              rel="noreferrer"
            >
              Figma-файл <span className="icon-motion"><Icon name="external" /></span>
            </a>
          </div>
          <h1>{project.title}</h1>
        </header>
        <SegmentedControl
          label="Версия кейса"
          value={isShort ? 'short' : 'full'}
          options={versionOptions}
          controls="case-content"
          onChange={(value) => changeVersion(value === 'short')}
        />
        <div className="case-content" id="case-content">
          <div className="case-overview">
            <figure className="case-showcase" data-reveal>
              <ProjectArtwork project={project} detail />
              <figcaption>{project.description}</figcaption>
            </figure>
            <section
              className="context-grid"
              id="context"
              aria-label="Контекст и задача"
              data-reveal
            >
              <div className="context-column">
                <article className="content-card">
                  <h2>Контекст</h2>
                  <p>{project.context}</p>
                </article>
                {!isShort ? (
                  <article className="content-card">
                    <h2>Технические ограничения</h2>
                    <ul>
                      {project.limitations.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                ) : null}
              </div>
              <article className="content-card task-card">
                <h2>Постановка задачи</h2>
                {project.task.split('\n').map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>
            </section>
          </div>
          {!isShort ? (
            <>
              <section className="content-card case-section" id="structure" data-reveal>
                <h2>Структура и процесс</h2>
                <p>{project.process}</p>
                <ol className="process-flow">
                  {project.steps.map((step, index) => (
                    <li key={step}>
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <h3>{step}</h3>
                      {index < project.steps.length - 1 ? (
                        <span className="flow-arrow" aria-hidden="true">
                          <Icon name="forward" />
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ol>
              </section>
              <section className="concept-grid" id="concept" data-reveal>
                <article className="content-card">
                  <h2>Визуальная концепция</h2>
                  <p>{project.concept}</p>
                </article>
                <div
                  className={`type-specimen type-specimen--${project.id}`}
                  role="group"
                  aria-label="Типографика интерфейса"
                >
                  <span>Onest · Типографика</span>
                  <strong>Аа Бб Вв</strong>
                  <p>Понятно с первого взгляда.</p>
                  <small>Regular / Medium / Semibold</small>
                </div>
              </section>
              <section className="content-card case-section" id="system" data-reveal>
                <h2>Дизайн-система</h2>
                <p>{project.system}</p>
                <div
                  className={`system-preview system-preview--${project.id}`}
                  role="group"
                  aria-label="Образцы цветов и компонентов"
                >
                  <div className="color-swatches">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="component-samples" aria-hidden="true">
                    <span className="sample-primary">
                      Продолжить <Icon name="external" />
                    </span>
                    <span className="sample-secondary">Подробнее</span>
                    <span className="sample-status">Готово</span>
                  </div>
                  <div className="sample-field" aria-hidden="true">
                    <span>Название</span>
                    <p>
                      {project.id === 'storage-app'
                        ? 'Моя кладовка'
                        : project.id === 'b2b-saas'
                          ? 'Новый заказ'
                          : 'Основной счёт'}{' '}
                      <Icon name="check" />
                    </p>
                  </div>
                </div>
              </section>
            </>
          ) : null}
          <section
            className="content-card case-section final-section"
            id="final"
            data-reveal
          >
            <h2>Отрисовка и финализация</h2>
            <p>
              Подготовила основные сценарии, адаптации и состояния интерфейса.
              Собрала интерактивный прототип, описала поведение компонентов и
              передала макеты команде разработки.
            </p>
            <a
              className="text-link"
              href={project.figmaUrl}
              target="_blank"
              rel="noreferrer"
            >
              Посмотреть макеты в Figma <span className="icon-motion"><Icon name="external" /></span>
            </a>
          </section>
        </div>
        <Link className="next-project" to={`/projects/${nextProject.id}`}>
          <span>
            Следующий проект<strong>{nextProject.title}</strong>
          </span>
          <span className="project-open">
            <span className="icon-motion" aria-hidden="true">
              <Icon name="external" />
            </span>
          </span>
        </Link>
        <Footer />
      </main>
    </div>
  )
}
