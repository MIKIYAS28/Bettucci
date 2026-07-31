import type { Metadata } from 'next';
import { Jost, Cormorant_Garamond, Playfair_Display } from 'next/font/google';
import './globals.css';
import { MainLayout } from '@/components/layout/MainLayout';

const jost = Jost({ subsets: ['latin'], variable: '--font-jost' });
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-cormorant',
});
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  style: ['italic', 'normal'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Bettucci Ristorante & Pizzeria',
  description: 'An elegant Ethio-Italian restaurant experience in Addis Ababa, blending candlelit dining with warm hospitality.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jost.variable} ${cormorant.variable} ${playfair.variable}`}>
      <body className="bg-parchment font-sans text-charcoal-text">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
