import microphone from "./assets/Microphone.svg";
import microphoneActive from "./assets/Microphone-active.png";
import microphoneVariant from "./assets/Microphone-variant.png";
import microphoneActiveVariant from "./assets/Microphone-active-variant.png";
import { MicrophoneProps } from "./Microphone.types";
import { useEffect, useRef, useState } from "react";

export const Microphone = ({ size = 24, ...props }: MicrophoneProps) => {
  const [isActive, setIsActive] = useState(false);

  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    if (props.isActive) {
      intervalRef.current = setInterval(
        () => setIsActive((prev) => !prev),
        1000
      );
    }

    return () => clearInterval(intervalRef.current);
  }, [props.isActive]);

  const renderVariant = () => (
    <img
      width={size}
      height={size}
      style={{ userSelect: "none" }}
      src={isActive ? microphoneActiveVariant : microphoneVariant}
    />
  );

  const renderMicrophone = () => (
    <img
      width={size}
      height={size}
      style={{ userSelect: "none" }}
      src={isActive ? microphoneActive : microphone}
    />
  );
  return props.variant ? renderVariant() : renderMicrophone();
};
