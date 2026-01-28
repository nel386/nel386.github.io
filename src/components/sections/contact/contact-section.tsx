import { Button, SectionHeading } from "@/components/ui";
import { PERSONAL_INFO } from "@/lib/constants";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-transparent">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeading
          title="Contacto"
          subtitle="¿Tienes un proyecto o necesitas apoyo técnico? Escríbeme y coordinamos una llamada."
        />

        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5 text-muted">
            <p>
              Estoy disponible para trabajo remoto, colaboraciones puntuales y
              proyectos full-stack. Si necesitas ayuda para lanzar o mejorar un
              producto, aquí estoy.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href={`mailto:${PERSONAL_INFO.email}`}>
                Escríbeme
              </Button>
              <Button href={PERSONAL_INFO.linkedin} target="_blank" variant="secondary">
                LinkedIn
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-2xl border border-surface bg-surface-elevated p-5 shadow-card">
              <p className="text-xs uppercase tracking-[0.2em] text-subtle">Email</p>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="mt-2 block text-lg font-semibold text-foreground hover:text-[color:var(--accent)]"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>
            <div className="rounded-2xl border border-surface bg-surface-elevated p-5 shadow-card">
              <p className="text-xs uppercase tracking-[0.2em] text-subtle">GitHub</p>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-sm font-medium text-muted hover:text-[color:var(--accent)]"
              >
                {PERSONAL_INFO.github.replace("https://", "")}
              </a>
            </div>
            <div className="rounded-2xl border border-surface bg-surface-elevated p-5 shadow-card">
              <p className="text-xs uppercase tracking-[0.2em] text-subtle">LinkedIn</p>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-sm font-medium text-muted hover:text-[color:var(--accent)]"
              >
                {PERSONAL_INFO.linkedin.replace("https://", "")}
              </a>
            </div>
            <p className="text-sm text-subtle">{PERSONAL_INFO.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
