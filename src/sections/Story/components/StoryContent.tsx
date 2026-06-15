import { motion } from "framer-motion";

export default function StoryContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="mx-auto max-w-[620px] text-center"
    >
      {/* Label */}

      <span
        className="
          inline-flex
          items-center
          justify-center
          rounded-full
          border
          border-[#0D47B7]
          bg-[#0D47B7]
          px-[clamp(1.5rem,2vw,2.25rem)]
          py-[clamp(0.9rem,1.1vw,1.15rem)]
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
        {"\u00A0"}Our Story{"\u00A0"}
      </span>

      {/* Heading */}

      <h2
        className="
          mt-7

          text-[34px]
          font-black
          leading-[0.95]
          tracking-[-0.05em]

          text-[#111111]

          sm:text-[48px]
          md:text-[68px]
          lg:text-[82px]
        "
      >
        Crafted with
        <br />

        <span className="text-[#0D47B7]">
          Nostalgia.
        </span>
      </h2>

      {/* Golden Line */}

      <div
        className="
          mt-7

          mx-auto
          h-[4px]
          w-24

          rounded-full

          bg-[#E4B95B]
          lg:mx-0
          lg:w-32
        "
      />

      {/* Description */}

      <p
        className="
          mt-8

          max-w-[560px]

          text-[16px]
          leading-8

          text-neutral-600

          sm:text-[18px]
          sm:leading-9
        "
      >
        We grew up chasing the kulfiwala through
        narrow lanes, waiting for that first bite on
        a hot summer afternoon.

        <br />
        <br />

        Firki brings those memories back with pure
        ingredients, handcrafted recipes and a
        modern premium experience.
      </p>

      {/* Quote */}

      <div
        className="
          mt-10

          border-l-4
          border-[#E4B95B]

          pl-5
        "
      >
        <p
          className="
            text-lg
            italic
            text-[#0D47B7]
            sm:text-xl
          "
        >
          "We don't sell kulfi.
          <br />
          We preserve memories."
        </p>
      </div>
    </motion.div>
  );
}
