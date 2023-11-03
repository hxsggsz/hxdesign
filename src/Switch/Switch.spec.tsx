import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Switch } from ".";
import { axe } from "jest-axe";

const minecraftSoundEffectClick = jest
  .spyOn(window.HTMLMediaElement.prototype, "play")
  .mockImplementation(undefined);

describe("Switch", () => {
  describe("when initialize", () => {
    it("renders the switch off when checked={false}", () => {
      render(<Switch checked={false} setChecked={() => {}} />);

      const switchComponent = screen.getByRole("switch");

      expect(switchComponent).not.toBeChecked();
      expect(switchComponent).toBeInTheDocument();
      expect(switchComponent.getAttribute('aria-label')).toBe('switch off');
    });

    it("renders the switch on when checked={true}", () => {
      render(<Switch checked={true} setChecked={() => {}} />);

      const switchComponent = screen.getByRole("switch");

      expect(switchComponent).toBeChecked();
      expect(switchComponent).toBeInTheDocument();
      expect(switchComponent.getAttribute('aria-label')).toBe('switch on');
    });

    it("renders the switch as checkbox when checkbox={true}", () => {
      render(<Switch checkbox checked={false} setChecked={() => {}} />);

      const switchComponent = screen.getByRole("checkbox");

      expect(switchComponent).not.toBeChecked();
      expect(switchComponent).toBeInTheDocument();
      expect(switchComponent.getAttribute('aria-label')).toBe('checkbox off');
    });

    it("should not have basic accessibility issues", async () => {
      const { container } = render(
        <Switch checked={true} setChecked={() => {}} />
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe("when click", () => {
    it("calls the setChecked function", async () => {
      const setCheckedMock = jest.fn();
      render(<Switch checked={true} setChecked={setCheckedMock} />);

      const switchComponent = screen.getByRole("switch");
      const ariaChecked = switchComponent.getAttribute("aria-checked");

      userEvent.click(switchComponent);

      await waitFor(() => {
        expect(ariaChecked).toBeTruthy();
        expect(setCheckedMock).toHaveBeenCalledTimes(1);
        expect(minecraftSoundEffectClick).toHaveBeenCalledTimes(1);
      });
    });
  });
});
