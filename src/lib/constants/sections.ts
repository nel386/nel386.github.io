export const SECTIONS = [
  { id: "hero", label: "Inicio" },
  { id: "projects", label: "Proyectos" },
  { id: "about", label: "Sobre mí" },
  { id: "skills", label: "Skills" },
  { id: "stats", label: "Estado" },
  { id: "contact", label: "Contacto" },
];

export type Section = (typeof SECTIONS)[number];
