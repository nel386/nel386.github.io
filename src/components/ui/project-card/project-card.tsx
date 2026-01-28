import type { Project } from "../../../types";
import TechBadge from "./tech-badge";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-2xl border border-surface bg-surface-elevated p-6 shadow-card">
      <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
      <p className="mt-2 text-sm text-muted">{project.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2 text-xs text-muted">
        {project.stack.map((stackItem) => (
          <li key={stackItem}>
            <TechBadge label={stackItem} />
          </li>
        ))}
      </ul>
      <div className="mt-4 flex gap-3 text-sm">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            className="text-accent hover:text-[color:var(--accent-strong)]"
          >
            Live
          </a>
        ) : null}
        {project.repoUrl ? (
          <a href={project.repoUrl} className="text-muted hover:text-[color:var(--accent)]">
            Código
          </a>
        ) : null}
      </div>
    </article>
  );
}
