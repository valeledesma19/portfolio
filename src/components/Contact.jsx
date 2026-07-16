const links = [
  { label: "Email", value: "valentinaledesma2407@gmail.com", href: "mailto:valentinaledesma2407@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/valentina-ledesma", href: "https://www.linkedin.com/in/valentina-ledesma-99b06133a" },
  { label: "GitHub", value: "github.com/valeledesma19", href: "https://github.com/valeledesma19" },
];

export default function Contact() {
  return (
    <section id="contacto" className="border-t border-line/80">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-ink/50">
          /contacto
        </p>
        <h2 className="mb-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
          ¿Trabajamos juntos?
        </h2>
        <p className="mb-8 max-w-md font-body text-[15px] text-ink/70">
          Estoy buscando mi primera oportunidad como desarrolladora. Escribime, con
          gusto charlamos.
        </p>
        <ul className="flex flex-wrap gap-4 font-mono text-sm">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="focus-ring flex items-center gap-2 rounded-md border border-ink/15 px-4 py-2.5 text-ink transition-colors hover:border-teal hover:text-teal"
              >
                <span className="text-ink/40">{l.label}:</span> {l.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <footer className="border-t border-line/80 py-6">
        <p className="mx-auto max-w-5xl px-6 font-mono text-xs text-ink/40">
          © {new Date().getFullYear()} Valentina Ledesma · construido con React + Vite + Tailwind
        </p>
      </footer>
    </section>
  );
}
