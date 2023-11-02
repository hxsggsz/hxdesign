import { useCallback, useRef, useState } from "react";
import { minecraftClickSound } from "../../utils/minecraftClickSound";

export const useCarousel = (images: string[]) => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);

  const carouselRef = useRef<HTMLDivElement | null>(null);

  const updateSelectedImage = (index: number) => {
    setSelectedItem(index);
    minecraftClickSound.play();
  };

  const updateHover = () => {
    if (!carouselRef.current) return;

    carouselRef.current.addEventListener("mouseover", () =>
      setIsHovering(true)
    );
    carouselRef.current.addEventListener("mouseleave", () =>
      setIsHovering(false)
    );
  };

  function decrement() {
    setDirection("left");
    const isFirst = selectedItem === 0;
    isFirst
      ? setSelectedItem(images.length - 1)
      : setSelectedItem((prev) => --prev);
  }

  const increment = useCallback(() => {
    setDirection("right");
    const isLast = images.length - 1 === selectedItem;
    isLast ? setSelectedItem(0) : setSelectedItem((prev) => ++prev);
  }, [images.length, selectedItem]);

  return {
    increment,
    decrement,
    direction,
    isHovering,
    updateHover,
    carouselRef,
    selectedItem,
    updateSelectedImage,
  };
};
