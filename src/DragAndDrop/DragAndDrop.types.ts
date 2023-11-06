export interface DragAndDropProps {
  SupportedMedia: TMediaFormats[];
  // DO NOT save the files in a cdn from this function because this function is called when a user delete a file to, only use to store the files in a state
  onChange: (files: File[] | undefined) => void;
  maxSize: number; // value im megabytes (mb)
}

type TImageFormats = "png" | "jpg" | "jpeg" | "webp" | "gif";
type TVideoFormats = "mp4" | "mov" | "avi" | "webm";
type TOtherFormats = "pdf";
type TMediaFormats = TImageFormats | TVideoFormats | TOtherFormats;
