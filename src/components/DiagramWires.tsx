import { useEffect, useId, useState } from 'react'
import { motion } from 'framer-motion'
import type { RefObject } from 'react'

export type DiagramEdge = { from: string; to: string }

type Box = { left: number; top: number; right: number; bottom: number; cx: number; cy: number }
type DrawnEdge = { key: string; path: string }

function layoutBox(element: HTMLElement, root: HTMLElement): Box {
  let left = 0
  let top = 0
  let current: HTMLElement | null = element
  while (current && current !== root) {
    left += current.offsetLeft
    top += current.offsetTop
    current = current.offsetParent as HTMLElement | null
  }
  const right = left + element.offsetWidth
  const bottom = top + element.offsetHeight
  return { left, top, right, bottom, cx: (left + right) / 2, cy: (top + bottom) / 2 }
}

function wirePath(from: Box, to: Box, mode: string, viewportWidth: number): string {
  const horizontal = mode === 'state-map' ? viewportWidth > 760
    : mode === 'risk-map' || mode === 'change-list' ? viewportWidth > 760
      : ['service-map', 'filters', 'entity-map', 'transformation', 'status-pairs'].includes(mode)
        ? viewportWidth > 900
        : false
  const gap = 8
  if (horizontal) {
    const x1 = from.right + gap
    const x2 = to.left - gap
    const middle = (x1 + x2) / 2
    return `M ${x1} ${from.cy} H ${middle} V ${to.cy} H ${x2}`
  }
  const x1 = from.cx
  const y1 = from.bottom + gap
  const x2 = to.cx
  const y2 = to.top - gap
  if (viewportWidth <= 760 && ['state-map', 'architecture', 'branch'].includes(mode) && to.top > from.bottom) {
    const spine = Math.min(from.left, to.left) - 12
    return `M ${x1} ${y1} H ${spine} V ${to.cy} H ${to.left - gap}`
  }
  if (viewportWidth <= 760 && mode === 'convergence' && to.top > from.bottom) {
    const spine = Math.max(from.right, to.right) + 12
    const turn = y2 - 12
    return `M ${from.right + gap} ${from.cy} H ${spine} V ${turn} H ${x2} V ${y2}`
  }
  const middle = (y1 + y2) / 2
  return `M ${x1} ${y1} V ${middle} H ${x2} V ${y2}`
}

export function DiagramWires({ rootRef, edges, mode, visible, reduced }: {
  rootRef: RefObject<HTMLDivElement | null>
  edges: DiagramEdge[]
  mode: string
  visible: boolean
  reduced: boolean
}) {
  const markerId = `${useId().replace(/:/g, '')}-diagram-arrow`
  const [drawing, setDrawing] = useState<{ width: number; height: number; paths: DrawnEdge[] }>({ width: 0, height: 0, paths: [] })

  useEffect(() => {
    const root = rootRef.current
    if (!root || !edges.length) return
    let active = true
    const nodes = [...root.querySelectorAll<HTMLElement>('[data-diagram-node]')]
    const measure = () => {
      if (!active) return
      const byId = new Map(nodes.map((node) => [node.dataset.diagramNode, layoutBox(node, root)]))
      const paths = edges.flatMap(({ from, to }, index) => {
        const start = byId.get(from)
        const end = byId.get(to)
        return start && end ? [{ key: `${from}-${to}-${index}`, path: wirePath(start, end, mode, window.innerWidth) }] : []
      })
      setDrawing({ width: root.clientWidth, height: root.clientHeight, paths })
    }
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(root)
    nodes.forEach((node) => observer.observe(node))
    window.addEventListener('resize', measure)
    void document.fonts.ready.then(measure)
    return () => {
      active = false
      observer.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [rootRef, edges, mode])

  if (!drawing.paths.length) return null
  return <svg className="case-diagram-wires" viewBox={`0 0 ${drawing.width} ${drawing.height}`}
    width={drawing.width} height={drawing.height} aria-hidden="true">
    <defs>
      <marker id={markerId} viewBox="0 0 8 8" markerWidth="8" markerHeight="8"
        refX="7" refY="4" orient="auto" markerUnits="userSpaceOnUse">
        <path d="M1 1 7 4 1 7" fill="none" stroke="currentColor" strokeWidth="1.6"
          strokeLinecap="round" strokeLinejoin="round" />
      </marker>
    </defs>
    {drawing.paths.map((edge, index) => <motion.path key={edge.key} d={edge.path}
      fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
      markerEnd={`url(#${markerId})`} initial={false}
      animate={{ pathLength: reduced || visible ? 1 : 0, opacity: reduced || visible ? 1 : 0 }}
      transition={{ duration: 0.42, delay: visible && !reduced ? index * 0.1 : 0, ease: [0.22, 1, 0.36, 1] }} />)}
  </svg>
}
