'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

export default function BrandTrustStrip() {
  const lineVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      }
    }
  };

  return (
    <section id="about" className="py-32 md:py-48 flex items-center justify-center relative z-10 overflow-hidden min-h-screen">

      {/* Shared Immersive Parallax Background */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <Image
          src="/images/brandtrust.png"
          alt="Haritham kitchen background"
          fill
          className="object-cover object-center fixed"
          quality={90}
          priority
        />
        {/* Dark subtle gradient overlay to match ProductSection and luxury theme */}
        <div className="absolute inset-0 bg-[#111611]/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center gap-10"
        >
          {/* Top Decorative Element */}
          <motion.div variants={lineVariants} className="flex flex-col items-center gap-2 mb-4">
            <div className="w-[1px] h-12 bg-[#e8e6e1]/30"></div>
            <div className="w-1.5 h-1.5 rotate-45 border border-[#e8e6e1]/50"></div>
          </motion.div>

          <motion.h2
            variants={lineVariants}
            className="text-3xl md:text-5xl lg:text-[3.5rem] font-serif text-[#fcfbf9] leading-[1.3] md:leading-[1.3] max-w-4xl tracking-wide"
          >
            Rooted in Kerala tradition, <br className="hidden md:block" /> a delicate balance of comfort <br className="hidden md:block" /> and authentic homemade flavors.
          </motion.h2>

          {/* Bottom Decorative Element */}
          <motion.div variants={lineVariants} className="pt-12 flex flex-col items-center gap-2">
            <div className="w-1.5 h-1.5 rotate-45 border border-[#e8e6e1]/50"></div>
            <div className="w-[1px] h-12 bg-[#e8e6e1]/30"></div>
          </motion.div>

          {/* Subtle Call to Action */}
          <motion.div variants={lineVariants} className="mt-8 relative z-20 pointer-events-auto">
            <button className="flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#3f9e31]/10 border border-[#3f9e31]/30 hover:bg-[#3f9e31]/20 hover:border-[#3f9e31]/60 transition-colors text-white/90 text-xs uppercase tracking-[0.2em] backdrop-blur-sm shadow-lg">
              <span className="text-[10px] font-sans">↓</span> Scroll to explore
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
