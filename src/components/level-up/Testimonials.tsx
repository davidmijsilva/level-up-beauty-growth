import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ana T.",
    text: "Trabalhar com a Sara? É ter um exemplo num ombro amigo! Ter uma líder como a Sara é saber que quando o caminho for mais difícil, ela empurra para ajudar na subida e ampara para não nos deixar cair.",
  },
  {
    name: "Jéssica",
    text: "Trabalhar contigo há mais de dois anos tem sido incrível, não podia estar mais feliz! Desde o acompanhamento, desde a atenção, o trabalho que tens connosco tem sido imprescindível no meu percurso.",
  },
  {
    name: "Ana S.",
    text: "Nos momentos bons e menos bons, nunca me deixou desistir. Obrigada por toda a paciência, apoio e por acreditares em mim, mesmo quando eu própria duvido.",
  },
  {
    name: "Margarida Saraiva",
    text: "Gosto da confiança que temos, da forma como comunicamos e do ambiente leve que conseguimos manter. Isso torna o trabalho mais fácil e produtivo.",
  },
];

export function Testimonials() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="max-w-2xl">
        <p className="label-caps text-[0.65rem] text-brand">Testemunhos</p>
        <h2 className="mt-4 text-3xl text-foreground sm:text-4xl">
          O que diz quem já trabalha connosco
        </h2>
      </div>

      <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0">
        {testimonials.map(({ name, text }) => (
          <figure
            key={name}
            className="w-[85%] shrink-0 snap-center rounded-3xl border border-border bg-card p-7 sm:w-auto"
          >
            <Quote className="h-6 w-6 text-brand-soft" strokeWidth={1.5} aria-hidden="true" />
            <blockquote className="mt-4 text-sm leading-relaxed text-foreground/80">
              “{text}”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-dashed border-brand-soft bg-brand-tint text-xs text-brand">
                foto
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-medium text-foreground">{name}</span>
                <span className="block text-xs text-muted-foreground">Equipa Level Up</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-2 text-xs text-muted-foreground sm:hidden">Desliza para ver mais →</p>
    </section>
  );
}
