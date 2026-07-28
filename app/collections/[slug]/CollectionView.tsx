'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { notFound } from 'next/navigation';
import { ProductCard } from '@/components/shared/ProductCard';
import { ParallaxBanner } from '@/components/shared/ParallaxBanner';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { CTA } from '@/components/shared/CTA';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { containerStagger, itemFadeUp, fadeUp, fadeLeft, fadeRight, viewportOnce } from '@/lib/animations';
import { COLLECTIONS, getCollectionBySlug } from '@/data/collections';
import { PRODUCTS, getProductBySlug } from '@/data/products';

const PX = 'https://images.pexels.com/photos';

export function CollectionView({ params }: { params: { slug: string } }) {
  const collection = getCollectionBySlug(params.slug);
  if (!collection) notFound();

  const products = collection.products
    .map((id) => getProductBySlug(id))
    .filter(Boolean) as typeof PRODUCTS;

  return (
    <>
      {/* Hero */}
      <section className="pt-24 lg:pt-28">
        <ParallaxBanner
          src={collection.heroImage}
          alt={collection.name}
          label={collection.season}
          title={collection.name}
          subtitle={collection.description}
          height="screen"
          overlay="dark"
        />
      </section>

      <div className="container-luxury pt-8">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Collections', href: '/collections' }, { label: collection.name }]} />
      </div>

      {/* Collection Story */}
      <section className="py-20 lg:py-28">
        <div className="container-luxury">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewportOnce}>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">{collection.season}</span>
              <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl lg:text-5xl">{collection.name}</h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">{collection.longDescription}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {collection.highlights.map((h) => (
                  <span key={h} className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs">
                    <Check className="h-3 w-3 text-success" /> {h}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-6">
                <div>
                  <p className="font-display text-2xl font-bold">{collection.pieces}</p>
                  <p className="text-xs text-muted-foreground">Pieces</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold">₹{collection.startingPrice.toLocaleString('en-IN')}</p>
                  <p className="text-xs text-muted-foreground">Starting Price</p>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewportOnce} className="relative aspect-[4/5] overflow-hidden rounded-xl">
              <Image src={collection.bannerImage} alt={collection.name} fill sizes="50vw" className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products in Collection */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: 'hsl(var(--muted))' }}>
        <div className="container-luxury">
          <SectionHeading
            label="Shop the Collection"
            title="Featured Pieces"
            description="The pieces that define this edit — each crafted with the same care and intention."
          />
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4"
          >
            {products.map((p) => (
              <motion.div key={p.id} variants={itemFadeUp}>
                <ProductCard product={p} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Parallax Editorial Banner */}
      <ParallaxBanner
        src={collection.bannerImage}
        alt={`${collection.name} editorial`}
        label="Editorial"
        title="The Look"
        subtitle="Styling inspiration from the collection — see how each piece comes to life."
        height="tall"
        overlay="dark"
      />

      {/* Styling Tips */}
      <section className="py-20 lg:py-28">
        <div className="container-luxury">
          <SectionHeading
            label="How to Wear It"
            title="Styling Tips"
            description="Three ways to make this collection your own."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {[
              { num: '01', title: 'The Everyday', desc: 'Pair a silk blouse with tailored trousers and sneakers for an effortless desk-to-dinner look.' },
              { num: '02', title: 'The Statement', desc: 'Layer the evening gown with a leather trench and minimal jewelry for a wedding-ready ensemble.' },
              { num: '03', title: 'The Weekend', desc: 'Keep it relaxed — a linen kurta with denim and Chelsea boots for a casual yet considered look.' },
            ].map((tip, i) => (
              <motion.div
                key={tip.num}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col gap-3 rounded-xl border border-border p-8"
              >
                <span className="font-display text-4xl font-bold text-accent/20">{tip.num}</span>
                <h3 className="text-lg font-semibold">{tip.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{tip.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fabric & Craft */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: 'hsl(var(--muted))' }}>
        <div className="container-luxury">
          <div className="grid gap-12 lg:grid-cols-2">
            <SectionHeading
              label="The Details"
              title="Fabric & Craft"
              description="Every piece in this collection is made with materials and techniques that honor tradition and embrace the future."
              align="left"
            />
            <div className="flex flex-col gap-4">
              {[
                { title: 'Sourcing', desc: 'We work directly with weavers, tanneries, and mills — no middlemen, no shortcuts.' },
                { title: 'Construction', desc: 'Half-canvas tailoring, French seams, and hand-finished details on every garment.' },
                { title: 'Inspection', desc: 'Each piece is inspected by hand before it reaches the floor. Nothing leaves the atelier unchecked.' },
                { title: 'Longevity', desc: 'Built to be worn for years, not seasons. Repair, don\'t replace — that\'s our philosophy.' },
              ].map((item) => (
                <div key={item.title} className="rounded-xl bg-white p-6 shadow-sm">
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA
        title={`Explore the ${collection.name}`}
        description="Visit our Chennai boutique or shop online. Every piece is ready to ship."
        buttonText="Shop Now"
        buttonHref="/shop"
      />
    </>
  );
}
