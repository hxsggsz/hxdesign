export interface SliderProps {
  min: number;
  max: number;
  defaultValue?: number;
  setSliderValue: React.Dispatch<React.SetStateAction<number>> | undefined;
}
