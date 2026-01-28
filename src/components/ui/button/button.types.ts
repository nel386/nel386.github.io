export type ButtonType = "button" | "submit" | "reset";

export type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  target?: string;
  type?: ButtonType;
};
