import { PRODUCTS, getProductBySlug } from '@/data/products';
import { ProductView } from './ProductView';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  return {
    title: `${product.name} — ₹${product.price.toLocaleString('en-IN')}`,
    description: product.description,
    alternates: { canonical: `https://threadcraftfashion.com/product/${product.slug}` },
    openGraph: {
      title: product.name,
      description: product.description,
      url: `https://threadcraftfashion.com/product/${product.slug}`,
      images: product.images.map((img) => ({ url: img, alt: product.name })),
    },
  };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();
  return <ProductView params={params} />;
}
