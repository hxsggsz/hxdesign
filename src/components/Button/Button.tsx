import { ButtonProps } from "./Button.types";
import scss from "./Button.module.scss";
import { useState } from "react";
import minecraftClickSound from "./assets/minecraft_click.mp3";
import classNames from "classnames";

export const Button = (props: ButtonProps) => {
  const clickSound = new Audio(minecraftClickSound);

  const [isClicked, setIsClicked] = useState(false);

  const btnClasses = classNames({
    [scss.grass]: props.variant,
    [scss.defaultBtn]: !props.variant,
  });

  function handleClickCapture() {
    clickSound.play();
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
    >
      {props.children}
    </button>
  );
};
