'use client';

import { motion } from 'framer-motion';

export default function BrandTrustStrip() {
  return (
    <section id="about" className="py-20 md:py-32 relative z-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="flex flex-col items-center gap-6"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-light text-[#6b5839] leading-snug italic font max-w-4xl mx-auto px-4 mt-9 mb-12">
            Rooted in Kerala tradition, <strong className="font-semibold">Haritham Kitchens</strong> crafts <strong className="font-semibold">authentic homemade Inji Curry</strong> with <strong className="font-semibold">handpicked ingredients</strong>—100% natural, made with love, and quality assured in every batch.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
