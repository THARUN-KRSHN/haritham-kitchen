'use client';

import { useState, useEffect } from 'react';
import { testimonials } from '@/lib/testimonials';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  // Auto-slide functionality (optional but good for this high-impact design)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="relative min-h-[80vh] lg:min-h-screen overflow-hidden bg-brand-dark flex flex-col lg:flex-row">
      
      {/* Left Panel: Content & Dynamic Color */}
      <motion.div
        animate={{ backgroundColor: activeTestimonial.bgColor }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="relative w-full lg:w-1/2 p-10 md:p-16 lg:p-24 flex flex-col justify-between min-h-[450px] lg:min-h-screen"
      >
        {/* SVG Decorative Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="testimonial-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M40 0 C55 25 80 40 80 80 C40 80 25 55 0 40 C25 25 40 0 40 0" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#testimonial-pattern)" />
          </svg>
        </div>

        {/* Section Title */}
        <div className="relative z-10">
          <span className="text-white/60 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Kind Words</span>
          <h2 className="text-white text-3xl md:text-3xl font-serif italic mb-2">What our community says</h2>
        </div>

        {/* Empty Spacer to push pagination down */}
        <div className="flex-grow" />

        {/* Pagination Controls */}
        <div className="relative z-10 mb-8 flex gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-1 transition-all duration-500 rounded-full ${activeIndex === idx ? "w-10 bg-white" : "w-3 bg-white/30 hover:bg-white/50"
                }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </motion.div>

      {/* Right Panel: Blurred Image with Overlay */}
      <div className="relative w-full lg:w-1/2 min-h-[350px] lg:min-h-screen overflow-hidden">
        <Image
          src="/images/testimonial.png"
          alt="Haritham Kitchen Context"
          fill
          className="object-cover scale-105 blur-[6px]"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
        {/* Dark Color Overlay */}
        <div className="absolute inset-0 bg-brand-dark/40 mix-blend-multiply transition-colors duration-1000" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-brand-dark/20" />
      </div>

      {/* Overlapping Content Layer (Minimalist & Aesthetic) */}
      <div className="absolute inset-0 pointer-events-none z-20 flex items-center lg:items-center px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl pointer-events-auto"
            >
              <div className="relative flex flex-col items-start text-left bg-black/10 backdrop-blur-sm p-6 md:p-0 rounded-3xl md:bg-transparent md:backdrop-blur-none">
                {/* Subtle Quote Icon */}
                <span className="text-white/20 text-6xl md:text-9xl font-serif leading-none mb-2 md:mb-6 select-none block">“</span>
                
                {/* Reduced Font Size for Quote */}
                <h3 className="text-white text-2xl md:text-4xl lg:text-5xl font-serif leading-[1.4] mb-10 md:mb-12 drop-shadow-lg max-w-full md:max-w-3xl italic">
                  {activeTestimonial.quote}
                </h3>

                {/* Profile Info (Integrated with Quote) */}
                <div className="flex items-center gap-4 md:gap-5">
                  <div className="relative w-14 h-14 md:w-20 md:h-20 rounded-full overflow-hidden border border-white/20 p-1 bg-white/5 backdrop-blur-sm">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white/10 flex items-center justify-center text-white text-lg md:text-xl font-serif">
                      {activeTestimonial.avatarUrl ? (
                        <Image src={activeTestimonial.avatarUrl} alt={activeTestimonial.name} fill className="object-cover" />
                      ) : (
                        activeTestimonial.name.charAt(0)
                      )}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white text-lg md:text-2xl font-bold tracking-tight">
                      {activeTestimonial.name}
                    </h4>
                    <p className="text-white/60 text-sm md:text-lg italic font-serif">
                      {activeTestimonial.designation}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

    </section>
  );
}

