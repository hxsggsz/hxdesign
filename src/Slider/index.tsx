import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import scss from "./Slider.module.scss";
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
  // if user don't have selected a slider value and you're using defaultValue, the sliderValue prop must be undefined
  const [value, setValue] = useState(
    props.sliderValue ?? props.defaultValue ?? 0
  );

  function clamp(number: number, min: number, max: number) {
    return Math.max(min, Math.min(number, max));
  }

  function handleDrag() {
    if (!buttonRef.current || !progressBarRef.current) return;

    const buttonBounds = buttonRef.current.getBoundingClientRect();
    const middleButton = buttonBounds.x + buttonBounds.width / 2;
    const progressBarBounds = progressBarRef.current.getBoundingClientRect();
    const newProgress =
      (middleButton - progressBarBounds.x) / progressBarBounds.width;
    setValue(newProgress * (max - min));
  }

  function handlePointerDown(ev: React.PointerEvent<HTMLDivElement>) {
    if (!progressBarRef.current) return;

    const { left, width } = progressBarRef.current.getBoundingClientRect();
    const position = ev.pageX - left;
    const newProgress = clamp(position / width, 0, 1);
    const newValue = newProgress * (max - min);

    setValue(newValue);
    animate(buttonX, newProgress * width);
  }

  function handleKeyDown(ev: React.KeyboardEvent<HTMLButtonElement>) {
    switch (ev.key) {
      case "ArrowLeft":
        if (value <= min) return;
        setValue((prev) => (prev -= 1));
        break;

      case "ArrowRight":
        if (value >= max) return;
        setValue((prev) => (prev += 1));
        break;

      case "Home":
        setValue(min);
        break;

      case "End":
        setValue(max);
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
  }, [props, value]);

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
          left: buttonSize / 2,
          right: buttonSize / 2,
        }}
      />

      <motion.button
        drag="x"
        ref={buttonRef}
        dragElastic={false}
        onDrag={handleDrag}
        dragMomentum={false}
        style={{
          width: buttonSize,
          height: buttonSize,
          x: buttonX,
        }}
        className={scss.button}
        onKeyDown={handleKeyDown}
        data-testid="trigger-button"
        dragConstraints={maxDragAreaRef}
        whileDrag={{ cursor: "grabbing" }}
        aria-label="button that trigger the slider"
      />
      <div
        data-testid="click-slider"
        onPointerDown={handlePointerDown}
        className={scss.trackClick}
      />
    </div>
  );
};
