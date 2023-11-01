export interface ButtonProps extends React.ComponentProps<"button"> {
  children?: React.ReactNode;
  variant?: "grass" | "slider" | "none";
  noFullScreen?: boolean;
}
