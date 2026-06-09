import CodeBlock from '../components/CodeBlock'
import type { ReactNode } from 'react'

interface Cmd {
  sig: ReactNode
  desc: string
  flags?: { name: string; desc: string }[]
  example: string
  exampleCopy?: string
}

const COMMANDS: Cmd[] = [
  {
    sig: <><span className="sig-prog">driftlens</span> <span className="sig-cmd">init</span></>,
    desc: 'Initialize DriftLens in the current git repository. Creates .driftlens/, auto-detects AI tools, installs a post-commit hook, and adds .driftlens/ to .gitignore.',
    example: `$ driftlens init

✓ Created .driftlens/
✓ Detected AI tools: CLAUDE.md, .cursorrules
✓ Installed post-commit hook  ->  .git/hooks/post-commit
✓ Added .driftlens/ to .gitignore

DriftLens ready. Code normally.`,
    exampleCopy: 'driftlens init',
  },
  {
    sig: <><span className="sig-prog">driftlens</span> <span className="sig-cmd">watch</span> <span className="sig-arg">&lt;start|stop&gt;</span></>,
    desc: 'Explicit session bracketing. All commits between start and stop are tagged as AI-assisted with 100% confidence.',
    example: `$ driftlens watch start
Session started at 2026-06-09T09:15:00Z

$ driftlens watch stop
Session ended.  Duration: 1h 47m
4 commits tagged  ·  9 corrections captured`,
  },
  {
    sig: <><span className="sig-prog">driftlens</span> <span className="sig-cmd">mark</span> <span className="sig-arg">&lt;commit&gt;</span></>,
    desc: 'Retroactively tag a commit or range as AI-assisted.',
    flags: [
      { name: '<commit>', desc: 'Any git ref: hash, HEAD, HEAD~n, or a commit range.' },
    ],
    example: `$ driftlens mark HEAD
✓ Marked HEAD (a3f4d21) as AI-assisted

$ driftlens mark HEAD~3
✓ Marked 3 commits (HEAD~3 to HEAD) as AI-assisted`,
  },
  {
    sig: <><span className="sig-prog">driftlens</span> <span className="sig-cmd">status</span> <span className="sig-flag">[--since &lt;date&gt;] [--json]</span></>,
    desc: 'Show a summary of all captured corrections: counts by type, date range, detection methods, and top files.',
    flags: [
      { name: '--since <date>', desc: 'Filter to corrections on or after this date.' },
      { name: '--json', desc: 'Output as JSON.' },
    ],
    example: `$ driftlens status

DriftLens Status
────────────────
Total corrections captured: 47
  git_delta:       12
  reprompt:        28
  struggle_chain:   7

Date range: 2026-05-20 -> 2026-06-09

Top files:
   8  src/features/profile/ProfilePage.tsx
   6  src/services/UserService.ts`,
  },
  {
    sig: <><span className="sig-prog">driftlens</span> <span className="sig-cmd">analyse</span> <span className="sig-flag">[--no-llm] [--min &lt;n&gt;] [--threshold &lt;n&gt;]</span></>,
    desc: 'Embed and cluster corrections to find recurring patterns. Requires a configured embedding provider. Results written to .driftlens/patterns.json.',
    flags: [
      { name: '--no-llm', desc: 'Use Levenshtein + token overlap instead of embeddings. No API key needed.' },
      { name: '--min <n>', desc: 'Minimum occurrences per cluster. Default: 3.' },
      { name: '--threshold <n>', desc: 'Cosine similarity threshold (0-1). Default: 0.82.' },
    ],
    example: `$ driftlens analyse
Analysing 47 corrections...
Embedding via voyage-code-3...

Found 3 pattern(s) with >= 3 occurrences:
  [91%] service-layer-enforcement    14 corrections
  [87%] service-singleton-import      8 corrections
  [79%] path-alias-usage              5 corrections

Saved to .driftlens/patterns.json`,
  },
  {
    sig: <><span className="sig-prog">driftlens</span> <span className="sig-cmd">dashboard</span> <span className="sig-flag">[--port &lt;n&gt;] [--no-open]</span></>,
    desc: 'Start a local web server and open the drift dashboard. Shows correction heatmaps, drift score, struggle chain viewer. All data read locally.',
    flags: [
      { name: '--port <n>', desc: 'Port to serve on. Default: 3847.' },
      { name: '--no-open', desc: 'Start the server without opening the browser.' },
    ],
    example: `$ driftlens dashboard
Dashboard running at http://localhost:3847

Press Ctrl+C to stop.`,
  },
  {
    sig: <><span className="sig-prog">driftlens</span> <span className="sig-cmd">propose</span> <span className="sig-flag">[--dry-run] [--target &lt;file&gt;] [--min-confidence &lt;n&gt;]</span></>,
    desc: 'Generate skill file improvements and open draft PRs. Only patterns above the confidence threshold are proposed. Human always reviews and merges.',
    flags: [
      { name: '--dry-run', desc: 'Preview the exact text that would be written. Nothing is touched.' },
      { name: '--target <file>', desc: 'Propose for one specific skill file only.' },
      { name: '--min-confidence <n>', desc: 'Minimum confidence score to propose. Default: 0.75.' },
    ],
    example: `$ driftlens propose --dry-run
--- DRY RUN: Nothing written, no PRs opened ---

Would write to CLAUDE.md:
- Never call fetch() or axios() directly in React components.
  Always use the service layer: src/features/[feature]/services/

$ driftlens propose
✓ Branch: driftlens/update-2026-06-09
✓ Draft PR: https://github.com/org/repo/pull/47`,
  },
  {
    sig: <><span className="sig-prog">driftlens</span> <span className="sig-cmd">score</span> <span className="sig-flag">[--detail]</span></>,
    desc: 'Calculate the drift score: how well do your current skill files cover the patterns found by driftlens analyse?',
    flags: [
      { name: '--detail', desc: 'Per-pattern breakdown with skill file coverage analysis.' },
    ],
    example: `$ driftlens score

Drift Score: 67/100
─────────────────
3 patterns found. 1 already covered by skill files.

Uncovered:
  service-layer-enforcement   91%   14 corrections
  path-alias-usage            79%    5 corrections`,
  },
  {
    sig: <><span className="sig-prog">driftlens</span> <span className="sig-cmd">report</span> <span className="sig-flag">[--output &lt;file&gt;] [--since &lt;date&gt;]</span></>,
    desc: 'Generate a markdown summary of your correction history, patterns, drift score, and skill file coverage.',
    flags: [
      { name: '--output <file>', desc: 'Save to file instead of printing to stdout.' },
      { name: '--since <date>', desc: 'Include only corrections after this date.' },
    ],
    example: `$ driftlens report --output drift-report.md
✓ Report written to drift-report.md`,
  },
]

export default function Commands() {
  return (
    <div className="inner-page">
      <div className="container">
        <header className="page-hero">
          <span className="eyebrow">Commands</span>
          <h1>Complete CLI reference.</h1>
          <p>
            All commands, flags, and example output. Run any command with{' '}
            <code>--help</code> for the same information in your terminal.
          </p>
        </header>

        <div className="cmd-list">
          {COMMANDS.map((cmd, i) => (
            <div key={i} className="cmd-entry">
              <div className="cmd-sig">{cmd.sig}</div>
              <p className="cmd-desc">{cmd.desc}</p>
              {cmd.flags && cmd.flags.length > 0 && (
                <>
                  <p className="flags-label">Flags</p>
                  <div className="flags-rows">
                    {cmd.flags.map(f => (
                      <div key={f.name} className="flag-row">
                        <span className="flag-name">{f.name}</span>
                        <span className="flag-desc">{f.desc}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
              <CodeBlock code={cmd.example} label="example" copyText={cmd.exampleCopy} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
