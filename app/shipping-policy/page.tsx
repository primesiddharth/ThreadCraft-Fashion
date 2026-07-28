import { LegalPage } from '@/components/shared/LegalPage';

export const metadata = {
  title: 'Shipping Policy',
  description: 'How ThreadCraft Fashion ships your orders — delivery times, costs, and tracking.',
};

export default function ShippingPolicyPage() {
  return (
    <LegalPage
      title="Shipping Policy"
      label="Customer Service"
      description="Everything you need to know about how we deliver your order."
      lastUpdated="January 2026"
      sections={[
        {
          heading: 'Order Processing',
          paragraphs: [
            'Orders are processed within 24 hours of placement, Monday through Sunday. Orders placed after 9 PM may be processed the next business day.',
            'You will receive a confirmation email with your order details, followed by a shipping notification with tracking information once your order is dispatched.',
          ],
        },
        {
          heading: 'Domestic Shipping (India)',
          paragraphs: ['We offer the following shipping options within India:'],
          list: [
            'Standard Delivery: 3-5 business days — Free on orders above ₹2,999, ₹99 below',
            'Express Delivery: 1-2 business days — ₹199 (available in major cities)',
            'Same-Day Delivery: Within Chennai — ₹299 (order before 12 PM)',
            'Store Pickup: Free — Ready within 24 hours at any of our stores',
          ],
        },
        {
          heading: 'International Shipping',
          paragraphs: [
            'We ship to over 40 countries. International delivery takes 7-14 business days depending on destination. Shipping costs are calculated at checkout based on weight and destination.',
            'International orders may be subject to customs duties and taxes, which are the responsibility of the recipient. We recommend checking with your local customs office for more information.',
          ],
        },
        {
          heading: 'Order Tracking',
          paragraphs: [
            'Once your order is dispatched, you will receive a tracking link via email and SMS. You can also track your order from your account dashboard at any time.',
            'For store pickup orders, you will receive a notification when your order is ready, usually within 24 hours.',
          ],
        },
        {
          heading: 'Delivery Issues',
          paragraphs: [
            'If your order is delayed beyond the estimated delivery time, please contact us at info@threadcraftfashion.com or +91 90112 34568. We will investigate with the carrier and keep you updated.',
            'If your package is lost or damaged in transit, we will send a replacement or issue a full refund — your choice.',
          ],
        },
        {
          heading: 'Shipping Restrictions',
          paragraphs: [
            'We currently do not ship to P.O. boxes or military addresses for express delivery. Some remote locations may require additional delivery time.',
            'Certain items (e.g., leather goods, watches) may have shipping restrictions to specific countries due to import regulations.',
          ],
        },
        {
          heading: 'Address Accuracy',
          paragraphs: [
            'Please ensure your shipping address is complete and accurate. We are not responsible for delays or losses due to incorrect addresses provided at checkout. If you notice an error, contact us immediately — we can update the address before the order is dispatched.',
          ],
        },
      ]}
    />
  );
}
