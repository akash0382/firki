import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <>
      {/* Main Glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2

          h-[320px]
          w-[320px]

          sm:h-[420px]
          sm:w-[420px]

          md:h-[520px]
          md:w-[520px]

          lg:h-[620px]
          lg:w-[620px]

          xl:h-[760px]
          xl:w-[760px]

          rounded-full
          bg-[#F5D86B]/25
          blur-[120px]
        "
      />

      {/* Floating Dots */}

      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-8, 8, -8],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 3 + i * 0.4,
            repeat: Infinity,
          }}
          className="
            absolute
            rounded-full
            bg-[#E4B95B]
          "
          style={{
            width: `${6 + (i % 3) * 2}px`,
            height: `${6 + (i % 3) * 2}px`,
            left: `${10 + i * 10}%`,
            top: `${15 + ((i * 9) % 60)}%`,
          }}
        />
      ))}

      {/* Left Decorative Circle */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute

          left-[-80px]
          top-[15%]

          h-[180px]
          w-[180px]

          md:h-[260px]
          md:w-[260px]

          lg:h-[320px]
          lg:w-[320px]

          rounded-full
          border
          border-[#E4B95B]/20
        "
      />

      {/* Right Decorative Circle */}

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute

          right-[-120px]
          bottom-[10%]

          h-[220px]
          w-[220px]

          md:h-[320px]
          md:w-[320px]

          lg:h-[420px]
          lg:w-[420px]

          rounded-full
          border
          border-dashed
          border-[#0D47B7]/15
        "
      />
    </>
  );
}