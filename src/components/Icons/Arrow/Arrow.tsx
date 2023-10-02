import { ArrowProps } from "./Arrow.types";
import arrow from "./Assets/Arrow.png";
import arrowOutlined from "./Assets/ArrowOutlined.png";
import variantArrow from "./Assets/variantArrow.png";
import variantArrowOutlined from "./Assets/variantArrowOutlined.png";
import scss from "./Arrow.module.scss";

export const Arrow = ({ size = 24, ...props }: ArrowProps) => {
  const renderDefaultArrow = () => (
    <img
      width={size}
      height={size}
      alt="an arrow icon"
      className={scss.arrow}
      data-orientation={props.orientation}
      src={props.outline ? arrowOutlined : arrow}
    />
  );

  const renderVariantArrow = () => (
    <img
      width={size}
      height={size}
      alt="an arrow icon"
      className={scss.arrow}
      data-orientation={props.orientation}
      src={props.outline ? variantArrowOutlined : variantArrow}
    />
  );
  return props.variant ? renderVariantArrow() : renderDefaultArrow();
};
