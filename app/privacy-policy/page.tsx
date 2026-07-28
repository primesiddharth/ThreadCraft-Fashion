import { LegalPage } from '@/components/shared/LegalPage';

export const metadata = {
  title: 'Privacy Policy',
  description: 'How ThreadCraft Fashion collects, uses, and protects your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      label="Legal"
      description="Your privacy matters to us. Learn how we collect, use, and protect your information."
      lastUpdated="January 2026"
      sections={[
        {
          heading: 'Introduction',
          paragraphs: [
            'ThreadCraft Fashion ("we", "us", "our") respects your privacy and is committed to protecting your personal data. This policy explains how we collect, use, and safeguard your information when you visit our website or store.',
            'By using our services, you agree to the practices described in this policy. We comply with the Information Technology Act, 2000, and the rules made thereunder regarding the handling of personal data.',
          ],
        },
        {
          heading: 'Information We Collect',
          paragraphs: [
            'We collect information you provide directly to us — such as your name, email, phone number, shipping address, and payment details when you place an order or create an account.',
            'We also collect information automatically — such as your IP address, browser type, pages visited, and the time spent on our site — through cookies and similar technologies.',
          ],
        },
        {
          heading: 'How We Use Your Information',
          paragraphs: ['We use your information to:'],
          list: [
            'Process and fulfill your orders, including shipping and returns',
            'Send you order confirmations and tracking updates',
            'Respond to your inquiries and provide customer support',
            'Send marketing communications (with your consent, which you can withdraw anytime)',
            'Improve our website, products, and services',
            'Detect and prevent fraud and abuse',
          ],
        },
        {
          heading: 'Information Sharing',
          paragraphs: [
            'We do not sell or rent your personal information. We share it only with trusted partners who help us operate — such as shipping carriers, payment processors, and email service providers — and only as necessary to fulfill your orders.',
            'We may disclose information when required by law or to protect our rights, property, or safety.',
          ],
        },
        {
          heading: 'Data Security',
          paragraphs: [
            'We use industry-standard encryption (SSL/TLS) to protect your data in transit. Payment information is processed through PCI-DSS compliant gateways and is never stored on our servers.',
            'Access to personal data is restricted to authorized personnel only, and we regularly review our security practices.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'We use cookies to remember your preferences, analyze site traffic, and personalize content. You can disable cookies in your browser settings, though some features may not function properly.',
          ],
        },
        {
          heading: 'Your Rights',
          paragraphs: [
            'You have the right to access, correct, or delete your personal data. You can also opt out of marketing communications at any time by clicking the unsubscribe link in our emails or contacting us directly.',
          ],
        },
        {
          heading: 'Contact Us',
          paragraphs: [
            'If you have questions about this policy or how we handle your data, please contact us at info@threadcraftfashion.com or call +91 90112 34568. Our Privacy Officer will respond within 7 business days.',
          ],
        },
      ]}
    />
  );
}
