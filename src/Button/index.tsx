import { ButtonProps } from "./Button.types";
import scss from "./Button.module.scss";
import { useState } from "react";
import classNames from "classnames";
import { minecraftClickSound } from "../utils/minecraftClickSound";

export const Button = (props: ButtonProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const btnClasses = classNames({
    [scss.defaultBtn]: !props.variant,
    [scss.grass]: props.variant === "grass",
    [scss.none]: props.variant === "none",
  });

  function handleClickCapture() {
    minecraftClickSound.play();
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 1000);
  }

  return (
    <button
      {...props}
      className={btnClasses}
      aria-pressed={isClicked}
      aria-disabled={props.disabled}
      onClickCapture={handleClickCapture}
      data-nofullscreen={props.noFullScreen}
    >
      {props.children}
    </button>
  );
};
