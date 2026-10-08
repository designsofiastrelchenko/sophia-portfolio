import { Children, cloneElement, isValidElement, type ReactNode } from 'react'
import { bindShortWords } from '../lib/typography'

/** Format rendered copy only; props, assets, identifiers and data remain untouched. */
export function Typography({ children }: { children: ReactNode }) {
  const format = (nodes: ReactNode): ReactNode => Children.map(nodes, node => {
    if (typeof node === 'string') return bindShortWords(node)
    if (!isValidElement<{ children?: ReactNode }>(node) || !node.props.children || node.type === 'code' || node.type === 'pre') return node
    return cloneElement(node, { children: format(node.props.children) })
  })
  return <>{format(children)}</>
}
