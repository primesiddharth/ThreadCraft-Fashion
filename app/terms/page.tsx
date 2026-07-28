import { LegalPage } from '@/components/shared/LegalPage';

export const metadata = {
  title: 'Terms & Conditions',
  description: 'The terms and conditions for using ThreadCraft Fashion website and services.',
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      label="Legal"
      description="The rules that govern your use of our website and services."
      lastUpdated="January 2026"
      sections={[
        {
          heading: 'Acceptance of Terms',
          paragraphs: [
            'By accessing or using the ThreadCraft Fashion website, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our website.',
            'We may update these terms from time to time. Continued use of the site after changes constitutes acceptance of the updated terms.',
          ],
        },
        {
          heading: 'Use of the Website',
          paragraphs: ['You agree to use our website:'],
          list: [
            'Only for lawful purposes',
            'In a manner that does not infringe the rights of others',
            'Without attempting to gain unauthorized access to our systems',
            'Without introducing viruses, malware, or harmful code',
          ],
        },
        {
          heading: 'Products & Pricing',
          paragraphs: [
            'We make every effort to display products and prices accurately. However, we do not guarantee that product descriptions, colors, or pricing are error-free. We reserve the right to correct errors and modify prices without notice.',
            'All products are subject to availability. If a product you ordered is unavailable, we will notify you and offer a refund or alternative.',
          ],
        },
        {
          heading: 'Orders & Payment',
          paragraphs: [
            'Placing an order constitutes an offer to purchase. We reserve the right to refuse or cancel any order. Payment must be received in full before an order is dispatched.',
            'We accept major credit/debit cards, UPI, net banking, and selected digital wallets. All payments are processed through secure, encrypted gateways.',
          ],
        },
        {
          heading: 'Shipping & Delivery',
          paragraphs: [
            'We aim to deliver within the timeframes stated at checkout. Delivery times are estimates and not guaranteed. We are not liable for delays caused by shipping carriers or circumstances beyond our control.',
            'Risk of loss passes to you upon delivery. If a package is lost in transit, we will work with the carrier to resolve it.',
          ],
        },
        {
          heading: 'Returns & Refunds',
          paragraphs: [
            'We offer 30-day returns on unworn items with tags attached. Refunds are processed to the original payment method within 5-7 business days. Sale items are eligible for exchange only.',
            'For full details, please see our Return & Refund Policy page.',
          ],
        },
        {
          heading: 'Intellectual Property',
          paragraphs: [
            'All content on this website — including text, images, logos, and designs — is the property of ThreadCraft Fashion and protected by copyright law. You may not reproduce, distribute, or use our content without written permission.',
          ],
        },
        {
          heading: 'Limitation of Liability',
          paragraphs: [
            'To the maximum extent permitted by law, ThreadCraft Fashion shall not be liable for any indirect, incidental, or consequential damages arising from your use of our website or products.',
          ],
        },
        {
          heading: 'Governing Law',
          paragraphs: [
            'These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu.',
          ],
        },
        {
          heading: 'Contact',
          paragraphs: [
            'For questions about these terms, contact us at info@threadcraftfashion.com or +91 90112 34568.',
          ],
        },
      ]}
    />
  );
}
