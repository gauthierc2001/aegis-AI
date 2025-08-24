'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import TerminalSection from '@/components/TerminalSection'
import VisionSection from '@/components/VisionSection'
import ClosingSection from '@/components/ClosingSection'

import ParticleBackground from '@/components/ParticleBackground'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  useEffect(() => {
    // Set loaded state after a brief delay
    const timer = setTimeout(() => setIsLoaded(true), 100)
    
    return () => {
      clearTimeout(timer)
    }
  }, [])

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen bg-gradient-cinematic overflow-x-hidden"
    >
      {/* Animated Background */}
      <motion.div 
        className="fixed inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <ParticleBackground />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center py-20 md:py-0">
          <HeroSection isLoaded={isLoaded} />
        </section>

        {/* About Section */}
        <section className="min-h-screen flex items-center justify-center py-20 md:py-0">
          <AboutSection />
        </section>

        {/* Terminal Section */}
        <section className="min-h-screen flex items-center justify-center py-20 md:py-0">
          <TerminalSection />
        </section>

        {/* Vision Section */}
        <section className="min-h-screen flex items-center justify-center py-20 md:py-0">
          <VisionSection />
        </section>

        {/* Closing Section */}
        <section className="min-h-screen flex items-center justify-center py-20 md:py-0">
          <ClosingSection />
        </section>

      </div>
    </div>
  )
}
