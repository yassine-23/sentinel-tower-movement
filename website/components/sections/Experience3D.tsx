'use client';

import { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion';

// R3F cannot server-render — load the canvas client-side only
const SentinelScene = dynamic(() => import('@/components/three/SentinelScene'), {
  ssr: false,
  loading: () => null,
});

const stages = [
  {
    eyebrow: 'Act 01 — The Giant',
    title: 'Built to outlast storms.',
    copy: 'A single wind turbine blade can stretch 80 meters — fiberglass and epoxy engineered to survive 25 years of punishing weather.',
    range: [0.02, 0.07, 0.17, 0.22],
  },
  {
    eyebrow: 'Act 02 — The Problem',
    title: 'Indestructible by design.',
    copy: 'That same composite armor cannot be melted, burned, or recycled. When a blade retires, the only option is to saw it into pieces.',
    range: [0.25, 0.3, 0.38, 0.43],
  },
  {
    eyebrow: 'Act 03 — The Burial',
    title: '43,000 tons a year.',
    copy: 'Every year, tens of thousands of tons of blades are buried in landfills — where they will sit, unchanged, for centuries.',
    range: [0.46, 0.51, 0.6, 0.65],
  },
  {
    eyebrow: 'Act 04 — The Rebirth',
    title: 'We raise them as sentinels.',
    copy: 'We dig the blade up and raise it as an AI watchtower. Satellites now see 5×5 m fires but pass twice a day and carry no water — the war is won on the ground in the first 15 minutes.',
    range: [0.69, 0.74, 0.93, 0.99],
  },
];

function StageOverlay({
  progress,
  stage,
}: {
  progress: MotionValue<number>;
  stage: (typeof stages)[number];
}) {
  const [in1, in2, out1, out2] = stage.range;
  const opacity = useTransform(progress, [in1, in2, out1, out2], [0, 1, 1, 0]);
  const y = useTransform(progress, [in1, in2], [40, 0]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-x-0 bottom-0 pb-16 md:pb-20 px-6 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-xl rounded-2xl border border-white/[0.08] bg-pine-950/55 backdrop-blur-md p-6 md:p-8 shadow-[0_16px_48px_-16px_rgba(0,0,0,0.7)]">
          <div className="eyebrow text-ember-400 mb-4">{stage.eyebrow}</div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-mist tracking-tight mb-4">
            {stage.title}
          </h3>
          <p className="text-base md:text-lg text-mist/60 font-light leading-relaxed">
            {stage.copy}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/** Vertical act indicator on the right edge (desktop only) */
function ActDots({ progress }: { progress: MotionValue<number> }) {
  const [active, setActive] = useState(0);
  useMotionValueEvent(progress, 'change', (v) => {
    const boundaries = [0.24, 0.45, 0.67];
    setActive(boundaries.filter((b) => v >= b).length);
  });

  return (
    <div className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-3 pointer-events-none">
      {stages.map((stage, i) => (
        <div key={stage.eyebrow} className="flex items-center gap-3">
          <span
            className={`text-[10px] font-display font-semibold uppercase tracking-[0.2em] transition-all duration-500 ${
              active === i ? 'text-ember-400 opacity-100' : 'opacity-0'
            }`}
          >
            {String(i + 1).padStart(2, '0')}
          </span>
          <div
            className={`rounded-full transition-all duration-500 ${
              active === i
                ? 'w-2.5 h-2.5 bg-ember-500 shadow-[0_0_12px_rgba(255,107,53,0.7)]'
                : 'w-1.5 h-1.5 bg-mist/25'
            }`}
          />
        </div>
      ))}
    </div>
  );
}

/** Static fallback for reduced-motion users: same story, no animation */
function StaticExperience() {
  return (
    <section id="experience" className="relative w-full py-24 md:py-32 bg-pine-950 hairline-top overflow-hidden scroll-mt-20">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="eyebrow text-ember-400 justify-center mb-5">The Journey</div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 text-mist tracking-tight">
            From Waste to <span className="text-ember-gradient">Watchtower</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stages.map((stage) => (
            <div key={stage.eyebrow} className="card-dark p-8">
              <div className="eyebrow text-ember-400 mb-4">{stage.eyebrow}</div>
              <h3 className="text-2xl font-bold text-mist mb-3">{stage.title}</h3>
              <p className="text-mist/50 leading-relaxed">{stage.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Experience3D() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const headerOpacity = useTransform(scrollYProgress, [0, 0.06, 0.8, 0.86], [0, 1, 1, 0]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.02, 0.08, 0.12], [0, 1, 1, 0]);
  const barScaleX = scrollYProgress;

  if (reduceMotion) {
    return <StaticExperience />;
  }

  return (
    <section id="experience" ref={sectionRef} className="relative w-full h-[560vh] bg-pine-950 hairline-top scroll-mt-20">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* 3D canvas — purely decorative, story is carried by the HTML overlays */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <SentinelScene progress={scrollYProgress} />
        </div>

        {/* Section header */}
        <motion.div
          style={{ opacity: headerOpacity }}
          className="absolute inset-x-0 top-0 pt-24 md:pt-28 px-6 text-center pointer-events-none"
        >
          <div className="eyebrow text-ember-400 justify-center mb-4">Interactive Experience</div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-mist tracking-tight">
            From Waste to <span className="text-ember-gradient">Watchtower</span>
          </h2>
        </motion.div>

        {/* Per-stage narrative overlays */}
        {stages.map((stage) => (
          <StageOverlay key={stage.eyebrow} progress={scrollYProgress} stage={stage} />
        ))}

        {/* Act indicator */}
        <ActDots progress={scrollYProgress} />

        {/* Scroll hint */}
        <motion.div
          style={{ opacity: hintOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="text-[11px] uppercase tracking-[0.25em] text-mist/40 font-medium">
            Scroll to transform
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-ember-400 to-transparent animate-pulse" />
        </motion.div>

        {/* Progress bar */}
        <div className="absolute bottom-0 inset-x-0 h-0.5 bg-white/[0.06]">
          <motion.div
            style={{ scaleX: barScaleX }}
            className="h-full origin-left bg-gradient-to-r from-forest-500 to-ember-500"
          />
        </div>
      </div>
    </section>
  );
}
