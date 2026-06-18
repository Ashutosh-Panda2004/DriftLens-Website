import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import SignalPipeline from './components/sections/SignalPipeline'
import Demo from './components/sections/Demo'
import ROIShowcase from './components/sections/ROIShowcase'
import HowItWorks from './components/sections/HowItWorks'
import Toolkit from './components/sections/Toolkit'
import SetupGuide from './components/sections/SetupGuide'
import Comparison from './components/sections/Comparison'
import AgentSupport from './components/sections/AgentSupport'
import CTA from './components/sections/CTA'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <SignalPipeline />
        <Demo />
        <SetupGuide />
        <ROIShowcase />
        <HowItWorks />
        <Toolkit />
        <Comparison />
        <AgentSupport />
        <CTA />
      </main>
      <Footer />
    </>
  )
}