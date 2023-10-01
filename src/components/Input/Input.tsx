import classNames from "classnames";
import scss from "./Input.module.scss";
import { InputProps } from "./Input.types";

const Root = ({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant?: boolean;
}) => {
  const inputClasses = classNames({
    [scss.input]: !variant,
    [scss.inputVariant]: variant,
  });

  return <label className={inputClasses}>{children}</label>;
};

const RealInput = ({ fontSize = 1.6, ...props }: InputProps) => (
  <input
    {...props}
    aria-label="input text"
    className={scss.hidden}
    aria-disabled={props.disabled}
    style={{ fontSize: `${fontSize}rem` }}
  />
);

const Actions = ({ children }: { children: React.ReactNode }) => (
  <div className={scss.actions}>{children}</div>
);

export const Input = {
  Root,
  Input: RealInput,
  Actions,
};
