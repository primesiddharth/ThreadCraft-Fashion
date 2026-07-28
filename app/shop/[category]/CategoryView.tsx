'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SlidersHorizontal, Grid3x3, X, ChevronDown } from 'lucide-react';
import { ProductCard } from '@/components/shared/ProductCard';
import { ParallaxBanner } from '@/components/shared/ParallaxBanner';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { CTA } from '@/components/shared/CTA';
import { Button } from '@/components/ui/button';
import { containerStagger, itemFadeUp, viewportOnce } from '@/lib/animations';
import { PRODUCTS } from '@/data/products';
import { notFound } from 'next/navigation';

const PX = 'https://images.pexels.com/photos';

const categoryHeroImages: Record<string, string> = {
  men: `${PX}/769733/pexels-photo-769733.jpeg?auto=compress&cs=tinysrgb&w=1920`,
  women: `${PX}/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=1920`,
  kids: `${PX}/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=1920`,
  accessories: `${PX}/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=1920`,
  footwear: `${PX}/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1920`,
  bags: `${PX}/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1920`,
  watches: `${PX}/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1920`,
};

const categoryTitles: Record<string, { label: string; title: string; subtitle: string }> = {
  men: { label: "Men's Fashion", title: "Men's Collection", subtitle: 'Tailored blazers, selvedge denim, ethnic kurtas, and everyday essentials — crafted for the modern man.' },
  women: { label: "Women's Fashion", title: "Women's Collection", subtitle: 'Silk blouses, evening gowns, Kanchipuram sarees, and statement outerwear — designed to define your style.' },
  kids: { label: "Kids' Fashion", title: "Kids Collection", subtitle: 'Soft organic cottons, playful prints, and comfortable fits for every adventure.' },
  accessories: { label: 'Accessories', title: 'Accessories', subtitle: 'Sunglasses, belts, and finishing touches that transform an outfit.' },
  footwear: { label: 'Footwear', title: 'Footwear', subtitle: 'From classic sneakers to Goodyear-welted Chelsea boots — every step in style.' },
  bags: { label: 'Bags', title: 'Bags & Wallets', subtitle: 'Full-grain leather totes, crossbody bags, and everyday carry — built to last.' },
  watches: { label: 'Watches', title: 'Watches', subtitle: 'Swiss-inspired automatic timepieces with sapphire crystal and exhibition caseback.' },
};

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'newest', label: 'Newest' },
];

export function CategoryView({ params }: { params: { category: string } }) {
  const category = params.category;
  const meta = categoryTitles[category];

  if (!meta) notFound();

  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 30000]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [showOnlyNew, setShowOnlyNew] = useState(false);
  const [showOnlySale, setShowOnlySale] = useState(false);

  const products = useMemo(() => {
    let result = PRODUCTS.filter((p) => p.category === category);

    if (showOnlyNew) result = result.filter((p) => p.isNew);
    if (showOnlySale) result = result.filter((p) => p.originalPrice);
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);
    if (selectedColors.length > 0) {
      result = result.filter((p) => p.colors.some((c) => selectedColors.includes(c.name)));
    }

    switch (sortBy) {
      case 'price-low': result = [...result].sort((a, b) => a.price - b.price); break;
      case 'price-high': result = [...result].sort((a, b) => b.price - a.price); break;
      case 'rating': result = [...result].sort((a, b) => b.rating - a.rating); break;
      case 'newest': result = [...result].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)); break;
    }
    return result;
  }, [category, sortBy, showOnlyNew, showOnlySale, priceRange, selectedColors]);

  const allColors = useMemo(() => {
    const colors = new Map<string, string>();
    PRODUCTS.filter((p) => p.category === category).forEach((p) =>
      p.colors.forEach((c) => colors.set(c.name, c.hex))
    );
    return Array.from(colors.entries()).map(([name, hex]) => ({ name, hex }));
  }, [category]);

  return (
    <>
      <section className="pt-24 lg:pt-28">
        <ParallaxBanner
          src={categoryHeroImages[category] || categoryHeroImages.men}
          alt={meta.title}
          label={meta.label}
          title={meta.title}
          subtitle={meta.subtitle}
          height="tall"
          overlay="dark"
        />
      </section>

      <div className="container-luxury pt-8">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }, { label: meta.title }]} />
      </div>

      {/* Products Section */}
      <section className="py-12 lg:py-16">
        <div className="container-luxury">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{products.length}</span> products
            </p>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden"
              >
                <SlidersHorizontal className="mr-2 h-4 w-4" /> Filters
              </Button>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none rounded-md border border-input bg-background px-4 py-2 pr-10 text-sm font-medium outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[260px_1fr]">
            {/* Filters Sidebar */}
            <aside className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
              <div className="sticky top-24 flex flex-col gap-6 rounded-xl border border-border p-6">
                <div className="flex items-center justify-between lg:hidden">
                  <h3 className="text-lg font-semibold">Filters</h3>
                  <button onClick={() => setShowFilters(false)} aria-label="Close filters">
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div>
                  <h4 className="mb-3 text-sm font-semibold">Price Range</h4>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      className="w-full rounded-md border border-input px-2 py-1.5 text-sm"
                      placeholder="Min"
                    />
                    <span className="text-muted-foreground">—</span>
                    <input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="w-full rounded-md border border-input px-2 py-1.5 text-sm"
                      placeholder="Max"
                    />
                  </div>
                </div>

                <div>
                  <h4 className="mb-3 text-sm font-semibold">Colors</h4>
                  <div className="flex flex-wrap gap-2">
                    {allColors.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => {
                          setSelectedColors((prev) =>
                            prev.includes(c.name) ? prev.filter((n) => n !== c.name) : [...prev, c.name]
                          );
                        }}
                        title={c.name}
                        className={`h-7 w-7 rounded-full border-2 transition-all ${
                          selectedColors.includes(c.name) ? 'border-accent scale-110' : 'border-border'
                        }`}
                        style={{ backgroundColor: c.hex }}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-3 text-sm font-semibold">Availability</h4>
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={showOnlyNew}
                      onChange={(e) => setShowOnlyNew(e.target.checked)}
                      className="h-4 w-4 rounded border-border accent-accent"
                    />
                    New Arrivals
                  </label>
                  <label className="mt-2 flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={showOnlySale}
                      onChange={(e) => setShowOnlySale(e.target.checked)}
                      className="h-4 w-4 rounded border-border accent-accent"
                    />
                    On Sale
                  </label>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setPriceRange([0, 30000]);
                    setSelectedColors([]);
                    setShowOnlyNew(false);
                    setShowOnlySale(false);
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            </aside>

            {/* Product Grid */}
            <div>
              {products.length > 0 ? (
                <motion.div
                  variants={containerStagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {products.map((p) => (
                    <motion.div key={p.id} variants={itemFadeUp}>
                      <ProductCard product={p} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <div className="flex flex-col items-center gap-4 py-20 text-center">
                  <Grid3x3 className="h-12 w-12 text-muted-foreground/40" />
                  <p className="text-lg font-medium">No products match your filters</p>
                  <p className="text-sm text-muted-foreground">Try adjusting your filters or clearing them.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Mid Banner */}
      <ParallaxBanner
        src={`${PX}/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1920`}
        alt={`${meta.title} editorial`}
        label="Editorial"
        title="The Edit"
        subtitle="Styled, shot, and curated — explore the pieces that define this season."
        height="medium"
        overlay="medium"
      />

      {/* Category Highlights */}
      <section className="py-20 lg:py-28">
        <div className="container-luxury">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">The ThreadCraft Difference</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {[
                  { title: 'Premium Fabrics', desc: 'Italian wool, Japanese selvedge, Kanchipuram silk — sourced directly from the makers.' },
                  { title: 'Expert Tailoring', desc: 'Half-canvas construction, French seams, and hand-finished details on every piece.' },
                  { title: 'Personal Service', desc: 'Complimentary styling sessions and alterations on all tailored pieces.' },
                  { title: 'Ethical Sourcing', desc: 'Organic cotton, certified dyes, and fair-trade partnerships throughout our supply chain.' },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-border p-6">
                    <h3 className="text-base font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
              <Image src={`${PX}/261326/pexels-photo-261326.jpeg?auto=compress&cs=tinysrgb&w=600`} alt="Lifestyle" fill sizes="33vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
