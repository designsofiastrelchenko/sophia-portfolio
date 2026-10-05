import { Link } from 'react-router-dom'
import type { Project } from '../data/portfolio'
import { ArrowIcon } from './ArrowIcon'
import { useGroupedRows } from '../hooks/useGroupedRows'

export function ProjectTags({
  project,
}: {
  project: Project
}) {
  const tags = [...project.tags, ...project.platform.split('·')]
    .flatMap((tag) => tag.split('/').map((part) => part.trim()))
    .filter(Boolean)
    .map((tag) => tag[0].toLocaleUpperCase() + tag.slice(1))
  const groupRef = useGroupedRows(tags.length)

  return (
    <div className="project-tags segmented-group" ref={groupRef}>
      {tags.map((tag) => (
        <span className="chip" key={tag}>
          {tag}
        </span>
      ))}
    </div>
  )
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card" data-reveal="card" data-reveal-order={index}>
      <div className="project-card-interaction">
        <Link
          className="project-link"
          to={`/projects/${project.id}`}
          aria-labelledby={`${project.id}-title`}
        >
          {project.cover ? (
            <div className="project-artwork project-artwork--image">
              <img
                src={project.cover}
                alt=""
                width={project.coverDimensions?.width}
                height={project.coverDimensions?.height}
                loading={project.id === 'concepts' ? 'eager' : 'lazy'}
                fetchPriority={project.id === 'concepts' ? 'high' : undefined}
                decoding="async"
              />
            </div>
          ) : (
            <div className="project-artwork project-artwork--pending" aria-hidden="true">
              <span>{project.title.split(' — ')[0]}</span>
            </div>
          )}
          <div className="project-caption">
            <ProjectTags project={project} />
            <h2 id={`${project.id}-title`}>{project.title}</h2>
            <span className="icon-action project-open" aria-hidden="true">
              <ArrowIcon direction="up-right" decorative />
            </span>
          </div>
        </Link>
      </div>
    </article>
  )
}
