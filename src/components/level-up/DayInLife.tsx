import { Clock, MessageCircleHeart, Share2 } from "lucide-react";
import equipaRua from "@/assets/equipa-rua.webp";

const steps = [
  {
    icon: Clock,
    title: "Flexibilidade total",
    text: "Não há horários rígidos nem chefes. Trabalhas as horas que decidires e geres o teu tempo de onde quiseres.",
  },
  {
    icon: MessageCircleHeart,
    title: "Apoio constante",
    text: "Tens a equipa à distância de um clique para tirares dúvidas rápidas, partilhares dicas e celebrares vitórias.",
  },
  {
    icon: Share2,
    title: "Partilha orgânica",
    text: "O trabalho foca-se em partilhar a tua experiência genuína com os produtos nas redes sociais ou com quem te rodeia.",
  },
];

export function DayInLife() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="min-w-0">
          <p className="label-caps text-[0.65rem] text-brand">Um dia na equipa Level Up</p>
          <h2 className="mt-4 text-3xl text-foreground sm:text-4xl">
            O teu dia a dia, feito à tua medida
          </h2>

          <ol className="mt-10 space-y-8">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="relative flex gap-5">
                {i < steps.length - 1 && (
                  <span
                    className="absolute left-6 top-12 h-[calc(100%-1rem)] w-px bg-brand-soft"
                    aria-hidden="true"
                  />
                )}
                <span className="relative inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-tint">
                  <Icon className="h-5 w-5 text-brand" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <img
          src={equipaRua}
          alt="Equipa Level Up num momento descontraído na rua"
          className="aspect-[4/5] w-full rounded-[2.5rem] object-cover shadow-[0_20px_45px_-30px_rgba(0,0,0,0.4)]"
          loading="lazy"
        />
      </div>
    </section>
  );
}
