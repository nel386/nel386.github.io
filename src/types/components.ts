import type { ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  target?: "_blank" | "_self";
  disabled?: boolean;
  className?: string;
};

export type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};
