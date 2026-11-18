import { Link, Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'

const currentYear = new Date().getFullYear()
const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Work', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

export default function SiteLayout() {
  return (
    <div className="site-shell">
      <Navbar />

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <nav className="footer-nav" aria-label="Footer navigation">
            {navigation.map(({ label, to }) => (
              <Link key={to} to={to}>{label}</Link>
            ))}
          </nav>
          <span className="footer-copy">© All rights reserved by Jhon Francis Dela Cruz</span>
        </div>
      </footer>
    </div>
  )
}
