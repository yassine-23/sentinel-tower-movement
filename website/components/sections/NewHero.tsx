'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Flame, Github, Droplet, Shield, Zap, Eye } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const solutions = [
  {
    id: 'wildfire',
    icon: Flame,
    title: 'Wildfire Response',
    subtitle: 'The 15-Minute War',
    description: 'A fire that passes two hectares before attack is almost never contained. Sentinels pre-position sensing, water, and drones inside the forest — so response begins in minutes, not from a station an hour away.',
    stats: [
      { icon: Eye, label: 'Containment window', value: '15min' },
      { icon: Shield, label: 'Odds past 2 hectares', value: '<10%' },
      { icon: Zap, label: 'Target: detection to first drop', value: '<10min' },
    ],
  },
  {
    id: 'water',
    icon: Droplet,
    title: 'Water Infrastructure',
    subtitle: 'Reservoir, Anchor, Hydrant',
    description: 'Every sentinel stands on a buried water tank that doubles as its foundation — a pre-positioned cache for drones first and helicopters second, with fog harvesting where coastal fog allows.',
    stats: [
      { icon: Shield, label: 'Buried reservoir', value: '10m³' },
      { icon: Droplet, label: 'Fog yield in fog belts', value: '6–22L/m²' },
      { icon: Eye, label: 'Refill precedent', value: 'Heli-Hydrant' },
    ],
  },
  {
    id: 'blueprint',
    icon: Github,
    title: 'Open Blueprint',
    subtitle: 'Built in Public Since 2025',
    description: 'The method is published, cited, and free to implement with attribution. What we seek now: technical validation, institutional partners, blade suppliers, and a first measurable pilot.',
    stats: [
      { icon: Zap, label: 'Blade waste by 2050', value: '43Mt' },
      { icon: Shield, label: 'Method + data', value: 'Open' },
      { icon: Eye, label: 'First public disclosure', value: '2025' },
    ],
  },
];

export default function NewHero() {
  const ref = useRef(null);
  const [activeSolution, setActiveSolution] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const currentSolution = solutions[activeSolution];

  // Auto-rotate solutions every 5 seconds
  React.useEffect(() => {
    if (!isAutoRotating) return;

    const interval = setInterval(() => {
      setActiveSolution((prev) => (prev + 1) % solutions.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoRotating]);

  const handleSolutionClick = (index: number) => {
    setActiveSolution(index);
    setIsAutoRotating(false);

    // Re-enable auto-rotation after 15 seconds of inactivity
    setTimeout(() => setIsAutoRotating(true), 15000);
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setActiveSolution((prev) => (prev - 1 + solutions.length) % solutions.length);
        setIsAutoRotating(false);
        setTimeout(() => setIsAutoRotating(true), 15000);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setActiveSolution((prev) => (prev + 1) % solutions.length);
        setIsAutoRotating(false);
        setTimeout(() => setIsAutoRotating(true), 15000);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-pine-950">
      {/* Layered background: forest photo + pine gradients + glows */}
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=1920&q=80"
          alt="Majestic red oak forest panorama"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pine-950/90 via-pine-950/70 to-pine-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-5%,rgba(46,204,113,0.14),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_105%,rgba(255,107,53,0.16),transparent_70%)]" />
      </motion.div>
      <div className="absolute inset-0 texture-grid opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-28 pb-16 sm:pt-32 sm:pb-24 md:pt-36 md:pb-32"
      >
        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 sm:mb-8"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-forest-400/25 bg-forest-500/[0.08] backdrop-blur-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-ember-400 animate-pulse shadow-[0_0_8px_2px_rgba(255,140,90,0.7)]" />
              <span className="text-xs sm:text-sm font-medium text-forest-200/90 uppercase tracking-[0.2em] font-display">Earth&rsquo;s Immune System</span>
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 sm:mb-8 leading-[1.02] text-mist tracking-tight px-4"
          >
            Raise the
            <br />
            <span className="text-ember-gradient">Blades</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl text-mist/55 mb-10 sm:mb-14 leading-relaxed max-w-2xl mx-auto px-4 font-light"
          >
            Retired wind blades, reborn as fire sentinels — Earth&rsquo;s immune response.
            Satellites shrink time-to-detection. We shrink time-to-first-drop.
          </motion.p>
        </div>

        {/* Solution Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="max-w-6xl mx-auto"
        >
          {/* Tab Navigation */}
          <div className="flex justify-center gap-1 sm:gap-2 mb-10 sm:mb-14 overflow-x-auto scrollbar-hide">
            <div className="inline-flex gap-1 sm:gap-2 p-1.5 rounded-2xl border border-white/[0.08] bg-pine-900/60 backdrop-blur-md">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                const isActive = activeSolution === index;
                return (
                  <button
                    key={solution.id}
                    onClick={() => handleSolutionClick(index)}
                    aria-label={`View ${solution.title} solution`}
                    aria-pressed={isActive}
                    className={`relative group px-4 sm:px-6 py-3 rounded-xl transition-all duration-300 flex-shrink-0 ${
                      isActive ? 'text-pine-950' : 'text-mist/50 hover:text-mist/80'
                    }`}
                  >
                    {/* Active pill */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-br from-ember-400 to-ember-600 rounded-xl shadow-[0_4px_24px_-6px_rgba(255,107,53,0.55)]"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}

                    <div className="relative flex items-center gap-2 sm:gap-2.5">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="font-semibold text-xs sm:text-sm whitespace-nowrap font-display">{solution.title}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Solution Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSolution}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12"
            >
              {/* Left: Description */}
              <div className="flex flex-col justify-center space-y-6 order-2 md:order-1">
                <div>
                  <div className="eyebrow text-ember-400 mb-4">{currentSolution.subtitle}</div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-mist mb-4">
                    {currentSolution.title}
                  </h3>
                  <p className="text-base sm:text-lg text-mist/55 leading-relaxed">
                    {currentSolution.description}
                  </p>
                </div>
              </div>

              {/* Right: Stats Grid */}
              <div className="grid grid-cols-1 gap-3 sm:gap-4 order-1 md:order-2">
                {currentSolution.stats.map((stat, i) => {
                  const StatIcon = stat.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: i * 0.1,
                      }}
                      className="card-dark flex items-center gap-5 p-5 sm:p-6 group"
                    >
                      <div className="flex-shrink-0 p-3.5 rounded-xl bg-gradient-to-br from-forest-500/20 to-forest-800/20 border border-forest-400/20 group-hover:border-forest-400/40 transition-colors">
                        <StatIcon className="w-6 h-6 text-forest-300" />
                      </div>
                      <div>
                        <div className="text-3xl sm:text-4xl font-bold text-mist mb-0.5 font-display tracking-tight">
                          {stat.value}
                        </div>
                        <div className="text-xs sm:text-sm text-mist/45 uppercase tracking-[0.15em] font-medium">{stat.label}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-14 sm:mt-18 md:mt-20 px-4"
        >
          <Link href="#contact" className="w-full sm:w-auto">
            <Button size="lg" className="group w-full sm:w-auto px-8 h-13 sm:h-14 text-base bg-gradient-to-br from-ember-400 to-ember-600 text-pine-950 hover:from-ember-300 hover:to-ember-500 font-semibold rounded-xl shadow-[0_8px_32px_-8px_rgba(255,107,53,0.6)]">
              Join the Movement
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="#impact" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-13 sm:h-14 px-8 text-base border-mist/20 bg-transparent text-mist hover:bg-white/[0.06] hover:border-mist/35 font-medium rounded-xl">
              See the Impact
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-mist/25 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-ember-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
