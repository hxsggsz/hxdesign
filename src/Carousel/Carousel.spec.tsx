import { fireEvent, render, screen } from "@testing-library/react";
import { Carousel } from ".";
import { mockImages } from "./Carousel.mocks";
import { axe } from "jest-axe";
import userEvent from "@testing-library/user-event";

describe("<Carousel/>", () => {
  describe("when initialize", () => {
    it("should not have basic accessibility issues", async () => {
      const { container } = render(<Carousel images={mockImages} />);

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("renders correctly", () => {
      render(<Carousel images={mockImages} />);
      expect(screen.getByAltText(/carousel image1/i)).toBeInTheDocument();
    });

    it("renders with no dots on bottom", () => {
      render(<Carousel showDots={false} images={mockImages} />);
      expect(screen.queryByTestId(/btn 1/i)).not.toBeInTheDocument();
    });

    it("renders with no prev and next button", () => {
      render(<Carousel showPrevNext={false} images={mockImages} />);
      expect(screen.queryByTestId(/btn next/i)).not.toBeInTheDocument();
      expect(screen.queryByTestId(/btn prev/i)).not.toBeInTheDocument();
    });
  });

  describe("when click on next button", () => {
    describe("when is not on the last slider", () => {
      it("renders the second carousel", async () => {
        render(<Carousel images={mockImages} />);
        userEvent.click(screen.getByTestId(/next btn/i));
        expect(
          await screen.findByAltText(/carousel image2/i)
        ).toBeInTheDocument();
      });
    });

    describe("when is on the last slider", () => {
      it("renders the first carousel", async () => {
        render(<Carousel images={mockImages} />);
        userEvent.click(screen.getByTestId(/btn 5/i));
        expect(
          await screen.findByAltText(/carousel image5/i)
        ).toBeInTheDocument();

        userEvent.click(screen.getByTestId(/next btn/i));
        expect(
          await screen.findByAltText(/carousel image1/i)
        ).toBeInTheDocument();
      });
    });
  });

  describe("when click on prev button", () => {
    describe("when carousel is not in the first slider", () => {
      it("renders the prev slider", async () => {
        render(<Carousel images={mockImages} />);
        userEvent.click(screen.getByTestId(/next btn/i));
        expect(
          await screen.findByAltText(/carousel image2/i)
        ).toBeInTheDocument();

        userEvent.click(screen.getByTestId(/prev btn/i));
        expect(
          await screen.findByAltText(/carousel image1/i)
        ).toBeInTheDocument();
      });
    });

    describe("when is on the last slider", () => {
      it("renders the last slider", async () => {
        render(<Carousel images={mockImages} />);

        expect(screen.getByAltText(/carousel image1/i)).toBeInTheDocument();

        userEvent.click(screen.getByTestId(/prev btn/i));

        expect(
          await screen.findByAltText(/carousel image5/i)
        ).toBeInTheDocument();
      });
    });
  });

  describe("when click on the second dot on the bottom", () => {
    it("renders the second slider", async () => {
      render(<Carousel images={mockImages} />);
      userEvent.click(screen.getByTestId(/btn 2/i));

      expect(
        await screen.findByAltText(/carousel image2/i)
      ).toBeInTheDocument();
    });
  });

  describe("when press ArrowLeft", () => {
    it("renders the prev slider", async () => {
      render(<Carousel images={mockImages} />);
      const btnToFocus = screen.getByTestId(/btn 1/i);
      fireEvent.keyDown(btnToFocus, { key: "ArrowLeft" });
      expect(
        await screen.findByAltText(/carousel image5/i)
      ).toBeInTheDocument();
    });
  });

  describe("when press ArrowRight", () => {
    it("renders the next slider", async () => {
      render(<Carousel images={mockImages} />);
      const btnToFocus = screen.getByTestId(/btn 1/i);
      fireEvent.keyDown(btnToFocus, { key: "ArrowRight" });
      expect(
        await screen.findByAltText(/carousel image2/i)
      ).toBeInTheDocument();
    });
  });

  describe("when press Home", () => {
    it("renders the first slider", async () => {
      render(<Carousel images={mockImages} />);
      const btnToFocus = screen.getByTestId(/btn 2/i);

      fireEvent.keyDown(btnToFocus, { key: "Home" });

      expect(
        await screen.findByAltText(/carousel image1/i)
      ).toBeInTheDocument();
    });
  });

  describe("when press End", () => {
    it("renders the first slider", async () => {
      render(<Carousel images={mockImages} />);
      const btnToFocus = screen.getByTestId(/btn 2/i);

      fireEvent.keyDown(btnToFocus, { key: "End" });

      expect(
        await screen.findByAltText(/carousel image5/i)
      ).toBeInTheDocument();
    });
  });
});
