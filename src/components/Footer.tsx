import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <Link to="/" className="footer-logo">drift<span>lens</span></Link>
          <span className="footer-meta">MIT License</span>
        </div>
        <div className="footer-links">
          <a href="https://github.com/Ashutosh-Panda2004/DriftLens" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.npmjs.com/package/driftlens" target="_blank" rel="noreferrer">npm</a>
          <Link to="/setup">Docs</Link>
        </div>
      </div>
    </footer>
  )
}
