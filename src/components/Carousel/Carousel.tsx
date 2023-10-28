import { useEffect, useMemo, useRef, useState } from "react";
import { CarouselProps } from "./Carousel.types";

export const Carousel = (props: CarouselProps) => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [tuple, setTuple] = useState([null, selectedItem]);

  const directionRef = useRef<0 | 1 | null>(null);

  function decrement() {
    const isFirst = selectedItem === 0;
    isFirst
      ? setSelectedItem(props.images.length - 1)
      : setSelectedItem((prev) => --prev);
  }

  function increment() {
    const isLast = props.images.length - 1 === selectedItem;
    isLast ? setSelectedItem(0) : setSelectedItem((prev) => ++prev);
  }

  const findSelectedImage = useMemo(
    () =>
      props.images.find((image, index) => {
        const isSame = selectedItem === index;
        if (isSame) {
          return image;
        }
      }),
    [props.images, selectedItem]
  );

  useEffect(() => {
    if (tuple[1] !== selectedItem) setTuple([tuple[1], selectedItem]);

    directionRef.current = selectedItem > tuple[0]! ? 1 : 0;
  }, [selectedItem, tuple]);

  return (
    <>
      <img src={findSelectedImage} alt="aaa" />
      <button onClick={decrement}>prev</button>
      <button onClick={increment}>next</button>
    </>
  );
};
