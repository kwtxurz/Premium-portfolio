/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { services } from '../data';
import { ServiceItem } from '../types';
import { Sparkles, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onBookService: (service: ServiceItem) => void;
}

export default function Services({ onBookService }: ServicesProps) {
  return (
    <section
      id="services"
      className="bg-[#0D0D0D] py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-white/[0.03]"
    >
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Services Title and Description */}
        <div className="space-y-4 text-center md:text-left">
          <span className="font-mono text-[10px] text-gold tracking-widest uppercase block">
            Aesthetic Partnerships
          </span>
          <h3 className="font-serif text-3xl md:text-4xl font-light text-white uppercase tracking-wider">
            Available Experiences & Services
          </h3>
          <p className="font-sans font-light text-sm text-white/50 max-w-2xl leading-relaxed">
            Every partnership begins with deep conceptual dialogues. Whether you are standardizing lookup systems for high-fashion runway shows or preserving fine art portraits, Xurzkwt maintains an uncompromising archival standard.
          </p>
        </div>

        {/* List of Services - Not Cards */}
        <div className="border-t border-white/10 divide-y divide-white/10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="py-12 flex flex-col md:flex-row md:items-start justify-between gap-8 group"
            >
              
              {/* Item Details Block */}
              <div className="space-y-4 flex-grow max-w-2xl">
                
                {/* Heading & Meta Metadata Details */}
                <div className="flex flex-wrap items-baseline gap-4">
                  <span className="font-mono text-xs text-gold">0{index + 1}</span>
                  <h4 className="font-serif text-2xl font-light text-white uppercase tracking-normal">
                    {service.title}
                  </h4>
                  <span className="font-mono text-xs text-white/30 hidden sm:inline">•</span>
                  <span className="font-mono text-xs text-white/40 uppercase tracking-widest">
                    SESSION LENGTH: {service.duration}
                  </span>
                </div>

                {/* Service Description paragraph */}
                <p className="font-sans font-light text-sm text-white/70 leading-relaxed">
                  {service.description}
                </p>

                {/* Deliverables Bullet List (Subtle Accordion or expanded subdetails) */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 pt-2" aria-label="Deliverables catalog">
                  {service.deliverables.map((deliverable, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2 text-white/45 font-sans text-xs">
                      <span className="text-gold mt-1">•</span>
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>

                {/* Booking Trigger Button placement below each item - as specified */}
                <div className="pt-4">
                  <button
                    onClick={() => onBookService(service)}
                    className="border border-gold text-gold hover:bg-gold hover:text-black font-sans font-semibold uppercase tracking-[0.2em] text-[10px] py-2.5 px-6 transition-all duration-[400ms] hover:tracking-[0.25em] flex items-center gap-2 cursor-pointer"
                  >
                    <span>Book Session</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </button>
                </div>

              </div>

              {/* Price Details - Large and beautiful on right */}
              <div className="text-left md:text-right flex flex-col md:items-end justify-between self-stretch pt-2">
                <div>
                  <span className="font-mono text-xs text-white/30 block mb-1">INVESTMENT RATE</span>
                  <span className="font-serif text-3xl font-light text-white tracking-tight">
                    {service.price}
                  </span>
                </div>
                <div className="hidden md:block font-mono text-[9px] text-[#BF9B30] tracking-widest uppercase">
                  ✓ LIMITED BOOKINGS
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Sizing & Packaging Disclaimer Label */}
        <div className="flex flex-col sm:flex-row justify-between items-center bg-white/[0.01] border border-white/5 p-6 space-y-4 sm:space-y-0 text-center sm:text-left">
          <div className="space-y-1">
            <h5 className="font-serif text-sm text-white uppercase tracking-wider">Custom Campaigns / Commercial Packages</h5>
            <p className="font-sans text-xs text-white/50">Requires detailed storyboard submission & commercial scheduling agreements.</p>
          </div>
          <a
            href="#connect"
            onClick={(e) => {
              e.preventDefault();
              const contactSec = document.getElementById('connect');
              if (contactSec) {
                contactSec.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="font-mono text-xs text-gold uppercase tracking-wider hover:text-white transition-colors flex items-center gap-2"
          >
            <span>Inquire Directly</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
