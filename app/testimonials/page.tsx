'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Quote, Award } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ParallaxBanner } from '@/components/shared/ParallaxBanner';
import { CTA } from '@/components/shared/CTA';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { containerStagger, itemFadeUp, fadeUp, fadeLeft, fadeRight, viewportOnce } from '@/lib/animations';
import { TESTIMONIALS } from '@/data/gallery';

const PX = 'https://images.pexels.com/photos';

const stats = [
  { num: '50K+', label: 'Happy Customers' },
  { num: '4.9', label: 'Average Rating' },
  { num: '98%', label: 'Would Recommend' },
  { num: '10', label: 'Years of Trust' },
];

const influencerReviews = [
  { name: 'Divya Shankar', role: 'Fashion Blogger · Mumbai', img: `${PX}/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400`, quote: 'As someone who reviews fashion for a living, I am picky. ThreadCraft consistently delivers quality that rivals brands at twice the price.', rating: 5 },
  { name: 'Karthik Suresh', role: 'Photographer · Chennai', img: `${PX}/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400`, quote: 'Streetwear that actually fits and lasts is hard to find in India. The heavyweight hoodie is the real deal — thick, well-cut, and full of character.', rating: 5 },
  { name: 'Meera Krishnan', role: 'Teacher · Coimbatore', img: `${PX}/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400`, quote: 'I bought the Kids Sunny Day Dress for my daughter and she refuses to take it off. The organic cotton is so soft and the colors have not faded.', rating: 5 },
];

export default function TestimonialsPage() {
  return (
    <>
      <section className="pt-24 lg:pt-28">
        <ParallaxBanner
          src={`${PX}/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1920`}
          alt="ThreadCraft Testimonials"
          label="Loved By Thousands"
          title="Customer Stories"
          subtitle="Real reviews from real customers who made ThreadCraft part of their wardrobe. Their words, not ours."
          height="tall"
          overlay="dark"
        />
      </section>

      <div className="container-luxury pt-8">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Testimonials' }]} />
      </div>

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
            {stats.map((s) => (
              <motion.div key={s.label} variants={itemFadeUp} className="text-center">
                <p className="font-display text-5xl font-bold text-accent">{s.num}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: 'hsl(var(--muted))' }}>
        <div className="container-luxury">
          <SectionHeading
            label="Customer Reviews"
            title="What Our Customers Say"
            description="From brides to executives, bloggers to teachers — hear what they have to say."
          />
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {TESTIMONIALS.map((t) => (
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
                <p className="text-xs font-medium text-accent">Purchased: {t.product}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Parallax Divider */}
      <ParallaxBanner
        src={`${PX}/996983/pexels-photo-996983.jpeg?auto=compress&cs=tinysrgb&w=1920`}
        alt="Influencer reviews"
        label="Influencer Reviews"
        title="Trusted By Those Who Know"
        subtitle="Fashion bloggers, photographers, and creators who know quality when they see it."
        height="medium"
        overlay="medium"
      />

      {/* Influencer Reviews */}
      <section className="py-20 lg:py-28">
        <div className="container-luxury">
          <SectionHeading
            label="In the Spotlight"
            title="Fashion Influencer Reviews"
            description="Creators who have made ThreadCraft part of their content — and their wardrobe."
          />
          <div className="mt-12 flex flex-col gap-8">
            {influencerReviews.map((rev, i) => (
              <motion.div
                key={rev.name}
                variants={i % 2 === 0 ? fadeLeft : fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className={`flex flex-col gap-6 rounded-xl border border-border p-8 lg:flex-row lg:items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="relative aspect-square w-full max-w-[200px] overflow-hidden rounded-lg">
                  <Image src={rev.img} alt={rev.name} fill sizes="200px" className="object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className={`h-5 w-5 ${j < rev.rating ? 'fill-accent text-accent' : 'text-border'}`} />
                    ))}
                  </div>
                  <p className="mt-4 font-display text-xl font-medium leading-relaxed">&ldquo;{rev.quote}&rdquo;</p>
                  <div className="mt-4">
                    <p className="text-base font-semibold">{rev.name}</p>
                    <p className="text-sm text-muted-foreground">{rev.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Stories */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: 'hsl(var(--muted))' }}>
        <div className="container-luxury">
          <SectionHeading
            label="More Than Reviews"
            title="Brand Stories"
            description="The moments that make ThreadCraft more than a store — a part of our customers' lives."
          />
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-12 grid gap-6 md:grid-cols-2"
          >
            {[
              { title: 'The Wedding Saree', desc: 'Lakshmi came to us three months before her wedding, unsure of what she wanted. After a styling session, she left with a Kanchipuram silk saree that her grandmother called "the most beautiful she had ever seen." Today, it is waiting to be passed to her daughter.' },
              { title: 'The First Suit', desc: 'Arjun walked in for his first job interview suit. He walked out with a Midnight Blazer that has been to three promotions, two weddings, and countless boardrooms. "It still fits like it was made for me," he says.' },
              { title: 'The Birthday Gift', desc: 'Meera wanted something special for her daughter\'s fifth birthday. She chose the Kids Sunny Day Dress in buttercup yellow. "She wore it to every party for a year. It is now in a box, waiting for her little sister."' },
              { title: 'The Watch', desc: 'Vikram bought the Heritage Automatic Watch as a gift to himself on his 40th birthday. "It is the one piece I will pass to my son. Every time I check the time, I remember why I chose it."' },
            ].map((story) => (
              <motion.div key={story.title} variants={itemFadeUp} className="rounded-xl bg-white p-8 shadow-sm">
                <Award className="h-8 w-8 text-accent" />
                <h3 className="mt-4 font-display text-xl font-semibold">{story.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{story.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="py-20 lg:py-28">
        <div className="container-luxury">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="flex justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-8 w-8 fill-accent text-accent" />
              ))}
            </div>
            <h2 className="mt-4 font-display text-4xl font-bold">4.9 out of 5</h2>
            <p className="mt-2 text-base text-muted-foreground">Based on 12,000+ verified customer reviews</p>
            <div className="mt-8 flex flex-col gap-3">
              {[
                { stars: 5, pct: 92 },
                { stars: 4, pct: 6 },
                { stars: 3, pct: 1 },
                { stars: 2, pct: 0.5 },
                { stars: 1, pct: 0.5 },
              ].map((r) => (
                <div key={r.stars} className="flex items-center gap-3">
                  <span className="w-12 text-sm text-muted-foreground">{r.stars} star</span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                    <div className="h-full rounded-full bg-accent" style={{ width: `${r.pct}%` }} />
                  </div>
                  <span className="w-12 text-right text-sm text-muted-foreground">{r.pct}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTA />
    </>
  );
}
