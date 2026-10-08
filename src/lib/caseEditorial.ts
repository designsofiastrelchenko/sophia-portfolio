import type { CaseNode } from '../data/caseContent'

export function isNarrativeLead(node: CaseNode) {
  return node.kind === 'paragraph' && node.text.length <= 180 && /:\s*$/.test(node.text)
}

export function audienceStatementLength(node: CaseNode) {
  if (node.kind !== 'paragraph' || !/^(Основными пользователями|Целевой аудиторией)/.test(node.text)) return 0
  const end = node.text.indexOf('. ')
  return end >= 0 ? end + 1 : node.text.length
}

/** Pair only the local explanation, never the chapter's introductory narrative. */
export function companionStart(nodes: CaseNode[]) {
  const headingIndex = nodes.findLastIndex(node => node.kind === 'heading')
  if (headingIndex >= 0) {
    const explanation = nodes.slice(headingIndex + 1)
    const length = explanation.reduce((sum, node) => sum + (node.kind === 'paragraph' ? node.text.length : node.kind === 'list' ? node.items.join(' ').length : 0), 0)
    if (length > 0 && length <= 520 && !nodes.some(node => node.kind === 'heading' && node.text.startsWith('Рефлексия'))) return headingIndex
  }
  return nodes.length && isNarrativeLead(nodes[nodes.length - 1]) ? nodes.length - 1 : null
}
