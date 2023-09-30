import { useState } from "react";
import { Input } from "../Input/Input";
import scss from "./AutoComplete.module.scss";

export const AutoComplete = () => {
  const [value, setValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  function handleChange(ev: React.ChangeEvent<HTMLInputElement>) {
    setValue(ev.currentTarget.value);
  }

  return (
    <div className={scss.wrapper}>
      <Input
        value={value}
        fontSize={2.4}
        onChange={handleChange}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
      <ul data-focus={isFocus} className={scss.list}>
        <li data-focus={isFocus} className={scss.item}>
          aaaa
        </li>
        <li data-focus={isFocus} className={scss.item}>
          aaaa
        </li>
        <li data-focus={isFocus} className={scss.item}>
          aaaa
        </li>
        <li data-focus={isFocus} className={scss.item}>
          aaaa
        </li>
      </ul>
    </div>
  );
};
