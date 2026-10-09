import { useLocale } from '../i18n/locale'
import { useEffect } from 'react'
import { ExperienceContent, ProfileContact } from '../components/ProfileSidebar'
import { profile } from '../data/portfolio'

export function ExperiencePage() {
  const { t } = useLocale()
  useEffect(() => { document.title = `${t('Опыт')} — ${t(profile.name)}` }, [t])
  return <div className="home-shell experience-page">
    <main id="main-content" className="portfolio-content" tabIndex={-1}>
      <ExperienceContent />
      <ProfileContact />
    </main>
  </div>
}
