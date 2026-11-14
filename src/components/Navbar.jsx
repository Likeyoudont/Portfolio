import { useEffect, useState } from 'react'
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'
import { useActiveSection } from '../hooks/useActiveSection'
import './Navbar.css'

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
]

// Defined outside the component so the array keeps the same identity
// between renders (useActiveSection's effect depends on it).
const sectionIds = links.map((link) => link.id)

export default function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(sectionIds)

  // Adds a background to the navbar once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu with the Escape key.
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`navbar ${scrolled || menuOpen ? 'navbar--scrolled' : ''}`}>
      <nav className="container navbar__inner" aria-label="Main">
        <ul id="nav-menu" className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`navbar__link ${active === link.id ? 'navbar__link--active' : ''}`}
                aria-current={active === link.id ? 'true' : undefined}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <button
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>

          <button
            className="icon-btn navbar__burger"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="nav-menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>
    </header>
  )
}
