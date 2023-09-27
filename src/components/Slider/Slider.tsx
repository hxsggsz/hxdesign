import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import scss from "./Slider.module.scss";
import minecraftClickSound from "../../assets/minecraft_click.mp3";
import { useEffect, useRef, useState } from "react";
import { SliderProps } from "./Slider.types";

export const Slider = ({ min = 0, max = 100, ...props }: SliderProps) => {
  const buttonSize = 12;

  const buttonX = useMotionValue(props.defaultValue ?? 0);
  const progress = useTransform(buttonX, (v) => v + buttonSize / 2);
  const background = useMotionTemplate`
    linear-gradient(90deg, #423f40 ${progress.get()}px, #7f7d7e 0)`;

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const maxDragAreaRef = useRef<HTMLDivElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  const [value, setValue] = useState(props.defaultValue ?? 0);

  const clickSound = new Audio(minecraftClickSound);

  function handleClickCapture() {
    clickSound.play();
  }

  function handleDrag() {
    if (!buttonRef.current || !progressBarRef.current) return;

    const buttonBounds = buttonRef.current.getBoundingClientRect();
    const middleButton = buttonBounds.x + buttonBounds.width / 2;
    const progressBarBounds = progressBarRef.current.getBoundingClientRect();
    const newProgress =
      (middleButton - progressBarBounds.x) / progressBarBounds.width;
    setValue(Math.round(newProgress * (max - min)));
  }

  function handlePointerDown(ev: React.PointerEvent<HTMLDivElement>) {
    if (!progressBarRef.current) return;

    const { left, width } = progressBarRef.current.getBoundingClientRect();
    const position = ev.pageX - left;
    const newProgress = Math.max(0, Math.min(position / width, 1));
    const newValue = Math.round(newProgress * (max - min));

    setValue(newValue);
    animate(buttonX, newProgress * width);
  }

  function handleKeyDown(ev: React.KeyboardEvent<HTMLButtonElement>) {
    switch (ev.key) {
      case "ArrowLeft":
        if (value === min) return;
        setValue((prev) => (prev -= 1));
        break;

      case "ArrowRight":
        if (value === max) return;
        setValue((prev) => (prev += 1));
        break;

      default:
        break;
    }
  }

  useEffect(() => {
    if (!progressBarRef.current) return;
    const newProgress = value / (max - min);
    const progressBarBounds = progressBarRef.current.getBoundingClientRect();

    buttonX.set(newProgress * progressBarBounds.width);
  }, [buttonX, max, min, value]);

  useEffect(() => {
    if (props.setSliderValue) props.setSliderValue(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div
      role="slider"
      aria-valuemin={min}
      aria-valuemax={max}
      ref={maxDragAreaRef}
      aria-valuenow={value}
      className={scss.track}
      aria-orientation="horizontal"
      style={{ background: background.get() }}
      aria-valuetext={`the value of this slider is: ${value}`}
    >
      <div
        className={scss.trackProgress}
        ref={progressBarRef}
        style={{
          left: buttonSize,
          right: buttonSize,
        }}
      />

      <motion.button
        drag="x"
        ref={buttonRef}
        dragElastic={false}
        onDrag={handleDrag}
        dragMomentum={false}
        className={scss.button}
        style={{ x: buttonX }}
        onKeyDown={handleKeyDown}
        dragConstraints={maxDragAreaRef}
        whileDrag={{ cursor: "grabbing" }}
        onClickCapture={handleClickCapture}
        aria-label="button that trigger the slider"
      />
      <div onPointerDown={handlePointerDown} className={scss.trackClick} />
    </div>
  );
};
