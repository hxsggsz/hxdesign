import { renderHook, act } from "@testing-library/react";
import { useCarousel } from "./useCarousel";

const minecraftSoundEffectClick = jest
  .spyOn(window.HTMLMediaElement.prototype, "play")
  .mockImplementation(undefined);

const mockImages = ["image1", "image2", "image3", "image4", "image5"];
const lastItemOnCarousel = mockImages.length - 1;

describe("useCarousel", () => {
  describe("when initialize", () => {
    it("carousel renders with index 0", () => {
      const { result } = renderHook(() => useCarousel(mockImages));
      expect(result.current.selectedItem).toBe(0);
    });
  });

  describe("when increase the carousel", () => {
    it("set direction as 'right'", () => {
      const { result } = renderHook(() => useCarousel(mockImages));

      act(() => {
        result.current.increment();
      });

      expect(result.current.direction).toBe("right");
    });

    describe("when selected Item is not the last", () => {
      it("set selected item to one", () => {
        const { result } = renderHook(() => useCarousel(mockImages));

        act(() => {
          result.current.increment();
        });

        expect(result.current.selectedItem).toBe(1);
      });
    });

    describe("when selected item is the last", () => {
      it("set selected item to the first item on carousel", () => {
        const { result } = renderHook(() => useCarousel(mockImages));

        act(() => {
          result.current.updateSelectedImage(lastItemOnCarousel);
        });

        act(() => {
          result.current.increment();
        });

        expect(result.current.selectedItem).toBe(0);
      });
    });
  });

  describe("when decrease the carousel", () => {
    it("set direction as 'left'", () => {
      const { result } = renderHook(() => useCarousel(mockImages));

      act(() => {
        result.current.decrement();
      });

      expect(result.current.direction).toBe("left");
    });

    describe("when selected item is not zero", () => {
      it("decrease the carousel", () => {
        const { result } = renderHook(() => useCarousel(mockImages));

        act(() => {
          result.current.increment();
        });

        expect(result.current.selectedItem).toBe(1);

        act(() => {
          result.current.decrement();
        });

        expect(result.current.selectedItem).toBe(0);
      });
    });

    describe("when selected item is zero", () => {
      it("set selected item to the last one", () => {
        const { result } = renderHook(() => useCarousel(mockImages));

        act(() => {
          result.current.decrement();
        });

        expect(result.current.selectedItem).toBe(lastItemOnCarousel);
      });
    });
  });

  describe("when update the selected item with a custom number", () => {
    it("updates the selected item", () => {
      const { result } = renderHook(() => useCarousel(mockImages));

      act(() => {
        result.current.updateSelectedImage(lastItemOnCarousel);
      });

      expect(result.current.selectedItem).toBe(lastItemOnCarousel);
      expect(minecraftSoundEffectClick).toHaveBeenCalled();
    });
  });
});
