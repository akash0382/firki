import { motion } from "framer-motion";
import Button from "../../../ui/Button";

export default function HeroContent() {
  return (
    <div
      className="
        mx-auto
        max-w-[620px]
        px-0
        text-center
        sm:px-2
        lg:px-0
        lg:mx-auto
        lg:text-center
      "
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="
          inline-flex
          items-center
          justify-center
          rounded-full
          border
          border-[#111111]
          bg-[#111111]
          !px-5
          !py-1
          text-[clamp(15px,1.1vw,18px)]
          font-semibold
          uppercase
          tracking-[clamp(0.18em,0.24vw,0.34em)]
          text-white
          whitespace-nowrap
          leading-none
          shadow-[0_14px_34px_rgba(13,71,183,0.25)]
          max-w-[calc(100vw-1rem)]
          
        "
      >
        {"\u00A0"}Tradition. Twisted.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="
          !mt-6
          text-[#0D47B7]
          font-black
          uppercase
          tracking-[-0.04em]
          leading-none
          text-[clamp(1.8rem,5vw,3.2rem)]
        "
      >
        0% Sugar.
        <br />
        100% Childhood.
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="
          !mt-6
          font-black
          leading-[0.9]
          tracking-[-0.05em]
          text-[#111111]
          text-[clamp(3rem,10vw,6.5rem)]
        "
      >
        Freeze
        <br />
        <span className="text-[#0D47B7]">Childhood.</span>
      </motion.h1>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 130 }}
        transition={{ delay: 0.5 }}
        className="
          !mx-auto
          !mt-6
          !h-[4px]
          rounded-full
          bg-[#E4B95B]
        "
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="
          mx-auto
          !mt-8
          max-w-[560px]
          text-[16px]
          leading-7
          text-neutral-600
          !sm:text-[18px]
          !sm:leading-8
          !md:text-[20px]
          !md:leading-9
        "
      >
        Made with pure milk and real ingredients,
        bringing back the flavours you grew up with.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="
          !mt-10
          flex
          flex-wrap
          justify-center
          !gap-3
          !sm:gap-4
          lg:justify-center
        "
      >
        <div className="rounded-full bg-[#FFF2C6] !px-4 !py-2 text-sm font-bold text-[#0D47B7]">
          🚫 0% Sugar
        </div>
        
        <div className="rounded-full bg-[#FFF2C6] !px-4 !py-2 text-sm font-bold text-[#0D47B7]">
          🥛 Pure Milk
        </div>
        
        <div className="rounded-full bg-[#FFF2C6] !px-4 !py-2 text-sm font-bold text-[#0D47B7]">
          🍓 Real Ingredients
        </div>
      </motion.div>

      <div className="h-6 md:h-6 lg:h-6" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="
          flex
          justify-center
          !px-2
          lg:justify-center
        "
      >
        <Button
          href="#collection"
          className="
            bg-[#FFF2C6]
            text-[#0D47B7]
            !px-4 !py-2
            shadow-[0_10px_24px_rgba(228,185,91,0.28)]
            hover:shadow-[0_18px_40px_rgba(228,185,91,0.38)]
          "
        >
          Explore Collection
        </Button>
      </motion.div>
    </div>
  );
}
