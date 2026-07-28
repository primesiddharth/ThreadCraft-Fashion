import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lookbook — Editorial Fashion Photography',
  description:
    'A visual journey through ThreadCraft Fashion latest edits — styled, shot, and curated to inspire your next look.',
  alternates: { canonical: 'https://threadcraftfashion.com/lookbook' },
};

export default function LookbookLayout({ children }: { children: React.ReactNode }) {
  return children;
}
