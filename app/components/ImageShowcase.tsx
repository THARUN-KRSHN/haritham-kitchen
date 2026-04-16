'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const images = [
  {
    src: "/images/img2.png", // Fresh Ginger
    alt: "Fresh Ginger",
    initialRotate: -15,
  },
  {
    src: "/images/img1.png", // Kerala Spices
    alt: "Artisan Spices",
    initialRotate: 0,
    isCenter: true
  },
  {
    src: "/images/product.png", // Fresh Spices tray
    alt: "Handpicked Ingredients",
    initialRotate: 12,
  }
];

export default function ImageShowcase() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transform rotations based on scroll
  const rotate1 = useTransform(scrollYProgress, [0, 0.5, 1], [-20, 0, 15]);
  const rotate2 = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 0]); // Middle stays mostly straight or floats
  const rotate3 = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -20]);

  // Parallax Y movement
  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const y3 = useTransform(scrollYProgress, [0, 1], [80, -80]);

  const rotations = [rotate1, rotate2, rotate3];
  const yOffsets = [y1, y2, y3];

  return (
    <section
      ref={containerRef}
      className="relative min-h-[80vh] bg-brand-cream overflow-hidden py-32 flex items-center justify-center"
    >
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[25vw] font-serif font-black text-brand-mint/40 tracking-[-0.05em] uppercase leading-none">
          HARITHAM
        </span>
      </div>

      {/* SVG Decorative Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="showcase-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M60 0 C80 40 120 60 120 120 C60 120 40 80 0 60 C40 40 60 0 60 0" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#showcase-pattern)" className="text-brand-primary" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              style={{
                rotate: rotations[idx],
                y: yOffsets[idx],
              }}
              className={`relative ${img.isCenter ? 'z-20 scale-110 md:-mx-12' : 'z-10'} w-full max-w-[300px] md:w-1/3 aspect-[3/4]`}
            >
              <div className={`w-full h-full relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white ${img.isCenter ? 'md:ring-[15px] md:ring-brand-primary/10' : ''}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
