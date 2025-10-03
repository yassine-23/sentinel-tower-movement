'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function SolutionSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden py-32 px-4">
      {/* Aerial Forest Background with Parallax */}
      <div
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80)',
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-900/85 via-forest-800/75 to-forest-900/90" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-8xl font-black text-white mb-6 text-shadow-glow">
            FROM WASTE TO GUARDIAN
          </h2>
          <p className="text-2xl text-sky-300 max-w-3xl mx-auto font-light">
            Transforming turbine blades into sentinel towers
          </p>
        </motion.div>

        {/* Central Large Glass Card - Transformation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="glass-strong rounded-3xl p-12 md:p-16 premium-shadow-lg mb-16"
        >
          {/* 3-Step Visual Timeline with Icons */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-2xl bg-flame-500/20 flex items-center justify-center mb-6">
                <svg className="w-14 h-14 text-flame-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Decommissioned</h3>
              <p className="text-sky-200">40-meter turbine blade after 20-25 years</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-2xl bg-sky-400/20 flex items-center justify-center mb-6 animate-glow">
                <svg className="w-14 h-14 text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2v20M2 12h20M6 6l12 12M18 6L6 18"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Transform</h3>
              <p className="text-sky-200">Vertical installation with sensors</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-2xl bg-forest-500/20 flex items-center justify-center mb-6">
                <svg className="w-14 h-14 text-forest-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Guardian</h3>
              <p className="text-sky-200">Active wildfire detection system</p>
            </div>
          </div>

          {/* Headline */}
          <div className="text-center mb-8">
            <h3 className="text-5xl font-black text-white mb-4">Sentinel Tower</h3>
            <div className="text-7xl font-black text-gradient mb-4">50 sq mi</div>
            <p className="text-xl text-sky-300">Coverage radius per tower</p>
          </div>
        </motion.div>

        {/* Feature Grid - Small Glass Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="glass rounded-2xl p-8 premium-shadow glass-hover"
          >
            <div className="w-16 h-16 rounded-xl bg-sky-400/20 flex items-center justify-center mb-4">
              <svg className="w-10 h-10 text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-white mb-3">Multi-Spectral</h4>
            <p className="text-sky-200">Thermal, visual, and infrared cameras for 360° monitoring</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="glass rounded-2xl p-8 premium-shadow glass-hover"
          >
            <div className="w-16 h-16 rounded-xl bg-forest-400/20 flex items-center justify-center mb-4">
              <svg className="w-10 h-10 text-forest-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z"/>
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-white mb-3">Edge AI</h4>
            <p className="text-sky-200">Real-time detection of smoke and heat signatures</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="glass rounded-2xl p-8 premium-shadow glass-hover"
          >
            <div className="w-16 h-16 rounded-xl bg-flame-400/20 flex items-center justify-center mb-4">
              <svg className="w-10 h-10 text-flame-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zm0 18c-3.35 0-6-2.57-6-6.2 0-2.34 1.95-5.44 6-9.14 4.05 3.7 6 6.79 6 9.14 0 3.63-2.65 6.2-6 6.2z"/>
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-white mb-3">Water Storage</h4>
            <p className="text-sky-200">Internal reservoir for immediate fire suppression</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}