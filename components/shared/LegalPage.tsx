'use client';

import { motion } from 'framer-motion';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { ParallaxBanner } from '@/components/shared/ParallaxBanner';
import { CTA } from '@/components/shared/CTA';
import { fadeUp, viewportOnce } from '@/lib/animations';

const PX = 'https://images.pexels.com/photos';

export interface LegalSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

interface LegalPageProps {
  title: string;
  label: string;
  description: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export function LegalPage({ title, label, description, lastUpdated, sections }: LegalPageProps) {
  return (
    <>
      <section className="pt-24 lg:pt-28">
        <ParallaxBanner
          src={`${PX}/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1920`}
          alt={title}
          label={label}
          title={title}
          subtitle={description}
          height="tall"
          overlay="dark"
        />
      </section>

      <div className="container-luxury pt-8">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: title }]} />
      </div>

      <section className="py-20 lg:py-28">
        <div className="container-luxury">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
            <div className="mt-10 flex flex-col gap-12">
              {sections.map((section, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                >
                  <h2 className="font-display text-2xl font-semibold">{section.heading}</h2>
                  <div className="mt-4 flex flex-col gap-4">
                    {section.paragraphs.map((para, j) => (
                      <p key={j} className="text-base leading-relaxed text-muted-foreground">{para}</p>
                    ))}
                  </div>
                  {section.list && (
                    <ul className="mt-4 flex flex-col gap-2">
                      {section.list.map((item, k) => (
                        <li key={k} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
