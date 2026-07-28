'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Truck,
  ShieldCheck,
  RefreshCw,
  Headphones,
  Star,
  Quote,
  Instagram,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/shared/ProductCard';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ParallaxBanner } from '@/components/shared/ParallaxBanner';
import { CTA } from '@/components/shared/CTA';
import { Newsletter } from '@/components/shared/Newsletter';
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  containerStagger,
  itemFadeUp,
  viewportOnce,
} from '@/lib/animations';
import { PRODUCTS } from '@/data/products';
import { COLLECTIONS } from '@/data/collections';
import { TESTIMONIALS } from '@/data/gallery';
import { BLOG_POSTS } from '@/data/blog';
import { BUSINESS } from '@/constants/business';
import { HeroSection } from '@/components/home/HeroSection';

const PX = 'https://images.pexels.com/photos';

const featuredCategories = [
  { label: "Men's Collection", href: '/shop/men', image: `${PX}/769733/pexels-photo-769733.jpeg?auto=compress&cs=tinysrgb&w=800` },
  { label: "Women's Collection", href: '/shop/women', image: `${PX}/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=800` },
  { label: 'Kids Collection', href: '/shop/kids', image: `${PX}/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=800` },
  { label: 'Accessories', href: '/shop/accessories', image: `${PX}/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=800` },
];

const whyChoose = [
  { Icon: Truck, title: 'Free Shipping', desc: 'On all orders above ₹2,999 across India' },
  { Icon: RefreshCw, title: '30-Day Returns', desc: 'Easy returns and exchanges, no questions asked' },
  { Icon: ShieldCheck, title: 'Secure Payment', desc: '100% secure checkout with encrypted payments' },
  { Icon: Headphones, title: 'Personal Styling', desc: 'Complimentary styling sessions in-store and online' },
];

const instagramImages = [
  `${PX}/767972/pexels-photo-767972.jpeg?auto=compress&cs=tinysrgb&w=400`,
  `${PX}/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400`,
  `${PX}/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=400`,
  `${PX}/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=400`,
  `${PX}/1666071/pexels-photo-1666071.jpeg?auto=compress&cs=tinysrgb&w=400`,
  `${PX}/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=400`,
];

export default function HomePage() {
  const newArrivals = PRODUCTS.filter((p) => p.isNew).slice(0, 4);
  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller).slice(0, 4);
  const trending = PRODUCTS.filter((p) => p.isTrending).slice(0, 4);

  return (
    <>
      <HeroSection />

      {/* Featured Collections */}
      <section className="py-20 lg:py-28">
        <div className="container-luxury">
          <SectionHeading
            label="Curated Edits"
            title="Featured Collections"
            description="Four worlds of style, each crafted with a distinct point of view. Discover the edit that speaks to you."
          />
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {featuredCategories.map((cat) => (
              <motion.div key={cat.label} variants={itemFadeUp}>
                <Link href={cat.href} className="group relative block aspect-[3/4] overflow-hidden rounded-lg">
                  <Image
                    src={cat.image}
                    alt={cat.label}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-display text-xl font-semibold text-white">{cat.label}</h3>
                    <span className="mt-1 flex items-center gap-1 text-sm text-white/80 transition-transform group-hover:translate-x-1">
                      Discover <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: 'hsl(var(--muted))' }}>
        <div className="container-luxury">
          <div className="flex flex-col items-end justify-between gap-4 sm:flex-row">
            <SectionHeading
              label="Just In"
              title="New Arrivals"
              description="The latest pieces to join our shelves — fresh silhouettes, new fabrics, and the season's most wanted."
              align="left"
            />
            <Link
              href="/shop?filter=new"
              className="flex items-center gap-1 text-sm font-medium text-accent hover:gap-2 transition-all"
            >
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4"
          >
            {newArrivals.map((p) => (
              <motion.div key={p.id} variants={itemFadeUp}>
                <ProductCard product={p} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Parallax Banner - Lookbook Highlight */}
      <ParallaxBanner
        src={`${PX}/996983/pexels-photo-996983.jpeg?auto=compress&cs=tinysrgb&w=1920`}
        alt="Fashion lookbook editorial"
        label="The Lookbook"
        title="Wear the Story"
        subtitle="An editorial series exploring the pieces that define a season — shot on location, styled with intention."
        height="tall"
        overlay="medium"
      />

      {/* Best Sellers */}
      <section className="py-20 lg:py-28">
        <div className="container-luxury">
          <div className="flex flex-col items-end justify-between gap-4 sm:flex-row">
            <SectionHeading
              label="Customer Favorites"
              title="Best Sellers"
              description="The pieces our customers return for — tried, tested, and loved by thousands."
              align="left"
            />
            <Link
              href="/shop?filter=best"
              className="flex items-center gap-1 text-sm font-medium text-accent hover:gap-2 transition-all"
            >
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4"
          >
            {bestSellers.map((p) => (
              <motion.div key={p.id} variants={itemFadeUp}>
                <ProductCard product={p} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trending Fashion */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: 'hsl(var(--muted))' }}>
        <div className="container-luxury">
          <div className="flex flex-col items-end justify-between gap-4 sm:flex-row">
            <SectionHeading
              label="What's Hot"
              title="Trending Now"
              description="The pieces everyone is talking about — from streetwear drops to statement accessories."
              align="left"
            />
            <Link
              href="/shop?filter=trending"
              className="flex items-center gap-1 text-sm font-medium text-accent hover:gap-2 transition-all"
            >
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4"
          >
            {trending.map((p) => (
              <motion.div key={p.id} variants={itemFadeUp}>
                <ProductCard product={p} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Men's & Women's Collection Split */}
      <section className="py-20 lg:py-28">
        <div className="container-luxury">
          <div className="grid gap-4 lg:grid-cols-2">
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewportOnce}>
              <Link href="/shop/men" className="group relative block aspect-[4/5] overflow-hidden rounded-lg">
                <Image
                  src={`${PX}/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&w=900`}
                  alt="Men's collection"
                  fill
                  sizes="50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">For Him</span>
                  <h3 className="mt-2 font-display text-3xl font-semibold text-white sm:text-4xl">Men&apos;s Edit</h3>
                  <p className="mt-2 max-w-sm text-sm text-white/80">Tailored blazers, selvedge denim, and everyday essentials with intention.</p>
                  <span className="mt-4 flex items-center gap-1 text-sm font-medium text-white">
                    Shop Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
            <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewportOnce}>
              <Link href="/shop/women" className="group relative block aspect-[4/5] overflow-hidden rounded-lg">
                <Image
                  src={`${PX}/1755427/pexels-photo-1755427.jpeg?auto=compress&cs=tinysrgb&w=900`}
                  alt="Women's collection"
                  fill
                  sizes="50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">For Her</span>
                  <h3 className="mt-2 font-display text-3xl font-semibold text-white sm:text-4xl">Women&apos;s Edit</h3>
                  <p className="mt-2 max-w-sm text-sm text-white/80">Silk blouses, evening gowns, and heirloom sarees for every occasion.</p>
                  <span className="mt-4 flex items-center gap-1 text-sm font-medium text-white">
                    Shop Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Kids Collection Banner */}
      <section className="pb-20 lg:pb-28">
        <div className="container-luxury">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative overflow-hidden rounded-2xl"
          >
            <div className="grid lg:grid-cols-2">
              <div className="relative aspect-[4/3] lg:aspect-auto">
                <Image
                  src={`${PX}/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=900`}
                  alt="Kids collection"
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center gap-4 bg-accent/5 p-8 lg:p-16">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Little Style</span>
                <h3 className="font-display text-3xl font-semibold sm:text-4xl">Kids Collection</h3>
                <p className="text-base text-muted-foreground">
                  Soft organic cottons, playful prints, and comfortable fits for every adventure.
                  From sunny day dresses to dapper party suits, our kids&apos; edit is crafted with the
                  same care as our adult collections.
                </p>
                <div>
                  <Button asChild className="mt-2 bg-accent text-white hover:bg-accent/90">
                    <Link href="/shop/kids">Shop Kids <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Parallax Banner - Seasonal Highlight */}
      <ParallaxBanner
        src={`${PX}/261326/pexels-photo-261326.jpeg?auto=compress&cs=tinysrgb&w=1920`}
        alt="Seasonal editorial fashion"
        label="Seasonal Edit"
        title="The Summer Story"
        subtitle="Light linens, sun-washed hues, and resort-ready silhouettes. Discover the collection made for long days and warm nights."
        height="tall"
        overlay="dark"
      />

      {/* Seasonal Collection Showcase */}
      <section className="py-20 lg:py-28">
        <div className="container-luxury">
          <SectionHeading
            label="By Season"
            title="Seasonal Collections"
            description="Eight collections, each with its own mood, palette, and purpose. Explore the one that fits your moment."
          />
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {COLLECTIONS.slice(0, 4).map((col) => (
              <motion.div key={col.slug} variants={itemFadeUp}>
                <Link href={`/collections/${col.slug}`} className="group relative block aspect-[3/4] overflow-hidden rounded-lg">
                  <Image
                    src={col.heroImage}
                    alt={col.name}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="text-xs uppercase tracking-wider text-white/70">{col.season}</span>
                    <h3 className="mt-1 font-display text-xl font-semibold text-white">{col.name}</h3>
                    <span className="mt-1 text-xs text-white/80">{col.pieces} pieces · From ₹{col.startingPrice.toLocaleString('en-IN')}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/collections">View All Collections <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose ThreadCraft */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: 'hsl(var(--muted))' }}>
        <div className="container-luxury">
          <SectionHeading
            label="The ThreadCraft Promise"
            title="Why Shop With Us"
            description="Every detail of your experience — from browsing to unboxing — is designed with care."
          />
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {whyChoose.map((item) => (
              <motion.div
                key={item.title}
                variants={itemFadeUp}
                className="flex flex-col items-center gap-3 rounded-xl bg-white p-8 text-center shadow-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                  <item.Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Fashion Lookbook Preview */}
      <section className="py-20 lg:py-28">
        <div className="container-luxury">
          <SectionHeading
            label="Editorial"
            title="The Fashion Lookbook"
            description="A visual journey through our latest edits — styled, shot, and curated to inspire your next look."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-3">
            {[
              { src: `${PX}/767972/pexels-photo-767972.jpeg?auto=compress&cs=tinysrgb&w=600`, alt: 'Silk blouse editorial', label: 'Ivory Edit' },
              { src: `${PX}/769733/pexels-photo-769733.jpeg?auto=compress&cs=tinysrgb&w=600`, alt: 'Tailoring editorial', label: 'Boardroom' },
              { src: `${PX}/1666071/pexels-photo-1666071.jpeg?auto=compress&cs=tinysrgb&w=600`, alt: 'Streetwear editorial', label: 'Street Drop' },
              { src: `${PX}/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=600`, alt: 'Outerwear editorial', label: 'Winter Layer' },
              { src: `${PX}/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=600`, alt: 'Saree editorial', label: 'Heritage' },
              { src: `${PX}/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=600`, alt: 'Accessories editorial', label: 'Crafted' },
            ].map((img, i) => (
              <motion.div
                key={i}
                variants={itemFadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className={`group relative overflow-hidden rounded-lg ${i === 0 ? 'lg:row-span-2' : ''} ${i === 0 ? 'aspect-[3/4] lg:aspect-auto' : 'aspect-[4/5]'}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute bottom-4 left-4 translate-y-2 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="font-display text-lg font-semibold text-white">{img.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/lookbook">View Full Lookbook <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: 'hsl(var(--muted))' }}>
        <div className="container-luxury">
          <SectionHeading
            label="Loved By Thousands"
            title="Customer Reviews"
            description="Real stories from real customers who made ThreadCraft part of their wardrobe."
          />
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <motion.div
                key={t.id}
                variants={itemFadeUp}
                className="flex flex-col gap-4 rounded-xl bg-white p-8 shadow-sm"
              >
                <Quote className="h-8 w-8 text-accent/30" />
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < t.rating ? 'fill-accent text-accent' : 'text-border'}`} />
                  ))}
                </div>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3 border-t border-border pt-4">
                  <Image src={t.avatar} alt={t.name} width={40} height={40} className="rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role} · {t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/testimonials">Read More Reviews <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section className="py-20 lg:py-28">
        <div className="container-luxury">
          <SectionHeading
            label="@threadcraftfashion"
            title="Follow Our Story"
            description="Tag us in your ThreadCraft looks for a chance to be featured on our feed."
          />
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-12 grid grid-cols-3 gap-3 sm:grid-cols-6"
          >
            {instagramImages.map((src, i) => (
              <motion.a
                key={i}
                href={BUSINESS.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemFadeUp}
                className="group relative aspect-square overflow-hidden rounded-lg"
              >
                <Image
                  src={src}
                  alt="Instagram post"
                  fill
                  sizes="(max-width: 640px) 33vw, 16vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/40 group-hover:opacity-100">
                  <Instagram className="h-6 w-6 text-white" />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: 'hsl(var(--muted))' }}>
        <div className="container-luxury">
          <div className="flex flex-col items-end justify-between gap-4 sm:flex-row">
            <SectionHeading
              label="From the Journal"
              title="Fashion Blog"
              description="Styling guides, trend reports, and stories from behind the seams."
              align="left"
            />
            <Link href="/blog" className="flex items-center gap-1 text-sm font-medium text-accent hover:gap-2 transition-all">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-12 grid gap-6 md:grid-cols-3"
          >
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <motion.article key={post.slug} variants={itemFadeUp}>
                <Link href={`/blog/${post.slug}`} className="group flex flex-col gap-4">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                    <Image
                      src={post.cover}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">{post.category}</span>
                    <h3 className="mt-2 font-display text-xl font-semibold leading-snug transition-colors group-hover:text-accent">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                    <span className="mt-3 text-xs text-muted-foreground">{post.readTime} · {post.date}</span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 lg:py-28">
        <div className="container-luxury">
          <div className="grid gap-12 lg:grid-cols-2">
            <SectionHeading
              label="Good to Know"
              title="Frequently Asked Questions"
              description="Everything you need to know about shopping, shipping, and returns at ThreadCraft."
              align="left"
            />
            <div className="flex flex-col gap-3">
              {[
                { q: 'How long does delivery take?', a: '1-2 days within Chennai, 3-5 days across India.' },
                { q: 'What is your return policy?', a: '30-day easy returns on all unworn items with tags.' },
                { q: 'Do you offer personal styling?', a: 'Yes, complimentary in-store and online styling sessions.' },
                { q: 'Are your fabrics ethically sourced?', a: 'We prioritize organic cotton, handloom linen, and certified dyes.' },
              ].map((item, i) => (
                <motion.details
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  className="group rounded-lg border border-border p-5"
                >
                  <summary className="flex cursor-pointer items-center justify-between text-base font-medium">
                    {item.q}
                    <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground">{item.a}</p>
                </motion.details>
              ))}
              <Link href="/faqs" className="mt-2 flex items-center gap-1 text-sm font-medium text-accent hover:gap-2 transition-all">
                See All FAQs <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Store Location */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: 'hsl(var(--muted))' }}>
        <div className="container-luxury">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewportOnce}>
              <SectionHeading
                label="Visit Us"
                title="Our Chennai Flagship"
                description="Experience ThreadCraft in person at our T. Nagar boutique — where every piece tells a story."
                align="left"
              />
              <div className="mt-6 flex flex-col gap-3 text-sm">
                <p className="font-medium">{BUSINESS.address.line1}, {BUSINESS.address.line2}</p>
                <p className="text-muted-foreground">{BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.postalCode}</p>
                <p className="text-muted-foreground">{BUSINESS.hours}</p>
                <p className="text-accent">{BUSINESS.phone}</p>
              </div>
              <Button asChild className="mt-6">
                <Link href="/contact">Get Directions <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </motion.div>
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="relative aspect-[4/3] overflow-hidden rounded-xl"
            >
              <Image
                src={`${PX}/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=900`}
                alt="ThreadCraft boutique interior"
                fill
                sizes="50vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Newsletter />
      <CTA />
    </>
  );
}
