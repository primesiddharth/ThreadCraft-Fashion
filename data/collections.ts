import type { Collection } from "@/types";

const PX = "https://images.pexels.com/photos";

export const COLLECTIONS: Collection[] = [
  {
    slug: "summer",
    name: "Summer Collection",
    season: "Spring / Summer 2026",
    description: "Light linens, breathable cottons, and sun-washed hues.",
    longDescription:
      "Our Summer Collection celebrates the ease of warm-weather dressing. Pieces are cut from breathable linens and organic cottons in a palette of ivory, sage, and sun-bleached terracotta. Every garment is designed to move with you — from morning markets to golden-hour dinners.",
    heroImage:
      "https://images.pexels.com/photos/1844644/pexels-photo-1844644.jpeg",
    bannerImage: `${PX}/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600`,
    highlights: [
      "Breathable linens",
      "Organic cottons",
      "Sun-washed palette",
      "Resort-ready silhouettes",
    ],
    pieces: 48,
    startingPrice: 1999,
    products: ["p002", "p005", "p015", "p017"],
  },
  {
    slug: "winter",
    name: "Winter Collection",
    season: "Autumn / Winter 2026",
    description: "Wool coats, cashmere knits, and rich textures.",
    longDescription:
      "When the temperature drops, our Winter Collection wraps you in warmth without sacrificing style. Think oversized wool coats, cashmere-blend knits, and leather trenches in cognac, charcoal, and camel. Each piece is layered with intention for a look that feels both cozy and considered.",
    heroImage: `${PX}/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600`,
    bannerImage: `${PX}/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=1600`,
    highlights: [
      "Double-faced wool",
      "Cashmere blends",
      "Leather outerwear",
      "Layered silhouettes",
    ],
    pieces: 52,
    startingPrice: 3499,
    products: ["p006", "p011", "p016", "p019"],
  },
  {
    slug: "festive",
    name: "Festive Collection",
    season: "Festive 2026",
    description: "Handloom kurtas, silk sarees, and celebratory hues.",
    longDescription:
      "Our Festive Collection honors Indian craft traditions with handloom kurtas, Kanchipuram silk sarees, and sherwanis in jewel tones. Each piece is woven by master artisans and finished with pure zari — ready for Diwali, Pongal, and every celebration in between.",
    heroImage: `${PX}/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=1600`,
    bannerImage: `${PX}/1346187/pexels-photo-1346187.jpeg?auto=compress&cs=tinysrgb&w=1600`,
    highlights: [
      "Handloom textiles",
      "Pure zari work",
      "Jewel-tone palette",
      "Artisan-crafted",
    ],
    pieces: 36,
    startingPrice: 3999,
    products: ["p007", "p014", "p012"],
  },
  {
    slug: "wedding",
    name: "Wedding Collection",
    season: "Bridal 2026",
    description: "Evening gowns, silk sarees, and heirloom pieces.",
    longDescription:
      "For the most important day, our Wedding Collection offers heirloom-quality pieces — from pleated evening gowns to Kanchipuram silk sarees with pure gold zari. Every garment is crafted to be worn, treasured, and passed down through generations.",
    heroImage: `${PX}/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=1600`,
    bannerImage: `${PX}/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600`,
    highlights: [
      "Heirloom craftsmanship",
      "Pure silk and zari",
      "Custom tailoring available",
      "Bridal styling included",
    ],
    pieces: 28,
    startingPrice: 4999,
    products: ["p004", "p014", "p012"],
  },
  {
    slug: "office-wear",
    name: "Office Wear Collection",
    season: "Year-Round",
    description: "Tailored blazers, silk blouses, and polished essentials.",
    longDescription:
      "Our Office Wear Collection is built for the modern professional. Tailored blazers, silk blouses, and pleated skirts in a refined neutral palette. Each piece transitions seamlessly from desk to dinner, designed to be mixed and matched across your workweek.",
    heroImage: `${PX}/769733/pexels-photo-769733.jpeg?auto=compress&cs=tinysrgb&w=1600`,
    bannerImage: `${PX}/1300550/pexels-photo-1300550.jpeg?auto=compress&cs=tinysrgb&w=1600`,
    highlights: [
      "Tailored fit",
      "Wrinkle-resistant fabrics",
      "Neutral palette",
      "Desk-to-dinner versatility",
    ],
    pieces: 44,
    startingPrice: 2999,
    products: ["p001", "p002", "p017", "p018"],
  },
  {
    slug: "casual",
    name: "Casual Collection",
    season: "Year-Round",
    description: "Everyday essentials with effortless style.",
    longDescription:
      "Our Casual Collection is the backbone of your wardrobe — well-made essentials that work as hard as you do. Think soft cotton tees, relaxed denim, and sneakers that go with everything. Comfort meets craftsmanship in every piece.",
    heroImage: `${PX}/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1600`,
    bannerImage: `${PX}/1490971/pexels-photo-1490971.jpeg?auto=compress&cs=tinysrgb&w=1600`,
    highlights: [
      "Everyday essentials",
      "Soft cottons",
      "Relaxed fits",
      "Easy-care fabrics",
    ],
    pieces: 60,
    startingPrice: 1499,
    products: ["p009", "p013", "p016"],
  },
  {
    slug: "luxury",
    name: "Luxury Collection",
    season: "Limited Edition",
    description: "Fine leather, automatic watches, and statement pieces.",
    longDescription:
      "Our Luxury Collection represents the pinnacle of ThreadCraft craftsmanship — full-grain leather goods, automatic timepieces, and limited-edition pieces made in small batches. Each item is numbered, authenticated, and built to last a lifetime.",
    heroImage: `${PX}/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=1600`,
    bannerImage: `${PX}/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1600`,
    highlights: [
      "Full-grain leather",
      "Swiss-inspired movements",
      "Numbered editions",
      "Lifetime warranty",
    ],
    pieces: 22,
    startingPrice: 4999,
    products: ["p008", "p010", "p020"],
  },
  {
    slug: "streetwear",
    name: "Streetwear Collection",
    season: "Drop 01 / 2026",
    description: "Heavyweight hoodies, selvedge denim, and urban edge.",
    longDescription:
      "Our Streetwear Collection is built on heavyweight fabrics, vintage washes, and a boxy, relaxed fit. From 500gsm hoodies to Japanese selvedge denim, each piece is garment-dyed for a lived-in feel that only gets better with wear.",
    heroImage: 'https://images.pexels.com/photos/37297401/pexels-photo-37297401.jpeg',
    bannerImage: `${PX}/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1600`,
    highlights: [
      "Heavyweight fabrics",
      "Japanese selvedge",
      "Garment-dyed",
      "Boxy fits",
    ],
    pieces: 34,
    startingPrice: 2499,
    products: ["p003", "p013"],
  },
];

export function getCollectionBySlug(slug: string): Collection | undefined {
  return COLLECTIONS.find((c) => c.slug === slug);
}
