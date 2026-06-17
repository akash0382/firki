import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "../BrandLogo/BrandLogo";
import { NAVIGATION } from "../../config/navigation";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileMenu({
  open,
  setOpen,
}: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
          className="
            fixed
            inset-0
            z-[60]
            flex
            flex-col
            bg-gradient-to-br
            from-[#FFF9F2]
            via-[#FCF4E8]
            to-[#F6E8CF]
            lg:hidden
          "
        >
          {/* Top Navbar */}

          <div
            className="
              relative
              flex
              h-[72px]
              items-center
              justify-center
              border-b
              border-[#E4B95B]
              bg-[#0D47B7]
              px-6
            "
          >
            {/* Center Logo */}
            <div className="scale-[0.68]">
              <BrandLogo />
            </div>
          
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="
                absolute
                right-6
                text-[#F8F2E7]
                transition-all
                duration-300
                hover:text-[#E4B95B]
                hover:rotate-90
              "
            >
              <X size={30} />
            </button>
          </div>

          {/* Navigation */}

          <div
            className="
              flex
              flex-1
              flex-col
              items-center
              justify-center
              gap-8
            "
          >
            {NAVIGATION.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.08 * index,
                }}
                className="
                  group
                  relative
                  text-[2rem]
                  font-semibold
                  tracking-wide
                  text-[#1F1F1F]
                  transition-all
                  duration-300
                  hover:text-[#0D47B7]
                  hover:scale-105
                "
              >
                {item.title}
          
                <span
                  className="
                    absolute
                    left-1/2
                    -bottom-2
                    h-[2px]
                    w-0
                    -translate-x-1/2
                    rounded-full
                    bg-[#E4B95B]
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </motion.a>
            ))}
          
            {/* Franchise CTA */}
            <a
              href="#franchise"
              onClick={() => setOpen(false)}
              className="
                mt-4
                rounded-2xl
                border-[3px]
                border-[#5A4343]
                bg-[#F7C600]
                px-6
                py-3
                font-semibold
                text-[#5A4343]
                shadow-[6px_6px_0px_#5A4343]
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              Own A FIRKI Franchise
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}