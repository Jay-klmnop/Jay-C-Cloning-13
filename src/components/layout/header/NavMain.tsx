interface NavMainProps {
  className?: string;
}

export default function NavMain({ className }: NavMainProps) {
  return (
    <div className={`flex flex-row gap-10 ${className ?? ""}`}>
      <a href="" className="text-black">
        Home
      </a>
      <a href="" className="text-gray-400">
        About
      </a>
      <a href="" className="text-gray-400">
        Contact Us
      </a>
      <a href="" className="text-gray-400">
        Blog
      </a>
    </div>
  );
}
