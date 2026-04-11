'use client';

import { useState } from 'react';
import { testimonials } from '@/lib/testimonials';
import { motion, AnimatePresence } from 'framer-motion';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* The Missing Background Rectangle is this container */}
        <div className="bg-brand-mint/60 rounded-[3rem] p-8 md:p-12 lg:p-16 flex flex-col gap-10 overflow-hidden relative">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl text-brand-dark flex flex-col font-light">
              <span>What Our</span>
              <strong className="font-semibold mt-1">Customer Say</strong>
            </h2>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* Left Panel: Previews */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="lg:w-1/2 flex flex-col gap-4"
            >
              {testimonials.map((t, idx) => (
                <motion.button
                  variants={itemVariants}
                  key={t.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`flex flex-col sm:flex-row items-start sm:items-center p-5 rounded-3xl transition-all text-left shadow-sm hover:shadow-md ${
                    activeIndex === idx
                      ? 'bg-white scale-[1.02] shadow-md border border-brand-primary/20'
                      : 'bg-white/90 hover:bg-white border border-transparent'
                  }`}
                >
                  <div className="flex items-center w-full gap-4">
                    <div className="w-14 h-14 rounded-full bg-brand-primary flex-shrink-0" />
                    <div className="flex-1 min-w-0 pr-4">
                      <p className="font-bold text-brand-dark truncate sm:whitespace-normal sm:line-clamp-2">
                        {t.quote.length > 45 ? t.quote.substring(0, 45) + '...' : t.quote}
                      </p>
                    </div>
                    <div className="flex-shrink-0 text-right self-end sm:self-center pt-2 sm:pt-0">
                      <p className="text-sm font-medium text-brand-dark/80 whitespace-nowrap">{t.name}</p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </motion.div>

            {/* Right Panel: Expanded Active */}
            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="lg:w-1/2"
            >
              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-brand-mint min-h-full flex flex-col justify-between h-full">
                {/* Image Placeholder */}
                <div className="w-full h-48 md:h-64 bg-brand-mint/40 rounded-2xl mb-8 flex-shrink-0" />
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col h-full justify-between"
                  >
                    <p className="text-xl md:text-2xl lg:text-3xl font-bold text-brand-primary text-center leading-snug mb-8">
                       {activeTestimonial.quote}
                    </p>
                    <div className="text-right mt-auto">
                      <h4 className="font-semibold text-lg text-brand-dark">{activeTestimonial.name}</h4>
                      <p className="text-brand-dark/70 font-medium">{activeTestimonial.designation}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
