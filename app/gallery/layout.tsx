import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery — 100+ Fashion Photographs',
  description:
    'Explore over 100 fashion photographs — menswear, womenswear, kidswear, accessories, runway, lifestyle, and editorial.',
  alternates: { canonical: 'https://threadcraftfashion.com/gallery' },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
