/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { freelancerTitle } from '../data';

export default function Hero() {
  const handleScrollToWork = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const workSection = document.getElementById('selected-work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#0D0D0D] flex items-center justify-center pt-28 pb-16 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Decorative vertical lines representing structural editorial margins */}
      <div className="absolute left-[8%] top-0 bottom-0 w-[1px] bg-white/[0.02]" />
      <div className="absolute right-[8%] top-0 bottom-0 w-[1px] bg-white/[0.02]" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Editorial Text Blocks - taking 7 cols on large desktop */}
        <div className="lg:col-span-7 flex flex-col space-y-8 md:space-y-12">
          
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex items-center gap-3"
          >
            <span className="w-8 h-[1px] bg-gold" />
            <span className="font-mono text-xs text-gold/80 uppercase tracking-[0.3em]">
              {freelancerTitle}
            </span>
          </motion.div>

          {/* Large Typography Title */}
          <div className="space-y-2">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-light leading-[1.08] text-white tracking-wide uppercase"
            >
              Capturing <br />
              <span className="italic font-normal font-serif text-white/50">Authentic</span> <br />
              Moments
            </motion.h2>
          </div>

          {/* Subtext description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans font-light text-sm sm:text-base text-white/60 leading-relaxed max-w-lg"
          >
            Xurzkwt bridges haute-couture elegance and cinematic reportage. Creating stark visual architectures that honor shadow, texture, and pure unfiltered gravity over trend. Based in Prague, available worldwide for fine art exhibitions and private campaigns.
          </motion.p>

          {/* Thin-bordered gold button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <button
              onClick={handleScrollToWork}
              className="border border-gold hover:bg-gold text-gold hover:text-black font-sans font-semibold uppercase tracking-[0.2em] text-xs py-4 px-10 transition-all duration-500 hover:scale-[1.02] shadow-xl group relative overflow-hidden flex items-center gap-2 cursor-pointer"
            >
              <span>View Selected Work</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
            <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">
              <span>EST. 2018</span>
              <span>•</span>
              <span>ARCHIVAL STANDARD</span>
            </div>
          </motion.div>
        </div>

        {/* Dramatic vertical model portrait image placeholder - taking 5 cols */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex justify-center w-full"
        >
          {/* Minimalist framing shadow ring */}
          <div className="absolute inset-x-0 -bottom-6 top-6 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none" />
          
          {/* Framed Graphic Container */}
          <div className="relative aspect-[3/4] w-full max-w-[360px] lg:max-w-none border border-white/10 p-2 bg-white/[0.01]">
            <div className="absolute top-4 left-4 font-mono text-[9px] text-white/40 tracking-widest uppercase z-10">
              FRAME M-1
            </div>
            
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=85&w=800"
              alt="Model posing in dramatic studio shadows"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale contrast-[1.12] brightness-[0.9] saturate-0 hover:grayscale-0 hover:brightness-100 transition-all duration-[1200ms] ease-out select-none"
            />
            
            {/* Architectural Label on Bottom Right inside frame */}
            <div className="absolute bottom-4 right-4 text-right z-10 mix-blend-difference">
              <p className="font-mono text-[9px] text-white/60 uppercase tracking-widest">
                PRAGUE STUDIO
              </p>
              <p className="font-mono text-[8px] text-white/40 uppercase">
                LAT: 50.0755° N
              </p>
            </div>
          </div>
          
          {/* Backdrop Blur Ring behind frame representing sunlight */}
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-gold/5 rounded-full filter blur-[100px] pointer-events-none" />
        </motion.div>
        
      </div>

      {/* Interactive Micro Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <span className="font-mono text-[8px] text-white tracking-[0.3em] uppercase block">
          Scroll Down
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 48, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute top-0 left-0 right-0 h-4 bg-gold"
          />
        </div>
      </div>
    </section>
  );
}
