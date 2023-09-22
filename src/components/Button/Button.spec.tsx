import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  describe("when initialize", () => {
    it("renders everithing correctly", () => {
      render(<Button>test</Button>);

      expect(screen.getByText(/test/i)).toBeVisible();
    });
  });
});
