import close from "./assets/close.png";
import closeVariant from "./assets/closeVariant.png";
import { CloseProps } from "./Close.types";

export const Close = ({ size = 24, variant }: CloseProps) => {
  return (
    <img width={size} height={size} src={variant ? closeVariant : close} />
  );
};
