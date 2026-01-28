import { SectionHeading } from "@/components/ui";

export default function AboutSection() {
  return (
    <section id="about" className="bg-transparent">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeading
          title="Sobre mí"
          subtitle="Me gusta traducir ideas complejas a experiencias simples, rápidas y bonitas. Trabajo con foco en producto, rendimiento y detalle visual."
        />

        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              Soy desarrollador Full Stack con foco en frontend moderno. React y
              Next.js son mi día a día, y disfruto tanto afinando el UX como
              asegurando que el backend y el despliegue sean sólidos.
            </p>
            <p>
              He puesto en producción apps auto-hosted, optimizado pipelines y
              trabajado con equipos pequeños donde cada decisión cuenta. Me
              muevo bien entre la estrategia de producto y la implementación
              técnica.
            </p>
            <p>
              Busco colaborar con startups y proyectos que valoren rendimiento,
              claridad y una ejecución limpia.
            </p>
          </div>

          <div className="rounded-2xl border border-surface bg-surface-elevated p-6 shadow-card">
            <h3 className="text-lg font-semibold text-foreground">Lo que aporto</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                <span>Interfaces rápidas con foco en accesibilidad y detalle.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                <span>Experiencia end-to-end: del diseño al despliegue.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                <span>Colaboración ágil, documentación clara y entregas sólidas.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
