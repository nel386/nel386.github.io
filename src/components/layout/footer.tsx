import { PERSONAL_INFO } from "@/lib/constants";

const FOOTER_LINKS = [
  { label: "Taller", href: "#projects", external: false },
  { label: "Sobre mí", href: "#about", external: false },
  { label: "GitHub", href: PERSONAL_INFO.github, external: true },
  { label: "LinkedIn", href: PERSONAL_INFO.linkedin, external: true },
  { label: "Escribirme", href: "#contact", external: false },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[color:var(--footer-bg)] py-8 text-[color:var(--footer-text)]">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 border-t border-white/10 pt-7 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-white">Nelson González</p>
            <p className="mt-1 text-sm text-[color:var(--footer-muted)]">
              Productos, juegos y herramientas en movimiento.
            </p>
          </div>

          <nav
            aria-label="Enlaces del pie"
            className="flex flex-wrap gap-x-5 gap-y-2"
          >
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-sm text-[color:var(--footer-muted)] transition-colors hover:text-[color:var(--accent)]"
              >
                {link.label}
                {link.external ? " ↗" : ""}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-6 flex flex-col gap-2 text-xs text-[color:var(--footer-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {PERSONAL_INFO.name}
          </p>
          <a
            href="#hero"
            className="transition-colors hover:text-[color:var(--accent)]"
          >
            Volver arriba ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
