import { useEffect } from "react";
import { CarouselProps } from "./Carousel.types";
import scss from "./Carousel.module.scss";
import { Arrow } from "../Icons/Arrow/Arrow";
import { Button } from "../Button/Button";
import { useCarousel } from "./hooks/useCarousel";
import { AnimatePresence, motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";

export const Carousel = ({
  timer = 5000,
  showDots = true,
  showPrevNext = true,
  ...props
}: CarouselProps) => {
  const carousel = useCarousel(props.images);

  const handlers = useSwipeable({
    onSwipedLeft: () => props.isSwippable && carousel.increment(),
    onSwipedRight: () => props.isSwippable && carousel.decrement(),
    trackMouse: true,
    preventScrollOnSwipe: true,
  });

  function handleKeyDown(ev: React.KeyboardEvent<HTMLDivElement>) {
    switch (ev.key) {
      case "ArrowLeft":
        carousel.decrement();
        break;
      case "ArrowRight":
        carousel.increment();
        break;
      case "Home":
        carousel.updateSelectedImage(0);
        break;

      case "End":
        carousel.updateSelectedImage(props.images.length - 1);
        break;

      default:
        break;
    }
  }
  useEffect(() => {
    if (!props.autoPlay) return;
    carousel.updateHover();
    if (!carousel.isHovering && props.stopOnHover) {
      const carouselTimer = setInterval(() => carousel.increment(), timer);
      return () => clearInterval(carouselTimer);
    }
  }, [carousel, props.autoPlay, props.stopOnHover, timer]);

  const renderDots = () =>
    props.images.map((_, index) => {
      const selected = index === carousel.selectedItem;

      return (
        <button
          className={scss.btnDots}
          onClick={() => carousel.updateSelectedImage(index)}
          aria-label={`button to select image ${carousel.selectedItem + 1}`}
          style={{ background: `${selected ? "#333333" : ""}` }}
        />
      );
    });

  const renderPrevNext = () => (
    <div className={scss.buttonsWrapper}>
      <Button
        noFullScreen
        onClick={carousel.decrement}
        aria-controls="carousel-items"
        aria-label="button to preview the image"
      >
        <Arrow variant outline orientation="left" />
      </Button>
      <Button
        noFullScreen
        onClick={carousel.increment}
        aria-controls="carousel-items"
        aria-label="button to go to next image"
      >
        <Arrow variant outline />
      </Button>
    </div>
  );

  return (
    <div
      {...handlers}
      id="carousel-items"
      className={scss.wrapper}
      onKeyDown={handleKeyDown}
      ref={carousel.carouselRef}
      aria-label="custom carousel"
      aria-roledescription="carousel"
    >
      <div
        role="group"
        aria-roledescription="slide"
        className={scss.imageWrapper}
        aria-label={`${carousel.selectedItem} of ${props.images.length - 1}`}
      >
        <AnimatePresence key={carousel.selectedItem}>
          <motion.img
            initial={{ x: carousel.direction === "left" ? -100 : 100 }}
            animate={{ x: 0 }}
            exit={{ x: carousel.direction === "right" ? -100 : 100 }}
            transition={{ type: "keyframes" }}
            className={scss.image}
            src={props.images[carousel.selectedItem]}
            alt={`carousel ${carousel.selectedItem}`}
          />
        </AnimatePresence>
      </div>
      {showDots && <div className={scss.dotsWrapper}>{renderDots()}</div>}

      {showPrevNext && renderPrevNext()}
    </div>
  );
};
