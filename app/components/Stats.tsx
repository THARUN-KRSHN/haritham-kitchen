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
    <section className="py-24 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          
          {/* Left Brand Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-brand-brown rounded-3xl p-8 md:p-12 flex flex-col justify-between min-h-[400px] shadow-lg relative overflow-hidden"
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/60 mb-8 self-start">
              <span className="text-white font-medium text-lg">Stats</span>
            </div>

            {/* Center Logo Container */}
            <div className="bg-white rounded-3xl p-6 md:p-8 w-full max-w-sm self-center shadow-lg transform transition-transform duration-500 hover:scale-105 my-8">
               <div className="relative w-full h-24 md:h-32">
                  <Image
                    src="/images/logo.png"
                    alt="Haritham Kitchen Logo"
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-contain"
                  />
               </div>
            </div>

            {/* Bottom Text */}
            <h2 className="text-3xl md:text-5xl font-medium text-brand-cream/90 mt-8">
              in a few numbers
            </h2>
          </motion.div>

          {/* Right Stat Cards Grid */}
          <div className="grid grid-cols-2 gap-6 md:gap-8 lg:p-4">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white rounded-3xl p-6 md:p-8 flex flex-col items-end justify-end shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-h-[220px] md:min-h-[280px]"
            >
              <div className="text-4xl lg:text-5xl font-bold mb-1 text-brand-dark">
                <AnimatedCounter from={0} to={500} />+
              </div>
              <div className="text-base md:text-lg font-medium text-brand-dark/70 text-right">Happy Customers</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white rounded-3xl p-6 md:p-8 flex flex-col items-end justify-end shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-h-[220px] md:min-h-[280px]"
            >
              <div className="text-4xl lg:text-5xl font-bold mb-1 text-brand-dark">
                <AnimatedCounter from={0} to={1000} />+
              </div>
              <div className="text-base md:text-lg font-medium text-brand-dark/70 text-right">Units Sold</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-white rounded-3xl p-6 md:p-8 flex flex-col items-end justify-end shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-h-[220px] md:min-h-[280px]"
            >
              <div className="text-4xl lg:text-5xl font-bold mb-1 text-brand-dark">
                <AnimatedCounter from={0} to={500} />+
              </div>
              <div className="text-base md:text-lg font-medium text-brand-dark/70 text-right">Happy Customers</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-white rounded-3xl p-6 md:p-8 flex flex-col items-end justify-end shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-h-[220px] md:min-h-[280px]"
            >
              <div className="text-4xl lg:text-5xl font-bold mb-1 text-brand-dark">
                <AnimatedCounter from={0} to={1000} />+
              </div>
              <div className="text-base md:text-lg font-medium text-brand-dark/70 text-right">Units Sold</div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
