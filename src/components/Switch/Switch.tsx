import scss from "./Switch.module.scss";
import { SwitchProps } from "./Switch.types";
import minecraftClickSound from "../../assets/minecraft_click.mp3";

export const Switch = (props: SwitchProps) => {
  const clickSound = new Audio(minecraftClickSound);
  
  function handleSwitch() {
    clickSound.play();
    props.setChecked((prev) => !prev);
  }

  return (
    <input
      type="checkbox"
      className={scss.switch}
      checked={props.checked}
      onChange={handleSwitch}
      aria-checked={props.checked}
      aria-label={`switch ${props.checked ? "on" : "off"}`}
    />
  );
};
