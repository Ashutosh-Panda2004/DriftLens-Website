import { AnimIn } from '../ui/AnimIn'

export default function CTA() {
  return (
    <section className="section cta-section">
      <div className="container">
        <AnimIn>
          <h2>Your corrections deserve to be permanent.</h2>
          <p>30-second install. No account. Works with the tools you already use.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '0.5rem' }}>
            <a href="https://github.com/Ashutosh-Panda2004/DriftLens" target="_blank" rel="noreferrer" className="btn btn--primary btn--large">
              Get Started Free
            </a>
            <a href="#demo" className="btn btn--secondary btn--large">Watch Demo</a>
          </div>
        </AnimIn>
      </div>
    </section>
  )
}