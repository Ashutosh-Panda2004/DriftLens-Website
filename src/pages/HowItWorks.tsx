import CodeBlock from '../components/CodeBlock'

const DELTA = `# AI suggested:
const users = await fetch('/api/users').then(r => r.json())

# Developer committed:
const users = await userService.getAll()

# DriftLens records:
#   type:       git_delta
#   ai_wrote:   "await fetch('/api/users').then(r => r.json())"
#   committed:  "await userService.getAll()"
#   file:       src/features/profile/ProfilePage.tsx
#   confidence: 0.97`

const REPROMPT = `# from .claude/session-2026-06-05.json
"No, never call fetch() directly. Always go through the service
 layer. Use userService.getAll() from src/services/UserService.ts."

# DriftLens classifier:
#   type:    reprompt
#   signal:  correction (not a new feature request)
#   rule:    "use service layer instead of direct fetch"
#   linked:  subsequent commit a3f4d21`

const STRUGGLE = `# Multi-turn sequence - .cursor/ session log
#
# T1 AI:  const data = await fetch('/api/users')
# T1 You: "Use the service layer"
# T2 AI:  const data = await api.get('/users')
# T2 You: "Not axios. Use UserService from src/services"
# T3 AI:  const data = await userService.getAll()
# T3 You: "Yes" -> commits
#
# DriftLens:
#   type:            struggle_chain
#   turns:           3
#   friction_score:  3.4
#   rules_extracted: 2 distinct rules`

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

const DECISIONS = [
  ['Min 3 occurrences', 'One is a typo. Two is coincidence. Three is a missing convention worth surfacing.'],
  ['Draft PRs, never silent writes', 'Human always approves before anything changes.'],
  ['Multi-signal detection', 'No single AI detection method is reliable. Signals combine with confidence scoring.'],
  ['Git hooks over VS Code extension', 'Editor-agnostic. Works in any terminal workflow. No extension to maintain.'],
  ['JSONL over SQLite', 'Human-readable. Git-diffable. Easy to audit, export, or delete.'],
  ['Adapters for LLMs and embeddings', 'Switch providers with a single config line. No vendor lock-in.'],
  ['Re-prompt as dominant signal', 'Conversational corrections (~60-70%) contain the rule explicitly in natural language.'],
]

const LAYERS = [
  {
    id: 'L0', title: 'Detector',
    desc: 'Identifies which commits were AI-assisted using multiple independent signals.',
    items: [
      'driftlens watch start/stop — explicit session bracketing (100% confidence)',
      'driftlens mark <hash> — retroactive tagging',
      'Copilot Agent Hooks — automatic session detection',
      'Claude, Cursor session log correlation — timestamp matching',
      'Commit message conventions — [ai], [copilot], [claude]',
      'Co-author trailers — Co-authored-by: GitHub Copilot',
    ],
  },
  {
    id: 'L1', title: 'Collector',
    desc: 'Runs as a post-commit git hook. Captures corrections passively. Never blocks your workflow.',
    items: [
      'Git delta collector — records (ai_wrote, committed) pairs for AI-flagged commits',
      'Re-prompt parsers — reads session logs from Claude, Cursor, Copilot, Aider',
      'Re-prompt classifier — distinguishes corrections from new requests (no LLM needed)',
      'Struggle chain detection — groups multi-turn correction sequences',
    ],
  },
  {
    id: 'L2', title: 'Analyser',
    desc: 'On-demand command. Embeds corrections, clusters by cosine similarity, names patterns.',
    items: [
      'Voyage AI voyage-code-3 (default), OpenAI, or Ollama for embeddings',
      'Cosine similarity clustering at 0.82 threshold',
      'Minimum 3 corrections per cluster before surfacing',
      '--no-llm mode: Levenshtein + token overlap, no API key required',
    ],
  },
  {
    id: 'L3', title: 'Proposer',
    desc: 'Generates skill file improvements as draft PRs. Human always reviews and merges.',
    items: [
      'Reads current skill files before writing',
      'LLM writes a minimal, targeted addition — not a full rewrite',
      'Creates git branch + opens draft PR via GitHub/GitLab API',
      '--dry-run previews the exact text before any file is touched',
    ],
  },
  {
    id: 'L4', title: 'Dashboard',
    desc: 'Local web UI at http://localhost:3847. Read-only visualisation. No external services.',
    items: [
      'Correction heatmap — file x time matrix',
      'Drift score gauge — skill file alignment with actual behaviour',
      'Struggle chain viewer — per-chain timeline with friction scores',
      'Feedback loop tracking — corrections after PR merges',
    ],
  },
]

export default function HowItWorks() {
  return (
    <div className="inner-page">
      <div className="container">
        <header className="page-hero">
          <span className="eyebrow">How it works</span>
          <h1>Five layers. Passive by default.</h1>
          <p>
            DriftLens runs a git hook that captures corrections silently in the background.
            Analysis and proposals are separate, on-demand commands you run when ready.
            Nothing leaves your machine until you explicitly ask.
          </p>
        </header>

        <section className="content-block">
          <h2>The signal</h2>
          <p>
            Developers correct AI agents in two fundamentally different ways. DriftLens
            captures both, plus a third pattern that emerges from them.
          </p>

          <h3>Git delta</h3>
          <p>
            When you change AI-generated code before committing, the post-commit hook
            records the diff: what the AI wrote vs. what you kept.
          </p>
          <CodeBlock code={DELTA} label="git_delta capture" noCopy />

          <h3>Re-prompt</h3>
          <p>
            Re-prompts are the dominant signal. When you type a correction into Claude or Cursor,
            DriftLens extracts that instruction from the session log and classifies it as a
            correction — not a new feature request.
          </p>
          <CodeBlock code={REPROMPT} label="reprompt capture" noCopy />

          <h3>Struggle chain</h3>
          <p>
            When you fight the AI through multiple turns, DriftLens groups the full
            sequence into a single high-signal event with a friction score and all
            rules stated across the conversation.
          </p>
          <CodeBlock code={STRUGGLE} label="struggle_chain capture" noCopy />
        </section>

        <hr style={{ margin: '3.5rem 0' }} />

        <section className="content-block">
          <h2>The pipeline</h2>
          <div className="layer-list" style={{ marginTop: '1.5rem' }}>
            {LAYERS.map(layer => (
              <div key={layer.id} className="layer-card">
                <div className="layer-badge">{layer.id}</div>
                <div>
                  <p className="layer-title">{layer.title}</p>
                  <p className="layer-sub">{layer.desc}</p>
                  <ul className="layer-items">
                    {layer.items.map(item => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr style={{ margin: '3.5rem 0' }} />

        <section className="content-block">
          <h2>Key design decisions</h2>
          <div className="decision-list" style={{ marginTop: '1.25rem' }}>
            {DECISIONS.map(([key, val]) => (
              <div key={key} className="decision-row">
                <div className="decision-key">{key}</div>
                <div className="decision-val">{val}</div>
              </div>
            ))}
          </div>
        </section>

        <hr style={{ margin: '3.5rem 0' }} />

        <section className="content-block">
          <h2>Configuration</h2>
          <p>
            Auto-generated by <code>driftlens init</code>. API keys read from environment
            variables via the <code>env:</code> prefix — never written to disk.
          </p>
          <CodeBlock code={CONFIG} label=".driftlens/config.json" />
          <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
            LLM providers: <code>anthropic</code> · <code>openai</code> · <code>gemini</code> · <code>ollama</code>
            &ensp;—&ensp;
            Embedding providers: <code>voyage</code> · <code>openai</code> · <code>ollama</code>
          </p>
        </section>
      </div>
    </div>
  )
}
