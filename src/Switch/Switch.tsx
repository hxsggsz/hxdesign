import scss from "./Switch.module.scss";
import { SwitchProps } from "./Switch.types";
import classNames from "classnames";

export const Switch = (props: SwitchProps) => {
  function handleSwitch() {
    props.setChecked((prev) => !prev);
  }

  const switchClasses = classNames({
    [scss.switch]: !props.checkbox,
    [scss.checkbox]: props.checkbox,
  });

  return (
    <input
      type="checkbox"
      checked={props.checked}
      onChange={handleSwitch}
      className={switchClasses}
      aria-checked={props.checked}
      role={`${props.checkbox ? "checkbox" : "switch"}`}
      aria-label={`${props.checkbox ? "checkbox" : "switch"} ${
        props.checked ? "on" : "off"
      }`}
    />
  );
};
