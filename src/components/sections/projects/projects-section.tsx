import { SectionHeading } from "@/components/ui";
import ProjectShowcase from "./project-showcase";

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-transparent">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeading
          title="Proyectos destacados"
          subtitle="Productos en los que he trabajado recientemente: desde el diseño hasta el despliegue."
          align="center"
        />
        <ProjectShowcase />
      </div>
    </section>
  );
}
