import { PiggyBank, HandCoins, Users, Plane, MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "./contact-info";

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

        <div className="mt-12 text-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full bg-brand px-8 text-base font-medium text-brand-foreground shadow-[0_12px_30px_-12px_var(--brand)] transition-transform hover:scale-[1.02]"
          >
            <MessageCircle className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
            Quero perceber como começar
          </a>
          <p className="mt-3 text-sm text-muted-foreground">
            Conversa simples, sem compromisso — explico-te tudo passo a passo.
          </p>
        </div>
      </div>
    </section>
  );
}
