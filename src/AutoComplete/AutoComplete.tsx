import { useMemo, useState } from "react";
import { Input } from "../Input/Input";
import scss from "./AutoComplete.module.scss";
import { Arrow } from "../Icons/Arrow/Arrow";
import { Close } from "../Icons/Close/Close";
import { Button } from "../Button/Button";
import { AutoCompleteProps, ListProps } from "./AutoComplete.types";
import useClickOutside from "../utils/hooks/useClickOutside";
import { useRovingTabIndex } from "@20i/use-roving-tabindex-a11y";

export const AutoComplete = (props: AutoCompleteProps) => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const listRef = useRovingTabIndex();
  const ref = useClickOutside(() => handleOpen(false));

  function handleChange(ev: React.ChangeEvent<HTMLInputElement>) {
    setSearch(ev.currentTarget.value);
    handleOpen(true);
  }

  function handleOpen(open?: boolean) {
    setIsOpen((prev) => open ?? !prev);
  }

  function clearInput() {
    setSearch("");
  }

  function handleKeyDown(ev: React.KeyboardEvent<HTMLDivElement>) {
    switch (ev.key) {
      case "Escape":
        if (!isOpen) {
          return clearInput();
        }

        handleOpen();
        break;

      case "Enter":
        if (isOpen) handleOpen();
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

  const renderListItem = () =>
    filterList.map((list, index) => (
      <li
        key={list.id}
        role="option"
        data-open={isOpen}
        className={scss.item}
        aria-selected={search === list.item}
      >
        <button
          tabIndex={index === 0 ? 0 : -1}
          aria-expanded={isOpen}
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
    ));

  const renderList = () => (
    <ul
      ref={listRef}
      role="listbox"
      id="cb1-listbox"
      data-open={isOpen}
      aria-hidden={!isOpen}
      className={scss.list}
    >
      {filterList.length > 0 ? renderListItem() : renderNotFoundList()}
    </ul>
  );

  return (
    <div ref={ref} onKeyDown={handleKeyDown} className={scss.wrapper}>
      <Input.Root>
        <Input.Actions>
          <Arrow variant outline orientation={`${isOpen ? "down" : "up"}`} />
        </Input.Actions>
        <Input.Input
          id="cb1-input"
          fontSize={2.4}
          value={search}
          role="combobox"
          spellCheck="false"
          aria-expanded={isOpen}
          aria-autocomplete="list"
          onChange={handleChange}
          aria-controls="cb1-listbox"
          aria-label="input for search"
          onClick={() => handleOpen()}
          placeholder={props.placeholder}
        />
        <Input.Actions>
          {search && (
            <Button
              id="cb1-button"
              variant="none"
              onClick={clearInput}
              aria-expanded={isOpen}
              data-testid="btn-clear"
              aria-controls="cb1-listbox"
              aria-label="clear search"
            >
              <Close size={32} variant />
            </Button>
          )}
        </Input.Actions>
      </Input.Root>
      {isOpen && renderList()}
    </div>
  );
};
