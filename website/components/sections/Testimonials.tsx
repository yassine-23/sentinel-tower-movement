'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FlaskConical, Landmark, Recycle, MapPin, Github, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const seats = [
  {
    icon: FlaskConical,
    title: 'Technical Validators',
    description:
      'Structural and fire engineers to stress-test the blade-mast spec: root-flange reuse, buried-tank foundations, intumescent protection. Peer-reviewed precedent exists — we want it challenged.',
    ask: 'Review the engineering dossier',
  },
  {
    icon: Landmark,
    title: 'Institutional Partners',
    description:
      'Fire agencies, water districts, utilities, and insurers. Not for endorsements — for requirements. Tell us what a pilot must measure before you would ever rely on it.',
    ask: 'Define the pilot standard',
  },
  {
    icon: Recycle,
    title: 'Blade Suppliers',
    description:
      'Wind farm operators and decommissioning contractors. You pay to make blades disappear; we want offtake agreements that cost you less and waste nothing.',
    ask: 'Discuss blade offtake',
  },
  {
    icon: MapPin,
    title: 'Pilot Hosts',
    description:
      'A commune, district, or landowner in fire country willing to host the first nodes — and let the world watch the only number that matters get measured.',
    ask: 'Host the first sentinels',
  },
];

export default function Testimonials() {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 };
  const visible = { opacity: 1, y: 0 };

  return (
    <section id="coalition" ref={ref} className="relative w-full py-24 md:py-32 lg:py-40 bg-pine-900 hairline-top overflow-hidden scroll-mt-20">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_50%_100%,rgba(255,107,53,0.06),transparent_70%)] pointer-events-none" />

      <div className="relative container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={initial}
          animate={inView ? visible : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 md:mb-16"
        >
          <div className="eyebrow text-forest-400 justify-center mb-5">Founding Coalition</div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 text-mist tracking-tight">
            No Fake Endorsements.
            <br />
            <span className="text-forest-gradient">Open Seats.</span>
          </h2>
          <p className="text-lg md:text-xl text-mist/50 font-light max-w-3xl mx-auto">
            This project has no deployments and no testimonials — and refuses to invent them.
            It has a cited data dossier, an open-source blueprint, a public record since 2025,
            and four seats at the founding table.
          </p>
        </motion.div>

        {/* Seats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-12 md:mb-16">
          {seats.map((seat, index) => {
            const Icon = seat.icon;
            return (
              <motion.div
                key={seat.title}
                initial={initial}
                animate={inView ? visible : {}}
                transition={{ duration: 0.6, delay: reduceMotion ? 0 : index * 0.1 }}
                className="card-dark p-8 md:p-10 group"
              >
                <div className="inline-flex p-3.5 rounded-xl bg-gradient-to-br from-forest-500/20 to-forest-800/20 border border-forest-400/20 group-hover:border-forest-400/40 transition-colors mb-5">
                  <Icon className="w-6 h-6 text-forest-300" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-mist font-display mb-3">{seat.title}</h3>
                <p className="text-mist/55 leading-relaxed mb-5">{seat.description}</p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 text-ember-400 hover:text-ember-300 font-semibold text-sm transition-colors"
                >
                  {seat.ask}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Blueprint CTA */}
        <motion.div
          initial={initial}
          animate={inView ? visible : {}}
          transition={{ duration: 0.8, delay: reduceMotion ? 0 : 0.4 }}
          className="text-center"
        >
          <a
            href="https://github.com/yassine-23/sentinel-tower-movement"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] hover:border-forest-400/40 transition-all text-mist font-semibold font-display"
          >
            <Github className="w-5 h-5" />
            Everything is public — read the blueprint on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
