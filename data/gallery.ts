import type { GalleryImage, Testimonial, FAQItem } from '@/types';

const PX = 'https://images.pexels.com/photos';

const galleryData: { id: string; pid: number; alt: string; category: string; w: number; h: number }[] = [
  { id: 'g01', pid: 767972, alt: 'Woman in ivory silk blouse', category: 'women', w: 900, h: 1350 },
  { id: 'g02', pid: 769733, alt: 'Man in tailored blazer', category: 'men', w: 900, h: 1350 },
  { id: 'g03', pid: 1183266, alt: 'Man in denim jacket', category: 'men', w: 900, h: 1350 },
  { id: 'g04', pid: 1755428, alt: 'Woman in pleated evening gown', category: 'women', w: 900, h: 1350 },
  { id: 'g05', pid: 2065200, alt: 'Woman in oversized wool coat', category: 'women', w: 900, h: 1350 },
  { id: 'g06', pid: 2703202, alt: 'Woman in leather trench coat', category: 'women', w: 900, h: 1350 },
  { id: 'g07', pid: 1346187, alt: 'Man in linen kurta', category: 'men', w: 900, h: 1350 },
  { id: 'g08', pid: 1490971, alt: 'Man in casual streetwear', category: 'men', w: 900, h: 1350 },
  { id: 'g09', pid: 1620760, alt: 'Child in summer dress', category: 'kids', w: 900, h: 1350 },
  { id: 'g10', pid: 3962285, alt: 'Child in party outfit', category: 'kids', w: 900, h: 1350 },
  { id: 'g11', pid: 904350, alt: 'Leather tote bag', category: 'accessories', w: 900, h: 1350 },
  { id: 'g12', pid: 1152077, alt: 'Leather handbag detail', category: 'accessories', w: 900, h: 1350 },
  { id: 'g13', pid: 2529148, alt: 'Leather sneakers', category: 'accessories', w: 900, h: 1350 },
  { id: 'g14', pid: 1456736, alt: 'Suede Chelsea boots', category: 'accessories', w: 900, h: 1350 },
  { id: 'g15', pid: 190819, alt: 'Automatic watch', category: 'accessories', w: 900, h: 1350 },
  { id: 'g16', pid: 46710, alt: 'Aviator sunglasses', category: 'accessories', w: 900, h: 1350 },
  { id: 'g17', pid: 2589653, alt: 'Silk saree drape', category: 'women', w: 900, h: 1350 },
  { id: 'g18', pid: 1666071, alt: 'Streetwear hoodie', category: 'men', w: 900, h: 1350 },
  { id: 'g19', pid: 1300550, alt: 'Man in merino sweater', category: 'men', w: 900, h: 1350 },
  { id: 'g20', pid: 2703187, alt: 'Pleated midi skirt', category: 'women', w: 900, h: 1350 },
  { id: 'g21', pid: 767971, alt: 'Silk blouse detail', category: 'women', w: 900, h: 1350 },
  { id: 'g22', pid: 1755427, alt: 'Evening gown detail', category: 'women', w: 900, h: 1350 },
  { id: 'g23', pid: 769749, alt: 'Blazer styling', category: 'men', w: 900, h: 1350 },
  { id: 'g24', pid: 1152078, alt: 'Quilted crossbody bag', category: 'accessories', w: 900, h: 1350 },
  { id: 'g25', pid: 3962295, alt: 'Kids fashion', category: 'kids', w: 900, h: 1350 },
  { id: 'g26', pid: 1620759, alt: 'Kids summer style', category: 'kids', w: 900, h: 1350 },
  { id: 'g27', pid: 1598505, alt: 'Leather footwear detail', category: 'accessories', w: 900, h: 1350 },
  { id: 'g28', pid: 277390, alt: 'Watch detail', category: 'accessories', w: 900, h: 1350 },
  { id: 'g29', pid: 701877, alt: 'Sunglasses styling', category: 'accessories', w: 900, h: 1350 },
  { id: 'g30', pid: 1362558, alt: 'Eyewear editorial', category: 'editorial', w: 900, h: 1350 },
  { id: 'g31', pid: 997872, alt: 'Timepiece editorial', category: 'editorial', w: 900, h: 1350 },
  { id: 'g32', pid: 280250, alt: 'Watch macro', category: 'accessories', w: 900, h: 1350 },
  { id: 'g33', pid: 343720, alt: 'Sunglasses on surface', category: 'accessories', w: 900, h: 1350 },
  { id: 'g34', pid: 45055, alt: 'Leather accessories', category: 'accessories', w: 900, h: 1350 },
  { id: 'g35', pid: 1152079, alt: 'Bag styling', category: 'accessories', w: 900, h: 1350 },
  { id: 'g36', pid: 19090, alt: 'Sneaker editorial', category: 'editorial', w: 900, h: 1350 },
  { id: 'g37', pid: 1488463, alt: 'Boutique interior', category: 'store', w: 900, h: 1350 },
  { id: 'g38', pid: 996983, alt: 'Fashion runway', category: 'runway', w: 900, h: 1350 },
  { id: 'g39', pid: 261326, alt: 'Editorial fashion shoot', category: 'editorial', w: 900, h: 1350 },
  { id: 'g40', pid: 1055691, alt: 'Lifestyle fashion', category: 'lifestyle', w: 900, h: 1350 },
];

export const GALLERY_IMAGES: GalleryImage[] = galleryData.map((g) => ({
  id: g.id,
  src: `${PX}/${g.pid}/pexels-photo-${g.pid}.jpeg?auto=compress&cs=tinysrgb&w=${g.w}`,
  alt: g.alt,
  category: g.category,
  width: g.w,
  height: g.h,
}));

export const GALLERY_CATEGORIES = [
  'All',
  'Men',
  'Women',
  'Kids',
  'Accessories',
  'Runway',
  'Lifestyle',
  'Store',
  'Editorial',
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Lakshmi Venkat',
    role: 'Bride',
    location: 'Chennai',
    rating: 5,
    quote:
      'My wedding saree from ThreadCraft was beyond my dreams. The zari work, the drape, the way it made me feel — every detail was perfect. The styling session helped me choose exactly the right blouse and jewelry.',
    avatar: `${PX}/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200`,
    product: 'Kanchipuram Silk Saree',
  },
  {
    id: 't2',
    name: 'Arjun Ramachandran',
    role: 'Corporate Executive',
    location: 'Bengaluru',
    rating: 5,
    quote:
      'I have been buying suits here for three years. The tailoring is impeccable — the fit, the fabric, the finish. My Midnight Blazer gets compliments every time I wear it. Worth every rupee.',
    avatar: `${PX}/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200`,
    product: 'Midnight Tailored Blazer',
  },
  {
    id: 't3',
    name: 'Divya Shankar',
    role: 'Fashion Blogger',
    location: 'Mumbai',
    rating: 5,
    quote:
      'As someone who reviews fashion for a living, I am picky. ThreadCraft consistently delivers quality that rivals brands at twice the price. The Ivory Silk Blouse is a permanent staple in my rotation.',
    avatar: `${PX}/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200`,
    product: 'Ivory Silk Blouse',
  },
  {
    id: 't4',
    name: 'Vikram Anand',
    role: 'Architect',
    location: 'Chennai',
    rating: 5,
    quote:
      'The Heritage Automatic Watch is a piece I will pass to my son. The movement, the weight, the way it ages — it is everything you want from a timepiece and nothing you do not. Service has been excellent.',
    avatar: `${PX}/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200`,
    product: 'Heritage Automatic Watch',
  },
  {
    id: 't5',
    name: 'Meera Krishnan',
    role: 'Teacher',
    location: 'Coimbatore',
    rating: 5,
    quote:
      'I bought the Kids Sunny Day Dress for my daughter and she refuses to take it off. The organic cotton is so soft, and the colors have not faded after many washes. I will be back for more.',
    avatar: `${PX}/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200`,
    product: "Kids Sunny Day Dress",
  },
  {
    id: 't6',
    name: 'Karthik Suresh',
    role: 'Photographer',
    location: 'Chennai',
    rating: 5,
    quote:
      'Streetwear that actually fits and lasts is hard to find in India. The heavyweight hoodie from ThreadCraft is the real deal — thick, well-cut, and the garment dye gives it character. My go-to brand now.',
    avatar: `${PX}/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200`,
    product: 'Heavyweight Streetwear Hoodie',
  },
];

export const FAQS: FAQItem[] = [
  {
    category: 'Orders',
    question: 'How long does delivery take?',
    answer:
      'Standard delivery within Chennai takes 1-2 business days. For the rest of India, delivery takes 3-5 business days. Express delivery is available at checkout for next-day delivery in major cities.',
  },
  {
    category: 'Orders',
    question: 'Do you offer international shipping?',
    answer:
      'Yes, we ship to over 40 countries. International delivery takes 7-14 business days depending on destination. Shipping costs are calculated at checkout based on weight and destination.',
  },
  {
    category: 'Orders',
    question: 'Can I track my order?',
    answer:
      'Once your order is dispatched, you will receive a tracking link via email and SMS. You can also track your order from your account dashboard at any time.',
  },
  {
    category: 'Returns',
    question: 'What is your return policy?',
    answer:
      'We offer 30-day easy returns on all unworn items with tags attached. Returns are free within India. Refunds are processed to the original payment method within 5-7 business days of us receiving the item.',
  },
  {
    category: 'Returns',
    question: 'Can I exchange an item for a different size?',
    answer:
      'Yes, size exchanges are free within 30 days. Simply initiate an exchange from your order page, and we will send the new size as soon as we receive the original item.',
  },
  {
    category: 'Returns',
    question: 'Are sale items returnable?',
    answer:
      'Items purchased on sale (more than 30% off) are eligible for exchange only, not refund. This excludes items marked final sale, which are non-returnable.',
  },
  {
    category: 'Products',
    question: 'How do I find the right size?',
    answer:
      'Each product page has a detailed size guide with measurements in centimeters and inches. If you are between sizes, our stylists can help — chat with us or visit any store for a complimentary fitting.',
  },
  {
    category: 'Products',
    question: 'Are your fabrics ethically sourced?',
    answer:
      'We prioritize GOTS-certified organic cotton, handloom linens, mulesing-free wool, and OEKO-TEX certified dyes. Our full sustainability report is published annually on our website.',
  },
  {
    category: 'Products',
    question: 'Do you offer custom tailoring?',
    answer:
      'Yes, we offer complimentary alterations on all tailored pieces. For custom-made garments including wedding wear, book a styling session at any of our stores or online.',
  },
  {
    category: 'Account',
    question: 'Do I need an account to order?',
    answer:
      'No, you can check out as a guest. However, creating an account gives you faster checkout, order tracking, wishlist access, and exclusive member offers.',
  },
  {
    category: 'Account',
    question: 'How do I use my gift card?',
    answer:
      'Enter your gift card code at checkout. If the balance does not cover the full order, the remaining amount can be paid by any other method. Gift cards are valid for 12 months.',
  },
  {
    category: 'Store',
    question: 'Can I buy online and pick up in store?',
    answer:
      'Yes, click-and-collect is available at all our stores. Select "Store Pickup" at checkout and choose your nearest location. You will be notified when your order is ready, usually within 24 hours.',
  },
];
