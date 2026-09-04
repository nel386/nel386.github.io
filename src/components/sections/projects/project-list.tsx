import { ProjectCard } from "@/components/ui";
import { PROJECTS } from "@/lib/constants";

export default function ProjectList() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
      {PROJECTS.filter((project) => project.visibility === "principal")
        .sort((a, b) => a.order - b.order)
        .map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
    </div>
  );
}
