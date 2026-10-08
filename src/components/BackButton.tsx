import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowIcon } from './ArrowIcon'
import { useAdaptivePress } from '../lib/useAdaptivePress'

const MotionLink = motion.create(Link)

export function BackButton({ to = '/#work' }: { to?: string }) {
  const reduced = useReducedMotion()
  const press = useAdaptivePress()
  return <MotionLink {...press} className="button back-button" to={to} aria-label="Назад"
    whileHover={{ backgroundColor: 'var(--color-surface)' }}
    transition={{ duration: reduced ? 0 : .18, ease: [.22, 1, .36, 1] }}>
    <ArrowIcon direction="left" decorative /><span className="back-button-label">Назад</span>
  </MotionLink>
}
