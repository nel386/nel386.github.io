type SkillCategoryProps = {
  title: string;
  skills: readonly string[];
};

export default function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className="rounded-2xl border border-surface bg-surface-elevated p-6 shadow-card">
      <h3 className="font-semibold text-lg text-foreground">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-muted">
        {skills.map((skill) => (
          <li key={skill} className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
