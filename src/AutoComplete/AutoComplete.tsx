import { useMemo, useState } from "react";
import { Input } from "../Input";
import scss from "./AutoComplete.module.scss";
import { Button } from "../Button";
import { AutoCompleteProps, ListProps } from "./AutoComplete.types";
import useClickOutside from "../utils/hooks/useClickOutside";
import { useRovingTabIndex } from "@20i/use-roving-tabindex-a11y";
import { MagnifyingGlass, X } from "@phosphor-icons/react";

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
    <div ref={ref} onKeyDown={handleKeyDown}>
      <Input.Root>
        <Input.Actions>
          <MagnifyingGlass size={24} />
        </Input.Actions>
        <Input.Input
          id="cb1-input"
          value={search}
          role="combobox"
          spellCheck="false"
          autoComplete="off"
          aria-expanded={isOpen}
          onChange={handleChange}
          aria-autocomplete="list"
          aria-controls="cb1-listbox"
          aria-label="input for search"
          onClick={() => handleOpen()}
          placeholder={props.placeholder}
        />
        <Input.Actions>
          {search && (
            <Button
              size="none"
              variant="none"
              id="cb1-button"
              onClick={clearInput}
              aria-expanded={isOpen}
              data-testid="btn-clear"
              aria-label="clear search"
              aria-controls="cb1-listbox"
            >
              <X color="black" size={24} />
            </Button>
          )}
        </Input.Actions>
      </Input.Root>
      {isOpen && renderList()}
    </div>
  );
};
