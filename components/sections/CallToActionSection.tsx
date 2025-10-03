'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

export default function CallToActionSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [email, setEmail] = useState('');
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Submitted:', { email, role: selectedRole });
    alert('Thank you for your interest! We will be in touch soon.');
    setEmail('');
    setSelectedRole(null);
  };

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden py-32 px-4">
      {/* Futuristic Tech/Network Background */}
      <div
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80)',
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-900/90 via-sky-900/85 to-forest-800/95" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-8xl font-black text-white mb-6 text-shadow-glow">
            JOIN THE MOVEMENT
          </h2>
          <p className="text-2xl text-gradient font-bold">
            Help us build Earth's immune system
          </p>
        </motion.div>

        {/* Role selection - Icon Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          <button
            onClick={() => setSelectedRole('government')}
            className={`glass rounded-2xl p-8 premium-shadow transition-all duration-300 glass-hover ${
              selectedRole === 'government'
                ? 'border-2 border-sky-400 scale-105 bg-sky-500/20'
                : 'border border-white/10'
            }`}
          >
            <div className="w-16 h-16 mx-auto rounded-xl bg-sky-400/20 flex items-center justify-center mb-4">
              <svg className="w-10 h-10 text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Governments</h3>
            <p className="text-sky-200">
              Deploy sentinel networks
            </p>
          </button>

          <button
            onClick={() => setSelectedRole('investor')}
            className={`glass rounded-2xl p-8 premium-shadow transition-all duration-300 glass-hover ${
              selectedRole === 'investor'
                ? 'border-2 border-sky-400 scale-105 bg-sky-500/20'
                : 'border border-white/10'
            }`}
          >
            <div className="w-16 h-16 mx-auto rounded-xl bg-forest-400/20 flex items-center justify-center mb-4">
              <svg className="w-10 h-10 text-forest-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Investors</h3>
            <p className="text-sky-200">
              Fund the future
            </p>
          </button>

          <button
            onClick={() => setSelectedRole('individual')}
            className={`glass rounded-2xl p-8 premium-shadow transition-all duration-300 glass-hover ${
              selectedRole === 'individual'
                ? 'border-2 border-sky-400 scale-105 bg-sky-500/20'
                : 'border border-white/10'
            }`}
          >
            <div className="w-16 h-16 mx-auto rounded-xl bg-flame-400/20 flex items-center justify-center mb-4">
              <svg className="w-10 h-10 text-flame-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Individuals</h3>
            <p className="text-sky-200">
              Support the mission
            </p>
          </button>
        </motion.div>

        {/* Email form - Large Central Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="glass-strong rounded-3xl p-12 premium-shadow-lg">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Get Early Access</h3>

            <div className="mb-6">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full px-8 py-5 rounded-2xl glass-dark text-white text-lg placeholder-sky-300/50 focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={!selectedRole}
              className={`w-full py-5 rounded-2xl font-bold text-xl transition-all duration-300 ${
                selectedRole
                  ? 'bg-gradient-to-r from-sky-500 to-forest-500 hover:from-sky-600 hover:to-forest-600 text-white shadow-lg hover:shadow-2xl transform hover:scale-[1.02]'
                  : 'bg-gray-600/50 text-gray-400 cursor-not-allowed'
              }`}
            >
              {selectedRole ? 'Join the Movement' : 'Select a role above'}
            </button>
          </form>
        </motion.div>

        {/* Stats - Small Glass Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="glass rounded-2xl p-6 text-center premium-shadow">
            <div className="text-5xl font-black text-gradient mb-2">100+</div>
            <div className="text-sky-200">Towers Planned</div>
          </div>
          <div className="glass rounded-2xl p-6 text-center premium-shadow">
            <div className="text-5xl font-black text-gradient mb-2">5,000</div>
            <div className="text-sky-200">Sq Miles Protected</div>
          </div>
          <div className="glass rounded-2xl p-6 text-center premium-shadow">
            <div className="text-5xl font-black text-gradient mb-2">$5B+</div>
            <div className="text-sky-200">Potential Savings</div>
          </div>
          <div className="glass rounded-2xl p-6 text-center premium-shadow">
            <div className="text-5xl font-black text-gradient mb-2">43K</div>
            <div className="text-sky-200">Tons Diverted</div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-20 text-center text-sky-300"
        >
          <p className="text-lg mb-6 font-light">
            A regenerative infrastructure project for a sustainable future
          </p>
          <p className="text-sm text-sky-400/70">
            © 2024 Immune System Project. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}