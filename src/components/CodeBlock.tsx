import { useState, type ReactNode } from 'react'

interface Props {
  code?: string
  children?: ReactNode
  label?: string
  copyText?: string
  noCopy?: boolean
}

function parseLine(line: string, i: number) {
  if (line === '') return <span key={i} className="cl-blank" />
  if (/^[$>] /.test(line)) {
    const rest = line.slice(2)
    return (
      <span key={i} className="cl">
        <span className="cl-prompt">{line[0]} </span>
        <span className="cl-cmd">{rest}</span>
      </span>
    )
  }
  if (line.trimStart().startsWith('#')) return <span key={i} className="cl cl-comment">{line}</span>
  if (line.includes('->') && line.startsWith('#')) return <span key={i} className="cl cl-comment">{line}</span>
  if (/✓|✔/.test(line)) return <span key={i} className="cl cl-success">{line}</span>
  if (/✗|Error:/.test(line)) return <span key={i} className="cl cl-error">{line}</span>
  if (/\[\d+%\]/.test(line)) {
    const parts = line.split(/(\[\d+%\])/g)
    return (
      <span key={i} className="cl cl-out">
        {parts.map((p, j) => /\[\d+%\]/.test(p) ? <span key={j} className="cl-success">{p}</span> : p)}
      </span>
    )
  }
  if (/^[-─=]{3,}/.test(line.trim())) return <span key={i} className="cl cl-head">{line}</span>
  return <span key={i} className="cl cl-out">{line}</span>
}

export default function CodeBlock({ code, children, label, copyText, noCopy }: Props) {
  const [copied, setCopied] = useState(false)
  const showHeader = !!(label || !noCopy)

  const handleCopy = () => {
    const text = copyText ?? code ?? ''
    navigator.clipboard.writeText(text).catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="codeblock">
      {showHeader && (
        <div className="codeblock-header">
          <span className="codeblock-title">{label ?? ''}</span>
          {!noCopy && (
            <button className={`codeblock-copy${copied ? ' copied' : ''}`} onClick={handleCopy}>
              {copied ? 'copied' : 'copy'}
            </button>
          )}
        </div>
      )}
      <div className="codeblock-body">
        {code ? code.split('\n').map((l, i) => parseLine(l, i)) : children}
      </div>
    </div>
  )
}
