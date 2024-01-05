import { useEffect, useState } from "react";
import { SliderProps } from "./Slider.types";
import scss from "./Slider.module.scss";

export const Slider = ({
  min = 0,
  max = 100,
  orientation = "horizontal",
  ...props
}: SliderProps) => {
  // if user don't have selected a slider value and you're using defaultValue, the sliderValue prop must be undefined
  const [value, setValue] = useState(props.defaultValue ?? 0);

  function handleChange(ev: React.ChangeEvent<HTMLInputElement>) {
    setValue(Number(ev.currentTarget.value));
  }

  function handleKeyDown(ev: React.KeyboardEvent<HTMLInputElement>) {
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

  const getBackgroundSize = (value: number) => {
    return { backgroundSize: `${(value * 100) / max}% 100%` };
  };

  useEffect(() => {
    props.setSliderValue(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <input
      min={min}
      max={max}
      type="range"
      value={value}
      aria-valuemax={max}
      aria-valuemin={min}
      aria-valuenow={value}
      className={scss.slider}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      style={getBackgroundSize(value)}
      aria-orientation={orientation}
    />
  );
};
