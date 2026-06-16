import { motion } from "framer-motion";
import BrandLogo from "../BrandLogo/BrandLogo";
import { NAVIGATION } from "../../config/navigation";

export default function DesktopNavbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="
        fixed
        top-0
        left-0
        z-50
        hidden
        h-[88px]
        w-full
        border-b
        border-[#E4B95B]
        bg-[#0D47B7]
        shadow-[0_6px_24px_rgba(0,0,0,0.12)]
        lg:block
      "
    >
      <div
        className="
          mx-auto
          flex
          h-full
          max-w-[1600px]
          items-center
          px-8
          xl:px-12
        "
      >
        {/* Logo */}

        <div className="
       w-[280px]
       lg:w-[360px]
       xl:w-[420px]
       2xl:w-[460px]
       flex
       items-center
       justify-center">
          <BrandLogo />
        </div>

        {/* Navigation */}

        <nav
          className="
            flex
            flex-1
            items-center
            justify-center
            gap-8
            xl:gap-14
            2xl:gap-16
            lg:translate-x-4
            xl:translate-x-16
            2xl:translate-x-24
          "
        >
          {NAVIGATION.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="
                group
                relative
                text-[16px]
                xl:text-[17px]
                font-medium
                tracking-[0.04em]
                !text-[#F8F2E7]
                transition-all
                duration-300
                ease-out
                hover:-translate-y-[2px]
                hover:!text-[#E4B95B]
              "
            >
              {item.title}

              <span
                className="
                  absolute
                  left-1/2
                  -bottom-[8px]
                  h-[2px]
                  w-0
                  -translate-x-1/2
                  rounded-full
                  bg-[#E4B95B]
                  transition-all
                  duration-300
                  ease-out
                  group-hover:w-full
                "
              />
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}