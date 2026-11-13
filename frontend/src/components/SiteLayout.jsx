import { Link, Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'

const currentYear = new Date().getFullYear()
const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Stack', to: '/skills' },
  { label: 'Projects', to: '/projects' },
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
        <Link className="footer-wordmark" to="/">Francis<span>.dev</span></Link>
        <nav className="footer-nav" aria-label="Footer navigation">
          {navigation.map(({ label, to }) => <Link key={to} to={to}>{label}</Link>)}
        </nav>
        <span className="footer-copy">© {currentYear} Jhon Francis Dela Cruz. All rights reserved.</span>
      </footer>
    </div>
  )
}
