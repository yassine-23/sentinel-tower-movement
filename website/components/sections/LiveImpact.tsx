'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Recycle, Flame, Timer, PiggyBank, ArrowUpRight } from 'lucide-react';

const stakes = [
  {
    icon: Recycle,
    value: '43M',
    label: 'Tonnes of blade waste by 2050',
    sublabel: 'Liu & Barlow, Waste Management 2017',
    accent: 'forest',
  },
  {
    icon: Flame,
    value: '$394–893B',
    label: 'US wildfire cost, every year',
    sublabel: 'US Joint Economic Committee, 2023',
    accent: 'ember',
  },
  {
    icon: Timer,
    value: '15 min',
    label: 'The containment window',
    sublabel: 'Past 2 ha, odds fall below 10% — CJFR',
    accent: 'ember',
  },
  {
    icon: PiggyBank,
    value: '<1%',
    label: 'Of fire spending goes to prevention',
    sublabel: 'UNEP "Spreading like Wildfire," 2022',
    accent: 'forest',
  },
];

export default function LiveImpact() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const reduceMotion = useReducedMotion();
  const animate = (visible: boolean) => (reduceMotion ? { opacity: 1, y: 0 } : visible ? { opacity: 1, y: 0 } : {});
  const initial = reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 };

  return (
    <section id="impact" ref={ref} className="relative w-full py-24 md:py-32 lg:py-40 bg-parchment overflow-hidden scroll-mt-20">
      {/* Warm texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(46,204,113,0.06),transparent_70%)] pointer-events-none" />

      <div className="relative container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={initial}
          animate={animate(inView)}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="eyebrow text-ember-600 justify-center mb-5">The Stakes</div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 text-ink tracking-tight">
            Real Numbers. No Invented Impact.
          </h2>
          <p className="text-lg md:text-xl text-ink/55 max-w-3xl mx-auto font-light">
            No towers are deployed yet — so instead of fictional results, here is the verified
            scale of the two crises, with sources. The first pilot will publish its own numbers.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {stakes.map((stat, index) => {
            const Icon = stat.icon;
            const isEmber = stat.accent === 'ember';
            return (
              <motion.div
                key={index}
                initial={initial}
                animate={animate(inView)}
                transition={{ duration: 0.6, delay: reduceMotion ? 0 : index * 0.1 }}
                className="card-light text-center p-8 md:p-9 hover:-translate-y-1.5"
              >
                <div className={`inline-flex p-4 rounded-2xl mb-5 border ${
                  isEmber
                    ? 'bg-ember-500/10 border-ember-500/25'
                    : 'bg-forest-600/10 border-forest-600/25'
                }`}>
                  <Icon className={`w-7 h-7 ${isEmber ? 'text-ember-600' : 'text-forest-700'}`} />
                </div>
                <div className="text-4xl md:text-[2.9rem] font-bold text-ink mb-2 font-display tracking-tight leading-none">
                  {stat.value}
                </div>
                <div className="text-base md:text-lg font-semibold text-ink/80 mb-1.5 font-display">
                  {stat.label}
                </div>
                <div className="text-sm text-ink/45">
                  {stat.sublabel}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* The standard the pilot will be judged by */}
        <motion.div
          initial={initial}
          animate={animate(inView)}
          transition={{ duration: 0.8, delay: reduceMotion ? 0 : 0.4 }}
          className="mt-12 md:mt-16 text-center"
        >
          <p className="text-ink/70 text-lg md:text-xl font-medium max-w-3xl mx-auto">
            The only performance claim we will ever make is one we have measured:
            <span className="font-bold text-ink"> detection-to-first-drop, in minutes, published openly.</span>
          </p>
          <a
            href="https://github.com/yassine-23/sentinel-tower-movement"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-forest-700 hover:text-forest-800 font-semibold transition-colors"
          >
            Read the open blueprint and data dossier
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
