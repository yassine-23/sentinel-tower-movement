'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Globe, Leaf, Shield, Users } from 'lucide-react';

export default function MissionSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const values = [
    {
      icon: Shield,
      title: 'Protection',
      description: 'Safeguarding communities and ecosystems from devastating wildfires',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Transforming waste into purpose, creating circular economy solutions',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Deploying intelligent infrastructure across vulnerable regions worldwide',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Empowering local communities with early warning systems and protection',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section ref={ref} className="relative w-full py-32 md:py-40 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative container px-6 max-w-7xl mx-auto">
        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
            <Globe className="w-4 h-4" />
            <span className="text-sm font-medium">Our Mission</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Protecting Earth, one tower at a time
          </h2>

          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
            We&rsquo;re building an intelligent immune system for our planet—transforming wind turbine waste into a network of sentinel towers that detect and prevent wildfires before they devastate communities and ecosystems.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: '10,000', label: 'Target towers by 2030' },
              { value: '500M', label: 'Acres protected' },
              { value: '95%', label: 'Detection accuracy' },
              { value: '<1min', label: 'Response time' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our Core Values
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition-opacity`} />
                <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all">
                  <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${value.color} mb-4`}>
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold mb-3">{value.title}</h4>
                  <p className="text-slate-300 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
