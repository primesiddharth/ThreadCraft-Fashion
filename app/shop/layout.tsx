import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shop — Premium Fashion for Men, Women & Kids',
  description:
    'Shop premium clothing at ThreadCraft Fashion. Men, women, kids, accessories, footwear, bags, and watches — crafted with intention, curated with care.',
  alternates: { canonical: 'https://threadcraftfashion.com/shop' },
  openGraph: {
    title: 'Shop — Premium Fashion for Men, Women & Kids',
    description:
      'Shop premium clothing at ThreadCraft Fashion — men, women, kids, accessories, footwear, bags, and watches.',
    url: 'https://threadcraftfashion.com/shop',
  },
};

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return children;
}
