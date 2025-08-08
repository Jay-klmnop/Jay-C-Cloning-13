import Burger from "../../../assets/icon/40px/Burger.svg?react";

interface BurgerIconProps {
  className?: string;
}

export default function BurgerIcon({ className }: BurgerIconProps) {
  return (
    <button className={className}>
      <Burger className={className} />
    </button>
  );
}
