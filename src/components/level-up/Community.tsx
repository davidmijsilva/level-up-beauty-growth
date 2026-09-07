import eventoFormacao from "@/assets/evento-formacao.jpg.asset.json";

export function Community() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="max-w-2xl">
        <p className="label-caps text-[0.65rem] text-brand">A nossa comunidade ao vivo</p>
        <h2 className="mt-4 text-3xl text-foreground sm:text-4xl">
          Pessoas reais, momentos reais
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Acreditamos que aprender com outras pessoas e ter apoio presencial e digital ao longo do
          caminho faz toda a diferença.
        </p>
      </div>

      <div className="mt-12">
        <img
          src={eventoFormacao.url}
          alt="Grande grupo de mulheres da equipa Level Up num evento de formação"
          className="mx-auto aspect-[16/9] w-full max-w-3xl rounded-3xl object-cover object-top shadow-[0_20px_45px_-30px_rgba(0,0,0,0.4)]"
          loading="lazy"
        />
      </div>
    </section>
  );
}
