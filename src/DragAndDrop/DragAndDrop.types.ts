export interface DragAndDropProps {
  SupportedMedia: TMediaFormats[];
  onChange: (files: File[]) => void;
  maxSize: number; // value im megabytes (mb)
}

type TImageFormats = "png" | "jpg" | "jpeg" | "webp" | "gif";
type TVideoFormats = "mp4" | "mov" | "avi" | "webm";
type TOtherFormats = "pdf";
type TMediaFormats = TImageFormats | TVideoFormats | TOtherFormats;
