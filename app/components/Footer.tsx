'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-brand-brown text-[#F8F3EB] relative overflow-hidden pt-32 pb-12">
      {/* SVG Grid & Pattern Background */}


      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">

        {/* Large Typography Section (CTA) */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center gap-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight flex flex-col gap-2">
              <span className="font-light">Experience the</span>
              <span className="font-medium">Authentic Taste of Inji Curry</span>
            </h2>

            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-light mt-2 mb-8">
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

        {/* Minimal Footer Row */}
        <div className="w-full mt-24 pt-12 border-t border-[#F8F3EB]/10 flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Logo Side */}
          <div className="flex items-center gap-8">
            <div className="relative w-24 h-24">
              <Image
                src="/images/footer.png"
                alt="Haritham Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="h-8 w-px bg-[#F8F3EB]/20 hidden md:block"></div>
            <span className="hidden md:block text-sm font-medium tracking-widest opacity-60 uppercase">
              Haritham Kitchens
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-8">
            {['Product', 'Story', 'Terms', 'Privacy'].map((item) => (
              <Link
                key={item}
                href={item === 'Terms' ? '/terms' : item === 'Privacy' ? '/privacy-policy' : `#${item.toLowerCase()}`}
                className="text-sm font-bold uppercase tracking-[0.2em] hover:text-brand-primary transition-colors font-sans"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Copyright Side */}
          <div className="text-sm opacity-40 font-medium text-center md:text-right">
            © 2026 Haritham Kitchens. <br className="md:hidden" />
            <span className="md:ml-2">Crafted with tradition.</span>
          </div>

        </div>

      </div>
    </footer>
  );
}

