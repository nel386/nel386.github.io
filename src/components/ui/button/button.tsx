import { cn } from "@/lib/utils";
import type { ButtonProps } from "@/types";

const VARIANT_STYLES = {
  primary:
    "bg-[color:var(--accent)] text-[color:var(--accent-contrast)] hover:bg-[color:var(--accent-strong)] shadow-soft",
  secondary:
    "bg-surface text-foreground border border-surface-strong hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]",
  ghost:
    "bg-transparent text-muted hover:text-[color:var(--accent)] hover:bg-[color:var(--accent-soft)]",
};

const SIZE_STYLES = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-6 py-3 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  target = "_self",
  disabled = false,
  className,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]";
  const variantStyles = VARIANT_STYLES[variant];
  const sizeStyles = SIZE_STYLES[size];

  const computedClassName = cn(
    baseStyles,
    variantStyles,
    sizeStyles,
    disabled && "opacity-50 cursor-not-allowed",
    className,
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={computedClassName}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={computedClassName}
    >
      {children}
    </button>
  );
}
