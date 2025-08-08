import Profile from "../../../assets/icon/32px/User.svg?react";

interface ProfileIconProps {
  className?: string;
}

export default function ProfileIcon({ className }: ProfileIconProps) {
  return <Profile className={className} />;
}
