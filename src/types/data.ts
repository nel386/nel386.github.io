export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  highlights?: readonly string[];
  role?: string;
  status?: string;
  stack: readonly string[];
  liveUrl?: string;
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
