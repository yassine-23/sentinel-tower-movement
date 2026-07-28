'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { DollarSign, TrendingDown, TrendingUp, Calculator } from 'lucide-react';

export default function EconomicsSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="relative w-full bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 py-24 md:py-32">
      <div className="container px-6 max-w-7xl mx-auto">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 backdrop-blur-sm mb-6">
            <Calculator className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Cost Analysis
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-slate-300 bg-clip-text text-transparent mb-6">
            The Economics
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Prevention is exponentially more cost-effective than reaction. The numbers speak for themselves.
          </p>
        </motion.div>

        {/* Cost Comparison Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-8 md:p-10 rounded-3xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-900 hover:border-green-300 dark:hover:border-green-800 transition-all text-center">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white mb-6">
                <TrendingDown className="w-8 h-8" />
              </div>
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">
                $50K
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Sentinel Tower
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Prevention infrastructure that lasts 25+ years
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-8 md:p-10 rounded-3xl bg-white dark:bg-slate-900 border-2 border-orange-200 dark:border-orange-900 hover:border-orange-300 dark:hover:border-orange-800 transition-all text-center">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 text-white mb-6">
                <DollarSign className="w-8 h-8" />
              </div>
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-orange-600 to-red-600 bg-clip-text text-transparent mb-3">
                $5M
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Fire Suppression
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Reactive response per established fire
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-rose-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-8 md:p-10 rounded-3xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-900 hover:border-red-300 dark:hover:border-red-800 transition-all text-center">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 text-white mb-6">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-red-600 to-rose-600 bg-clip-text text-transparent mb-3">
                $5B
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Major Wildfire
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Total economic loss including damage
              </p>
            </div>
          </motion.div>
        </div>

        {/* ROI Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 rounded-3xl blur-2xl" />
          <div className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-2 border-blue-200/50 dark:border-blue-900/50 text-center">
            <div className="text-7xl md:text-8xl font-bold bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent leading-none mb-6">
              100,000:1
            </div>
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
              <span className="font-bold">Potential return ratio.</span> One prevented major wildfire funds 1,000 sentinel towers—and saves countless lives.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Every dollar invested prevents $100,000 in losses
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
