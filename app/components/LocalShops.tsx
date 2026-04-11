'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import { shops } from '@/lib/shops';

export default function LocalShops() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section
      id="shops"
      className="py-24 bg-brand-mint/60 relative overflow-hidden rounded-tl-[30px] rounded-tr-[30px]"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16 px-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-5xl text-brand-dark flex flex-col gap-1 font-light">
              <span>Find Us in</span>
              <strong className="font-semibold text-5xl md:text-6xl text-brand-dark mt-1">Local Shops</strong>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <button className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-brand-primary text-brand-primary font-medium hover:bg-brand-primary hover:text-white transition-colors">
              Available Near You
            </button>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={prefersReducedMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {shops.length > 0 ? (
            shops.map((shop) => (
              <motion.div
                key={shop.id}
                variants={cardVariants}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Top Half - Image Placeholder (Dark Green per design) */}
                <div className="relative h-64 w-full bg-brand-dark overflow-hidden p-2">
                  <div className="w-full h-full bg-brand-dark rounded-2xl relative overflow-hidden">
                    <Image
                      src={shop.imageUrl}
                      alt={shop.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500 rounded-2xl mix-blend-overlay"
                    />
                  </div>
                </div>

                {/* Bottom Half - Content */}
                <div className="p-8 flex flex-col flex-grow bg-white items-center text-center">
                  <h3 className="text-2xl font-semibold text-brand-primary mb-2">{shop.name}</h3>
                  <p className="text-brand-dark/70 text-base mb-1">{shop.address}</p>
                  <p className="text-brand-dark/70 text-base">{shop.phone}</p>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-16 flex flex-col items-center justify-center bg-white rounded-3xl border border-brand-primary/20 shadow-sm">
              <MapPin className="w-12 h-12 text-brand-primary/40 mb-4" />
              <h3 className="text-xl font-medium text-brand-dark">Coming soon near you</h3>
              <p className="text-brand-dark/60 text-center mt-2 max-w-sm">
                We are actively partnering with local stores. Check back soon for stockists in your area!
              </p>
            </div>
          )}
        </motion.div>

        {/* Footer Text & View All button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-brand-primary/10 pt-10"
        >
          <p className="text-xl md:text-2xl text-brand-brown font-medium max-w-2xl text-center md:text-left">
            Our authentic Inji Curry is available at trusted local stores across Kerala.
          </p>

          <button className="shrink-0 px-8 py-3 bg-brand-primary text-white rounded-full font-medium hover:bg-brand-deep transition-colors shadow-lg shadow-brand-primary/20 hover:shadow-xl hover:shadow-brand-primary/30">
            View All Shops
          </button>
        </motion.div>
      </div>
    </section>
  );
}
