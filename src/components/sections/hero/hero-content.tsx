import { Button } from "../../ui";

export default function HeroContent() {
  return (
    <>
      <p className="max-w-xl text-muted">
        Un laboratorio personal de productos, juegos y herramientas que voy
        convirtiendo en algo que se puede usar.
      </p>
      <div className="mt-6 flex gap-3">
        <Button href="#projects">Ver el taller</Button>
        <Button href="#contact" variant="secondary">
          Escribirme
        </Button>
      </div>
    </>
  );
}
