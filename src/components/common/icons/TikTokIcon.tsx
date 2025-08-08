import TikTok from "../../../assets/icon/16px/TikTok.svg?react";

interface TikTokIconProps {
  className?: string;
}

export default function TikTokIcon({ className }: TikTokIconProps) {
  return <TikTok className={className} />;
}
