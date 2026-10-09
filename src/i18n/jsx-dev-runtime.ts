import { jsxDEV as reactJsxDEV } from 'react/jsx-dev-runtime'
import { localizedType, Fragment } from './jsx-runtime'
export { Fragment }
export const jsxDEV: typeof reactJsxDEV = (type, props, key, staticChildren, source, self) =>
  reactJsxDEV(type === Fragment ? type : localizedType(type), props, key, staticChildren, source, self)
export type { JSX } from './jsx-runtime'
