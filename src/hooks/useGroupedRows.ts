import { useLayoutEffect, useRef } from 'react'

// Mark the visible ends of each wrapped row without changing its layout.
export function useGroupedRows(itemCount: number) {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const group = ref.current
    if (!group) return
    let frame = 0
    let active = true

    const update = () => {
      frame = 0
      const items = Array.from(group.children).filter((item): item is HTMLElement => item instanceof HTMLElement)
      items.forEach(item => item.classList.remove('is-row-start', 'is-row-end'))
      let row: HTMLElement[] = []
      let rowTop = Number.NaN
      const finish = () => {
        row[0]?.classList.add('is-row-start')
        row.at(-1)?.classList.add('is-row-end')
      }
      for (const item of items) {
        const top = item.offsetTop
        if (row.length && Math.abs(top - rowTop) > 2) {
          finish()
          row = []
        }
        if (!row.length) rowTop = top
        row.push(item)
      }
      finish()
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    const observer = new ResizeObserver(schedule)
    observer.observe(group)
    window.addEventListener('resize', schedule)
    void document.fonts.ready.then(() => { if (active) schedule() })
    schedule()
    return () => {
      active = false
      cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener('resize', schedule)
    }
  }, [itemCount])

  return ref
}
