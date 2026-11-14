import { motion } from 'motion/react'

// Wrap anything in <Reveal> to fade it up when it scrolls into view.
// `delay` lets you stagger items in a list: delay={index * 0.1}
export default function Reveal({ children, delay = 0, y = 24, className, as = 'div' }) {
  const MotionTag = motion[as]

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
