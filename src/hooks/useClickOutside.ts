import { createRef, useEffect } from "react";

export default function useClickOutside(callback: (ev: Event) => void) {
  const ref = createRef<HTMLDivElement>();
  useEffect(() => {
    function handleOutsideClick(ev: Event) {
      if (ref.current && !ref.current.contains(ev.target as Node)) {
        callback(ev);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [callback, ref]);

  return ref;
}
