'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import heroImage from '../../../bettucci.jpg';

const navItems = [
  { href: '#menu', label: 'Menu' },
  { href: '#about', label: 'About' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#location', label: 'Location' },
  { href: '#contact', label: 'Contact' },
];

export function MainLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-transparent">
      <header className="sticky top-0 z-50 border-b border-gold/20 bg-espresso/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-gold/40 bg-parchment p-1">
              <Image src={heroImage} alt="Bettucci sign" fill className="object-cover" />
            </div>
            <div>
              <p className="font-display text-xl text-gold">Bettucci</p>
              <p className="text-[0.65rem] uppercase tracking-[0.3em] text-parchment/70">Ristorante & Pizzeria</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-parchment/80 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:translate-y-[-1px] hover:font-semibold hover:text-gold-soft">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full border border-gold/40 bg-gold px-4 py-2 text-sm font-semibold text-espresso transition hover:bg-gold-soft md:inline-flex"
            >
              Reserve a Table
            </a>
            <button
              type="button"
              className="inline-flex rounded-full border border-gold/30 p-2 text-parchment focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-espresso md:hidden"
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Toggle navigation"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>

        {open ? (
          <div className="border-t border-gold/20 bg-espresso/95 px-4 py-4 md:hidden">
            <nav className="flex flex-col gap-3 text-sm font-medium text-parchment/80">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-white/10 px-3 py-2 transition hover:bg-white/10 hover:text-gold-soft"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        ) : null}
      </header>

      <div>{children}</div>

      <footer className="border-t border-gold/20 bg-espresso px-4 py-8 text-sm text-parchment/80 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <p>© 2026 Bettucci Ristorante & Pizzeria • Addis Ababa, Ethiopia</p>
          <p>Warm service • Italian comfort • Ethiopian soul</p>
        </div>
      </footer>
    </div>
  );
}
