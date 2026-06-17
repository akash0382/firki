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
        !h-[72px]
        w-full
        items-center
        justify-between
        border-b
        border-[#E4B95B]
        bg-[#0D47B7]
        !px-6
        lg:hidden
      "
    >
      {/* Logo */}
      <div className="!pl-2">
        <div className="ml-5 scale-[0.70]">
          <BrandLogo />
        </div>
      </div>

      {/* Franchise Button + Hamburger */}
      <div className="flex items-center gap-3">
        <a
          href="#franchise"
          className="
            rounded-xl
            border-[2px]
            border-[#5A4343]
            bg-[#F7C600]
            !px-3
            !py-2
            text-[13px]
            font-semibold
            text-[#5A4343]
            shadow-[3px_3px_0px_#5A4343]
            whitespace-nowrap
            transition-all
            duration-300
            hover:-translate-y-0.5
          "
        >
          Franchise
        </a>

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
      </div>
    </header>
  );
}