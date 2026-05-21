/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Connect from './components/Connect';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import { services } from './data';
import { ServiceItem } from './types';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Trigger loading screen animation for high-end boutique entrance feel
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1400);
    return () => clearTimeout(timer);
  }, []);

  const handleBookService = (service: ServiceItem) => {
    setSelectedService(service);
    setIsBookingOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#0D0D0D] text-white selection:bg-gold selection:text-[#0D0D0D]">
      
      {/* 1. Fullscreen Luxury Splash Preloader */}
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0D0D0D]"
          >
            <div className="space-y-4 text-center">
              {/* Premium minimal text loader */}
              <motion.h1
                initial={{ opacity: 0, tracking: '0.4em' }}
                animate={{ opacity: 1, tracking: '0.25em' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="font-serif text-2xl md:text-3xl font-light text-white uppercase tracking-[0.25em]"
              >
                XURZKWT
              </motion.h1>
              <div className="flex items-center justify-center gap-1.5">
                <span className="font-mono text-[9px] text-[#BF9B30] tracking-[0.2em] uppercase">
                  Studio Portfolio
                </span>
                <span className="w-1.5 h-[1px] bg-[#BF9B30]/50" />
                <span className="font-mono text-[9px] text-[#BF9B30]/60 tracking-[0.2em] uppercase">
                  v2.026
                </span>
              </div>
              
              {/* Ultra slow loading line bar */}
              <div className="w-36 h-[1px] bg-white/5 mx-auto relative overflow-hidden mt-4">
                <motion.div
                  initial={{ left: '-100%' }}
                  animate={{ left: '100%' }}
                  transition={{ duration: 1.4, ease: 'easeInOut' }}
                  className="absolute top-0 bottom-0 w-1/3 bg-gold"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Main Site Context wrapper */}
      <AnimatePresence>
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Header / Main Steering Navigation */}
            <Navbar />

            {/* Core Sections Grid */}
            <main id="main-content" className="relative">
              
              {/* Dynamic intro banner */}
              <Hero />

              {/* Selected Photographic portfolio projects in masonry */}
              <Gallery />

              {/* Pricing Packages list */}
              <Services onBookService={handleBookService} />

              {/* Secure single-line communication console */}
              <Connect />

            </main>

            {/* General copyright metadata and back-to-top widgets */}
            <Footer />

            {/* Interactive reservation drawer context */}
            <BookingModal
              isOpen={isBookingOpen}
              onClose={() => setIsBookingOpen(false)}
              selectedService={selectedService}
              services={services}
            />

          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
}
