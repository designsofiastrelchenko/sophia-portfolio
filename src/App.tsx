import { ProfileSidebar } from './components/ProfileSidebar'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Work } from './sections/Work'

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="app-shell">
        <ProfileSidebar />
        <main id="main-content" className="portfolio-content" tabIndex={-1}>
          <Work />
          <About />
          <Contact />
        </main>
      </div>
    </>
  )
}

export default App
