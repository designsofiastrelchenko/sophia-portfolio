import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Enhance existing semantic blocks without wrappers or React updates on scroll.
export function ScrollReveals() {
  const { pathname, search } = useLocation()
  useLayoutEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const blocks = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    let observer: IntersectionObserver | undefined
    const show = (block: HTMLElement) => {
      block.dataset.revealState = 'visible'
      observer?.unobserve(block)
    }
    const start = () => {
      observer?.disconnect()
      if (media.matches || !('IntersectionObserver' in window)) {
        blocks.forEach(show)
        return
      }
      observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) show(entry.target as HTMLElement)
        }
      }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' })
      const target = document.getElementById(window.location.hash.slice(1))
      // Batch geometry reads before assigning the initial state.
      const positions = blocks.map(block => ({ block, bottom: block.getBoundingClientRect().bottom }))
      for (const { block, bottom } of positions) {
        if (block.dataset.revealState === 'visible') continue
        if (bottom <= 0 || (target && (target === block || block.contains(target)))) show(block)
        else {
          block.dataset.revealState = 'pending'
          observer.observe(block)
        }
      }
    }
    const revealFocus = (event: FocusEvent) => {
      if (event.target instanceof Element) {
        const block = event.target.closest<HTMLElement>('[data-reveal]')
        if (block) show(block)
      }
    }
    start()
    media.addEventListener('change', start)
    document.addEventListener('focusin', revealFocus)
    return () => {
      observer?.disconnect()
      media.removeEventListener('change', start)
      document.removeEventListener('focusin', revealFocus)
      for (const block of blocks) {
        if (block.dataset.revealState === 'pending') delete block.dataset.revealState
      }
    }
  }, [pathname, search])
  return null
}
