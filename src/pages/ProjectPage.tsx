import { useEffect } from 'react'
import type { ReactNode } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { profile, projects } from '../data/portfolio'
import type { CaseImage } from '../data/portfolio'
import { getCaseGroups, withoutFinalPeriod } from '../data/caseContent'
import type { CaseNode } from '../data/caseContent'
import { Icon } from '../components/Icon'
import { CaseNavigation } from '../components/CaseNavigation'
import { SegmentedControl } from '../components/SegmentedControl'
import { Footer } from '../components/Footer'
import { ConceptCasePage } from './ConceptCasePage'
import { CaseVisual } from '../components/CaseVisual'
import { CaseThanks } from '../components/CaseThanks'
import { InlineArrows } from '../components/ArrowIcon'
import { MetaSeparatedText } from '../components/MetaSeparatedText'
import { visualsAfter } from '../data/caseVisuals'
import { VisualCaption } from '../components/VisualCaption'

const versionOptions = [
  { value: 'full', label: 'Полная версия' },
  { value: 'short', label: 'Сокращённая версия' },
]

function CaseNodeView({ node }: { node: CaseNode }) {
  if (node.kind === 'heading') {
    const className = /^(Проблема|Решение|Результат)$/.test(node.text.trim()) ? 'case-outcome-label' : undefined
    return node.level === 4 ? <h4 className={className}><InlineArrows text={node.text} /></h4> : <h3 className={className}><InlineArrows text={node.text} /></h3>
  }
  if (node.kind === 'list')
    return (
      <ul className="star-list" role="list">
        {node.items.map((item, index) => <li key={index}><InlineArrows text={item} /></li>)}
      </ul>
    )
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
    <div className="case-results-frame">
      <dl className="case-facts case-results case-metric-grid" aria-label="Результаты проекта">
        {items.map((item, index) => {
          const { lead, detail } = splitResult(item)
          return <div key={item} data-reveal="result" data-reveal-order={index}><dt>{lead}</dt>{detail && <dd>{detail}</dd>}</div>
        })}
      </dl>
    </div>
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
        <div className="case-standalone-heading" data-reveal="text" key={`heading-${blockIndex++}`}>
          {current.map((node, index) => <CaseNodeView node={node} key={index} />)}
        </div>,
      )
      return
    }
    blocks.push(
      <div className="case-text-frame" data-reveal="text" key={`text-${blockIndex++}`}>
        <div className="case-text-card">
          {current.map((node, index) => <CaseNodeView node={node} key={index} />)}
        </div>
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
    if (node.kind === 'heading') precedingHeading = node.text
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
  if (!images?.length) return null
  return (
    <div className="case-image-gallery" aria-label="Экраны проекта">
      {images.map((image) => (
        <figure className="case-image-frame" key={image.src} data-reveal="image">
          <a href={image.src} target="_blank" rel="noreferrer" aria-label={`Открыть изображение в полном размере: ${image.caption}`}>
            <img
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading="lazy"
              decoding="async"
            />
          </a>
          <VisualCaption>{image.caption}</VisualCaption>
        </figure>
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
    return <ConceptCasePage project={project} nextProject={projects[(projects.indexOf(project) + 1) % projects.length]} />

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
  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length]
  const showThanks = (projects.indexOf(project) + 1) % 2 === 0

  return (
    <div className="case-shell" key={project.id}>
      <main className="case-main" id="main-content" tabIndex={-1}>
        <CaseNavigation isShort={isShort} projectId={project.id} />
        <header className="case-header">
          {project.figmaUrl ? (
            <div className="case-meta" data-reveal="case-intro" data-reveal-order="0">
              <a className="button figma-button" href={project.figmaUrl} target="_blank" rel="noreferrer">
                Figma-файл <span className="icon-motion"><Icon name="external" /></span>
              </a>
            </div>
          ) : null}
          <h1 data-reveal="case-intro" data-reveal-order={project.figmaUrl ? 1 : 0}>{project.title}</h1>
          <p className="case-discipline" data-reveal="case-intro" data-reveal-order={project.figmaUrl ? 2 : 1}>{project.discipline}</p>
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
            {project.cover ? (
              <figure className="case-showcase" data-reveal="case-cover" data-reveal-order="3">
                <img src={project.cover} alt={`Главный экран проекта ${project.title}`}
                  width={project.coverDimensions?.width} height={project.coverDimensions?.height} decoding="async" />
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
        <Link className="next-project" to={`/projects/${nextProject.id}`}>
          <span>Следующий проект<strong>{nextProject.title}</strong></span>
          <span className="icon-action project-open">
            <span className="icon-motion" aria-hidden="true"><Icon name="external" /></span>
          </span>
        </Link>
        <Footer />
      </main>
    </div>
  )
}
