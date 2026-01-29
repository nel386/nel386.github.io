import { Button } from "../../ui";
import SectionHeading from "../../ui/section-heading";

export default function HeroContent() {
  return (
    <>
      <SectionHeading
        title="Nelson González"
        subtitle="Desarrollador Full Stack - React & Next.js"
      />
      <p className="mt-4 max-w-xl text-muted">
        Ahora construyendo Padeltracker.es: app para seguimiento de partidos,
        estadísticas y ranking. Málaga, España.
      </p>
      <div className="mt-6 flex gap-3">
        <Button href="#projects">Ver proyectos</Button>
        <Button href="#contact">Contactar</Button>
      </div>
    </>
  );
}
