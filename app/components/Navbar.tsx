'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, RotateCcw, Heart, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  // Prevent scroll when a drawer is open
  useEffect(() => {
    if (navOpen || wishlistOpen || cartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [navOpen, wishlistOpen, cartOpen]);

  const closeAll = () => {
    setNavOpen(false);
    setWishlistOpen(false);
    setCartOpen(false);
  };

  // Shared Stagger Animation
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-40 px-6 py-6 md:px-10 flex items-center justify-between pointer-events-none">

        {/* Left Side: Icons */}
        <div className="flex items-center gap-6 pointer-events-auto">
          <button
            onClick={() => setNavOpen(true)}
            className="text-white hover:text-white/70 transition-colors p-1 group"
            aria-label="Open navigation menu"
          >
            <Menu strokeWidth={1} className="w-7 h-7 group-hover:scale-105 transition-transform" />
          </button>
          <button
            className="text-white hover:text-white/70 transition-colors p-1 hidden sm:block group"
            aria-label="History"
          >
            <RotateCcw strokeWidth={1} className="w-6 h-6 group-hover:scale-105 transition-transform" />
          </button>
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 pointer-events-auto mix-blend-screen opacity-90 hover:opacity-100 transition-opacity">
          <Link href="#home">
            <Image
              src="/images/logo.png"
              alt="Haritham"
              width={180}
              height={45}
              className="w-auto h-8 md:h-12 object-contain "
              priority
            />
          </Link>
        </div>

        {/* Right Side: Icons */}
        <div className="flex items-center gap-6 pointer-events-auto">
          <button
            onClick={() => setWishlistOpen(true)}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-105"
            aria-label="Wishlist"
          >
            <Heart strokeWidth={1.5} className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCartOpen(true)}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex border border-white/10 items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-105"
            aria-label="Cart"
          >
            <ShoppingBag strokeWidth={1.5} className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* OVERLAYS & MODALS */}
      <AnimatePresence>
        {/* Background Dark Overlay for any open modal */}
        {(navOpen || wishlistOpen || cartOpen) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={closeAll}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 cursor-pointer"
          />
        )}

        {/* Side Navigation Panel */}
        {navOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: "tween", duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed top-0 left-0 h-full w-[90%] max-w-sm bg-[#fcfbf9] shadow-2xl z-50 flex flex-col pt-8 px-8 pb-12 overflow-y-auto"
          >
            <button onClick={closeAll} className="self-end text-brand-dark/50 hover:text-brand-dark mb-12">
              <X strokeWidth={1.5} className="w-8 h-8" />
            </button>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-6"
            >
              <motion.div variants={itemVariants}>
                <Link href="#selection" onClick={closeAll} className="text-3xl font-serif text-brand-dark hover:opacity-70 transition-opacity">
                  My Selecti<span className="italic">o</span>n
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="#wishlist" onClick={closeAll} className="text-3xl font-serif text-brand-dark hover:opacity-70 transition-opacity">
                  My W<span className="italic">i</span>shlist
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="#journey" onClick={closeAll} className="text-3xl font-serif text-brand-dark hover:opacity-70 transition-opacity">
                  My J<span className="italic">o</span>urney
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-16 flex flex-col gap-4 text-sm tracking-wide"
            >
              <Link href="#tutorial" className="text-brand-dark/70 hover:text-brand-dark transition-colors">Tutorial</Link>
              <div className="flex items-center gap-1 group">
                <Link href="#contact" className="text-brand-dark/70 group-hover:text-brand-dark transition-colors">Contact us</Link>
                <svg className="w-3 h-3 text-brand-dark/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </div>

              <div className="flex items-center gap-1 mt-6 group">
                <Link href="#store" className="text-brand-dark/70 group-hover:text-brand-dark transition-colors text-xs font-serif italic">Back to the classic Online Boutique</Link>
                <svg className="w-3 h-3 text-brand-dark/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
              className="mt-auto pt-10 flex gap-6 text-[10px] uppercase tracking-widest text-brand-dark/50"
            >
              <Link href="#" className="hover:text-brand-dark transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-brand-dark transition-colors">Terms and Conditions</Link>
              <Link href="#" className="hidden sm:inline hover:text-brand-dark transition-colors">Cookies Policy</Link>
            </motion.div>
          </motion.div>
        )}

        {/* Wishlist Panel right side modal styling */}
        {wishlistOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ type: "tween", duration: 0.5 }}
            className="fixed inset-x-0 bottom-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:left-1/2 md:-translate-x-1/2 
                         w-full md:w-[600px] h-[50vh] md:h-auto md:min-h-[400px] bg-transparent
                         z-50 flex flex-col items-center justify-center pointer-events-none"
          >
            <div className="flex flex-col items-center pointer-events-auto mt-[-10vh]">
              <motion.p
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                className="text-[#e8e6e1] text-sm tracking-wide mb-6"
              >
                Your Wishlist is empty
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-5xl font-serif text-white text-center max-w-lg mb-12 leading-snug px-4"
              >
                “The essence of beauty dwells at the heart of all things.”
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
                className="flex items-center"
              >
                <button className="bg-white text-brand-dark px-6 py-3 rounded-l-full text-sm font-medium hover:bg-[#f2f0ea] transition-colors border-r border-[#e0e0e0]">
                  Start your Wishlist
                </button>
                <button onClick={closeAll} className="bg-white text-brand-dark px-4 py-3 rounded-r-full hover:bg-[#f2f0ea] transition-colors flex items-center justify-center">
                  <X strokeWidth={1.5} className="w-5 h-5" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Cart Panel (Slide from Right) */}
        {cartOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "tween", duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed top-0 right-0 h-full w-[90%] max-w-md bg-[#fcfbf9] shadow-2xl z-50 flex flex-col pt-8 px-6 md:px-10 pb-12 overflow-y-auto"
          >
            <div className="flex items-center justify-between font-serif text-brand-dark mb-16">
              <h3 className="text-xl">Your selection (0)</h3>
              <button onClick={closeAll} className="text-brand-dark/50 hover:text-brand-dark">
                <X strokeWidth={1} className="w-7 h-7" />
              </button>
            </div>

            <div className="flex-grow flex flex-col items-center justify-center text-center -mt-10">
              <motion.p
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="text-brand-dark/70 text-sm tracking-wide mb-6"
              >
                The selection is empty
              </motion.p>

              <motion.h4
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
                className="text-3xl font-serif text-brand-dark leading-snug px-4"
              >
                “Elegance emerges in the space where idea, form, and matter converge.”
              </motion.h4>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </>
  );
}
