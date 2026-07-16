import { useEffect, useState } from "react";

const RESPONSE_LINES = [
  "GET /developers/valentina-ledesma HTTP/1.1",
  "Status: 200 OK",
  "",
  "{",
  '  "name": "Valentina Ledesma",',
  '  "role": "Full Stack Java Developer",',
  '  "level": "Junior",',
  '  "stack": ["Java", "Spring Boot", "React", "PostgreSQL"],',
  '  "location": "Argentina",',
  '  "open_to_work": true',
  "}",
];

export default function TerminalCard() {
  const [visibleLines, setVisibleLines] = useState(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? RESPONSE_LINES.length
      : 0
  );

  useEffect(() => {
    if (visibleLines >= RESPONSE_LINES.length) return;
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 220);
    return () => clearTimeout(t);
  }, [visibleLines]);

  return (
    <div className="w-full max-w-md rounded-lg border border-ink/15 bg-ink text-paper shadow-[6px_6px_0_0_rgba(20,36,51,0.15)]">
      <div className="flex items-center gap-1.5 border-b border-paper/10 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-paper/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-paper/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-paper/20" />
        <span className="ml-2 font-mono text-xs text-paper/50">api.valentina.dev</span>
      </div>
      <pre className="overflow-x-auto px-4 py-4 font-mono text-[13px] leading-6">
        {RESPONSE_LINES.slice(0, visibleLines).map((line, i) => (
          <div key={i}>
            {line.startsWith("Status") ? (
              <span className="text-teal">{line}</span>
            ) : line.includes('"open_to_work": true') ? (
              <span>
                {'  "open_to_work": '}
                <span className="text-amber">true</span>
              </span>
            ) : (
              <span className="text-paper/90">{line || "\u00A0"}</span>
            )}
          </div>
        ))}
        {visibleLines < RESPONSE_LINES.length && (
          <span className="inline-block h-4 w-2 animate-pulse bg-amber align-middle" />
        )}
      </pre>
    </div>
  );
}
