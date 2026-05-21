/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, Sparkles, CheckCircle2 } from 'lucide-react';
import { ServiceItem } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService: ServiceItem | null;
  services: ServiceItem[];
}

export default function BookingModal({
  isOpen,
  onClose,
  selectedService,
  services,
}: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceId: selectedService?.id || services[0]?.id || '',
    preferredDate: '',
    timeSlot: '10:00 AM',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync service selection when modal opens or moves
  React.useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, serviceId: selectedService.id }));
    }
  }, [selectedService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.preferredDate) {
      return;
    }

    setIsSubmitting(true);
    // Simulate premium booking receipt generation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceId: selectedService?.id || services[0]?.id || '',
      preferredDate: '',
      timeSlot: '10:00 AM',
      notes: '',
    });
    onClose();
  };

  const currentServiceDetails = services.find((s) => s.id === formData.serviceId);

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="booking-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-end overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Drawer Sheet */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative h-full w-full max-w-xl bg-[#0D0D0D] border-l border-white/10 p-8 md:p-12 shadow-2xl flex flex-col justify-between overflow-y-auto"
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-8">
              <div>
                <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-1">
                  Reservation Form
                </span>
                <h3 className="text-2xl font-serif text-white uppercase tracking-tight">
                  Book A Session
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 -mr-2 text-white/50 hover:text-white transition-colors duration-200 focus:outline-none"
                aria-label="Close booking modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="booking-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="space-y-6 flex-grow"
                >
                  {/* Select Service */}
                  <div className="space-y-2">
                    <label className="block font-mono text-[10px] tracking-widest text-white/40 uppercase">
                      Select Experience
                    </label>
                    <div className="relative">
                      <select
                        name="serviceId"
                        value={formData.serviceId}
                        onChange={handleChange}
                        className="w-full bg-white/[0.03] border border-white/10 text-white font-sans text-sm px-4 py-3 focus:border-gold outline-none transition-all duration-300 appearance-none rounded-none"
                      >
                        {services.map((service) => (
                          <option key={service.id} value={service.id} className="bg-[#0D0D0D] text-white">
                            {service.title} ({service.price})
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/40 font-mono text-[10px]">
                        ▼
                      </div>
                    </div>
                  </div>

                  {/* Highlight of current service */}
                  {currentServiceDetails && (
                    <div className="p-4 bg-white/[0.02] border-l border-gold/40 text-xs text-white/60 font-sans italic">
                      {currentServiceDetails.description}
                    </div>
                  )}

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block font-mono text-[10px] tracking-widest text-white/40 uppercase">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-white/[0.03] border border-white/10 text-white font-sans text-sm px-4 py-3 focus:border-gold outline-none transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block font-mono text-[10px] tracking-widest text-white/40 uppercase">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-white/[0.03] border border-white/10 text-white font-sans text-sm px-4 py-3 focus:border-gold outline-none transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="block font-mono text-[10px] tracking-widest text-white/40 uppercase">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-white/[0.03] border border-white/10 text-white font-sans text-sm px-4 py-3 focus:border-gold outline-none transition-all duration-300"
                    />
                  </div>

                  {/* Date and Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block font-mono text-[10px] tracking-widest text-white/40 uppercase flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-gold" /> Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        required
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full bg-white/[0.03] border border-white/10 text-white font-sans text-sm px-4 py-3 focus:border-gold outline-none transition-all duration-300 color-scheme-dark"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block font-mono text-[10px] tracking-widest text-white/40 uppercase flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-gold" /> Time Preference
                      </label>
                      <div className="relative">
                        <select
                          name="timeSlot"
                          value={formData.timeSlot}
                          onChange={handleChange}
                          className="w-full bg-white/[0.03] border border-white/10 text-white font-sans text-sm px-4 py-3 focus:border-gold outline-none transition-all duration-300 appearance-none rounded-none"
                        >
                          <option value="10:00 AM" className="bg-[#0D0D0D] text-white">Morning (10:00 AM)</option>
                          <option value="01:00 PM" className="bg-[#0D0D0D] text-white">Midday (01:00 PM)</option>
                          <option value="04:00 PM" className="bg-[#0D0D0D] text-white">Golden Hour (04:00 PM)</option>
                          <option value="07:00 PM" className="bg-[#0D0D0D] text-white font-sans">Evening (07:00 PM)</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/40 font-mono text-[10px]">
                          ▼
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="space-y-2">
                    <label className="block font-mono text-[10px] tracking-widest text-white/40 uppercase">
                      Session Details / Notes
                    </label>
                    <textarea
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Share your moodboard concept, preferred locations, or styling thoughts..."
                      className="w-full bg-white/[0.03] border border-white/10 text-white font-sans text-sm px-4 py-3 focus:border-gold outline-none transition-all duration-300 resize-none"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 flex items-center gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-grow bg-gold hover:bg-gold-dark text-black font-semibold font-sans uppercase tracking-[0.15em] text-xs py-4 px-6 transition-all duration-[400ms] hover:tracking-[0.2em] shadow-lg relative overflow-hidden flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          <span>Generating Reservation...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 animate-pulse group-hover:scale-110 transition-transform" />
                          <span>Confirm Request</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex-grow flex flex-col items-center justify-center text-center space-y-6 py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <CheckCircle2 className="w-16 h-16 text-gold mb-2" />
                  </motion.div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-serif text-white uppercase tracking-wider">
                      Request Confirmed
                    </h4>
                    <p className="text-sm text-white/60 font-sans max-w-sm mx-auto">
                      Your high-end studio reserving request has been logged successfully. Xurzkwt's management will contact you within 24 hours to review your moodboard.
                    </p>
                  </div>

                  <div className="p-4 bg-white/[0.02] border border-white/5 rounded w-full max-w-sm text-left">
                    <h5 className="font-mono text-[9px] tracking-wider text-white/40 uppercase mb-2">Receipt Metadata</h5>
                    <div className="space-y-1.5 font-mono text-[10px] text-white/70">
                      <div className="flex justify-between"><span className="text-white/40">GEN ID:</span> <span>AS-2026-{(Math.random() * 10000).toFixed(0)}</span></div>
                      <div className="flex justify-between"><span className="text-white/40">GUEST:</span> <span>{formData.name}</span></div>
                      <div className="flex justify-between"><span className="text-white/40">SERVICE:</span> <span>{currentServiceDetails?.title}</span></div>
                      <div className="flex justify-between"><span className="text-white/40">DATE:</span> <span>{formData.preferredDate}</span></div>
                      <div className="flex justify-between"><span className="text-white/40">TIME:</span> <span>{formData.timeSlot}</span></div>
                    </div>
                  </div>

                  <button
                    onClick={handleReset}
                    className="border border-white/20 hover:border-gold text-white hover:text-gold font-sans uppercase tracking-widest text-[10px] py-3 px-8 transition-all duration-300 cursor-pointer"
                  >
                    Close Sheet
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Note */}
            <div className="mt-8 pt-6 border-t border-white/5 text-center">
              <span className="font-sans text-[10px] text-white/30 italic block">
                * Experience rates exclude flights and regional taxes. Standard NDA forms are available upon studio request.
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
