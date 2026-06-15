import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import kulfi from "../../../assets/kulficropped.png";

export default function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const x = useTransform(rotateY, [-15, 15], [-6, 6]);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    rotateY.set((px - 0.5) * 12);
    rotateX.set(-(py - 0.5) * 12);
  }

  function handleLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="
        relative
        flex
        w-full
        items-center
        justify-center

        h-[280px]
        sm:h-[360px]
        md:h-[460px]
        lg:h-[560px]
        xl:h-[660px]
      "
      style={{ perspective: 1200 }}
    >
      {/* Golden Glow */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.45, 0.65, 0.45],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
          absolute
          rounded-full
          bg-[#F5D86B]
          blur-[120px]

          h-[180px]
          w-[180px]

          sm:h-[240px]
          sm:w-[240px]

          md:h-[320px]
          md:w-[320px]

          lg:h-[400px]
          lg:w-[400px]

          xl:h-[460px]
          xl:w-[460px]
        "
      />

      {/* Outer Ring */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          rounded-full
          border
          border-[#E4B95B]/40

          h-[220px]
          w-[220px]

          sm:h-[300px]
          sm:w-[300px]

          md:h-[380px]
          md:w-[380px]

          lg:h-[460px]
          lg:w-[460px]

          xl:h-[520px]
          xl:w-[520px]
        "
      />

      {/* Inner Ring */}

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          rounded-full
          border
          border-dashed
          border-[#E4B95B]/30

          h-[180px]
          w-[180px]

          sm:h-[240px]
          sm:w-[240px]

          md:h-[300px]
          md:w-[300px]

          lg:h-[360px]
          lg:w-[360px]

          xl:h-[420px]
          xl:w-[420px]
        "
      />

      {/* Watermark */}

      <h2
        className="
          absolute
          bottom-4
          select-none
          font-black
          tracking-[-0.06em]
          text-[#0D47B7]/5

          text-[44px]
          sm:text-[64px]
          md:text-[84px]
          lg:text-[100px]
          xl:text-[120px]
        "
      >
        FIRKI
      </h2>

      {/* Kulfi */}

      <motion.img
        src={kulfi}
        alt="Firki Kulfi"
        style={{
          rotateX,
          rotateY,
          x,
          transformStyle: "preserve-3d",
        }}
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="
          relative
          z-20
          w-auto
          object-contain
          cursor-pointer
          drop-shadow-[0_35px_40px_rgba(0,0,0,0.22)]

          h-[200px]

          sm:h-[280px]

          md:h-[360px]

          lg:h-[440px]

          xl:h-[500px]
        "
      />
    </div>
  );
}
