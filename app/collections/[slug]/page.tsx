import { COLLECTIONS, getCollectionBySlug } from '@/data/collections';
import { CollectionView } from './CollectionView';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return COLLECTIONS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const collection = getCollectionBySlug(params.slug);
  if (!collection) return {};
  return {
    title: `${collection.name} — ${collection.season}`,
    description: collection.description,
    alternates: { canonical: `https://threadcraftfashion.com/collections/${collection.slug}` },
    openGraph: {
      title: collection.name,
      description: collection.description,
      url: `https://threadcraftfashion.com/collections/${collection.slug}`,
      images: [{ url: collection.heroImage, alt: collection.name }],
    },
  };
}

export default function CollectionDetailPage({ params }: { params: { slug: string } }) {
  const collection = getCollectionBySlug(params.slug);
  if (!collection) notFound();
  return <CollectionView params={params} />;
}
