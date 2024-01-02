import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  noFullScreen?: boolean;
  children?: React.ReactNode;
  rounded?: boolean;
  isLoading?: boolean;
  icon?: React.ReactElement;
  loadingIcon?: React.ReactElement | string;
  loadingColor?: string;
  loadingSize?: number;
  variant?: "grass" | "slider" | "outline" | "none";
  size?: "small" | "medium" | "large" | "none";
}
