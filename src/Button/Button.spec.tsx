import { render, screen, waitFor } from "@testing-library/react";
import { Button } from ".";
import { axe } from "jest-axe";
import { userEvent } from "@testing-library/user-event";

describe("Button", () => {
  describe("when initialize", () => {
    it("renders everithing correctly", () => {
      render(<Button>test</Button>);
      const btn = screen.getByRole("button", { name: "test" });
      const ariaDisabled = btn.getAttribute("aria-disabled");

      expect(ariaDisabled).toBeFalsy();
      expect(btn).toBeVisible();
    });

    it("should not have basic accessibility issues", async () => {
      const { container } = render(<Button>test</Button>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe("when click", () => {
    it("calls the onClick function", async () => {
      const mockFunc = jest.fn();
      render(<Button onClick={mockFunc}>test</Button>);

      const btn = screen.getByRole("button", { name: "test" });
      userEvent.click(btn);

      await waitFor(() => {
        expect(mockFunc).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe("when button is disabled", () => {
    it("has the correctly aria-disabled value", async () => {
      render(<Button disabled>test</Button>);

      const btn = screen.getByRole("button", { name: "test" });
      const ariaDisabled = btn.getAttribute("aria-disabled");

      expect(btn).toBeDisabled();
      expect(ariaDisabled).toBeTruthy();
    });
  });
});
