import { useState } from "react";
import scss from "./DragAndDrop.module.scss";
import { DragAndDropProps } from "./DragAndDrop.types";
import { nanoid } from "nanoid";

export const DragAndDrop = (props: DragAndDropProps) => {
  const [files, setFiles] = useState<File[]>();
  const [error, setError] = useState("");

  function validateFiles(files: FileList) {
    return Array.from(files).filter((file) => {
      const fileSizeInMegaBytes = Math.floor(file.size / 1024 / 1024);

      const supportedFiles = props.SupportedMedia.find(
        (type) =>
          file.type.includes(type) && fileSizeInMegaBytes < props.maxSize
      );

      if (fileSizeInMegaBytes > props.maxSize) {
        setError("this file is too big");
        return;
      }

      if (!supportedFiles) {
        setError("File not supported");
        return;
      }

      return supportedFiles;
    });
  }

  function deleteFile(
    ev: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) {
    ev.stopPropagation();
    const filterFile = files?.filter((_file, fileIndex) => fileIndex !== index);
    setFiles(filterFile);
    props.onChange(filterFile);
  }

  function onChange(ev: React.ChangeEvent<HTMLInputElement>) {
    const { files } = ev.target;
    if (!files) return;
    const allValidFiles = validateFiles(files);

    if (allValidFiles.length > 0) {
      setError("");
      setFiles(Array.from(files));
      props.onChange(Array.from(files));
    }
  }
  function handleDragOver(ev: React.DragEvent<HTMLDivElement>) {
    ev.preventDefault();
    ev.stopPropagation();
  }

  function handleDrop(ev: React.DragEvent<HTMLDivElement>) {
    ev.preventDefault();
    ev.stopPropagation();

    const { files } = ev.dataTransfer;
    if (!files) return;

    const allValidFiles = validateFiles(files);

    if (allValidFiles.length > 0) {
      setError("");
      setFiles(Array.from(files));
      props.onChange(Array.from(files));
    }
  }

  const renderSupportedFiles = () =>
    props.SupportedMedia.map((media, index) => {
      const lastItem = index === props.SupportedMedia.length - 1;
      return (
        <span key={nanoid()} className={scss.subInfo}>
          {media}
          {lastItem ? "" : ","}{" "}
        </span>
      );
    });

  const renderImagePreview = () => {
    const imageFiles = files?.filter((file) => file.type.includes("image"));
    return imageFiles?.map((file, index) => (
      <div key={nanoid()} className={scss.fileWrapper}>
        <img
          alt={`${file.name}`}
          className={scss.imagePreview}
          src={URL.createObjectURL(file)}
        />
        <button
          className={scss.deleteFile}
          onClick={(ev) => deleteFile(ev, index)}
        >
          X
        </button>
      </div>
    ));
  };

  const renderVideoPreview = () => {
    const videoFiles = files?.filter((file) => file.type.includes("video"));
    return videoFiles?.map((file, index) => (
      <div key={nanoid()} className={scss.fileWrapper}>
        <video controls className={scss.imagePreview}>
          <source src={URL.createObjectURL(file)} type={file.type} />
        </video>
        <button
          className={scss.deleteFile}
          onClick={(ev) => deleteFile(ev, index)}
        >
          X
        </button>
      </div>
    ));
  };

  const renderPdfPreview = () => {
    const pdfFiles = files?.filter((file) => file.type.includes("pdf"));
    return pdfFiles?.map((file, index) => (
      <div key={nanoid()} className={scss.fileWrapper}>
        <iframe className={scss.imagePreview} src={URL.createObjectURL(file)} />
        <button
          className={scss.deleteFile}
          onClick={(ev) => deleteFile(ev, index)}
        >
          X
        </button>
      </div>
    ));
  };

  return (
    <div
      onDrop={handleDrop}
      data-testid="dropzone"
      className={scss.wrapper}
      onDragOver={handleDragOver}
    >
      <h1 className={scss.title}>Drag And Drop your files here!</h1>
      <p className={scss.subInfo}>supported files: {renderSupportedFiles()}</p>

      <span className={scss.subInfo}>or</span>

      <label htmlFor="file" className={scss.label}>
        Select a file here
      </label>

      <input
        id="file"
        type="file"
        onChange={onChange}
        className={scss.hidden}
      />
      {error && <span className={scss.error}>{error}</span>}

      <div className={scss.imagePreviewWrapper}>
        {files && renderImagePreview()}
        {files && renderVideoPreview()}
        {files && renderPdfPreview()}
      </div>

      <span className={scss.subInfo}>max size: {props.maxSize}mb</span>
    </div>
  );
};
