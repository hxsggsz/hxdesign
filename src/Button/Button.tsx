import { ButtonProps } from "./Button.types";
import scss from "./Button.module.scss";
import classNames from "classnames";
import { minecraftClickSound } from "../utils/minecraftClickSound";
import { Slot } from "@radix-ui/react-slot";
import { Loading } from "../Icons/Loading/Loading";

export const Button = (props: ButtonProps) => {
  const Comp = props.asChild ? Slot : "button";

  const btnClasses = classNames(props.className, {
    [scss.defaultBtn]: !props.variant,
    [scss[props.variant!]]: props.variant,
    [scss.rounded]: props.rounded,
    [scss.defaultBtn]: !props.variant,
  });

  function handleClickCapture() {
    minecraftClickSound.play();
  }

  const renderLoading = () => {
    const defaultLoading = (
      <Loading size={props.loadingSize} color={props.loadingColor} />
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
      onClickCapture={handleClickCapture}
      data-nofullscreen={props.noFullScreen}
    >
      {props.isLoading ? renderLoading() : renderContent()}
    </Comp>
  );
};
