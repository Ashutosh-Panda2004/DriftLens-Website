import { SectionHeader } from '../ui/SectionHeader'
import { AnimIn } from '../ui/AnimIn'

export default function SignalPipeline() {
  return (
    <section className="section" id="signals" style={{ background: 'var(--bg-elevated)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <SectionHeader
          eyebrow="How It Works"
          title={<>Every correction you make<br />gets captured automatically.</>}
          sub="You already correct AI mistakes every day. You just don't get anything back for it. DriftLens watches your git commits and your chat sessions — silently — and turns those corrections into rules."
        />

        <div className="signal-grid">
          <AnimIn delay={0}>
            <div className="signal-card">
              <div className="signal-card__label signal-card__label--a">PATH A — Git Delta</div>
              <p className="signal-card__desc">You edit AI code before committing. The post-commit hook records exactly what the AI wrote vs. what you kept.</p>
              <div className="diff-block">
                <div className="diff-line diff-line--meta">// AI wrote:</div>
                <div className="diff-line diff-line--del">- const data = await fetch('/api/users')</div>
                <div className="diff-line diff-line--meta">// You committed:</div>
                <div className="diff-line diff-line--add">+ const data = await userService.getAll()</div>
              </div>
              <div className="signal-card__footer">Captured silently on every commit via git hook</div>
            </div>
          </AnimIn>

          <AnimIn delay={0.1}>
            <div className="signal-card">
              <div className="signal-card__label signal-card__label--b">PATH B — Re-prompt</div>
              <p className="signal-card__desc">You type a correction into Claude, Cursor, or Copilot chat. DriftLens reads that instruction directly from your session log.</p>
              <div className="diff-block">
                <div className="diff-line diff-line--dim">You (in Claude Code):</div>
                <div className="diff-line diff-line--instruction">"No, don't use fetch() directly.</div>
                <div className="diff-line diff-line--instruction"> Always use the service layer</div>
                <div className="diff-line diff-line--instruction"> in src/services/"</div>
              </div>
              <div className="signal-card__footer">~60-70% of all corrections happen this way</div>
            </div>
          </AnimIn>

          <AnimIn delay={0.2}>
            <div className="signal-card">
              <div className="signal-card__label signal-card__label--c">PATH C — Struggle Chain</div>
              <p className="signal-card__desc">It takes 3-6+ turns to get the AI to do it right. DriftLens captures the full conversation and extracts every rule you stated.</p>
              <div className="diff-block" style={{ fontSize: '0.75rem' }}>
                <div className="diff-line diff-line--dim">[T1] AI:  <span style={{ color: 'var(--red)' }}>await fetch('/api/users')</span></div>
                <div className="diff-line diff-line--instruction">[T1] You: "Use the service layer"</div>
                <div className="diff-line diff-line--dim">[T2] AI:  <span style={{ color: 'var(--red)' }}>await api.get('/users')</span></div>
                <div className="diff-line diff-line--instruction">[T2] You: "Not axios. UserService."</div>
                <div className="diff-line diff-line--dim">[T3] AI:  <span style={{ color: 'var(--green)' }}>await userService.getAll() [correct]</span></div>
              </div>
              <div className="signal-card__footer">Full chain captured — multiple rules extracted at once</div>
            </div>
          </AnimIn>
        </div>

        <AnimIn>
          <div className="pipeline-arrow">
            <div className="pipeline-arrow__line" />
            <div className="pipeline-arrow__label">3+ occurrences required before a pattern is named</div>
            <div className="pipeline-arrow__line" />
          </div>
        </AnimIn>

        <AnimIn>
          <div className="skill-output">
            <div className="skill-output__header">
              <div className="skill-output__dots">
                <span className="demo__dot demo__dot--red" />
                <span className="demo__dot demo__dot--yellow" />
                <span className="demo__dot demo__dot--green" />
              </div>
              <span className="skill-output__title">Draft PR opened — CLAUDE.md / .cursorrules / SKILL.md (you review &amp; merge)</span>
            </div>
            <pre className="skill-output__body">{`## Learned Rules

<!-- Added by DriftLens | 14 corrections | 3 weeks | Confidence: 91% | Avg friction: 3.4 turns -->
- NEVER call fetch() or axios directly in React components.
  ALWAYS use the corresponding service from src/features/[feature]/services/ or @/services.

  [WRONG]  const data = await fetch('/api/users')
  [RIGHT]  const data = await userService.getAll()

<!-- Added by DriftLens | 8 corrections | import path convention -->
- ALWAYS import services using the @/services path alias.
  NEVER use relative paths like ../services or ../../services.`}</pre>
            <div className="skill-output__footer">
              <span className="skill-output__badge skill-output__badge--pr">Draft PR opened</span>
              <span className="skill-output__badge skill-output__badge--files">CLAUDE.md · .cursorrules · SKILL.md · GEMINI.md</span>
              <span className="skill-output__badge skill-output__badge--lock">LOCKED sections never modified</span>
            </div>
          </div>
        </AnimIn>
      </div>
    </section>
  )
}