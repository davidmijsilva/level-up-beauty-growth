import saraRetrato from "@/assets/sara-retrato.jpg.asset.json";
import { PhotoPlaceholder } from "./PhotoPlaceholder";

export function Workspace() {
  return (
    <section className="bg-brand-tint/60">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2">
        <div className="min-w-0">
          <p className="label-caps text-[0.65rem] text-brand">Por dentro da equipa</p>
          <h2 className="mt-4 text-3xl text-foreground sm:text-4xl">
            Um dia a dia leve, digital e feito à tua medida
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Trabalhamos com produtos que as pessoas adoram e com uma rotina que se adapta à tua
            vida. Aqui ficam alguns momentos do nosso ambiente de trabalho.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <PhotoPlaceholder label="Espaço para foto com os produtos" className="aspect-square" />
            <PhotoPlaceholder label="Espaço para foto de ambiente" className="aspect-square" />
          </div>
        </div>

        <img
          src={saraRetrato.url}
          alt="Retrato de Sara Pereira, líder da equipa Level Up"
          className="w-full rounded-[2.5rem] object-cover shadow-[0_30px_60px_-35px_rgba(0,0,0,0.4)]"
          loading="lazy"
        />
      </div>
    </section>
  );
}
