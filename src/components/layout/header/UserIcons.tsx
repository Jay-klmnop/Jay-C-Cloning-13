import Favorites from "../../../assets/icon/32px/Favorites.svg?react";
import Cart from "../../../assets/icon/32px/Cart.svg?react";
import Profile from "../../../assets/icon/32px/User.svg?react";

interface UserIconsProps {
  className?: string;
}

export default function UserIcons({ className }: UserIconsProps) {
  return (
    <div className={`flex flex-row gap-4 ${className ?? ""}`}>
      <a href="/favorites" aria-label="favorites">
        <Favorites />
      </a>
      <a href="/cart" aria-label="Cart">
        <Cart />
      </a>
      <a href="/profile" aria-label="My Account">
        <Profile />
      </a>
    </div>
  );
}
