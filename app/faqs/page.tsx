'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ParallaxBanner } from '@/components/shared/ParallaxBanner';
import { CTA } from '@/components/shared/CTA';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { Button } from '@/components/ui/button';
import { containerStagger, itemFadeUp, fadeUp, viewportOnce } from '@/lib/animations';
import { FAQS } from '@/data/gallery';
import { cn } from '@/lib/utils';

const PX = 'https://images.pexels.com/photos';

const categories = ['All', 'Orders', 'Returns', 'Products', 'Account', 'Store'];

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filtered = activeCategory === 'All' ? FAQS : FAQS.filter((f) => f.category === activeCategory);

  return (
    <>
      <section className="pt-24 lg:pt-28">
        <ParallaxBanner
          src={`${PX}/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1920`}
          alt="ThreadCraft FAQs"
          label="Good to Know"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about shopping, shipping, returns, and more at ThreadCraft Fashion."
          height="tall"
          overlay="dark"
        />
      </section>

      <div className="container-luxury pt-8">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'FAQs' }]} />
      </div>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28">
        <div className="container-luxury">
          <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
            {/* Category Sidebar */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="flex flex-col gap-2">
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Categories</h3>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
                    className={cn(
                      'rounded-lg px-4 py-2.5 text-left text-sm font-medium transition-all',
                      activeCategory === cat
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="mt-8 rounded-xl border border-border p-6">
                <HelpCircle className="h-8 w-8 text-accent" />
                <h3 className="mt-3 text-base font-semibold">Still have questions?</h3>
                <p className="mt-2 text-sm text-muted-foreground">Our team is here to help, seven days a week.</p>
                <Button asChild className="mt-4 w-full">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </aside>

            {/* FAQ List */}
            <div>
              <motion.div
                key={activeCategory}
                variants={containerStagger}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-3"
              >
                {filtered.map((faq, i) => (
                  <motion.div
                    key={`${activeCategory}-${i}`}
                    variants={itemFadeUp}
                    className="overflow-hidden rounded-xl border border-border"
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left"
                    >
                      <span className="text-base font-medium">{faq.question}</span>
                      <ChevronDown
                        className={cn(
                          'h-5 w-5 shrink-0 text-muted-foreground transition-transform',
                          openIndex === i && 'rotate-180'
                        )}
                      />
                    </button>
                    <motion.div
                      initial={false}
                      animate={{
                        height: openIndex === i ? 'auto' : 0,
                        opacity: openIndex === i ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Banner */}
      <ParallaxBanner
        src={`${PX}/261326/pexels-photo-261326.jpeg?auto=compress&cs=tinysrgb&w=1920`}
        alt="Customer support"
        label="We Are Here"
        title="Seven Days a Week"
        subtitle="Our boutique is open every day, 10 AM to 9 PM. Call, email, or visit us in person."
        height="medium"
        overlay="medium"
      />

      {/* Support Options */}
      <section className="py-20 lg:py-28">
        <div className="container-luxury">
          <SectionHeading
            label="Get in Touch"
            title="How Can We Help?"
            description="Three ways to reach us — choose what works for you."
          />
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-12 grid gap-6 md:grid-cols-3"
          >
            {[
              { Icon: MessageCircle, title: 'Live Chat', desc: 'Chat with our stylists in real-time, Monday to Sunday, 10 AM to 9 PM.', action: 'Start Chat' },
              { Icon: HelpCircle, title: 'Email Us', desc: 'Send us a message and we will respond within 24 hours.', action: 'Send Email' },
              { Icon: MessageCircle, title: 'Visit Us', desc: '88 Fashion Street, T. Nagar, Chennai. Open every day, 10 AM to 9 PM.', action: 'Get Directions' },
            ].map((opt) => (
              <motion.div key={opt.title} variants={itemFadeUp} className="flex flex-col items-center gap-3 rounded-xl border border-border p-8 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                  <opt.Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold">{opt.title}</h3>
                <p className="text-sm text-muted-foreground">{opt.desc}</p>
                <Button asChild variant="outline" size="sm" className="mt-2">
                  <Link href="/contact">{opt.action}</Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTA />
    </>
  );
}
