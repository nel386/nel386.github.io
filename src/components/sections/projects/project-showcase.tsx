import { Button } from "@/components/ui";
import { PROJECTS } from "@/lib/constants";

export default function ProjectShowcase() {
  const featuredProject =
    PROJECTS.find((project) => project.featured) ?? PROJECTS[0];
  const otherProjects = PROJECTS.filter(
    (project) => project.id !== featuredProject?.id,
  );

  return (
    <div className="mt-12 space-y-8">
      {featuredProject ? (
        <article className="overflow-hidden rounded-3xl border border-surface bg-surface-elevated shadow-card">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 md:p-10">
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-subtle">
                <span>Destacado</span>
                {featuredProject.year ? (
                  <span className="rounded-full bg-surface-alt px-3 py-1 text-[11px] font-semibold text-muted">
                    {featuredProject.year}
                  </span>
                ) : null}
              </div>

              <h3 className="mt-4 text-3xl font-semibold text-foreground">
                {featuredProject.title}
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                {featuredProject.longDescription ?? featuredProject.description}
              </p>

              {featuredProject.role ? (
                <p className="mt-4 text-sm font-medium text-subtle">
                  Rol: {featuredProject.role}
                </p>
              ) : null}

              {featuredProject.highlights?.length ? (
                <ul className="mt-6 space-y-3 text-sm text-muted">
                  {featuredProject.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="mt-6 flex flex-wrap gap-2">
                {featuredProject.stack.map((tech) => (
                  <span
                    key={tech}
                    className="chip rounded-full px-3 py-1 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {featuredProject.liveUrl ? (
                  <Button href={featuredProject.liveUrl} target="_blank">
                    Ver proyecto -&gt;
                  </Button>
                ) : null}
                {featuredProject.repoUrl ? (
                  <Button
                    href={featuredProject.repoUrl}
                    target="_blank"
                    variant="secondary"
                  >
                    Ver código
                  </Button>
                ) : null}
              </div>
            </div>

            <div className="relative min-h-[260px] md:min-h-full bg-accent-gradient flex items-center justify-center">
              <div className="text-center text-white px-8">
                <p className="text-sm uppercase tracking-[0.3em] text-white/80">
                  Producto live
                </p>
                <h4 className="mt-3 text-3xl font-semibold">
                  {featuredProject.title}
                </h4>
                <p className="mt-3 text-sm text-white/80">
                  Captura disponible pronto
                </p>
              </div>
            </div>
          </div>
        </article>
      ) : null}

      {otherProjects.length ? (
        <div className="grid gap-6 md:grid-cols-2">
          {otherProjects.map((project) => (
            <article
              key={project.id}
              className="rounded-2xl border border-surface bg-surface-elevated p-6 shadow-card"
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-subtle">
                <span>{project.status ?? "Proyecto"}</span>
                {project.year ? <span>{project.year}</span> : null}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{project.description}</p>

              {project.highlights?.length ? (
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {project.highlights.slice(0, 2).map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="chip rounded-full px-3 py-1 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.liveUrl ? (
                  <Button href={project.liveUrl} target="_blank" size="sm">
                    Ver live
                  </Button>
                ) : null}
                {project.repoUrl ? (
                  <Button
                    href={project.repoUrl}
                    target="_blank"
                    variant="secondary"
                    size="sm"
                  >
                    Ver código
                  </Button>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      ) : null}
    </div>
  );
}
