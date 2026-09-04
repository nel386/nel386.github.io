import { PERSONAL_INFO } from "@/lib/constants";

export default function ContactLinks() {
  return (
    <div className="flex flex-wrap gap-4 text-sm text-muted">
      <a
        className="text-accent hover:text-[color:var(--accent-strong)]"
        href="#contact"
      >
        Escribirme
      </a>
      <a
        className="text-accent hover:text-[color:var(--accent-strong)]"
        href={PERSONAL_INFO.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub ↗
      </a>
      <a
        className="text-accent hover:text-[color:var(--accent-strong)]"
        href={PERSONAL_INFO.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn ↗
      </a>
    </div>
  );
}
