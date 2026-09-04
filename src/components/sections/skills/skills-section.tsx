import { SectionHeading } from "@/components/ui";
import { SKILLS } from "@/lib/constants";
import SkillCategory from "./skill-category";

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-transparent">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeading
          title="Skills"
          subtitle="Las herramientas que aparecen una y otra vez cuando estoy construyendo algo."
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
