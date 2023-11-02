import { useEffect } from "react";
import { CarouselProps } from "./Carousel.types";
import scss from "./Carousel.module.scss";
import { Arrow } from "../Icons/Arrow/Arrow";
import { Button } from "../Button/Button";
import { useCarousel } from "./hooks/useCarousel";

export const Carousel = ({
  timer = 5000,
  showDots = true,
  showPrevNext = true,
  ...props
}: CarouselProps) => {
  const carousel = useCarousel(props.images);

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
        aria-label="button to preview the image"
        onClick={carousel.decrement}
      >
        <Arrow variant outline orientation="left" />
      </Button>
      <Button
        noFullScreen
        aria-label="button to go to next image"
        onClick={carousel.increment}
      >
        <Arrow variant outline />
      </Button>
    </div>
  );

  return (
    <div ref={carousel.carouselRef} className={scss.wrapper}>
      <div className={scss.imageWrapper}>
        <img
          className={scss.image}
          src={carousel.findSelectedImage}
          alt={`carousel ${carousel.selectedItem}`}
        />
      </div>
      {showDots && <div className={scss.dotsWrapper}>{renderDots()}</div>}

      {showPrevNext && renderPrevNext()}
    </div>
  );
};
