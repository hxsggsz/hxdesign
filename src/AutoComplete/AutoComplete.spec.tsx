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

    it("hiddes the `clear` button if there is no text search", () => {
      render(<AutoComplete list={[]} />);
      expect(screen.queryByLabelText(/clear search/i)).not.toBeInTheDocument();
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

  describe("when click on a option", () => {
    it("calls the selected function", async () => {
      render(<AutoComplete list={list} />);

      const input = screen.getByRole("combobox");

      fireEvent.click(input);
      expect(await screen.findByText(/quackity/i)).toBeInTheDocument();

      fireEvent.click(screen.getByText(/quackity/i));

      await waitFor(() => expect(list[0].onSelect).toBeCalledTimes(1));
    });

    it("closes the list", async () => {
      render(<AutoComplete list={list} />);

      const input = screen.getByRole("combobox");

      fireEvent.click(input);
      expect(await screen.findByText(/quackity/i)).toBeInTheDocument();

      fireEvent.click(screen.getByText(/quackity/i));

      expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
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

      const input = screen.getByRole("combobox");

      expect(screen.queryByRole("button")).not.toBeInTheDocument();

      fireEvent.input(input, { target: { value: "test search" } });

      expect(input).toHaveValue("test search");
      await waitFor(() =>
        expect(screen.getByRole("button")).toBeInTheDocument()
      );

      fireEvent.click(screen.getByRole("button"));
      expect(input).toHaveValue("");
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

  describe("when search", () => {
    it("shows the correctly search if found something", async () => {
      render(<AutoComplete list={list} />);

      const input = screen.getByRole("combobox");

      userEvent.type(input, "quackity");

      expect(await screen.findByText(/quackity/i)).toBeInTheDocument();
    });

    it("shows the default not found message if not found something", async () => {
      render(<AutoComplete list={list} />);

      const input = screen.getByRole("combobox");

      fireEvent.click(input);
      fireEvent.input(input, { target: { value: "text" } });

      expect(
        await screen.findByText(/no search for text/i)
      ).toBeInTheDocument();
    });

    it("shows custom not found message if pass one and not found something", async () => {
      render(<AutoComplete emptyMessage="notfound" list={list} />);

      const input = screen.getByRole("combobox");

      fireEvent.click(input);
      fireEvent.input(input, { target: { value: "text" } });

      expect(await screen.findByText(/notfound/i)).toBeInTheDocument();
    });

    it("clear the search input when click on clear search btn", async () => {
      render(<AutoComplete list={[]} />);

      const input = screen.getByRole("combobox");

      fireEvent.input(input, { target: { value: "quackity" } });

      await waitFor(() => expect(input).toHaveValue("quackity"));

      userEvent.click(screen.getByLabelText(/clear search/i));
      await waitFor(() => expect(input).toHaveValue(""));
    });
  });
});
