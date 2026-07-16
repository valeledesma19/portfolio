const projects = [
  {
    name: "Sports Booking Platform",
    stack: "Java · Spring Boot · React",
    // TODO: confirmá/ajustá esta descripción con el detalle real del proyecto.
    desc: "Plataforma full stack para reservar turnos en instalaciones deportivas, con backend en Spring Boot y frontend en React.",
    repo: "https://github.com/valeledesma19/sports-booking-platform",
    demo: "https://sports-booking-platform-five.vercel.app/",
  },
  {
    name: "Prode Deportivo",
    stack: "JavaScript",
    desc: "Trabajo práctico integrador desarrollados en equipo durante la Tecnicatura. Sistema web de predicciones deportivas donde los usuarios pueden realizar pronósticos sobre partidos, consultar resultados y competir dentro de un ranking según sus aciertos.",
    repo: "https://github.com/valeledesma19/TPI-PROGRAMACION-4",
  },

];

export default function Projects() {
  return (
    <section id="proyectos" className="border-t border-line/80 bg-white/40">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-ink/50">
          /proyectos
        </p>
        <h2 className="mb-8 font-display text-3xl font-semibold text-ink">Proyectos</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.name}
              className="flex flex-col rounded-lg border border-line bg-paper p-5 transition-transform hover:-translate-y-1 hover:border-ink/30"
            >
              <p className="mb-1 font-mono text-[11px] uppercase tracking-wide text-teal">
                {p.stack}
              </p>
              <h3 className="mb-2 font-display text-lg font-semibold text-ink">
                {p.name}
              </h3>
              <p className="mb-4 flex-1 font-body text-sm leading-relaxed text-ink/70">
                {p.desc}
              </p>
              <div className="flex gap-4 font-mono text-xs">
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring rounded text-teal hover:text-ink"
                  >
                    Ver demo →
                  </a>
                )}
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring rounded text-ink/50 hover:text-ink"
                >
                  Ver código →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
