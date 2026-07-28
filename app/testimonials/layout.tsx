import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testimonials — Customer Reviews & Stories',
  description:
    'Real reviews from real ThreadCraft Fashion customers. From brides to executives — hear what they have to say.',
  alternates: { canonical: 'https://threadcraftfashion.com/testimonials' },
};

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
