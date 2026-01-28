import { SectionHeading } from "@/components/ui";
import { SKILLS } from "@/lib/constants";
import SkillCategory from "./skill-category";

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-transparent">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeading
          title="Skills"
          subtitle="Tecnologías que uso activamente para construir productos sólidos, desde el UI hasta el despliegue."
        />
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {SKILLS.map((skillGroup) => (
            <SkillCategory
              key={skillGroup.category}
              title={skillGroup.category}
              skills={skillGroup.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
