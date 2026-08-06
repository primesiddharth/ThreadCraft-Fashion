'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Target,
  Eye,
  Award,
  Leaf,
  Sparkles,
  Scissors,
  CheckCircle2,
  ArrowRight,
  Quote,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ParallaxBanner } from '@/components/shared/ParallaxBanner';
import { CTA } from '@/components/shared/CTA';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  containerStagger,
  itemFadeUp,
  viewportOnce,
} from '@/lib/animations';

const PX = 'https://images.pexels.com/photos';

const values = [
  { Icon: Target, title: 'Our Mission', desc: 'To make premium fashion accessible — pieces crafted with intention, priced with fairness, and designed to be worn for years.' },
  { Icon: Eye, title: 'Our Vision', desc: 'To be South India\'s most loved fashion destination, known for quality, craftsmanship, and a genuinely personal shopping experience.' },
  { Icon: Leaf, title: 'Sustainability', desc: 'Organic cottons, handloom linens, certified dyes, and plastic-free packaging. We are honest about where we are and where we are going.' },
  { Icon: Sparkles, title: 'Fashion Philosophy', desc: 'We believe in fewer, better pieces. Buy less, choose well, and wear it for years. Style is not about trends — it is about intention.' },
];

const designers = [
  { name: 'Ananya Iyer', role: 'Senior Stylist', img: `${PX}/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400` },
  { name: 'Rahul Menon', role: 'Master Tailor', img: `${PX}/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400` },
  { name: 'Priya Nair', role: 'Ethnic Wear Curator', img: `${PX}/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400` },
  { name: 'Karthik Subramaniam', role: 'Accessories Buyer', img: `${PX}/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400` },
];

const process = [
  { step: '01', title: 'Design', desc: 'Every piece begins with a sketch — inspired by our customers, our city, and the craft traditions we grew up with.' },
  { step: '02', title: 'Source', desc: 'We work directly with weavers, tanneries, and mills — no middlemen, no shortcuts. Relationships built over years.' },
  { step: '03', title: 'Craft', desc: 'Each garment is cut, sewn, and finished by skilled artisans in our Chennai atelier. Half-canvas construction, French seams, hand-rolled hems.' },
  { step: '04', title: 'Quality Check', desc: 'Every piece is inspected by hand before it reaches the floor. If it is not good enough for us, it is not good enough for you.' },
];

const awards = [
  { year: '2025', title: 'Best Premium Retailer — Chennai', org: 'Chennai Fashion Awards' },
  { year: '2024', title: 'Sustainable Fashion Initiative', org: 'South India Retail Council' },
  { year: '2024', title: 'Customer Choice Award', org: 'Fashion Retail India' },
  { year: '2023', title: 'Best Ethnic Wear Collection', org: 'Indian Fashion Council' },
];

const qualityStandards = [
  'Half-canvas construction on all tailored pieces',
  'French seams throughout our silk and linen garments',
  'Mother-of-pearl buttons — never plastic',
  'OEKO-TEX certified dyes across all collections',
  'GOTS-certified organic cotton in kids and casual wear',
  'Full-grain leather in all bags, belts, and footwear',
  'Hand-rolled hems on silk sarees and scarves',
  'Goodyear-welted construction on all leather shoes',
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <ParallaxBanner
          src={`${PX}/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1920`}
          alt="ThreadCraft Fashion atelier"
          label="Our Story"
          title="Crafted in Chennai, Worn Everywhere"
          subtitle="From a single boutique in T. Nagar to a name known across South India — our journey is woven into every piece we make."
          height="screen"
          overlay="dark"
          align="center"
        />
      </section>

      <div className="container-luxury pt-8">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
      </div>

      {/* Brand Story */}
      <section className="py-20 lg:py-28">
        <div className="container-luxury">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewportOnce} className="relative aspect-[4/5] overflow-hidden rounded-xl">
              <Image
                src={`${PX}/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=900`}
                alt="ThreadCraft boutique"
                fill
                sizes="50vw"
                className="object-cover"
              />
            </motion.div>
            <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewportOnce}>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Since 2015</span>
              <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl lg:text-5xl">A Story of Fabric, Family & Fashion</h2>
              <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  ThreadCraft Fashion began with a simple idea: that premium clothing should not require a trip to Mumbai or a luxury import. Founder Lakshmi Venkat started with a small studio in T. Nagar, Chennai — six sewing machines, two master tailors, and a commitment to quality that refused to compromise.
                </p>
                <p>
                  Ten years later, we have grown into a name known across South India — but our values have not changed. We still work directly with weavers in Kanchipuram, tanneries in Vellore, and cotton farmers in Erode. We still inspect every garment by hand. And we still believe that a well-made piece, worn for years, is the most sustainable choice you can make.
                </p>
                <p>
                  Today, our boutique on Fashion Street carries over 300 pieces across menswear, womenswear, kidswear, accessories, and footwear. But the heart of ThreadCraft remains the same: a love for fabric, a respect for craft, and a commitment to helping you find style that defines you.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: 'hsl(var(--muted))' }}>
        <div className="container-luxury">
          <SectionHeading
            label="What Drives Us"
            title="Our Values"
            description="The principles that guide every decision — from the fabric we choose to the way we package your order."
          />
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-12 grid gap-6 sm:grid-cols-2"
          >
            {values.map((v) => (
              <motion.div key={v.title} variants={itemFadeUp} className="flex gap-5 rounded-xl bg-white p-8 shadow-sm">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <v.Icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Designers */}
      <section className="py-20 lg:py-28">
        <div className="container-luxury">
          <SectionHeading
            label="The People Behind the Pieces"
            title="Meet Our Designers"
            description="The stylists, tailors, and curators who bring ThreadCraft to life — each with a distinct point of view and a shared commitment to craft."
          />
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {designers.map((d) => (
              <motion.div key={d.name} variants={itemFadeUp} className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                  <Image
                    src={d.img}
                    alt={d.name}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-display text-lg font-semibold">{d.name}</h3>
                    <p className="text-sm text-white/80">{d.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Parallax Banner - Atelier */}
      <ParallaxBanner
        src={`${PX}/261326/pexels-photo-261326.jpeg?auto=compress&cs=tinysrgb&w=1920`}
        alt="Atelier fabric detail"
        label="Inside the Atelier"
        title="Where Fabric Becomes Fashion"
        subtitle="Every cut, every seam, every button — placed by hand, checked by hand, and made to last."
        height="tall"
        overlay="dark"
      />

      {/* Manufacturing Process */}
      <section className="py-20 lg:py-28">
        <div className="container-luxury">
          <SectionHeading
            label="From Sketch to Shelf"
            title="Our Manufacturing Process"
            description="Four steps, each handled with care. No mass production, no anonymous factories — just skilled hands and honest materials."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-4">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                transition={{ delay: i * 0.1 }}
                className="relative flex flex-col gap-3"
              >
                <span className="font-display text-5xl font-bold text-accent/20">{p.step}</span>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                {i < process.length - 1 && (
                  <div className="absolute right-0 top-6 hidden h-px w-full bg-border lg:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: 'hsl(var(--muted))' }}>
        <div className="container-luxury">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewportOnce}>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Our Commitment</span>
              <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl lg:text-5xl">Sustainability</h2>
              <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  We do not use the word &ldquo;sustainable&rdquo; lightly. It is a series of concrete decisions made at every stage — from the cotton field to your wardrobe.
                </p>
                <p>
                  We prioritize GOTS-certified organic cotton, handloom linens that support artisan communities, mulesing-free wool, and OEKO-TEX certified dyes. Our packaging is plastic-free, made from recycled cardboard and compostable cornstarch.
                </p>
                <p>
                  But the most sustainable thing we do is build for longevity. A well-made garment worn for ten years has a fraction of the environmental impact of five cheap garments worn for two.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewportOnce} className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image src={`${PX}/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=500`} alt="Organic cotton" fill sizes="25vw" className="object-cover" />
              </div>
              <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-lg">
                <Image src={`${PX}/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=500`} alt="Handloom weaving" fill sizes="25vw" className="object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 lg:py-28">
        <div className="container-luxury">
          <div className="grid gap-12 lg:grid-cols-2">
            <SectionHeading
              label="No Compromises"
              title="Quality Standards"
              description="The details you might not notice — but we obsess over."
              align="left"
            />
            <motion.ul
              variants={containerStagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="flex flex-col gap-4"
            >
              {qualityStandards.map((q) => (
                <motion.li key={q} variants={itemFadeUp} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                  <span className="text-sm">{q}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: 'hsl(var(--muted))' }}>
        <div className="container-luxury">
          <SectionHeading
            label="Recognition"
            title="Awards & Accolades"
            description="We are honored to be recognized by the industry — but the real reward is your trust."
          />
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {awards.map((a) => (
              <motion.div key={a.title} variants={itemFadeUp} className="flex flex-col gap-2 rounded-xl bg-white p-6 shadow-sm">
                <Award className="h-8 w-8 text-accent" />
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{a.year}</span>
                <h3 className="text-base font-semibold leading-snug">{a.title}</h3>
                <p className="text-xs text-muted-foreground">{a.org}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Store Gallery */}
      <section className="py-20 lg:py-28">
        <div className="container-luxury">
          <SectionHeading
            label="Step Inside"
            title="Our Store Gallery"
            description="A glimpse of the ThreadCraft experience — where every rack, every shelf, and every fitting room is designed with care."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              `${PX}/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=500`,
              'https://images.pexels.com/photos/1488467/pexels-photo-1488467.jpeg',
              'https://images.pexels.com/photos/37080685/pexels-photo-37080685.jpeg',
              'https://images.pexels.com/photos/33327418/pexels-photo-33327418.png',
            ].map((src, i) => (
              <motion.div
                key={i}
                variants={itemFadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                transition={{ delay: i * 0.1 }}
                className="group relative aspect-[3/4] overflow-hidden rounded-lg"
              >
                <Image
                  src={src}
                  alt={`Store interior ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Quote */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: 'hsl(var(--muted))' }}>
        <div className="container-luxury">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center"
          >
            <Quote className="h-10 w-10 text-accent/40" />
            <p className="font-display text-2xl font-medium leading-relaxed sm:text-3xl">
              &ldquo;We do not sell clothes. We sell the feeling of wearing something made with care —
              the confidence that comes from knowing every detail is right.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <Image src={`${PX}/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100`} alt="Lakshmi Venkat" width={48} height={48} className="rounded-full object-cover" />
              <div className="text-left">
                <p className="text-sm font-semibold">Lakshmi Venkat</p>
                <p className="text-xs text-muted-foreground">Founder & Creative Director</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTA
        title="Come Visit Us in Chennai"
        description="Our T. Nagar boutique is open seven days a week. Walk in for a styling session, a fitting, or just to say hello."
        buttonText="Get Directions"
        buttonHref="/contact"
      />
    </>
  );
}
