import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQs — Frequently Asked Questions',
  description:
    'Everything you need to know about shopping, shipping, returns, and more at ThreadCraft Fashion.',
  alternates: { canonical: 'https://threadcraftfashion.com/faqs' },
};

export default function FAQsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
