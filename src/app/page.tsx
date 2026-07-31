export default function HomePage() {
  return (
    <main className="space-y-8">
      <section className="rounded-3xl border border-brand-200 bg-white/80 p-8 shadow-sm">
        <p className="text-sm uppercase tracking-[0.35em] text-brand-600">Welcome to</p>
        <h1 className="mt-3 text-4xl font-semibold text-accent-700 sm:text-5xl">
          Bettucci Restaurant
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-700">
          A warm, high-end dining experience rooted in Addis Ababa with a refined menu, thoughtful service, and a welcoming atmosphere.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          { title: 'Signature Dining', description: 'Thoughtful cuisine and elegant presentation.' },
          { title: 'Local Hospitality', description: 'A neighborhood favorite with an elevated feel.' },
          { title: 'Reservations', description: 'Placeholder for booking experience and availability.' },
        ].map((item) => (
          <article key={item.title} className="rounded-2xl border border-brand-200 bg-white/70 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-accent-700">{item.title}</h2>
            <p className="mt-2 text-slate-700">{item.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
