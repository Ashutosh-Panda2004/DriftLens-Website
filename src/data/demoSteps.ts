export type TermLineType = 'cmd' | 'out' | 'blank' | 'success' | 'warn' | 'dim' | 'diff-add' | 'diff-del' | 'head'

export interface TermLine {
  type: TermLineType
  text: string
}

export interface DemoStep {
  title: string
  subtitle: string
  tag: string
  lines: TermLine[]
}

export const DEMO_STEPS: DemoStep[] = [
  {
    title: 'driftlens init',
    subtitle: 'Install and initialize in 30 seconds',
    tag: 'SETUP',
    lines: [
      { type: 'cmd',     text: 'npm install -g github:Ashutosh-Panda2004/DriftLens' },
      { type: 'success', text: '[ok] installed driftlens@0.2.0' },
      { type: 'blank',   text: '' },
      { type: 'cmd',     text: 'cd my-project && driftlens init' },
      { type: 'blank',   text: '' },
      { type: 'success', text: '[ok] Created .driftlens/ directory' },
      { type: 'success', text: '[ok] Installed post-commit git hook' },
      { type: 'success', text: '[ok] Detected: Claude Code, GitHub Copilot' },
      { type: 'success', text: '[ok] Skill targets: CLAUDE.md, .cursorrules, SKILL.md' },
      { type: 'success', text: '[ok] MCP prevention server registered at :3848' },
      { type: 'blank',   text: '' },
      { type: 'out',     text: 'Ready. Code normally — DriftLens observes silently.' },
    ],
  },
  {
    title: 'driftlens analyse',
    subtitle: 'Find patterns from your correction history',
    tag: 'ANALYSE',
    lines: [
      { type: 'cmd',     text: 'driftlens status' },
      { type: 'head',    text: 'DriftLens Status' },
      { type: 'dim',     text: '--------------------------------' },
      { type: 'out',     text: 'Corrections captured: 47 total' },
      { type: 'out',     text: '  git_delta: 12  reprompt: 28  struggle_chain: 7' },
      { type: 'blank',   text: '' },
      { type: 'cmd',     text: 'driftlens analyse' },
      { type: 'blank',   text: '' },
      { type: 'out',     text: 'Embedding 47 corrections via voyage-code-3...' },
      { type: 'out',     text: 'Clustering by semantic similarity...' },
      { type: 'success', text: 'Found 3 patterns with 3+ occurrences' },
      { type: 'blank',   text: '' },
      { type: 'out',     text: '  [91%] service-layer-enforcement  -- 14 corrections' },
      { type: 'out',     text: '  [87%] import-path-convention     --  8 corrections' },
      { type: 'out',     text: '  [79%] singleton-not-constructor  --  5 corrections' },
    ],
  },
  {
    title: 'driftlens propose',
    subtitle: 'Open a draft PR to update skill files',
    tag: 'IMPROVE',
    lines: [
      { type: 'cmd',      text: 'driftlens propose --dry-run' },
      { type: 'blank',    text: '' },
      { type: 'head',     text: '--- Preview: CLAUDE.md ---' },
      { type: 'blank',    text: '' },
      { type: 'dim',      text: '## Learned Rules' },
      { type: 'blank',    text: '' },
      { type: 'dim',      text: '<!-- DriftLens | 14 corrections | 91% confidence -->' },
      { type: 'diff-add', text: '+ - NEVER use fetch() in React components.' },
      { type: 'diff-add', text: '+   ALWAYS use the service layer (@/services).' },
      { type: 'diff-add', text: '+   [WRONG] const data = await fetch("/api/users")' },
      { type: 'diff-add', text: '+   [RIGHT] const data = await userService.getAll()' },
      { type: 'blank',    text: '' },
      { type: 'cmd',      text: 'driftlens propose' },
      { type: 'success',  text: '[ok] Branch: driftlens/service-layer-2026-06-11' },
      { type: 'success',  text: '[ok] Draft PR -> github.com/you/repo/pull/47' },
      { type: 'success',  text: '[ok] Updated: CLAUDE.md, .cursorrules, SKILL.md' },
    ],
  },
  {
    title: 'driftlens predict',
    subtitle: 'Prevent failures before generation',
    tag: 'PREVENT',
    lines: [
      { type: 'cmd',     text: 'driftlens predict src/auth/AuthService.ts' },
      { type: 'blank',   text: '' },
      { type: 'head',    text: 'Predicted Failures -- Risk: HIGH' },
      { type: 'dim',     text: '------------------------------------' },
      { type: 'warn',    text: '  [!]  89% -- fetch() instead of service layer' },
      { type: 'dim',     text: '       -> Constraint injected via MCP [ok]' },
      { type: 'warn',    text: '  [!]  76% -- ../services not @/services import' },
      { type: 'dim',     text: '       -> Constraint injected via MCP [ok]' },
      { type: 'warn',    text: '  [!]  64% -- new AuthService() not singleton' },
      { type: 'dim',     text: '       -> Constraint injected via MCP [ok]' },
      { type: 'blank',   text: '' },
      { type: 'success', text: '  3 constraints injected. AI sees them before generating.' },
      { type: 'success', text: '  Last 30 days: 11 corrections avoided via prevention.' },
    ],
  },
  {
    title: 'driftlens roi',
    subtitle: 'Measure AI productivity in dollars',
    tag: 'MEASURE',
    lines: [
      { type: 'cmd',     text: 'driftlens roi' },
      { type: 'blank',   text: '' },
      { type: 'head',    text: 'AI Productivity Ledger -- Last 30 Days' },
      { type: 'dim',     text: '--------------------------------------' },
      { type: 'success', text: '  TIME SAVED by AI generation:   +47.3 hours' },
      { type: 'warn',    text: '  TIME LOST to corrections:      -12.1 hours' },
      { type: 'out',     text: '  NET GAIN:                      +35.2 hours' },
      { type: 'blank',   text: '' },
      { type: 'success', text: '    Value generated:   $4,020' },
      { type: 'warn',    text: '    Value destroyed:   -$1,029' },
      { type: 'success', text: '    NET ROI:           $2,992  (3.9x on $769 spend)' },
      { type: 'blank',   text: '' },
      { type: 'success', text: '  TREND: +14% vs last month (skills are working)' },
    ],
  },
]