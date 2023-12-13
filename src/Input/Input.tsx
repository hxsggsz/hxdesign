/* eslint-disable react-refresh/only-export-components */
import classNames from "classnames";
import scss from "./Input.module.scss";
import { InputProps, LabelProps } from "./Input.types";

const Root = (props: LabelProps) => {
  const rootClasses = classNames(props.className, [scss.root]);

  return (
    <label {...props} data-error={!!props.errorMessage} className={rootClasses}>
      {props.children}
      {props.errorMessage && (
        <span className={scss.error}>{props.errorMessage}</span>
      )}
    </label>
  );
};

const RealInput = (props: InputProps) => (
  <input
    {...props}
    aria-label="input text"
    className={scss.hidden}
    aria-disabled={props.disabled}
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
