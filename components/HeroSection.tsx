'use client'

import { motion } from 'framer-motion'
import { useRef, useState } from 'react'

interface HeroSectionProps {
  isLoaded: boolean
}

export default function HeroSection({ isLoaded }: HeroSectionProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      setMousePosition({ x, y })
    }
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
  }

  const headlineWords = "Where humans failed, the machine will succeed.".split(" ")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.div
      className="text-center px-4 sm:px-6 max-w-6xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
    >
             {/* Main Headline */}
       <motion.h1 
         className="font-monument text-white mb-8 leading-tight flex flex-wrap justify-center items-center gap-2 sm:gap-4"
         style={{
           fontSize: 'clamp(1.5rem, 6vw, 6rem)',
           fontWeight: 'normal',
         }}
       >
         {/* "Where humans failed" */}
         <motion.span
           className="inline-block"
           variants={wordVariants}
           custom={0}
         >
           Where
         </motion.span>
         <motion.span
           className="inline-block"
           variants={wordVariants}
           custom={1}
         >
           humans
         </motion.span>
         <motion.span
           className="inline-block"
           variants={wordVariants}
           custom={2}
         >
           failed
         </motion.span>
         
         {/* Failed Protocol Logos - Mobile responsive */}
         <div className="flex items-center space-x-2 sm:space-x-4 mx-2 sm:mx-4 order-first sm:order-none w-full sm:w-auto justify-center mb-4 sm:mb-0">
           <motion.img
             src="/safemoon.jpg"
             alt="SafeMoon"
             className="w-8 h-8 sm:w-16 sm:h-16 rounded-full object-cover"
             animate={{
               y: [0, -8, 0],
               rotate: [0, 5, 0],
             }}
             transition={{
               duration: 3,
               repeat: Infinity,
               ease: "easeInOut",
               delay: 0,
             }}
           />
           <motion.img
             src="/titano.png"
             alt="Titano"
             className="w-8 h-8 sm:w-16 sm:h-16 rounded-full object-cover"
             animate={{
               y: [0, -8, 0],
               rotate: [0, -5, 0],
             }}
             transition={{
               duration: 3,
               repeat: Infinity,
               ease: "easeInOut",
               delay: 0.5,
             }}
           />
           <motion.img
             src="/tomb.jpg"
             alt="Tomb"
             className="w-8 h-8 sm:w-16 sm:h-16 rounded-full object-cover"
             animate={{
               y: [0, -8, 0],
               rotate: [0, 5, 0],
             }}
             transition={{
               duration: 3,
               repeat: Infinity,
               ease: "easeInOut",
               delay: 1,
             }}
           />
           <motion.img
             src="/anchor.jpg"
             alt="Anchor"
             className="w-8 h-8 sm:w-16 sm:h-16 rounded-full object-cover"
             animate={{
               y: [0, -8, 0],
               rotate: [0, -5, 0],
             }}
             transition={{
               duration: 3,
               repeat: Infinity,
               ease: "easeInOut",
               delay: 1.5,
             }}
           />
           <motion.img
             src="/ohm.jpg"
             alt="OHM"
             className="w-8 h-8 sm:w-16 sm:h-16 rounded-full object-cover"
             animate={{
               y: [0, -8, 0],
               rotate: [0, 5, 0],
             }}
             transition={{
               duration: 3,
               repeat: Infinity,
               ease: "easeInOut",
               delay: 2,
             }}
           />
         </div>
         
         {/* "the machine will succeed" */}
         <motion.span
           className="inline-block"
           variants={wordVariants}
           custom={3}
         >
           the
         </motion.span>
         <motion.span
           className="inline-block"
           variants={wordVariants}
           custom={4}
         >
           machine
         </motion.span>
         <motion.span
           className="inline-block"
           variants={wordVariants}
           custom={5}
         >
           will
         </motion.span>
         <motion.span
           className="inline-block"
           variants={wordVariants}
           custom={6}
         >
           succeed
         </motion.span>
         
         {/* Aegis Logo */}
         <motion.img
           src="/aegis.jpg"
           alt="Aegis Protocol"
           className="w-8 h-8 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-gold ml-2 sm:ml-4"
           animate={{
             y: [0, -12, 0],
             scale: [1, 1.1, 1],
           }}
           transition={{
             duration: 4,
             repeat: Infinity,
             ease: "easeInOut",
           }}
         />
       </motion.h1>

      {/* Subline */}
      <motion.p
        className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 font-inter px-4"
        variants={itemVariants}
      >
        The first AI-managed DeFi protocol on Base.
      </motion.p>

             {/* CTA */}
       <motion.div
         className="flex justify-center items-center px-4"
         variants={itemVariants}
       >
         <motion.a
           href="https://x.com/protocol_aegis"
           target="_blank"
           rel="noopener noreferrer"
           className="relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gold to-gold-dark text-black font-semibold rounded-lg overflow-hidden group flex items-center gap-2 sm:gap-3 text-sm sm:text-base"
           whileHover={{ scale: 1.08 }}
           whileTap={{ scale: 0.98 }}
         >
           <div className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
           <span className="relative z-10">Follow Aegis</span>
           <svg 
             className="relative z-10 w-4 h-4 sm:w-5 sm:h-5" 
             fill="currentColor" 
             viewBox="0 0 24 24"
           >
             <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
           </svg>
           <div className="absolute inset-0 bg-gold/20 blur-xl group-hover:bg-gold/40 transition-all duration-300" />
         </motion.a>
       </motion.div>
    </motion.div>
  )
}
