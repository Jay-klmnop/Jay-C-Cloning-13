import FooterAssistance from "./FooterAssistance";
import FooterLogo from "./FooterLogo";
import FooterServices from "./FooterServices";

interface FooterContentProps {
  className?: string;
}

export default function FooterContent({ className }: FooterContentProps) {
  return (
    <div
      className={`flex flex-col w-full items-center text-white lg:flex-row lg:justify-between ${className ?? ""}`}
    >
      <FooterLogo />
      <FooterServices />
      <FooterAssistance />
    </div>
  );
}
