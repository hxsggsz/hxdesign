import { ButtonProps } from "./Button.types";
import scss from "./Button.module.scss";
import classNames from "classnames";
import { minecraftClickSound } from "../utils/minecraftClickSound";
import { Slot } from "@radix-ui/react-slot";

export const Button = (props: ButtonProps) => {
  const Comp = props.asChild ? Slot : "button";

  const btnClasses = classNames({
    [scss.defaultBtn]: !props.variant,
    [scss.grass]: props.variant === "grass",
    [scss.outline]: props.variant === "outline",
    [scss.none]: props.variant === "none",
  });

  function handleClickCapture() {
    minecraftClickSound.play();
  }

  return (
    <Comp
      {...props}
      className={btnClasses}
      aria-disabled={props.disabled}
      onClickCapture={handleClickCapture}
      data-nofullscreen={props.noFullScreen}
    >
      {props.children}
    </Comp>
  );
};
