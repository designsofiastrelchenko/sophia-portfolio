import { motion } from 'framer-motion'
import { AchievementArtwork } from './AchievementArtwork'
import { useMotionSystem } from '../lib/motion'

export function CaseThanks() {
  const { reveal } = useMotionSystem()

  return (
    <motion.aside
      className="case-thanks"
      aria-label="Достижение за изучение кейса"
      {...reveal('fade')}
    >
      <AchievementArtwork />
      <p className="case-thanks-eyebrow">Достижение получено</p>
      <h2>Любопытный исследователь</h2>
      <p>Кейс прочитан, детали изучены — достижение ваше</p>
    </motion.aside>
  )
}
