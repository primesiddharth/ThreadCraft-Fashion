import { CategoryView } from './CategoryView';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

const validCategories = ['men', 'women', 'kids', 'accessories', 'footwear', 'bags', 'watches'];

export function generateStaticParams() {
  return validCategories.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> {
  if (!validCategories.includes(params.category)) return {};
  const title = `${params.category.charAt(0).toUpperCase() + params.category.slice(1)} — Shop ThreadCraft Fashion`;
  return {
    title,
    description: `Shop premium ${params.category} fashion at ThreadCraft Fashion in Chennai.`,
    alternates: { canonical: `https://threadcraftfashion.com/shop/${params.category}` },
  };
}

export default function ShopCategoryPage({ params }: { params: { category: string } }) {
  if (!validCategories.includes(params.category)) notFound();
  return <CategoryView params={params} />;
}
