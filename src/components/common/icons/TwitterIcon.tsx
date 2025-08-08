import Twitter from "../../../assets/icon/16px/Twitter.svg?react";

interface TwitterIconProps {
  className?: string;
}

export default function TwitterIcon({ className }: TwitterIconProps) {
  return <Twitter className={className} />;
}
