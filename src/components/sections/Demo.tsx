import { useState, useEffect, useRef } from 'react'
import { SectionHeader } from '../ui/SectionHeader'
import { AnimIn } from '../ui/AnimIn'
import { DEMO_STEPS, type TermLine } from '../../data/demoSteps'

const TAG_COLORS: Record<string, string> = {
  SETUP:   'var(--accent-light)',
  ANALYSE: 'var(--cyan)',
  IMPROVE: 'var(--green-bright)',
  PREVENT: '#a78bfa',
  MEASURE: 'var(--amber)',
}

function TypewriterTerminal({ step, termKey }: { step: typeof DEMO_STEPS[0]; termKey: number }) {
  const [visibleLines, setVisibleLines] = useState(0)
  const [typingCmd, setTypingCmd] = useState('')
  const [cmdIdx, setCmdIdx] = useState(-1)
  const bodyRef = useRef<HTMLDivElement>(null)
  const cmdLineIndices = step.lines.map((l, i) => l.type === 'cmd' ? i : -1).filter(i => i !== -1)

  useEffect(() => {
    setVisibleLines(0); setTypingCmd(''); setCmdIdx(-1)
    const t = setTimeout(() => setCmdIdx(0), 350)
    return () => clearTimeout(t)
  }, [step, termKey])

  useEffect(() => {
    if (cmdIdx < 0 || cmdIdx >= cmdLineIndices.length) return
    const lineIndex = cmdLineIndices[cmdIdx]
    const fullText = step.lines[lineIndex].text
    let pos = 0
    setTypingCmd('')
    const ti = setInterval(() => {
      pos++
      setTypingCmd(fullText.slice(0, pos))
      if (pos >= fullText.length) {
        clearInterval(ti)
        const nextCmd = cmdLineIndices[cmdIdx + 1] ?? step.lines.length
        let reveal = lineIndex + 1
        const ri = setInterval(() => {
          setVisibleLines(reveal)
          reveal++
          if (reveal > nextCmd) {
            clearInterval(ri)
            if (cmdIdx + 1 < cmdLineIndices.length) setTimeout(() => setCmdIdx(c => c + 1), 200)
          }
        }, 50)
        return () => clearInterval(ri)
      }
    }, 36)
    return () => clearInterval(ti)
  }, [cmdIdx])

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight
  }, [visibleLines, typingCmd])

  const cls = (type: TermLine['type']) => {
    const map: Record<string, string> = {
      success: 'term-success', warn: 'term-warn', dim: 'term-dim',
      'diff-add': 'term-add', 'diff-del': 'term-del', head: 'term-head', blank: 'term-blank',
    }
    return map[type] ?? 'term-out'
  }

  const curIdx = cmdIdx >= 0 && cmdIdx < cmdLineIndices.length ? cmdLineIndices[cmdIdx] : -1

  return (
    <div className="terminal" ref={bodyRef}>
      {step.lines.map((line, i) => {
        if (i === curIdx) return (
          <div key={i} className="term-line">
            <span className="term-prompt">{'> '}</span>
            <span className="term-cmd-text">{typingCmd}</span>
            <span className="term-cursor">|</span>
          </div>
        )
        if (line.type === 'cmd' && cmdLineIndices.indexOf(i) < cmdIdx) return (
          <div key={i} className="term-line">
            <span className="term-prompt">{'> '}</span>
            <span className="term-cmd-text">{line.text}</span>
          </div>
        )
        if (line.type !== 'cmd' && i < visibleLines) return (
          <div key={i} className={`term-line ${cls(line.type)}`}>{line.text || '\u00a0'}</div>
        )
        return null
      })}
    </div>
  )
}

export default function Demo() {
  const [step, setStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [key, setKey] = useState(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const goTo = (i: number) => { setStep(i); setKey(k => k + 1); setIsPlaying(false) }

  useEffect(() => {
    if (!isPlaying) return
    timerRef.current = setTimeout(() => {
      if (step >= DEMO_STEPS.length - 1) { setIsPlaying(false); return }
      setStep(s => s + 1); setKey(k => k + 1)
    }, 7500)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [step, isPlaying])

  const current = DEMO_STEPS[step]

  return (
    <section className="section demo" id="demo">
      <div className="container">
        <SectionHeader
          eyebrow="Live Demo"
          title="The complete DriftLens workflow."
          sub="From install to skill file PR — watch every command execute in real-time, exactly as you would see it in your terminal."
        />
        <AnimIn>
          <div className="demo-layout">
            <div className="demo-tabs">
              {DEMO_STEPS.map((s, i) => (
                <button
                  key={i}
                  className={`demo-tab ${i === step ? 'demo-tab--active' : ''}`}
                  onClick={() => goTo(i)}
                >
                  <span className="demo-tab__tag" style={{ color: TAG_COLORS[s.tag] }}>{s.tag}</span>
                  <span className="demo-tab__title">{s.title}</span>
                  <span className="demo-tab__sub">{s.subtitle}</span>
                </button>
              ))}
            </div>

            <div className="demo__window">
              <div className="demo__titlebar">
                <div className="demo__dot demo__dot--red" />
                <div className="demo__dot demo__dot--yellow" />
                <div className="demo__dot demo__dot--green" />
                <span className="demo__title">
                  zsh — my-project &nbsp;|&nbsp;
                  <span style={{ color: TAG_COLORS[current.tag] }}>{current.tag}</span>
                  &nbsp;— {current.subtitle}
                </span>
                <div className="demo-controls-inline">
                  <button className="btn btn--ghost" style={{ padding: '0.2rem 0.625rem', fontSize: '0.75rem' }} onClick={() => setKey(k => k + 1)}>
                    Replay
                  </button>
                  <button
                    className={`btn btn--ghost ${isPlaying ? 'demo-playing' : ''}`}
                    style={{ padding: '0.2rem 0.625rem', fontSize: '0.75rem' }}
                    onClick={() => setIsPlaying(p => !p)}
                  >
                    {isPlaying ? 'Pause' : 'Play All'}
                  </button>
                </div>
              </div>

              <div key={key} style={{ height: '420px', overflow: 'hidden' }}>
                <TypewriterTerminal step={current} termKey={key} />
              </div>

              <div className="demo__progress">
                {DEMO_STEPS.map((_, i) => (
                  <div
                    key={i}
                    className={`demo__prog-bar ${i <= step ? 'demo__prog-bar--done' : ''} ${i === step ? 'demo__prog-bar--active' : ''}`}
                    onClick={() => goTo(i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </AnimIn>
      </div>
    </section>
  )
}