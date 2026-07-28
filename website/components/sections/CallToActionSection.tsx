'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

export default function CallToActionSection() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted:', { email, organization, message });
    alert('Thank you for your interest. We will be in touch within 48 hours.');
    setEmail('');
    setOrganization('');
    setMessage('');
  };

  return (
    <section ref={ref} className="relative w-full bg-[#f5f5f7] py-24 md:py-32">
      <div className="max-w-[980px] mx-auto px-6">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-headline text-[#1d1d1f] mb-6">
            Partner with us
          </h2>
          <p className="subheadline max-w-[640px] mx-auto">
            Deploy the first sentinel networks in 2025. Protect your region.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6 max-w-[600px] mx-auto">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="w-full px-[17px] py-[14px] bg-white border border-[#d2d2d7] rounded-[12px] text-[17px] text-[#1d1d1f] placeholder-[#86868b] focus:outline-none focus:border-[#0071e3] focus:ring-4 focus:ring-[#0071e3]/10 transition-all"
              />
            </div>

            <div>
              <input
                type="text"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                placeholder="Organization"
                required
                className="w-full px-[17px] py-[14px] bg-white border border-[#d2d2d7] rounded-[12px] text-[17px] text-[#1d1d1f] placeholder-[#86868b] focus:outline-none focus:border-[#0071e3] focus:ring-4 focus:ring-[#0071e3]/10 transition-all"
              />
            </div>

            <div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your interest (optional)"
                rows={5}
                className="w-full px-[17px] py-[14px] bg-white border border-[#d2d2d7] rounded-[12px] text-[17px] text-[#1d1d1f] placeholder-[#86868b] focus:outline-none focus:border-[#0071e3] focus:ring-4 focus:ring-[#0071e3]/10 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-[17px] font-normal py-[12px] px-[22px] rounded-[980px] transition-all"
            >
              Request Partnership Information
            </button>

            <p className="text-[14px] text-[#86868b] text-center">
              We respond to all inquiries within 48 hours
            </p>
          </form>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20 pt-12 border-t border-[#d2d2d7]"
        >
          <p className="text-[12px] text-[#86868b]">
            © 2025 Earth&rsquo;s Immune System. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
