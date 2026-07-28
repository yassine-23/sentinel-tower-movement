'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section id="contact" ref={ref} className="relative w-full py-24 md:py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-20" />

      {/* Animated blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="relative container px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center text-white mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready to protect your community?
          </h2>
          <p className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto leading-relaxed mb-12">
            Join us in building Earth&rsquo;s immune system. Whether you&rsquo;re a government agency, utility company, or concerned community member—we want to hear from you.
          </p>
        </motion.div>

        {/* CTA Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16"
        >
          {/* Primary CTA */}
          <div className="p-8 md:p-10 rounded-3xl bg-white text-slate-900 shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Start a Pilot Program</h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Deploy our system in your region. We&rsquo;ll guide you through every step, from site selection to installation and training.
            </p>
            <Button size="lg" className="w-full shadow-lg shadow-blue-500/25 group" asChild>
              <Link href="mailto:contact@earthsimmunesystem.com">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Secondary CTA */}
          <div className="p-8 md:p-10 rounded-3xl bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white">
            <h3 className="text-3xl font-bold mb-4">Partnership Opportunities</h3>
            <p className="text-lg text-blue-50 mb-8 leading-relaxed">
              Collaborate with us on technology, deployment, or funding. Together, we can scale faster and protect more communities.
            </p>
            <Button size="lg" variant="outline" className="w-full bg-white/10 border-2 border-white text-white hover:bg-white hover:text-slate-900 group" asChild>
              <Link href="mailto:partnerships@earthsimmunesystem.com">
                Explore Partnerships
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-8 md:gap-12 text-white"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm text-blue-100">Email</div>
              <a href="mailto:contact@earthsimmunesystem.com" className="text-lg font-semibold hover:underline">
                contact@earthsimmunesystem.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm text-blue-100">Phone</div>
              <a href="tel:+1-555-EARTH-99" className="text-lg font-semibold hover:underline">
                +1 (555) EARTH-99
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm text-blue-100">Location</div>
              <div className="text-lg font-semibold">
                San Francisco, CA
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-blue-100">
            Every tower we deploy is a community protected. Let&rsquo;s build Earth&rsquo;s immune system together.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
