/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { freelancerName } from '../data';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="bg-[#0D0D0D] border-t border-white/5 py-12 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Branding copyright */}
        <div className="text-center md:text-left space-y-1">
          <p className="font-mono text-[10px] text-white/40 tracking-widest uppercase">
            © {new Date().getFullYear()} {freelancerName.toUpperCase()}. ALL RIGHTS RESERVED.
          </p>
          <p className="font-sans text-[10px] text-white/20">
            Coded with uncompromised minimalism & editorial grids.
          </p>
        </div>

        {/* Center: Curated fine-print logo */}
        <div className="hidden lg:block">
          <span className="font-serif italic text-sm tracking-[0.25em] text-white/20 select-none uppercase">
            {freelancerName} Studio
          </span>
        </div>

        {/* Right Side: Back to top text action */}
        <button
          onClick={handleScrollToTop}
          className="group flex items-center gap-2 font-mono text-[9px] text-[#BF9B30] hover:text-white uppercase tracking-[0.2em] transition-colors duration-300 focus:outline-none cursor-pointer"
          aria-label="Scroll back to top of portfolio"
        >
          <span>Back To Top</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform duration-300" />
        </button>

      </div>
    </footer>
  );
}
