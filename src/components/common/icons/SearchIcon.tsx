import Search from "../../../assets/icon/24px/Search.svg?react";

interface SearchIconProps {
  className?: string;
}

export default function SearchIcon({ className }: SearchIconProps) {
  return <Search className={className} />;
}
