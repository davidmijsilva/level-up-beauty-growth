import { PiggyBank, HandCoins, Users, Plane } from "lucide-react";

const gains = [
  {
    icon: PiggyBank,
    title: "Compra e Economiza",
    text: "Acesso imediato às melhores condições de compra do mercado para o teu consumo próprio. Poupa e usa alta qualidade todos os dias.",
  },
  {
    icon: HandCoins,
    title: "Ganha com a Recomendação",
    text: "Lucra com a partilha de produtos de excelência. Oferecemos margens muito atrativas para as tuas recomendações.",
  },
  {
    icon: Users,
    title: "Constrói a tua Equipa",
    text: "Cria a tua própria rede e ganha até 35% em comissões adicionais e bónus mensais pelo volume da equipa. O teu crescimento não tem limites.",
  },
  {
    icon: Plane,
    title: "Viagens e Prémios",
    text: "O teu esforço é recompensado. Conquista viagens de incentivo inesquecíveis e participa em eventos exclusivos.",
  },
];

export function Business() {
  return (
    <section className="bg-brand-tint/60">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <p className="label-caps text-[0.65rem] text-brand">O teu negócio na prática</p>
          <h2 className="mt-4 text-3xl text-foreground sm:text-4xl">
            Quatro formas de ganhar, um só projeto
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Um modelo de negócio simples e transparente, pensado para cresceres ao teu ritmo.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {gains.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-3xl border border-border bg-card p-7 transition-shadow hover:shadow-[0_20px_45px_-30px_rgba(0,0,0,0.4)]"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-tint">
                <Icon className="h-5 w-5 text-brand" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
