import { Link } from 'react-router-dom'
import type { Project } from '../data/portfolio'
import { ProjectArtwork } from './ProjectArtwork'
import { Icon } from './Icon'

export function ProjectTags({
  project,
  detail = false,
}: {
  project: Project
  detail?: boolean
}) {
  return (
    <div className="project-tags segmented-group">
      {project.tags.map((tag) => (
        <span className="chip" key={tag}>
          {tag}
        </span>
      ))}
      {detail ? <span className="chip">Продуктовый дизайн</span> : null}
      <time className="chip" dateTime={project.year}>
        {project.year}
      </time>
    </div>
  )
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card" data-reveal>
      <Link
        className="project-link"
        to={`/projects/${project.id}`}
        aria-labelledby={`${project.id}-title`}
      >
        <ProjectArtwork project={project} />
        <div className="project-caption">
          <ProjectTags project={project} />
          <h2 id={`${project.id}-title`}>{project.title}</h2>
          <p>{project.description}</p>
          <span className="project-open" aria-hidden="true">
            <span className="icon-motion"><Icon name="external" /></span>
          </span>
        </div>
      </Link>
    </article>
  )
}
