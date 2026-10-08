import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="site-footer" data-reveal>
      <span className="site-footer-credit">©2026</span>
      <Link to="/copyright">Авторские права</Link>
    </footer>
  )
}
