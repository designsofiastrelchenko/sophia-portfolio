import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/portfolio'
import { Fragment } from 'react'
import { ProfileAbout } from '../components/ProfileSidebar'
export function Work() {
  return <section id="work" aria-label="Избранные работы">
    <h2 className="sr-only">Избранные работы</h2>
    <div className="project-list">
      {projects.map((project, index) => <Fragment key={project.id}>
        <ProjectCard project={project} index={index} />
        {project.id === 'concepts' && <ProfileAbout />}
      </Fragment>)}
    </div>
  </section>
}
