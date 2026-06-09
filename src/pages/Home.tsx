import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'

/* ── Install snippet ── */
function InstallBox() {
  const [copied, setCopied] = useState(false)
  const CMD = 'npm install -g github:Ashutosh-Panda2004/DriftLens'
  const copy = () => {
    navigator.clipboard.writeText(CMD).catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.625rem' }}>
      <div className="install-box">
        <span className="install-dollar">$</span>
        <span className="install-cmd">{CMD}</span>
        <button className={`install-copy${copied ? ' copied' : ''}`} onClick={copy}>
          {copied ? 'copied ✓' : 'copy'}
        </button>
      </div>
      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
        npm registry publish coming soon &mdash; install directly from GitHub in the meantime
      </p>
    </div>
  )
}

/* ── Signal cards ── */
interface Signal { num: string; title: string; desc: string; example: ReactNode }

const SIGNALS: Signal[] = [
  {
    num: '01',
    title: 'Git delta',
    desc: 'When you edit AI-generated code before committing, the post-commit hook records the diff — what the AI wrote vs. what you kept. Every commit is a labeled training pair.',
    example: (
      <div className="diff-snippet">
        <span className="diff-dim">{'# AI wrote:\n'}</span>
        <span className="diff-del">{'- const data = await fetch(\'/api/users\')\n'}</span>
        <span className="diff-dim">{'# You committed:\n'}</span>
        <span className="diff-add">{'+ const data = await userService.getAll()'}</span>
      </div>
    ),
  },
  {
    num: '02',
    title: 'Re-prompt',
    desc: 'When you type "no, use the service layer" into Claude or Cursor, DriftLens reads that from your session log. Re-prompts are the dominant signal — roughly 60–70% of all corrections.',
    example: (
      <div className="diff-snippet">
        <span className="diff-dim">{'You:  '}</span>
        <span className="diff-txt">{'"Don\'t use fetch() directly.\n      Always go through the service\n      layer in src/services/"'}</span>
      </div>
    ),
  },
  {
    num: '03',
    title: 'Struggle chain',
    desc: 'When it takes 3–6+ turns to get the AI to do something right, DriftLens captures the full sequence and extracts every rule you stated across the conversation.',
    example: (
      <div className="diff-snippet">
        <span className="diff-dim">{'[T1] AI:  '}</span><span className="diff-del">{'await fetch(\'/api/users\')\n'}</span>
        <span className="diff-dim">{'[T1] You: '}</span><span className="diff-txt">{'"Use the service layer"\n'}</span>
        <span className="diff-dim">{'[T2] AI:  '}</span><span className="diff-del">{'await api.get(\'/users\')\n'}</span>
        <span className="diff-dim">{'[T2] You: '}</span><span className="diff-txt">{'"Not axios. UserService."\n'}</span>
        <span className="diff-dim">{'[T3] AI:  '}</span><span className="diff-add">{'await userService.getAll() ✓'}</span>
      </div>
    ),
  },
]

/* ── Pipeline steps ── */
const PIPELINE = [
  { num: '01', title: 'Capture', desc: 'Silent post-commit hook. Records to .driftlens/corrections.jsonl. Zero friction after init.', active: true },
  { num: '02', title: 'Analyse', desc: 'Embed and cluster corrections. Patterns with ≥3 occurrences surface with confidence scores.', active: false },
  { num: '03', title: 'Propose', desc: 'Write a targeted skill file addition. Open a draft PR. Preview with --dry-run first.', active: false },
  { num: '04', title: 'Approve', desc: 'You review the proposed rule. Merge it. Nothing is applied without your explicit sign-off.', active: true },
]

/* ── Agent grid ── */
const AGENTS = [
  { name: 'GitHub Copilot', path: '.github/skills/' },
  { name: 'Claude Code',    path: 'CLAUDE.md' },
  { name: 'Cursor',         path: '.cursor/rules/' },
  { name: 'Gemini CLI',     path: 'GEMINI.md' },
  { name: 'Windsurf',       path: '.windsurfrules' },
  { name: 'Codex CLI',      path: 'AGENTS.md' },
  { name: 'Aider',          path: '.aider.chat.history.md' },
  { name: 'Any agent',      path: '.driftlens/rules/' },
]

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">
            <span className="badge">Open source · MIT · npm publish coming soon</span>
          </div>
          <h1>Every fix you make to AI code is a lesson it never learns.</h1>
          <p className="hero-sub">
            DriftLens captures your corrections from git history and session logs,
            finds recurring patterns, and opens draft PRs to update your AI skill
            files — automatically.
          </p>
          <div className="hero-actions">
            <Link to="/setup" className="btn btn-primary">Get started</Link>
            <a
              href="https://github.com/Ashutosh-Panda2004/DriftLens"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              GitHub ↗
            </a>
          </div>
          <div className="hero-install">
            <InstallBox />
          </div>
        </div>
      </section>

      {/* ─── PROBLEM ─── */}
      <section className="section-block">
        <div className="container">
          <span className="eyebrow">The problem</span>
          <div className="problem-grid">
            <div className="problem-copy">
              <h2>You're re-teaching your AI agent the same thing every single day.</h2>
              <p>
                Your AI agent starts every session with the same defaults. When you
                correct it — editing the generated code, or typing "no, use the service
                layer" in chat — that correction only lives in that session.
              </p>
              <p>
                Your skill files (<code>CLAUDE.md</code>, <code>.cursorrules</code>,{' '}
                <code>.github/skills/</code>) contain the conventions your agent should
                follow. But they're static documents you wrote once. The signal that
                would improve them disappears after every session.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                DriftLens captures that signal. Your git history and session logs already
                contain every lesson you've taught your AI. It just isn't being kept.
              </p>
            </div>

            <div>
              <div className="loop-card">
                <p className="loop-card-label">The correction loop</p>
                <div className="loop-rows">
                  <div className="loop-row">
                    <div className="loop-dot blue" />
                    <span className="loop-row-text">You ask the AI to write code</span>
                  </div>
                  <div className="loop-connector" />
                  <div className="loop-row">
                    <div className="loop-dot" />
                    <span className="loop-row-text">AI generates code with wrong patterns</span>
                  </div>
                  <div className="loop-connector" />
                  <div className="loop-row">
                    <div className="loop-dot blue" />
                    <span className="loop-row-text">You correct it and commit</span>
                  </div>
                  <div className="loop-connector" />
                  <div className="loop-row">
                    <div className="loop-dot red" />
                    <span className="loop-row-text">Session ends. AI resets.</span>
                  </div>
                  <div className="loop-connector" />
                  <div className="loop-row">
                    <div className="loop-dot" />
                    <span className="loop-row-text fade">Same mistake tomorrow.</span>
                  </div>
                </div>
                <div className="loop-footer">
                  The average developer makes <strong>15–30 corrections per week.</strong>{' '}
                  Every single one of them disappears.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SIGNALS ─── */}
      <section className="section-block">
        <div className="container">
          <div className="signals-header">
            <span className="eyebrow">How it captures</span>
            <h2>Two sources of signal. Both captured automatically.</h2>
            <p>
              Your git history and session logs already contain every lesson you've
              taught your AI. DriftLens stops throwing them away.
            </p>
          </div>
          <div className="signals-grid">
            {SIGNALS.map(s => (
              <div key={s.num} className="signal-card">
                <div className="signal-num">{s.num}</div>
                <p className="signal-title">{s.title}</p>
                <p className="signal-desc">{s.desc}</p>
                {s.example}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PIPELINE ─── */}
      <section className="section-block">
        <div className="container">
          <div className="pipeline-header">
            <span className="eyebrow">How it works</span>
            <h2>From correction to convention.</h2>
            <p>Four steps. Only the last one needs your attention.</p>
          </div>
          <div className="pipeline-row">
            {PIPELINE.map(step => (
              <div key={step.num} className="pipe-step">
                <div className={`pipe-dot${step.active ? ' active' : ''}`}>{step.num}</div>
                <p className="pipe-title">{step.title}</p>
                <p className="pipe-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AGENTS ─── */}
      <section className="section-block">
        <div className="container">
          <div className="agents-header">
            <span className="eyebrow">Compatibility</span>
            <h2>Works with every major AI coding tool.</h2>
            <p>Agent-agnostic, editor-agnostic, vendor-agnostic.</p>
          </div>
          <div className="agents-grid">
            {AGENTS.map(({ name, path }) => (
              <div key={name} className="agent-item">
                <p className="agent-name">{name}</p>
                <p className="agent-path">{path}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section-block">
        <div className="container">
          <div className="cta-block">
            <span className="eyebrow">Get started</span>
            <h2>Start capturing corrections today.</h2>
            <p className="sub">Free, open source, and running after a single command.</p>
            <div className="cta-btns">
              <Link to="/setup" className="btn btn-primary">Read the setup guide</Link>
              <a
                href="https://github.com/Ashutosh-Panda2004/DriftLens"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                View on GitHub ↗
              </a>
            </div>
            <InstallBox />
            <p className="cta-note">
              All corrections stored locally. Nothing leaves your machine until you run{' '}
              <code>driftlens analyse</code>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
