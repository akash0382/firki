import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "../layout/Container";
import BrandLogo from "../BrandLogo/BrandLogo";
import { NAVIGATION } from "../../config/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar */}

      <header
        className={`
          sticky
          top-4
          z-50
          mx-auto
          w-[calc(100%-2rem)]
          max-w-[1400px]
          transition-all
          duration-500
          ${
            scrolled
              ? "rounded-2xl bg-[#FFF9F2]/85 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
          }
        `}
      >
        <Container className="px-6 sm:px-6 md:px-6 lg:px-6 xl:px-6 2xl:px-6">
          <div
            className="
              relative
              flex
              h-20
              items-center
              justify-between
              lg:h-24
            "
          >
            <div className="hidden shrink-0 lg:block">
              <BrandLogo />
            </div>

            <div className="absolute left-2 top-1/2 -translate-y-1/2 sm:left-4 lg:hidden">
              <BrandLogo />
            </div>

            <nav className="hidden items-center gap-12 lg:flex">
              {NAVIGATION.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="
                    group
                    relative
                    text-[17px]
                    font-medium
                    text-neutral-800
                    transition-colors
                    duration-300
                    hover:text-[#0D47B7]
                  "
                >
                  {item.title}

                  <span
                    className="
                      absolute
                      -bottom-2
                      left-1/2
                      h-[2px]
                      w-0
                      -translate-x-1/2
                      bg-[#E4B95B]
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />
                </a>
              ))}
            </nav>

            <button
              onClick={() => setOpen(true)}
              className="
                absolute
                right-0
                top-1/2
                -translate-y-1/2
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                transition
                hover:bg-[#E4B95B]/20
                lg:hidden
              "
            >
              <Menu
                size={30}
                className="text-[#0D47B7]"
              />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Menu Overlay */}

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] overflow-hidden bg-[#FFF9F2]/95 backdrop-blur-md"
          >
            {/* Top */}

            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex h-24 items-center justify-between px-6 pt-4"
            >
              <div className="shrink-0">
                <BrandLogo />
              </div>

              <button
                onClick={() => setOpen(false)}
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  transition
                  hover:bg-[#E4B95B]/20
                "
              >
                <X
                  size={32}
                  className="text-[#0D47B7]"
                />
              </button>
            </motion.div>

            {/* Links */}

            <nav className="mt-16 flex flex-col items-center gap-8">
              {NAVIGATION.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.28,
                    delay: 0.08 + index * 0.06,
                    ease: "easeOut",
                  }}
                  className="
                    text-2xl
                    font-bold
                    text-[#111111]
                    transition-all
                    duration-300
                    hover:translate-x-2
                    hover:text-[#0D47B7]
                    sm:text-3xl
                  "
                >
                  {item.title}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
