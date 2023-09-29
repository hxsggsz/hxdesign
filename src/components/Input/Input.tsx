import scss from "./Input.module.scss";
import { InputProps } from "./Input.types";

export const Input = ({fontSize = 1.6, ...props}: InputProps) => {
  return (
    <>
      <input {...props} style={{ fontSize: `${fontSize}rem`}} className={scss.input} />
    </>
  );
};
