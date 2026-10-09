import { Fragment } from 'react'
import { bindShortWords } from '../lib/typography'
import { useLocale } from '../i18n/locale'

function MetaCross() {
  return (
    <svg className="meta-cross" viewBox="0 0 10 10" width="10" height="10" fill="none" aria-hidden="true" focusable="false">
      <path d="M2.1 2.1 7.9 7.9M7.9 2.1 2.1 7.9" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  )
}

export function MetaSeparatedText({ value, separator = 'dot' }: { value: string; separator?: 'dot' | 'slash' }) {
  const { t } = useLocale()
  const parts = value.split(separator === 'slash' ? /\s*\/\s*/ : /\s+[•·]\s+/).filter(Boolean)
  if (parts.length < 2) return bindShortWords(t(value))

  return (
    <span className="meta-separated">
      <span className="sr-only">{parts.join(', ')}</span>
      <span aria-hidden="true">
        {parts.map((part, index) => (
          <Fragment key={`${part}-${index}`}>
            {index > 0 ? <MetaCross /> : null}
            <span>{bindShortWords(part)}</span>
          </Fragment>
        ))}
      </span>
    </span>
  )
}
