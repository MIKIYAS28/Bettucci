'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import heroImage from '../../../bettucci.jpg';

const highlights = [
  {
    title: 'Lasagna',
    label: 'Popular',
    src: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=900&q=80',
    alt: 'Layered lasagna plated on a white dish',
  },
  {
    title: 'Tiramisu',
    label: 'Popular',
    src: 'https://images.unsplash.com/photo-1571877227200-a0d98ea4f3b8?auto=format&fit=crop&w=900&q=80',
    alt: 'Tiramisu served with cocoa powder',
  },
  {
    title: 'Beef',
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
    alt: 'Seared beef steak with roasted vegetables',
  },
  {
    title: 'Chicken Cutlet',
    src: 'https://images.unsplash.com/photo-1563379091331-03b5c4d5f0e7?auto=format&fit=crop&w=900&q=80',
    alt: 'Crispy chicken cutlet plated with greens',
  },
  {
    title: 'Caesar Salad',
    src: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=900&q=80',
    alt: 'Fresh caesar salad with parmesan',
  },
  {
    title: 'Chicken Pizza',
    src: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80',
    alt: 'Chicken pizza fresh from the oven',
  },
  {
    title: 'Four Cheese Pizza',
    src: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80',
    alt: 'Pizza topped with four cheeses',
  },
  {
    title: 'Pizza Caprese',
    src: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80',
    alt: 'Pizza caprese on a wooden board',
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
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export function BettucciLanding() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.16),_transparent_48%)]">
      <section id="top" className="relative isolate overflow-hidden bg-espresso px-4 py-6 text-parchment sm:px-6 lg:px-8 lg:py-8">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(0,0,0,0.8),rgba(36,22,17,0.88))]" />
        <Image
          src={heroImage}
          alt="The Bettucci sign in warm candlelit tones"
          fill
          priority
          className="object-cover object-center opacity-25"
        />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 lg:min-h-[85vh] lg:justify-center">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 flex flex-wrap items-center gap-3"
          >
            <span className="rounded-full border border-gold/40 bg-white/10 px-3 py-1 text-[0.7rem] uppercase tracking-[0.35em] text-gold-soft">
              Addis Ababa • Ethio-Italiano
            </span>
            <span className="rounded-full border border-ethio-green/40 bg-ethio-green/15 px-3 py-1 text-[0.7rem] uppercase tracking-[0.35em] text-parchment">
              4.5 ★ · 217 reviews
            </span>
          </motion.div>

          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="max-w-3xl"
            >
              <p className="mb-4 text-sm uppercase tracking-[0.4em] text-gold-soft">Ristorante & Pizzeria</p>
              <h1 className={`${'font-display'} text-5xl leading-[0.95] text-gold sm:text-6xl lg:text-8xl`}>
                Bettucci
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-parchment/85 sm:text-xl">
                Candlelit Italian plates, a warm Ethiopian spirit, and a dining room made for lingering.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#menu"
                  className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-espresso transition hover:-translate-y-1 hover:bg-gold-soft focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-espresso"
                >
                  View Menu
                </a>
                <a
                  href="https://maps.google.com/?q=XQX6%2BCC%20Addis%20Ababa"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-parchment/30 px-6 py-3 text-sm font-semibold text-parchment transition hover:-translate-y-1 hover:border-gold-soft focus:outline-none focus:ring-2 focus:ring-gold-soft focus:ring-offset-2 focus:ring-offset-espresso"
                >
                  Get Directions
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 text-sm text-parchment/80">
                <div className="rounded-full border border-white/10 bg-white/10 px-4 py-2">ETB 2,000+ per person</div>
                <div className="rounded-full border border-white/10 bg-white/10 px-4 py-2">Dine-in • Takeaway • Delivery</div>
              </div>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }}
              animate={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="rounded-[2rem] border border-white/10 bg-[rgba(36,22,17,0.75)] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.3)] backdrop-blur"
            >
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-[0.7rem] uppercase tracking-[0.35em] text-gold-soft">Tonight’s note</p>
                  <p className="mt-2 font-serif text-2xl text-parchment">A table for two, candlelit.</p>
                </div>
                <div className="rounded-full border border-gold/40 px-3 py-2 text-sm font-semibold text-gold">Open 12 PM</div>
              </div>
              <div className="space-y-3 text-sm leading-7 text-parchment/75">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                  <p className="font-semibold text-parchment">Signature plates</p>
                  <p className="mt-1">Lasagna, tiramisu, house-made pizza, and slow-simmered pasta.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                  <p className="font-semibold text-parchment">Visit us</p>
                  <p className="mt-1">Near Flipper International School, Beklobet Lower Secondary Campus, Addis Ababa.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section {...revealProps} className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.4em] text-ethio-green">Crowd favorites</p>
            <h2 className={`${'font-display'} text-2xl text-walnut sm:text-3xl`}>What guests keep coming back for</h2>
          </div>
          <div className="hidden rounded-full border border-gold/30 bg-gold/10 px-3 py-2 text-sm text-walnut md:block">
            Freshly plated • Made to share
          </div>
        </div>
        <div className="mt-6 flex gap-4 overflow-x-auto pb-2">
          {highlights.map((item, index) => (
            <motion.article
              key={item.title}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.22 }}
              className="group relative min-w-[220px] overflow-hidden rounded-[1.5rem] border border-[#e7d7b9] bg-parchment shadow-[0_14px_36px_rgba(36,22,17,0.08)]"
            >
              <div className="relative h-44 w-full">
                <Image src={item.src} alt={item.alt} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 to-transparent" />
                {item.label ? (
                  <span className="absolute left-3 top-3 rounded-full border border-gold/40 bg-gold px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-espresso">
                    {item.label}
                  </span>
                ) : null}
              </div>
              <div className="p-4">
                <p className="font-serif text-xl text-walnut">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-charcoal-text/70">Seasoned with care and served with warmth.</p>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section id="menu" {...revealProps} className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.4em] text-ethio-green">Menu</p>
            <h2 className={`${'font-display'} text-3xl text-walnut sm:text-4xl`}>The dishes that lead the room</h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-charcoal-text/70">
            From wood-fired pizzas to silky pastas and sharp salads, every plate is built to feel both familiar and elevated.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {menuCategories.map((category) => (
            <motion.article
              key={category.title}
              whileHover={{ y: -4, boxShadow: '0 18px 40px rgba(36,22,17,0.1)' }}
              transition={{ duration: 0.2 }}
              className="rounded-[1.75rem] border border-[#ede0c6] bg-white/80 p-6 shadow-[0_12px_30px_rgba(36,22,17,0.05)]"
            >
              <div className="mb-5 flex items-center justify-between">
                <h3 className={`${'font-display'} text-2xl text-walnut`}>{category.title}</h3>
                <div className="h-px flex-1 bg-gradient-to-r from-gold/70 to-transparent" />
              </div>
              <div className="space-y-4">
                {category.items.map((item) => (
                  <div key={item.name} className="rounded-2xl border border-transparent bg-[#fcf7ee] p-4 transition hover:border-gold/40 hover:bg-[#fff9ef]">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-serif text-xl text-walnut">{item.name}</p>
                        <p className="mt-1 text-sm leading-6 text-charcoal-text/65">{item.description}</p>
                      </div>
                      <span className="shrink-0 text-sm font-semibold text-wine">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section id="about" {...revealProps} className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-8 rounded-[2rem] border border-[#e8ddc6] bg-[#fbf6eb] p-6 shadow-[0_16px_40px_rgba(36,22,17,0.05)] lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
          <div className="flex flex-col justify-center">
            <p className="text-[0.7rem] uppercase tracking-[0.4em] text-ethio-green">About</p>
            <h2 className={`${'font-display'} mt-3 text-3xl text-walnut sm:text-4xl`}>An Italian kitchen with an Ethiopian heart</h2>
            <p className="mt-5 text-lg leading-8 text-charcoal-text/75">
              Bettucci was built as a place where old-world Italian hospitality meets the warmth and generosity of Addis Ababa. The result is a dining room that feels intimate, lively, and deeply rooted in both cultures.
            </p>
            <p className="mt-4 text-lg leading-8 text-charcoal-text/75">
              Expect candlelit dinners, carefully made pasta, wood-fired pizzas, and a service style that feels personal from the first hello to the final sip.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-[#e6d7b7]">
            <Image
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80"
              alt="A warm Italian restaurant dining scene with pizza and candles"
              width={900}
              height={700}
              className="h-full min-h-[300px] w-full object-cover"
            />
          </div>
        </div>
      </motion.section>

      <motion.section id="reviews" {...revealProps} className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="rounded-[2rem] border border-[#e8ddc6] bg-espresso p-6 text-parchment shadow-[0_18px_50px_rgba(36,22,17,0.15)] lg:p-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.4em] text-gold-soft">Reviews</p>
              <h2 className={`${'font-display'} text-3xl text-gold sm:text-4xl`}>Loved by locals and travelers alike</h2>
            </div>
            <div className="rounded-full border border-gold/30 bg-white/10 px-4 py-2 text-sm">
              4.5 ★ average from 217 reviews · 5★ majority
            </div>
          </div>
          <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/10 p-2">
            <div className="flex w-max animate-marquee gap-4">
              {[...reviews, ...reviews].map((review, index) => (
                <article key={`${review.name}-${index}`} className="w-[290px] rounded-[1.25rem] border border-white/10 bg-[#2f2018] p-5">
                  <div className="flex items-center justify-between text-sm text-gold-soft">
                    <span>{review.rating}</span>
                    <span className="rounded-full border border-gold/30 px-2 py-1 text-[0.65rem] uppercase tracking-[0.25em]">
                      {review.badge}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-parchment/80">“{review.quote}”</p>
                  <p className="mt-5 font-semibold text-parchment">{review.name}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section id="location" {...revealProps} className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-[#e8ddc6] bg-white/80 p-6 shadow-[0_16px_40px_rgba(36,22,17,0.05)] lg:p-8">
            <p className="text-[0.7rem] uppercase tracking-[0.4em] text-ethio-green">Location</p>
            <h2 className={`${'font-display'} mt-3 text-3xl text-walnut sm:text-4xl`}>Visit us in Addis Ababa</h2>
            <p className="mt-5 text-lg leading-8 text-charcoal-text/75">
              Near Flipper International School Beklobet Lower Secondary Campus, Addis Ababa.
            </p>
            <div className="mt-6 space-y-3 text-sm leading-7 text-charcoal-text/70">
              <div className="rounded-2xl border border-[#efe2ca] bg-[#fcf7ee] p-4">
                <p className="font-semibold text-walnut">Hours</p>
                <p className="mt-1">Opens 12 PM daily • Late evening service available</p>
              </div>
              <div className="rounded-2xl border border-[#efe2ca] bg-[#fcf7ee] p-4">
                <p className="font-semibold text-walnut">Phone</p>
                <p className="mt-1">099 116 2244</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-ethio-green/20 bg-ethio-green/10 px-3 py-1 text-sm text-ethio-green">Dine-in</span>
                <span className="rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-sm text-walnut">Takeaway</span>
                <span className="rounded-full border border-wine/20 bg-wine/10 px-3 py-1 text-sm text-wine">No-contact delivery</span>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=XQX6%2BCC%20Addis%20Ababa"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full bg-gold px-5 py-3 text-sm font-semibold text-espresso transition hover:-translate-y-1 hover:bg-gold-soft"
            >
              Get Directions
            </a>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-[#e8ddc6] shadow-[0_16px_40px_rgba(36,22,17,0.05)]">
            <iframe
              title="Bettucci location map"
              src="https://www.google.com/maps?q=XQX6%2BCC%20Addis%20Ababa&z=14&output=embed"
              className="h-[420px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </motion.section>

      <motion.section id="contact" {...revealProps} className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="rounded-[2rem] border border-[#e6d8bc] bg-espresso p-6 text-parchment shadow-[0_18px_50px_rgba(36,22,17,0.18)] lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.4em] text-gold-soft">Contact</p>
              <h2 className={`${'font-display'} mt-3 text-3xl text-gold sm:text-4xl`}>Reserve a table or send a note</h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-parchment/70">
                Whether you are planning a dinner out or want to discuss a private event, the team is ready to welcome you.
              </p>
              <div className="mt-6 space-y-3 text-sm text-parchment/75">
                <p>Phone: 099 116 2244</p>
                <p>Instagram • Facebook • TikTok</p>
                <p>Open daily from 12 PM</p>
              </div>
            </div>
            <form className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm">
                  <span className="mb-2 block text-parchment/80">Name</span>
                  <input className="w-full rounded-2xl border border-white/10 bg-[#2f2018] px-4 py-3 text-parchment outline-none ring-0 focus:border-gold/60" placeholder="Your name" />
                </label>
                <label className="text-sm">
                  <span className="mb-2 block text-parchment/80">Phone</span>
                  <input className="w-full rounded-2xl border border-white/10 bg-[#2f2018] px-4 py-3 text-parchment outline-none focus:border-gold/60" placeholder="099 000 0000" />
                </label>
              </div>
              <label className="mt-4 block text-sm">
                <span className="mb-2 block text-parchment/80">Message</span>
                <textarea className="min-h-[120px] w-full rounded-2xl border border-white/10 bg-[#2f2018] px-4 py-3 text-parchment outline-none focus:border-gold/60" placeholder="Tell us about your evening, celebration, or table request." />
              </label>
              <button className="mt-5 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-espresso transition hover:-translate-y-1 hover:bg-gold-soft focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-espresso">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
