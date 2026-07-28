'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ParallaxBanner } from '@/components/shared/ParallaxBanner';
import { CTA } from '@/components/shared/CTA';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { containerStagger, itemFadeUp, fadeUp, viewportOnce } from '@/lib/animations';
import { COLLECTIONS } from '@/data/collections';

const PX = 'https://images.pexels.com/photos';

export default function CollectionsPage() {
  return (
    <>
      <section className="pt-24 lg:pt-28">
        <ParallaxBanner
          src={`${PX}/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1920`}
          alt="ThreadCraft Collections"
          label="Curated Worlds"
          title="Our Collections"
          subtitle="Eight collections, each with its own mood, palette, and purpose. From summer linens to wedding silks — find the edit that fits your moment."
          height="tall"
          overlay="dark"
        />
      </section>

      <div className="container-luxury pt-8">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Collections' }]} />
      </div>

      {/* Collections Grid */}
      <section className="py-20 lg:py-28">
        <div className="container-luxury">
          <SectionHeading
            label="Explore"
            title="All Collections"
            description="Each collection is a world of its own — explore them all."
          />
          <div className="mt-12 flex flex-col gap-8">
            {COLLECTIONS.map((col, i) => (
              <motion.div
                key={col.slug}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className={`grid gap-8 lg:grid-cols-2 lg:items-center ${i % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}
              >
                <Link href={`/collections/${col.slug}`} className="group relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={col.heroImage}
                    alt={col.name}
                    fill
                    sizes="50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-xs uppercase tracking-wider text-white/80">{col.season}</span>
                  </div>
                </Link>
                <div className="lg:[direction:ltr]">
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">{col.season}</span>
                  <h3 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">{col.name}</h3>
                  <p className="mt-3 text-base text-muted-foreground">{col.description}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{col.longDescription}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {col.highlights.map((h) => (
                      <span key={h} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">{h}</span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    <Link href={`/collections/${col.slug}`} className="flex items-center gap-1 text-sm font-medium text-accent hover:gap-2 transition-all">
                      Explore Collection <ArrowRight className="h-4 w-4" />
                    </Link>
                    <span className="text-sm text-muted-foreground">{col.pieces} pieces · From ₹{col.startingPrice.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Banner */}
      <ParallaxBanner
        src={`${PX}/261326/pexels-photo-261326.jpeg?auto=compress&cs=tinysrgb&w=1920`}
        alt="Editorial fashion"
        label="The ThreadCraft Edit"
        title="Style, Season After Season"
        subtitle="Every collection is an invitation to discover what style means to you."
        height="tall"
        overlay="dark"
      />

      {/* Stats */}
      <section className="py-20 lg:py-28">
        <div className="container-luxury">
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              { num: '8', label: 'Curated Collections' },
              { num: '300+', label: 'Pieces in Rotation' },
              { num: '10', label: 'Years of Craft' },
              { num: '50K+', label: 'Happy Customers' },
            ].map((s) => (
              <motion.div key={s.label} variants={itemFadeUp} className="text-center">
                <p className="font-display text-5xl font-bold text-accent">{s.num}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTA />
    </>
  );
}
