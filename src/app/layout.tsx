import type { Metadata } from 'next';
import { Jost, Cormorant_Garamond, Tangerine } from 'next/font/google';
import './globals.css';
import { MainLayout } from '@/components/layout/MainLayout';

const jost = Jost({ subsets: ['latin'], variable: '--font-jost' });
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
});
const tangerine = Tangerine({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-tangerine',
});

export const metadata: Metadata = {
  title: 'Bettucci Ristorante & Pizzeria — Luxury Italian in Addis Ababa',
  description: 'Candlelit Italian dining with Ethiopian warmth in Addis Ababa. Premium pizza, pasta, and wine. Reserve your table now.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jost.variable} ${cormorant.variable} ${tangerine.variable}`}>
      <body className="bg-noir font-sans text-ivory">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
