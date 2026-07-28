'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Workflow, Camera, Cpu, Radio, Bell, MapPin } from 'lucide-react';

export default function HowItWorksSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const steps = [
    {
      icon: Camera,
      number: '01',
      title: 'Multi-Spectral Detection',
      description: 'Thermal and visual cameras continuously scan 50 mi² for smoke, heat signatures, and fire indicators invisible to the human eye.',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: Cpu,
      number: '02',
      title: 'Edge AI Processing',
      description: 'NVIDIA-powered AI analyzes data in real-time, distinguishing between fires, controlled burns, and false positives with 95% accuracy.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Radio,
      number: '03',
      title: 'Instant Communication',
      description: 'Detected fires trigger immediate alerts via 4G/5G and Starlink backup, ensuring connectivity even in remote areas.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: MapPin,
      number: '04',
      title: 'Precise GPS Coordinates',
      description: 'Fire location is pinpointed with GPS precision and transmitted to emergency services with detailed fire analysis.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Bell,
      number: '05',
      title: 'Emergency Response',
      description: 'First responders receive alerts with fire size, growth rate, and optimal access routes—all in under 60 seconds.',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <section ref={ref} className="relative w-full py-24 md:py-32 bg-white dark:bg-slate-900">
      <div className="container px-6 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-sm mb-6">
            <Workflow className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              System Architecture
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-slate-300 bg-clip-text text-transparent mb-6">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            From detection to response in under 60 seconds. Our intelligent system operates 24/7, protecting communities while you sleep.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 hidden md:block" />

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="relative"
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Number badge */}
                  <div className="relative flex-shrink-0">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>
                    {/* Connecting dot */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700 hidden md:block" />
                  </div>

                  {/* Content card */}
                  <div className="flex-1 group">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity`} />
                      <div className="relative p-8 rounded-3xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all">
                        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${step.color} text-white mb-4`}>
                          <step.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                          {step.title}
                        </h3>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-8 md:p-12 rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-600 text-white shadow-2xl shadow-blue-500/25">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Result: Lives Saved
            </h3>
            <p className="text-xl text-blue-50 mb-6 max-w-2xl mx-auto">
              Every second counts in wildfire prevention. Our system gives communities the critical early warning they need to evacuate safely and protect what matters most.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-1">&lt;60s</div>
                <div className="text-blue-100">Total Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-1">24/7</div>
                <div className="text-blue-100">Continuous Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-1">95%</div>
                <div className="text-blue-100">Detection Accuracy</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
