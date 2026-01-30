import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/articles', label: 'Articles' },
  { path: '/videos', label: 'Videos' },
  { path: '/ai-products', label: 'AI Products' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <Link to="/" className="navbar__brand" aria-label="Hernon - Home">
          <span className="navbar__logo">H</span>
          <span className="navbar__brand-text">Hernon</span>
        </Link>

        <button
          className={`navbar__toggle ${isMenuOpen ? 'navbar__toggle--active' : ''}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          <span className="navbar__toggle-bar"></span>
          <span className="navbar__toggle-bar"></span>
          <span className="navbar__toggle-bar"></span>
        </button>

        <ul 
          className={`navbar__menu ${isMenuOpen ? 'navbar__menu--open' : ''}`}
          role="menubar"
        >
          {navLinks.map((link) => (
            <li key={link.path} className="navbar__item" role="none">
              <Link
                to={link.path}
                className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
                role="menuitem"
              >
                {link.label}
                <span className="navbar__link-indicator"></span>
              </Link>
            </li>
          ))}
        </ul>

        <div 
          className={`navbar__overlay ${isMenuOpen ? 'navbar__overlay--visible' : ''}`}
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        ></div>
      </div>
    </nav>
  )
}

export default Navbar
