'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { animate, motion, useInView, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  reckoningPanels,
  type ReckoningQuestionPanel,
  type ReckoningStat,
  type ReckoningStatPanel,
} from '@/lib/reckoning-data';

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

function formatValue(value: number): string {
  return Math.round(value).toLocaleString('en-US');
}

/* ---------- Reveal wrapper — plain div when motion is reduced ---------- */

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staticRender: boolean;
}

function Reveal({ children, className, delay = 0, staticRender }: RevealProps) {
  if (staticRender) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Count-up numeral ---------- */

function StatNumber({ stat, staticRender }: { stat: ReckoningStat; staticRender: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(() => (staticRender ? stat.value : 0));

  useEffect(() => {
    if (staticRender) {
      setDisplay(stat.value);
      return;
    }
    if (!inView) return;
    const controls = animate(0, stat.value, {
      duration: 1.8,
      ease: EASE,
      onUpdate: (latest) => setDisplay(latest),
    });
    return () => controls.stop();
  }, [inView, staticRender, stat.value]);

  return (
    <span
      ref={ref}
      className="text-ember-gradient font-display text-[clamp(3.25rem,13vw,10rem)] font-bold leading-none tracking-tight tabular-nums"
    >
      {stat.prefix}
      {formatValue(display)}
      {stat.suffix && (
        <span className="ml-2 align-baseline text-[0.4em] font-semibold">{stat.suffix}</span>
      )}
    </span>
  );
}

/* ---------- Stat panel stage ---------- */

function StatStage({ panel, staticRender }: { panel: ReckoningStatPanel; staticRender: boolean }) {
  return (
    <div className="relative flex min-h-screen items-center overflow-hidden">
      {panel.image && (
        <>
          <Image
            src={panel.image.src}
            alt={panel.image.alt}
            fill
            sizes="100vw"
            className="object-cover"
            style={{ opacity: panel.image.opacity }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-pine-950 via-pine-950/40 to-pine-950" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-pine-950/80 via-transparent to-pine-950/80" />
        </>
      )}

      <Reveal
        staticRender={staticRender}
        className="relative mx-auto w-full max-w-5xl px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8"
      >
        <div className="eyebrow mb-8 justify-center text-ember-400">{panel.eyebrow}</div>

        <div className="mb-8">
          <StatNumber stat={panel.stat} staticRender={staticRender} />
        </div>

        <h2 className="mx-auto mb-6 max-w-3xl text-2xl font-bold tracking-tight text-mist sm:text-3xl md:text-4xl">
          {panel.title}
        </h2>

        <div className="mx-auto max-w-2xl space-y-4">
          {panel.body.map((paragraph) => (
            <p key={paragraph} className="text-base font-light text-mist/70 sm:text-lg md:text-xl">
              {paragraph}
            </p>
          ))}
        </div>

        <p className="mt-10 text-[11px] uppercase tracking-[0.22em] text-mist/45">
          {panel.source}
        </p>
      </Reveal>
    </div>
  );
}

/* ---------- Question panel stage ---------- */

function QuestionStage({
  panel,
  staticRender,
}: {
  panel: ReckoningQuestionPanel;
  staticRender: boolean;
}) {
  return (
    <div className="texture-grid relative flex min-h-screen items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(255,107,53,0.06),transparent_70%)]" />

      <div className="relative mx-auto w-full max-w-5xl px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8">
        <Reveal staticRender={staticRender}>
          <div className="eyebrow mb-12 justify-center text-ember-400">{panel.eyebrow}</div>
        </Reveal>

        <div className="space-y-12 md:space-y-16">
          {panel.questions.map((question, index) => (
            <Reveal key={question} staticRender={staticRender} delay={0.15 + index * 0.2}>
              <h2
                className={cn(
                  'mx-auto max-w-4xl text-[clamp(1.75rem,4.5vw,3.5rem)] font-bold leading-[1.15] tracking-tight',
                  index === panel.questions.length - 1 ? 'text-ember-gradient' : 'text-mist'
                )}
              >
                {question}
              </h2>
            </Reveal>
          ))}
        </div>

        <Reveal staticRender={staticRender} delay={0.6}>
          <p className="mt-16 text-sm font-light uppercase tracking-[0.22em] text-mist/60">
            {panel.closing}
          </p>
        </Reveal>
      </div>
    </div>
  );
}

/* ---------- Section ---------- */

export default function Reckoning() {
  const reducedMotion = useReducedMotion();
  const staticRender = reducedMotion ?? false;

  return (
    <section id="reckoning" className="hairline-top relative w-full scroll-mt-20 bg-pine-950">
      {reckoningPanels.map((panel) =>
        panel.kind === 'stat' ? (
          <StatStage key={panel.id} panel={panel} staticRender={staticRender} />
        ) : (
          <QuestionStage key={panel.id} panel={panel} staticRender={staticRender} />
        )
      )}
    </section>
  );
}
