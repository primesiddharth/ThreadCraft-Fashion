'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, Eye, Star } from 'lucide-react';
import { useState } from 'react';
import type { Product } from '@/types';
import { cn } from '@/lib/utils';

export function ProductCard({ product }: { product: Product }) {
  const [liked, setLiked] = useState(false);
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.article
      whileHover="visible"
      initial="hidden"
      className="group relative flex flex-col"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-muted">
        <Link href={`/product/${product.slug}`} aria-label={product.name}>
          <motion.div
            variants={{
              hidden: { scale: 1 },
              visible: { scale: 1.05, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="h-full w-full"
          >
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover"
            />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.4 } },
            }}
            className="absolute inset-0 bg-black/10"
          />
        </Link>

        {product.badge && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary shadow-sm backdrop-blur">
            {product.badge}
          </span>
        )}
        {discount > 0 && (
          <span className="absolute right-3 top-3 z-10 rounded-full bg-accent px-3 py-1 text-xs font-bold text-white shadow-sm">
            -{discount}%
          </span>
        )}

        <div className="absolute bottom-3 left-3 right-3 z-10 flex gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <Link
            href={`/product/${product.slug}`}
            className="flex h-10 flex-1 items-center justify-center gap-2 rounded-full bg-white/95 text-xs font-semibold text-primary shadow-md backdrop-blur transition-colors hover:bg-white"
          >
            <Eye className="h-4 w-4" /> Quick View
          </Link>
          <button
            onClick={() => setLiked(!liked)}
            aria-label="Add to wishlist"
            className={cn(
              'flex h-10 w-10 items-center justify-center rounded-full shadow-md backdrop-blur transition-colors',
              liked ? 'bg-accent text-white' : 'bg-white/95 text-primary hover:bg-white'
            )}
          >
            <Heart className={cn('h-4 w-4', liked && 'fill-current')} />
          </button>
        </div>
      </div>

      <div className="mt-3 flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <Star className="h-3.5 w-3.5 fill-accent text-accent" />
          <span className="text-xs font-medium text-muted-foreground">
            {product.rating.toFixed(1)} ({product.reviewCount})
          </span>
        </div>
        <Link
          href={`/product/${product.slug}`}
          className="text-sm font-medium text-foreground transition-colors hover:text-accent"
        >
          {product.name}
        </Link>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-foreground">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">
              ₹{product.originalPrice.toLocaleString('en-IN')}
            </span>
          )}
        </div>
        <div className="mt-1 flex gap-1">
          {product.colors.slice(0, 4).map((c) => (
            <span
              key={c.name}
              title={c.name}
              className="h-3.5 w-3.5 rounded-full border border-border"
              style={{ backgroundColor: c.hex }}
            />
          ))}
        </div>
      </div>
    </motion.article>
  );
}
