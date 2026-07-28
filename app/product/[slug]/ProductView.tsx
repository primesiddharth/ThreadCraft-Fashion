'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Star,
  Heart,
  ShoppingBag,
  Truck,
  RefreshCw,
  ShieldCheck,
  ChevronRight,
  Minus,
  Plus,
  Check,
  Ruler,
  Sparkles,
} from 'lucide-react';
import { notFound } from 'next/navigation';
import { ProductCard } from '@/components/shared/ProductCard';
import { ParallaxBanner } from '@/components/shared/ParallaxBanner';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { CTA } from '@/components/shared/CTA';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { PRODUCTS, getProductBySlug, getRelatedProducts } from '@/data/products';
import { fadeUp, fadeLeft, fadeRight, containerStagger, itemFadeUp, viewportOnce } from '@/lib/animations';
import { cn } from '@/lib/utils';

const PX = 'https://images.pexels.com/photos';

export function ProductView({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);

  const related = getRelatedProducts(product, 4);
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const frequentlyBought = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 2);

  return (
    <>
      {/* Breadcrumb */}
      <div className="container-luxury pt-24 lg:pt-28">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Shop', href: '/shop' },
          { label: product.category.charAt(0).toUpperCase() + product.category.slice(1), href: `/shop/${product.category}` },
          { label: product.name },
        ]} />
      </div>

      {/* Product Gallery + Info */}
      <section className="py-12 lg:py-16">
        <div className="container-luxury">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Gallery */}
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewportOnce} className="flex flex-col gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-muted">
                <Image
                  src={product.images[activeImage]}
                  alt={product.name}
                  fill
                  sizes="50vw"
                  priority
                  className="object-cover"
                />
                {product.badge && (
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary shadow-sm">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={cn(
                      'relative aspect-[3/4] overflow-hidden rounded-lg border-2 transition-all',
                      activeImage === i ? 'border-accent' : 'border-transparent opacity-70 hover:opacity-100'
                    )}
                  >
                    <Image src={img} alt={`${product.name} view ${i + 1}`} fill sizes="100px" className="object-cover" />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Info */}
            <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewportOnce} className="flex flex-col gap-6">
              <div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={cn('h-4 w-4', i < Math.round(product.rating) ? 'fill-accent text-accent' : 'text-border')} />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">{product.rating.toFixed(1)} · {product.reviewCount} reviews</span>
                </div>
                <h1 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{product.name}</h1>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{product.description}</p>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3">
                <span className="font-display text-3xl font-bold">₹{product.price.toLocaleString('en-IN')}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-lg text-muted-foreground line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">Save {discount}%</span>
                  </>
                )}
              </div>

              {/* Colors */}
              <div>
                <h3 className="text-sm font-semibold">Color: <span className="text-muted-foreground">{product.colors[selectedColor].name}</span></h3>
                <div className="mt-3 flex gap-2">
                  {product.colors.map((c, i) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(i)}
                      title={c.name}
                      className={cn(
                        'h-10 w-10 rounded-full border-2 transition-all',
                        selectedColor === i ? 'border-accent scale-110' : 'border-border'
                      )}
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold">Size</h3>
                  <button className="flex items-center gap-1 text-xs text-accent hover:underline">
                    <Ruler className="h-3 w-3" /> Size Guide
                  </button>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        'min-w-[3rem] rounded-lg border px-4 py-2.5 text-sm font-medium transition-all',
                        selectedSize === size
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border hover:border-accent hover:text-accent'
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity + Add to Cart */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center rounded-lg border border-border">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="flex h-11 w-11 items-center justify-center" aria-label="Decrease quantity">
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-12 text-center text-base font-semibold">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="flex h-11 w-11 items-center justify-center" aria-label="Increase quantity">
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <Button size="lg" className="flex-1 bg-accent text-white hover:bg-accent/90">
                    <ShoppingBag className="mr-2 h-5 w-5" /> Add to Cart
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => setLiked(!liked)}
                    className={cn(liked && 'border-accent text-accent')}
                  >
                    <Heart className={cn('h-5 w-5', liked && 'fill-current')} />
                  </Button>
                </div>
                <Button size="lg" variant="outline" className="w-full">
                  Buy Now
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 border-t border-border pt-6">
                {[
                  { Icon: Truck, label: 'Free Shipping' },
                  { Icon: RefreshCw, label: '30-Day Returns' },
                  { Icon: ShieldCheck, label: 'Secure Payment' },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col items-center gap-2 text-center">
                    <item.Icon className="h-5 w-5 text-accent" />
                    <span className="text-xs text-muted-foreground">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Fabric & Care Quick Info */}
              <div className="rounded-xl border border-border p-5">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-accent" />
                  <span className="text-sm font-semibold">Fabric: {product.fabric}</span>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{product.care}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-12 lg:py-16" style={{ backgroundColor: 'hsl(var(--muted))' }}>
        <div className="container-luxury">
          <Tabs defaultValue="description" className="mx-auto max-w-4xl">
            <TabsList className="flex w-full justify-center">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="size">Size Guide</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-8">
              <div className="rounded-xl bg-white p-8">
                <h3 className="font-display text-2xl font-semibold">About this piece</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{product.description}</p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Every ThreadCraft piece is crafted with intention — from the fabric we source to the seams we sew.
                  This garment is no exception. It is designed to be worn, treasured, and to last for years, not seasons.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full border border-border px-3 py-1.5 text-xs">Fabric: {product.fabric}</span>
                  <span className="rounded-full border border-border px-3 py-1.5 text-xs">Care: {product.care}</span>
                  {product.collection && (
                    <span className="rounded-full border border-border px-3 py-1.5 text-xs capitalize">Collection: {product.collection.replace('-', ' ')}</span>
                  )}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="details" className="mt-8">
              <div className="rounded-xl bg-white p-8">
                <h3 className="font-display text-2xl font-semibold">Product Details</h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {product.details.map((d, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="size" className="mt-8">
              <div className="rounded-xl bg-white p-8">
                <h3 className="font-display text-2xl font-semibold">Size Guide</h3>
                <p className="mt-4 text-sm text-muted-foreground">Find your perfect fit. Measurements are in inches.</p>
                <div className="mt-6 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="py-3 text-left font-semibold">Size</th>
                        <th className="py-3 text-left font-semibold">Chest</th>
                        <th className="py-3 text-left font-semibold">Waist</th>
                        <th className="py-3 text-left font-semibold">Hip</th>
                        <th className="py-3 text-left font-semibold">Length</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.sizes.map((size) => {
                        const base = parseInt(size) || 32;
                        return (
                          <tr key={size} className="border-b border-border">
                            <td className="py-3 font-medium">{size}</td>
                            <td className="py-3 text-muted-foreground">{base + 6}&quot;</td>
                            <td className="py-3 text-muted-foreground">{base + 2}&quot;</td>
                            <td className="py-3 text-muted-foreground">{base + 8}&quot;</td>
                            <td className="py-3 text-muted-foreground">{base + 18}&quot;</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">Between sizes? Size up for a relaxed fit, size down for a tailored fit. Need help? Book a free styling session.</p>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="mt-8">
              <div className="rounded-xl bg-white p-8">
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="font-display text-5xl font-bold">{product.rating.toFixed(1)}</p>
                    <div className="mt-2 flex justify-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={cn('h-4 w-4', i < Math.round(product.rating) ? 'fill-accent text-accent' : 'text-border')} />
                      ))}
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{product.reviewCount} reviews</p>
                  </div>
                  <div className="flex-1">
                    {[5, 4, 3, 2, 1].map((stars) => {
                      const pct = stars === 5 ? 85 : stars === 4 ? 10 : stars === 3 ? 3 : stars === 2 ? 1 : 1;
                      return (
                        <div key={stars} className="flex items-center gap-3 py-1">
                          <span className="w-12 text-sm text-muted-foreground">{stars} star</span>
                          <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                            <div className="h-full rounded-full bg-accent" style={{ width: `${pct}%` }} />
                          </div>
                          <span className="w-10 text-right text-sm text-muted-foreground">{pct}%</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="mt-8 flex flex-col gap-6">
                  {[
                    { name: 'Priya S.', rating: 5, date: '2026-07-20', text: 'Absolutely love this piece. The fabric quality is exceptional and the fit is perfect. Worth every rupee.' },
                    { name: 'Arjun M.', rating: 5, date: '2026-07-15', text: 'Exceeded my expectations. The attention to detail is incredible. Will definitely buy from ThreadCraft again.' },
                    { name: 'Lakshmi V.', rating: 4, date: '2026-07-10', text: 'Beautiful piece and great quality. Sizing runs slightly large, so consider sizing down if between sizes.' },
                  ].map((review, i) => (
                    <div key={i} className="border-b border-border pb-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-sm font-semibold text-accent">
                            {review.name.charAt(0)}
                          </div>
                          <div>
                            <p className="text-sm font-semibold">{review.name}</p>
                            <div className="flex gap-1">
                              {Array.from({ length: 5 }).map((_, j) => (
                                <Star key={j} className={cn('h-3 w-3', j < review.rating ? 'fill-accent text-accent' : 'text-border')} />
                              ))}
                            </div>
                          </div>
                        </div>
                        <span className="text-xs text-muted-foreground">{review.date}</span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{review.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Parallax Lifestyle Banner */}
      <ParallaxBanner
        src={product.images[2] || product.images[0]}
        alt={`${product.name} styled in context`}
        label="Styled in Context"
        title="Wear It Your Way"
        subtitle="See how this piece comes to life — styled, shot, and ready for your wardrobe."
        height="tall"
        overlay="dark"
      />

      {/* Frequently Bought Together */}
      <section className="py-20 lg:py-28">
        <div className="container-luxury">
          <SectionHeading
            label="Complete the Look"
            title="Frequently Bought Together"
            description="Pieces that pair perfectly with this one."
          />
          <div className="mt-12 flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-center">
            <div className="flex flex-col items-center gap-4">
              <div className="relative aspect-[3/4] w-48 overflow-hidden rounded-lg">
                <Image src={product.images[0]} alt={product.name} fill sizes="200px" className="object-cover" />
              </div>
              <p className="text-sm font-medium">{product.name}</p>
              <p className="text-sm font-semibold">₹{product.price.toLocaleString('en-IN')}</p>
            </div>
            {frequentlyBought.map((p) => (
              <div key={p.id} className="flex flex-col items-center gap-4">
                <div className="relative aspect-[3/4] w-48 overflow-hidden rounded-lg">
                  <Image src={p.images[0]} alt={p.name} fill sizes="200px" className="object-cover" />
                </div>
                <p className="text-sm font-medium">{p.name}</p>
                <p className="text-sm font-semibold">₹{p.price.toLocaleString('en-IN')}</p>
              </div>
            ))}
            <div className="flex flex-col gap-3 lg:pt-20">
              <p className="text-sm text-muted-foreground">Total Price:</p>
              <p className="font-display text-2xl font-bold">
                ₹{(product.price + frequentlyBought.reduce((sum, p) => sum + p.price, 0)).toLocaleString('en-IN')}
              </p>
              <Button className="bg-accent text-white hover:bg-accent/90">Add All to Cart</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: 'hsl(var(--muted))' }}>
        <div className="container-luxury">
          <SectionHeading
            label="You May Also Like"
            title="Related Products"
            description="More pieces from the same collection — curated for you."
          />
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4"
          >
            {related.map((p) => (
              <motion.div key={p.id} variants={itemFadeUp}>
                <ProductCard product={p} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Styling Tips */}
      <section className="py-20 lg:py-28">
        <div className="container-luxury">
          <div className="grid gap-12 lg:grid-cols-2">
            <SectionHeading
              label="How to Wear"
              title="Styling Tips"
              description="Three ways to make this piece your own — from desk to dinner to weekend."
              align="left"
            />
            <div className="flex flex-col gap-4">
              {[
                { title: 'The Everyday', desc: 'Pair with tailored trousers and sneakers for an effortless look that works from morning to evening.' },
                { title: 'The Statement', desc: 'Layer with a leather jacket and statement accessories for a night out that turns heads.' },
                { title: 'The Weekend', desc: 'Keep it relaxed — style with denim and boots for a casual yet considered weekend look.' },
              ].map((tip, i) => (
                <div key={i} className="flex gap-4 rounded-xl border border-border p-5">
                  <span className="font-display text-2xl font-bold text-accent/30">0{i + 1}</span>
                  <div>
                    <h3 className="text-base font-semibold">{tip.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{tip.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
