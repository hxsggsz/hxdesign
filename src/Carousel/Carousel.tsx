import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CarouselProps } from "./Carousel.types";
import scss from "./Carousel.module.scss";
import { Arrow } from "../Icons/Arrow/Arrow";
import { Button } from "../Button/Button";
import { motion } from "framer-motion";

export const Carousel = ({
  timer = 5000,
  showDots = true,
  showPrevNext = true,
  ...props
}: CarouselProps) => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [tuple, setTuple] = useState([null, selectedItem]);

  const directionRef = useRef<0 | 1 | null>(null);

  function decrement() {
    const isFirst = selectedItem === 0;
    isFirst
      ? setSelectedItem(props.images.length - 1)
      : setSelectedItem((prev) => --prev);
  }

  const increment = useCallback(() => {
    const isLast = props.images.length - 1 === selectedItem;
    isLast ? setSelectedItem(0) : setSelectedItem((prev) => ++prev);
  }, [props.images.length, selectedItem]);

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

  useEffect(() => {
    if (!props.autoPlay) return;
    const carouselTimer = setInterval(() => increment(), timer);

    return () => clearInterval(carouselTimer);
  }, [increment, props.autoPlay, timer]);

  const renderDots = () =>
    props.images.map((_, index) => {
      const selected = index === selectedItem;

      const handleSelectDot = () => setSelectedItem(index);
      return (
        <motion.button
          layout
          className={scss.btnDots}
          onClick={handleSelectDot}
          aria-label={`button to select image ${selectedItem + 1}`}
          style={{ background: `${selected ? "#333333" : ""}` }}
        />
      );
    });

  const renderPrevNext = () => (
    <div className={scss.buttonsWrapper}>
      <Button aria-label="button to preview the image" onClick={decrement}>
        <Arrow variant outline orientation="left" />
      </Button>
      <Button aria-label="button to go to next image" onClick={increment}>
        <Arrow variant outline />
      </Button>
    </div>
  );

  return (
    <div className={scss.wrapper}>
      <div className={scss.imageWrapper}>
        <img
          className={scss.image}
          src={findSelectedImage}
          alt={`carousel ${selectedItem}`}
        />
      </div>
      {showDots && <div className={scss.dotsWrapper}>{renderDots()}</div>}

      {showPrevNext && renderPrevNext()}
    </div>
  );
};
