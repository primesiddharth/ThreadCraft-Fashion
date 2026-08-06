'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ParallaxBanner } from '@/components/shared/ParallaxBanner';
import { CTA } from '@/components/shared/CTA';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { fadeUp, containerStagger, itemFadeUp, viewportOnce } from '@/lib/animations';

const PX = 'https://images.pexels.com/photos';

const editorialSpreads = [
  { src: 'https://images.pexels.com/photos/35399679/pexels-photo-35399679.jpeg', alt: 'Ivory silk editorial', title: 'Ivory Edit', desc: 'Silk blouses and fluid silhouettes for the modern woman.', span: 'lg:col-span-2 lg:row-span-2' },
  { src: `${PX}/769733/pexels-photo-769733.jpeg?auto=compress&cs=tinysrgb&w=600`, alt: 'Tailoring editorial', title: 'Boardroom', desc: 'Sharp tailoring for the modern executive.' },
  { src: 'https://images.pexels.com/photos/27396752/pexels-photo-27396752.jpeg', alt: 'Streetwear editorial', title: 'Street Drop', desc: 'Heavyweight fabrics and lived-in washes.' },
  { src: `${PX}/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=600`, alt: 'Outerwear editorial', title: 'Winter Layer', desc: 'Wool, leather, and cashmere for the cold.' },
  { src: `${PX}/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=600`, alt: 'Saree editorial', title: 'Heritage', desc: 'Kanchipuram silk and pure zari — heirloom pieces.' },
  { src: `${PX}/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=800`, alt: 'Accessories editorial', title: 'Crafted', desc: 'Full-grain leather and Swiss-inspired watches.', span: 'lg:col-span-2' },
  { src: `${PX}/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=600`, alt: 'Evening editorial', title: 'Evening Light', desc: 'Gowns that shimmer with every movement.' },
  { src: `${PX}/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600`, alt: 'Denim editorial', title: 'Selvedge', desc: 'Japanese denim, woven on vintage looms.' },
  { src: `${PX}/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=600`, alt: 'Kids editorial', title: 'Little Style', desc: 'Organic cotton for the smallest members of the family.' },
  { src: `${PX}/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=800`, alt: 'Coat editorial', title: 'The Wrap', desc: 'Oversized wool coats with a relaxed drape.', span: 'lg:col-span-2' },
  { src: 'https://images.pexels.com/photos/11215081/pexels-photo-11215081.jpeg', alt: 'T-Shirt editorial', title: 'Casual Vibes', desc: 'Comfortable and stylish for everyday wear.' },
];

export default function LookbookPage() {
  return (
    <>
      <section className="pt-24 lg:pt-28">
        <ParallaxBanner
          src={`${PX}/261326/pexels-photo-261326.jpeg?auto=compress&cs=tinysrgb&w=1920`}
          alt="ThreadCraft Lookbook"
          label="Editorial Series"
          title="The Lookbook"
          subtitle="A visual journey through our latest edits — styled, shot, and curated to inspire your next look. Every image tells a story of fabric, form, and feeling."
          height="screen"
          overlay="dark"
        />
      </section>

      <div className="container-luxury pt-8">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Lookbook' }]} />
      </div>

      {/* Editorial Intro */}
      <section className="py-20 lg:py-28">
        <div className="container-luxury">
          <SectionHeading
            label="The Series"
            title="Wear the Story"
            description="Each spread is a chapter — a moment captured in fabric and light. Explore the pieces that define our seasons, shot on location and styled with intention."
          />
        </div>
      </section>

      {/* Masonry Editorial Grid */}
      <section className="pb-20 lg:pb-28">
        <div className="container-luxury">
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid auto-rows-[300px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {editorialSpreads.map((item, i) => (
              <motion.div
                key={i}
                variants={itemFadeUp}
                className={`group relative overflow-hidden rounded-lg ${item.span || ''}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-5 opacity-90 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-white/80">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Parallax Divider */}
      <ParallaxBanner
        src={`${PX}/996983/pexels-photo-996983.jpeg?auto=compress&cs=tinysrgb&w=1920`}
        alt="Runway editorial"
        label="Behind the Lens"
        title="The Making of a Look"
        subtitle="Every shoot begins with a conversation — about the fabric, the feeling, the story we want to tell."
        height="tall"
        overlay="dark"
      />

      {/* Behind the Scenes */}
      <section className="py-20 lg:py-28">
        <div className="container-luxury">
          <div className="grid gap-12 lg:grid-cols-2">
            <SectionHeading
              label="The Process"
              title="From Concept to Camera"
              description="How a ThreadCraft editorial comes to life — from the first sketch to the final frame."
              align="left"
            />
            <div className="flex flex-col gap-6">
              {[
                { step: '01', title: 'Concept', desc: 'We start with the collection\'s story — the fabrics, the mood, the moment it belongs to.' },
                { step: '02', title: 'Styling', desc: 'Our stylists build looks that feel real — pieces you would actually wear, not just admire.' },
                { step: '03', title: 'Location', desc: 'We shoot on location — in the city, at the beach, in the atelier — wherever the story lives.' },
                { step: '04', title: 'Direction', desc: 'Every frame is composed with intention. Light, movement, and fabric in conversation.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-5">
                  <span className="font-display text-3xl font-bold text-accent/30">{item.step}</span>
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full-width Image Break */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src={`${PX}/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1920`}
          alt="Fashion editorial full width"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="container-luxury relative z-10 flex h-full items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="max-w-xl"
          >
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              Fashion is feeling, made visible.
            </h2>
            <p className="mt-4 text-base text-white/80">
              Every piece in our lookbook is available in-store and online. Find the one that speaks to you.
            </p>
          </motion.div>
        </div>
      </section>

      <CTA />
    </>
  );
}
