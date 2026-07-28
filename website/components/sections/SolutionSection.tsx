'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Recycle, Eye, Bell, Zap, Shield, Target } from 'lucide-react';

export default function SolutionSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="relative w-full py-24 md:py-32 bg-slate-50 dark:bg-slate-950">
      <div className="container px-6 max-w-7xl mx-auto">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 backdrop-blur-sm mb-6">
            <Target className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Three-Step System
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-slate-300 bg-clip-text text-transparent mb-6">
            The Solution
          </h2>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-slate-600 dark:text-slate-400">
            Repurposing 40-meter turbine blades into intelligent sentinel towers that detect wildfires before they spread.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-12"
        >
          {/* Large card - Repurpose */}
          <div className="md:col-span-3 md:row-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-500 to-emerald-600 p-8 md:p-10 text-white hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
            <div className="relative">
              <div className="inline-flex p-3 rounded-2xl bg-white/20 backdrop-blur-sm mb-6">
                <Recycle className="w-8 h-8" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Repurpose</h3>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                40-meter turbine blades installed vertically. Perfect height, weather-resistant, minimal maintenance.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-sm">Sustainable</span>
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-sm">Cost-Effective</span>
              </div>
            </div>
          </div>

          {/* Tall card - Detect */}
          <div className="md:col-span-3 md:row-span-2 group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 p-8 md:p-10 border-2 border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 hover:scale-[1.02] transition-all duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />
            <div className="relative">
              <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 text-white mb-6">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Detect</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
                Multi-spectral cameras and Edge AI detect smoke and heat anomalies invisible to the human eye.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-slate-700 dark:text-slate-300">Thermal imaging</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-500" />
                  <span className="text-slate-700 dark:text-slate-300">4K visual sensors</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-indigo-500" />
                  <span className="text-slate-700 dark:text-slate-300">Edge AI processing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Wide card - Respond */}
          <div className="md:col-span-6 group relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 to-red-600 p-8 md:p-10 text-white hover:scale-[1.01] transition-transform duration-300">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="inline-flex p-3 rounded-2xl bg-white/20 backdrop-blur-sm mb-4">
                  <Bell className="w-8 h-8" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Respond</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  Alert emergency services in under 60 seconds with precise coordinates and fire analysis.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">&lt;60s</div>
                  <div className="text-white/80 text-sm">Alert Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">GPS</div>
                  <div className="text-white/80 text-sm">Precision</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">24/7</div>
                  <div className="text-white/80 text-sm">Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Performance Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { icon: Shield, value: '50 mi²', label: 'Coverage per tower', color: 'from-blue-500 to-cyan-500' },
            { icon: Zap, value: '360°', label: 'Multi-spectral monitoring', color: 'from-purple-500 to-pink-500' },
            { icon: Target, value: '95%', label: 'Detection accuracy', color: 'from-green-500 to-emerald-500' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity`} />
              <div className="relative p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all">
                <stat.icon className={`w-8 h-8 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-4`} />
                <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-slate-600 dark:text-slate-400">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
