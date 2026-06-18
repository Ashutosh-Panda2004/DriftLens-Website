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

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          Turn AI Chaos<br />into Compounded Intelligence
        </motion.h1>

        <motion.p className="hero__sub" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}>
          Every AI correction you make disappears at session end. DriftLens captures them, classifies why they happened, ranks what matters most, updates your skill files automatically, prevents repeats before code is written — and tells you the dollar value of all of it.
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
              <div className="metrics__label">Correction signals captured</div>
            </div>
            <div className="metrics__item">
              <div className="metrics__value metrics__value--green">$2,992</div>
              <div className="metrics__label">Net AI ROI / month (avg)</div>
            </div>
            <div className="metrics__item">
              <div className="metrics__value metrics__value--accent">89%</div>
              <div className="metrics__label">Failure prediction accuracy</div>
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