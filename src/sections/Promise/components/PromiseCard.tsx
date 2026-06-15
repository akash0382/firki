import { motion } from "framer-motion";

interface PromiseCardProps {
  icon?: string;
  emoji?: string;
  title: string;
  description: string;
}

export default function PromiseCard({
  icon,
  emoji,
  title,
  description,
}: PromiseCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
    whileHover={{
      y: -10,
      scale: 1.02,
    }}
      transition={{
        duration: 0.45,
      }}
      className="
        group
        relative
        w-full
        max-w-[400px]
        min-h-[390px]

        overflow-hidden
        flex
        flex-col
        items-center
        justify-between

        rounded-[30px]

        border
        border-[#E4B95B]/25

        bg-gradient-to-b
        from-white
        via-white/90
        to-[#FFF8EE]

        backdrop-blur-xl

        px-7
        py-8
        sm:px-8
        sm:py-10
        lg:px-10
        lg:py-12

        shadow-[0_18px_50px_rgba(0,0,0,0.05)]

        transition-all
        duration-500
      "
    >
      {/* Golden Glow */}

      <div
        className="
          absolute
          -top-10
          -right-10

          h-36
          w-36

          sm:h-40
          sm:w-40

          rounded-full

          bg-[#E4B95B]/10

          blur-[70px]
        "
      />

      <div className="relative z-10 flex w-full flex-1 flex-col items-center text-center">
        <div
          className="
            flex
            h-24
            w-24
            items-center
            justify-center
            rounded-full
            bg-[#FFF6E7]
            ring-1
            ring-[#E4B95B]/15
            sm:h-28
            sm:w-28
          "
        >
          {emoji ? (
            <motion.span
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                select-none
                text-5xl
                leading-none
                sm:text-6xl
                transition-transform
                duration-500
                group-hover:scale-110
                group-hover:-rotate-3
              "
              aria-label={title}
              role="img"
            >
              {emoji}
            </motion.span>
          ) : (
            <motion.img
              src={icon}
              alt={title}
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                h-16
                w-16
                sm:h-20
                sm:w-20
                object-contain
                transition-all
                duration-500
                group-hover:scale-110
                group-hover:-rotate-3
              "
            />
          )}
        </div>

        <div className="mt-7 flex flex-1 flex-col items-center">
          <h3
            className="
              text-[22px]
              font-black
              leading-tight
              tracking-[-0.03em]
              text-[#111111]
              transition-colors
              duration-300
              group-hover:text-[#0D47B7]
              sm:text-[28px]
            "
          >
            {title}
          </h3>

          <p
            className="
              mt-3
              max-w-[280px]
              text-[15px]
              leading-7
              text-neutral-600
              sm:text-[17px]
              sm:leading-8
            "
          >
            {description}
          </p>
        </div>

        <div
          className="
            mt-8
            h-[3px]
            w-12
            rounded-full
            bg-[#E4B95B]
            transition-all
            duration-500
            group-hover:w-24
          "
        />
      </div>
    </motion.div>
  );
}
