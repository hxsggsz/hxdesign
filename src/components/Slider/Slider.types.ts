export interface SliderProps {
  min: number;
  max: number;
  defaultValue?: number;
  sliderValue: number | undefined;
  setSliderValue: React.Dispatch<React.SetStateAction<number>> | undefined;
}
