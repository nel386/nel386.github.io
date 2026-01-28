export default function TechBadge({ label }: { label: string }) {
  return (
    <span className="chip rounded-full px-3 py-1 text-xs font-medium">
      {label}
    </span>
  );
}