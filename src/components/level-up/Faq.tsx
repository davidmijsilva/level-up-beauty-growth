import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Os perfumes são originais ou imitações?",
    a: "Trabalhamos com fragrâncias originais criadas a partir das mesmas essências das grandes marcas mundiais, produzidas em Grasse (França). O que muda é a embalagem e a ausência de custos de marketing.",
  },
  {
    q: "Como conseguem um preço tão acessível por produtos de qualidade superior?",
    a: "Ao utilizarmos embalagens padronizadas da nossa marca parceira e ao eliminarmos custos com publicidade e intermediários, conseguimos entregar qualidade de excelência a um preço justo.",
  },
  {
    q: "É obrigatório fazer stock de produtos?",
    a: "Não! Trabalhas sem obrigatoriedade de stock e com risco zero.",
  },
  {
    q: "Preciso de experiência em vendas para começar?",
    a: "Não! Na Level Up, damos-te toda a formação contínua, estratégia e acompanhamento que precisas a partir do zero.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-brand-tint/60">
      <div className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="text-center">
          <p className="label-caps text-[0.65rem] text-brand">Dúvidas frequentes</p>
          <h2 className="mt-4 text-3xl text-foreground sm:text-4xl">
            Tudo o que precisas de saber antes de começar
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map(({ q, a }, i) => {
            const isOpen = open === i;
            return (
              <div key={q} className="rounded-2xl border border-border bg-card">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-medium text-foreground">{q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-brand transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
