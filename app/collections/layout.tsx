import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Collections — Summer, Winter, Festive & More',
  description:
    'Explore eight curated collections at ThreadCraft Fashion — Summer, Winter, Festive, Wedding, Office Wear, Casual, Luxury, and Streetwear.',
  alternates: { canonical: 'https://threadcraftfashion.com/collections' },
  openGraph: {
    title: 'Collections — Summer, Winter, Festive & More',
    description:
      'Explore eight curated collections at ThreadCraft Fashion.',
    url: 'https://threadcraftfashion.com/collections',
  },
};

export default function CollectionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
