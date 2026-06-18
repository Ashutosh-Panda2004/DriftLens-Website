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
    why: 'You already fixed this. DriftLens saw it, found the pattern, and opens a PR to update your skill files — so the AI learns it permanently.',
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
    why: 'DriftLens runs an MCP server that injects a ranked, token-bounded set of file-specific rules into the AI context before any code is generated — and logs every injection to prove prevention works. The correction loop never starts.',
    snippet: [
      { label: 'Opening AuthService.ts — DriftLens injects top constraints', code: '1. [92%] use authService singleton\n2. [88%] import from @/services, not ../\n3. [81%] never use new AuthService()', isGood: true },
      { label: 'AI output (no correction needed)', code: 'import { authService } from \'@/services\'\nauthService.login(credentials)', isGood: true },
    ],
    outcome: '11 corrections avoided last month.',
  },
  {
    tag: 'PRIORITISE',
    tagColor: 'var(--accent-light)',
    headline: 'Which mistake should you fix first?',
    why: 'Every correction is auto-classified by reason — security, correctness, performance, architecture, and more — then patterns are ranked by an impact score blending frequency, recency, and severity. A weekly security miss outranks a stylistic nit seen twice.',
    snippet: [
      { label: 'driftlens analyse', code: '[impact 91% · security]   unsanitised-sql-input  — 14x\n[impact 64% · architecture] fetch-in-component   — 9x\n[impact 28% · style]      import-ordering        — 3x', isGood: true },
    ],
    outcome: 'Fix what actually matters, in order.',
  },
  {
    tag: 'DIAGNOSE',
    tagColor: 'var(--cyan)',
    headline: 'Twelve symptoms, one root cause.',
    why: 'Meta-pattern detection groups distinct patterns into systemic themes, while contradiction detection flags when two developers correct the AI in opposite directions — before DriftLens ever proposes two rules that fight each other.',
    snippet: [
      { label: 'driftlens analyse — meta-pattern', code: 'THEME: data-access-layer (security)\n  → 4 patterns · 31 corrections\n  Root cause: AI does not know the repository layer', isGood: true },
      { label: 'driftlens unify --conflicts', code: '[!] src/api.ts: dev A says \'always async\',\n    dev B says \'keep it sync\' — align first', isGood: false },
    ],
    outcome: 'Address causes, not symptoms.',
  },
  {
    tag: 'SHARE',
    tagColor: 'var(--green-bright)',
    headline: 'Teach the whole org at once.',
    why: 'Export a high-performing repo\'s proven rules and import them anywhere — knowledge propagates across teams. Then synthesise the rules into Semgrep checks and test stubs so CI enforces them forever.',
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
    why: 'DriftLens tracks every correction — time to commit, which agent, which model version — and a causal rule ledger proves whether each merged rule truly reduced its corrections. Real dollar ROI you can show leadership.',
    snippet: [
      { label: 'driftlens roi', code: 'Time saved:    +47.3 hrs\nTime on fixes: -12.1 hrs\nNet value:     $4,020\nTool spend:    $769\n─────────────────────\nNET ROI:       $2,992  (3.9x)', isGood: true },
      { label: 'driftlens rules', code: 'high-value:  service-layer  — saves $210/mo\ndead-weight: legacy-jquery   — prune it', isGood: true },
    ],
    outcome: 'A real number, not a feeling.',
  },
  {
    tag: 'WATCH',
    tagColor: 'var(--amber)',
    headline: 'The model updated. Did it break something?',
    why: 'When Sonnet 4 becomes Sonnet 5, rules your team already fixed can silently stop working. DriftLens tracks correction rates per pattern and alerts you immediately.',
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
          sub="Every situation below is something developers using AI coding tools face every single day. DriftLens handles all of them automatically — from classifying why the AI failed to injecting the fix before it happens."
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