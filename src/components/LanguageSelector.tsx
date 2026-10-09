import { useLocale } from '../i18n/locale'
import { motion } from 'framer-motion'
import { useAdaptivePress } from '../lib/useAdaptivePress'
export function LanguageSelector() {
  const { locale, setLocale } = useLocale()
  const press = useAdaptivePress()
  return <div className="language-selector" role="group" aria-label="Выбор языка">
    <motion.button {...press} type="button" lang="ru" aria-pressed={locale === 'ru'} onClick={() => setLocale('ru')}>RU</motion.button>
    <span aria-hidden="true">/</span>
    <motion.button {...press} type="button" lang="en" aria-pressed={locale === 'en'} onClick={() => setLocale('en')}>ENG</motion.button>
  </div>
}
