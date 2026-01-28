import type { SkillCategory } from "@/types";

export const SKILLS: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      "React (hooks, patterns modernos)",
      "Next.js 15 (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "HTML5 & CSS moderno",
      "Responsive design",
      "Accesibilidad (a11y)",
    ],
  },
  {
    category: "Backend & Tools",
    items: [
      "Node.js",
      "APIs REST",
      "MongoDB (Atlas)",
      "NextAuth",
      "Git & GitHub",
      "Testing (Jest, React Testing Library)",
    ],
  },
  {
    category: "DevOps",
    items: [
      "Docker",
      "Nginx (reverse proxy)",
      "PM2",
      "CI/CD con GitHub Actions",
      "Oracle Cloud (Compute)",
      "Linux (administración básica)",
    ],
  },
];