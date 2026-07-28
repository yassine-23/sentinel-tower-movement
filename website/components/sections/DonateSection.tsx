'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, ShieldCheck, Radio, Droplets, Flame } from 'lucide-react';
import Image from 'next/image';
import { getDonateHref } from '@/components/DonateButton';

const tiers = [
  {
    amount: '$25',
    icon: Radio,
    impact: 'Funds a sensor eye — the thermal camera that never blinks',
  },
  {
    amount: '$50',
    icon: Droplets,
    impact: 'Funds a fog-harvesting skirt panel — up to 22 litres of water per square metre on a fog day',
  },
  {
    amount: '$100',
    icon: Flame,
    impact: 'Funds a first-drop tank — water on the flame in the first 15 minutes',
  },
];

export default function DonateSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const href = getDonateHref();
  const external = href.startsWith('http');
  const linkProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <section id="donate" ref={ref} className="relative w-full py-24 md:py-32 lg:py-40 bg-pine-900 hairline-top overflow-hidden scroll-mt-20">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_100%,rgba(46,204,113,0.09),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 texture-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)] pointer-events-none" />

      <div className="relative container px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-14">
            <div className="eyebrow text-forest-400 justify-center mb-5">Fund the First Pilots</div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-[1.05] text-mist tracking-tight">
              Adopt a <span className="text-forest-gradient">Sentinel</span>
            </h2>
            <p className="text-lg md:text-xl text-mist/55 max-w-2xl mx-auto font-light">
              Fund a sensor eye, a fog skirt, a water tank. Every dollar goes
              directly into raising the first pilot sentinel nodes.
            </p>
          </div>

          {/* Impact tiers */}
          <div className="grid sm:grid-cols-3 gap-5 mb-12">
            {tiers.map((tier, index) => {
              const Icon = tier.icon;
              return (
                <motion.a
                  key={tier.amount}
                  href={href}
                  {...linkProps}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 + index * 0.12 }}
                  className="card-dark group p-7 text-center hover:-translate-y-1.5 hover:border-forest-400/40"
                >
                  <div className="inline-flex p-3.5 rounded-xl bg-forest-500/10 border border-forest-400/25 group-hover:border-forest-400/50 transition-colors mb-5">
                    <Icon className="w-6 h-6 text-forest-300" />
                  </div>
                  <div className="text-3xl font-bold font-display text-mist mb-2">{tier.amount}</div>
                  <p className="text-sm text-mist/50 leading-relaxed">{tier.impact}</p>
                </motion.a>
              );
            })}
          </div>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <p className="font-display text-xl md:text-2xl font-medium text-mist/80 max-w-2xl mx-auto mb-8 leading-snug">
              The blades are free. The forests are burning.{' '}
              <span className="text-ember-gradient">What exactly are we waiting for?</span>
            </p>
            <a href={href} {...linkProps} className="inline-block">
              <span className="group inline-flex items-center gap-2.5 px-10 h-14 rounded-xl bg-gradient-to-br from-forest-500 to-forest-700 text-pine-950 font-semibold text-base shadow-[0_8px_32px_-8px_rgba(46,204,113,0.55)] hover:from-forest-400 hover:to-forest-600 transition-all">
                <Heart className="h-5 w-5 fill-current group-hover:scale-110 transition-transform" />
                Donate Now
              </span>
            </a>
            <div className="mt-5 flex items-center justify-center gap-2 text-xs text-mist/40">
              <ShieldCheck className="w-4 h-4 text-forest-400/70" />
              <span>Secure payment processed by Stripe — choose any amount at checkout</span>
            </div>
          </motion.div>

          {/* Sentinel blueprint cutaway */}
          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-16 md:mt-20"
          >
            <div className="overflow-hidden rounded-2xl border border-white/[0.08]">
              <Image
                src="/campaign/sentinel-blueprint-cutaway.jpg"
                alt="Engineering cutaway blueprint of a sentinel tower — a repurposed wind turbine blade fitted with a sensor eye, fog-harvesting skirt, and water tank"
                width={2400}
                height={1339}
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="w-full h-auto"
              />
            </div>
            <figcaption className="mt-4 text-center text-xs uppercase tracking-[0.2em] text-mist/40">
              Sentinel cutaway — sensor eye, fog skirt, first-drop tank
            </figcaption>
          </motion.figure>
        </motion.div>
      </div>
    </section>
  );
}
