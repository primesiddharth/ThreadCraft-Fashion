export const BUSINESS = {
  name: 'ThreadCraft Fashion',
  tagline: 'Style That Defines You.',
  type: 'Premium Clothing Store',
  address: {
    line1: '88 Fashion Street',
    line2: 'T. Nagar',
    city: 'Chennai',
    state: 'Tamil Nadu',
    postalCode: '600017',
    country: 'India',
  },
  phone: '+91 90112 34568',
  email: 'info@threadcraftfashion.com',
  hours: 'Monday – Sunday · 10:00 AM – 9:00 PM',
  hoursList: [
    { day: 'Monday', time: '10:00 AM – 9:00 PM' },
    { day: 'Tuesday', time: '10:00 AM – 9:00 PM' },
    { day: 'Wednesday', time: '10:00 AM – 9:00 PM' },
    { day: 'Thursday', time: '10:00 AM – 9:00 PM' },
    { day: 'Friday', time: '10:00 AM – 9:00 PM' },
    { day: 'Saturday', time: '10:00 AM – 9:00 PM' },
    { day: 'Sunday', time: '10:00 AM – 9:00 PM' },
  ],
  social: {
    instagram: 'https://instagram.com/threadcraftfashion',
    facebook: 'https://facebook.com/threadcraftfashion',
    twitter: 'https://twitter.com/threadcraftfashion',
    pinterest: 'https://pinterest.com/threadcraftfashion',
    youtube: 'https://youtube.com/@threadcraftfashion',
  },
  url: 'https://threadcraftfashion.com',
} as const;

export interface NavLink {
  label: string;
  href: string;
  megaMenu?: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop', megaMenu: 'shop' },
  { label: 'Collections', href: '/collections', megaMenu: 'collections' },
  { label: 'Lookbook', href: '/lookbook' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const SHOP_CATEGORIES = [
  { label: 'Men', href: '/shop/men' },
  { label: 'Women', href: '/shop/women' },
  { label: 'Kids', href: '/shop/kids' },
  { label: 'Accessories', href: '/shop/accessories' },
  { label: 'Footwear', href: '/shop/footwear' },
  { label: 'Bags', href: '/shop/bags' },
  { label: 'Watches', href: '/shop/watches' },
] as const;

export const COLLECTIONS_LIST = [
  { label: 'Summer', href: '/collections/summer' },
  { label: 'Winter', href: '/collections/winter' },
  { label: 'Festive', href: '/collections/festive' },
  { label: 'Wedding', href: '/collections/wedding' },
  { label: 'Office Wear', href: '/collections/office-wear' },
  { label: 'Casual', href: '/collections/casual' },
  { label: 'Luxury', href: '/collections/luxury' },
  { label: 'Streetwear', href: '/collections/streetwear' },
] as const;
