'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Check, X } from 'lucide-react';



export default function ProductSection() {
  const [modalOpen, setModalOpen] = useState(false);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [modalOpen]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="product" className="relative min-h-screen flex items-center justify-center overflow-hidden z-20">
      {/* Immersive Parallax Background */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/product-bg.jpeg"
          alt="Spices background"
          fill
          className="object-cover object-center fixed"
          quality={90}
          priority
        />
        {/* Dark subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111611] via-[#111611]/80 to-[#111611]/50 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-24 md:py-32 flex flex-col items-center justify-center">
        {/* Centerpiece Image Card */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95, y: 30 }}
           whileInView={{ opacity: 1, scale: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="relative group cursor-pointer mb-14 md:mb-16"
           onClick={() => setModalOpen(true)}
        >
          <div className="w-[240px] h-[300px] md:w-[360px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl relative transition-transform duration-500 group-hover:-translate-y-2 ring-1 ring-white/10">
            <Image
              src="/images/product.png"
              alt="Haritham Kitchen Inji Curry"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 240px, 360px"
              priority
            />
            {/* Soft overlay on hover only */}
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </motion.div>

        {/* Minimal CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-4 drop-shadow-md tracking-tight">
            Inji Curry
          </h2>
          <p className="text-[#d8ebd6] text-base md:text-xl font-light mb-12 tracking-wide font-sans opacity-80 italic font-serif">
            Traditional Ginger Curry &mdash; ₹249
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-6">
            <button
              onClick={() => setModalOpen(true)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/20 text-white hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm text-[11px] md:text-xs uppercase tracking-[0.2em] font-medium"
            >
              View Details +
            </button>
            <Link
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-brand-dark hover:bg-brand-mint transition-colors text-[11px] md:text-xs uppercase tracking-[0.2em] font-semibold shadow-xl shadow-black/10"
            >
              Order Now
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6 py-6 md:py-12">
            {/* Modal Backdrop with heavy blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-md"
              onClick={() => setModalOpen(false)}
            />

            {/* Modal Content - Split Pane */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative w-full max-w-5xl bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row z-10 max-h-full overflow-y-auto md:overflow-y-visible"
            >
              {/* Close Button */}
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-20 w-10 h-10 bg-[#f0f0eb] hover:bg-[#e4e4dd] rounded-full flex items-center justify-center text-brand-dark transition-colors border border-[#d8d8d1]"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Pane - Image */}
              <div className="w-full md:w-1/2 bg-[#f6f5ef] p-10 md:p-16 flex items-center justify-center min-h-[300px] md:min-h-0">
                <div className="relative w-full aspect-[4/5] max-w-[360px] rounded-2xl overflow-hidden shadow-xl border border-white">
                  <Image
                    src="/images/product.png"
                    alt="Inji Curry Signature"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Right Pane - Details */}
              <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-white">
                <span className="text-xs uppercase tracking-[0.2em] text-brand-dark/50 mb-3 font-semibold block transition-all">
                  Signature Product
                </span>
                <h3 className="text-4xl md:text-5xl font-serif text-brand-dark mb-4">
                  Inji Curry
                </h3>
                <p className="text-2xl text-[#3f9e31] font-medium mb-6">
                  ₹249
                </p>

                <p className="text-brand-dark/70 leading-relaxed mb-8 font-light text-base">
                  A traditional Kerala ginger curry — tangy, sweet, and spicy. Made with fresh ginger, tamarind, jaggery, and aromatic spices. Slow-cooked to perfection with no preservatives.
                </p>

                <motion.ul
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-4 mb-10"
                >
                  <motion.li variants={itemVariants} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#3f9e31]" strokeWidth={2.5} />
                    <span className="text-[15px] font-medium text-brand-dark/90">250g glass jar</span>
                  </motion.li>
                  <motion.li variants={itemVariants} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#3f9e31]" strokeWidth={2.5} />
                    <span className="text-[15px] font-medium text-brand-dark/90">Shelf life: 3 months</span>
                  </motion.li>
                  <motion.li variants={itemVariants} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#3f9e31]" strokeWidth={2.5} />
                    <span className="text-[15px] font-medium text-brand-dark/90">Store in a cool, dry place</span>
                  </motion.li>
                </motion.ul>

                <div className="mt-auto pt-4">
                  <Link
                    href="#contact"
                    onClick={() => setModalOpen(false)}
                    className="inline-flex w-full sm:w-auto items-center justify-center px-12 py-4 bg-[#3f9e31] hover:bg-brand-deep text-white rounded-full transition-all tracking-wide text-sm font-medium shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
                  >
                    Order Now
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
