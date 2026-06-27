import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import { useLanguage } from '../../hooks/useLanguage'

const navItems = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'events', label: 'Events', path: '/events' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'donation', label: 'Donation', path: '/donation' },
  { id: 'gallery', label: 'Gallery', path: '/gallery' },
  { id: 'contact', label: 'Contact', path: '/contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { language, toggleLanguage } = useLanguage()

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <NavLink to="/" className="brand">
          <span className="brand-mark">
            <img src="https://shreemhasobadevasthan.org/wp-content/uploads/2023/03/Logo-1.png" alt="Shree Mhasoba Devasthan Logo" />
          </span>
          <div>
            <p className="brand-name">Mhasoba Devasthan</p>
            <p className="brand-tag">Temple trust dedicated to seva and tradition</p>
          </div>
        </NavLink>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button 
            className="language-toggle" 
            onClick={toggleLanguage}
            style={{
              padding: '0.5rem 0.75rem',
              backgroundColor: '#f97316',
              color: 'white',
              border: 'none',
              borderRadius: '0.375rem',
              fontWeight: '600',
              fontSize: '0.875rem',
              cursor: 'pointer',
            }}
          >
            {language === 'en' ? 'मराठी' : 'English'}
          </button>

          <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
