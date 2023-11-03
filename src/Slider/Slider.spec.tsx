import {
  RenderResult,
  fireEvent,
  render,
  waitFor,
} from "@testing-library/react";
import { Slider } from ".";
import { axe } from "jest-axe";
import userEvent from "@testing-library/user-event";

describe("Slider", () => {
  let setSliderValueMock: jest.Mock;
  let rendered: RenderResult;
  let component: HTMLElement;
  const min = 0;
  const max = 100;
  const defaultValue = 60;
  const sliderValue = 35;

  describe("when initialize", () => {
    beforeAll(() => {
      rendered = render(
        <Slider
          min={min}
          max={max}
          sliderValue={sliderValue}
          setSliderValue={undefined}
        />
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
      expect(component.getAttribute("aria-valuemin")).toBe(min.toString());
      expect(component.getAttribute("aria-valuemax")).toBe(max.toString());
      expect(component.getAttribute("aria-valuenow")).toBe(
        sliderValue.toString()
      );
      expect(component.getAttribute("aria-orientation")).toBe("horizontal");
      expect(component.getAttribute("aria-valuetext")).toBe(
        `the value of this slider is: ${sliderValue}`
      );
    });

    describe("when have defaultValue and sliderValue is undefined", () => {
      beforeAll(() => {
        render(
          <Slider
            min={min}
            max={max}
            sliderValue={undefined}
            setSliderValue={undefined}
            defaultValue={defaultValue}
          />
        );

        component = rendered.getByRole("slider");
      });

      it("renders with defaultvalue instead of sliderValue", () => {
        expect(component.getAttribute("aria-valuetext")).toBe(
          `the value of this slider is: ${defaultValue}`
        );
      });
    });
  });

  describe("when click on slider", () => {
    beforeAll(() => {
      setSliderValueMock = jest.fn();
      rendered = render(
        <Slider
          min={min}
          max={max}
          sliderValue={sliderValue}
          setSliderValue={setSliderValueMock}
        />
      );
      component = rendered.getByRole("slider");
    });

    it("calls the setSliderValue function", async () => {
      const btnClick = rendered.getByTestId(/click-slider/i);
      userEvent.click(btnClick);

      await waitFor(() => expect(setSliderValueMock).toHaveBeenCalled());
    });
  });

  describe("when press the right arrow", () => {
    beforeAll(() => {
      setSliderValueMock = jest.fn();
      rendered = render(
        <Slider
          min={min}
          max={max}
          sliderValue={sliderValue}
          setSliderValue={setSliderValueMock}
        />
      );
      component = rendered.getByTestId(/trigger-button/i);
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
          min={min}
          max={max}
          sliderValue={sliderValue}
          setSliderValue={setSliderValueMock}
        />
      );
      component = rendered.getByTestId(/trigger-button/i);

      fireEvent.keyDown(component, {
        key: "ArrowLeft",
      });

      await waitFor(() => expect(setSliderValueMock).toHaveBeenCalled());
    });
  });
});
