export type ProjectStatus =
  | "Publicado"
  | "En construcción"
  | "En realización"
  | "Pausado";

export type ProjectVisibility = "principal" | "archivo";

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  highlights?: readonly string[];
  role?: string;
  category: string;
  status: ProjectStatus;
  visibility: ProjectVisibility;
  order: number;
  stack: readonly string[];
  liveUrl?: string;
  liveLabel?: string;
  repoUrl?: string;
  imagePath?: string;
  featured?: boolean;
  year?: number;
};

export type SkillCategory = {
  category: "Frontend" | "Backend & Tools" | "DevOps";
  items: readonly string[];
};

export type ContactLink = {
  label: string;
  href: string;
  icon?: string;
};
