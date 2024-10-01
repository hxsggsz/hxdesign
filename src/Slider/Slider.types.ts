export interface SliderProps {
  max?: number;
  orientation: "horizontal" | "vertical";
  defaultValue?: number;
  setSliderValue: React.Dispatch<React.SetStateAction<number>>;
}
