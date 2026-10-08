import { useReducedMotion, type Variants } from 'framer-motion'
import { useSyncExternalStore } from 'react'

export const motionTokens = {
  ease: [.22, 1, .36, 1] as [number, number, number, number],
  interaction: { type: 'spring' as const, stiffness: 450, damping: 34 },
  cursor: { stiffness: 450, damping: 38 },
  press: { type: 'spring' as const, stiffness: 550, damping: 38 },
  reveal: .45, adaptiveReveal: .28, menu: .2, stagger: .06,
}

const subscribeAdaptive = (update: () => void) => {
  const query = window.matchMedia('(max-width: 1100px)')
  query.addEventListener('change', update)
  return () => query.removeEventListener('change', update)
}
const subscribeHover = (update: () => void) => {
  const query = window.matchMedia('(hover: hover) and (pointer: fine)')
  query.addEventListener('change', update)
  return () => query.removeEventListener('change', update)
}
export type RevealPreset = 'soft' | 'left' | 'right' | 'scale' | 'fade'
export function revealTransform(preset: RevealPreset, distance = 16) {
  return preset === 'left' ? `translateX(-${distance}px)`
    : preset === 'right' ? `translateX(${distance}px)`
    : preset === 'scale' ? 'scale(.98)'
    : preset === 'fade' ? 'none' : `translateY(${distance}px)`
}

export function revealIdentity(preset: RevealPreset) {
  return preset === 'scale' ? 'scale(1)' : preset === 'left' || preset === 'right' ? 'translateX(0px)' : preset === 'fade' ? 'none' : 'translateY(0px)'
}

export function useMotionSystem() {
  const reduced = Boolean(useReducedMotion())
  const adaptive = useSyncExternalStore(subscribeAdaptive, () => window.matchMedia('(max-width: 1100px)').matches, () => false)
  const hover = useSyncExternalStore(subscribeHover, () => window.matchMedia('(hover: hover) and (pointer: fine)').matches, () => false)
  const transition = { duration: reduced ? .1 : adaptive ? motionTokens.adaptiveReveal : motionTokens.reveal, ease: motionTokens.ease }
  const variants = (preset: RevealPreset = 'soft', delay = 0): Variants => ({
    hidden: { opacity: 0, transform: reduced ? revealIdentity(preset) : revealTransform(preset, adaptive ? 8 : 16) },
    visible: { opacity: 1, transform: revealIdentity(preset), transition: { ...transition, delay: reduced ? 0 : delay * (adaptive ? .65 : 1) } },
  })
  const staggerGroup: Variants = { hidden: {}, visible: { transition: { staggerChildren: reduced ? 0 : adaptive ? .03 : motionTokens.stagger, delayChildren: reduced ? 0 : .1 } } }
  const opacityVariants: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition } }
  const reveal = (preset: RevealPreset = 'soft', delay = 0) => ({
    initial: 'hidden', whileInView: 'visible', viewport: { once: true, amount: .04 }, variants: variants(preset, delay),
  })
  const navHover = hover && !reduced ? { transform: 'translateY(-1px) scale(1)' } : undefined
  const hoverLift = {
    style: { transform: 'translateY(0px) scale(1)' },
    whileHover: hover && !reduced ? { transform: 'translateY(-2px) scale(1.03)' } : undefined,
    whileTap: !reduced ? { transform: 'translateY(0px) scale(.97)' } : undefined,
    transition: motionTokens.interaction,
  }
  return { reduced, adaptive, variants, reveal, hoverLift, navHover, transition, staggerGroup, opacityVariants }
}
