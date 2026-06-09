import CodeBlock from '../components/CodeBlock'

const CONTRIB = `$ git clone https://github.com/Ashutosh-Panda2004/DriftLens
$ cd DriftLens
$ npm install
$ npm run dev
$ npm test`

const STACK = [
  ['CLI framework',   'Node.js + TypeScript + commander.js', "Target users' stack. npm install -g is frictionless."],
  ['Git integration', 'simple-git',                         'Typed, well-maintained.'],
  ['Embeddings',      'Voyage AI / OpenAI / Ollama',        'voyage-code-3 is code-optimised. Anthropic has no embedding API.'],
  ['Pattern naming',  'Claude Sonnet / GPT-4o / Gemini',   'Configurable. Speed/cost balance.'],
  ['Skill proposals', 'Claude Opus / GPT-4.5 / Gemini Pro', 'Reasoning quality for minimal rule additions.'],
  ['GitHub API',      '@octokit/rest',                      'Official SDK. Draft PR creation.'],
  ['GitLab API',      '@gitbeaker/rest',                    'Official SDK. Draft MR creation.'],
  ['Local storage',   'JSONL files',                        'Human-readable. Git-diffable. No infrastructure needed.'],
  ['Dashboard',       'Fastify + Vanilla JS',               'Zero client dependencies. Self-contained.'],
  ['Distribution',    'npm global install',                 'One command setup.'],
]

export default function About() {
  return (
    <div className="inner-page">
      <div className="container">
        <header className="page-hero">
          <span className="eyebrow">About</span>
          <h1>Built to solve a real problem.</h1>
          <p>
            DriftLens started as an answer to a recurring frustration: making the
            same AI correction every single day, with no way to make it stick.
          </p>
        </header>

        <section className="content-block">
          <h2>The backstory</h2>
          <p>
            Every developer using AI coding tools has experienced the loop: you correct
            the same mistake three times in a week. The AI writes{' '}
            <code>fetch('/api/users')</code>, you change it to{' '}
            <code>userService.getAll()</code>, commit — and the next session starts fresh.
          </p>
          <p>
            The skill files (<code>CLAUDE.md</code>, <code>.cursorrules</code>,{' '}
            <code>.github/skills/</code>) exist precisely to carry those conventions
            forward. But updating them manually requires you to notice the pattern,
            articulate the rule, and remember to write it down — while building something.
          </p>
          <p>
            DriftLens automates that loop. Your git history and session logs already
            contain the evidence. The post-commit hook captures it passively. The analyser
            finds the patterns. The proposer drafts the rule. You approve it once.
          </p>
        </section>

        <hr style={{ margin: '3rem 0' }} />

        <section className="content-block">
          <h2>Developer</h2>
          <div className="dev-card">
            <p className="dev-name">Ashutosh Panda</p>
            <a className="dev-handle" href="https://github.com/Ashutosh-Panda2004" target="_blank" rel="noreferrer">
              @Ashutosh-Panda2004
            </a>
            <p className="dev-bio">
              I built DriftLens because I was spending more time re-teaching my AI agent
              than writing actual code. The corrections were always the same.
              The session logs had the answers. No existing tool was capturing them.
            </p>
            <p className="dev-bio">
              I work on developer tooling and full-stack development, and I'm interested
              in the intersection of software engineering practice and AI-assisted workflows.
            </p>
            <div className="dev-links">
              <a href="https://github.com/Ashutosh-Panda2004" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a href="https://www.linkedin.com/in/ashutosh2004/" target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <a href="https://ashutoshpanda.vercel.app/" target="_blank" rel="noreferrer">
                Portfolio ↗
              </a>
              <a href="mailto:ashutoshpanda.india@gmail.com">
                ashutoshpanda.india@gmail.com
              </a>
            </div>
          </div>
        </section>

        <hr style={{ margin: '3rem 0' }} />

        <section className="content-block">
          <h2>Tech stack</h2>
          <table className="compat-table" style={{ marginTop: '1.25rem' }}>
            <thead>
              <tr>
                <th>Component</th>
                <th>Technology</th>
                <th>Why</th>
              </tr>
            </thead>
            <tbody>
              {STACK.map(([comp, tech, why]) => (
                <tr key={comp}>
                  <td>{comp}</td>
                  <td className="t-path">{tech}</td>
                  <td className="t-note">{why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <hr style={{ margin: '3rem 0' }} />

        <section className="content-block">
          <h2>Contributing</h2>
          <p>
            DriftLens is MIT licensed. Contributions welcome — bug fixes, new session
            log parsers, additional agent support, and documentation improvements.
          </p>
          <p>
            Before opening a PR for a significant change,{' '}
            <a href="https://github.com/Ashutosh-Panda2004/DriftLens/issues" target="_blank" rel="noreferrer">
              open an issue first
            </a>. The architecture decisions in <code>docs/DECISIONS.md</code> explain why
            things are structured the way they are.
          </p>
          <CodeBlock code={CONTRIB} label="local setup" />
        </section>

        <hr style={{ margin: '3rem 0' }} />

        <section className="content-block">
          <h2>License</h2>
          <p>MIT. Use it, fork it, build on it, ship it.</p>
          <p>
            <a href="https://github.com/Ashutosh-Panda2004/DriftLens/blob/main/LICENSE" target="_blank" rel="noreferrer">
              Read the full license ↗
            </a>
          </p>
        </section>
      </div>
    </div>
  )
}
