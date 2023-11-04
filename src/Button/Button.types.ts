import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  noFullScreen?: boolean;
  children?: React.ReactNode;
  variant?: "grass" | "slider" | "outline" | "none";
}
