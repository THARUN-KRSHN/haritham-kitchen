'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PreFooterCTA() {
  return (
    <section className="bg-brand-offwhite py-24 border-y border-brand-mint">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-brand-dark mb-6 tracking-tight">
            Experience the <br className="hidden sm:block" /> Authentic Taste of Inji Curry
          </h2>
          <p className="text-lg text-brand-dark/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Freshly prepared and delivered to your doorstep. Order now and taste the tradition of Kerala.
          </p>
          <Link
            href="#product"
            className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-brand-primary hover:bg-brand-deep hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-offwhite focus:ring-brand-primary min-h-[44px]"
          >
            Order Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
