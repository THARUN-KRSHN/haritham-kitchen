'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  const lineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/landing.png"
          alt="Haritham Kitchen Experience"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-80"
        />
        {/* Dark Gradient Overlay for Readability and Mood */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1f18]/90 via-[#1a1f18]/50 to-[#1a1f18]/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 mt-16 lg:mt-24 text-center w-full max-w-5xl">
        <motion.div
           initial="hidden"
           animate="visible"
           transition={{ staggerChildren: 0.2, delayChildren: 0.1 }}
           className="flex flex-col items-center"
        >
          <motion.h1
            variants={lineVariants}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] font-serif font-medium text-[#fcfbf9] mb-6 tracking-wide drop-shadow-xl"
          >
            Welcome
          </motion.h1>
          
          <motion.p 
            variants={lineVariants}
            className="text-lg md:text-xl text-[#e8e6e1] font-light tracking-wide max-w-2xl text-center mb-16 px-4 leading-relaxed"
          >
            Immerse yourself in the world of Haritham Kitchen and be inspired by a new, harmonious culinary experience.
          </motion.p>
          
          {/* Glassmorphism CTAs */}
          <motion.div 
            variants={lineVariants}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <Link
              href="#product"
              className="group inline-flex items-center justify-center px-10 py-4 rounded-[2rem] text-[13px] font-medium tracking-[0.2em] uppercase transition-all duration-500
                         bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:scale-[1.02] hover:border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
            >
              Order Now
            </Link>
            
            <Link
              href="#about"
               className="group inline-flex items-center justify-center px-10 py-4 rounded-[2rem] text-[13px] font-medium tracking-[0.2em] uppercase transition-all duration-500
                         bg-black/10 backdrop-blur-md border border-white/10 text-white hover:bg-black/30 hover:scale-[1.02] hover:border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
            >
              Explore Products
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
