'use client';

import { motion } from 'framer-motion';
import AnimatedCounter from '../ui/AnimatedCounter';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 4K Wildfire Background with Parallax */}
      <div
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1628352081506-83c43123ed6d?w=1920&q=80)',
        }}
      />

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-12"
        >
          {/* Main headline */}
          <h1 className="text-7xl md:text-9xl font-black text-white tracking-tight text-shadow-glow">
            EARTH'S IMMUNE SYSTEM
          </h1>

          {/* Stats grid - Floating Glass Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-6xl mx-auto"
          >
            {/* Lives Lost */}
            <motion.div
              className="glass-strong rounded-3xl p-10 premium-shadow-lg glass-hover animate-float"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-7xl font-black text-flame-400 mb-3">
                <AnimatedCounter end={200} suffix="+" />
              </div>
              <div className="text-white text-xl font-semibold">Lives Lost</div>
              <div className="text-warm-200 text-sm mt-2">Annually to wildfires</div>
            </motion.div>

            {/* Economic Cost */}
            <motion.div
              className="glass-strong rounded-3xl p-10 premium-shadow-lg glass-hover animate-float-delayed animate-glow"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-7xl font-black text-gradient mb-3">
                <AnimatedCounter end={50} prefix="$" suffix="B+" />
              </div>
              <div className="text-white text-xl font-semibold">Annual Damage</div>
              <div className="text-warm-200 text-sm mt-2">Property & suppression</div>
            </motion.div>

            {/* CO2 Emissions */}
            <motion.div
              className="glass-strong rounded-3xl p-10 premium-shadow-lg glass-hover animate-float-delayed-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-7xl font-black text-flame-500 mb-3">
                <AnimatedCounter end={1.8} suffix="B" decimals={1} />
              </div>
              <div className="text-white text-xl font-semibold">Tons CO₂</div>
              <div className="text-warm-200 text-sm mt-2">Released yearly</div>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 text-white"
            >
              <span className="text-sm font-medium tracking-wider uppercase">Discover the solution</span>
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}