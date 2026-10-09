import english from './en.json'
export type Locale = 'ru' | 'en'
export const normalizeCopy = (text: string) => text.replace(/[\u00a0\u202f]/g, ' ').replace(/\u2011/g, '-').replace(/\s+/g, ' ').trim().replace(/(?<!\.)\.$/, '')
const dictionary: Record<string, string> = english
export function translate(text: string, locale: Locale): string {
  if (locale === 'ru' || !/[А-Яа-яЁё]/.test(text)) return text
  const key = normalizeCopy(text)
  const result = dictionary[key]
  if (result !== undefined) return text.match(/^\s*/)?.[0] + result + text.match(/\s*$/)?.[0]
  // Accessibility labels contain a translated caption or product title.
  for (const prefix of ['Открыть изображение в полном размере:', 'Воспроизвести:', 'Приостановить:', 'Пауза:', 'Повторить:']) {
    if (key.startsWith(prefix)) return translate(prefix.slice(0, -1), locale) + ': ' + translate(key.slice(prefix.length).trim(), locale)
  }
  if (key.startsWith('Фото ')) return 'Photo of ' + translate(key.slice(5), locale)
  if (key.startsWith('Перейти к экрану ')) {
    const label = key.slice('Перейти к экрану '.length)
    const numbered = /^(\d+:\s*)(.*)$/.exec(label)
    return 'Go to screen ' + (numbered ? numbered[1] + translate(numbered[2], locale) : translate(label, locale))
  }
  if (key.includes(' — ')) return key.split(' — ').map(part => translate(part, locale)).join(' — ')
  if (/[→←↑↓↗]/.test(key)) return key.split(/([→←↑↓↗])/).map(part => translate(part, locale)).join('')
  return text
}
