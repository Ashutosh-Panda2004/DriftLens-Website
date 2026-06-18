import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText('npm install -g github:Ashutosh-Panda2004/DriftLens').catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <section className="hero">
      <div className="hero__bg">
        <div className="hero__gradient" />
        <div className="hero__grid" />
      </div>
      <div className="hero__content">

        <motion.div className="hero__badge" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.5 }}>
          <span className="hero__badge-dot" />
          Open source · Works with every major AI agent
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          Stop fixing the same<br />AI mistake twice.
        </motion.h1>

        <motion.p className="hero__sub" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}>
          DriftLens captures every correction you make, turns the recurring ones into rules your AI follows automatically, and proves the time you save in real dollars.
        </motion.p>

        <motion.div className="hero__actions" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65, duration: 0.5 }}>
          <a href="#demo" className="btn btn--primary btn--large">Watch Demo</a>
          <a href="#features" className="btn btn--secondary btn--large">Explore Features</a>
        </motion.div>

        <motion.div className="hero__install" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85, duration: 0.5 }}>
          <div className="hero__install-box">
            <span className="dollar">$</span>
            <span className="hero__install-cmd">npm install -g github:Ashutosh-Panda2004/DriftLens</span>
            <button className="copy-btn" onClick={copy}>{copied ? 'copied!' : 'copy'}</button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0, duration: 0.6 }}>
          <div className="metrics metrics--4col">
            <div className="metrics__item">
              <div className="metrics__value">3</div>
              <div className="metrics__label">Ways corrections are captured</div>
            </div>
            <div className="metrics__item">
              <div className="metrics__value metrics__value--green">$2,992</div>
              <div className="metrics__label">Net AI ROI per month</div>
            </div>
            <div className="metrics__item">
              <div className="metrics__value metrics__value--accent">89%</div>
              <div className="metrics__label">Failure-prediction accuracy</div>
            </div>
            <div className="metrics__item">
              <div className="metrics__value metrics__value--amber">7+</div>
              <div className="metrics__label">AI agents supported</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}