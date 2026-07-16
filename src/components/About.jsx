export default function About() {
  return (
    <section id="sobre-mi" className="border-t border-line/80 bg-white/40">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-ink/50">
          /sobre-mi
        </p>
        <h2 className="mb-6 font-display text-3xl font-semibold text-ink">Sobre mí</h2>
        <div className="grid gap-10 sm:grid-cols-[1.3fr_1fr]">
          <p className="max-w-xl font-body text-[15px] leading-relaxed text-ink/75">
            Soy Técnica Universitaria en Programación (UTN), orientada al desarrollo de
            aplicaciones web, con formación previa en desarrollo de software en la
            Escuela PROA. Me gusta entender el problema completo — desde el modelo de
            datos hasta la experiencia de quien usa la aplicación — y resolverlo con
            código simple y mantenible. Estoy buscando mi primera oportunidad
            profesional para seguir creciendo, sumando compromiso y ganas de aprender
            en equipo.
          </p>
          <dl className="space-y-4 font-mono text-sm">
            <div className="flex justify-between border-b border-line pb-2">
              <dt className="text-ink/50">education</dt>
              <dd className="text-right text-ink">UTN — Programación</dd>
            </div>
            <div className="flex justify-between border-b border-line pb-2">
              <dt className="text-ink/50">background</dt>
              <dd className="text-right text-ink">Bachiller Dllo. Software</dd>
            </div>
            <div className="flex justify-between border-b border-line pb-2">
              <dt className="text-ink/50">based_in</dt>
              <dd className="text-right text-ink">Argentina</dd>
            </div>
            <div className="flex justify-between pb-2">
              <dt className="text-ink/50">status</dt>
              <dd className="text-right text-teal">open_to_work</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
