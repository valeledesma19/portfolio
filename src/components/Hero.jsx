import TerminalCard from "./TerminalCard.jsx";

export default function Hero() {
  return (
    <section id="inicio" className="mx-auto max-w-5xl px-6 pb-20 pt-16 sm:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-teal">
            200 OK · Disponible para nuevas oportunidades
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl">
            Valentina Ledesma
          </h1>
          <p className="mt-3 font-display text-xl italic text-ink/70 sm:text-2xl">
            Desarrolladora Full Stack Java Junior
          </p>
          <p className="mt-6 max-w-md font-body text-[15px] leading-relaxed text-ink/70">
            Construyo aplicaciones web de punta a punta: APIs REST prolijas con{" "}
            <strong className="font-semibold text-ink">Spring Boot</strong>, interfaces
            claras con <strong className="font-semibold text-ink">React</strong>, y datos
            bien modelados en <strong className="font-semibold text-ink">SQL y NoSQL</strong>.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 font-mono text-sm">
            <a
              href="#proyectos"
              className="focus-ring rounded-md bg-ink px-5 py-2.5 text-paper transition-transform hover:-translate-y-0.5"
            >
              Ver proyectos
            </a>
            <a
              href="#contacto"
              className="focus-ring rounded-md border border-ink/20 px-5 py-2.5 text-ink transition-colors hover:border-ink/50"
            >
              Contactarme
            </a>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <TerminalCard />
        </div>
      </div>
    </section>
  );
}
