export type FeatureCategory = 'Capture' | 'Analyse' | 'Improve' | 'Prevent' | 'Measure'

export interface Feature {
  icon: string
  color: string
  title: string
  desc: string
  tag: string
  category: FeatureCategory
}

export const FEATURES: Feature[] = [
  {
    icon: 'hook', color: 'blue', category: 'Capture',
    title: 'Git Delta Capture',
    desc: 'Post-commit hook silently diffs what the AI wrote vs. what you committed. Zero friction — works on every commit, automatically, forever.',
    tag: 'CORE SIGNAL',
  },
  {
    icon: 'chat', color: 'purple', category: 'Capture',
    title: 'Re-prompt Parser',
    desc: 'Reads your correction instructions directly from Claude Code, Cursor, Copilot, and Aider session logs. No manual tagging needed.',
    tag: 'SESSION LOGS',
  },
  {
    icon: 'chain', color: 'cyan', category: 'Capture',
    title: 'Struggle Chain Detection',
    desc: 'Captures full multi-turn fights where the AI needs 3-6+ corrections. Extracts every rule you stated across the entire conversation.',
    tag: 'MULTI-TURN',
  },
  {
    icon: 'brain', color: 'blue', category: 'Analyse',
    title: 'Pattern Analysis',
    desc: 'Embeds corrections with Voyage AI, clusters by semantic similarity. Requires 3+ occurrences before surfacing. LLM names each rule.',
    tag: 'AI CLUSTERING',
  },
  {
    icon: 'chart', color: 'accent', category: 'Analyse',
    title: 'Agent Quality Matrix',
    desc: 'Per-agent accuracy by file type, built from your own history. "Use Claude for services (94%), Copilot for tests (91%)."',
    tag: 'CROSS-AGENT',
  },
  {
    icon: 'trending', color: 'green', category: 'Analyse',
    title: 'Drift Score',
    desc: 'Tracks whether corrections decrease after each skill PR is merged. Validates that your rules actually work — with real data.',
    tag: 'FEEDBACK LOOP',
  },
  {
    icon: 'doc', color: 'green', category: 'Improve',
    title: 'Skill File Updates',
    desc: 'Opens draft PRs to CLAUDE.md, .cursorrules, SKILL.md, GEMINI.md. Nothing applied without your review. LOCKED sections always respected.',
    tag: 'PR-GATED',
  },
  {
    icon: 'link', color: 'cyan', category: 'Improve',
    title: 'Cross-Agent Unification',
    desc: 'Detects conflicts and coverage gaps between all your agent skill files. Propagates missing rules bidirectionally across every format.',
    tag: 'MULTI-AGENT',
  },
  {
    icon: 'shield', color: 'purple', category: 'Prevent',
    title: 'Predictive Prevention',
    desc: 'MCP server injects file-specific constraints BEFORE the AI generates code. The most common mistakes simply stop happening.',
    tag: 'REAL-TIME MCP',
  },
  {
    icon: 'alert', color: 'red', category: 'Prevent',
    title: 'Regression Sentinel',
    desc: 'Detects when model updates (Sonnet 4 to 5) silently break patterns your team already fixed. Alerts before anyone notices.',
    tag: 'MODEL SAFETY',
  },
  {
    icon: 'dollar', color: 'amber', category: 'Measure',
    title: 'AI Productivity Ledger',
    desc: 'Hard financial ROI per developer: time saved vs time lost, in actual dollars. Justify AI tool budgets with numbers leadership trusts.',
    tag: 'DOLLAR ROI',
  },
  {
    icon: 'bolt', color: 'amber', category: 'Measure',
    title: 'Context Economics',
    desc: 'Every rule in your skill file has a calculated dollar ROI. Dead-weight rules cost tokens with zero benefit — DriftLens finds and archives them.',
    tag: 'TOKEN OPT.',
  },
]

export const FILTER_TABS: { label: string; value: FeatureCategory | 'All'; count: number }[] = [
  { label: 'All', value: 'All', count: 12 },
  { label: 'Capture', value: 'Capture', count: 3 },
  { label: 'Analyse', value: 'Analyse', count: 3 },
  { label: 'Improve', value: 'Improve', count: 2 },
  { label: 'Prevent', value: 'Prevent', count: 2 },
  { label: 'Measure', value: 'Measure', count: 2 },
]