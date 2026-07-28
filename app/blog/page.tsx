'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, ArrowRight, Calendar, Clock } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ParallaxBanner } from '@/components/shared/ParallaxBanner';
import { Newsletter } from '@/components/shared/Newsletter';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { Input } from '@/components/ui/input';
import { containerStagger, itemFadeUp, fadeUp, viewportOnce } from '@/lib/animations';
import { BLOG_POSTS } from '@/data/blog';
import { cn } from '@/lib/utils';

const PX = 'https://images.pexels.com/photos';

const categories = ['All', 'Fashion Tips', 'Styling Guide', 'Trends'];

export default function BlogPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = useMemo(() => {
    let result = BLOG_POSTS;
    if (activeCategory !== 'All') {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (search) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(search.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))
      );
    }
    return result;
  }, [search, activeCategory]);

  const featured = BLOG_POSTS[0];

  return (
    <>
      <section className="pt-24 lg:pt-28">
        <ParallaxBanner
          src={`${PX}/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1920`}
          alt="ThreadCraft Blog"
          label="The Journal"
          title="Fashion Blog"
          subtitle="Styling guides, trend reports, and stories from behind the seams. Read, learn, and get inspired."
          height="tall"
          overlay="dark"
        />
      </section>

      <div className="container-luxury pt-8">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} />
      </div>

      {/* Featured Post */}
      <section className="py-20 lg:py-28">
        <div className="container-luxury">
          <Link href={`/blog/${featured.slug}`} className="group grid gap-8 lg:grid-cols-2 lg:items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="relative aspect-[16/10] overflow-hidden rounded-xl">
              <Image src={featured.cover} alt={featured.title} fill sizes="50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Featured · {featured.category}</span>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight transition-colors group-hover:text-accent sm:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{featured.excerpt}</p>
              <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                <span>{featured.author}</span>
                <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {featured.date}</span>
                <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {featured.readTime}</span>
              </div>
              <span className="mt-4 flex items-center gap-1 text-sm font-medium text-accent">
                Read Article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* Search & Categories */}
      <section className="pb-8">
        <div className="container-luxury">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm font-medium transition-all',
                    activeCategory === cat
                      ? 'bg-primary text-primary-foreground'
                      : 'border border-border text-muted-foreground hover:border-accent hover:text-accent'
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-20 lg:pb-28">
        <div className="container-luxury">
          <motion.div
            key={activeCategory + search}
            variants={containerStagger}
            initial="hidden"
            animate="visible"
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((post) => (
              <motion.article key={post.slug} variants={itemFadeUp}>
                <Link href={`/blog/${post.slug}`} className="group flex flex-col gap-4">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                    <Image src={post.cover} alt={post.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">{post.category}</span>
                    <h3 className="mt-2 font-display text-xl font-semibold leading-snug transition-colors group-hover:text-accent">{post.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                    <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{post.author}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-lg font-medium">No articles found</p>
              <p className="mt-2 text-sm text-muted-foreground">Try a different search or category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Parallax Banner */}
      <ParallaxBanner
        src={`${PX}/261326/pexels-photo-261326.jpeg?auto=compress&cs=tinysrgb&w=1920`}
        alt="Editorial fashion"
        label="Read More"
        title="Stories Worth Wearing"
        subtitle="Every piece has a story. Every story is worth reading."
        height="medium"
        overlay="medium"
      />

      <Newsletter />
    </>
  );
}
