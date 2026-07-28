'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Flame, Wind, AlertTriangle, TrendingUp } from 'lucide-react';

export default function ProblemSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="relative w-full bg-white dark:bg-slate-900 py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-white dark:from-slate-900 dark:via-slate-900/50 dark:to-slate-900" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 backdrop-blur-sm mb-6">
            <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400" />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Dual Crisis
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
            Two crises. One solution.
          </h2>
        </motion.div>

        {/* Crisis Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Wildfire Crisis */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 border-2 border-red-200/50 dark:border-red-900/50 hover:border-red-300 dark:hover:border-red-800 transition-all">
              <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-red-500 to-orange-600 text-white mb-6">
                <Flame className="w-8 h-8" />
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-2">
                    10M+
                  </div>
                  <p className="text-lg text-slate-700 dark:text-slate-300">
                    Acres burned annually in wildfires
                  </p>
                </div>
                <div className="pt-4 border-t border-red-200/50 dark:border-red-900/50">
                  <div className="flex items-center gap-2 text-red-700 dark:text-red-400">
                    <TrendingUp className="w-5 h-5" />
                    <span className="text-sm font-medium">Increasing 14% yearly</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Turbine Waste Crisis */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-2 border-blue-200/50 dark:border-blue-900/50 hover:border-blue-300 dark:hover:border-blue-800 transition-all">
              <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 text-white mb-6">
                <Wind className="w-8 h-8" />
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-2">
                    43,000
                  </div>
                  <p className="text-lg text-slate-700 dark:text-slate-300">
                    Tons of non-recyclable blades buried annually
                  </p>
                </div>
                <div className="pt-4 border-t border-blue-200/50 dark:border-blue-900/50">
                  <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400">
                    <TrendingUp className="w-5 h-5" />
                    <span className="text-sm font-medium">341,000 turbines worldwide</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Connection Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-green-500/10 rounded-3xl blur-2xl" />
          <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-2 border-green-200/50 dark:border-green-900/50 text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-green-500" />
              <div className="p-2 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-green-500 to-transparent" />
            </div>
            <p className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white leading-relaxed">
              We transform the waste into wildfire prevention infrastructure
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
