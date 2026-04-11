'use client';

import { useState } from 'react';
import { testimonials } from '@/lib/testimonials';
import Image from 'next/image';
import { Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  return (
    <section id="testimonials" className="py-20 bg-brand-offwhite border-t border-brand-mint/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-primary mb-2 block">
            What Our
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold text-brand-dark mb-4">
            Customers Say
          </h2>
        </div>

        {/* Desktop Layout (Two Panels) */}
        <div className="hidden lg:flex gap-8 items-start">
          {/* Left Panel: Previews */}
          <div className="w-1/3 flex flex-col gap-3">
            {testimonials.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => setActiveIndex(idx)}
                className={`flex items-center gap-4 p-4 rounded-2xl border transition-all text-left ${
                  activeIndex === idx
                    ? 'bg-white border-brand-primary shadow-sm'
                    : 'bg-transparent border-brand-mint hover:bg-white/50'
                }`}
              >
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-brand-mint">
                  {t.avatarUrl && (
                    <Image src={t.avatarUrl} alt={t.name} fill className="object-cover" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-brand-dark truncate">{t.name}</p>
                  <p className="text-sm text-brand-dark/60 truncate">{t.quote}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Right Panel: Expanded Active */}
          <div className="w-2/3 bg-white p-12 rounded-3xl shadow-sm border border-brand-mint relative overflow-hidden min-h-[350px] flex flex-col justify-center">
            <Quote className="absolute top-8 right-8 w-24 h-24 text-brand-mint/30 rotate-180" />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <p className="text-xl md:text-2xl font-serif text-brand-dark font-medium leading-relaxed italic mb-8">
                  &quot;{activeTestimonial.quote}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden bg-brand-mint">
                    <Image src={activeTestimonial.avatarUrl} alt={activeTestimonial.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-brand-dark">{activeTestimonial.name}</h4>
                    <p className="text-brand-primary font-medium">{activeTestimonial.designation}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Layout (Carousel) */}
        <div className="lg:hidden flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 pb-8 -mx-4 px-4">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="snap-center shrink-0 w-[85vw] sm:w-[60vw] bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-brand-mint flex flex-col justify-between relative"
            >
              <Quote className="absolute top-4 right-4 w-12 h-12 text-brand-mint/30 rotate-180" />
              <p className="text-lg font-serif text-brand-dark font-medium leading-relaxed italic mb-6 relative z-10">
                &quot;{t.quote}&quot;
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-brand-mint flex-shrink-0">
                  <Image src={t.avatarUrl} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark leading-tight">{t.name}</h4>
                  <p className="text-brand-primary text-sm font-medium">{t.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
