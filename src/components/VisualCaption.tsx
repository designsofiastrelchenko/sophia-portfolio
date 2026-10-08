import type { ReactNode } from 'react'
import { Typography } from './Typography'

export function VisualCaption({ children, action }: { children: ReactNode; action?: ReactNode }) {
  return (
    <figcaption className="visual-caption">
      <span className="visual-caption-text"><Typography>{children}</Typography></span>
      {action}
    </figcaption>
  )
}
