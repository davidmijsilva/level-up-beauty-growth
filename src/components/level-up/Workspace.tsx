import saraMostruario from "@/assets/sara-mostruario.png.asset.json";
import seniorLeader from "@/assets/senior-leader.jpg.asset.json";

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
            Trabalha com produtos que as pessoas adoram, num ambiente descontraído e com total
            flexibilidade. Podes gerir o teu tempo e o teu crescimento de onde quiseres.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <PhotoPlaceholder label="Espaço para foto com os produtos" className="aspect-square" />
            <PhotoPlaceholder label="Espaço para foto de ambiente" className="aspect-square" />
          </div>
        </div>

        <img
          src={saraMostruario.url}
          alt="Sara Pereira a sorrir enquanto mostra um mostruário de perfumes da equipa Level Up"
          className="w-full rounded-[2.5rem] object-cover shadow-[0_30px_60px_-35px_rgba(0,0,0,0.4)]"
          loading="lazy"
        />
      </div>
    </section>
  );
}
