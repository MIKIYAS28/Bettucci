const menuCategories = [
  {
    title: 'Pizza',
    items: [
      { name: 'Margherita', description: 'Tomato, mozzarella, basil', price: 'ETB 1,200' },
      { name: 'Chicken Pizza', description: 'Roast chicken, caramelized onion', price: 'ETB 1,500' },
    ],
  },
  {
    title: 'Pasta',
    items: [
      { name: 'Spaghetti Bolognese', description: 'Slow-simmered sauce, parmesan', price: 'ETB 1,350' },
      { name: 'Carbonara', description: 'Egg yolk, pecorino, black pepper', price: 'ETB 1,450' },
    ],
  },
  {
    title: 'Desserts',
    items: [
      { name: 'Tiramisu', description: 'Espresso-soaked sponge and mascarpone', price: 'ETB 700' },
      { name: 'Panna Cotta', description: 'Silky vanilla custard and berry compote', price: 'ETB 650' },
    ],
  },
];

export default function MenuPage() {
  return (
    <main className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <section className="rounded-3xl border border-gold/20 bg-stone/80 p-8 shadow-2xl sm:p-10">
          <p className="font-heading text-xs uppercase tracking-[0.4em] text-gold-light">Menu</p>
          <h1 className="mt-3 text-3xl text-gold sm:text-4xl">A compact taste of the kitchen</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-ivory/80">
            Our menu blends Italian classics with the warmth and generosity of Ethiopian dining culture, with pasta, pizza, salads, and desserts designed for sharing.
          </p>
        </section>

        <div className="grid gap-6 lg:grid-cols-3">
          {menuCategories.map((category) => (
            <article key={category.title} className="rounded-2xl border border-gold/20 bg-noir/80 p-6">
              <h2 className="font-heading text-xl text-gold">{category.title}</h2>
              <div className="mt-4 space-y-3">
                {category.items.map((item) => (
                  <div key={item.name} className="border-b border-gold/10 pb-3 last:border-0 last:pb-0">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold text-ivory">{item.name}</p>
                        <p className="mt-1 text-sm text-ivory/65">{item.description}</p>
                      </div>
                      <p className="shrink-0 text-sm font-semibold text-gold-light">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
