import { ArrowProps } from "./Arrow.types";
import arrow from "./Assets/Arrow.png";
import arrowOutlined from "./Assets/ArrowOutlined.png";
import variantArrow from "./Assets/variantArrow.png";
import variantArrowOutlined from "./Assets/variantArrowOutlined.png";
import scss from "./Arrow.module.scss";

export const Arrow = ({ size = 24, ...props }: ArrowProps) => {
  const renderDefaultArrow = () => (
    <img
      src={props.outline ? arrowOutlined : arrow}
      width={size}
      height={size}
      className={scss.arrow}
      data-orientation={props.orientation}
    />
  );

  const renderVariantArrow = () => (
    <img
      src={props.outline ? variantArrowOutlined : variantArrow}
      width={size}
      height={size}
      className={scss.arrow}
      data-orientation={props.orientation}
    />
  );
  return props.variant ? renderVariantArrow() : renderDefaultArrow();
};
