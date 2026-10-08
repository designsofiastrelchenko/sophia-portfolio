import { useEffect } from 'react'
import { ExperienceContent, ProfileContact } from '../components/ProfileSidebar'
import { profile } from '../data/portfolio'

export function ExperiencePage() {
  useEffect(() => { document.title = `Опыт — ${profile.name}` }, [])
  return <div className="home-shell experience-page">
    <main id="main-content" className="portfolio-content" tabIndex={-1}>
      <ExperienceContent />
      <ProfileContact />
    </main>
  </div>
}
