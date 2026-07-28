'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ParallaxBanner } from '@/components/shared/ParallaxBanner';
import { CTA } from '@/components/shared/CTA';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { containerStagger, itemFadeUp, fadeUp, viewportOnce } from '@/lib/animations';
import { SHOP_CATEGORIES } from '@/constants/business';
import { PRODUCTS } from '@/data/products';

const PX = 'https://images.pexels.com/photos';

const categoryImages: Record<string, string> = {
  men: `${PX}/769733/pexels-photo-769733.jpeg?auto=compress&cs=tinysrgb&w=800`,
  women: `${PX}/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=800`,
  kids: `${PX}/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=800`,
  accessories: `${PX}/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=800`,
  footwear: `${PX}/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800`,
  bags: `${PX}/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800`,
  watches: `${PX}/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800`,
};

export default function ShopPage() {
  const featured = PRODUCTS.slice(0, 8);

  return (
    <>
      <section className="pt-24 lg:pt-28">
        <ParallaxBanner
          src={`${PX}/996983/pexels-photo-996983.jpeg?auto=compress&cs=tinysrgb&w=1920`}
          alt="ThreadCraft Shop"
          label="The Collection"
          title="Shop All Fashion"
          subtitle="From tailored blazers to streetwear drops, heirloom sarees to automatic watches — explore over 300 pieces across every category."
          height="tall"
          overlay="dark"
        />
      </section>

      <div className="container-luxury pt-8">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Shop' }]} />
      </div>

      {/* Categories Grid */}
      <section className="py-20 lg:py-28">
        <div className="container-luxury">
          <SectionHeading
            label="Browse by Category"
            title="Shop Our Categories"
            description="Seven worlds of style, each curated with intention. Find your edit."
          />
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {SHOP_CATEGORIES.map((cat, i) => {
              const slug = cat.href.split('/').pop() || '';
              const img = categoryImages[slug] || categoryImages.men;
              const count = PRODUCTS.filter((p) => p.category === slug).length;
              return (
                <motion.div key={cat.href} variants={itemFadeUp}>
                  <Link href={cat.href} className="group relative block aspect-[4/3] overflow-hidden rounded-xl">
                    <Image
                      src={img}
                      alt={cat.label}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6">
                      <div>
                        <h3 className="font-display text-2xl font-semibold text-white">{cat.label}</h3>
                        <p className="mt-1 text-sm text-white/80">{count} pieces</p>
                      </div>
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur transition-all group-hover:bg-accent">
                        <ArrowRight className="h-5 w-5 text-white" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: 'hsl(var(--muted))' }}>
        <div className="container-luxury">
          <SectionHeading
            label="Curated For You"
            title="Featured Pieces"
            description="A selection of our most loved pieces across every category."
          />
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4"
          >
            {featured.map((p) => (
              <motion.div key={p.id} variants={itemFadeUp}>
                <Link href={`/product/${p.slug}`} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-white">
                    <Image src={p.images[0]} alt={p.name} fill sizes="(max-width: 640px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="mt-3">
                    <h3 className="text-sm font-medium transition-colors group-hover:text-accent">{p.name}</h3>
                    <p className="text-sm font-semibold">₹{p.price.toLocaleString('en-IN')}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28">
        <div className="container-luxury">
          <SectionHeading
            label="More Than Shopping"
            title="Our Services"
            description="From personal styling to home delivery — a complete fashion experience."
          />
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              { title: 'Personal Styling', desc: 'Complimentary styling sessions in-store and online.' },
              { title: 'Custom Tailoring', desc: 'Bespoke garments made to your exact measurements.' },
              { title: 'Home Delivery', desc: 'Free delivery across India on orders above ₹2,999.' },
              { title: 'Gift Cards', desc: 'The perfect gift — available in any denomination.' },
            ].map((s) => (
              <motion.div key={s.title} variants={itemFadeUp} className="rounded-xl border border-border p-6">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTA />
    </>
  );
}
