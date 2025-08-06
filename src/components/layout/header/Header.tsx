import Logo from "../../common/Logo";
import BurgerIcon from "../../common/BurgerIcon";
import SearchInput from "../../common/SearchInput";
import NavMain from "./NavMain";
import UserIcons from "./UserIcons";

export default function Header() {
  return (
    <header className="bg-white sticky top-0 z-10 w-full">
      <div className="container mx-auto px-5">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-6 grow">
            <Logo variant="black" className="shrink-0" />
            <SearchInput className="w-full mr-20p hidden sm:block" />
          </div>

          <div className="flex items-center gap-8 shrink-0">
            <NavMain className="hidden lg:flex" />
            <UserIcons className="hidden md:flex" />
            <BurgerIcon className="lg:hidden" />
          </div>
        </div>
      </div>
      <div>
        <nav className="hidden lg:block bg-gray-800 text-white"></nav>
      </div>
    </header>
  );
}
