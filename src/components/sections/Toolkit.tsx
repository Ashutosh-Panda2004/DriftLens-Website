import { SectionHeader } from '../ui/SectionHeader'
import { AnimIn } from '../ui/AnimIn'

interface CommandGroup {
  category: string
  description: string
  commands: {
    cmd: string
    desc: string
  }[]
}

const COMMAND_GROUPS: CommandGroup[] = [
  {
    category: 'Setup',
    description: 'Initialize and manage DriftLens in your project',
    commands: [
      { cmd: 'driftlens init', desc: 'Install post-commit hook, create .driftlens/ directory, register MCP server' },
    ],
  },
  {
    category: 'Observation',
    description: 'Capture AI corrections passively',
    commands: [
      { cmd: 'driftlens watch start/stop', desc: 'Bracket an AI-assisted session (100% confidence capture)' },
      { cmd: 'driftlens mark HEAD', desc: 'Retroactively tag a commit as AI-assisted' },
      { cmd: 'driftlens status', desc: 'Show all captured corrections and statistics' },
    ],
  },
  {
    category: 'Analysis',
    description: 'Discover patterns and generate insights',
    commands: [
      { cmd: 'driftlens analyse', desc: 'Find recurring patterns in corrections via clustering and LLM' },
      { cmd: 'driftlens roi', desc: 'Calculate dollar ROI: time saved vs time lost fixing mistakes' },
      { cmd: 'driftlens roi --team', desc: 'Team-level productivity and ROI metrics' },
      { cmd: 'driftlens health', desc: 'Organizational AI Maturity Score (0-100)' },
      { cmd: 'driftlens score', desc: 'Drift score and friction score for your project' },
    ],
  },
  {
    category: 'Agent Intelligence',
    description: 'Compare agents and optimize tool selection',
    commands: [
      { cmd: 'driftlens agents', desc: 'Agent Quality Matrix: accuracy by file type for each agent' },
      { cmd: 'driftlens agents --recommend', desc: 'Best agent recommendation for your current project' },
      { cmd: 'driftlens regression', desc: 'Detect when model updates break previously-fixed patterns' },
    ],
  },
  {
    category: 'Prevention',
    description: 'Stop mistakes before they happen',
    commands: [
      { cmd: 'driftlens prevent', desc: 'Start the MCP prevention server for real-time constraint injection' },
      { cmd: 'driftlens predict', desc: 'Show predicted failures and risks for a specific file' },
      { cmd: 'driftlens constraints', desc: 'View active constraints injected into AI context' },
    ],
  },
  {
    category: 'Skill Improvement',
    description: 'Optimize and propagate skill files',
    commands: [
      { cmd: 'driftlens propose', desc: 'Open draft PRs to update CLAUDE.md, .cursorrules, SKILL.md' },
      { cmd: 'driftlens propose --dry-run', desc: 'Preview proposed skill file changes without creating PRs' },
      { cmd: 'driftlens unify', desc: 'Cross-agent skill audit and rule propagation' },
      { cmd: 'driftlens unify --conflicts', desc: 'Detect and flag contradictions between rules' },
      { cmd: 'driftlens trim', desc: 'Remove dead-weight rules based on context economics' },
      { cmd: 'driftlens registry', desc: 'Export/import proven rules across teams and organizations' },
      { cmd: 'driftlens synth-test', desc: 'Generate Semgrep rules and test stubs from patterns' },
    ],
  },
  {
    category: 'Reporting & Visualization',
    description: 'Share insights with teams and leadership',
    commands: [
      { cmd: 'driftlens dashboard', desc: 'Local HTML dashboard with patterns, predictions, and scores' },
      { cmd: 'driftlens report', desc: 'Generate comprehensive executive summary (PDF)' },
      { cmd: 'driftlens report --executive', desc: 'CTO/VP-level maturity score and benchmarks' },
      { cmd: 'driftlens roi --export', desc: 'Export metrics to CSV for spreadsheets and BI tools' },
    ],
  },
]

export default function Toolkit() {
  return (
    <section className="section" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <SectionHeader
          eyebrow="The Complete Toolkit"
          title="Every command at your fingertips"
          sub="DriftLens provides 20+ commands organized into seven categories. Each one unlocks a specific insight or action."
        />

        <div className="toolkit-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          {COMMAND_GROUPS.map((group, i) => (
            <AnimIn key={i} delay={i * 0.06}>
              <div style={{
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                transition: 'all 0.25s',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-mid)'
                e.currentTarget.style.boxShadow = '0 0 40px rgba(99,102,241,0.06)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.25rem', color: 'var(--text-bright)' }}>
                  {group.category}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  {group.description}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', flexGrow: 1 }}>
                  {group.commands.map((cmd, j) => (
                    <div key={j} style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
                      <code style={{
                        fontFamily: 'var(--mono)',
                        fontSize: '0.75rem',
                        color: 'var(--accent-light)',
                        fontWeight: 600,
                        whiteSpace: 'nowrap',
                        flexShrink: 0,
                        padding: '0.25rem 0.5rem',
                        background: 'var(--accent-dim)',
                        borderRadius: 'var(--radius-xs)',
                      }}>
                        {cmd.cmd}
                      </code>
                      <span style={{ fontSize: '0.8125rem', color: 'var(--text)', lineHeight: 1.5 }}>
                        {cmd.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimIn>
          ))}
        </div>
      </div>
    </section>
  )
}
