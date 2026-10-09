import { createContext, useCallback, useContext } from 'react'
import { translate, type Locale } from './translate'
export const LOCALE_KEY = 'portfolio.locale'
export function savedLocale(): Locale {
  try { return localStorage.getItem(LOCALE_KEY) === 'en' ? 'en' : 'ru' } catch { return 'ru' }
}
export const LocaleContext = createContext({ locale: 'ru' as Locale, setLocale: (_locale: Locale) => {} })
export function useLocale() {
  const context = useContext(LocaleContext)
  const t = useCallback((text: string) => translate(text, context.locale), [context.locale])
  return { ...context, t }
}
