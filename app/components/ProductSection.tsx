'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';

const features = [
  "100% Homemade",
  "No Preservatives",
  "Authentic Kerala Recipe",
  "Fresh Ginger & Spices",
  "Rich in Flavor",
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
    <section id="product" className="pb-32 bg-white relative z-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative pt-20">

        {/* Floating Logo Badge */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-white rounded-3xl shadow-[0px_8px_30px_rgba(0,0,0,0.08)] px-10 py-5 border border-brand-mint/50 flex flex-col items-center justify-center">
          <Image
            src="/images/logo.png"
            alt="Haritham Kitchen Logo"
            width={240}
            height={60}
            className="object-contain"
          />
        </div>

        {/* White Rounded Container */}
        <div className="bg-white rounded-[3rem] pt-32 pb-20 px-8 md:px-12 lg:px-20 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] border border-[#eff3ef] relative z-20 block">

          <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-medium text-[#253B1F] mb-16 lg:mb-24 text-center tracking-tight font-sans">
            Our Signature Product
          </h2>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">

            {/* Left panel: Image */}
            <motion.div
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full lg:w-[45%] flex"
            >
              <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-brand-dark shadow-2xl flex items-center justify-center">
                <Image
                  src="/images/product.png"
                  alt="Traditional Ginger Curry Jar"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

            {/* Right panel: Details */}
            <motion.div
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="w-full lg:w-[55%] flex flex-col pt-8"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                Traditional Ginger Curry
              </h3>

              <p className="text-lg md:text-xl text-[#3f9e31] font-light mb-10 leading-relaxed font-sans">
                Our signature Inji Curry is a burst of flavors — tangy, sweet, and spicy — made from fresh ginger, tamarind, jaggery, and a blend of aromatic spices. Slow-cooked to perfection, just like grandma used to make.
              </p>

              {/* Feature Checklist */}
              <motion.ul
                variants={prefersReducedMotion ? {} : containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-12"
              >
                {features.map((feature, idx) => (
                  <motion.li key={idx} variants={itemVariants} className="flex items-center gap-3">
                    <div className="flex-shrink-0 bg-[#e7f3e8] p-1 rounded">
                      <Check className="w-4 h-4 text-[#3f9e31] stroke-[3px]" />
                    </div>
                    <span className="text-[15px] font-medium text-brand-dark">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <div className="flex flex-col sm:flex-row items-center gap-6 pt-6 border-t border-brand-mint/50 mt-auto">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl md:text-[3rem] font-bold text-[#3f9e31] leading-none tracking-tight">60Rs</span>
                  <span className="text-lg font-medium text-brand-brown/70">/ 250g jar</span>
                </div>
                <div className="flex-grow flex justify-end">
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center px-10 py-3.5 border border-transparent text-base font-medium rounded-xl text-white bg-[#3f9e31] hover:bg-brand-deep transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary min-h-[44px]"
                  >
                    Order Now
                  </Link>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
