import { motion } from 'framer-motion'
import { AnimIn } from '../ui/AnimIn'
import { SectionHeader } from '../ui/SectionHeader'

interface FeatureCard {
  tag: string
  tagColor: string
  headline: string
  why: string
  snippet: { label: string; code: string; isGood?: boolean }[]
  outcome: string
}

const CARDS: FeatureCard[] = [
  {
    tag: 'LEARN',
    tagColor: 'var(--accent-light)',
    headline: 'The AI made the same mistake again.',
    why: 'DriftLens spots the repeat, finds the pattern, and opens a PR to update your skill files so the fix sticks for good.',
    snippet: [
      { label: 'AI wrote', code: "const data = await fetch('/api/users')", isGood: false },
      { label: 'You committed', code: 'const data = await userService.getAll()', isGood: true },
      { label: 'DriftLens adds to CLAUDE.md', code: '- NEVER call fetch() in components.\n  ALWAYS use the service layer.', isGood: true },
    ],
    outcome: 'Next session, the AI already knows.',
  },
  {
    tag: 'PREVENT',
    tagColor: '#a78bfa',
    headline: 'Stop the mistake before it happens.',
    why: 'An MCP server injects the top file-specific rules into the AI\'s context before it writes a line of code. The correction loop never starts.',
    snippet: [
      { label: 'Opening AuthService.ts: DriftLens injects top constraints', code: '1. [92%] use authService singleton\n2. [88%] import from @/services, not ../\n3. [81%] never use new AuthService()', isGood: true },
      { label: 'AI output (no correction needed)', code: 'import { authService } from \'@/services\'\nauthService.login(credentials)', isGood: true },
    ],
    outcome: '11 corrections avoided last month.',
  },
  {
    tag: 'PRIORITISE',
    tagColor: 'var(--accent-light)',
    headline: 'Which mistake should you fix first?',
    why: 'Every correction is tagged by reason and ranked by impact. A weekly security miss outranks a style nit seen twice.',
    snippet: [
      { label: 'driftlens analyse', code: '[impact 91% · security]   unsanitised-sql-input  · 14x\n[impact 64% · architecture] fetch-in-component   · 9x\n[impact 28% · style]      import-ordering        · 3x', isGood: true },
    ],
    outcome: 'Fix what actually matters, in order.',
  },
  {
    tag: 'DIAGNOSE',
    tagColor: 'var(--cyan)',
    headline: 'Twelve symptoms, one root cause.',
    why: 'DriftLens groups related mistakes into one systemic theme, and flags when two developers correct the AI in opposite directions.',
    snippet: [
      { label: 'driftlens analyse: meta-pattern', code: 'THEME: data-access-layer (security)\n  → 4 patterns · 31 corrections\n  Root cause: AI does not know the repository layer', isGood: true },
      { label: 'driftlens unify --conflicts', code: '[!] src/api.ts: dev A says \'always async\',\n    dev B says \'keep it sync\' - align first', isGood: false },
    ],
    outcome: 'Address causes, not symptoms.',
  },
  {
    tag: 'SHARE',
    tagColor: 'var(--green-bright)',
    headline: 'Teach the whole org at once.',
    why: 'Export a top team\'s proven rules, import them anywhere, then turn them into Semgrep checks and tests so CI enforces them forever.',
    snippet: [
      { label: 'driftlens registry export --scope org', code: '[ok] Exported 23 proven rules to registry.json', isGood: true },
      { label: 'driftlens synth-test --out guards/', code: '[ok] Wrote 9 guards (semgrep + test stubs)\n    Regressions now caught by CI, not humans', isGood: true },
    ],
    outcome: 'Hard-won lessons, shared and enforced.',
  },
  {
    tag: 'MEASURE',
    tagColor: 'var(--green-bright)',
    headline: 'Is this actually saving time?',
    why: 'DriftLens tracks every correction and proves whether each rule truly cut mistakes, real dollar ROI you can show leadership.',
    snippet: [
      { label: 'driftlens roi', code: 'Time saved:    +47.3 hrs\nTime on fixes: -12.1 hrs\nNet value:     $4,020\nTool spend:    $769\n─────────────────────\nNET ROI:       $2,992  (3.9x)', isGood: true },
      { label: 'driftlens rules', code: 'high-value:  service-layer, saves $210/mo\ndead-weight: legacy-jquery, prune it', isGood: true },
    ],
    outcome: 'A real number, not a feeling.',
  },
  {
    tag: 'WATCH',
    tagColor: 'var(--amber)',
    headline: 'The model updated. Did it break anything?',
    why: 'When Sonnet 4 becomes Sonnet 5, fixed patterns can silently regress. DriftLens tracks each one and alerts you instantly.',
    snippet: [
      { label: 'driftlens regression', code: '[!] service-layer: +340% corrections\n    since model update on 2026-06-09\n    → Rule may need strengthening', isGood: false },
      { label: 'Fix: driftlens propose --regressed', code: '[ok] Stronger constraint added to CLAUDE.md\n[ok] Draft PR opened', isGood: true },
    ],
    outcome: 'Catch regressions before they compound.',
  },
]

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <SectionHeader
          eyebrow="What DriftLens Does"
          title={<>Capture. Analyse. Prevent. Prove.</>}
          sub="Seven everyday AI headaches, and how DriftLens handles each one automatically."
        />

        <div className="feat-cards">
          {CARDS.map((c, i) => (
            <AnimIn key={i} delay={i * 0.06}>
              <div className="feat-card">
                <div className="feat-card__top">
                  <span className="feat-card__tag" style={{ color: c.tagColor }}>{c.tag}</span>
                  <h3 className="feat-card__headline">{c.headline}</h3>
                  <p className="feat-card__why">{c.why}</p>
                </div>
                <div className="feat-card__snippets">
                  {c.snippet.map((s, j) => (
                    <div key={j} className={`feat-snippet ${s.isGood ? 'feat-snippet--good' : 'feat-snippet--bad'}`}>
                      <div className="feat-snippet__label">{s.label}</div>
                      <pre className="feat-snippet__code">{s.code}</pre>
                    </div>
                  ))}
                </div>
                <div className="feat-card__outcome">
                  <span className="feat-card__outcome-arrow">→</span>
                  {c.outcome}
                </div>
              </div>
            </AnimIn>
          ))}
        </div>
      </div>
    </section>
  )
}