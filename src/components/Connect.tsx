/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Linkedin, ArrowUpRight, Send, Mail, MapPin, CheckCircle2 } from 'lucide-react';

export default function Connect() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    setIsSubmitting(true);
    // Simulate premium message delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1800);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      subject: 'General Inquiry',
      message: '',
    });
  };

  const socialLinks = [
    {
      name: 'Instagram',
      handle: '@xurzkwt',
      url: 'https://instagram.com',
      icon: <Instagram className="w-5 h-5 text-gold group-hover:text-white transition-colors" />,
    },
    {
      name: 'LinkedIn',
      handle: 'Xurzkwt Fine-Art',
      url: 'https://linkedin.com',
      icon: <Linkedin className="w-5 h-5 text-gold group-hover:text-white transition-colors" />,
    },
    {
      name: 'Behance',
      handle: 'xurzkwt',
      url: 'https://behance.net',
      icon: <ArrowUpRight className="w-5 h-5 text-gold group-hover:text-white transition-colors" />,
    },
  ];

  return (
    <section
      id="connect"
      className="bg-[#0D0D0D] py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-white/[0.03] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative">
        
        {/* Contact info, addresses, socials - taking 5 cols */}
        <div className="lg:col-span-5 space-y-12 flex flex-col justify-between">
          <div className="space-y-6">
            <span className="font-mono text-[10px] text-gold tracking-widest uppercase block">
              Contact Matrix
            </span>
            <h3 className="font-serif text-4xl font-light text-white uppercase tracking-wider">
              Establish A <br />
              <span className="italic font-normal font-serif text-white/50">Connection</span>
            </h3>
            <p className="font-sans font-light text-sm text-white/50 leading-relaxed max-w-sm">
              Currently accepting global assignments, guest lectures, and gallery curated exhibitions for second-half 2026. Reviewing campaigns within 24–48 hours.
            </p>
          </div>

          {/* Core Studio Addresses - extremely high-end details */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-gold mt-1" />
              <div>
                <h5 className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                  Prague Studio (HQ)
                </h5>
                <p className="font-sans text-sm text-white font-light mt-0.5">
                  U Radnice 13/2, Staré Město<br />
                  110 00 Praha 1, Czech Republic
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-gold mt-1" />
              <div>
                <h5 className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                  Direct Inquiries
                </h5>
                <p className="font-sans text-sm text-white font-light mt-0.5">
                  inquire@xurzkwt.com
                </p>
              </div>
            </div>
          </div>

          {/* Social Links List with large aesthetic frames */}
          <div className="space-y-4">
            <h5 className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
              Digital Registers
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-white/[0.01] border border-white/5 hover:border-gold/30 hover:bg-white/[0.02] group transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    {social.icon}
                    <div>
                      <span className="font-sans text-xs font-semibold text-white group-hover:text-gold transition-colors block">
                        {social.name}
                      </span>
                      <span className="font-mono text-[9px] text-white/30 block">
                        {social.handle}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/20 group-hover:text-gold transition-transform duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Interactive Input Form - taking 7 cols */}
        <div className="lg:col-span-7 bg-white/[0.01] border border-white/5 p-8 md:p-12 relative flex flex-col justify-center">
          
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="contact-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8 h-full flex flex-col justify-between"
              >
                <div className="space-y-6">
                  
                  {/* Name Input Field */}
                  <div className="space-y-1 relative">
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="What is your name? *"
                      className="w-full bg-transparent border-b border-white/10 text-white font-sans text-sm py-4 outline-none transition-all duration-300 focus:border-gold placeholder-white/30 focus:placeholder-white/10"
                    />
                  </div>

                  {/* Email Input Field */}
                  <div className="space-y-1 relative">
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="What is your email address? *"
                      className="w-full bg-transparent border-b border-white/10 text-white font-sans text-sm py-4 outline-none transition-all duration-300 focus:border-gold placeholder-white/30 focus:placeholder-white/10"
                    />
                  </div>

                  {/* Subject Line Select Selector */}
                  <div className="space-y-2 pt-2">
                    <label className="block font-mono text-[9px] tracking-widest text-[#BF9B30] uppercase">
                      Select Topic Interest
                    </label>
                    <div className="relative">
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                        className="w-full bg-transparent border-b border-white/10 text-white font-sans text-sm py-3 outline-none focus:border-gold appearance-none rounded-none cursor-pointer"
                      >
                        <option value="General Inquiry" className="bg-[#0D0D0D]">General Studio Inquiry</option>
                        <option value="Private Portrait Session" className="bg-[#0D0D0D]">Private Portrait Session ($850+)</option>
                        <option value="Commercial Campaign" className="bg-[#0D0D0D]">Couture Brand Campaign ($2,400+)</option>
                        <option value="Exhibition/Fine Art" className="bg-[#0D0D0D]">Exhibition Curating / Guest Talks</option>
                      </select>
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-white/30 font-mono text-[9px]">
                        ▼
                      </div>
                    </div>
                  </div>

                  {/* Message Details Box */}
                  <div className="space-y-1 relative">
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Tell us about your brand narrative, timeline, and conceptual objectives... *"
                      className="w-full bg-transparent border-b border-white/10 text-white font-sans text-sm py-4 outline-none transition-all duration-300 focus:border-gold placeholder-white/30 focus:placeholder-white/10 resize-none"
                    />
                  </div>

                </div>

                {/* Confirm Submission Action Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold hover:bg-gold-dark text-black font-semibold font-sans uppercase tracking-[0.2em] text-xs py-4 px-8 transition-all duration-500 hover:tracking-[0.25em] flex items-center justify-center gap-3 group relative cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting Signals...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                        <span>Transmit Message</span>
                      </>
                    )}
                  </button>
                </div>

              </motion.form>
            ) : (
              <motion.div
                key="success-form"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-12 space-y-6 flex flex-col items-center"
              >
                <CheckCircle2 className="w-16 h-16 text-gold mb-2" />
                <h4 className="font-serif text-2xl text-white uppercase tracking-wider">
                  Transmission Secure
                </h4>
                <p className="font-sans font-light text-sm text-white/50 max-w-sm leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{formData.name}</span>. Your visual manifesto was routed safely to Prague. Xurzkwt's team will contact you at <span className="text-white font-semibold">{formData.email}</span> shortly.
                </p>

                <div className="p-4 bg-white/[0.02] border border-white/5 w-full max-w-xs text-left font-mono text-[10px] text-white/60 space-y-1.5">
                  <div className="flex justify-between"><span className="text-white/40">TRANS CODE:</span> <span>XMT-{(Math.random() * 10000).toFixed(0)}</span></div>
                  <div className="flex justify-between"><span className="text-white/40">STATUS:</span> <span className="text-gold">SENT (UTC)</span></div>
                  <div className="flex justify-between"><span className="text-white/40">TIMESTAMP:</span> <span>{new Date().toISOString().slice(0, 16).replace('T', ' ')}</span></div>
                </div>

                <button
                  onClick={handleReset}
                  className="font-mono text-[9px] text-[#BF9B30] hover:text-white uppercase tracking-widest border border-gold/30 hover:border-white px-5 py-2.5 transition-all duration-300 cursor-pointer"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
