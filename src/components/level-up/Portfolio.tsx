import { Leaf, Rabbit, Sparkles, FlaskConical, Gem, Heart, Droplets, Zap, WheatOff, CircleOff } from "lucide-react";

const seals = [
  { icon: Leaf, label: "Bio" },
  { icon: Sparkles, label: "Vegan" },
  { icon: WheatOff, label: "Sem Glúten" },
  { icon: CircleOff, label: "Sem Parabenos" },
  { icon: Rabbit, label: "Cruelty-Free" },
];

const categories = [
  {
    icon: Gem,
    title: "Perfumes de Luxo",
    text: "Fragrâncias com 30% de essência pura, produzidas em Grasse (França), a capital mundial do perfume. Sem água adicionada, garantindo uma fixação premium.",
  },
  {
    icon: FlaskConical,
    title: "Cosmética Avançada",
    text: "Fórmulas de alta performance com ingredientes biológicos para uma pele radiante e saudável.",
  },
  {
    icon: Droplets,
    title: "Óleos Essenciais & Bem-estar",
    text: "Extratos 100% naturais e certificados para uso terapêutico e cosmético.",
  },
  {
    icon: Zap,
    title: "Limpeza Profissional & Nutrição",
    text: "Soluções de alta eficácia e gamas desenvolvidas para potenciar a tua energia.",
  },
];

export function Portfolio() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="max-w-2xl">
        <p className="label-caps text-[0.65rem] text-brand">O nosso portefólio</p>
        <h2 className="mt-4 text-3xl text-foreground sm:text-4xl">
          Qualidade de excelência, sem etiquetas de luxo
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Explora um universo de mais de 4500 produtos de alta qualidade, pensados para toda a
          família e para o teu bem-estar.
        </p>
      </div>

      <ul className="mt-10 flex flex-wrap gap-3">
        {seals.map(({ icon: Icon, label }) => (
          <li
            key={label}
            className="inline-flex items-center gap-2 rounded-full border border-brand-soft bg-brand-tint px-4 py-2"
          >
            <Icon className="h-4 w-4 text-brand" strokeWidth={1.5} aria-hidden="true" />
            <span className="label-caps text-[0.6rem] text-foreground">{label}</span>
          </li>
        ))}
      </ul>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
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
