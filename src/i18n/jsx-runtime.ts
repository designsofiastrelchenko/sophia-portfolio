import { createElement, Fragment, type ElementType, type ReactNode } from 'react'
import { jsx as reactJsx, jsxs as reactJsxs, type JSX } from 'react/jsx-runtime'
import { useLocale } from './locale'
import { isMotionComponent } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'
export { Fragment }
export type { JSX }
const types = new Map<unknown, ElementType>()
const copyProps = ['aria-label', 'aria-description', 'aria-valuetext', 'alt', 'title', 'placeholder', 'data-label']
export function localizedType(type: ElementType): ElementType {
  // Preserve component identity: routers and presence systems inspect their children.
  // Translate only the final DOM boundary (including Motion's DOM components).
  if (typeof type !== 'string' && type !== Link && type !== NavLink && !isMotionComponent(type)) return type
  let localized = types.get(type)
  if (!localized) {
    localized = function LocalizedElement(props: Record<string, unknown>) {
      const { t } = useLocale()
      const children = (value: ReactNode): ReactNode => typeof value === 'string' ? t(value) : Array.isArray(value) ? value.map(children) : value
      const next = { ...props }
      if (type !== 'code' && type !== 'pre') next.children = children(props.children as ReactNode)
      for (const name of copyProps) if (typeof props[name] === 'string') next[name] = t(props[name] as string)
      const content = next.children as ReactNode
      return createElement(type, next, ...(Array.isArray(content) ? content : [content]))
    }
    types.set(type, localized)
  }
  return localized
}
export const jsx: typeof reactJsx = (type, props, key) => reactJsx(type === Fragment ? type : localizedType(type), props, key)
export const jsxs: typeof reactJsxs = (type, props, key) => reactJsxs(type === Fragment ? type : localizedType(type), props, key)

