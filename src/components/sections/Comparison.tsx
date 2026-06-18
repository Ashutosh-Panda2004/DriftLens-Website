import { SectionHeader } from '../ui/SectionHeader'
import { AnimIn } from '../ui/AnimIn'

const ROWS: [string, boolean, boolean, boolean, boolean][] = [
  ['Git delta + skill file update',      true,  true,  false, false],
  ['Re-prompt + struggle chain capture', true,  false, false, false],
  ['Dollar ROI measurement',             true,  false, false, false],
  ['Predictive failure prevention',      true,  false, false, false],
  ['Reason taxonomy + impact ranking',   true,  false, false, false],
  ['Meta-pattern + contradiction detect',true,  false, false, false],
  ['Conflict-aware, never-nag proposals',true,  false, false, false],
  ['Org-wide rule registry',             true,  false, false, false],
  ['Correction-to-test synthesis (CI)',  true,  false, false, false],
  ['Causal rule effectiveness ledger',   true,  false, false, false],
  ['Cross-agent quality comparison',     true,  false, false, false],
  ['Model regression detection',         true,  false, false, false],
  ['Per-rule token ROI',                 true,  false, false, false],
  ['Works with 7+ agents',               true,  false, false, false],
  ['Executive ROI reporting',            true,  false, false, false],
] as const

export default function Comparison() {
  return (
    <section className="section" id="comparison">
      <div className="container">
        <SectionHeader
          eyebrow="How It Compares"
          title="Nothing else does all of this."
          sub="Other tools do one thing — train a skill, show a metric, or remember a fact. DriftLens closes the whole loop, from the first correction to the proven result."
        />
        <AnimIn>
          <div className="comparison">
            <table>
              <thead>
                <tr>
                  <th>Capability</th>
                  <th style={{ color: 'var(--accent-light)' }}>DriftLens</th>
                  <th>SkillOpt</th>
                  <th>Copilot Metrics</th>
                  <th>Hermes</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, i) => {
                  const [cap, ...vals] = row
                  return (
                    <tr key={i} className={i < 4 ? 'comparison__featured-row' : ''}>
                      <td className={i < 4 ? 'comparison__featured-label' : ''}>{cap}</td>
                      {vals.map((v, j) => (
                        <td key={j} className={v ? 'check' : 'cross'}>{v ? 'Yes' : '—'}</td>
                      ))}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </AnimIn>
      </div>
    </section>
  )
}