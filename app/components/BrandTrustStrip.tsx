'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

export default function BrandTrustStrip() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="bg-brand-mint py-16 md:py-20 border-y border-brand-primary/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="relative w-24 h-24 mb-4">
             <Image
                src="/images/logo.png"
                alt="Haritham Kitchen Brand Mark"
                fill
                sizes="96px"
                className="object-contain"
              />
          </div>
          
          <p className="text-xl md:text-2xl font-medium text-brand-dark leading-relaxed italic font-sans max-w-3xl mx-auto">
            &quot;Rooted in Kerala tradition, Haritham Kitchen crafts authentic homemade Inji Curry with handpicked ingredients — 100% natural, made with love, and quality assured in every batch.&quot;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
