import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const LINKS = [
  { to: '/', label: 'Overview', end: true },
  { to: '/how-it-works', label: 'How it works' },
  { to: '/setup', label: 'Setup' },
  { to: '/commands', label: 'Commands' },
  { to: '/compatibility', label: 'Compatibility' },
  { to: '/about', label: 'About' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
            drift<span>lens</span>
          </Link>

          <ul className="nav-links">
            {LINKS.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink to={to} end={end} className={({ isActive }) => isActive ? 'active' : ''}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="nav-right">
            <a
              href="https://github.com/Ashutosh-Panda2004/DriftLens"
              className="nav-gh"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <button
              className="nav-hamburger"
              onClick={() => setOpen(o => !o)}
              aria-label="Toggle menu"
            >
              {open ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </nav>

      <div className={`nav-mobile ${open ? 'open' : ''}`}>
        {LINKS.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={() => setOpen(false)}
          >
            {label}
          </NavLink>
        ))}
        <a
          href="https://github.com/driftlens/driftlens"
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
          style={{ marginTop: '0.5rem', color: 'var(--text)' }}
        >
          GitHub ↗
        </a>
      </div>
    </>
  )
}
