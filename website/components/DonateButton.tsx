'use client';

import { Heart } from 'lucide-react';
import { Button } from './ui/button';

/**
 * Stripe Payment Link for donations — created in the Stripe Dashboard
 * (https://dashboard.stripe.com/payment-links) and injected at build time.
 * No secret keys are involved; the link is a public URL.
 */
const paymentLink = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK;

export function getDonateHref(): string {
  return paymentLink && paymentLink.startsWith('http') ? paymentLink : '#donate';
}

export default function DonateButton({ className = '' }: { className?: string }) {
  const href = getDonateHref();
  const external = href.startsWith('http');

  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`inline-block ${className.includes('w-full') ? 'w-full' : ''}`}
    >
      <Button
        size="sm"
        className={`h-9 px-4 rounded-lg bg-forest-600 text-mist hover:bg-forest-500 font-semibold shadow-[0_0_24px_-6px_rgba(46,204,113,0.6)] ${className}`}
      >
        <Heart className="h-4 w-4 mr-1.5 fill-current" />
        Donate
      </Button>
    </a>
  );
}
