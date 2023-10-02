import { IconProps } from "../Icons.types";

export interface ArrowProps extends IconProps {
  variant?: boolean;
  orientation?: "left" | "up" | "down";
  outline?: boolean;
}
