import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog — Fashion Tips, Trends & Styling Guides',
  description:
    'Styling guides, trend reports, and stories from behind the seams at ThreadCraft Fashion.',
  alternates: { canonical: 'https://threadcraftfashion.com/blog' },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
