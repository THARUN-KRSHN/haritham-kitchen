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
    <section className="py-16 bg-brand-dark text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          
          {/* Brand Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-2 md:col-span-1 bg-brand-brown rounded-2xl p-6 flex flex-col justify-center items-center md:items-start select-none"
          >
             <div className="relative w-16 h-16 bg-white rounded-full p-2 mb-4">
                <Image
                  src="/images/logo.png"
                  alt="Haritham Kitchen Logo"
                  fill
                  sizes="64px"
                  className="object-contain p-2"
                />
             </div>
            <span className="text-sm font-medium uppercase tracking-wider text-brand-cream/80">
              in a few numbers
            </span>
          </motion.div>

          {/* Stat Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-white/10"
          >
            <div className="text-4xl lg:text-5xl font-bold mb-2 text-brand-mint">
              <AnimatedCounter from={0} to={500} />+
            </div>
            <div className="text-sm md:text-base font-medium text-white/80">Happy Customers</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-white/10"
          >
            <div className="text-4xl lg:text-5xl font-bold mb-2 text-brand-mint">
              <AnimatedCounter from={0} to={1000} />+
            </div>
            <div className="text-sm md:text-base font-medium text-white/80">Units Sold</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-white/10"
          >
            <div className="text-4xl lg:text-5xl font-bold mb-2 text-brand-mint">
              <AnimatedCounter from={0} to={10} />+
            </div>
            <div className="text-sm md:text-base font-medium text-white/80">Shops Statewide</div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
