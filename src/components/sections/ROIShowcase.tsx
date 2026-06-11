import { SectionHeader } from '../ui/SectionHeader'
import { AnimIn } from '../ui/AnimIn'

export default function ROIShowcase() {
  return (
    <section className="section" id="roi">
      <div className="container">
        <SectionHeader
          eyebrow="ROI"
          title={<>Does your AI tool actually<br />save you time?</>}
          sub="DriftLens gives you a real answer — time saved vs time spent fixing mistakes, converted to dollars. Finally a number you can show leadership."
        />
        <div className="roi-grid-inner" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
          <AnimIn>
            <div className="roi-card">
              <div className="roi-card__header">
                <div className="roi-card__header-dot" />
                AI PRODUCTIVITY LEDGER — JUNE 2026
              </div>
              <div className="roi-card__row">
                <span className="roi-card__label">Time saved by AI generation</span>
                <span className="roi-card__value roi-card__value--green">+47.3 hrs</span>
              </div>
              <div className="roi-card__row">
                <span className="roi-card__label">Time lost to corrections</span>
                <span className="roi-card__value roi-card__value--red">-12.1 hrs</span>
              </div>
              <div className="roi-card__row">
                <span className="roi-card__label">AI tool monthly spend</span>
                <span className="roi-card__value">$769</span>
              </div>
              <div className="roi-card__row">
                <span className="roi-card__label">Net value generated</span>
                <span className="roi-card__value roi-card__value--green">$4,020</span>
              </div>
              <div className="roi-card__total">
                <span className="roi-card__total-label">NET ROI THIS MONTH</span>
                <span className="roi-card__total-value">$2,992</span>
              </div>
            </div>
          </AnimIn>
          <AnimIn delay={0.15}>
            <div className="roi-card">
              <div className="roi-card__header">
                <div className="roi-card__header-dot" style={{ background: 'var(--accent)' }} />
                CONTEXT ECONOMICS — PER-RULE ROI
              </div>
              <div className="roi-card__row">
                <span className="roi-card__label">"Use service layer singletons"</span>
                <span className="roi-card__value roi-card__value--green">1,543x ROI</span>
              </div>
              <div className="roi-card__row">
                <span className="roi-card__label">"Import from @/services"</span>
                <span className="roi-card__value roi-card__value--green">890x ROI</span>
              </div>
              <div className="roi-card__row">
                <span className="roi-card__label">"Use TanStack Query"</span>
                <span className="roi-card__value">42x ROI</span>
              </div>
              <div className="roi-card__row">
                <span className="roi-card__label">"Never use jQuery" (2019 rule)</span>
                <span className="roi-card__value roi-card__value--red">0x — archive this</span>
              </div>
              <div className="roi-card__total">
                <span className="roi-card__total-label">Dead-weight rules found</span>
                <span className="roi-card__total-value" style={{ color: 'var(--amber)' }}>4 rules</span>
              </div>
            </div>
          </AnimIn>
        </div>
      </div>
    </section>
  )
}