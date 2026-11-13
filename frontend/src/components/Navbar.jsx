import { useCallback, useEffect, useRef, useState } from 'react'
import { Eye, Moon, Sun } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import api from '../services/api.js'

const navigation = [
  { label: 'Home', to: '/', end: true },
  { label: 'About', to: '/about' },
  { label: 'Stack', to: '/skills' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

function newVisitorId() {
  try {
    const saved = window.sessionStorage.getItem('liveId')
    if (saved) return saved
    const id = window.crypto?.randomUUID?.() || `v${Date.now().toString(36)}${Math.random().toString(36).slice(2, 12)}`
    window.sessionStorage.setItem('liveId', id)
    return id
  } catch {
    return `v${Date.now().toString(36)}${Math.random().toString(36).slice(2, 12)}`
  }
}

export default function Navbar() {
  const navRef = useRef(null)
  const menuOpenRef = useRef(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [theme, setTheme] = useState(() => {
    try {
      const saved = window.localStorage.getItem('theme')
      return saved === 'charcoal' || saved === 'light' ? 'charcoal' : 'dark'
    } catch {
      return 'dark'
    }
  })
  const [visitorCount, setVisitorCount] = useState('…')
  const [liveCount, setLiveCount] = useState(null)

  const closeMenu = useCallback(() => {
    menuOpenRef.current = false
    setMenuOpen(false)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      window.localStorage.setItem('theme', theme)
    } catch {
      // Theme still works for this visit when storage is unavailable.
    }
  }, [theme])

  useEffect(() => {
    let lastScrollY = window.scrollY
    let frame = 0

    function updateNav() {
      frame = 0
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 20)

      if (currentScrollY <= 40 || menuOpenRef.current) {
        setIsHidden(false)
        lastScrollY = currentScrollY
        return
      }

      const difference = currentScrollY - lastScrollY
      if (difference > 8) {
        setIsHidden(true)
        lastScrollY = currentScrollY
      } else if (difference < -8) {
        setIsHidden(false)
        lastScrollY = currentScrollY
      }
    }

    function onScroll() {
      if (!frame) frame = window.requestAnimationFrame(updateNav)
    }

    function onPointerMove(event) {
      if (event.clientY <= 50) setIsHidden(false)
    }

    function onResize() {
      if (window.innerWidth > 1024) closeMenu()
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('mousemove', onPointerMove, { passive: true })
    window.addEventListener('resize', onResize)
    updateNav()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onPointerMove)
      window.removeEventListener('resize', onResize)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [closeMenu])

  useEffect(() => {
    function onDocumentClick(event) {
      if (!navRef.current?.contains(event.target)) closeMenu()
    }
    function onKeyDown(event) {
      if (event.key === 'Escape') closeMenu()
    }
    function onPopState() {
      closeMenu()
    }

    document.addEventListener('click', onDocumentClick)
    document.addEventListener('keydown', onKeyDown)
    window.addEventListener('popstate', onPopState)
    return () => {
      document.removeEventListener('click', onDocumentClick)
      document.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('popstate', onPopState)
    }
  }, [closeMenu])

  useEffect(() => {
    let active = true
    const visitorId = newVisitorId()
    const refreshTotal = async () => {
      try {
        const { data } = await api.get('/views')
        if (active && typeof data.visitors === 'number') setVisitorCount(formatVisitorCount(data.visitors))
      } catch {
        if (active) setVisitorCount((count) => count === '…' ? '—' : count)
      }
    }

    const heartbeat = async () => {
      if (document.hidden) return
      try {
        const { data } = await api.post('/live', { id: visitorId })
        if (active && typeof data.live === 'number') setLiveCount(data.live)
      } catch {
        if (active) setLiveCount(null)
      }
    }

    const leave = () => {
      const url = `${(api.defaults.baseURL || '/api').replace(/\/$/, '')}/live`
      const body = new Blob([JSON.stringify({ id: visitorId, leave: true })], { type: 'application/json' })
      if (navigator.sendBeacon?.(url, body)) return
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: visitorId, leave: true }),
        keepalive: true,
      }).catch(() => {})
    }

    const onVisibilityChange = () => {
      if (document.hidden) leave()
      else heartbeat()
    }

    refreshTotal()
    heartbeat()
    const totalTimer = window.setInterval(refreshTotal, 60_000)
    const liveTimer = window.setInterval(heartbeat, 20_000)
    document.addEventListener('visibilitychange', onVisibilityChange)
    window.addEventListener('pagehide', leave)

    return () => {
      active = false
      window.clearInterval(totalTimer)
      window.clearInterval(liveTimer)
      document.removeEventListener('visibilitychange', onVisibilityChange)
      window.removeEventListener('pagehide', leave)
    }
  }, [])

  const toggleMenu = () => {
    const nextOpen = !menuOpen
    menuOpenRef.current = nextOpen
    setMenuOpen(nextOpen)
  }

  const nextTheme = theme === 'dark' ? 'charcoal' : 'dark'

  return (
    <nav
      ref={navRef}
      className={`nav${isScrolled ? ' is-scrolled' : ''}${isHidden ? ' nav--hidden' : ''}${menuOpen ? ' nav--open' : ''}`}
      aria-label="Main navigation"
      id="mainNav"
    >
      <Link className="nav__logo" to="/" onClick={closeMenu}>Francis.dev</Link>

      <div className="nav__right">
        <span className="nav__views" title="Total visitors" aria-live="polite">
          <Eye className="nav__viewsIcon" size={16} aria-hidden="true" />
          <span id="views">{visitorCount}</span>
          <span className="nav__live" id="liveWrap" title="Visitors browsing right now" hidden={liveCount === null}>
            <span className="nav__liveDot" aria-hidden="true" />
            <span id="live">{liveCount ?? 0}</span><span className="nav__liveLabel"> live</span>
          </span>
        </span>

        <ul className="nav__links" id="navLinks">
          {navigation.map(({ label, to, end }) => (
            <li key={to}>
              <NavLink to={to} end={end} onClick={closeMenu} className={({ isActive }) => isActive ? 'is-active' : undefined}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className="theme-toggle"
          type="button"
          aria-label={theme === 'dark' ? 'Switch to charcoal theme' : 'Switch to black theme'}
          title={theme === 'dark' ? 'Switch to charcoal theme' : 'Switch to black theme'}
          onClick={() => setTheme(nextTheme)}
        >
          {theme === 'dark' ? <Sun className="theme-toggle__sun" size={18} aria-hidden="true" /> : <Moon className="theme-toggle__moon" size={18} aria-hidden="true" />}
        </button>

        <button
          className="nav__burger"
          id="navBurger"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="navLinks"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

function formatVisitorCount(count) {
  if (count < 1000) return String(count)
  const units = [[1e9, 'B'], [1e6, 'M'], [1e3, 'K']]
  for (const [size, suffix] of units) {
    if (count >= size) {
      const value = Math.floor((count / size) * 10) / 10
      return `${String(value).replace(/\.0$/, '')}${suffix}`
    }
  }
  return String(count)
}
