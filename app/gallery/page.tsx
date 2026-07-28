'use client';

import { useState, useMemo, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ParallaxBanner } from '@/components/shared/ParallaxBanner';
import { CTA } from '@/components/shared/CTA';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { GALLERY_IMAGES, GALLERY_CATEGORIES } from '@/data/gallery';
import { containerStagger, itemFadeUp, fadeUp, viewportOnce } from '@/lib/animations';
import { cn } from '@/lib/utils';

const PX = 'https://images.pexels.com/photos';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = useMemo(() => {
    if (activeCategory === 'All') return GALLERY_IMAGES;
    return GALLERY_IMAGES.filter((img) => img.category.toLowerCase() === activeCategory.toLowerCase());
  }, [activeCategory]);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? prev : (prev + 1) % filteredImages.length));
  }, [filteredImages.length]);
  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? prev : (prev - 1 + filteredImages.length) % filteredImages.length));
  }, [filteredImages.length]);

  return (
    <>
      <section className="pt-24 lg:pt-28">
        <ParallaxBanner
          src={`${PX}/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1920`}
          alt="ThreadCraft Gallery"
          label="Visual Archive"
          title="The Gallery"
          subtitle="Over 100 fashion photographs — menswear, womenswear, kidswear, accessories, runway, lifestyle, and editorial. Explore the world of ThreadCraft in pictures."
          height="tall"
          overlay="dark"
        />
      </section>

      <div className="container-luxury pt-8">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Gallery' }]} />
      </div>

      {/* Filter Bar */}
      <section className="py-12 lg:py-16">
        <div className="container-luxury">
          <SectionHeading
            label="Explore"
            title="Fashion Photography"
            description="Filter by category to explore our visual archive."
          />
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-8 flex flex-wrap justify-center gap-2"
          >
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'rounded-full px-5 py-2 text-sm font-medium transition-all',
                  activeCategory === cat
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-border text-muted-foreground hover:border-accent hover:text-accent'
                )}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="pb-20 lg:pb-28">
        <div className="container-luxury">
          <motion.div
            key={activeCategory}
            variants={containerStagger}
            initial="hidden"
            animate="visible"
            className="columns-2 gap-4 sm:columns-3 lg:columns-4"
          >
            {filteredImages.map((img, i) => (
              <motion.button
                key={img.id}
                variants={itemFadeUp}
                onClick={() => setLightboxIndex(i)}
                className="group relative mb-4 block w-full overflow-hidden rounded-lg"
              >
                <div className="relative aspect-[3/4]" style={{ aspectRatio: `${img.width}/${img.height}` }}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/30 group-hover:opacity-100">
                  <ZoomIn className="h-6 w-6 text-white" />
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Parallax Divider */}
      <ParallaxBanner
        src={`${PX}/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1920`}
        alt="Lifestyle fashion"
        label="Lifestyle"
        title="More Than Fashion"
        subtitle="It is a way of seeing — fabric, light, and movement in conversation."
        height="medium"
        overlay="medium"
      />

      {/* Store Gallery Section */}
      <section className="py-20 lg:py-28">
        <div className="container-luxury">
          <SectionHeading
            label="The Boutique"
            title="Inside the Store"
            description="A glimpse of the ThreadCraft experience — where every rack, every shelf, and every fitting room is designed with care."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              `${PX}/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=500`,
              `${PX}/996983/pexels-photo-996983.jpeg?auto=compress&cs=tinysrgb&w=500`,
              `${PX}/261326/pexels-photo-261326.jpeg?auto=compress&cs=tinysrgb&w=500`,
              `${PX}/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=500`,
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
                <Image src={src} alt={`Store ${i + 1}`} fill sizes="(max-width: 640px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            <button
              aria-label="Close"
              onClick={closeLightbox}
              className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </button>
            <button
              aria-label="Previous"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative h-[80vh] w-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].alt}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </motion.div>
            <button
              aria-label="Next"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white/80">
              <p className="text-sm">{filteredImages[lightboxIndex].alt}</p>
              <p className="text-xs text-white/50">{lightboxIndex + 1} / {filteredImages.length}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
