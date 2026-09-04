import { PROJECTS } from "@/lib/constants";
import type { ProjectStatus } from "@/types";

const STATUS_ORDER: ProjectStatus[] = [
  "Publicado",
  "En construcción",
  "En realización",
];

const STATUS_STYLES: Record<ProjectStatus, string> = {
  Publicado: "status-published",
  "En construcción": "status-building",
  "En realización": "status-in-progress",
  Pausado: "status-paused",
};

export default function StatsSection() {
  const mainProjects = PROJECTS.filter(
    (project) => project.visibility === "principal",
  );

  return (
    <section id="stats" className="bg-surface-alt">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="eyebrow">Estado del taller</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">
              No todo tiene que estar terminado para estar vivo.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-muted">
            Este es el estado real de las piezas que forman el escaparate.
            Algunas ya están fuera; otras todavía están encontrando su forma.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {STATUS_ORDER.map((status) => {
            const count = mainProjects.filter(
              (project) => project.status === status,
            ).length;
            return (
              <div
                key={status}
                className="state-card border-t-2 border-[color:var(--accent)] pt-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className={`status-badge ${STATUS_STYLES[status]}`}>
                    {status}
                  </span>
                  <span className="text-4xl font-semibold text-foreground">
                    {count}
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted">
                  {status === "Publicado"
                    ? "Se pueden abrir, probar o instalar."
                    : status === "En construcción"
                      ? "Tienen una forma clara y siguen en movimiento."
                      : "Están en el taller, sin prometer una fecha."}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
