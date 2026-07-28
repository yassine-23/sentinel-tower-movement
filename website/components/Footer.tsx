'use client';

import Link from 'next/link';
import { Leaf, Github, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: 'The Reckoning', href: '/#reckoning' },
      { label: '3D Experience', href: '/#experience' },
      { label: 'The Stakes', href: '/#impact' },
    ],
    company: [
      { label: 'Open Blueprint (GitHub)', href: 'https://github.com/yassine-23/sentinel-tower-movement' },
      { label: 'Contact', href: '/#contact' },
      { label: 'Donate', href: '/#donate' },
    ],
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/yassine-23/sentinel-tower-movement', label: 'GitHub — open blueprint' },
    { icon: Mail, href: 'mailto:contact@earthsimmunesystem.com', label: 'Email' },
  ];

  return (
    <footer className="relative w-full bg-pine-950 text-mist hairline-top overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_110%,rgba(46,204,113,0.06),transparent_70%)] pointer-events-none" />

      <div className="relative container px-6 max-w-7xl mx-auto py-16 md:py-20">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-5 group">
              <div className="p-2 rounded-xl bg-gradient-to-br from-forest-600 to-forest-800 border border-forest-400/30 group-hover:shadow-[0_0_20px_-4px_rgba(46,204,113,0.5)] transition-all">
                <Leaf className="w-5 h-5 text-forest-100" />
              </div>
              <div className="leading-tight">
                <span className="block text-lg font-bold font-display text-mist tracking-tight">
                  Earth&rsquo;s Immune System
                </span>
                <span className="block text-[10px] font-medium uppercase tracking-[0.28em] text-ember-400">
                  Sentinel Network
                </span>
              </div>
            </Link>
            <p className="text-mist/45 leading-relaxed mb-6 max-w-md">
              Building an intelligent wildfire prevention network by transforming wind turbine waste into sentinel towers that protect communities and ecosystems.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/[0.04] border border-white/[0.07] text-mist/60 hover:text-mist hover:border-forest-400/40 hover:bg-white/[0.07] transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold font-display uppercase tracking-[0.18em] text-mist/70 mb-5">Explore</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-mist/45 hover:text-forest-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold font-display uppercase tracking-[0.18em] text-mist/70 mb-5">Movement</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-mist/45 hover:text-forest-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-white/[0.07]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-mist/40 text-sm text-center md:text-left">
              © {currentYear} Earth&rsquo;s Immune System. All rights reserved.
            </p>
            <p className="text-mist/30 text-sm text-center md:text-right inline-flex items-center gap-1.5">
              Built with
              <Heart className="w-3.5 h-3.5 text-ember-500 fill-current" />
              for a safer planet
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
