import microphone from "./assets/Microphone.svg";
import microphoneActive from "./assets/Microphone-active.png";
import microphoneVariant from "./assets/Microphone-variant.png";
import microphoneActiveVariant from "./assets/Microphone-active-variant.png";
import { MicrophoneProps } from "./Microphone.types";

export const Microphone = ({ size = 24, ...props }: MicrophoneProps) => {
  const renderVariant = () => (
    <img
      width={size}
      height={size}
      style={{ userSelect: "none" }}
      src={props.isActive ? microphoneActiveVariant : microphoneVariant}
    />
  );

  const renderMicrophone = () => (
    <img
      width={size}
      height={size}
      style={{ userSelect: "none" }}
      src={props.isActive ? microphoneActive : microphone}
    />
  );
  return props.variant ? renderVariant() : renderMicrophone();
};
