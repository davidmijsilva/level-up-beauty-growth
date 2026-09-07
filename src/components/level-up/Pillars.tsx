import { Compass, HeartHandshake, Users } from "lucide-react";

const pillars = [
  {
    icon: Compass,
    title: "Descoberta da Oportunidade",
    text: "Desenvolve um projeto de empreendedorismo de forma flexível e ao teu próprio ritmo.",
  },
  {
    icon: HeartHandshake,
    title: "Acompanhamento e Orientação",
    text: "Apoio constante para conheceres os produtos, aprenderes e dares os teus primeiros passos com segurança.",
  },
  {
    icon: Users,
    title: "Comunidade e Crescimento",
    text: "Integração numa equipa onde podes partilhar experiências e desenvolver novas competências.",
  },
];

export function Pillars() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="max-w-2xl">
        <p className="label-caps text-[0.65rem] text-brand">O que nos torna únicos</p>
        <h2 className="mt-4 text-3xl text-foreground sm:text-4xl">Como te vamos ajudar a crescer</h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Na Level Up, o nosso maior diferencial é o acompanhamento. Ninguém precisa de saber
          tudo ou ter experiência prévia.
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
