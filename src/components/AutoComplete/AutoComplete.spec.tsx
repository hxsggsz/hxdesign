import {
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { AutoComplete } from "./AutoComplete";
import { axe } from "jest-axe";
import userEvent from "@testing-library/user-event";

const list = [
  {
    id: 1,
    item: "Quackity, the creator of QSMP",
    onSelect: jest.fn(),
  },
  {
    id: "dwadwadwa",
    item: "FoolishG",
    onSelect: jest.fn(),
  },
];

jest
  .spyOn(window.HTMLMediaElement.prototype, "play")
  .mockImplementation(undefined);

describe("<AutoComplete/>", () => {
  describe("when initialize", () => {
    it("renders correctly", () => {
      render(<AutoComplete list={[]} />);

      expect(screen.getByRole("combobox")).toBeInTheDocument();
    });

    it("should not have basic accessibility issues", async () => {
      const { container } = render(<AutoComplete list={[]} />);

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("has correctly aria attributes", () => {
      render(<AutoComplete list={[]} />);

      const input = screen.getByRole("combobox");
      const autoComplete = input.getAttribute("aria-autocomplete");
      const expanded = input.getAttribute("aria-expanded");
      const controls = input.getAttribute("aria-controls");
      const label = input.getAttribute("aria-label");

      expect(autoComplete).toBe("list");
      expect(expanded).toBe("false");
      expect(controls).toBe("cb1-listbox");
      expect(label).toBe("input text");
    });
  });

  describe("when click on input", () => {
    it("renders the list correctly", async () => {
      render(<AutoComplete list={list} />);

      const input = screen.getByRole("combobox");

      expect(screen.queryByText(/quackity/i)).not.toBeInTheDocument();

      userEvent.click(input);

      await waitFor(() => {
        expect(screen.getByText(/quackity/i)).toBeInTheDocument();
        expect(input.getAttribute("aria-expanded")).toBe("true");
      });
    });

    describe("when click on input with list open", () => {
      it("closes the list", async () => {
        render(<AutoComplete list={list} />);

        const input = screen.getByRole("combobox");

        userEvent.click(input);

        await waitFor(() =>
          expect(screen.getByText(/quackity/i)).toBeInTheDocument()
        );
        userEvent.click(input);

        await waitForElementToBeRemoved(screen.getByText(/quackity/i));

        expect(screen.queryByText(/quackity/i)).not.toBeInTheDocument();
      });
    });
  });

  describe("when press", () => {
    it("key `Enter` close the list when is open", async () => {
      render(<AutoComplete list={list} />);

      const input = screen.getByRole("combobox");

      userEvent.click(input);

      await waitFor(() =>
        expect(screen.getByText(/quackity/i)).toBeInTheDocument()
      );

      userEvent.keyboard("Enter");

      await waitForElementToBeRemoved(screen.getByText(/quackity/i));

      expect(screen.queryByText(/quackity/i)).not.toBeInTheDocument();
    });

    it("key `Escape` clear the input when list is close", async () => {
      render(<AutoComplete list={list} />);

      const input = screen.getByRole("combobox") as HTMLInputElement;

      expect(screen.queryByRole("button")).not.toBeInTheDocument();

      fireEvent.input(input, { target: { value: "test search" } });

      expect(input.value).toBe("test search");
      await waitFor(() =>
        expect(screen.getByRole("button")).toBeInTheDocument()
      );

      fireEvent.click(screen.getByRole("button"));
      expect(input.value).toBe("");
    });

    it("key `Escape` close the list when is open", async () => {
      render(<AutoComplete list={list} />);

      const input = screen.getByRole("combobox");

      userEvent.click(input);

      await waitFor(() =>
        expect(screen.getByText(/quackity/i)).toBeInTheDocument()
      );

      userEvent.keyboard("Escape");

      await waitForElementToBeRemoved(screen.getByText(/quackity/i));

      expect(screen.queryByText(/quackity/i)).not.toBeInTheDocument();
    });
  });
});
