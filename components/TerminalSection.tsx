'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

export default function TerminalSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  const terminalLogs = [
    '[AI — 12:43 UTC]',
    'Detected −8% volatility in 24h.',
    'Raising sell tax 6% → 10%.',
    'Lowering buy tax 5% → 3%.',
    'Executing buyback:',
    'https://basescan.org/tx/0x123456789abcdef',
    'Burn executed:',
    'https://basescan.org/tx/0xabcdef123456789',
    'Airdrop sent to top stakers:',
    'https://basescan.org/tx/0xa1b2c3d4e5f67890'
  ]

  useEffect(() => {
    if (isInView && !isTyping) {
      setIsTyping(true)
      setCurrentLineIndex(0)
      setCurrentCharIndex(0)
      setDisplayedLines([])
    }
  }, [isInView, isTyping])

  useEffect(() => {
    if (!isTyping || currentLineIndex >= terminalLogs.length) return

    const currentLine = terminalLogs[currentLineIndex]
    
    if (currentCharIndex < currentLine.length) {
      const timer = setTimeout(() => {
        setCurrentCharIndex(prev => prev + 1)
      }, 22) // 22ms per character

      return () => clearTimeout(timer)
    } else {
      // Line is complete, move to next line
      const timer = setTimeout(() => {
        setDisplayedLines(prev => [...prev, currentLine])
        setCurrentLineIndex(prev => prev + 1)
        setCurrentCharIndex(0)
      }, 200)

      return () => clearTimeout(timer)
    }
  }, [isTyping, currentLineIndex, currentCharIndex, terminalLogs])

  // Stop typing when all lines are done
  useEffect(() => {
    if (currentLineIndex >= terminalLogs.length && isTyping) {
      setIsTyping(false)
    }
  }, [currentLineIndex, terminalLogs.length, isTyping])

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const isLink = (text: string) => text.startsWith('https://')

  // Build the current line being typed
  const currentLine = terminalLogs[currentLineIndex] || ''
  const currentLinePartial = currentLine.slice(0, currentCharIndex)
  const allLines = [...displayedLines]
  if (currentLinePartial) {
    allLines.push(currentLinePartial)
  }

  return (
    <motion.div
      ref={ref}
      className="w-full max-w-[95vw] mx-auto px-6"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Animated Description Text */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="overflow-hidden"
          initial={{ y: 100 }}
          animate={isInView ? { y: 0 } : { y: 100 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-monument text-white mb-6 leading-tight"
          >
            {["A", "self-adaptive", "ecosystem", "governed", "by", "an", "autonomous", "AI", "terminal."].map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-4"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ 
                  scale: 1.05, 
                  color: "#FFD700",
                  transition: { duration: 0.3 }
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
        </motion.div>
        
        <motion.div
          className="overflow-hidden"
          initial={{ y: 50 }}
          animate={isInView ? { y: 0 } : { y: 50 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="text-xl md:text-2xl text-gray-300 font-inter leading-relaxed"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {["Resilient", "during", "volatility,", "designed", "for", "long-term", "growth."].map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-3"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{
                  duration: 0.6,
                  delay: 1.4 + index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ 
                  color: "#FFD700",
                  x: 5,
                  transition: { duration: 0.2 }
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>
        
        {/* Floating particles around the text */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? {
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: [0, -20, 0],
              } : { opacity: 0, scale: 0 }}
              transition={{
                duration: 3,
                delay: 2 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      <div className="bg-black/90 backdrop-blur-sm border border-gold/40 rounded-xl p-12 shadow-2xl relative overflow-hidden min-h-[600px] w-full">
        {/* Terminal Header */}
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-4 h-4 bg-red-500 rounded-full" />
          <div className="w-4 h-4 bg-yellow-500 rounded-full" />
          <div className="w-4 h-4 bg-green-500 rounded-full" />
          <span className="text-gold font-mono text-lg ml-6 font-semibold">Aegis Terminal</span>
        </div>

        {/* Terminal Content */}
        <div className="font-mono text-lg text-green-400 leading-relaxed min-h-[500px] w-full">
          {allLines.map((line, index) => (
            <div key={index} className="mb-2">
              {isLink(line) ? (
                <a
                  href={line}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-light underline transition-colors duration-200 break-all"
                >
                  {line}
                </a>
              ) : (
                <span className="text-green-300">{line}</span>
              )}
            </div>
          ))}
          {isTyping && <span className="typewriter-cursor" />}
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-transparent to-gold/10 pointer-events-none" />
      </div>
    </motion.div>
  )
}
