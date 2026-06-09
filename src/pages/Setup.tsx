import CodeBlock from '../components/CodeBlock'

const INIT = `$ cd your-project
$ driftlens init

✓ Created .driftlens/
✓ Detected AI tools: CLAUDE.md, .cursorrules
✓ Installed post-commit hook -> .git/hooks/post-commit
✓ Added .driftlens/ to .gitignore

DriftLens ready.`

const CONFIG = `{
  "llm": {
    "provider": "anthropic",
    "analysisModel": "claude-sonnet-4-6",
    "proposalModel": "claude-opus-4-6",
    "apiKey": "env:ANTHROPIC_API_KEY"
  },
  "embeddings": {
    "provider": "voyage",
    "model": "voyage-code-3",
    "apiKey": "env:VOYAGE_API_KEY"
  }
}`

const WATCH = `$ driftlens watch start
Session started at 2026-06-09T09:15:00Z

$ driftlens watch stop
Session ended.  Duration: 1h 47m
4 commits tagged  ·  9 corrections captured`

const MARK = `$ driftlens mark HEAD
✓ Marked HEAD (a3f4d21) as AI-assisted

$ driftlens mark HEAD~3
✓ Marked 3 commits as AI-assisted`

const STATUS = `$ driftlens status

DriftLens Status
────────────────
Total corrections captured: 23
  git_delta:       8
  reprompt:       12
  struggle_chain:  3

Date range: 2026-06-02 -> 2026-06-09`

const ANALYSE = `$ driftlens analyse
Analysing 23 corrections...
Embedding via voyage-code-3...

Found 2 pattern(s) with >= 3 occurrences:
  [88%] service-layer-enforcement    9 corrections
  [81%] error-boundary-pattern       5 corrections

Saved to .driftlens/patterns.json`

const PROPOSE = `$ driftlens propose --dry-run
--- DRY RUN: Nothing written, no PRs opened ---

Would write to CLAUDE.md:
- Never call fetch() or axios() directly in React components.
  Always use the service layer: src/features/*/services/

$ driftlens propose
✓ Branch: driftlens/update-2026-06-09
✓ Draft PR: https://github.com/org/repo/pull/47`

const PREREQS = [
  ['Node.js 18+',   'Any modern LTS version. Check with: node --version'],
  ['A git repo',    'DriftLens installs a post-commit hook in .git/hooks/.'],
  ['An AI tool',    'Claude Code, Cursor, GitHub Copilot, Gemini CLI, Windsurf, or Codex CLI.'],
  ['LLM API key',   'Only needed for driftlens analyse and driftlens propose. Not required for capture.'],
  ['Voyage AI key', 'Recommended for analysis. Use OpenAI or Ollama as alternatives.'],
]

const PRIVACY = [
  ['Stored locally',          'All corrections in .driftlens/corrections.jsonl. Nothing sent automatically.'],
  ['Network calls on demand', 'Only driftlens analyse and driftlens propose make API calls. The hook is fully offline.'],
  ['Keys from env vars',      'API keys are never written to .driftlens/. Read from env at call time.'],
  ['Easy to audit',           'corrections.jsonl is plain text. Read, delete, or git-ignore it at any time.'],
]

const STEPS = [
  { num: '01', title: 'Install globally',          desc: 'Adds the driftlens command to your PATH.', code: '$ npm install -g driftlens', copy: 'npm install -g driftlens' },
  { num: '02', title: 'Initialize in your project', desc: 'Run in the root of any git repository. Safe on existing repos — chains with any existing hook.', code: INIT, copy: 'driftlens init' },
  { num: '03', title: 'Configure LLM provider',    desc: 'Edit .driftlens/config.json. Only needed for driftlens analyse and driftlens propose. Correction capture is offline.', code: CONFIG, label: '.driftlens/config.json' },
  { num: '04', title: 'Code with your AI tool',    desc: 'Option A: use driftlens watch to bracket sessions explicitly. Option B: just commit — the hook reads session logs automatically, or tag retroactively.', code: WATCH, extra: MARK },
  { num: '05', title: 'Check captured corrections', desc: 'After a few days of AI-assisted coding, run driftlens status.', code: STATUS, copy: 'driftlens status' },
  { num: '06', title: 'Find patterns',             desc: 'Run after 1–2 weeks of corrections. Requires a configured embedding provider.', code: ANALYSE, copy: 'driftlens analyse' },
  { num: '07', title: 'Propose skill file updates', desc: 'Use --dry-run first. Running without it opens draft PRs. You review and merge — nothing applied silently.', code: PROPOSE, copy: 'driftlens propose --dry-run' },
]

export default function Setup() {
  return (
    <div className="inner-page">
      <div className="container">
        <header className="page-hero">
          <span className="eyebrow">Setup guide</span>
          <h1>Running in 30 seconds.</h1>
          <p>
            Install globally, run <code>init</code> once in your project, and DriftLens
            starts capturing corrections from your next commit.
          </p>
        </header>

        <section className="content-block">
          <h2>Prerequisites</h2>
          <div className="prereq-list">
            {PREREQS.map(([name, desc]) => (
              <div key={name} className="prereq-row">
                <span className="prereq-name">{name}</span>
                <span className="prereq-desc">{desc}</span>
              </div>
            ))}
          </div>
        </section>

        <hr style={{ margin: '3rem 0' }} />

        <section className="content-block">
          <h2>Setup steps</h2>
          <div className="setup-steps" style={{ marginTop: '1.75rem' }}>
            {STEPS.map(step => (
              <div key={step.num} className="setup-step">
                <div className="step-num-wrap">
                  <div className="step-num">{step.num}</div>
                </div>
                <div>
                  <p className="step-title">{step.title}</p>
                  <p className="step-body">{step.desc}</p>
                  <CodeBlock
                    code={step.code}
                    copyText={'copy' in step ? step.copy : undefined}
                    label={'label' in step ? (step as typeof step & { label: string }).label : undefined}
                  />
                  {('extra' in step) && (
                    <div style={{ marginTop: '0.75rem' }}>
                      <CodeBlock code={(step as typeof step & { extra: string }).extra} label="retroactive tagging" noCopy />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr style={{ margin: '3rem 0' }} />

        <section className="content-block">
          <h2>Privacy</h2>
          <div className="privacy-list" style={{ marginTop: '1.25rem' }}>
            {PRIVACY.map(([key, val]) => (
              <div key={key} className="privacy-row">
                <div className="privacy-key">{key}</div>
                <div className="privacy-val">{val}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
