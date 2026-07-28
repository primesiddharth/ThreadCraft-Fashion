import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact ThreadCraft Fashion',
  description:
    'Visit our Chennai boutique, call us at +91 90112 34568, or send a message. We are here seven days a week, 10 AM to 9 PM.',
  alternates: { canonical: 'https://threadcraftfashion.com/contact' },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
