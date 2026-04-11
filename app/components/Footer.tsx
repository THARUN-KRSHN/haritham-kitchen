'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <footer className="bg-brand-primary text-white pt-20 pb-8 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-16"
        >
          {/* Left: Logo Card */}
          <motion.div variants={itemVariants} className="flex-shrink-0">
            <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-lg w-full max-w-sm lg:w-[320px] aspect-square flex items-center justify-center">
              <div className="relative w-full h-32">
                <Image
                  src="/images/footer.png"
                  alt="Haritham Kitchen Logo"
                  fill
                  sizes="(max-width: 768px) 150vw, 300px"
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Links & Contact */}
          <motion.div variants={itemVariants} className="flex-grow flex flex-col md:flex-row gap-12 md:gap-32 pt-8">

            {/* Quick Links */}
            <div>
              <h3 className="text-white/80 font-medium mb-6">Quick Links</h3>
              <ul className="space-y-3 font-light">
                {['Home', 'About', 'Product', 'Testimonials', 'Contact', 'Terms and Conditions', 'Privacy Policy'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-white/70"></span>
                    <Link
                      href={item === 'Terms and Conditions' ? '/terms' : item === 'Privacy Policy' ? '/privacy-policy' : `#${item.toLowerCase()}`}
                      className="text-white hover:text-brand-mint transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white/80 font-medium mb-6">Contact</h3>
              <ul className="space-y-3 font-light">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-white/70"></span>
                  <a href="tel:+919876543210" className="text-white hover:text-brand-mint transition-colors">
                    +91 98765 43210
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-white/70"></span>
                  <a href="mailto:hello@harithamkitchens.com" className="text-white hover:text-brand-mint transition-colors break-all hidden sm:inline-block">
                    hello@harithamkitchens.com
                  </a>
                  <a href="mailto:hello@harithamkitchens.com" className="text-white hover:text-brand-mint transition-colors sm:hidden block leading-tight">
                    hello@<br />harithamkitchens.com
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center md:text-left mb-6 px-2 text-white/90 font-light"
        >
          Bringing authentic Kerala flavors to your home, one jar at a time.
        </motion.div>

        {/* Large Watermark Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full relative"
        >
          <span className="block text-[12vw] md:text-[140px] lg:text-[180px] font-black text-white leading-[0.8] select-none tracking-tight text-center md:text-left">
            HARITHAM KITCHEN
          </span>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-white/20 text-center">
          <p className="text-white/70 text-sm font-light">
            © 2026 Haritham Kitchens. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
