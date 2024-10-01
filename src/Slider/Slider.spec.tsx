import {
  RenderResult,
  fireEvent,
  render,
  waitFor,
} from "@testing-library/react";
import { Slider } from ".";
import { axe } from "jest-axe";

describe("Slider", () => {
  let setSliderValueMock: jest.Mock;
  let rendered: RenderResult;
  let component: HTMLElement;
  const max = 100;
  const defaultValue = 60;

  describe("when initialize", () => {
    beforeAll(() => {
      rendered = render(
        <Slider max={max} setSliderValue={jest.fn()} orientation="horizontal" />
      );

      component = rendered.getByRole("slider");
    });

    it("renders the component correctly", () => {
      expect(component).toBeVisible();
    });

    it("have no a11y issues", async () => {
      expect(await axe(rendered.container)).toHaveNoViolations();
    });

    it("renders with all aria attributes correctly", () => {
      expect(component.getAttribute("aria-valuemin")).toBe("0");
      expect(component.getAttribute("aria-valuenow")).toBe("0");
      expect(component.getAttribute("aria-valuemax")).toBe(max.toString());
      expect(component.getAttribute("aria-orientation")).toBe("horizontal");
    });

    describe("when have defaultValue and sliderValue is undefined", () => {
      beforeAll(() => {
        render(
          <Slider
            max={max}
            orientation="horizontal"
            setSliderValue={jest.fn()}
            defaultValue={defaultValue}
          />
        );

        component = rendered.getByRole("slider");
      });

      it("renders with defaultvalue instead of sliderValue", () => {
        expect(component.getAttribute("aria-valuenow")).toBe(
          defaultValue.toString()
        );
      });
    });
  });

  describe("when press the right arrow", () => {
    beforeAll(() => {
      setSliderValueMock = jest.fn();
      rendered = render(
        <Slider
          max={max}
          setSliderValue={setSliderValueMock}
          orientation={"horizontal"}
        />
      );

      component = rendered.getByRole("slider");
    });

    it("calls the setSliderValueMock", async () => {
      fireEvent.keyDown(component, {
        key: "ArrowRight",
      });

      await waitFor(() => expect(setSliderValueMock).toHaveBeenCalled());
    });
  });

  describe("when press the left arrow", () => {
    it("calls the setSliderValueMock", async () => {
      setSliderValueMock = jest.fn();
      rendered = render(
        <Slider
          max={max}
          setSliderValue={setSliderValueMock}
          orientation={"horizontal"}
        />
      );
      component = rendered.getByRole("slider");

      fireEvent.keyDown(component, {
        key: "ArrowLeft",
      });

      await waitFor(() => expect(setSliderValueMock).toHaveBeenCalled());
    });
  });
});
