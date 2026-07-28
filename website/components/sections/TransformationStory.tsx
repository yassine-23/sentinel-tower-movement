'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Recycle, Cpu, ShieldCheck } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Recycle,
    title: 'Repurpose',
    description: 'Retired wind turbine blades become the structure for sentinel towers',
  },
  {
    number: '02',
    icon: Cpu,
    title: 'Equip',
    description: 'AI-powered cameras and sensors detect environmental threats',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Protect',
    description: 'Real-time alerts save lives and prevent billions in damage',
  },
];

const proofPoints = [
  {
    value: '43M',
    label: 'tonnes of retired blade waste projected worldwide by 2050',
  },
  {
    value: '$15–40k',
    label: 'what owners pay to recycle a single 15–20 tonne blade',
  },
  {
    value: '2026',
    label: 'EU industry ban on landfilling blades, in force since Jan 1',
  },
];

export default function TransformationStory() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const reduceMotion = useReducedMotion();

  return (
    <section id="transformation" ref={ref} className="relative w-full py-24 md:py-32 lg:py-40 bg-pine-900 hairline-top overflow-hidden scroll-mt-20">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(46,204,113,0.07),transparent_70%)] pointer-events-none" />

      <div className="relative container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="eyebrow text-forest-400 justify-center mb-5">The Process</div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 text-mist tracking-tight">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-mist/50 max-w-2xl mx-auto font-light">
            Transforming waste into intelligent guardians
          </p>
        </motion.div>

        {/* Three Steps */}
        <div className="relative grid md:grid-cols-3 gap-6 md:gap-8">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-px bg-gradient-to-r from-forest-500/10 via-forest-400/40 to-ember-500/30" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                className="card-dark relative p-8 md:p-10 text-center group hover:-translate-y-1.5"
              >
                <div className="relative inline-flex mb-7">
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-forest-500/15 to-forest-800/10 border border-forest-400/25 group-hover:border-forest-400/50 group-hover:shadow-[0_0_32px_-8px_rgba(46,204,113,0.4)] transition-all duration-300">
                    <Icon className="w-8 h-8 text-forest-300" />
                  </div>
                  <span className="absolute -top-2.5 -right-2.5 text-[11px] font-bold font-display px-2 py-0.5 rounded-full bg-ember-500 text-pine-950 tracking-wider">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-mist">
                  {step.title}
                </h3>
                <p className="text-mist/50 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* The argument in one frame — full-bleed diptych */}
      <motion.figure
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        className="relative mt-20 md:mt-28 w-full"
      >
        <div className="relative w-full aspect-[2400/1018]">
          <Image
            src="/campaign/grave-vs-guardian-diptych.jpg"
            alt="Split frame showing the two fates of the same wind turbine blade: on the left, sawn blade segments half-buried in a landfill trench; on the right, the blade raised as a sentinel tower, its sensor head glowing above a darkening forest."
            fill
            sizes="100vw"
            className="object-cover"
          />
          {/* Readability and blend gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-pine-900/60 via-transparent to-pine-900/90 pointer-events-none" />
          {/* Overlay caption (md+) */}
          <div className="absolute inset-x-0 bottom-0 hidden sm:flex flex-col items-center gap-2.5 pb-8 md:pb-12 px-6 text-center">
            <p className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-mist tracking-tight">
              One blade. Two endings.
            </p>
            <p className="text-sm md:text-base text-mist/65 font-light max-w-xl">
              Buried as waste — or raised as a guardian that never blinks.
            </p>
          </div>
        </div>
        {/* Stacked caption (mobile, where the wide frame is short) */}
        <figcaption className="sm:hidden text-center px-6 mt-6">
          <p className="font-display text-2xl font-bold text-mist tracking-tight">
            One blade. Two endings.
          </p>
          <p className="text-sm text-mist/60 mt-2 font-light">
            Buried as waste — or raised as a guardian that never blinks.
          </p>
        </figcaption>
      </motion.figure>

      {/* The result — Sentinel 001 and the economics */}
      <div className="relative container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mt-20 md:mt-28">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[1856/2304] max-w-md mx-auto md:max-w-none overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/campaign/sentinel-001-portrait.jpg"
                alt="Sentinel 001 at dawn: a retired turbine blade re-erected as a slender watchtower, first light catching its sensor crown above the tree line."
                fill
                sizes="(min-width: 768px) 46vw, (min-width: 640px) 28rem, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-pine-950/90 to-transparent pointer-events-none" />
              <p className="absolute bottom-5 left-6 right-6 text-xs md:text-sm uppercase tracking-[0.2em] text-mist/70 font-display font-semibold">
                Sentinel 001 — First Light
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="eyebrow text-forest-400 mb-5">The Economics</div>
            <h3 className="text-3xl sm:text-4xl font-bold text-mist tracking-tight mb-5">
              Owners pay to bury this material.{' '}
              <span className="text-forest-gradient">We raise it instead.</span>
            </h3>
            <p className="text-mist/55 leading-relaxed font-light mb-10">
              A retired blade is a 15&ndash;20 tonne engineered composite mast — and its owner pays
              to make it disappear. Since January 1, 2026, Europe&rsquo;s wind industry can no
              longer send blades to landfill at all. The supply is enormous, the cost is negative,
              and every one of them can stand watch.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              {proofPoints.map((point) => (
                <div key={point.value} className="border-l border-forest-400/30 pl-4">
                  <div className="font-display text-3xl md:text-4xl font-bold text-mist tracking-tight">
                    {point.value}
                  </div>
                  <div className="text-xs text-mist/50 mt-1.5 leading-snug">
                    {point.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
