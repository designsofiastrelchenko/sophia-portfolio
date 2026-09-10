import { profile } from '../data/portfolio'

export function Contact() {
  return (
    <footer id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="editorial-section contact-content">
        <h2 id="contact-title">Contact</h2>
        <div>
          <p className="contact-lead">Start a conversation.</p>
          <div className="footer-contact-links">
            <a className="primary-link" href={profile.telegram} aria-label="Contact me on Telegram">Telegram</a>
            <a className="text-link contact-email" href={profile.email}>Email</a>
          </div>
        </div>
      </div>
      <div className="footer-meta">
        <span>Sophia / Product Designer</span>
        <a className="text-link" href="#work">Back to work</a>
      </div>
    </footer>
  )
}
