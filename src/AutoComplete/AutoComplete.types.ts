export interface AutoCompleteProps {
  list: ListProps[];
  placeholder?: string;
  emptyMessage?: string;
}

export interface ListProps {
  id: string | number;
  item: string;
  onSelect: (item: string) => void;
}
