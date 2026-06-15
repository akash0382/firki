import { motion } from "framer-motion";
import Container from "../../components/layout/Container";
import HeroBackground from "./HeroBackground";
import HeroContent from "./components/HeroContent";
import HeroVisual from "./components/HeroVisual";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#FFF9F2]">
      {/* Animated Background */}

      <HeroBackground />

      {/* Decorative Watermark */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          hidden
          -translate-x-1/2
          -translate-y-1/2
          select-none
          text-[220px]
          font-black
          tracking-[-0.08em]
          text-[#0D47B7]/[0.025]
          xl:block
        "
      >
        FIRKI
      </div>

      <Container className="lg:px-16 xl:px-20 2xl:px-24">
        <div
          className="
            relative
            z-10
            grid
            min-h-[calc(100vh-5rem)]
            grid-cols-1
            items-center
            gap-10
            pt-20
            pb-12
            sm:gap-12
            sm:pt-24

            lg:grid-cols-[1fr_1fr]
            lg:gap-16
            lg:pb-0
            xl:gap-20
          "
        >
          {/* Left Side */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="
              flex
              justify-center
              lg:justify-center
            "
          >
            <HeroContent />
          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            className="
              flex
              items-center
              justify-center

              lg:justify-center
            "
          >
            <HeroVisual />
          </motion.div>
        </div>
      </Container>

      {/* Bottom Gradient */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-40
          w-full
          bg-gradient-to-t
          from-[#FFF9F2]
          to-transparent
        "
      />
    </section>
  );
}
