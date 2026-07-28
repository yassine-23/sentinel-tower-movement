'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import DonateButton from './DonateButton';
import { Menu, X, Leaf, ArrowRight } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { href: '/#home', section: 'home', label: 'Home' },
    { href: '/#experience', section: 'experience', label: 'Experience' },
    { href: '/#transformation', section: 'transformation', label: 'Solution' },
    { href: '/#impact', section: 'impact', label: 'Impact' },
    { href: '/#contact', section: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Update active section (only meaningful on the home page)
      const current = navLinks.find(link => {
        const element = document.getElementById(link.section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current.section);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: 'spring' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isOpen
          ? 'bg-pine-950/85 backdrop-blur-xl border-b border-white/[0.07] shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/#home" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 12, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative p-2 rounded-xl bg-gradient-to-br from-forest-600 to-forest-800 border border-forest-400/30 shadow-[0_0_20px_-4px_rgba(46,204,113,0.5)]"
            >
              <Leaf className="w-5 h-5 text-forest-100" />
            </motion.div>
            <div className="leading-tight">
              <span className="block text-base md:text-lg font-bold font-display text-mist tracking-tight">
                Earth&rsquo;s Immune System
              </span>
              <span className="hidden md:block text-[10px] font-medium uppercase tracking-[0.28em] text-ember-400">
                Sentinel Network
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === link.section
                    ? 'text-mist'
                    : 'text-mist/55 hover:text-mist'
                }`}
              >
                {activeSection === link.section && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-lg bg-white/[0.06] border border-white/10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            ))}

            <div className="ml-3 flex items-center gap-2">
              <DonateButton />
              <Link href="/#contact">
                <Button
                  size="sm"
                  className="h-9 px-4 rounded-lg bg-ember-500 text-pine-950 hover:bg-ember-400 font-semibold shadow-[0_0_24px_-6px_rgba(255,107,53,0.6)]"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-white/[0.05] border border-white/10 hover:border-white/20"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6 text-mist" /> : <Menu className="w-6 h-6 text-mist" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-1 border-t border-white/[0.07]">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                        activeSection === link.section
                          ? 'bg-white/[0.06] border border-white/10 text-mist'
                          : 'text-mist/60 hover:bg-white/[0.04] hover:text-mist'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.06 }}
                  className="pt-2 space-y-2"
                >
                  <div onClick={() => setIsOpen(false)}>
                    <DonateButton className="w-full h-11" />
                  </div>
                  <Link href="/#contact" onClick={() => setIsOpen(false)}>
                    <Button className="w-full h-11 rounded-lg bg-ember-500 text-pine-950 hover:bg-ember-400 font-semibold">
                      Get Started
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
