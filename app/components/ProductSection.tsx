'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

const features = [
  "100% Homemade",
  "No Preservatives",
  "Authentic Kerala Recipe",
  "Fresh Ginger & Spices",
  "Rich in Flavour",
  "Perfect with Rice & Bread"
];

export default function ProductSection() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="product" className="py-20 bg-brand-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Left panel: Image */}
          <motion.div
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden bg-brand-offwhite shadow-xl shadow-brand-dark/5 p-8 flex items-center justify-center border border-brand-mint/50">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-mint/30 to-transparent pointer-events-none" />
              <Image
                src="/images/product.png"
                alt="Traditional Ginger Curry Jar"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-4 md:p-10 drop-shadow-xl hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Right panel: Details */}
          <motion.div
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="w-full lg:w-1/2 flex flex-col"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-primary mb-3">
              Our Signature Product
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-brand-dark mb-4 leading-tight">
              Traditional Ginger Curry
              <span className="block text-xl md:text-2xl mt-1 text-brand-dark/70">(Inji Curry)</span>
            </h2>
            
            <p className="text-base md:text-lg text-brand-dark/80 mb-8 leading-relaxed">
              Our signature Inji Curry is a burst of flavors — tangy, sweet, and spicy — made from fresh ginger, tamarind, jaggery, and a blend of aromatic spices. Slow-cooked to perfection, just like grandma used to make.
            </p>

            {/* Feature Checklist */}
            <motion.ul
              variants={prefersReducedMotion ? {} : containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10"
            >
              {features.map((feature, idx) => (
                <motion.li key={idx} variants={itemVariants} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0" />
                  <span className="text-base font-medium text-brand-dark">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>

            <div className="flex flex-col sm:flex-row items-center sm:items-end sm:justify-between gap-6 p-6 rounded-2xl bg-white border border-brand-mint shadow-sm">
              <div className="text-center sm:text-left w-full sm:w-auto">
                <span className="block text-sm text-brand-dark/60 font-medium mb-1">Pricing</span>
                <span className="block text-4xl font-bold text-brand-brown">
                  60 Rs <span className="text-lg font-medium text-brand-dark/50">/ 250g jar</span>
                </span>
              </div>
              <Link
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-xl text-white bg-brand-primary hover:bg-brand-deep transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary min-h-[44px]"
              >
                Order Now
              </Link>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
