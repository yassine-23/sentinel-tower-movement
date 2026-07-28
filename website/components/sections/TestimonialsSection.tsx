'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote, Star } from 'lucide-react';

export default function TestimonialsSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const testimonials = [
    {
      quote: "Earth's Immune System detected a fire on our property within minutes. Their early warning gave us time to evacuate safely and helped firefighters contain it before it spread. This technology saves lives.",
      author: "Maria Rodriguez",
      role: "Homeowner, Napa Valley",
      rating: 5,
    },
    {
      quote: "As a fire chief, I've seen firsthand how crucial early detection is. This system gives us a 20-30 minute head start, which can mean the difference between a controlled burn and a disaster.",
      author: "Chief James Patterson",
      role: "Cal Fire Department",
      rating: 5,
    },
    {
      quote: "We installed 12 towers across our forest reserve. The ROI was immediate—one prevented fire alone would have cost us millions. Plus, we're repurposing waste. It's brilliant.",
      author: "Dr. Sarah Chen",
      role: "Forest Conservation Director",
      rating: 5,
    },
  ];

  return (
    <section ref={ref} className="relative w-full py-24 md:py-32 bg-white dark:bg-slate-900 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-950/10" />

      <div className="relative container px-6 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 backdrop-blur-sm mb-6">
            <Star className="w-4 h-4 text-yellow-600 dark:text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Real Impact
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-slate-300 bg-clip-text text-transparent mb-6">
            Trusted by Communities
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            From homeowners to fire departments, see how Earth&rsquo;s Immune System is protecting lives and property.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.15 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-8 rounded-3xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all h-full flex flex-col">
                {/* Quote icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-blue-500" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6 flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
                  <div className="font-bold text-slate-900 dark:text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border border-blue-200/50 dark:border-blue-900/50">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
              100% Success Rate
            </div>
            <div className="text-slate-600 dark:text-slate-400">
              In pilot programs across California and Australia
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
