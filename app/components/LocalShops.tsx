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
        <div className="text-center mb-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-6xl text-brand-dark font-serif italic mb-6 leading-tight">
              Local Shops
            </h2>
            <div className="w-16 md:w-24 h-1 bg-brand-primary mx-auto mb-8 opacity-40"></div>
            <p className="text-lg md:text-xl text-brand-dark/60 max-w-xl mx-auto font-light leading-relaxed">
              Find our authentic homemade products at these premium retail locations.
            </p>
          </motion.div>
        </div>

        {/* Cards Grid / Scroll Row */}
        <motion.div
          variants={prefersReducedMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex md:grid md:grid-cols-3 gap-8 md:gap-10 mb-24 overflow-x-auto md:overflow-visible snap-x snap-mandatory px-6 md:px-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-8"
        >
          {shops.length > 0 ? (
            shops.slice(0, 3).map((shop) => (
              <motion.div
                key={shop.id}
                variants={cardVariants}
                className="group relative h-[500px] md:h-[600px] w-[85vw] md:w-auto flex-shrink-0 md:flex-shrink rounded-[3rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-4 snap-center"
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
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
                </div>

                {/* Top Header Overlay */}
                <div className="absolute top-8 left-8 md:top-10 md:left-10 flex items-center gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-primary rounded-xl md:rounded-2xl flex items-center justify-center text-white text-xl md:text-2xl font-bold shadow-lg">
                    {shop.name.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-xl md:text-2xl font-serif text-white leading-none mb-1">
                      {shop.name}
                    </h3>
                    <span className="text-[9px] md:text-[10px] tracking-[0.2em] font-bold text-white/70 uppercase">
                      {shop.category}
                    </span>
                  </div>
                </div>

                {/* Bottom Floating Card */}
                <div className="absolute bottom-6 inset-x-4 md:inset-x-6">
                  <div className="bg-[#FAFAF7]/95 backdrop-blur-md rounded-[2rem] md:rounded-[2.5rem] p-5 md:p-6 shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]">
                    <div className="grid grid-cols-2 gap-4 mb-6 px-2">
                      <div className="flex flex-col">
                        <span className="text-[9px] tracking-[0.1em] font-bold text-brand-dark/40 uppercase mb-1">Location</span>
                        <h4 className="text-base md:text-lg font-bold text-brand-dark leading-tight line-clamp-1">
                          {shop.address.split(',')[0]}
                        </h4>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-[9px] tracking-[0.1em] font-bold text-brand-dark/40 uppercase mb-1">Contact</span>
                        <span className="text-brand-primary font-bold text-sm md:text-base">
                          {shop.phone}
                        </span>
                      </div>
                    </div>
                    
                    <button className="w-full py-3.5 md:py-4 bg-brand-dark text-white rounded-[1.2rem] md:rounded-[1.5rem] font-bold text-xs md:text-sm tracking-widest uppercase hover:bg-brand-primary transition-colors shadow-lg shadow-black/10">
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

