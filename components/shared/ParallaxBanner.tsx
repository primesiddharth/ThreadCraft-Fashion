'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxBannerProps {
  src: string;
  alt: string;
  label?: string;
  title?: string;
  subtitle?: string;
  height?: 'screen' | 'tall' | 'medium';
  overlay?: 'light' | 'medium' | 'dark' | 'none';
  align?: 'left' | 'center' | 'right';
}

const heightMap = {
  screen: 'h-[100vh] min-h-[600px]',
  tall: 'h-[80vh] min-h-[500px]',
  medium: 'h-[60vh] min-h-[400px]',
};

const overlayMap = {
  light: 'bg-gradient-to-b from-black/20 via-black/10 to-black/30',
  medium: 'bg-gradient-to-b from-black/40 via-black/30 to-black/50',
  dark: 'bg-gradient-to-b from-black/60 via-black/50 to-black/70',
  none: '',
};

const alignMap = {
  left: 'items-start text-left',
  center: 'items-center text-center',
  right: 'items-end text-right',
};

export function ParallaxBanner({
  src,
  alt,
  label,
  title,
  subtitle,
  height = 'tall',
  overlay = 'medium',
  align = 'center',
}: ParallaxBannerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.05, 1.15]);

  return (
    <section
      ref={ref}
      className={`relative ${heightMap[height]} w-full overflow-hidden`}
      aria-label={title || alt}
    >
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={false}
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className={`absolute inset-0 ${overlayMap[overlay]}`} />
      {(label || title || subtitle) && (
        <div className="container-luxury relative z-10 flex h-full flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className={`flex flex-col gap-4 ${alignMap[align]}`}
          >
            {label && (
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/80">
                {label}
              </span>
            )}
            {title && (
              <h2 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="max-w-xl text-base text-white/90 sm:text-lg">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>
      )}
    </section>
  );
}
