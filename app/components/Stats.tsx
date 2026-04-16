'use client';

import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const AnimatedCounter = ({ from, to, duration = 2 }: { from: number, to: number, duration?: number }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (inView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);

        // Easing function: easeOutExpo
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setCount(Math.floor(easeProgress * (to - from) + from));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, from, to, duration]);

  return <span ref={nodeRef}>{count}</span>;
};

export default function Stats() {
  return (
    <section className="py-24 bg-brand-offwhite overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-[3rem] overflow-hidden shadow-2xl">

          {/* Top Left: Branding Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-brand-primary p-12 md:p-16 flex flex-col justify-center relative min-h-[500px] text-white"
          >
            {/* SVG Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="leaf-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <path d="M50 0 C70 30 100 50 100 100 C50 100 30 70 0 50 C30 30 50 0 50 0" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#leaf-pattern)" />
              </svg>
            </div>

            <div className="relative z-10">
              <span className="text-sm font-bold uppercase tracking-widest mb-4 block opacity-80">Our Legacy</span>
              <h2 className="text-4xl md:text-5xl font-serif italic mb-6 leading-tight">
                Authentic Kerala <br /> Heritage in Every Bite
              </h2>
              <p className="text-lg opacity-90 max-w-sm">
                Rooted in tradition, crafted with love, and delivered with purity. Haritham Kitchen brings you the true essence of homemade goodness.
              </p>
            </div>
          </motion.div>

          {/* Top Right: Stat Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-white p-12 md:p-16 flex flex-col justify-center items-center text-center min-h-[500px] border-b md:border-b-0 md:border-l border-brand-mint"
          >
            <div className="text-7xl md:text-8xl font-bold text-brand-dark mb-4">
              <AnimatedCounter from={0} to={500} />+
            </div>
            <div className="text-xl md:text-2xl font-medium text-brand-dark/60 uppercase tracking-widest">
              Happy Customers
            </div>
          </motion.div>

          {/* Bottom Left: Stat Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-12 md:p-16 flex flex-col justify-center items-center text-center min-h-[500px] border-t md:border-t-0 md:border-r border-brand-mint order-last md:order-none"
          >
            <div className="text-7xl md:text-8xl font-bold text-brand-dark mb-4">
              <AnimatedCounter from={0} to={1000} />+
            </div>
            <div className="text-xl md:text-2xl font-medium text-brand-dark/60 uppercase tracking-widest">
              Units Sold
            </div>
          </motion.div>

          {/* Bottom Right: Branding Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-brand-brown p-12 md:p-16 flex flex-col justify-center relative min-h-[500px] text-brand-cream"
          >
            {/* SVG Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="spice-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                    <circle cx="40" cy="40" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
                    <path d="M40 10 L40 70 M10 40 L70 40" stroke="currentColor" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#spice-pattern)" />
              </svg>
            </div>

            <div className="relative z-10">
              <span className="text-sm font-bold uppercase tracking-widest mb-4 block opacity-80">Our Promise</span>
              <h2 className="text-4xl md:text-5xl font-serif italic mb-6 leading-tight">
                100% Natural <br /> & Pure Ingredients
              </h2>
              <p className="text-lg opacity-90 max-w-sm">
                No preservatives, no artificial colors—only the finest handpicked ingredients from Local gardens.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

