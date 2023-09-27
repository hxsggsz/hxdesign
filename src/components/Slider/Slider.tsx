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

  const buttonX = useMotionValue(0);
  const progress = useTransform(buttonX, (v) => v + buttonSize / 2);
  const background = useMotionTemplate`
    linear-gradient(90deg, #423f40 ${progress}px, #7f7d7e 0)`;

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const maxDragAreaRef = useRef<HTMLDivElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setValue] = useState(0);

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

    if (!props.setSliderValue) {
      setValue(Math.round(newProgress * (max - min)));
      return;
    }

    props.setSliderValue(Math.round(newProgress * (max - min)));
  }

  function handlePointerDown(ev: React.PointerEvent<HTMLDivElement>) {
    if (!progressBarRef.current) return;
    const { left, width } = progressBarRef.current.getBoundingClientRect();
    const position = ev.pageX - left;
    const newProgress = position / width;

    if (!props.setSliderValue) {
      setValue(Math.round(newProgress * (max - min)));
      console.log(Math.round(newProgress * (max - min)));
      return;
    }

    props.setSliderValue(Math.round(newProgress * (max - min)));
    animate(buttonX, newProgress * width);
  }

  useEffect(() => {
    if (!progressBarRef.current) return;
    const newProgress = (props.defaultValue ?? 0) / (max - min);
    const progressBarBounds = progressBarRef.current.getBoundingClientRect();

    buttonX.set(newProgress * progressBarBounds.width);
  }, [buttonX, max, min, props.defaultValue]);

  return (
    <div
      ref={maxDragAreaRef}
      className={scss.track}
      style={{ background: background.get() }}
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
        whileDrag={{ cursor: "grabbing" }}
        dragMomentum={false}
        className={scss.button}
        style={{ x: buttonX }}
        dragConstraints={maxDragAreaRef}
        onClickCapture={handleClickCapture}
      />
      <div onPointerDown={handlePointerDown} className={scss.trackClick} />
    </div>
  );
};
