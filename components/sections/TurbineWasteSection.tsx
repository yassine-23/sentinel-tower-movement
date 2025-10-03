'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedCounter from '../ui/AnimatedCounter';

export default function TurbineWasteSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden py-32 px-4">
      {/* Wind Turbine Background with Parallax */}
      <div
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=1920&q=80)',
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-900/80 via-forest-900/70 to-flame-900/80" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Split Layout - TWO Large Glass Cards */}
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* LEFT: Clean Energy (Positive) */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="glass-strong rounded-3xl p-12 h-full flex flex-col justify-between premium-shadow-lg glass-hover">
              <div>
                <div className="w-20 h-20 rounded-2xl bg-sky-400/20 flex items-center justify-center mb-6">
                  <svg className="w-12 h-12 text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L4.5 20.3l.7.7L12 18l6.8 3 .7-.7L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-5xl font-black text-white mb-6">Clean Energy</h3>
                <p className="text-xl text-sky-200 mb-8 leading-relaxed">
                  Wind turbines power millions of homes with renewable electricity
                </p>
              </div>

              <div className="glass-dark rounded-2xl p-8">
                <div className="text-6xl font-black text-gradient mb-2">
                  <AnimatedCounter end={341} suffix="k" />
                </div>
                <div className="text-white text-lg">Global wind turbines</div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Hidden Cost (Problem) */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <div className="glass-strong rounded-3xl p-12 h-full flex flex-col justify-between premium-shadow-lg glass-hover border-2 border-flame-500/30">
              <div>
                <div className="w-20 h-20 rounded-2xl bg-flame-500/20 flex items-center justify-center mb-6">
                  <svg className="w-12 h-12 text-flame-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L1 21h22L12 2zm0 3.83L19.89 19H4.11L12 5.83zM11 16h2v2h-2v-2zm0-6h2v4h-2v-4z"/>
                  </svg>
                </div>
                <h3 className="text-5xl font-black text-white mb-6">Hidden Cost</h3>
                <p className="text-xl text-flame-200 mb-8 leading-relaxed">
                  40-meter blades buried in landfills, environmental burden for centuries
                </p>
              </div>

              <div className="glass-dark rounded-2xl p-8 border-2 border-flame-400/50 animate-glow">
                <div className="text-6xl font-black text-flame-400 mb-2">
                  <AnimatedCounter end={43} suffix="k" />
                </div>
                <div className="text-white text-lg">Tons of waste annually</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Connection Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center mt-16"
        >
          <div className="glass-strong px-12 py-6 rounded-full font-black text-2xl text-white premium-shadow-lg">
            Two Problems = One Solution
          </div>
        </motion.div>
      </div>
    </section>
  );
}