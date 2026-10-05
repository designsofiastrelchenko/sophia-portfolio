import { useLayoutEffect, useRef } from 'react'
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'
import { ProfileSidebar } from './components/ProfileSidebar'
import { Work } from './sections/Work'
import { ProjectPage } from './pages/ProjectPage'
import { Footer } from './components/Footer'
import { profile } from './data/portfolio'
import { ScrollReveals } from './components/ScrollReveals'
import { MobileHeader } from './components/MobileHeader'
import { CopyrightPage } from './pages/CopyrightPage'
import { useCaseScrollTracking, usePageTracking } from './hooks/useAnalyticsTracking'

function AnalyticsTracking() {
  usePageTracking()
  useCaseScrollTracking()
  return null
}

function ScrollToPage() {
  const { pathname, hash } = useLocation()
  const previousPath = useRef<string | null>(null)
  useLayoutEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      const caseNavigation = target?.closest('.case-shell')?.querySelector('.case-navigation')
      if (target && caseNavigation) {
        const mobile = window.matchMedia('(max-width: 760px)').matches
        const headerHeight = mobile
          ? document.querySelector('.mobile-header')?.getBoundingClientRect().height ?? 0
          : 0
        const navigationTop = mobile ? headerHeight + 8 : 12
        const top = window.scrollY + target.getBoundingClientRect().top -
          navigationTop - caseNavigation.getBoundingClientRect().height - 16
        window.scrollTo({ top, behavior: 'instant' })
      } else target?.scrollIntoView({ behavior: 'instant' })
    } else if (previousPath.current !== pathname)
      window.scrollTo({ top: 0, behavior: 'instant' })
    if (pathname === '/') document.title = `${profile.name} — ${profile.role}`
    if (previousPath.current !== null && previousPath.current !== pathname) {
      document.getElementById('main-content')?.focus({ preventScroll: true })
    }
    previousPath.current = pathname
  }, [pathname, hash])
  return null
}
function HomePage() {
  return (
    <div className="home-shell">
      <ProfileSidebar />
      <main id="main-content" className="portfolio-content" tabIndex={-1}>
        <Work />
        <Footer />
      </main>
    </div>
  )
}
function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <a className="skip-link" href="#main-content">
        Перейти к содержимому
      </a>
      <ScrollToPage />
      <AnalyticsTracking />
      <ScrollReveals />
      <MobileHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="/copyright" element={<CopyrightPage />} />
        <Route
          path="*"
          element={
            <main className="not-found" id="main-content" tabIndex={-1}>
              <h1>Страница не найдена</h1>
              <Link className="button" to="/">
                На главную
              </Link>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
export default App
