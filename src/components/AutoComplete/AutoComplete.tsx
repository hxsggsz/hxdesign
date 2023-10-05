import { useMemo, useState } from "react";
import { Input } from "../Input/Input";
import scss from "./AutoComplete.module.scss";
import { Arrow } from "../Icons/Arrow/Arrow";
import { Close } from "../Icons/Close/Close";
import { Button } from "../Button/Button";
import { AutoCompleteProps, ListProps } from "./AutoComplete.types";
import useClickOutside from "../../hooks/useClickOutside";

export const AutoComplete = (props: AutoCompleteProps) => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const ref = useClickOutside(() => handleOpen(false));

  function handleChange(ev: React.ChangeEvent<HTMLInputElement>) {
    setSearch(ev.currentTarget.value);
  }

  function handleOpen(open?: boolean) {
    setIsOpen((prev) => open ?? !prev);
  }

  function clearInput() {
    setSearch("");
  }

  function handleKeyDown(ev: React.KeyboardEvent<HTMLDivElement>) {
    if (ev.key === "Escape") handleOpen();
  }

  function handleNavigateList(
    ev: React.KeyboardEvent<HTMLLIElement>,
    index: number
  ) {
    switch (ev.key) {
      case "ArrowDown":
        ev.preventDefault();
        console.log("aaa");
        return document.querySelectorAll("button")[index - 1]?.focus();
        break;

      case "ArrowUp":
        ev.preventDefault();
        return document.querySelectorAll("button")[index + 1]?.focus();
        break;
      default:
        break;
    }
  }

  const filterList: ListProps[] = useMemo(() => {
    const lowerSearch = search.toLowerCase();

    return props.list.filter((list) =>
      list.item.toLowerCase().includes(lowerSearch)
    );
  }, [props.list, search]);

  const renderNotFoundList = () => (
    <li data-open={isOpen} className={scss.item}>
      {props.emptyMessage ?? `no search for ${search}`}
    </li>
  );

  const renderList = () => (
    <ul data-open={isOpen} aria-hidden={!isOpen} className={scss.list}>
      {filterList.length > 0
        ? filterList.map((list, index) => (
            <li
              // tabIndex={-1}
              key={list.id}
              data-open={isOpen}
              className={scss.item}
              onKeyDown={(ev) => handleNavigateList(ev, index)}
            >
              <button
                className={scss.button}
                onClick={() => {
                  handleOpen();
                  clearInput();
                  setSearch(list.item);
                  list.onSelect(list.item);
                }}
              >
                {list.item}
              </button>
            </li>
          ))
        : renderNotFoundList()}
    </ul>
  );

  return (
    <div ref={ref} onKeyDown={handleKeyDown} className={scss.wrapper}>
      <Input.Root>
        <Input.Actions>
          <Arrow variant outline orientation={`${isOpen ? "down" : "up"}`} />
        </Input.Actions>
        <Input.Input
          fontSize={2.4}
          spellCheck="false"
          onChange={handleChange}
          value={search}
          onClick={() => handleOpen()}
          placeholder={props.placeholder}
        />
        <Input.Actions>
          <Button variant="none" onClick={clearInput}>
            <Close variant />
          </Button>
        </Input.Actions>
      </Input.Root>
      {isOpen && renderList()}
    </div>
  );
};
