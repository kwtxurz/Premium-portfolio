/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Plus } from 'lucide-react';
import { freelancerName } from '../data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scrolling to add background blur
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Selected Work', href: '#selected-work' },
    { label: 'Services', href: '#services' },
    { label: 'Connect', href: '#connect' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        id="main-navigation"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-in-out py-6 md:py-8 px-6 md:px-12 lg:px-24 ${
          scrolled ? 'bg-[#0D0D0D]/90 backdrop-blur-md border-b border-white/5 py-4 md:py-5' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo / Freelancer's Name */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group block relative focus:outline-none"
          >
            <h1 className="font-serif text-xl md:text-2xl font-light text-white tracking-[0.2em] transition-all duration-500 group-hover:text-gold uppercase">
              {freelancerName}
            </h1>
            <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-gold group-hover:w-full transition-all duration-500" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12" aria-label="Desktop principal navigation">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="font-sans font-medium text-xs text-white/70 hover:text-white uppercase tracking-[0.2em] relative py-1 transition-colors duration-300 group focus:outline-none focus:text-gold"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#connect"
              onClick={(e) => handleLinkClick(e, '#connect')}
              className="border border-gold text-gold hover:bg-gold hover:text-black font-sans font-semibold uppercase tracking-[0.15em] text-[10px] px-5 py-2.5 transition-all duration-500"
            >
              Consult Studio
            </a>
          </nav>

          {/* Mobile Hamburguer Action */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-gold transition-colors p-1.5 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-[#0D0D0D] z-30 flex flex-col justify-center px-8 md:px-16"
          >
            {/* Elegant Background Branding */}
            <div className="absolute right-0 bottom-0 opacity-[0.02] pointer-events-none select-none">
              <span className="font-serif text-[12vw] leading-none uppercase select-none italic text-white font-bold block pr-4">
                S H A R M A
              </span>
            </div>

            {/* Menu Items */}
            <nav className="space-y-8 flex flex-col text-left" aria-label="Mobile Navigation">
              {menuItems.map((item, idx) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="font-serif text-3xl font-light text-white/80 hover:text-gold uppercase tracking-wider block focus:outline-none"
                  >
                    {item.label}
                  </a>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: menuItems.length * 0.1, duration: 0.5 }}
                className="pt-6"
              >
                <a
                  href="#connect"
                  onClick={(e) => handleLinkClick(e, '#connect')}
                  className="bg-gold text-black hover:bg-transparent hover:text-gold border border-gold font-sans font-bold uppercase tracking-[0.2em] text-xs py-4 px-8 inline-block transition-all duration-300"
                >
                  Book Consultation
                </a>
              </motion.div>
            </nav>

            {/* Social Grid or Studio Contact Meta on bottom */}
            <div className="absolute bottom-12 left-8 right-8 flex justify-between items-center text-white/40 font-mono text-[9px] uppercase tracking-wider border-t border-white/5 pt-6">
              <span>XURZKWT © 2026</span>
              <span>Available Globally</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
