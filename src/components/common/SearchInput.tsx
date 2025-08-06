import SearchIcon from "./SearchIcon";

interface SearchInputProps {
  className?: string;
}

export default function SearchInput({ className }: SearchInputProps) {
  return (
    <div className={`flex ${className ?? ""}`}>
      <div className="flex relative items-center min-w-40 max-w-screen-sm">
        <SearchIcon className="absolute left-3 top-1/4 pointer-events-none shrink-0" />
        <input
          type="search"
          placeholder="Search"
          className="w-full rounded-md placeholder:text-neutral-400 bg-neutral-100 text-neutral-900 border-0 py-3 pl-10 pr-4 focus:outline-none"
        />
      </div>
    </div>
  );
}
