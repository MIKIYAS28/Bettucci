'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="rounded-3xl border border-gold/20 bg-stone/80 p-8 shadow-2xl">
          <p className="font-heading text-xs uppercase tracking-[0.4em] text-gold-light">Contact</p>
          <h1 className="mt-3 text-3xl text-gold sm:text-4xl">Visit, call, or message us</h1>
          <p className="mt-4 text-base leading-7 text-ivory/80">
            Whether you’re planning a dinner date, a private event, or a family gathering, our team is ready to help.
          </p>

          <div className="mt-8 space-y-4 text-sm text-ivory/75">
            <div className="rounded-2xl border border-gold/20 bg-noir/70 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-gold-light">Address</p>
              <p className="mt-2">Near Flipper International School, Beklobet Lower Secondary Campus</p>
            </div>
            <div className="rounded-2xl border border-gold/20 bg-noir/70 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-gold-light">Phone</p>
              <p className="mt-2 font-mono">099 116 2244</p>
            </div>
            <div className="rounded-2xl border border-gold/20 bg-noir/70 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-gold-light">Hours</p>
              <p className="mt-2">Open daily from 12 PM with late evening service available</p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-gold/20 bg-noir/80 p-8 shadow-2xl">
          <h2 className="text-2xl text-ivory">Send a note</h2>
          <p className="mt-2 text-sm text-ivory/70">We usually respond within a few hours.</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-semibold text-ivory">Name</label>
              <input className="mt-2 w-full rounded-lg border border-gold/20 bg-stone px-4 py-3 text-ivory" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-ivory">Phone</label>
              <input className="mt-2 w-full rounded-lg border border-gold/20 bg-stone px-4 py-3 text-ivory" placeholder="099 000 0000" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-ivory">Message</label>
              <textarea rows={4} className="mt-2 w-full rounded-lg border border-gold/20 bg-stone px-4 py-3 text-ivory" placeholder="Tell us about your event or question" />
            </div>
            <button type="submit" className="w-full rounded-lg bg-gold px-6 py-3 font-semibold text-noir transition hover:bg-gold-light">
              Send Message
            </button>
            {submitted ? <p className="text-sm text-gold">Thank you — we received your note.</p> : null}
          </form>
        </section>
      </div>
    </main>
  );
}
