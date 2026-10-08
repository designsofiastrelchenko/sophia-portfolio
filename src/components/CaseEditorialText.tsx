import { motion } from 'framer-motion'
import { useMotionSystem } from '../lib/motion'
import type { ReactNode } from 'react'
import type { CaseNode } from '../data/caseContent'

/** A stable reading column is the default; emphasis never changes the reading axis. */
export function CaseEditorialText({ nodes, children, section, width }: {
  nodes: CaseNode[]; children: ReactNode; section?: string; width?: 'narrow' | 'regular' | 'wide'
}) {
  const { reveal } = useMotionSystem()
  const standalone = nodes.every(node => node.kind === 'heading')
  const reflection = nodes.some(node => node.kind === 'heading' && node.text.startsWith('Рефлексия'))
  const textWidth = width ?? (reflection || section === 'final' ? 'wide' : 'regular')
  return <motion.div {...reveal(reflection ? 'fade' : 'soft', .06)} className={`${standalone ? 'case-standalone-heading' : 'case-text-card'} case-editorial-text case-text--${textWidth} case-layout--${reflection ? 'statement' : 'reading'}`}>
    {children}
  </motion.div>
}
