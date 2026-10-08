import { motionTokens } from '../lib/motion'
import { useEffect, useState } from 'react'
import type { MouseEvent, PointerEvent, ReactNode } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'

/** The entire cover owns one continuous hover zone, including its caption and whitespace. */
export function CaseCursor({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(false)
  const reduced = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const smoothX = useSpring(x, motionTokens.cursor)
  const smoothY = useSpring(y, motionTokens.cursor)
  const position = useTransform(() => `translate3d(${reduced ? x.get() : smoothX.get()}px, ${reduced ? y.get() : smoothY.get()}px, 0)`)
  useEffect(() => {
    const reset = () => {
      setVisible(false)
      x.jump(0); y.jump(0)
      smoothX.jump(0); smoothY.jump(0)
    }
    window.addEventListener('resize', reset)
    window.addEventListener('blur', reset)
    return () => { window.removeEventListener('resize', reset); window.removeEventListener('blur', reset) }
  }, [x, y, smoothX, smoothY])
  function follow(event: PointerEvent<HTMLDivElement> | MouseEvent<HTMLDivElement>) {
    if (('pointerType' in event && event.pointerType !== 'mouse') || !window.matchMedia('(min-width: 1101px) and (hover: hover) and (pointer: fine)').matches) return
    const bounds = event.currentTarget.getBoundingClientRect()
    const left = Math.max(8, Math.min(event.clientX - bounds.left + 16, bounds.width - 152))
    const top = Math.max(8, Math.min(event.clientY - bounds.top + 16, bounds.height - 64))
    x.set(left); y.set(top)
    if (!visible) { smoothX.jump(left); smoothY.jump(top) }
    setVisible(true)
  }
  function cancel(event: PointerEvent<HTMLDivElement>) {
    // A cancelled gesture can still leave the mouse physically over the card.
    // Keep one hover zone until the pointer actually exits its bounds.
    if (event.pointerType === 'mouse' && event.currentTarget.matches(':hover')) return
    setVisible(false)
  }
  return <div className="case-cursor-surface" data-cursor={visible} onPointerEnter={follow} onPointerMove={follow} onPointerLeave={() => setVisible(false)} onPointerCancel={cancel}
    onMouseMove={follow} onMouseOver={follow} onMouseLeave={() => setVisible(false)}>
    {children}
    <motion.span className="case-cursor" aria-hidden="true" style={{ transform: position }}>
      <motion.span initial={false} animate={{ opacity: visible ? 1 : 0, transform: reduced ? 'scale(1)' : `scale(${visible ? 1 : .94})` }} transition={{ duration: .12, ease: motionTokens.ease }}>Смотреть кейс</motion.span>
    </motion.span>
  </div>
}
