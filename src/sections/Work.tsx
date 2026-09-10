import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/portfolio'

export function Work() {
  return (
    <section id="work" className="work-section" aria-labelledby="work-title">
      <header className="work-heading">
        <h2 id="work-title">Selected work</h2>
      </header>
      <div className="project-list">
        {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>
    </section>
  )
}
