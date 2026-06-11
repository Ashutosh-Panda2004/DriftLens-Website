import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export const fadeUpVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}
export const staggerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export function AnimIn({ children, delay = 0, className = '' }: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'}
      variants={fadeUpVariant} transition={{ delay }} className={className}>
      {children}
    </motion.div>
  )
}