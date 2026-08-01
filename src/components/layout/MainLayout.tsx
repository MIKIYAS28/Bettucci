'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import heroImage from '../../../bettucci.jpg';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'About' },
  { href: '/reservation', label: 'Reservation' },
  { href: '/contact', label: 'Contact' },
];

export function MainLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-noir">
      {/* Sticky Navbar */}
      <motion.header
        initial={{ backgroundColor: 'rgba(20, 16, 13, 0)' }}
        className={`fixed top-0 z-50 w-full border-b transition-all ${
          scrolled
            ? 'border-gold/20 bg-noir/95 backdrop-blur'
            : 'border-transparent bg-gradient-to-b from-noir/40 to-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="#hero" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <div className="relative h-9 w-9 overflow-hidden rounded-full border border-gold/40 bg-stone/80 p-0.5">
              <Image src={heroImage} alt="Bettucci sign" fill sizes="36px" className="object-cover" />
            </div>
            <span className="font-display text-lg text-gold">Bettucci</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 text-sm text-ivory/80 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-noir"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="inline-flex rounded-lg border border-gold/30 p-2 text-ivory transition hover:bg-white/10 md:hidden"
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Toggle navigation"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: open ? 1 : 0, height: open ? 'auto' : 0 }}
          transition={{ duration: 0.2 }}
          className="overflow-hidden border-t border-gold/20 bg-noir/95 md:hidden"
        >
          <nav className="flex flex-col gap-2 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-ivory/80 transition hover:bg-white/10 hover:text-gold"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </motion.div>
      </motion.header>

      {/* Page Content (with padding for fixed header) */}
      <div className="pt-0">{children}</div>

      {/* Footer */}
      <footer className="border-t border-gold/20 bg-noir px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 grid gap-8 sm:grid-cols-3">
            <div>
              <p className="font-heading text-xs uppercase tracking-[0.3em] text-gold-light">Bettucci</p>
              <p className="mt-2 text-sm text-ivory/70">Candlelit Italian dining with Ethiopian warmth in Addis Ababa.</p>
            </div>
            <div>
              <p className="font-heading text-xs uppercase tracking-[0.3em] text-gold-light">Hours</p>
              <p className="mt-2 text-sm text-ivory/70">Opens 12 PM daily • Late evening service available</p>
            </div>
            <div>
              <p className="font-heading text-xs uppercase tracking-[0.3em] text-gold-light">Contact</p>
              <p className="mt-2 text-sm text-ivory/70">099 116 2244</p>
            </div>
          </div>
          <div className="border-t border-gold/10 pt-6 text-center text-xs text-ivory/50">
            <p>© 2026 Bettucci Ristorante & Pizzeria · Addis Ababa, Ethiopia</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
