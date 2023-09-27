import { Slider } from "./components/Slider/Slider";
import "./styles/base.scss";

function App() {
  return (
    <>
      minecraft design system
      <Slider min={0} max={100} setSliderValue={undefined} defaultValue={10} />
    </>
  );
}

export default App;
