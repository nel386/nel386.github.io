import { Button } from "@/components/ui";
import { PERSONAL_INFO } from "@/lib/constants";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-transparent">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="contact-panel grid gap-10 rounded-[2rem] bg-[color:var(--footer-bg)] p-7 text-[color:var(--footer-text)] shadow-card md:grid-cols-[1.15fr_0.85fr] md:gap-0 md:p-12">
          <div className="md:pr-12">
            <p className="eyebrow text-[color:var(--footer-muted)]">Contacto</p>
            <h2 className="mt-4 max-w-xl text-4xl font-semibold text-white md:text-5xl">
              Hablamos
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[color:var(--footer-muted)]">
              Cuéntame una idea, una duda o simplemente algo que te apetezca
              compartir.
            </p>
            <div className="mt-8">
              <Button href={`mailto:${PERSONAL_INFO.email}`} size="lg">
                Escribirme
              </Button>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--footer-muted)]">
              También estoy en
            </p>
            <div className="mt-5 space-y-4">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border-b border-white/10 pb-4 text-lg font-semibold text-white transition-colors hover:text-[color:var(--accent)]"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border-b border-white/10 pb-4 text-lg font-semibold text-white transition-colors hover:text-[color:var(--accent)]"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
