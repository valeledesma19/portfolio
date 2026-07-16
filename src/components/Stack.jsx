const groups = [
  {
    label: "backend",
    items: ["Java", "Spring Boot", "Spring Security", "JWT", "Hibernate / JPA", "APIs REST"],
  },
  {
    label: "frontend",
    items: ["React", "JavaScript", "HTML", "CSS", "Vite"],
  },
  {
    label: "databases",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    label: "tooling",
    items: ["Python", "Docker", "Postman", "Git"],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="border-t border-line/80">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-ink/50">
          /stack
        </p>
        <h2 className="mb-8 font-display text-3xl font-semibold text-ink">
          pom.xml <span className="text-ink/40">// dependencies</span>
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {groups.map((g) => (
            <div
              key={g.label}
              className="rounded-lg border border-line bg-white/60 p-5"
            >
              <p className="mb-3 font-mono text-xs uppercase tracking-wide text-teal">
                {g.label}
              </p>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-ink/15 bg-paper px-3 py-1 font-mono text-xs text-ink/80"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
