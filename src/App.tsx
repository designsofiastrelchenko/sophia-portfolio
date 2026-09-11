import { useEffect, useRef } from 'react'
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

function ScrollToPage() {
  const { pathname, hash } = useLocation()
  const previousPath = useRef<string | null>(null)
  useEffect(() => {
    if (hash)
      document
        .getElementById(hash.slice(1))
        ?.scrollIntoView({ behavior: 'instant' })
    else if (previousPath.current !== pathname)
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
    <BrowserRouter>
      <a className="skip-link" href="#main-content">
        Перейти к содержимому
      </a>
      <ScrollToPage />
      <ScrollReveals />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
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
