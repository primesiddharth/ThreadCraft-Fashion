'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, ArrowRight, Tag } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ParallaxBanner } from '@/components/shared/ParallaxBanner';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { CTA } from '@/components/shared/CTA';
import { Newsletter } from '@/components/shared/Newsletter';
import { fadeUp, fadeLeft, containerStagger, itemFadeUp, viewportOnce } from '@/lib/animations';
import { BLOG_POSTS, getBlogPostBySlug } from '@/data/blog';

const PX = 'https://images.pexels.com/photos';

export function BlogPostView({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      {/* Hero with Parallax */}
      <section className="pt-24 lg:pt-28">
        <ParallaxBanner
          src={post.cover}
          alt={post.title}
          label={post.category}
          height="tall"
          overlay="dark"
        />
      </section>

      <div className="container-luxury pt-8">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: post.title }]} />
      </div>

      {/* Article Header */}
      <section className="py-12 lg:py-16">
        <div className="container-luxury">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">{post.category}</span>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">{post.title}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>
            <div className="mt-6 flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{post.author}</span>
              <span>·</span>
              <span>{post.authorRole}</span>
              <span>·</span>
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {post.date}</span>
              <span>·</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {post.readTime}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20 lg:pb-28">
        <div className="container-luxury">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mx-auto max-w-2xl"
          >
            <div className="flex flex-col gap-6">
              {post.content.map((para, i) => (
                <p key={i} className="text-base leading-[1.8] text-foreground/90">
                  {para}
                </p>
              ))}
            </div>

            {/* Tags */}
            <div className="mt-10 flex flex-wrap gap-2 border-t border-border pt-8">
              {post.tags.map((tag) => (
                <span key={tag} className="flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground">
                  <Tag className="h-3 w-3" /> {tag}
                </span>
              ))}
            </div>

            {/* Author Bio */}
            <div className="mt-8 flex items-center gap-4 rounded-xl border border-border p-6">
              <Image src={`${PX}/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100`} alt={post.author} width={56} height={56} className="rounded-full object-cover" />
              <div>
                <p className="text-base font-semibold">{post.author}</p>
                <p className="text-sm text-muted-foreground">{post.authorRole} at ThreadCraft Fashion</p>
              </div>
            </div>

            {/* Back Link */}
            <Link href="/blog" className="mt-8 flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all">
              <ArrowLeft className="h-4 w-4" /> Back to All Articles
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Parallax Divider */}
      <ParallaxBanner
        src={`${PX}/996983/pexels-photo-996983.jpeg?auto=compress&cs=tinysrgb&w=1920`}
        alt="Editorial divider"
        label="Keep Reading"
        title="More From the Journal"
        subtitle="Explore more styling guides, trend reports, and stories from behind the seams."
        height="medium"
        overlay="medium"
      />

      {/* Related Posts */}
      <section className="py-20 lg:py-28">
        <div className="container-luxury">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">Related Articles</h2>
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-8 grid gap-6 md:grid-cols-3"
          >
            {related.map((rp) => (
              <motion.article key={rp.slug} variants={itemFadeUp}>
                <Link href={`/blog/${rp.slug}`} className="group flex flex-col gap-3">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                    <Image src={rp.cover} alt={rp.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">{rp.category}</span>
                  <h3 className="font-display text-lg font-semibold leading-snug transition-colors group-hover:text-accent">{rp.title}</h3>
                  <span className="text-xs text-muted-foreground">{rp.readTime}</span>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <Newsletter />
      <CTA />
    </>
  );
}
