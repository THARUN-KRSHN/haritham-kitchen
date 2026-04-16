'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { MapPin } from 'lucide-react';
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
      className="py-24 bg-transparent relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-6xl text-brand-dark font-serif italic mb-4">
              Local Shops
            </h2>
            <div className="w-24 h-1 bg-brand-primary mx-auto mb-6"></div>
            <p className="text-xl text-brand-dark/60 max-w-2xl mx-auto">
              Find our authentic homemade products at these premium retail locations.
            </p>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={prefersReducedMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20"
        >
          {shops.length > 0 ? (
            shops.slice(0, 3).map((shop) => (
              <motion.div
                key={shop.id}
                variants={cardVariants}
                className="group relative h-[600px] w-full rounded-[3.5rem] overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-4"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={shop.imageUrl}
                    alt={shop.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
                </div>

                {/* Top Header Overlay */}
                <div className="absolute top-10 left-10 flex items-center gap-4">
                  <div className="w-14 h-14 bg-brand-primary rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {shop.name.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-serif text-white leading-none mb-1">
                      {shop.name}
                    </h3>
                    <span className="text-[10px] tracking-[0.2em] font-bold text-white/70 uppercase">
                      {shop.category}
                    </span>
                  </div>
                </div>

                {/* Bottom Floating Card */}
                <div className="absolute bottom-6 inset-x-6">
                  <div className="bg-[#FAFAF7] rounded-[2.5rem] p-6 shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]">
                    <div className="flex justify-between items-start mb-6 px-2">
                      <div className="flex flex-col">
                        <span className="text-[10px] tracking-[0.1em] font-bold text-brand-dark/40 uppercase mb-1">Location</span>
                        <h4 className="text-lg font-bold text-brand-dark leading-tight">
                          {shop.address.split(',')[0]}
                        </h4>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-[10px] tracking-[0.1em] font-bold text-brand-dark/40 uppercase mb-1">Contact</span>
                        <span className="text-brand-primary font-bold">
                          {shop.phone}
                        </span>
                      </div>
                    </div>
                    
                    <button className="w-full py-4 bg-brand-dark text-white rounded-[1.5rem] font-bold text-sm tracking-widest uppercase hover:bg-brand-primary transition-colors shadow-lg shadow-black/10">
                      Get Directions
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-16 flex flex-col items-center justify-center bg-white rounded-[2.5rem] border border-brand-primary/20 shadow-sm px-8 text-center">
              <MapPin className="w-16 h-16 text-brand-primary/40 mb-6" />
              <h3 className="text-2xl font-serif italic text-brand-dark">New Locations Soon</h3>
              <p className="text-brand-dark/60 mt-2 max-w-sm">
                We are expanding our retail network. Check back soon for stockists near you!
              </p>
            </div>
          )}
        </motion.div>

        {/* View All button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center"
        >
          <button className="px-12 py-5 bg-brand-dark text-white rounded-full font-bold text-lg hover:bg-brand-primary transition-all shadow-xl shadow-brand-dark/20 hover:shadow-brand-primary/30 transform hover:-translate-y-1">
            View All Store Locations
          </button>
        </motion.div>
      </div>
    </section>
  );
}

