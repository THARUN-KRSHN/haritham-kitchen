'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Product', href: '#product' },
  { name: 'Shops', href: '#shops' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple scroll spy
      const sections = navLinks.map(link => link.name.toLowerCase());
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="absolute top-4 left-1/2 -translate-x-1/2 w-[92%] z-50 px-6 md:px-8 py-3 bg-white rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
      <div className="flex items-center justify-between h-14 md:h-16 relative">
      
        {/* Logo */}
        <div className="flex-shrink-0 lg:w-[220px]">
          <Link href="#home" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Haritham Kitchen Logo"
              width={200}
              height={50}
              className="w-auto h-8 md:h-10 lg:h-12 object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Nav Centered */}
        <div className="hidden lg:flex items-center justify-center space-x-10 flex-grow">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-brand-dark font-medium hover:text-brand-primary transition-colors text-sm uppercase tracking-wider"
              >
                {link.name}
                {activeSection === link.name.toLowerCase() && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 top-full h-0.5 w-full bg-brand-primary mt-1"
                  />
                )}
              </Link>
            ))}
        </div>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center justify-end lg:w-[220px] gap-4">
          <Link
            href="#product"
            className="hidden sm:inline-flex items-center justify-center px-8 py-2.5 border border-transparent rounded-full shadow-sm text-[15px] font-medium text-white bg-[#3f9e31] hover:bg-[#2b7c1f] focus:outline-none transition-colors min-h-[44px]"
          >
            Order Now
          </Link>
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-brand-dark hover:text-brand-primary hover:bg-brand-mint/50 focus:outline-none min-h-[44px] min-w-[44px]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full bg-brand-offwhite shadow-lg border-t border-brand-mint/20"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-4 text-base font-medium rounded-md transition-colors min-h-[44px] ${activeSection === link.name.toLowerCase()
                    ? 'bg-brand-mint text-brand-primary'
                    : 'text-brand-dark hover:bg-brand-cream hover:text-brand-primary'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href="#product"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-brand-primary hover:bg-brand-deep transition-colors min-h-[44px]"
                >
                  Order Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
