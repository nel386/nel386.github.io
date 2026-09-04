import StatsSection from "@/components/sections/stats/stats-section";
import { SectionHeading } from "@/components/ui";
import ProjectShowcase from "./project-showcase";

export default function ProjectsSection() {
  return (
    <>
      <section id="projects" className="bg-transparent">
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionHeading
            title="El taller"
            subtitle="Productos, juegos y herramientas que he ido llevando de idea a algo que se puede tocar."
            align="center"
          />
          <ProjectShowcase />
        </div>
      </section>
      <StatsSection />
    </>
  );
}
