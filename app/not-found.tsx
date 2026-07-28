'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fadeUp } from '@/lib/animations';

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-4 pt-24">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center gap-6 text-center"
      >
        <p className="font-display text-[10rem] font-bold leading-none text-accent/20 sm:text-[12rem]">
          404
        </p>
        <div className="-mt-8 flex flex-col gap-3">
          <h1 className="font-display text-3xl font-semibold sm:text-4xl">
            Page Not Found
          </h1>
          <p className="max-w-md text-base text-muted-foreground">
            The page you are looking for may have been moved, renamed, or no longer
            exists. Let&apos;s get you back to shopping.
          </p>
        </div>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="bg-accent text-white hover:bg-accent/90">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" /> Back to Home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/shop">
              <Search className="mr-2 h-4 w-4" /> Browse the Shop
            </Link>
          </Button>
        </div>
        <Link
          href="/contact"
          className="mt-4 flex items-center gap-1 text-sm text-muted-foreground hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" /> Or contact us for help
        </Link>
      </motion.div>
    </section>
  );
}
