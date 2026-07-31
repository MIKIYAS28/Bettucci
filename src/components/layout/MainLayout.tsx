import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/reservation', label: 'Reservation' },
];

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-transparent">
      <header className="border-b border-brand-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="text-xl font-semibold tracking-[0.2em] text-accent-700 uppercase">
            Bettucci
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-brand-600">
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/reservation"
            className="rounded-full border border-brand-300 bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-600"
          >
            Book a Table
          </Link>
        </div>
      </header>

      <div className="mx-auto flex max-w-6xl flex-col px-6 py-8 lg:px-8">
        {children}
      </div>

      <footer className="border-t border-brand-200/70 bg-white/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-700 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 Bettucci Restaurant • Addis Ababa, Ethiopia</p>
          <p>Elegant dining experience • Crafted for memorable evenings</p>
        </div>
      </footer>
    </div>
  );
}
