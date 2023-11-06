import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { DragAndDrop } from ".";
import { axe } from "jest-axe";
import userEvent from "@testing-library/user-event";

window.URL.createObjectURL = jest.fn();

describe("<DragAndDrop/>", () => {
  describe("when initialize", () => {
    it("renders correctly", () => {
      render(
        <DragAndDrop SupportedMedia={["jpg"]} onChange={() => {}} maxSize={0} />
      );

      expect(
        screen.getByText(/drag and drop your files here!/i)
      ).toBeInTheDocument();
    });

    it("have no a11y error", async () => {
      const { container } = render(
        <DragAndDrop SupportedMedia={["jpg"]} onChange={() => {}} maxSize={0} />
      );

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("shows on screen supported files and max size files", () => {
      render(
        <DragAndDrop SupportedMedia={["jpg"]} onChange={() => {}} maxSize={5} />
      );

      const supportedFile = screen.getByText(/jpg/i);
      const maxSizeFile = screen.getByText(/5mb/i);

      expect(supportedFile).toBeInTheDocument();
      expect(maxSizeFile).toBeInTheDocument();
    });
  });

  describe("when select a file", () => {
    it("shows the file on screen", async () => {
      render(
        <DragAndDrop SupportedMedia={["png"]} onChange={() => {}} maxSize={5} />
      );

      const file = new File(["hello"], "hello.png", { type: "image/png" });
      const labelInput = screen.getByLabelText(/Select a file here/i);
      const fileOnScreen = screen.findByAltText(/hello.png/i);

      userEvent.upload(labelInput, file);

      expect(await fileOnScreen).toBeInTheDocument();
      expect(window.URL.createObjectURL).toHaveBeenCalled();
    });

    it("calls the onChange function", async () => {
      const onChangeMock = jest.fn();
      render(
        <DragAndDrop
          SupportedMedia={["png"]}
          onChange={onChangeMock}
          maxSize={5}
        />
      );

      const file = new File(["hello"], "hello.png", { type: "image/png" });
      const labelInput = screen.getByLabelText(/Select a file here/i);

      userEvent.upload(labelInput, file);

      await waitFor(() => expect(onChangeMock).toHaveBeenCalled());
    });

    it("deletes the file after select one", async () => {
      render(
        <DragAndDrop SupportedMedia={["png"]} onChange={() => {}} maxSize={5} />
      );

      const file = new File(["hello"], "hello.png", { type: "image/png" });
      const labelInput = screen.getByLabelText(/Select a file here/i);
      const fileOnScreen = screen.findByAltText(/hello.png/i);
      const deleteButton = screen.findByRole("button", { name: "X" });

      userEvent.upload(labelInput, file);

      expect(await fileOnScreen).toBeInTheDocument();
      expect(await deleteButton).toBeInTheDocument();
      expect(window.URL.createObjectURL).toHaveBeenCalled();

      userEvent.click(await deleteButton);

      await waitFor(() =>
        expect(screen.queryByAltText(/hello.png/i)).not.toBeInTheDocument()
      );
    });

    it("shows error on screen if the file is not supported", async () => {
      render(
        <DragAndDrop SupportedMedia={["png"]} onChange={() => {}} maxSize={5} />
      );

      const file = new File(["hello"], "hello.jpg", { type: "image/jpg" });
      const labelInput = screen.getByLabelText(/Select a file here/i);
      const messageError = screen.findByText(/file not supported/i);

      userEvent.upload(labelInput, file);

      expect(await messageError).toBeInTheDocument();
    });

    it("shows error on screen if the file is to large", async () => {
      render(
        <DragAndDrop
          SupportedMedia={["jpg"]}
          onChange={() => {}}
          maxSize={-1}
        />
      );

      const file = new File(["hello"], "hello.jpg", { type: "image/jpg" });
      const labelInput = screen.getByLabelText(/Select a file here/i);
      const messageError = screen.findByText(/this file is too big/i);

      userEvent.upload(labelInput, file);

      expect(await messageError).toBeInTheDocument();
    });
  });

  describe("when drag and drop a file", () => {
    it("shows the file on screen", async () => {
      render(
        <DragAndDrop SupportedMedia={["png"]} onChange={() => {}} maxSize={5} />
      );

      const dropzone = screen.getByTestId("dropzone");
      const file = new File(["hello"], "hello.png", { type: "image/png" });
      const fileOnScreen = screen.findByAltText(/hello.png/i);

      fireEvent.drop(dropzone, { dataTransfer: { files: [file] } });

      expect(await fileOnScreen).toBeInTheDocument();
    });

    it("calls the onChange function", async () => {
      const onChangeMock = jest.fn();
      render(
        <DragAndDrop
          SupportedMedia={["png"]}
          onChange={onChangeMock}
          maxSize={5}
        />
      );

      const dropzone = screen.getByTestId("dropzone");
      const file = new File(["hello"], "hello.png", { type: "image/png" });

      fireEvent.drop(dropzone, { dataTransfer: { files: [file] } });

      await waitFor(() => expect(onChangeMock).toHaveBeenCalled());
    });

    it("deletes the file after select one", async () => {
      render(
        <DragAndDrop SupportedMedia={["png"]} onChange={() => {}} maxSize={5} />
      );

      const dropzone = screen.getByTestId("dropzone");
      const file = new File(["hello"], "hello.png", { type: "image/png" });
      const fileOnScreen = screen.findByAltText(/hello.png/i);
      const deleteButton = screen.findByRole("button", { name: "X" });

      fireEvent.drop(dropzone, { dataTransfer: { files: [file] } });

      expect(await fileOnScreen).toBeInTheDocument();
      expect(await deleteButton).toBeInTheDocument();
      expect(window.URL.createObjectURL).toHaveBeenCalled();

      userEvent.click(await deleteButton);

      await waitFor(() =>
        expect(screen.queryByAltText(/hello.png/i)).not.toBeInTheDocument()
      );
    });

    it("shows error on screen if the file is not supported", async () => {
      render(
        <DragAndDrop SupportedMedia={["gif"]} onChange={() => {}} maxSize={5} />
      );

      const dropzone = screen.getByTestId("dropzone");
      const file = new File(["hello"], "hello.png", { type: "image/png" });
      const messageError = screen.findByText(/file not supported/i);

      fireEvent.drop(dropzone, { dataTransfer: { files: [file] } });

      expect(await messageError).toBeInTheDocument();
    });

    it("shows error on screen if the file is to large", async () => {
      render(
        <DragAndDrop
          SupportedMedia={["jpg"]}
          onChange={() => {}}
          maxSize={-1}
        />
      );

      const dropzone = screen.getByTestId("dropzone");
      const file = new File(["hello"], "hello.png", { type: "image/png" });
      const messageError = screen.findByText(/this file is too big/i);

      fireEvent.drop(dropzone, { dataTransfer: { files: [file] } });

      expect(await messageError).toBeInTheDocument();
    });
  });
});
