import { SectionHeader } from '../ui/SectionHeader'
import { AnimIn } from '../ui/AnimIn'

const STEPS = [
  { num: '01', title: 'It watches silently.', desc: 'After one-time setup, a git hook runs after every commit. Nothing else to do.' },
  { num: '02', title: 'It finds the pattern.', desc: 'Once the same mistake appears 3 times, DriftLens names it and writes a rule.' },
  { num: '03', title: 'It opens a PR.', desc: 'A draft PR updates your CLAUDE.md, .cursorrules, and SKILL.md. You review and merge.' },
  { num: '04', title: 'The AI learns.', desc: 'Next time your AI sees that file, the rule is already in context. The mistake stops happening.' },
  { num: '05', title: 'You see the results.', desc: 'Fewer corrections. Less time wasted. Real dollar numbers showing whether it\'s working.' },
]

export default function HowItWorks() {
  return (
    <section className="section" id="how-it-works">
      <div className="container--narrow">
        <SectionHeader
          eyebrow="How DriftLens Works"
          title="Set it up once. Let it run."
          sub="After a 30-second install, DriftLens handles everything in the background. You keep coding exactly the way you do now."
        />
        <div className="steps">
          {STEPS.map((s, i) => (
            <AnimIn key={i} delay={i * 0.08}>
              <div className="step">
                <div className="step__number">{s.num}</div>
                <div className="step__content">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            </AnimIn>
          ))}
        </div>
      </div>
    </section>
  )
}