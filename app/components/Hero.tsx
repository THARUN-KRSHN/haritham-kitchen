'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const title = "The Authentic Taste of Kerala's Inji Curry";
  const words = title.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const,
      },
    },
  };

  const imgVariants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: 'easeOut' as const, delay: 0.4 }
    }
  };

  return (
    <section id="home" className="relative min-h-[85vh] flex items-center pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Text Content */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1">
            <motion.h1
              variants={prefersReducedMotion ? {} : containerVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-6xl font-bold text-brand-dark mb-6 leading-tight font-playfair"
            >
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  variants={prefersReducedMotion ? {} : wordVariants}
                  className={`inline-block mr-3 mb-2 ${word === 'Inji' || word === 'Curry' ? 'text-brand-deep' : ''}`}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: prefersReducedMotion ? 0 : 0.8, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-6"
            >
              <Link
                href="#product"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-xl text-white bg-[#3f9e31] hover:bg-brand-deep transition-all min-h-[44px]"
              >
                Order Now
              </Link>
              <Link
                href="#about"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-[#3f9e31] text-base font-medium rounded-xl text-[#3f9e31] hover:bg-[#3f9e31]/5 transition-all min-h-[44px]"
              >
                Explore Product
              </Link>
            </motion.div>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end h-[50vh] lg:h-[80vh] min-h-[400px]">
            <motion.div
              variants={prefersReducedMotion ? {} : imgVariants}
              initial="hidden"
              animate="visible"
              className="relative w-full h-full lg:scale-110 lg:translate-x-12 translate-y-12"
            >
              <Image
                src="/images/landing.png"
                alt="Authentic Kerala Inji Curry Jar"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain lg:object-right-bottom drop-shadow-2xl"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
