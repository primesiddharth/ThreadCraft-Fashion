'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fadeUp, viewportOnce } from '@/lib/animations';

interface CTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CTA({
  title = 'Ready to Redefine Your Style?',
  description = 'Visit our Chennai boutique for a personal styling session, or explore the collection online. Your next signature look is waiting.',
  buttonText = 'Shop the Collection',
  buttonHref = '/shop',
}: CTAProps) {
  return (
    <section className="bg-foreground py-20 lg:py-28">
      <div className="container-luxury">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col items-center gap-6 text-center"
        >
          <h2 className="max-w-3xl font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-white/70">
            {description}
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-accent text-white hover:bg-accent/90">
              <Link href={buttonHref}>
                {buttonText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/contact">Book a Styling Session</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
