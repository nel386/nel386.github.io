import type { SectionHeadingProps } from "@/types";

export default function SectionHeading({
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const alignClass =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <header className={`mb-8 flex flex-col gap-3 ${alignClass}`}>
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
        <span className="bg-gradient-to-r from-[color:var(--foreground)] via-[color:var(--muted)] to-[color:var(--subtle)] bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      <div className="h-1 w-12 rounded-full bg-[color:var(--accent)]" />
      {subtitle && <p className="text-base text-muted max-w-2xl">{subtitle}</p>}
    </header>
  );
}
