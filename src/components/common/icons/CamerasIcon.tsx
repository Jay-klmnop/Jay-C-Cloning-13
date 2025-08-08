import CameraSmallSvg from "../../../assets/icon/24px/Cameras.svg?react";
import CameraLargeSvg from "../../../assets/icon/48px/Cameras.svg?react";

interface CamerasIconProps {
  variant: "small" | "large";
  className?: string;
}

export default function CamerasIcon({ variant, className }: CamerasIconProps) {
  if (variant === "small") {
    return (
      <div>
        <CameraSmallSvg className={`${className ?? ""}`} />
      </div>
    );
  }

  if (variant === "large") {
    return (
      <div>
        <CameraLargeSvg className={`${className ?? ""}`} />
      </div>
    );
  }

  return null;
}
