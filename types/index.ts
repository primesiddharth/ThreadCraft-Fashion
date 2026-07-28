export type ProductCategory =
  | 'men'
  | 'women'
  | 'kids'
  | 'accessories'
  | 'footwear'
  | 'bags'
  | 'watches';

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  badge?: string;
  colors: { name: string; hex: string }[];
  sizes: string[];
  images: string[];
  description: string;
  details: string[];
  fabric: string;
  care: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  isTrending?: boolean;
  collection?: string;
}

export interface Collection {
  slug: string;
  name: string;
  season: string;
  description: string;
  longDescription: string;
  heroImage: string;
  bannerImage: string;
  highlights: string[];
  pieces: number;
  startingPrice: number;
  products: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  cover: string;
  tags: string[];
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  width: number;
  height: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  quote: string;
  avatar: string;
  product: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
