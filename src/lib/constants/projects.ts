import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "padeltracker",
    title: "Padeltracker.es",
    description:
      "Plataforma web para centralizar resultados, estadísticas de jugador y gestión de partidos para clubes y jugadores amateurs.",
    longDescription:
      "Permite registrar partidos, generar métricas por jugador y visualizar la evolución en el tiempo, agilizando la toma de decisiones y el seguimiento del rendimiento.",
    highlights: [
      "Ranking y estadísticas por jugador con historial de evolución",
      "Panel de gestión de clubes y partidos con flujos simples",
      "Infraestructura auto-hosted con despliegues CI/CD",
    ],
    role: "Full Stack – producto, frontend, backend y despliegue",
    status: "Live",
    stack: [
      "Next.js 15",
      "TypeScript",
      "MongoDB Atlas",
      "NextAuth",
      "Nginx",
      "PM2",
      "GitHub Actions",
    ],
    liveUrl: "https://padeltracker.es",
    repoUrl: "https://github.com/nel386/padeltracker",
    featured: true,
    year: 2025,
  },
  {
    id: "impostor-game",
    title: "Impostor Game",
    description:
      "Juego social para grupos donde se reparten roles, palabras secretas e impostores desde un único dispositivo.",
    highlights: [
      "Flujo de juego rápido para grupos grandes",
      "Diseño móvil-first con UX clara y directa",
      "Landing con branding propio y assets ligeros",
    ],
    role: "Frontend & UX",
    status: "Live",
    stack: ["React", "TypeScript", "Vite"],
    liveUrl: "https://nel386.github.io/impostor-game/",
    repoUrl: "https://github.com/nel386/impostor-game",
    year: 2024,
  },
];