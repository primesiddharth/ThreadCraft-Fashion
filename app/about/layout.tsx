import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About ThreadCraft Fashion — Our Story',
  description:
    'From a single boutique in T. Nagar to a name known across South India — discover the story, values, and craftsmanship behind ThreadCraft Fashion.',
  alternates: { canonical: 'https://threadcraftfashion.com/about' },
  openGraph: {
    title: 'About ThreadCraft Fashion — Our Story',
    description:
      'Discover the story, values, and craftsmanship behind ThreadCraft Fashion — a premium clothing store in Chennai.',
    url: 'https://threadcraftfashion.com/about',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
