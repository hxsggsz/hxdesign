import { ButtonProps } from "./button.types";
import scss from "./button.module.scss";
import { useState } from "react";
import minecraftClickSound from "./assets/minecraft_click.mp3";
import classNames from "classnames";

export const Button = (props: ButtonProps) => {
  const clickSound = new Audio(minecraftClickSound);

  const [isClicked, setIsClicked] = useState(false);

  const inputClasses = classNames({
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
      className={inputClasses}
      aria-pressed={isClicked}
      aria-disabled={props.disabled}
      onClickCapture={handleClickCapture}
    >
      {props.children}
    </button>
  );
};
