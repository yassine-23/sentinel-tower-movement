'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export default function FinalCTA() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const reduceMotion = useReducedMotion();

  return (
    <section id="contact" ref={ref} className="relative w-full py-24 md:py-32 lg:py-40 bg-pine-950 hairline-top overflow-hidden scroll-mt-20">
      {/* Ember glow rising from the base */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_50%_110%,rgba(255,107,53,0.14),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_35%_at_50%_-5%,rgba(46,204,113,0.07),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 texture-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)] pointer-events-none" />

      <div className="relative container px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          {/* The undeniable close */}
          <div className="text-center mb-12 md:mb-16">
            <div className="eyebrow text-ember-400 justify-center mb-7">The Only Question Left</div>
            <div className="font-display font-bold tracking-tight text-3xl sm:text-4xl md:text-5xl leading-[1.18] text-mist">
              <p>The material is free.</p>
              <p>The physics is proven.</p>
              <p className="text-ember-gradient">The forests are waiting.</p>
            </div>
            <p className="text-base md:text-lg text-mist/55 max-w-2xl mx-auto font-light mt-7">
              Under wind, a fire crosses two hectares in fifteen to thirty minutes — past that,
              containment odds fall below one in ten. The nearest station is 20 to 60 minutes away.
              A sentinel on the ridge answers in under a minute.
            </p>
          </div>

          {/* The invitation */}
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-[1.05] text-mist tracking-tight">
              Protect Your <span className="text-ember-gradient">Community</span>
            </h2>
            <p className="text-lg md:text-xl text-mist/55 max-w-2xl mx-auto font-light">
              Join the movement. Host a sentinel on your ridgeline. Or simply come witness the
              first towers take their watch — before fire season starts.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Link href="mailto:contact@earthsimmunesystem.com">
              <Button size="lg" className="group w-full sm:w-auto px-8 h-14 text-base bg-gradient-to-br from-ember-400 to-ember-600 text-pine-950 hover:from-ember-300 hover:to-ember-500 font-semibold rounded-xl shadow-[0_8px_32px_-8px_rgba(255,107,53,0.65)]">
                Get Started
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="#impact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base border-mist/20 bg-transparent text-mist hover:bg-white/[0.06] hover:border-mist/35 font-medium rounded-xl">
                Learn More
              </Button>
            </Link>
          </div>

          {/* Contact Form */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-mist mb-3 font-display">
                Get in Touch
              </h3>
              <p className="text-mist/50">
                A ridgeline, a district, a pair of hands — tell us where you stand.
                Our team responds within 24 hours.
              </p>
            </div>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <a
              href="mailto:contact@earthsimmunesystem.com"
              className="card-dark group flex items-center gap-4 p-6 hover:border-ember-400/30"
            >
              <div className="flex-shrink-0 p-3 rounded-xl bg-ember-500/10 border border-ember-500/25 group-hover:border-ember-400/50 transition-colors">
                <Mail className="w-5 h-5 text-ember-400" />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-mist/45 uppercase tracking-[0.15em] font-medium mb-1">Email</div>
                <div className="text-mist font-medium truncate">contact@earthsimmunesystem.com</div>
              </div>
            </a>
            <a
              href="tel:+1-555-EARTH-99"
              className="card-dark group flex items-center gap-4 p-6 hover:border-forest-400/30"
            >
              <div className="flex-shrink-0 p-3 rounded-xl bg-forest-500/10 border border-forest-400/25 group-hover:border-forest-400/50 transition-colors">
                <Phone className="w-5 h-5 text-forest-300" />
              </div>
              <div>
                <div className="text-xs text-mist/45 uppercase tracking-[0.15em] font-medium mb-1">Phone</div>
                <div className="text-mist font-medium">+1 (555) EARTH-99</div>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
