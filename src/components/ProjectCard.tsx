import type { Project } from '../data/portfolio'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project project--${project.presentation}`} aria-labelledby={`${project.id}-title`}>
      <div className={`project-visual project-visual--${project.tone}`} aria-hidden="true" />
      <div className="project-caption">
        <div>
          <h3 id={`${project.id}-title`}>{project.title}</h3>
          <p className="project-category">{project.category}</p>
        </div>
        <time className="project-year" dateTime={project.year}>{project.year}</time>
      </div>
    </article>
  )
}
