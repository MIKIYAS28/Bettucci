const values = [
  {
    title: 'Italian roots',
    text: 'We honor classic techniques, from hand-rolled pasta to wood-fired pizza and slow-simmered sauces.',
  },
  {
    title: 'Ethiopian warmth',
    text: 'Hospitality is at the heart of every table, with generous service and a sense of belonging.',
  },
  {
    title: 'A polished experience',
    text: 'The atmosphere is intimate and elevated, designed for date nights, family dinners, and celebrations.',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-[70vh] bg-[radial-gradient(circle_at_top,_rgba(201,162,39,0.18),_transparent_45%)] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <section className="rounded-3xl border border-gold/20 bg-stone/80 p-8 shadow-2xl sm:p-10">
          <p className="font-heading text-xs uppercase tracking-[0.4em] text-gold-light">About Us</p>
          <h1 className="mt-3 text-3xl text-gold sm:text-4xl">Italian craft, Ethiopian soul</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-ivory/80">
            Bettucci brings together the comfort of old-world Italian dining and the warmth of Addis Ababa hospitality. Every plate is prepared with care, and every visit is shaped to feel relaxed, celebratory, and deeply personal.
          </p>
        </section>

        <div className="grid gap-6 md:grid-cols-3">
          {values.map((item) => (
            <article key={item.title} className="rounded-2xl border border-gold/20 bg-noir/70 p-6">
              <h2 className="font-heading text-xl text-gold">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-ivory/70">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
