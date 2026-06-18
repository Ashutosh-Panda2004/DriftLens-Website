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
    desc: 'Post-commit hook silently diffs what the AI wrote vs. what you committed — now capturing effort, timing and module context on every diff. Zero friction, automatic, forever.',
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
    desc: 'Embeds corrections, clusters by semantic similarity, requires 3+ occurrences before surfacing. Now scales to 50k+ corrections with deterministic blocking and works fully offline in --no-llm mode.',
    tag: 'AI CLUSTERING',
  },
  {
    icon: 'chart', color: 'blue', category: 'Analyse',
    title: 'Correction Reason Taxonomy',
    desc: 'Every correction is auto-classified into a closed taxonomy — security, correctness, performance, architecture, api-misuse, testing, naming, style. Know not just what the AI got wrong, but why.',
    tag: 'NEW · WHY-IT-FAILED',
  },
  {
    icon: 'trending', color: 'accent', category: 'Analyse',
    title: 'Impact Ranking',
    desc: 'Patterns are scored on a single impact metric blending frequency, recency, and reason severity. A weekly security miss outranks a stylistic nit seen twice — so you fix what matters first.',
    tag: 'NEW · PRIORITISED',
  },
  {
    icon: 'chain', color: 'cyan', category: 'Analyse',
    title: 'Meta-Pattern Detection',
    desc: 'Groups individually-distinct patterns into systemic themes, exposing the one root-cause knowledge gap driving a dozen surface symptoms. Fix the cause, not the symptoms.',
    tag: 'NEW · ROOT CAUSE',
  },
  {
    icon: 'alert', color: 'red', category: 'Analyse',
    title: 'Contradiction Detection',
    desc: 'Flags when two developers correct the AI in opposite directions on the same file — before DriftLens ever proposes two rules that fight each other. Humans adjudicate, the skill file stays coherent.',
    tag: 'NEW · CONFLICT-AWARE',
  },
  {
    icon: 'chart', color: 'accent', category: 'Analyse',
    title: 'Agent Quality Matrix',
    desc: 'Per-agent accuracy by file type, built from your own history — now with sample-size suppression so thin evidence never produces a misleading recommendation. "Use Claude for services, Copilot for tests."',
    tag: 'CROSS-AGENT',
  },
  {
    icon: 'doc', color: 'green', category: 'Improve',
    title: 'Conflict-Aware Skill Updates',
    desc: 'Opens draft PRs to CLAUDE.md, .cursorrules, SKILL.md, GEMINI.md — now skipping duplicates, halting on contradictions, and remembering every rule a reviewer rejected so it is never re-proposed. LOCKED sections always respected.',
    tag: 'PR-GATED · NEVER-NAGS',
  },
  {
    icon: 'bolt', color: 'green', category: 'Improve',
    title: 'Proposal Strategies',
    desc: 'One --strategy knob — conservative, balanced, or aggressive — sets coherent confidence, evidence, impact, and per-file caps. Tune how boldly DriftLens proposes without juggling five thresholds.',
    tag: 'NEW · ONE KNOB',
  },
  {
    icon: 'link', color: 'cyan', category: 'Improve',
    title: 'Org Rule Registry',
    desc: 'Export a high-performing repo\'s proven rules and import them anywhere. Knowledge propagates across teams and the whole org — never source code, only portable rule text with provenance.',
    tag: 'NEW · TEAM-SCALE',
  },
  {
    icon: 'shield', color: 'green', category: 'Prevent',
    title: 'Correction-to-Test Synthesis',
    desc: 'Turns proven patterns into machine-checkable guards — Semgrep rules, ESLint notes, and failing-by-default unit-test stubs — so regressions are caught by CI instead of re-learned by humans.',
    tag: 'NEW · CI-ENFORCED',
  },
  {
    icon: 'shield', color: 'purple', category: 'Prevent',
    title: 'Pre-Generation Constraint Injection',
    desc: 'The MCP server injects a ranked, token-bounded set of file-specific constraints BEFORE the AI writes a line of code, and logs every injection to measure prevention. The most common mistakes simply stop happening.',
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
    icon: 'dollar', color: 'amber', category: 'Measure',
    title: 'Rule Effectiveness Ledger',
    desc: 'Causal before/after measurement proves whether each merged rule actually reduced its corrections — fused with token cost and recency decay. High-value rules are kept; dead-weight is flagged for pruning.',
    tag: 'NEW · CAUSAL ROI',
  },
  {
    icon: 'bolt', color: 'amber', category: 'Measure',
    title: 'Context Economics',
    desc: 'Every rule in your skill file has a calculated dollar ROI. Dead-weight rules cost tokens with zero benefit — DriftLens finds and archives them.',
    tag: 'TOKEN OPT.',
  },
]

export const FILTER_TABS: { label: string; value: FeatureCategory | 'All'; count: number }[] = [
  { label: 'All', value: 'All', count: 18 },
  { label: 'Capture', value: 'Capture', count: 3 },
  { label: 'Analyse', value: 'Analyse', count: 6 },
  { label: 'Improve', value: 'Improve', count: 3 },
  { label: 'Prevent', value: 'Prevent', count: 3 },
  { label: 'Measure', value: 'Measure', count: 3 },
]