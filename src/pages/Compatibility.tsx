export default function Compatibility() {
  return (
    <div className="inner-page">
      <div className="container">
        <header className="page-hero">
          <span className="eyebrow">Compatibility</span>
          <h1>Works everywhere you already work.</h1>
          <p>
            Agent-agnostic, editor-agnostic, and vendor-agnostic. Every component —
            LLM, embeddings, skill format — is swappable via config.
          </p>
        </header>

        <div className="compat-group">
          <h2>AI coding agents</h2>
          <table className="compat-table">
            <thead>
              <tr>
                <th>Agent</th>
                <th>Skill file</th>
                <th>Session log support</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['GitHub Copilot', '.github/skills/SKILL.md', 'Copilot Agent Hooks',     'Yes'],
                ['Claude Code',   'CLAUDE.md',               '.claude/ session logs',    'Yes'],
                ['Cursor',        '.cursor/rules/',           '.cursor/ session data',    'Yes'],
                ['Gemini CLI',    'GEMINI.md',                'commit tag detection',     'Yes'],
                ['Windsurf',      '.windsurfrules',           'commit tag detection',     'Yes'],
                ['Codex CLI',     'AGENTS.md',                'commit tag detection',     'Yes'],
                ['Aider',         'CONVENTIONS.md',           '.aider.chat.history.md',  'Yes'],
                ['Any agent',     '.driftlens/rules/',        'universal fallback',       'Yes'],
              ].map(([agent, skill, session, status]) => (
                <tr key={agent}>
                  <td>{agent}</td>
                  <td className="t-path">{skill}</td>
                  <td className="t-note">{session}</td>
                  <td className="t-yes">{status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="compat-group">
          <h2>LLM providers</h2>
          <p>Used for pattern naming (driftlens analyse) and skill file writing (driftlens propose). Configure each independently.</p>
          <table className="compat-table">
            <thead>
              <tr>
                <th>Provider</th>
                <th>Config value</th>
                <th>Recommended models</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Anthropic', 'anthropic', 'claude-sonnet-4-6 (analysis) / claude-opus-4-6 (proposals)', 'Yes'],
                ['OpenAI',    'openai',    'gpt-4o (analysis) / gpt-4.5 (proposals)',                    'Yes'],
                ['Google',    'gemini',    'gemini-flash (analysis) / gemini-pro (proposals)',            'Yes'],
                ['Ollama',    'ollama',    'Any local model. Fully offline.',                             'Yes'],
              ].map(([p, cfg, models, status]) => (
                <tr key={p}>
                  <td>{p}</td>
                  <td className="t-path">{cfg}</td>
                  <td className="t-note">{models}</td>
                  <td className="t-yes">{status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="compat-group">
          <h2>Embedding providers</h2>
          <p>Used during driftlens analyse only. Anthropic has no embedding API — use Voyage AI (default), OpenAI, or Ollama.</p>
          <table className="compat-table">
            <thead>
              <tr>
                <th>Provider</th>
                <th>Config value</th>
                <th>Model</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Voyage AI', 'voyage', 'voyage-code-3',          'Default. Code-optimised.'],
                ['OpenAI',    'openai', 'text-embedding-3-small', 'General purpose.'],
                ['Ollama',    'ollama', 'any local model',        'Fully offline, no API key.'],
              ].map(([p, cfg, model, notes]) => (
                <tr key={p}>
                  <td>{p}</td>
                  <td className="t-path">{cfg}</td>
                  <td className="t-path">{model}</td>
                  <td className="t-note">{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="compat-group">
          <h2>Platform requirements</h2>
          <table className="compat-table">
            <thead>
              <tr><th>Requirement</th><th>Minimum</th><th>Notes</th></tr>
            </thead>
            <tbody>
              {[
                ['Node.js', '18.0.0', 'LTS recommended.'],
                ['npm',     '8.0.0',  'Bundled with Node 18+.'],
                ['git',     '2.28.0', 'For hooks and commit detection.'],
                ['OS',      'Any',    'macOS, Linux, Windows (WSL recommended).'],
              ].map(([r, min, notes]) => (
                <tr key={r}>
                  <td>{r}</td>
                  <td className="t-path">{min}</td>
                  <td className="t-note">{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="compat-group">
          <h2>Git hosting (for driftlens propose)</h2>
          <table className="compat-table">
            <thead>
              <tr><th>Platform</th><th>PR support</th><th>Config key</th></tr>
            </thead>
            <tbody>
              {[
                ['GitHub',    'Draft PRs via @octokit/rest',   '"github"'],
                ['GitLab',    'Draft MRs via @gitbeaker/rest',  '"gitlab"'],
                ['Bitbucket', 'Not yet supported',               '—'],
                ['Local',     '--dry-run applies locally',       'n/a'],
              ].map(([platform, support, cfg]) => (
                <tr key={platform}>
                  <td>{platform}</td>
                  <td className={support.startsWith('Draft') ? 't-yes' : 't-note'}>{support}</td>
                  <td className="t-path">{cfg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
