import { AnimIn } from '../ui/AnimIn'
import { SectionHeader } from '../ui/SectionHeader'

const SETUP_STEPS = [
  {
    title: 'Install DriftLens globally',
    code: 'npm install -g github:Ashutosh-Panda2004/DriftLens',
  },
  {
    title: 'Initialize your project',
    code: 'cd your-project\ndriftlens init',
  },
  {
    title: 'Start coding with AI',
    code: 'driftlens watch start  # optional: bracket sessions',
  },
  {
    title: 'Analyze and view results',
    code: 'driftlens analyse\ndriftlens dashboard',
  },
]

export default function SetupGuide() {
  return (
    <section id="setup" className="section" style={{ background: 'var(--bg-elevated)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <SectionHeader
          eyebrow="Getting Started"
          title="Setup in 4 steps"
          sub="Same process for VS Code, JetBrains, CLI, or any IDE. Run these commands in your terminal."
        />

        {/* Steps grid */}
        <AnimIn>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            padding: '0 1rem',
            maxWidth: '1100px',
            margin: '0 auto',
          }}>
            {SETUP_STEPS.map((step, idx) => (
              <AnimIn key={idx} delay={idx * 0.05}>
                <div>
                  {/* Step number and title */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'var(--accent-dim)',
                      color: 'var(--accent-light)',
                      fontWeight: 700,
                      fontSize: '0.875rem',
                      flexShrink: 0,
                    }}>
                      {idx + 1}
                    </div>
                    <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-bright)', margin: 0 }}>
                      {step.title}
                    </h3>
                  </div>

                  {/* Code block */}
                  <div style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.875rem',
                    fontFamily: 'var(--mono)',
                    fontSize: '0.75rem',
                    color: 'var(--text-mid)',
                    lineHeight: 1.8,
                    overflow: 'auto',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                  }}>
                    <code style={{ color: 'var(--accent-light)' }}>$ </code>
                    <span>{step.code}</span>
                  </div>
                </div>
              </AnimIn>
            ))}
          </div>
        </AnimIn>

        {/* Success message */}
        <AnimIn>
          <div style={{
            marginTop: '2.5rem',
            padding: '1.5rem 2rem',
            background: 'var(--green-dim)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            textAlign: 'center',
            maxWidth: '600px',
            margin: '2.5rem auto 0',
          }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-bright)', fontWeight: 600, margin: 0 }}>
              Ready to start. Use your AI tools as usual—DriftLens captures everything automatically.
            </p>
          </div>
        </AnimIn>
      </div>
    </section>
  )
}
