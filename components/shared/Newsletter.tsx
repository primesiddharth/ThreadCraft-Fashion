'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { fadeUp, viewportOnce } from '@/lib/animations';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="bg-section-bg py-20 lg:py-28" style={{ backgroundColor: 'hsl(var(--muted))' }}>
      <div className="container-luxury">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
            <Mail className="h-6 w-6 text-accent" />
          </div>
          <div>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              Join the ThreadCraft Circle
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Be the first to know about new collections, private sales, and styling
              guides. Enjoy 10% off your first order.
            </p>
          </div>
          {submitted ? (
            <div className="flex items-center gap-2 rounded-lg bg-success/10 px-6 py-4 text-success">
              <Check className="h-5 w-5" />
              <span className="font-medium">
                Thank you! Check your inbox for a welcome offer.
              </span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex w-full flex-col gap-3 sm:flex-row"
            >
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="h-12 flex-1 bg-white"
              />
              <Button type="submit" size="lg" className="h-12 bg-accent text-white hover:bg-accent/90">
                Subscribe
              </Button>
            </form>
          )}
          <p className="text-xs text-muted-foreground">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
