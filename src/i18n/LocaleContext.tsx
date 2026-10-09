/** @jsxImportSource react */
import { useCallback, useLayoutEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { translate, type Locale } from './translate'

import { LocaleContext, LOCALE_KEY, savedLocale } from './locale'

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, update] = useState(savedLocale)
  const metaCopy = useRef<{ element: HTMLMetaElement; ru: string }[] | null>(null)
  const readingPosition = useRef<{ element?: HTMLElement; top: number; scroll: number } | null>(null)
  const setLocale = useCallback((next: Locale) => {
    if (next === locale) return
    const line = (document.querySelector('.site-header')?.getBoundingClientRect().bottom ?? 0) + 24
    const candidates = Array.from(document.querySelectorAll<HTMLElement>(
      '.case-main h2, .case-main h3, .case-main p, .case-main li, .case-main [data-diagram-node], .case-main .case-media-stage, .copyright-document p, .copyright-document h2',
    ))
    const element = candidates.filter(element => {
      const rect = element.getBoundingClientRect()
      return rect.width > 0 && rect.bottom > line && rect.top < innerHeight
    }).sort((a, b) => Math.abs(a.getBoundingClientRect().top - line) - Math.abs(b.getBoundingClientRect().top - line))[0]
    readingPosition.current = { element, top: element?.getBoundingClientRect().top ?? 0, scroll: window.scrollY }
    try { localStorage.setItem(LOCALE_KEY, next) } catch { /* Storage may be disabled. */ }
    update(next)
  }, [locale])
  const value = useMemo(() => ({ locale, setLocale }), [locale, setLocale])
  useLayoutEffect(() => {
    document.documentElement.lang = locale
    metaCopy.current ??= Array.from(document.querySelectorAll<HTMLMetaElement>(
      'meta[name="description"], meta[property="og:title"], meta[property="og:description"], meta[property="og:site_name"], meta[property="og:image:alt"], meta[name="twitter:title"], meta[name="twitter:description"], meta[name="twitter:image:alt"]',
    )).map(element => ({ element, ru: element.content }))
    for (const { element, ru } of metaCopy.current) element.content = translate(ru, locale)
    document.querySelector<HTMLMetaElement>('meta[property="og:locale"]')?.setAttribute('content', locale === 'en' ? 'en_US' : 'ru_RU')
    const position = readingPosition.current
    if (position) {
      readingPosition.current = null
      const top = position.element?.isConnected
        ? window.scrollY + position.element.getBoundingClientRect().top - position.top
        : position.scroll
      window.scrollTo({ top, behavior: 'instant' })
    }
  }, [locale])
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}
