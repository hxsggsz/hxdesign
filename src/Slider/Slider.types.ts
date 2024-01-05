export interface SliderProps {
  min?: number;
  max?: number;
  orientation: "horizontal" | "vertical";
  defaultValue?: number;
  setSliderValue: React.Dispatch<React.SetStateAction<number>>;
}
