import { Menu } from "lucide-react";
import BrandLogo from "../BrandLogo/BrandLogo";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileNavbar({
  open,
  setOpen,
}: Props) {
  return (
    <header
      className="
        fixed
        top-0
        left-0
        z-50
        flex
        h-[72px]
        w-full
        items-center
        justify-between
        border-b
        border-[#E4B95B]
        bg-[#0D47B7]
        px-6
        lg:hidden
      "
    >
      {/* Logo */}
      <div className="pl-2">
        <div className="ml-5 scale-[0.70]">
          <BrandLogo />
        </div>
      </div>

      {/* Hamburger Menu */}
      <button
        onClick={() => setOpen(!open)}
        className="
          flex
          items-center
          justify-center
          text-[#F8F2E7]
          transition-colors
          duration-300
          hover:text-[#E4B95B]
        "
      >
        <Menu size={28} />
      </button>
    </header>
  );
}