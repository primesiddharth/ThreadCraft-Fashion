import type { MetadataRoute } from 'next';
import { PRODUCTS } from '@/data/products';
import { COLLECTIONS } from '@/data/collections';
import { BLOG_POSTS } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://threadcraftfashion.com';
  const lastModified = new Date();

  const staticRoutes = [
    { url: baseUrl, priority: 1.0, changeFrequency: 'daily' as const },
    { url: `${baseUrl}/shop`, priority: 0.9, changeFrequency: 'daily' as const },
    { url: `${baseUrl}/collections`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/lookbook`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/gallery`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/blog`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/about`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/testimonials`, priority: 0.5, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/faqs`, priority: 0.5, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/contact`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/privacy-policy`, priority: 0.3, changeFrequency: 'yearly' as const },
    { url: `${baseUrl}/terms`, priority: 0.3, changeFrequency: 'yearly' as const },
    { url: `${baseUrl}/shipping-policy`, priority: 0.3, changeFrequency: 'yearly' as const },
    { url: `${baseUrl}/return-policy`, priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  const shopRoutes = ['men', 'women', 'kids', 'accessories', 'footwear', 'bags', 'watches'].map((cat) => ({
    url: `${baseUrl}/shop/${cat}`,
    priority: 0.8,
    changeFrequency: 'weekly' as const,
  }));

  const productRoutes = PRODUCTS.map((p) => ({
    url: `${baseUrl}/product/${p.slug}`,
    priority: 0.7,
    changeFrequency: 'weekly' as const,
  }));

  const collectionRoutes = COLLECTIONS.map((c) => ({
    url: `${baseUrl}/collections/${c.slug}`,
    priority: 0.7,
    changeFrequency: 'weekly' as const,
  }));

  const blogRoutes = BLOG_POSTS.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    priority: 0.6,
    changeFrequency: 'monthly' as const,
  }));

  return [...staticRoutes, ...shopRoutes, ...productRoutes, ...collectionRoutes, ...blogRoutes].map(
    (route) => ({
      url: route.url,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })
  );
}
