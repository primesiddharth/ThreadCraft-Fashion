"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
} from "lucide-react";
import {
  BUSINESS,
  SHOP_CATEGORIES,
  COLLECTIONS_LIST,
} from "@/constants/business";
import { fadeUp, viewportOnce } from "@/lib/animations";
import Image from "next/image";

const customerService = [
  { label: "Contact Us", href: "/contact" },
  { label: "FAQs", href: "/faqs" },
  { label: "Shipping Policy", href: "/shipping-policy" },
  { label: "Returns & Refunds", href: "/return-policy" },
  { label: "Track Your Order", href: "/contact" },
  { label: "Size Guide", href: "/shop" },
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Lookbook", href: "/lookbook" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container-luxury py-16 mt-6 lg:py-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="font-display flex gap-3 items-center text-2xl font-bold text-white"
            >
              <Image
                src="/images/logo.jpg"
                alt="ThreadCraft"
                width={42}
                height={42}
                className="h-9 w-9 object-contain rounded-xl lg:h-10 lg:w-10"
                priority
              />

              <span className="font-display text-xl font-bold tracking-tight lg:text-2xl">
                ThreadCraft
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              {BUSINESS.tagline} A premium clothing store in the heart of
              Chennai, offering curated fashion for men, women, and kids —
              crafted with intention, worn with confidence.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                {
                  Icon: Instagram,
                  href: BUSINESS.social.instagram,
                  label: "Instagram",
                },
                {
                  Icon: Facebook,
                  href: BUSINESS.social.facebook,
                  label: "Facebook",
                },
                {
                  Icon: Twitter,
                  href: BUSINESS.social.twitter,
                  label: "Twitter",
                },
                {
                  Icon: Youtube,
                  href: BUSINESS.social.youtube,
                  label: "YouTube",
                },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-all hover:border-accent hover:bg-accent hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/50">
              Shop
            </h3>
            <ul className="space-y-2.5">
              {SHOP_CATEGORIES.map((cat) => (
                <li key={cat.href}>
                  <Link
                    href={cat.href}
                    className="text-sm text-white/80 transition-colors hover:text-accent"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/50">
              Collections
            </h3>
            <ul className="space-y-2.5">
              {COLLECTIONS_LIST.slice(0, 6).map((col) => (
                <li key={col.href}>
                  <Link
                    href={col.href}
                    className="text-sm text-white/80 transition-colors hover:text-accent"
                  >
                    {col.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/50">
              Customer Service
            </h3>
            <ul className="space-y-2.5">
              {customerService.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/50">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {/* Address */}
          <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/15">
              <MapPin className="h-5 w-5 text-accent" />
            </div>

            <div>
              <h4 className="mb-1 text-sm font-semibold text-white">
                Office Address
              </h4>

              <p className="text-sm leading-6 text-white/70">
                {BUSINESS.address.line1}, {BUSINESS.address.line2},{" "}
                {BUSINESS.address.city}, {BUSINESS.address.state}{" "}
                {BUSINESS.address.postalCode}
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/15">
              <Phone className="h-5 w-5 text-accent" />
            </div>

            <div>
              <h4 className="mb-1 text-sm font-semibold text-white">Call Us</h4>

              <a
                href={`tel:${BUSINESS.phone}`}
                className="text-sm text-white/70 transition-colors hover:text-accent"
              >
                {BUSINESS.phone}
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/15">
              <Clock className="h-5 w-5 text-accent" />
            </div>

            <div>
              <h4 className="mb-1 text-sm font-semibold text-white">
                Working Hours
              </h4>

              <p className="text-sm text-white/70">{BUSINESS.hours}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row"
        >
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-white/50">
            <Mail className="h-4 w-4" />
            <a href={`mailto:${BUSINESS.email}`} className="hover:text-accent">
              {BUSINESS.email}
            </a>
          </div>
          <p className="flex flex-wrap items-center justify-center gap-1.5 text-xs text-slate-500 lg:justify-start">
            <span>Made with</span>
            <span className="animate-pulse text-red-500">❤️</span>
            <span>by</span>
            <a
              href="https://creyotech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 font-semibold text-amber-500 transition-colors duration-300 hover:text-amber-400"
            >
              Creyotech IT Services
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
