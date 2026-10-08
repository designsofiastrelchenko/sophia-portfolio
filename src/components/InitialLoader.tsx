import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { motionTokens } from '../lib/motion'

/** One document bootstrap, outside the router: page navigation never restarts it. */
export function InitialLoader() {
  const [loading, setLoading] = useState(true)
  const reduced = useReducedMotion()

  useEffect(() => {
    let cancelled = false
    let frame = 0
    // Only visible images participate. Lazy case galleries and offscreen covers
    // must not delay the first screen, nor should the window's full load event.
    const firstPanel = document.querySelector('.home-canvas [data-canvas-panel]')
    const images = Array.from(document.querySelectorAll<HTMLImageElement>('#root img'))
      .filter(image => {
        const panel = image.closest('[data-canvas-panel]')
        if (firstPanel && panel && panel !== firstPanel) return false
        const rect = image.getBoundingClientRect()
        return rect.width > 0 && rect.height > 0 && rect.bottom > 0 &&
          rect.top < window.innerHeight && rect.right > 0 && rect.left < window.innerWidth
      })
    const ready = [document.fonts.ready, ...images.map(image => image.decode().catch(() => undefined))]
    void Promise.all(ready).then(() => {
      if (cancelled) return
      // Let fonts/images and the canvas's ResizeObserver finish their layout.
      frame = requestAnimationFrame(() => {
        if (cancelled) return
        document.getElementById('root')?.removeAttribute('data-initial-loading')
        setLoading(false)
      })
    })
    return () => { cancelled = true; cancelAnimationFrame(frame) }
  }, [])

  return <AnimatePresence>
    {loading && <motion.div className="initial-loader" key="initial-loader"
      role="status" aria-live="polite" initial={false} animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} transition={{ duration: reduced ? .05 : .18, ease: motionTokens.ease }}>
      <p>Докручиваю детали и выравниваю сетку…</p>
    </motion.div>}
  </AnimatePresence>
}
