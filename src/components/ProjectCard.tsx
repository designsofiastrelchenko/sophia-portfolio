import { Link } from 'react-router-dom'
import type { Project } from '../data/portfolio'
import { CaseCursor } from './CaseCursor'
import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import type { PointerEvent } from 'react'
import { SceneSurface } from './SceneSurface'
import { ProjectCover } from './ProjectCover'
import { useAdaptivePress } from '../lib/useAdaptivePress'

const MotionLink = motion.create(Link)

const hoverQuery = '(min-width: 1101px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)'

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduced = useReducedMotion()
  const press = useAdaptivePress()
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [interactive, setInteractive] = useState(() => window.matchMedia(hoverQuery).matches)
  useEffect(() => {
    const media = window.matchMedia(hoverQuery)
    const update = () => { setInteractive(media.matches); setHovered(false) }
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])
  const revealed = !interactive || hovered || focused
  function settleHover(event: PointerEvent<HTMLAnchorElement>) {
    if (event.pointerType !== 'mouse' || !event.currentTarget.matches(':hover')) setHovered(false)
  }
  return (
    <article className="project-card" data-canvas-panel data-project={project.id}>
      <MotionLink {...press} transition={{ duration: .14 }}
        className="project-link"
        draggable={false}
        to={`/projects/${project.id}`}
        aria-labelledby={`${project.id}-title`}
        data-reveal-details={interactive}
        onPointerEnter={event => { if (event.pointerType === 'mouse') setHovered(true) }}
        onMouseOver={() => { if (interactive) setHovered(true) }}
        onPointerLeave={() => setHovered(false)}
        onMouseLeave={() => setHovered(false)}
        onPointerCancel={settleHover}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        <CaseCursor>
          <SceneSurface single={project.id === 'skywallet' || project.id === 'astoria'} className="project-scene">
          <ProjectCover project={project} revealed={revealed} immediate={focused || !interactive}>
          {project.cover ? (
              <div className="project-media">
                <motion.div className="project-artwork project-artwork--image"
                  initial={reduced ? false : { opacity: 0, transform: index % 2 ? 'scale(.98)' : 'translateX(16px)' }}
                  whileInView={{ opacity: 1, transform: reduced ? 'none' : index % 2 ? 'scale(1)' : 'translateX(0px)' }} viewport={{ once: true, amount: .15 }}
                  transition={{ duration: .5, ease: [.22, 1, .36, 1] }}>
                  <img
                    draggable={false}
                    src={project.cover}
                    alt=""
                    width={project.coverDimensions?.width}
                    height={project.coverDimensions?.height}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                </motion.div>
              </div>
          ) : (
            <div className="project-artwork project-artwork--pending" aria-hidden="true">
              <span>{project.title.split(' — ')[0]}</span>
            </div>
          )}
          </ProjectCover>
          </SceneSurface>
        </CaseCursor>
      </MotionLink>
    </article>
  )
}
