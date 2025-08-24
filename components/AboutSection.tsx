'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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

  const bulletVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const bulletPoints = [
    "1,000,000 $AEGIS supply",
    "20% AI Treasury (fully controlled by machine)",
    "Dynamic 0–15% taxation (AI-controlled)",
    "Staking with AI-prioritized rewards"
  ]

  return (
    <motion.div
      ref={ref}
      className="max-w-7xl mx-auto px-6"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Main Headline */}
      <motion.div variants={itemVariants} className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
            The First AI-Managed
          </span>
          <br />
          <span className="text-white">DeFi Protocol</span>
        </h2>
      </motion.div>

      {/* Bullet Points */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {bulletPoints.map((point, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-4 p-4 bg-black/20 rounded-xl border border-gold/20"
            variants={bulletVariants}
            custom={index}
          >
            <div className="w-3 h-3 bg-gold rounded-full flex-shrink-0" />
            <p className="text-lg text-gray-300 font-inter">
              {point}
            </p>
          </motion.div>
        ))}
      </motion.div>

                          {/* 3D Cards Section */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-12 mb-24 mt-20 max-w-7xl mx-auto" style={{ perspective: '1500px' }}>
        
        {/* Burns Card */}
        <motion.div
          className="group relative h-80 w-full max-w-64 mx-auto"
          style={{ 
            transformStyle: 'preserve-3d',
            transform: 'rotateX(5deg) rotateY(10deg) translateZ(10px) scale(1.05)',
          }}
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold/40 via-gold-light/30 to-gold/20 rounded-2xl blur-3xl group-hover:blur-4xl transition-all duration-700" />
          
                     {/* Metallic Glass effect */}
                       <div className="relative h-full p-6 bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-2xl border border-gold/40 rounded-2xl shadow-2xl transform-gpu overflow-hidden" style={{ transform: 'translateZ(20px)' }}>
            {/* Metallic texture overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-2xl" />
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
            
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center space-x-3 mb-4">
                                 <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-light rounded-xl flex items-center justify-center shadow-lg border border-gold/50" style={{ transform: 'translateZ(30px)' }}>
                   <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                   </svg>
                 </div>
                <h3 className="text-xl font-bold text-gold" style={{ transform: 'translateZ(25px)' }}>Burns</h3>
              </div>
              <div className="space-y-3 text-sm text-gray-300 flex-1">
                <div>
                  <span className="text-gold font-semibold">Goal:</span>
                  <p className="mt-1">Reduce supply → boost token value</p>
                </div>
                <div>
                  <span className="text-gold font-semibold">When:</span>
                  <p className="mt-1">Excess treasury, overheated supply, post-rally</p>
                </div>
                <div>
                  <span className="text-gold font-semibold">How:</span>
                  <p className="mt-1">Periodic/event-driven, announced with tx link</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Buybacks Card */}
        <motion.div
          className="group relative h-80 w-full max-w-64 mx-auto"
          style={{ 
            transformStyle: 'preserve-3d',
            transform: 'rotateX(5deg) rotateY(10deg) translateZ(10px) scale(1.05)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold/40 via-gold-light/30 to-gold/20 rounded-2xl blur-3xl group-hover:blur-4xl transition-all duration-700" />
          <div className="relative h-full p-6 bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-2xl border border-gold/40 rounded-2xl shadow-2xl transform-gpu overflow-hidden" style={{ transform: 'translateZ(20px)' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-2xl" />
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center space-x-3 mb-4">
                                 <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-light rounded-xl flex items-center justify-center shadow-lg border border-gold/50" style={{ transform: 'translateZ(30px)' }}>
                   <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                   </svg>
                 </div>
                <h3 className="text-xl font-bold text-gold" style={{ transform: 'translateZ(25px)' }}>Buybacks</h3>
              </div>
              <div className="space-y-3 text-sm text-gray-300 flex-1">
                <div>
                  <span className="text-gold font-semibold">Goal:</span>
                  <p className="mt-1">Price/liquidity support; recycle fees</p>
                </div>
                <div>
                  <span className="text-gold font-semibold">When:</span>
                  <p className="mt-1">Sharp drawdowns, thin books, negative skew</p>
                </div>
                <div>
                  <span className="text-gold font-semibold">How:</span>
                  <p className="mt-1">TWAP buys w/ slippage caps; re-stake/reserve results</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Airdrops Card */}
        <motion.div
          className="group relative h-80 w-full max-w-64 mx-auto"
          style={{ 
            transformStyle: 'preserve-3d',
            transform: 'rotateX(5deg) rotateY(-10deg) translateZ(10px) scale(1.05)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold/40 via-gold-light/30 to-gold/20 rounded-2xl blur-3xl group-hover:blur-4xl transition-all duration-700" />
          <div className="relative h-full p-6 bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-2xl border border-gold/40 rounded-2xl shadow-2xl transform-gpu overflow-hidden" style={{ transform: 'translateZ(20px)' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-2xl" />
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center space-x-3 mb-4">
                                 <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-light rounded-xl flex items-center justify-center shadow-lg border border-gold/50" style={{ transform: 'translateZ(30px)' }}>
                   <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M20 12V10H22V12C22 16.4183 18.4183 20 14 20H10C5.58172 20 2 16.4183 2 12V10H4V12C4 15.3137 6.68629 18 10 18H14C17.3137 18 20 15.3137 20 12Z"/>
                     <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                     <path d="M7 6L7.74 8.74L10.5 9.5L7.74 10.26L7 13L6.26 10.26L3.5 9.5L6.26 8.74L7 6Z"/>
                     <path d="M17 6L17.74 8.74L20.5 9.5L17.74 10.26L17 13L16.26 10.26L13.5 9.5L16.26 8.74L17 6Z"/>
                   </svg>
                 </div>
                <h3 className="text-xl font-bold text-gold" style={{ transform: 'translateZ(25px)' }}>Airdrops</h3>
              </div>
              <div className="space-y-3 text-sm text-gray-300 flex-1">
                <div>
                  <span className="text-gold font-semibold">Goal:</span>
                  <p className="mt-1">Reward alignment & retention</p>
                </div>
                <div>
                  <span className="text-gold font-semibold">Who:</span>
                  <p className="mt-1">Top stakers (size × duration), loyalty snapshots</p>
                </div>
                <div>
                  <span className="text-gold font-semibold">When:</span>
                  <p className="mt-1">Milestones, stabilization, surplus treasury</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Redistributions Card */}
        <motion.div
          className="group relative h-80 w-full max-w-64 mx-auto"
          style={{ 
            transformStyle: 'preserve-3d',
            transform: 'rotateX(5deg) rotateY(-10deg) translateZ(10px) scale(1.05)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold/40 via-gold-light/30 to-gold/20 rounded-2xl blur-3xl group-hover:blur-4xl transition-all duration-700" />
          <div className="relative h-full p-6 bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-2xl border border-gold/40 rounded-2xl shadow-2xl transform-gpu overflow-hidden" style={{ transform: 'translateZ(20px)' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-2xl" />
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center space-x-3 mb-4">
                                 <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-light rounded-xl flex items-center justify-center shadow-lg border border-gold/50" style={{ transform: 'translateZ(30px)' }}>
                   <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                   </svg>
                 </div>
                <h3 className="text-xl font-bold text-gold" style={{ transform: 'translateZ(25px)' }}>Redistributions</h3>
              </div>
              <div className="space-y-3 text-sm text-gray-300 flex-1">
                <div>
                  <span className="text-gold font-semibold">Goal:</span>
                  <p className="mt-1">Better holder distribution & liquidity</p>
                </div>
                <div>
                  <span className="text-gold font-semibold">When:</span>
                  <p className="mt-1">Wallet concentration, low staking, liquidity gaps</p>
                </div>
                <div>
                  <span className="text-gold font-semibold">How:</span>
                  <p className="mt-1">Targeted micro-distributions/incentives</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
