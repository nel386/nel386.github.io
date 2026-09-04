import { SectionHeading } from "@/components/ui";

export default function AboutSection() {
  return (
    <section id="about" className="bg-transparent">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeading
          title="Sobre mí"
          subtitle="No tengo una línea única: me interesa ver qué pasa cuando una idea sale de la cabeza y se convierte en interfaz."
        />

        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              Soy Nelson y paso bastante tiempo entre el frontend, el producto y
              los pequeños detalles que hacen que una herramienta dé gusto
              usarla. React y TypeScript suelen ser mi punto de partida.
            </p>
            <p>
              Aquí conviven productos que ya se pueden abrir, juegos que todavía
              estoy afinando y proyectos que me han enseñado algo aunque no
              hayan llegado a ninguna parte concreta.
            </p>
            <p>
              Me interesa el recorrido completo: decidir qué merece existir,
              construirlo con cuidado y dejarlo en un estado que otra persona
              pueda probar.
            </p>
          </div>

          <div className="rounded-2xl border border-surface bg-surface-elevated p-6 shadow-card">
            <h3 className="text-lg font-semibold text-foreground">
              Lo que suelo cuidar
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                <span>
                  Que la primera interacción se entienda sin explicaciones.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                <span>Que el producto aguante después de la primera demo.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                <span>
                  Que cada decisión tenga una razón y no solo una tendencia.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
