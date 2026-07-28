import { LegalPage } from '@/components/shared/LegalPage';

export const metadata = {
  title: 'Return & Refund Policy',
  description: 'ThreadCraft Fashion return and refund policy — 30-day easy returns.',
};

export default function ReturnPolicyPage() {
  return (
    <LegalPage
      title="Return & Refund Policy"
      label="Customer Service"
      description="We want you to love every piece. If you don't, we make returns easy."
      lastUpdated="January 2026"
      sections={[
        {
          heading: 'Return Window',
          paragraphs: [
            'We offer 30-day returns on all unworn items with original tags attached. The 30-day period begins from the date of delivery.',
            'Items must be in their original condition — unwashed, unworn, with all tags and packaging intact. We reserve the right to refuse returns that do not meet these criteria.',
          ],
        },
        {
          heading: 'How to Initiate a Return',
          paragraphs: ['Returning an item is simple:'],
          list: [
            'Log into your account and go to Order History',
            'Select the order and the item(s) you want to return',
            'Choose your reason for return and submit',
            'You will receive a return authorization and a prepaid shipping label (for orders within India)',
            'Pack the item(s) securely with all original tags and packaging',
            'Drop the package at any authorized courier location',
          ],
        },
        {
          heading: 'Refund Processing',
          paragraphs: [
            'Refunds are processed within 5-7 business days of us receiving and inspecting the returned item. The refund will be credited to your original payment method.',
            'For COD orders, refunds are processed via bank transfer or store credit. Please allow an additional 3-5 days for your bank to reflect the refund.',
          ],
        },
        {
          heading: 'Exchanges',
          paragraphs: [
            'Size exchanges are free within 30 days. Simply initiate an exchange from your order page, and we will send the new size as soon as we receive the original item.',
            'If the new size is out of stock, we will notify you and offer a refund or alternative.',
          ],
        },
        {
          heading: 'Non-Returnable Items',
          paragraphs: ['The following items are not eligible for return:'],
          list: [
            'Items marked "Final Sale"',
            'Undergarments and swimwear (for hygiene reasons)',
            'Custom-made or altered garments',
            'Gift cards',
            'Items returned without original tags and packaging',
          ],
        },
        {
          heading: 'Sale Items',
          paragraphs: [
            'Items purchased on sale (more than 30% off) are eligible for exchange only, not refund. Items marked "Final Sale" are non-returnable and non-exchangeable.',
          ],
        },
        {
          heading: 'Damaged or Defective Items',
          paragraphs: [
            'If you receive a damaged or defective item, please contact us within 48 hours of delivery with photos. We will arrange a free replacement or full refund immediately — no need to return the item in some cases.',
          ],
        },
        {
          heading: 'Store Returns',
          paragraphs: [
            'You can also return online orders at any of our stores. Simply bring the item with its original packaging and your order confirmation. Store staff will process the return immediately.',
          ],
        },
        {
          heading: 'Contact Us',
          paragraphs: [
            'For any return-related questions, contact us at info@threadcraftfashion.com or +91 90112 34568. Our team is available seven days a week, 10 AM to 9 PM.',
          ],
        },
      ]}
    />
  );
}
