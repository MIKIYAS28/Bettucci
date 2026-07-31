'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ReservationFlow } from './ReservationFlow';
import { ParticleGlow } from './ParticleGlow';
import heroImage from '../../../bettucci.jpg';

const highlights = [
  {
    title: 'Lasagna',
    label: 'Popular',
    src: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Tiramisu',
    label: 'Popular',
    src: 'https://images.unsplash.com/photo-1571877227200-a0d98ea4f3b8?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Beef',
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Chicken Cutlet',
    src: 'https://images.unsplash.com/photo-1563379091331-03b5c4d5f0e7?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Caesar Salad',
    src: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Chicken Pizza',
    src: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Four Cheese Pizza',
    src: 'https://images.unsplash.com/photo-1556910103-1c02745acea4?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Pizza Caprese',
    src: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=900&q=80',
  },
];

const menuCategories = [
  {
    title: 'Pizza',
    items: [
      { name: 'Margherita', description: 'San Marzano tomato, fior di latte, basil', price: 'ETB 1,200' },
      { name: 'Prosciutto & Focaccia', description: 'Prosciutto, mozzarella, rosemary focaccia', price: 'ETB 1,450' },
      { name: 'Chicken Pizza', description: 'Smoky roast chicken, caramelized onions', price: 'ETB 1,500' },
    ],
  },
  {
    title: 'Pasta',
    items: [
      { name: 'Spaghetti Bolognese', description: 'Slow-simmered sauce, parmesan, basil', price: 'ETB 1,350' },
      { name: 'Carbonara', description: 'Egg yolk, pecorino, black pepper, pancetta', price: 'ETB 1,450' },
      { name: 'Ravioli', description: 'Hand-folded pillows in a gentle tomato glaze', price: 'ETB 1,500' },
    ],
  },
  {
    title: 'Salads',
    items: [
      { name: 'Green Salad', description: 'Tender greens, herbs, lemon dressing', price: 'ETB 800' },
      { name: 'Caesar Salad', description: 'Crisp romaine, house dressing, parmesan', price: 'ETB 850' },
      { name: 'Caprese', description: 'Tomato, basil, mozzarella, balsamic', price: 'ETB 900' },
    ],
  },
  {
    title: 'Antipasti',
    items: [
      { name: 'Affettato Misto', description: 'A curated board of cured meats and olives', price: 'ETB 1,100' },
      { name: 'Focaccia & Stracciatella', description: 'Warm focaccia, creamy cheese, olive oil', price: 'ETB 950' },
      { name: 'Margherita Al Crudo', description: 'Fresh tomato, basil, burrata, sea salt', price: 'ETB 1,050' },
    ],
  },
  {
    title: 'Dolci',
    items: [
      { name: 'Tiramisu', description: 'Espresso-soaked sponge, mascarpone cream', price: 'ETB 700' },
      { name: 'Panna Cotta', description: 'Silky vanilla custard with berry compote', price: 'ETB 650' },
      { name: 'Cannoli', description: 'Shells filled with ricotta and citrus peel', price: 'ETB 680' },
    ],
  },
];

const reviews = [
  {
    quote:
      'One of the best pizza places in town. The room feels warm and polished, and I only wish they would open more branches.',
    name: 'Betty Eshete',
    rating: '5★',
    badge: 'Local Guide',
  },
  {
    quote:
      'Best Italian food I have tried here. Everything felt excellent from the first bite to the last.',
    name: 'C.',
    rating: '5★',
    badge: 'Guest Favorite',
  },
  {
    quote:
      'The carbonara, steak, pizza and ravioli were all lovely. Portions felt a little light for the price, but the flavors were memorable.',
    name: 'Soliana Makonnen',
    rating: '4★',
    badge: 'Regular',
  },
];

const revealProps = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7, ease: 'easeOut' },
};

export function BettucciLanding() {
  const [reservationOpen, setReservationOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <main className="overflow-hidden">
        {/* Hero */}
        <section id="hero" className="relative isolate min-h-screen w-full">
          {/* Hero image with overlay */}
          <Image
            src={heroImage}
            alt="Bettucci candlelit courtyard with fairy lights"
            fill
            priority
            className="object-cover object-center"
            quality={90}
          />

          {/* Gradient overlay (noir to transparent) */}
          <div className="absolute inset-0 bg-gradient-to-b from-noir/70 via-noir/50 to-noir/30" />

          {/* Particle glow effect */}
          <ParticleGlow />

          {/* Content */}
          <div className="relative flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl text-center">
              {/* Eyebrow */}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="font-heading text-sm uppercase tracking-[0.35em] text-gold-light">
                  Ristorante & Pizzeria · Addis Ababa
                </span>
              </motion.div>

              {/* Headline in Tangerine with drop-cap */}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-4"
              >
                <h1 className="text-display text-gold drop-cap-gold">Bettucci</h1>
              </motion.div>

              {/* Rating & Price badge */}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-6 flex flex-col items-center gap-2 sm:flex-row sm:justify-center"
              >
                <span className="rounded-full border border-gold/40 bg-white/10 px-4 py-2 text-sm font-semibold text-ivory">
                  4.5 ★ • 217 reviews
                </span>
                <span className="rounded-full border border-gold/40 bg-white/10 px-4 py-2 text-sm font-semibold text-gold">
                  ETB 2,000+ per person
                </span>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center"
              >
                <button
                  onClick={() => setReservationOpen(true)}
                  className="rounded-lg bg-gold px-8 py-4 font-semibold text-noir transition hover:bg-gold-light hover:shadow-[0_0_24px_rgba(201,162,39,0.5)]"
                >
                  Book a Table
                </button>
                <a
                  href="#menu"
                  className="rounded-lg border border-gold/40 px-8 py-4 font-semibold text-ivory transition hover:border-gold/70 hover:bg-white/10"
                >
                  View Menu
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Highlights strip */}
        <motion.section {...revealProps} className="bg-noir px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6">
              <p className="font-heading text-xs uppercase tracking-[0.4em] text-gold-light">Signature Dishes</p>
              <h2 className="mt-2 text-2xl text-ivory sm:text-3xl">What guests keep returning for</h2>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2 sm:pb-4">
              {highlights.map((item) => (
                <motion.article
                  key={item.title}
                  whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="group relative min-w-[200px] overflow-hidden rounded-xl border border-gold/20 shadow-lg transition sm:min-w-[240px]"
                >
                  <div className="relative h-48 w-full">
                    <Image src={item.src} alt={item.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-noir/40 to-transparent" />
                    {item.label ? (
                      <motion.span
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-noir"
                      >
                        {item.label}
                      </motion.span>
                    ) : null}
                  </div>
                  <div className="bg-stone/50 p-4 backdrop-blur">
                    <p className="font-heading text-lg italic text-gold">{item.title}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Menu */}
        <motion.section id="menu" {...revealProps} className="bg-noir px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10">
              <p className="font-heading text-xs uppercase tracking-[0.4em] text-gold-light">Menu</p>
              <h2 className="mt-2 text-3xl text-ivory sm:text-4xl">Crafted with care</h2>
              <p className="mt-3 max-w-2xl text-ivory/70">
                From wood-fired pizzas to hand-rolled pasta, every plate reflects our commitment to authentic Italian tradition with Addis Ababa warmth.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {menuCategories.map((category) => (
                <motion.article
                  key={category.title}
                  whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-xl border border-gold/20 bg-stone p-6 shadow-lg transition hover:shadow-[0_0_20px_rgba(201,162,39,0.3)]"
                >
                  <h3 className="font-heading text-xl italic text-gold">{category.title}</h3>
                  <div className="mt-4 space-y-3">
                    {category.items.map((item) => (
                      <div key={item.name} className="border-b border-gold/10 pb-3 last:border-0 last:pb-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="font-heading text-sm italic text-ivory">{item.name}</p>
                            <p className="mt-0.5 text-xs text-ivory/60">{item.description}</p>
                          </div>
                          <p className="shrink-0 text-sm font-semibold text-gold-light">{item.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>

        {/* About */}
        <motion.section {...revealProps} className="bg-stone px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="font-heading text-xs uppercase tracking-[0.4em] text-gold-light">About Us</p>
                <h2 className="mt-3 text-3xl text-ivory sm:text-4xl">Italian craft, Ethiopian soul</h2>
                <p className="mt-4 leading-7 text-ivory/75">
                  Bettucci is born from a simple belief: that great food brings people together, and that the warmth of hospitality transcends borders.
                </p>
                <p className="mt-3 leading-7 text-ivory/75">
                  Here in Addis Ababa, we blend authentic Italian traditions—hand-rolled pasta, wood-fired pizzas, slow-simmered sauces—with the generosity and soul that define Ethiopian dining culture. The result is a restaurant that feels both rooted in Tuscany and deeply at home in this city.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative overflow-hidden rounded-xl border border-gold/20 shadow-lg"
              >
                <Image
                  src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80"
                  alt="Warm Italian restaurant ambiance with candlelight"
                  width={900}
                  height={700}
                  className="h-[400px] w-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Reviews */}
        <motion.section {...revealProps} className="bg-noir px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10">
              <p className="font-heading text-xs uppercase tracking-[0.4em] text-gold-light">Reviews</p>
              <h2 className="mt-2 text-3xl text-ivory sm:text-4xl">Loved by locals</h2>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-ivory/70">
                <span className="flex items-center gap-1">
                  <span className="text-lg text-gold">★</span> 4.5 average rating
                </span>
                <span>217 reviews</span>
                <span className="h-1 w-1 rounded-full bg-gold/40" />
                <span>5★ is most common</span>
              </div>
            </div>

            <div className="flex w-full gap-4 overflow-x-auto pb-4">
              {[...reviews, ...reviews].map((review, index) => (
                <motion.article
                  key={`${review.name}-${index}`}
                  whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="min-w-[300px] rounded-xl border border-gold/20 bg-stone p-6 shadow-lg transition"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gold">{review.rating}</span>
                    <span className="text-[0.65rem] uppercase tracking-[0.2em] text-gold-light">{review.badge}</span>
                  </div>
                  <p className="mt-4 leading-6 text-ivory/75">"{review.quote}"</p>
                  <p className="mt-4 font-semibold text-ivory">— {review.name}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Location */}
        <motion.section {...revealProps} className="bg-stone px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <p className="font-heading text-xs uppercase tracking-[0.4em] text-gold-light">Location</p>
                <h2 className="mt-3 text-3xl text-ivory sm:text-4xl">Visit us in Addis Ababa</h2>
                <div className="mt-6 space-y-4">
                  <div className="rounded-lg border border-gold/20 bg-noir/50 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-gold-light">Address</p>
                    <p className="mt-2 text-ivory">Near Flipper International School, Beklobet Lower Secondary Campus</p>
                  </div>
                  <div className="rounded-lg border border-gold/20 bg-noir/50 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-gold-light">Hours</p>
                    <p className="mt-2 text-ivory">Opens 12 PM daily • Late evening service available</p>
                  </div>
                  <div className="rounded-lg border border-gold/20 bg-noir/50 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-gold-light">Phone</p>
                    <p className="mt-2 text-ivory font-mono">099 116 2244</p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="inline-flex rounded-full border border-gold/20 bg-gold/10 px-3 py-1.5 text-xs font-semibold text-gold">
                      Dine-in
                    </span>
                    <span className="inline-flex rounded-full border border-gold/20 bg-gold/10 px-3 py-1.5 text-xs font-semibold text-gold">
                      Takeaway
                    </span>
                    <span className="inline-flex rounded-full border border-gold/20 bg-gold/10 px-3 py-1.5 text-xs font-semibold text-gold">
                      No-contact delivery
                    </span>
                  </div>
                  <a
                    href="https://maps.google.com/?q=XQX6%2BCC%20Addis%20Ababa"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex rounded-lg bg-gold px-6 py-3 font-semibold text-noir transition hover:bg-gold-light"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
              <div className="overflow-hidden rounded-xl border border-gold/20 shadow-lg">
                <iframe
                  title="Bettucci location on Google Maps"
                  src="https://www.google.com/maps?q=XQX6%2BCC%20Addis%20Ababa&z=15&output=embed"
                  className="h-[400px] w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact / Footer */}
        <motion.section {...revealProps} className="bg-noir px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-xl border border-gold/20 bg-stone p-8 shadow-lg sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="font-heading text-xs uppercase tracking-[0.4em] text-gold-light">Contact</p>
                  <h2 className="mt-3 text-3xl text-gold">Get in touch</h2>
                  <p className="mt-4 leading-7 text-ivory/75">
                    Have questions about our menu, want to plan a private event, or just want to say hello? We're here and delighted to hear from you.
                  </p>
                  <div className="mt-6 space-y-2 text-sm text-ivory/75">
                    <p>
                      <strong className="text-ivory">Phone:</strong> 099 116 2244
                    </p>
                    <p>
                      <strong className="text-ivory">Hours:</strong> Opens 12 PM daily
                    </p>
                  </div>
                </div>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-ivory">Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="mt-2 w-full rounded-lg border border-gold/20 bg-noir px-4 py-3 text-ivory placeholder:text-ivory/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-ivory">Phone</label>
                    <input
                      type="tel"
                      placeholder="099 000 0000"
                      className="mt-2 w-full rounded-lg border border-gold/20 bg-noir px-4 py-3 text-ivory placeholder:text-ivory/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-ivory">Message</label>
                    <textarea
                      placeholder="Tell us about your event or inquiry"
                      rows={3}
                      className="mt-2 w-full rounded-lg border border-gold/20 bg-noir px-4 py-3 text-ivory placeholder:text-ivory/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-gold px-6 py-3 font-semibold text-noir transition hover:bg-gold-light"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Reservation Flow Modal */}
      <ReservationFlow isOpen={reservationOpen} onClose={() => setReservationOpen(false)} />
    </>
  );
}
