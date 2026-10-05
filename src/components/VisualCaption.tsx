import type { ReactNode } from 'react'

export function VisualCaption({ children, action }: { children: ReactNode; action?: ReactNode }) {
  return (
    <figcaption className="visual-caption">
      <span className="visual-caption-text">{children}</span>
      {action}
    </figcaption>
  )
}
