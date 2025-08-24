'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function VisionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const visionWords = ["Adaptive.", "Transparent.", "Relentless."]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const wordVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className="text-center px-6 max-w-6xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="space-y-8">
        {visionWords.map((word, index) => (
          <motion.h2
            key={index}
            className="font-monument text-white leading-none"
            style={{
              fontSize: 'clamp(3rem, 12vw, 8rem)',
              fontWeight: 'normal',
            }}
            variants={wordVariants}
            custom={index}
          >
            {word}
          </motion.h2>
        ))}
      </div>
    </motion.div>
  )
}
