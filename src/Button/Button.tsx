import { ButtonProps } from "./Button.types";
import scss from "./Button.module.scss";
import classNames from "classnames";
import { Slot } from "@radix-ui/react-slot";
import { Loading } from "../Icons/Loading/Loading";

export const Button = ({ size = "large", ...props }: ButtonProps) => {
  const Comp = props.asChild ? Slot : "button";

  const btnClasses = classNames(props.className, [scss.default], {
    [scss[size!]]: size,
    [scss.rounded]: props.rounded,
    [scss.primary]: !props.variant,
    [scss[props.variant!]]: props.variant,
  });

  const renderLoading = () => {
    const defaultLoading = (
      <Loading
        size={props.loadingSize}
        color={props.variant === "outline" ? "#9d3fe7" : "#fff"}
      />
    );
    return props.loadingIcon ?? defaultLoading;
  };

  const renderContent = () => (
    <>
      {props.icon && props.icon}
      {props.children}
    </>
  );

  return (
    <Comp
      {...props}
      className={btnClasses}
      aria-disabled={props.disabled}
      data-nofullscreen={props.noFullScreen}
    >
      {props.isLoading ? renderLoading() : renderContent()}
    </Comp>
  );
};
