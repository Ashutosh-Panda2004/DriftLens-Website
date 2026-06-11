export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span style={{ color: 'var(--text-bright)', fontWeight: 700 }}>Drift</span>
          <span style={{ color: 'var(--accent-light)', fontWeight: 700 }}>Lens</span>
          <span style={{ color: 'var(--text-muted)', marginLeft: '0.75rem' }}>v0.2 — MIT License — Open Source</span>
        </div>
        <ul className="footer__links">
          <li><a href="https://github.com/Ashutosh-Panda2004/DriftLens" target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a href="https://github.com/Ashutosh-Panda2004/DriftLens/blob/main/docs/HOW-IT-WORKS.md" target="_blank" rel="noreferrer">Docs</a></li>
          <li><a href="https://github.com/Ashutosh-Panda2004/DriftLens/issues" target="_blank" rel="noreferrer">Issues</a></li>
        </ul>
      </div>
    </footer>
  )
}