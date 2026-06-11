import { motion } from 'framer-motion'
import { AnimIn } from '../ui/AnimIn'
import { SectionHeader } from '../ui/SectionHeader'

interface Scenario {
  label: string
  labelColor: string
  heading: string
  body: string
  detail: string
}

const SCENARIOS: Scenario[] = [
  {
    label: 'You fix it. We remember it.',
    labelColor: 'var(--accent-light)',
    heading: 'Your AI keeps making the same mistake.',
    body: 'You tell it "use the service layer" for the fourteenth time. That instruction disappears the moment the session ends. DriftLens captures every correction — whether you edited the code yourself or typed it in chat — and finds the pattern.',
    detail: 'After 3+ occurrences, DriftLens writes the rule and opens a draft PR to your CLAUDE.md, .cursorrules, and SKILL.md. You review and merge. The AI never makes that mistake again.',
  },
  {
    label: 'Six messages to get it right.',
    labelColor: 'var(--cyan)',
    heading: 'Some mistakes take a fight to fix.',
    body: 'You sent six messages correcting the same file. The AI kept getting it almost right. Most tools would capture the last message. DriftLens captures all six and extracts every rule you stated across the conversation.',
    detail: 'A six-turn struggle becomes a complete constraint block in your skill file — all at once, automatically.',
  },
  {
    label: 'Block the mistake before it happens.',
    labelColor: '#a78bfa',
    heading: 'The AI is about to make a mistake you\'ve seen before.',
    body: 'DriftLens knows which mistakes are likely for each file — based on your own history. Before the AI generates anything, it injects the relevant rules into the AI context. The mistake simply never appears.',
    detail: 'No prompt engineering. No manual context pasting. Just fewer corrections.',
  },
  {
    label: 'Did that model update break something?',
    labelColor: 'var(--amber)',
    heading: 'A silent regression you wouldn\'t have caught.',
    body: 'AI providers update their models without warning. Rules that worked last week can stop working today. DriftLens tracks correction rates per pattern and alerts you when a model update breaks something your team already fixed.',
    detail: 'Plus a real dollar number showing exactly how much time AI tools are saving — and how much is being lost to corrections.',
  },
]

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <SectionHeader
          eyebrow="What DriftLens Does"
          title={<>Built for how developers<br />actually work with AI.</>}
          sub="Not a feature list. Four real situations every developer using AI code assistance runs into — and what DriftLens does about each one."
        />

        <div className="scenarios">
          {SCENARIOS.map((s, i) => (
            <AnimIn key={i} delay={i * 0.08}>
              <div className={`scenario-card ${i % 2 === 1 ? 'scenario-card--alt' : ''}`}>
                <div className="scenario-card__label" style={{ color: s.labelColor }}>
                  {s.label}
                </div>
                <h3 className="scenario-card__heading">{s.heading}</h3>
                <p className="scenario-card__body">{s.body}</p>
                <div className="scenario-card__detail">
                  <span className="scenario-card__detail-icon">→</span>
                  {s.detail}
                </div>
              </div>
            </AnimIn>
          ))}
        </div>
      </div>
    </section>
  )
}