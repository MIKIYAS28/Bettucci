'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ReservationData {
  date: string;
  time: string;
  partySize: number;
  name: string;
  phone: string;
  email: string;
  specialRequests: string;
}

interface ReservationFlowProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReservationFlow({ isOpen, onClose }: ReservationFlowProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState<ReservationData>({
    date: '',
    time: '19:00',
    partySize: 2,
    name: '',
    phone: '',
    email: '',
    specialRequests: '',
  });

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, date: e.target.value });
    setErrors({ ...errors, date: '' });
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, time: e.target.value });
  };

  const handlePartySizeChange = (delta: number) => {
    const newSize = Math.max(1, Math.min(10, formData.partySize + delta));
    setFormData({ ...formData, partySize: newSize });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validateStep1 = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.date) newErrors.date = 'Please select a date';
    if (!formData.time) newErrors.time = 'Please select a time';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (formData.phone && !/^\d{9,}/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (step === 1) {
      if (validateStep1()) {
        setStep(2);
      }
    } else if (step === 2) {
      if (validateStep2()) {
        handleSubmitReservation();
      }
    }
  };

  const handleSubmitReservation = async () => {
    setIsSubmitting(true);
    // Simulate API call with 1.5s delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setStep(3);
  };

  const handleClose = () => {
    if (step !== 3) {
      // Allow close only if not on confirmation step, or user confirms
      setStep(1);
      setFormData({
        date: '',
        time: '19:00',
        partySize: 2,
        name: '',
        phone: '',
        email: '',
        specialRequests: '',
      });
      setErrors({});
      onClose();
    }
  };

  const handleNewReservation = () => {
    setStep(1);
    setFormData({
      date: '',
      time: '19:00',
      partySize: 2,
      name: '',
      phone: '',
      email: '',
      specialRequests: '',
    });
    setErrors({});
    onClose();
  };

  const timeSlots = [
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
    '20:30',
    '21:00',
  ];

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];
  const maxDate = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-2xl rounded-2xl border border-gold/30 bg-stone p-6 shadow-2xl sm:p-8">
              {/* Close button */}
              <button
                type="button"
                onClick={handleClose}
                className="absolute right-4 top-4 rounded-full p-2 text-ivory/60 transition hover:bg-white/10 hover:text-ivory"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Step indicator */}
              <div className="mb-6 flex gap-2">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`h-1.5 flex-1 rounded-full transition ${
                      s <= step ? 'bg-gold' : 'bg-white/10'
                    }`}
                  />
                ))}
              </div>

              <AnimatePresence mode="wait">
                {/* Step 1: Date & Time */}
                {step === 1 ? (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="font-heading text-2xl italic text-gold">Select Your Date & Time</h2>
                    <p className="mt-1 text-sm text-ivory/60">Choose when you'd like to dine with us</p>

                    <div className="mt-6 space-y-4">
                      {/* Date picker */}
                      <div>
                        <label className="block text-sm font-semibold text-ivory">Date *</label>
                        <input
                          type="date"
                          min={today}
                          max={maxDate}
                          value={formData.date}
                          onChange={handleDateChange}
                          className="mt-2 w-full rounded-lg border border-gold/20 bg-noir px-4 py-3 text-ivory focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                        />
                        {errors.date ? <p className="mt-1 text-xs text-red-400">{errors.date}</p> : null}
                      </div>

                      {/* Time picker */}
                      <div>
                        <label className="block text-sm font-semibold text-ivory">Time *</label>
                        <select
                          value={formData.time}
                          onChange={handleTimeChange}
                          className="mt-2 w-full rounded-lg border border-gold/20 bg-noir px-4 py-3 text-ivory focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                        >
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>
                              {slot}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Party size */}
                      <div>
                        <label className="block text-sm font-semibold text-ivory">Party Size *</label>
                        <div className="mt-2 flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => handlePartySizeChange(-1)}
                            className="rounded-lg border border-gold/20 px-4 py-3 text-ivory transition hover:bg-white/10"
                          >
                            −
                          </button>
                          <input
                            type="number"
                            min="1"
                            max="10"
                            value={formData.partySize}
                            readOnly
                            className="w-16 rounded-lg border border-gold/20 bg-noir px-4 py-3 text-center text-ivory"
                          />
                          <button
                            type="button"
                            onClick={() => handlePartySizeChange(1)}
                            className="rounded-lg border border-gold/20 px-4 py-3 text-ivory transition hover:bg-white/10"
                          >
                            +
                          </button>
                          <span className="ml-2 text-sm text-ivory/60">
                            {formData.partySize === 1 ? 'person' : 'people'}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex gap-3">
                      <button
                        type="button"
                        onClick={handleClose}
                        className="flex-1 rounded-lg border border-gold/30 px-4 py-3 text-ivory transition hover:bg-white/10"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={handleContinue}
                        className="flex-1 rounded-lg bg-gold px-4 py-3 font-semibold text-noir transition hover:bg-gold-light"
                      >
                        Continue
                      </button>
                    </div>
                  </motion.div>
                ) : null}

                {/* Step 2: Guest Details */}
                {step === 2 ? (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="font-heading text-2xl italic text-gold">Your Details</h2>
                    <p className="mt-1 text-sm text-ivory/60">We'll use this to confirm your reservation</p>

                    <div className="mt-6 space-y-4">
                      {/* Name */}
                      <div>
                        <label className="block text-sm font-semibold text-ivory">Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          className="mt-2 w-full rounded-lg border border-gold/20 bg-noir px-4 py-3 text-ivory placeholder:text-ivory/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                        />
                        {errors.name ? <p className="mt-1 text-xs text-red-400">{errors.name}</p> : null}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-sm font-semibold text-ivory">Phone *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="099 116 2244"
                          className="mt-2 w-full rounded-lg border border-gold/20 bg-noir px-4 py-3 text-ivory placeholder:text-ivory/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                        />
                        {errors.phone ? <p className="mt-1 text-xs text-red-400">{errors.phone}</p> : null}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-semibold text-ivory">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          className="mt-2 w-full rounded-lg border border-gold/20 bg-noir px-4 py-3 text-ivory placeholder:text-ivory/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                        />
                        {errors.email ? <p className="mt-1 text-xs text-red-400">{errors.email}</p> : null}
                      </div>

                      {/* Special Requests */}
                      <div>
                        <label className="block text-sm font-semibold text-ivory">Special Requests</label>
                        <textarea
                          name="specialRequests"
                          value={formData.specialRequests}
                          onChange={handleInputChange}
                          placeholder="Allergies, celebrations, dietary preferences, etc."
                          rows={3}
                          className="mt-2 w-full rounded-lg border border-gold/20 bg-noir px-4 py-3 text-ivory placeholder:text-ivory/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                        />
                      </div>

                      {/* Reservation Summary */}
                      <div className="mt-6 rounded-lg border border-gold/20 bg-noir/50 p-4">
                        <p className="text-sm text-ivory/70">
                          <strong className="text-gold">{formData.date}</strong> at{' '}
                          <strong className="text-gold">{formData.time}</strong> for{' '}
                          <strong className="text-gold">{formData.partySize}</strong> {formData.partySize === 1 ? 'person' : 'people'}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 flex gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex-1 rounded-lg border border-gold/30 px-4 py-3 text-ivory transition hover:bg-white/10"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={handleContinue}
                        disabled={isSubmitting}
                        className="flex-1 rounded-lg bg-gold px-4 py-3 font-semibold text-noir transition disabled:opacity-50 hover:bg-gold-light"
                      >
                        {isSubmitting ? 'Confirming...' : 'Confirm Reservation'}
                      </button>
                    </div>
                  </motion.div>
                ) : null}

                {/* Step 3: Confirmation */}
                {step === 3 ? (
                  <motion.div
                    key="step-3"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                      className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/20"
                    >
                      <motion.svg
                        className="h-8 w-8 text-gold"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        initial={{ strokeDasharray: 25, strokeDashoffset: 25 }}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </motion.svg>
                    </motion.div>

                    <h2 className="font-display text-4xl text-gold">Reservation Confirmed</h2>
                    <p className="mt-2 text-ivory/80">Thank you, {formData.name}</p>

                    <div className="mt-6 rounded-lg border border-gold/20 bg-noir/50 p-6 text-left">
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-ivory/60">Date:</span>
                          <span className="font-semibold text-ivory">{formData.date}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-ivory/60">Time:</span>
                          <span className="font-semibold text-ivory">{formData.time}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-ivory/60">Party Size:</span>
                          <span className="font-semibold text-ivory">{formData.partySize} {formData.partySize === 1 ? 'person' : 'people'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-ivory/60">Phone:</span>
                          <span className="font-semibold text-ivory">{formData.phone}</span>
                        </div>
                      </div>
                    </div>

                    <p className="mt-6 text-sm text-ivory/60">
                      A confirmation email has been sent to <strong className="text-ivory">{formData.email}</strong>
                    </p>

                    <button
                      type="button"
                      onClick={handleNewReservation}
                      className="mt-8 rounded-lg bg-gold px-6 py-3 font-semibold text-noir transition hover:bg-gold-light"
                    >
                      Close
                    </button>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
