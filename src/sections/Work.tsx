import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/portfolio'
export function Work() {
  return (
    <section id="work" className="project-list" aria-label="Избранные проекты">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  )
}
