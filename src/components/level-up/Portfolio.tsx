import { Sparkles, SprayCan, HeartHandshake, Home, Palette, Droplets } from "lucide-react";

const categories = [
  {
    icon: Sparkles,
    title: "Beleza",
    text: "Cuidados pensados para diferentes rotinas e necessidades.",
  },
  {
    icon: SprayCan,
    title: "Perfumes",
    text: "Fragrâncias para diferentes estilos e momentos.",
  },
  {
    icon: HeartHandshake,
    title: "Bem-estar",
    text: "Produtos para complementar uma rotina de cuidado pessoal.",
  },
  {
    icon: Home,
    title: "Casa",
    text: "Soluções para cuidar, limpar e perfumar os espaços.",
  },
  {
    icon: Palette,
    title: "Maquilhagem",
    text: "Produtos para expressar e realçar a tua beleza.",
  },
  {
    icon: Droplets,
    title: "Rituais de cuidado",
    text: "Óleos e outras soluções para momentos de bem-estar.",
  },
];

export function Portfolio() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="max-w-2xl">
        <p className="label-caps text-[0.65rem] text-brand">O nosso portefólio</p>
        <h2 className="mt-4 text-3xl text-foreground sm:text-4xl">
          Um catálogo para todas as rotinas
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Temos produtos para diferentes necessidades do dia a dia. Uma grande variedade significa
          mais possibilidades de encontrares as áreas com que mais te identificas e de construíres
          um projeto à tua maneira.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map(({ icon: Icon, title, text }) => (
          <article
            key={title}
            className="rounded-3xl border border-border bg-card p-7 transition-shadow hover:shadow-[0_20px_45px_-30px_rgba(0,0,0,0.4)]"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-tint">
              <Icon className="h-5 w-5 text-brand" strokeWidth={1.5} aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-xl text-foreground">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
