import { PERSONAL_INFO } from "@/lib/constants";

const FOOTER_LINKS = [
  {
    title: "Social",
    links: [
      { label: "GitHub", href: PERSONAL_INFO.github, external: true },
      { label: "LinkedIn", href: PERSONAL_INFO.linkedin, external: true },
    ],
  },
  {
    title: "Contacto",
    links: [
      {
        label: "Email",
        href: `mailto:${PERSONAL_INFO.email}`,
        external: false,
      },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[color:var(--footer-bg)] text-[color:var(--footer-text)] py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold text-lg mb-3">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-sm text-[color:var(--footer-muted)]">
              {PERSONAL_INFO.title}
            </p>
            <p className="text-sm text-[color:var(--footer-muted)] mt-2">
              {PERSONAL_INFO.location}
            </p>
            <p className="text-sm text-[color:var(--footer-muted)] mt-2">
              {PERSONAL_INFO.availability}
            </p>
          </div>

          {FOOTER_LINKS.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-medium text-sm mb-3">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-[color:var(--footer-muted)] hover:text-[color:var(--accent)] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[color:var(--footer-muted)]">
              © {currentYear} {PERSONAL_INFO.name}. Todos los derechos
              reservados.
            </p>
            <div className="flex gap-4 text-sm text-[color:var(--footer-muted)]">
              <a href="#hero" className="hover:text-[color:var(--accent)] transition-colors">
                Volver arriba
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}