import { useState, useEffect } from 'react'

const NAV_LINKS: [string, string][] = [
  ['#features', 'Features'],
  ['#signals', 'How It Works'],
  ['#demo', 'Demo'],
  ['#roi', 'ROI'],
  ['#comparison', 'Compare'],
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const h = () => { if (window.innerWidth > 900) setMenuOpen(false) }
    window.addEventListener('resize', h)
    return () => window.removeEventListener('resize', h)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="nav__inner">
          <div className="nav__left">
            <a href="#" className="nav__logo" onClick={close}>
              <span className="nav__logo-drift">Drift</span>
              <span className="nav__logo-lens">Lens</span>
            </a>
            {/* Desktop links */}
            <ul className="nav__links">
              {NAV_LINKS.map(([href, label]) => (
                <li key={href}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </div>

          <div className="nav__right">
            {/* Desktop GitHub CTA */}
            <a
              href="https://github.com/Ashutosh-Panda2004/DriftLens"
              target="_blank"
              rel="noreferrer"
              className="nav__github nav__github--desktop"
            >
              <GitHubIcon />
              GitHub
            </a>

            {/* Mobile hamburger */}
            <button
              className={`nav__hamburger ${menuOpen ? 'nav__hamburger--open' : ''}`}
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="nav__drawer">
          <ul className="nav__drawer-links">
            {NAV_LINKS.map(([href, label]) => (
              <li key={href}>
                <a href={href} onClick={close}>{label}</a>
              </li>
            ))}
          </ul>
          <a
            href="https://github.com/Ashutosh-Panda2004/DriftLens"
            target="_blank"
            rel="noreferrer"
            className="nav__drawer-github"
            onClick={close}
          >
            <GitHubIcon />
            View on GitHub
          </a>
        </div>
      )}
    </>
  )
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" style={{ flexShrink: 0 }}>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
    </svg>
  )
}
