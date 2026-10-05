import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { publicAsset } from '../lib/publicAsset'

export function CaseThanks() {
  const reducedMotion = useReducedMotion()
  const [inView, setInView] = useState(false)

  return (
    <motion.aside
      className="case-thanks"
      aria-label="Достижение за изучение кейса"
      initial={reducedMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      onViewportEnter={() => setInView(true)}
      onViewportLeave={() => setInView(false)}
      transition={{ type: 'spring', stiffness: 100, damping: 20, opacity: { duration: 0.4 } }}
    >
      <motion.img
        src={publicAsset('icons/curious-researcher-trophy.svg')}
        alt=""
        width="120"
        height="120"
        loading="lazy"
        animate={reducedMotion || !inView ? { y: 0 } : { y: [0, -8, 0] }}
        transition={reducedMotion || !inView ? { duration: 0 } : { duration: 4, ease: 'easeInOut', repeat: Infinity }}
      />
      <p className="case-thanks-eyebrow">Достижение получено</p>
      <h2>Любопытный исследователь</h2>
      <p>Кейс прочитан, детали изучены — достижение ваше</p>
    </motion.aside>
  )
}
