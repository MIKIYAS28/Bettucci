import Image from 'next/image';
import heroImage from '../../bettucci.jpg';

export default function HomePage() {
  const highlights = [
    {
      title: 'Signature Dining',
      description: 'Thoughtful cuisine and elegant presentation shaped by rich Ethiopian warmth.',
    },
    {
      title: 'Local Hospitality',
      description: 'A neighborhood favorite with an elevated feel rooted in community and care.',
    },
    {
      title: 'Reservations',
      description: 'Book a table for intimate dinners, celebrations, and memorable evenings.',
    },
  ];

  return (
    <main className="space-y-8">
      <section className="overflow-hidden rounded-[2rem] border border-[#1f5a43]/30 bg-gradient-to-br from-[#0f3d2e] via-[#154f37] to-[#2a6a4a] p-6 text-white shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#d7f0de]">Welcome to</p>
            <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
              Bettucci Restaurant
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-[#e8f5eb]">
              A warm, high-end dining experience rooted in Addis Ababa with refined flavor, candlelit hospitality, and a touch of Italian soul.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/menu"
                className="rounded-full bg-[#f4d7a0] px-5 py-2.5 text-sm font-semibold text-[#0f3d2e] transition duration-300 hover:-translate-y-0.5"
              >
                Explore Menu
              </a>
              <a
                href="/reservation"
                className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5"
              >
                Book a Table
              </a>
            </div>
          </div>

          <div className="ethiopian-card relative overflow-hidden rounded-[1.5rem] border border-white/20 bg-[#103f2e]/70 p-3 shadow-2xl">
            <Image
              src={heroImage}
              alt="Bettucci restaurant presentation"
              className="h-[320px] w-full rounded-[1.2rem] object-cover"
              priority
            />
            <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/20 bg-[#0d2f22]/80 px-4 py-3 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.35em] text-[#d7f0de]">Signature Experience</p>
              <p className="mt-1 text-sm text-white">
                Crafted plates, slow hospitality, and a rich Ethiopian-Italian atmosphere.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {highlights.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-[#1f5a43]/20 bg-[#f9f5ee] p-6 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl"
          >
            <h2 className="text-xl font-semibold text-[#0f3d2e]">{item.title}</h2>
            <p className="mt-2 text-slate-700">{item.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
