import scss from "./Switch.module.scss";
import { SwitchProps } from "./Switch.types";

export const Switch = (props: SwitchProps) => {
  function handleSwitch() {
    props.setChecked((prev) => !prev);
  }

  return (
    <input
      type="checkbox"
      className={scss.switch}
      checked={props.check}
      onChange={handleSwitch}
    />
  );
};
