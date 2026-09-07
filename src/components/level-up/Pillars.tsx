import { Compass, HeartHandshake, Users } from "lucide-react";

const pillars = [
  {
    icon: Compass,
    title: "Projeto flexível ao teu ritmo",
    text: "Tens autonomia para construir o teu negócio de beleza à medida da tua vida, sem horários rígidos ou pressa.",
  },
  {
    icon: HeartHandshake,
    title: "Acompanhamento próximo",
    text: "A Sara acompanha-te desde o início: apoio na apresentação dos produtos, dicas práticas e follow-up contínuo.",
  },
  {
    icon: Users,
    title: "Comunidade e crescimento",
    text: "Fazes parte de uma equipa unida onde partilhas experiências, aprendes com outras pessoas e celebras conquistas.",
  },
];

export function Pillars() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="max-w-2xl">
        <p className="label-caps text-[0.65rem] text-brand">Porquê juntar-te a nós</p>
        <h2 className="mt-4 text-3xl text-foreground sm:text-4xl">O que ganhas ao fazeres parte da Level Up</h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Um projeto pensado para quem quer começar sem ter de saber tudo desde o primeiro dia.
          O teu crescimento é a nossa prioridade.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map(({ icon: Icon, title, text }) => (
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
