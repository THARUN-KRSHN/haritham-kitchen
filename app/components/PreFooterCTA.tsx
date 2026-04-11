'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PreFooterCTA() {
  return (
    <section className="bg-white py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-brand-dark leading-tight flex flex-col gap-2">
            <span className="font-light">Experience the</span>
            <span className="font-medium">Authentic Taste of Inji Curry</span>
          </h2>
          
          <p className="text-lg md:text-xl text-brand-dark/70 max-w-2xl mx-auto leading-relaxed font-light mt-2 mb-8">
            Freshly prepared and delivered to your doorstep. Order now and taste the tradition of Kerala.
          </p>
          
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="#product"
              className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-medium rounded-[1rem] text-white bg-brand-primary hover:bg-brand-deep hover:shadow-xl hover:shadow-brand-primary/20 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-brand-primary min-h-[50px] shadow-lg"
            >
              Order Now
            </Link>
          </motion.div>
        
        </motion.div>
      </div>
    </section>
  );
}
