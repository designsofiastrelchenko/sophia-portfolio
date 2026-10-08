import { motionTokens } from './motion'
import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

/** Press feedback belongs to the adaptive UI; desktop hover stays unchanged. */
export function useAdaptivePress() {
  const reduced = useReducedMotion()
  const [adaptive, setAdaptive] = useState(() => window.matchMedia('(max-width: 1100px)').matches)
  useEffect(() => {
    const query = window.matchMedia('(max-width: 1100px)')
    const update = () => setAdaptive(query.matches)
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])
  const transition = reduced ? { duration: 0 } : motionTokens.press
  return {
    initial: false as const,
    animate: adaptive ? { transform: 'scale(1)', transition } : undefined,
    whileTap: adaptive && !reduced ? { transform: 'scale(.97)', transition } : undefined,
  }
}
