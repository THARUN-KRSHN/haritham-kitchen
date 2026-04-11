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
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="shops" className="py-20 bg-brand-mint">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-4">
              <MapPin className="w-4 h-4 text-brand-primary" />
              <span className="text-sm font-medium text-brand-primary">Available Near You</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-brand-dark">
              Find Us in Local Shops
            </h2>
          </motion.div>
        </div>

        <motion.div
          variants={prefersReducedMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {shops.length > 0 ? (
            shops.map((shop) => (
              <motion.div
                key={shop.id}
                variants={cardVariants}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-brand-mint hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-48 w-full bg-brand-offwhite overflow-hidden">
                  <Image
                    src={shop.imageUrl}
                    alt={shop.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors" />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-brand-dark mb-2">{shop.name}</h3>
                  <p className="text-brand-dark/70 text-sm mb-4 flex-grow relative pl-6">
                    <MapPin className="w-4 h-4 absolute left-0 top-0.5 text-brand-primary" />
                    {shop.address}
                  </p>
                  <a
                    href={`tel:${shop.phone.replace(/[^0-9+]/g, '')}`}
                    className="inline-flex items-center gap-2 text-brand-dark font-medium hover:text-brand-primary transition-colors py-2"
                  >
                    <Phone className="w-4 h-4 text-brand-primary" />
                    {shop.phone}
                  </a>
                </div>
              </motion.div>
            ))
          ) : (
            /* Empty State */
            <div className="col-span-full py-12 flex flex-col items-center justify-center bg-white rounded-2xl border border-dashed border-brand-primary/30">
              <MapPin className="w-12 h-12 text-brand-primary/40 mb-4" />
              <h3 className="text-lg font-medium text-brand-dark">Coming soon near you</h3>
              <p className="text-brand-dark/60 text-sm text-center mt-2 max-w-sm">
                We are actively partnering with local stores. Check back soon for stockists in your area!
              </p>
            </div>
          )}
        </motion.div>

        {shops.length > 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <button className="inline-flex items-center justify-center px-6 py-3 border-2 border-brand-primary text-brand-primary font-medium rounded-full hover:bg-brand-primary hover:text-white transition-colors min-h-[44px]">
              View All Shops
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
