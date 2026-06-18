import { SectionHeader } from '../ui/SectionHeader'
import { AnimIn } from '../ui/AnimIn'

const AGENTS = [
  { name: 'GitHub Copilot', format: '.github/skills/SKILL.md' },
  { name: 'Claude Code',    format: 'CLAUDE.md' },
  { name: 'Cursor',         format: '.cursor/rules/*.mdc' },
  { name: 'Gemini CLI',     format: 'GEMINI.md' },
  { name: 'Windsurf',       format: '.windsurfrules' },
  { name: 'Codex CLI',      format: 'AGENTS.md' },
  { name: 'Any MCP Host',   format: '.driftlens/rules/' },
]

export default function AgentSupport() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Works With"
          title="Whatever AI tool you use today."
          sub="Install once. DriftLens reads corrections, updates rule files, and injects context for every agent you use."
        />
        <AnimIn>
          <div className="matrix">
            <table>
              <thead>
                <tr>
                  <th>Agent</th>
                  <th>Skill File Updated</th>
                  <th>MCP Prevention</th>
                  <th>Quality Tracking</th>
                  <th>Auto PR</th>
                </tr>
              </thead>
              <tbody>
                {AGENTS.map(a => (
                  <tr key={a.name}>
                    <td style={{ fontWeight: 600, color: 'var(--text-bright)' }}>{a.name}</td>
                    <td style={{ fontFamily: 'var(--mono)', fontSize: '0.8125rem', color: 'var(--text)' }}>{a.format}</td>
                    <td><span className="matrix__badge">Active</span></td>
                    <td><span className="matrix__badge">Tracked</span></td>
                    <td><span className="matrix__badge">Auto PR</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimIn>
      </div>
    </section>
  )
}