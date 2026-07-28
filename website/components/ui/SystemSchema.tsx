'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function SystemSchema() {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const nodes = [
    {
      id: 1,
      title: 'Wind Turbine Blade',
      subtitle: '40m composite structure',
      description: 'Decommissioned blade repurposed as vertical sentinel tower',
      position: 'top',
      icon: '🌬️',
      color: 'from-sky-500 to-blue-600',
    },
    {
      id: 2,
      title: 'Multi-Spectral Cameras',
      subtitle: 'Thermal, Visual, Infrared',
      description: '360° monitoring with real-time heat anomaly detection',
      position: 'left',
      icon: '📷',
      color: 'from-violet-500 to-purple-600',
    },
    {
      id: 3,
      title: 'Edge AI Processing',
      subtitle: 'Local computation',
      description: 'Instant smoke signature analysis without cloud latency',
      position: 'right',
      icon: '🧠',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      id: 4,
      title: 'Alert Network',
      subtitle: '<60s response time',
      description: 'Immediate notification to emergency services with coordinates',
      position: 'bottom',
      icon: '🚨',
      color: 'from-orange-500 to-red-600',
    },
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto py-20">
      {/* Central Hub */}
      <div className="relative w-64 h-64 mx-auto">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-900 to-gray-700 shadow-2xl flex items-center justify-center"
        >
          <div className="text-center text-white px-8">
            <div className="text-5xl mb-3">🛡️</div>
            <div className="text-xl font-semibold mb-1">Sentinel Tower</div>
            <div className="text-sm opacity-75">Immune System Core</div>
          </div>
        </motion.div>

        {/* Pulsing rings */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 rounded-full border-2 border-gray-400"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0, 0.2]
          }}
          transition={{
            duration: 3,
            delay: 0.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 rounded-full border-2 border-gray-300"
        />
      </div>

      {/* Connected Nodes */}
      {nodes.map((node, index) => {
        const positions = {
          top: 'top-0 left-1/2 -translate-x-1/2 -translate-y-20',
          bottom: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-20',
          left: 'left-0 top-1/2 -translate-y-1/2 -translate-x-32',
          right: 'right-0 top-1/2 -translate-y-1/2 translate-x-32',
        };

        const connectionPaths = {
          top: 'M 256 128 L 256 32',
          bottom: 'M 256 384 L 256 480',
          left: 'M 128 256 L 32 256',
          right: 'M 384 256 L 480 256',
        };

        return (
          <div key={node.id}>
            {/* Connection Line */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ top: '-10rem', left: '-16rem', width: 'calc(100% + 32rem)', height: 'calc(100% + 20rem)' }}>
              <motion.path
                d={connectionPaths[node.position as keyof typeof connectionPaths]}
                stroke="url(#gradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#9ca3af" />
                  <stop offset="100%" stopColor="#6b7280" />
                </linearGradient>
              </defs>
            </svg>

            {/* Node */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.5 + index * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
              className={`absolute ${positions[node.position as keyof typeof positions]}`}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setActiveNode(node.id)}
                onHoverEnd={() => setActiveNode(null)}
                className="relative"
              >
                <div className={`w-40 h-40 rounded-2xl bg-gradient-to-br ${node.color} shadow-xl flex flex-col items-center justify-center text-white transition-all duration-300 ${
                  activeNode === node.id ? 'shadow-2xl ring-4 ring-white/50' : ''
                }`}>
                  <div className="text-4xl mb-2">{node.icon}</div>
                  <div className="text-sm font-semibold text-center px-3">{node.title}</div>
                </div>

                {/* Tooltip */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: activeNode === node.id ? 1 : 0,
                    y: activeNode === node.id ? 0 : 10
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-64 bg-white rounded-xl shadow-2xl p-4 border border-gray-200 pointer-events-none z-50"
                >
                  <div className="text-sm font-semibold text-gray-900 mb-1">{node.subtitle}</div>
                  <div className="text-xs text-gray-600 leading-relaxed">{node.description}</div>
                </motion.div>
              </motion.button>
            </motion.div>
          </div>
        );
      })}

      {/* Coverage Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute -bottom-32 left-0 right-0"
      >
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-light text-gray-900">50 mi²</div>
            <div className="text-xs uppercase tracking-wider text-gray-500 mt-1">Coverage Area</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-gray-900">&lt;60s</div>
            <div className="text-xs uppercase tracking-wider text-gray-500 mt-1">Alert Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-gray-900">24/7</div>
            <div className="text-xs uppercase tracking-wider text-gray-500 mt-1">Monitoring</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
