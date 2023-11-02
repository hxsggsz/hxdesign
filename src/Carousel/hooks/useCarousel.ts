import { useCallback, useMemo, useRef, useState } from "react";
import { minecraftClickSound } from "../../utils/minecraftClickSound";

export const useCarousel = (images: string[]) => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

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
    const isFirst = selectedItem === 0;
    isFirst
      ? setSelectedItem(images.length - 1)
      : setSelectedItem((prev) => --prev);
  }

  const increment = useCallback(() => {
    const isLast = images.length - 1 === selectedItem;
    isLast ? setSelectedItem(0) : setSelectedItem((prev) => ++prev);
  }, [images.length, selectedItem]);

  const findSelectedImage = useMemo(
    () =>
      images.find((image, index) => {
        const isSame = selectedItem === index;
        if (isSame) {
          return image;
        }
      }),
    [images, selectedItem]
  );

  return {
    increment,
    decrement,
    isHovering,
    updateHover,
    carouselRef,
    selectedItem,
    findSelectedImage,
    updateSelectedImage,
  };
};
