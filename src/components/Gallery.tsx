/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Maximize2, Info } from 'lucide-react';
import { portfolioItems } from '../data';
import { PortfolioItem } from '../types';

export default function Gallery() {
  const [activeItemIdx, setActiveItemIdx] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = ['All', 'Editorial', 'Fashion', 'Portraiture', 'Architecture', 'Minimalism'];

  const filteredItems = activeTab === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeTab);

  const openLightbox = (item: PortfolioItem) => {
    const originalIndex = portfolioItems.findIndex(x => x.id === item.id);
    setActiveItemIdx(originalIndex);
  };

  const closeLightbox = () => {
    setActiveItemIdx(null);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeItemIdx !== null) {
      const nextIndex = (activeItemIdx + 1) % portfolioItems.length;
      setActiveItemIdx(nextIndex);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeItemIdx !== null) {
      const prevIndex = (activeItemIdx - 1 + portfolioItems.length) % portfolioItems.length;
      setActiveItemIdx(prevIndex);
    }
  };

  // Safe reference for the currently chosen image inside the lightbox
  const selectedItem = activeItemIdx !== null ? portfolioItems[activeItemIdx] : null;

  return (
    <section
      id="selected-work"
      className="bg-[#0D0D0D] py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-white/[0.03]"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Gallery Section Header & Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 pb-8">
          <div className="space-y-3">
            <span className="font-mono text-[10px] text-gold tracking-widest uppercase block">
              Curated Series
            </span>
            <h3 className="font-serif text-3xl md:text-4xl font-light text-white uppercase tracking-wider">
              Selected Work
            </h3>
          </div>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 md:gap-4 md:max-w-xl">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`font-sans text-[10px] md:text-xs font-semibold uppercase tracking-widest px-4 py-2 border transition-all duration-300 pointer-events-auto cursor-pointer ${
                  activeTab === category
                    ? 'border-gold text-[#0D0D0D] bg-gold'
                    : 'border-white/10 text-white/60 hover:text-white hover:border-white/40'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Elegant Masonry-Style Column Layout */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6 }}
                className="break-inside-avoid relative group overflow-hidden border border-white/[0.05] p-2 bg-white/[0.01]/[0.01] hover:border-gold/30 transition-all duration-500 cursor-pointer"
                onClick={() => openLightbox(item)}
              >
                {/* Visual Image Shell */}
                <div className="relative overflow-hidden aspect-auto">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover grayscale contrast-[1.08] saturate-0 hover:grayscale-0 group-hover:scale-[1.05] group-hover:contrast-100 group-hover:saturate-100 transition-all duration-[800ms] ease-in-out"
                  />
                  
                  {/* Subtle Interactive Screen-Overlay with minimal detail */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out space-y-1">
                      <p className="font-mono text-[9px] text-gold tracking-widest uppercase">
                        {item.category}
                      </p>
                      <h4 className="font-serif text-lg tracking-wider text-white uppercase font-light">
                        {item.title}
                      </h4>
                      <div className="flex items-center justify-between font-mono text-[9px] text-white/40 pt-2 border-t border-white/10 mt-2">
                        <span>{item.dimensions}</span>
                        <span>{item.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* Click Expand Prompt Button */}
                  <div className="absolute top-4 right-4 p-2 bg-[#0D0D0D]/80 border border-white/10 text-white opacity-0 group-hover:opacity-100 transform translate-y-[-10px] group-hover:translate-y-0 transition-all duration-400">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Informational Accent Quote */}
        <div className="pt-8 text-center max-w-xl mx-auto">
          <p className="font-serif italic text-sm md:text-base text-white/40 leading-relaxed">
            “Each photograph is a silent conversation between the lens and the quiet grid of the absolute.”
          </p>
        </div>

      </div>

      {/* Cinematic Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div id="gallery-lightbox" className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md overflow-hidden select-none">
            
            {/* Dark Backdrop for dismissal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="absolute inset-0 cursor-zoom-out"
            />

            {/* Upper Navigation Indicator Panel */}
            <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10 text-white">
              <div className="font-mono text-[10px] tracking-widest text-white/50 uppercase">
                SELECTED PIECE: {activeItemIdx !== null ? activeItemIdx + 1 : 0} OF {portfolioItems.length}
              </div>
              <button
                onClick={closeLightbox}
                className="p-2.5 text-white/50 hover:text-gold hover:rotate-90 transition-all duration-300 focus:outline-none"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Interactive Frame Wrapper */}
            <div className="relative w-full max-w-5xl h-full flex items-center justify-center p-6 md:p-12">
              
              {/* Previous Image Trigger */}
              <button
                onClick={handlePrev}
                className="absolute left-4 md:left-8 p-3 bg-white/[0.02] border border-white/10 text-white hover:text-gold hover:bg-white/[0.05] transition-all duration-300 focus:outline-none z-10 cursor-pointer"
                aria-label="Previous portfolio piece"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Central Focused Image Frame with layout zoom animations */}
              <motion.div
                key={selectedItem.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative max-h-[75vh] max-w-full flex justify-center items-center p-1.5 border border-white/10 bg-[#0D0D0D]"
              >
                <img
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  referrerPolicy="no-referrer"
                  className="max-h-[70vh] max-w-full object-contain select-none grayscale-0 saturate-100 hover:contrast-105 transition-all duration-300"
                />

                {/* Left Floating Metadata Details Label */}
                <div className="absolute bottom-4 left-4 bg-black/80 px-4 py-2 border border-white/10 font-mono text-[9px] uppercase tracking-widest text-white/80 hidden sm:block">
                  {selectedItem.dimensions}
                </div>
              </motion.div>

              {/* Next Image Trigger */}
              <button
                onClick={handleNext}
                className="absolute right-4 md:right-8 p-3 bg-white/[0.02] border border-white/10 text-white hover:text-gold hover:bg-white/[0.05] transition-all duration-300 focus:outline-none z-10 cursor-pointer"
                aria-label="Next portfolio piece"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Panel Metadata Summary */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-6 left-6 right-6 border-t border-white/10 pt-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-white uppercase"
            >
              <div className="text-center sm:text-left">
                <span className="font-mono text-[9px] text-gold tracking-widest block mb-0.5">{selectedItem.category}</span>
                <h4 className="font-serif text-xl tracking-widest font-normal">{selectedItem.title}</h4>
              </div>

              <div className="flex items-center gap-6 font-mono text-[9px] text-white/50 tracking-widest">
                <div className="flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-gold" />
                  <span>YEAR: {selectedItem.year}</span>
                </div>
                <span>ORIGIN: EUR DIGITAL/FILM</span>
              </div>
            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
