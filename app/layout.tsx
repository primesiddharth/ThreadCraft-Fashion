import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { LenisProvider } from '@/components/shared/LenisProvider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SiteHeader } from '@/components/layout/SiteHeader';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://threadcraftfashion.com'),
  title: {
    default: 'ThreadCraft Fashion — Style That Defines You',
    template: '%s | ThreadCraft Fashion',
  },
  description:
    'ThreadCraft Fashion is a premium clothing store in Chennai offering men, women, kids, accessories, footwear, and curated seasonal collections. Style That Defines You.',
  keywords: [
    'ThreadCraft Fashion',
    'premium clothing store',
    'Chennai fashion',
    'menswear',
    'womenswear',
    'kids fashion',
    'accessories',
    'seasonal collections',
    'ethnic wear',
    'party wear',
    'formal wear',
    'streetwear',
  ],
  authors: [{ name: 'ThreadCraft Fashion' }],
  creator: 'ThreadCraft Fashion',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://threadcraftfashion.com',
    siteName: 'ThreadCraft Fashion',
    title: 'ThreadCraft Fashion — Style That Defines You',
    description:
      'Premium clothing store in Chennai offering men, women, kids, accessories, footwear, and curated seasonal collections.',
    images: [
      {
        url: 'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1200',
        width: 1200,
        height: 630,
        alt: 'ThreadCraft Fashion storefront',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ThreadCraft Fashion — Style That Defines You',
    description:
      'Premium clothing store in Chennai offering men, women, kids, accessories, footwear, and curated seasonal collections.',
    images: [
      'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ClothingStore',
  name: 'ThreadCraft Fashion',
  description:
    'Premium clothing store in Chennai offering men, women, kids, accessories, footwear, and curated seasonal collections.',
  image:
    'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1200',
  url: 'https://threadcraftfashion.com',
  telephone: '+91 90112 34568',
  email: 'info@threadcraftfashion.com',
  priceRange: '₹₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '88 Fashion Street, T. Nagar',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    postalCode: '600017',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 13.0418,
    longitude: 80.2376,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '10:00',
    closes: '21:00',
  },
  sameAs: [
    'https://instagram.com/threadcraftfashion',
    'https://facebook.com/threadcraftfashion',
    'https://twitter.com/threadcraftfashion',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <LenisProvider>
          <SiteHeader />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
