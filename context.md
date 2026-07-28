# ThreadCraft Fashion — Project Context

## Project Overview

ThreadCraft Fashion is a premium, production-ready, multipage fashion and clothing store website built with Next.js 15 App Router, TypeScript, Tailwind CSS, Framer Motion, Lenis Smooth Scroll, Lucide React, next/image, and next/font. The site features 18+ routes, 20 products, 8 collections, 6 blog posts, 40 gallery images, immersive parallax banners, editorial layouts, and comprehensive SEO.

## Business Information

- **Company:** ThreadCraft Fashion
- **Tagline:** Style That Defines You.
- **Type:** Premium Clothing Store
- **Address:** 88 Fashion Street, T. Nagar, Chennai, Tamil Nadu 600017, India
- **Phone:** +91 90112 34568
- **Email:** info@threadcraftfashion.com
- **Hours:** Monday – Sunday, 10:00 AM – 9:00 PM
- **URL:** https://threadcraftfashion.com

## Technology Stack

- Next.js 15 App Router (v13.5.1)
- TypeScript (Strict mode)
- Tailwind CSS 3.3
- Framer Motion (animations)
- Lenis (smooth scroll)
- Lucide React (icons)
- next/image (image optimization)
- next/font (Inter + Playfair Display)
- shadcn/ui components (Radix UI primitives)
- ESLint

## Folder Structure

```
app/
├── layout.tsx              # Root layout with fonts, Lenis, Navbar, Footer, JSON-LD
├── page.tsx                # Home page (18 sections)
├── globals.css             # Global styles + design tokens
├── not-found.tsx           # 404 page
├── sitemap.ts              # Dynamic sitemap
├── robots.ts               # Robots.txt
├── about/                  # About page + layout (metadata)
├── blog/                    # Blog index + [slug] dynamic
├── collections/            # Collections index + [slug] dynamic
├── contact/                # Contact page + layout
├── faqs/                   # FAQs page + layout
├── gallery/                # Gallery page + layout
├── lookbook/               # Lookbook page + layout
├── product/[slug]/         # Dynamic product detail
├── privacy-policy/         # Legal page
├── return-policy/          # Legal page
├── shipping-policy/        # Legal page
├── shop/                   # Shop index + [category] dynamic
├── testimonials/           # Testimonials page + layout
├── terms/                  # Legal page
components/
├── layout/
│   ├── Navbar.tsx          # Sticky navbar, mega menu, search overlay, mobile drawer
│   ├── SiteHeader.tsx      # Header wrapper
│   └── Footer.tsx          # Large premium footer
├── shared/
│   ├── ParallaxBanner.tsx  # Reusable scroll-linked parallax section
│   ├── ProductCard.tsx     # Product card with hover, wishlist, quick view
│   ├── SectionHeading.tsx  # Reusable section heading
│   ├── CTA.tsx             # Call-to-action section
│   ├── Newsletter.tsx      # Email newsletter signup
│   ├── Breadcrumb.tsx      # Breadcrumb navigation
│   ├── LegalPage.tsx       # Reusable legal page layout
│   └── LenisProvider.tsx   # Lenis smooth scroll provider
├── home/
│   └── HeroSection.tsx     # Full-screen parallax hero
├── ui/                     # shadcn/ui components (40+)
constants/
└── business.ts             # Business info, nav links, shop categories
data/
├── products.ts             # 20 products with full details
├── collections.ts          # 8 collections
├── blog.ts                 # 6 blog posts
└── gallery.ts              # 40 gallery images, 6 testimonials, 12 FAQs
hooks/
└── use-toast.ts            # Toast hook
lib/
├── animations.ts           # Framer Motion variants
└── utils.ts                # cn() utility
types/
└── index.ts                # TypeScript interfaces
```

## Routes

| Route | Type | Description |
|-------|------|-------------|
| `/` | Static | Home page with 18 sections |
| `/about` | Static | Brand story, values, designers, process |
| `/shop` | Static | Shop index with category grid |
| `/shop/[category]` | SSG | Category page with filters, sorting, grid |
| `/collections` | Static | All collections index |
| `/collections/[slug]` | SSG | Collection detail with products |
| `/lookbook` | Static | Editorial lookbook with masonry grid |
| `/gallery` | Static | 40+ images with filters and lightbox |
| `/blog` | Static | Blog index with search and categories |
| `/blog/[slug]` | SSG | Blog post detail |
| `/product/[slug]` | SSG | Product detail with gallery, tabs, reviews |
| `/testimonials` | Static | Customer reviews, influencer reviews, ratings |
| `/faqs` | Static | Accordion FAQ with category filter |
| `/contact` | Static | Contact form, map, hours, social |
| `/privacy-policy` | Static | Privacy policy |
| `/terms` | Static | Terms & conditions |
| `/shipping-policy` | Static | Shipping policy |
| `/return-policy` | Static | Return & refund policy |
| `/sitemap.xml` | Static | Dynamic sitemap |
| `/robots.txt` | Static | Robots file |

## Dynamic Routes

- `/shop/[category]` — men, women, kids, accessories, footwear, bags, watches
- `/collections/[slug]` — summer, winter, festive, wedding, office-wear, casual, luxury, streetwear
- `/product/[slug]` — 20 product slugs
- `/blog/[slug]` — 6 blog post slugs

All dynamic routes use `generateStaticParams` for SSG and `generateMetadata` for per-page SEO.

## Components

### Layout Components
- **Navbar** — Sticky, transparent on hero (home only), solid on scroll. Mega menu for Shop & Collections. Search overlay. Mobile drawer. Wishlist & cart icons.
- **Footer** — 5-column layout: Company, Shop, Collections, Customer Service, Quick Links. Contact info, social links, copyright.

### Shared Components
- **ParallaxBanner** — Reusable full-bleed scroll-linked image section with Framer Motion `useScroll` + `useTransform`. Supports label, title, subtitle, height variants, overlay intensity, alignment.
- **ProductCard** — Image with hover zoom, badge, discount %, quick view button, wishlist toggle, star rating, color swatches, price.
- **SectionHeading** — Reusable heading with label, title, description. Left or center alignment. Light/dark variants.
- **CTA** — Call-to-action section with configurable title, description, buttons.
- **Newsletter** — Email signup with success state.
- **Breadcrumb** — Simple breadcrumb navigation.
- **LegalPage** — Reusable layout for legal pages with sections.

### Home Components
- **HeroSection** — Full-screen parallax hero with scroll-linked transforms, animated text reveal, scroll indicator.

## Animation System

All animations use Framer Motion with a shared luxury easing curve: `cubic-bezier(0.22, 1, 0.36, 1)`.

### Framer Motion Variants (lib/animations.ts)
- `fadeUp` — opacity + y: 40 → 0
- `fadeDown` — opacity + y: -40 → 0
- `fadeLeft` — opacity + x: 60 → 0
- `fadeRight` — opacity + x: -60 → 0
- `scaleReveal` — opacity + scale: 0.92 → 1
- `imageReveal` — opacity + scale: 1.1 → 1 + y: 30 → 0
- `containerStagger` — staggerChildren: 0.12
- `containerStaggerFast` — staggerChildren: 0.06
- `itemFadeUp` — for staggered children
- `itemScale` — for staggered children
- `heroReveal` — longer duration hero entrance
- `textReveal` — custom index-based delay

### Viewport Settings
- `viewportOnce` — { once: true, amount: 0.2 }
- `viewportAlways` — { once: false, amount: 0.2 }

## Lenis Configuration

Configured in `components/shared/LenisProvider.tsx`:
- Duration: 1.1s
- Easing: exponential
- Smooth wheel: enabled
- Touch multiplier: 1.5
- Respects `prefers-reduced-motion` (disabled for reduced motion users)
- Synced with Framer Motion scroll-linked transforms via `useScroll`

## Design System

### Typography
- **Display font:** Playfair Display (serif) — headings, hero text, editorial titles
- **Body font:** Inter (sans-serif) — body text, navigation, UI
- Both loaded via `next/font/google` with CSS variables
- Hero: text-5xl to text-8xl
- Section headings: text-3xl to text-5xl
- Body: text-base (1rem), leading-relaxed
- Labels: text-xs, uppercase, tracking-[0.25em-0.4em]

### Color Palette (HSL CSS variables)
| Token | HSL | Hex | Usage |
|-------|-----|-----|-------|
| Primary | 222 47% 11% | #111827 | Dark text, buttons, footer |
| Secondary | 220 14% 24% | #374151 | Secondary dark |
| Accent | 25 60% 55% | #C08457 | CTAs, highlights, hover states |
| Background | 0 0% 100% | #FFFFFF | Page background |
| Muted | 210 40% 96% | #F8FAFC | Section background |
| Muted Foreground | 220 9% 46% | #6B7280 | Secondary text |
| Border | 220 13% 91% | #E5E7EB | Borders, dividers |
| Success | 142 71% 45% | #16A34A | Success states |
| Warning | 38 92% 50% | — | Warning states |
| Destructive | 0 84% 60% | — | Error states |

### Spacing
- 8px spacing system
- Container: max-w-[1440px], px-5 to px-16 responsive
- Section padding: py-20 to py-28 (5rem to 7rem)

### Color Ramps
6 color ramps (primary, secondary, accent, success, warning, destructive) + neutral tones, each with multiple shades via HSL variables.

## Product Categories

| Category | Slug | Product Count |
|----------|------|---------------|
| Men | men | 5 |
| Women | women | 6 |
| Kids | kids | 2 |
| Accessories | accessories | 3 |
| Footwear | footwear | 2 |
| Bags | bags | 2 |
| Watches | watches | 1 |

## Image Assets

All images are from Pexels (stock photography), referenced via URL with `next/image` optimization. No images are downloaded locally.

### Image Categories Used
- Women's fashion (dresses, blouses, skirts, sarees, coats, gowns)
- Men's fashion (blazers, denim, kurtas, hoodies, sweaters)
- Kids fashion (dresses, party wear)
- Accessories (bags, sunglasses, belts, watches)
- Footwear (sneakers, boots)
- Lifestyle / editorial / runway / store interior

### Image Count
- 20 products × 4 images each = 80 product images
- 8 collection hero + 8 banner = 16 collection images
- 6 blog covers
- 40 gallery images
- ~30 lifestyle/editorial/parallax images
- Total: ~170+ unique image references (reused intelligently)

## Parallax Background Map

| Page | Section | Image Source | Context |
|------|---------|-------------|---------|
| Home | Hero | 1488463 | Full-screen editorial hero |
| Home | Lookbook Highlight | 996983 | Inter-section parallax banner |
| Home | Seasonal Highlight | 261326 | Inter-section parallax banner |
| About | Hero | 1055691 | Brand story hero |
| About | Atelier | 261326 | Manufacturing process divider |
| Shop | Hero | 996983 | Shop landing hero |
| Shop/[category] | Hero | Category-specific | Category hero |
| Shop/[category] | Mid-banner | 1055691 | Editorial divider |
| Collections | Hero | 2065200 | Collections landing hero |
| Collections/[slug] | Hero | Collection heroImage | Collection-specific |
| Collections/[slug] | Editorial | Collection bannerImage | Mid-page editorial |
| Lookbook | Hero | 261326 | Lookbook hero |
| Lookbook | Divider | 996983 | Behind-the-scenes divider |
| Gallery | Hero | 1488463 | Gallery hero |
| Gallery | Divider | 1055691 | Lifestyle divider |
| Blog | Hero | 2703202 | Blog hero |
| Blog/[slug] | Hero | Post cover | Post-specific |
| Blog/[slug] | Divider | 996983 | Related posts divider |
| Testimonials | Hero | 1055691 | Testimonials hero |
| Testimonials | Divider | 996983 | Influencer reviews divider |
| FAQs | Hero | 1488463 | FAQs hero |
| FAQs | Divider | 261326 | Support divider |
| Contact | Hero | 1488463 | Contact hero |
| Contact | Visit | 1055691 | Visit us banner |
| Product/[slug] | Lifestyle | Product image[2] | Styled in context |
| Legal pages | Hero | 1488463 | Legal page hero |

## Icons

All icons from `lucide-react`:
- Navigation: Menu, X, Search, Heart, ShoppingBag, ChevronRight, ChevronDown, ArrowRight, ArrowLeft, ArrowDown
- Trust: Truck, ShieldCheck, RefreshCw, Headphones, CheckCircle2, Check
- Content: Star, Quote, Instagram, Facebook, Twitter, Youtube, MapPin, Phone, Mail, Clock
- Product: Minus, Plus, Ruler, Sparkles, Tag, Calendar, ZoomIn
- Misc: Award, Leaf, Target, Eye, SlidersHorizontal, Grid3x3, Send, MessageCircle, HelpCircle

## SEO

### Metadata API
- Root metadata in `app/layout.tsx` with title template, description, keywords, OpenGraph, Twitter cards
- Per-page metadata via `layout.tsx` files for client component pages
- Dynamic metadata via `generateMetadata` for product, collection, blog, and category pages

### Open Graph
- Type: website
- Locale: en_IN
- Site name: ThreadCraft Fashion
- Images: Pexels fashion photography (1200×630)

### Twitter Cards
- Card type: summary_large_image
- Title and description per page

### JSON-LD
- ClothingStore schema in root layout
- Fields: name, description, image, url, telephone, email, priceRange, address, geo, openingHours, sameAs

### Sitemap
- Dynamic sitemap at `/sitemap.ts`
- Includes all static routes, shop categories, products, collections, and blog posts
- Priority and changeFrequency set per route type

### Robots
- Allows all crawlers
- Disallows `/api/`
- References sitemap

### Other SEO
- Canonical URLs on all pages
- Proper heading hierarchy (h1 per page, h2 for sections)
- Optimized image alt text throughout
- Semantic HTML (article, section, nav, aside)

## Dependencies

### Production
- next: 13.5.1
- react: 18.2.0
- react-dom: 18.2.0
- framer-motion: ^latest
- lenis: ^latest
- lucide-react: ^0.446.0
- @supabase/supabase-js: ^2.58.0
- class-variance-authority: ^0.7.0
- clsx: ^2.1.1
- tailwind-merge: ^2.5.2
- tailwindcss-animate: ^1.0.7
- Radix UI primitives (30+ packages)
- react-hook-form: ^7.53.0
- zod: ^3.23.0
- embla-carousel-react: ^8.3.0
- recharts: ^2.12.7
- sonner: ^1.5.0
- vaul: ^0.9.9
- cmdk: ^1.0.0

### Development
- typescript: 5.2.2
- eslint: 8.49.0
- eslint-config-next: 13.5.1
- @types/node, @types/react, @types/react-dom

## Completed Features

- [x] Home page with 18 sections (hero, featured collections, new arrivals, parallax banner, best sellers, trending, men's/women's split, kids banner, parallax banner, seasonal collections, why choose us, lookbook preview, reviews, Instagram gallery, blog preview, FAQ, store location, newsletter, CTA)
- [x] About page with 12 sections (hero, brand story, values, designers, parallax banner, process, sustainability, quality standards, awards, store gallery, team quote, CTA)
- [x] Shop index page with category grid, featured products, services
- [x] Shop category pages with filters (price, color, availability), sorting, product grid
- [x] Collections index with alternating layout
- [x] Collection detail pages with products, styling tips, fabric & craft
- [x] Lookbook with masonry editorial grid and behind-the-scenes
- [x] Gallery with 40 images, category filters, lightbox with prev/next
- [x] Blog index with search, category filter, featured post
- [x] Blog post detail with content, tags, author bio, related posts
- [x] Product detail with gallery, color/size selection, quantity, tabs (description, details, size guide, reviews), frequently bought together, related products, styling tips
- [x] Testimonials with stats, customer reviews, influencer reviews, brand stories, rating summary
- [x] FAQs with category sidebar, accordion, support options
- [x] Contact with form, map, hours, social links
- [x] Legal pages (Privacy, Terms, Shipping, Returns)
- [x] 404 page
- [x] Sticky navbar with transparent hero, solid on scroll, mega menu, search overlay, mobile drawer
- [x] Premium footer with 5 columns, contact info, social
- [x] Parallax banners on every page
- [x] Lenis smooth scroll with reduced-motion fallback
- [x] Framer Motion animations throughout
- [x] Responsive design (mobile, tablet, laptop, desktop, ultra-wide)
- [x] SEO: sitemap, robots, JSON-LD, per-page metadata, OpenGraph, Twitter cards
- [x] next/image optimization with lazy loading and responsive sizes
- [x] TypeScript strict mode

## Pending Features

- [ ] Shopping cart functionality (currently UI only)
- [ ] Wishlist page
- [ ] User authentication
- [ ] Product search results page
- [ ] Store locator with multiple locations
- [ ] Gift card purchase flow
- [ ] Personal styling booking system
- [ ] Product reviews submission
- [ ] Infinite scroll on gallery
- [ ] Dark mode toggle

## Recent Changes (Newest First)

1. **2026-07-28:** Initial build complete. All 18+ pages, 20 products, 8 collections, 6 blog posts, 40 gallery images, parallax banners, animations, SEO, and build passing.
2. **2026-07-28:** Refactored dynamic routes to use server component page.tsx with client component View files for generateStaticParams compatibility.
3. **2026-07-28:** Installed framer-motion and lenis. Configured design system, fonts, and animation utilities.
4. **2026-07-28:** Created data files for products, collections, blog posts, gallery, testimonials, and FAQs.

## Performance Optimizations

- next/image with `fill`, `sizes`, and lazy loading
- Code splitting via App Router (each route is a separate chunk)
- SSG for all dynamic routes (products, collections, blog, categories)
- Framer Motion transforms use GPU-accelerated properties (opacity, transform)
- Lenis respects `prefers-reduced-motion`
- Parallax uses `useScroll` + `useTransform` (no layout thrashing)
- Images from Pexels CDN with compression params
- Tailwind CSS purging

## Accessibility

- Semantic HTML (article, section, nav, aside, main)
- ARIA labels on icon buttons (search, menu, close, wishlist, cart)
- Keyboard navigation support on accordion, tabs, lightbox
- Sufficient color contrast (WCAG AA/AAA) on all text
- Alt text on all images
- Form labels associated with inputs
- Focus-visible ring styles
- Reduced motion support (Lenis disabled, parallax still shows static image)

## Future Improvements

- Add Supabase backend for product data, reviews, and orders
- Implement real cart and checkout flow with Stripe
- Add user accounts with order history
- Add product search with full-text filtering
- Add multi-language support (English, Tamil, Hindi)
- Add product video showcases
- Add AR try-on feature
- Add loyalty program integration
- Add live chat widget
- Add product comparison tool
