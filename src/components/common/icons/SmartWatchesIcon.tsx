import SmartWatchSmallSvg from "../../../assets/icon/24px/Smart Watches.svg?react";
import SmartWatchLargeSvg from "../../../assets/icon/48px/Smart Watches.svg?react";

interface SmartWatchesIconProps {
  variant: "small" | "large";
  className?: string;
}

export default function SmartWatchesIcon({
  variant,
  className,
}: SmartWatchesIconProps) {
  if (variant === "small") {
    return (
      <div>
        <SmartWatchSmallSvg className={`${className ?? ""}`} />
      </div>
    );
  }

  if (variant === "large") {
    return (
      <div>
        <SmartWatchLargeSvg className={`${className ?? ""}`} />
      </div>
    );
  }

  return null;
}
