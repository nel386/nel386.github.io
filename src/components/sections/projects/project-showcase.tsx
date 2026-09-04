import { Button } from "@/components/ui";
import { PROJECTS } from "@/lib/constants";
import type { Project, ProjectStatus } from "@/types";

const STATUS_STYLES: Record<ProjectStatus, string> = {
  Publicado: "status-published",
  "En construcción": "status-building",
  "En realización": "status-in-progress",
  Pausado: "status-paused",
};

function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span className={`status-badge ${STATUS_STYLES[status]}`}>{status}</span>
  );
}

function ProjectLinks({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {project.liveUrl ? (
        <Button
          href={project.liveUrl}
          target="_blank"
          size={featured ? "md" : "sm"}
        >
          {project.liveLabel ?? "Abrir proyecto"}
        </Button>
      ) : null}
      {project.repoUrl ? (
        <Button
          href={project.repoUrl}
          target="_blank"
          variant="secondary"
          size={featured ? "md" : "sm"}
        >
          Ver código
        </Button>
      ) : null}
    </div>
  );
}

function ProjectMeta({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.16em] text-subtle">
      <span>{project.category}</span>
      <span aria-hidden="true" className="text-accent">
        /
      </span>
      <StatusBadge status={project.status} />
      {project.year ? <span>{project.year}</span> : null}
    </div>
  );
}

export default function ProjectShowcase() {
  const mainProjects = PROJECTS.filter(
    (project) => project.visibility === "principal",
  ).sort((a, b) => a.order - b.order);
  const featuredProject =
    mainProjects.find((project) => project.featured) ?? mainProjects[0];
  const otherProjects = mainProjects.filter(
    (project) => project.id !== featuredProject?.id,
  );
  const archivedProjects = PROJECTS.filter(
    (project) => project.visibility === "archivo",
  ).sort((a, b) => a.order - b.order);

  return (
    <div className="mt-12 space-y-10">
      {featuredProject ? (
        <article className="featured-project overflow-hidden rounded-[2rem] border border-surface bg-surface-elevated shadow-card">
          <div className="grid gap-0 md:grid-cols-[1.05fr_0.95fr]">
            <div className="p-7 md:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow">Proyecto de entrada</span>
                <StatusBadge status={featuredProject.status} />
              </div>

              <h3 className="mt-5 text-4xl font-semibold text-foreground md:text-5xl">
                {featuredProject.title}
              </h3>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
                {featuredProject.longDescription ?? featuredProject.description}
              </p>

              {featuredProject.role ? (
                <p className="mt-5 text-sm font-medium text-subtle">
                  Mi papel: {featuredProject.role}
                </p>
              ) : null}

              {featuredProject.highlights?.length ? (
                <ul className="mt-7 grid gap-3 text-sm text-muted sm:grid-cols-3">
                  {featuredProject.highlights.map((item) => (
                    <li
                      key={item}
                      className="border-t border-surface-strong pt-3"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="mt-7 flex flex-wrap gap-2">
                {featuredProject.stack.map((tech) => (
                  <span
                    key={tech}
                    className="chip rounded-full px-3 py-1 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-7">
                <ProjectLinks project={featuredProject} featured />
              </div>
            </div>

            <div className="project-demo-panel flex min-h-[360px] flex-col bg-[color:var(--footer-bg)] p-5 md:min-h-full md:p-6">
              <div className="flex items-center justify-between gap-4 text-xs text-[color:var(--ink-on-dark-muted)]">
                <span className="font-semibold uppercase tracking-[0.16em]">
                  La landing, en directo
                </span>
                <a
                  href="https://knela.es/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[color:var(--ink-on-dark)]"
                >
                  Abrir landing ↗
                </a>
              </div>
              <div className="mt-4 overflow-hidden rounded-2xl border border-[color:var(--line-on-dark)] bg-[#f8f6f2]">
                <iframe
                  src="https://knela.es/"
                  title="Landing de knelA"
                  scrolling="no"
                  className="knela-landing-frame pointer-events-none block w-full border-0"
                  loading="lazy"
                  style={{ height: "440px" }}
                />
              </div>
              <div className="mt-auto flex items-end justify-between gap-4 pt-4 text-sm text-[color:var(--ink-on-dark-muted)]">
                <span>La propuesta antes del primer pedido.</span>
                <span
                  aria-hidden="true"
                  className="text-lg text-[color:var(--accent)]"
                >
                  →
                </span>
              </div>
            </div>
          </div>
        </article>
      ) : null}

      {otherProjects.length ? (
        <div className="space-y-4">
          {otherProjects.map((project, index) => (
            <article
              key={project.id}
              className={`project-row project-row-${index % 3} rounded-2xl border border-surface bg-surface-elevated p-6 shadow-card md:p-7`}
            >
              <div className="grid gap-5 md:grid-cols-[5rem_1fr_auto] md:items-start md:gap-7">
                <div className="project-number text-3xl font-semibold text-foreground/30">
                  {String(index + 2).padStart(2, "0")}
                </div>
                <div>
                  <ProjectMeta project={project} />
                  <h3 className="mt-3 text-2xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 max-w-2xl leading-relaxed text-muted">
                    {project.description}
                  </p>
                  {project.highlights?.length ? (
                    <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-subtle">
                      {project.highlights.slice(0, 2).map((item) => (
                        <li
                          key={item}
                          className="before:mr-2 before:text-accent before:content-['↳']"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="chip rounded-full px-3 py-1 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:pt-1">
                  <ProjectLinks project={project} />
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : null}

      {archivedProjects.length ? (
        <aside className="archive-panel overflow-hidden rounded-[2rem] bg-[color:var(--footer-bg)] text-[color:var(--footer-text)] shadow-card">
          <div className="grid gap-8 p-7 md:grid-cols-[0.9fr_1.1fr] md:p-10">
            <div>
              <p className="eyebrow text-[color:var(--footer-muted)]">
                Archivo
              </p>
              <h3 className="mt-3 max-w-sm text-3xl font-semibold text-white">
                No todo proyecto tiene que volver.
              </h3>
              <p className="mt-4 max-w-sm leading-relaxed text-[color:var(--footer-muted)]">
                Aquí guardo las piezas que me enseñaron algo y que, por ahora,
                no necesitan fingir que siguen en marcha.
              </p>
            </div>
            <div className="space-y-5 border-t border-white/10 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
              {archivedProjects.map((project) => (
                <article key={project.id}>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--footer-muted)]">
                        01 / registro
                      </span>
                      <h4 className="text-2xl font-semibold text-white">
                        {project.title}
                      </h4>
                    </div>
                    <StatusBadge status={project.status} />
                  </div>
                  <p className="mt-3 max-w-xl leading-relaxed text-[color:var(--footer-muted)]">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    {project.highlights?.map((item) => (
                      <span
                        key={item}
                        className="text-sm text-[color:var(--footer-text)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex text-sm font-semibold text-[color:var(--accent)] hover:text-white"
                    >
                      Ver repositorio ↗
                    </a>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </aside>
      ) : null}
    </div>
  );
}
