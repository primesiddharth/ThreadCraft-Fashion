'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Check, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ParallaxBanner } from '@/components/shared/ParallaxBanner';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { fadeUp, fadeLeft, fadeRight, containerStagger, itemFadeUp, viewportOnce } from '@/lib/animations';
import { BUSINESS } from '@/constants/business';

const PX = 'https://images.pexels.com/photos';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="pt-24 lg:pt-28">
        <ParallaxBanner
          src={`${PX}/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1920`}
          alt="Contact ThreadCraft"
          label="Get in Touch"
          title="Contact Us"
          subtitle="Visit our Chennai boutique, call us, or send a message. We are here seven days a week, 10 AM to 9 PM."
          height="tall"
          overlay="dark"
        />
      </section>

      <div className="container-luxury pt-8">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
      </div>

      {/* Contact Info Cards */}
      <section className="py-20 lg:py-28">
        <div className="container-luxury">
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              { Icon: MapPin, title: 'Visit Us', lines: [BUSINESS.address.line1, `${BUSINESS.address.line2}, ${BUSINESS.address.city}`, `${BUSINESS.address.state} ${BUSINESS.address.postalCode}`] },
              { Icon: Phone, title: 'Call Us', lines: [BUSINESS.phone, 'Mon - Sun, 10 AM - 9 PM'] },
              { Icon: Mail, title: 'Email Us', lines: [BUSINESS.email, 'We respond within 24 hours'] },
              { Icon: Clock, title: 'Business Hours', lines: ['Monday - Sunday', '10:00 AM - 9:00 PM'] },
            ].map((card) => (
              <motion.div key={card.title} variants={itemFadeUp} className="flex flex-col items-center gap-3 rounded-xl border border-border p-8 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                  <card.Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold">{card.title}</h3>
                {card.lines.map((line, i) => (
                  <p key={i} className="text-sm text-muted-foreground">{line}</p>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: 'hsl(var(--muted))' }}>
        <div className="container-luxury">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewportOnce}>
              <SectionHeading
                label="Send a Message"
                title="We'd Love to Hear From You"
                description="Have a question about a product, a styling request, or just want to say hello? Fill out the form below."
                align="left"
              />
              {submitted ? (
                <div className="mt-8 flex flex-col items-center gap-4 rounded-xl bg-success/10 p-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success/20">
                    <Check className="h-8 w-8 text-success" />
                  </div>
                  <h3 className="text-xl font-semibold">Message Sent!</h3>
                  <p className="text-sm text-muted-foreground">Thank you for reaching out. We will get back to you within 24 hours.</p>
                  <Button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }} variant="outline">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium">Name *</label>
                      <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium">Phone</label>
                      <Input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Your phone" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">Email *</label>
                    <Input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Your email" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">Subject *</label>
                    <Input required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="How can we help?" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">Message *</label>
                    <Textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Your message" rows={5} />
                  </div>
                  <Button type="submit" size="lg" className="mt-2 bg-accent text-white hover:bg-accent/90">
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Map + Social */}
            <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewportOnce} className="flex flex-col gap-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.886!2d80.2376!3d13.0418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAyJzMwLjUiTiA4MMKwMTQnMTUuNCJF!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ThreadCraft Fashion Location"
                  className="rounded-xl"
                />
              </div>

              <div className="rounded-xl border border-border bg-white p-6">
                <h3 className="text-lg font-semibold">Follow Us</h3>
                <p className="mt-2 text-sm text-muted-foreground">Stay connected for new arrivals, styling tips, and exclusive offers.</p>
                <div className="mt-4 flex gap-3">
                  {[
                    { Icon: Instagram, href: BUSINESS.social.instagram, label: 'Instagram' },
                    { Icon: Facebook, href: BUSINESS.social.facebook, label: 'Facebook' },
                    { Icon: Twitter, href: BUSINESS.social.twitter, label: 'Twitter' },
                    { Icon: Youtube, href: BUSINESS.social.youtube, label: 'YouTube' },
                  ].map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-accent hover:bg-accent hover:text-white"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-border bg-white p-6">
                <h3 className="text-lg font-semibold">Business Hours</h3>
                <div className="mt-4 flex flex-col gap-2">
                  {BUSINESS.hoursList.map((h) => (
                    <div key={h.day} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{h.day}</span>
                      <span className="font-medium">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Parallax Banner */}
      <ParallaxBanner
        src={`${PX}/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1920`}
        alt="Visit ThreadCraft"
        label="Come Visit"
        title="Your Next Signature Look Awaits"
        subtitle="Walk in for a styling session, a fitting, or just to explore. We would love to meet you."
        height="tall"
        overlay="dark"
      />
    </>
  );
}
