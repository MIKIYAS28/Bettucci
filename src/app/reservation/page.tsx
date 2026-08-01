'use client';

import { useState } from 'react';
import { ReservationFlow } from '@/components/sections/ReservationFlow';

export default function ReservationPage() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <main className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-3xl border border-gold/20 bg-stone/80 p-8 shadow-2xl sm:p-10">
        <p className="font-heading text-xs uppercase tracking-[0.4em] text-gold-light">Reservations</p>
        <h1 className="mt-3 text-3xl text-gold sm:text-4xl">Reserve a table for your next evening out</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-ivory/80">
          Book a date, choose your time, and let us prepare a warm and memorable evening for you and your guests.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gold/20 bg-noir/70 p-6">
            <h2 className="text-xl text-ivory">What to expect</h2>
            <ul className="mt-4 space-y-3 text-sm text-ivory/75">
              <li>• Flexible dining slots from lunch through late evening</li>
              <li>• Confirmation details sent directly to your contact info</li>
              <li>• Support for special requests and celebrations</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gold/20 bg-noir/70 p-6">
            <h2 className="text-xl text-ivory">Plan ahead</h2>
            <p className="mt-3 text-sm leading-6 text-ivory/75">
              We recommend booking for weekends and large groups in advance so we can prepare the perfect table for you.
            </p>
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="mt-6 rounded-lg bg-gold px-6 py-3 font-semibold text-noir transition hover:bg-gold-light"
            >
              Open Reservation Form
            </button>
          </div>
        </div>
      </div>

      <ReservationFlow isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </main>
  );
}
