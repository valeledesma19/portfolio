const links = [
  { href: "#sobre-mi", label: "/sobre-mi" },
  { href: "#stack", label: "/stack" },
  { href: "#proyectos", label: "/proyectos" },
  { href: "#contacto", label: "/contacto" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-line/80 bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#inicio"
          className="focus-ring rounded font-mono text-sm font-medium tracking-tight text-ink"
        >
          valeledesma19
        </a>
        <ul className="hidden gap-1 font-mono text-sm sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="focus-ring rounded px-3 py-1.5 text-ink/70 transition-colors hover:bg-ink/5 hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/CV_Valentina_Ledesma_ES.pdf"
          className="focus-ring rounded-md border border-ink/15 px-3 py-1.5 font-mono text-xs text-ink transition-colors hover:border-ink/40"
        >
          GET /cv
        </a>
      </nav>
    </header>
  );
}
