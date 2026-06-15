import { motion } from "framer-motion";

export default function StoryVisual() {
  return (
    <div className="relative flex items-center justify-center py-6 sm:py-10 lg:justify-self-end">
      <div className="absolute h-[280px] w-[280px] rounded-full bg-[#F5D86B]/20 blur-[120px] sm:h-[420px] sm:w-[420px]" />

      <div className="relative flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center"
        >
          <div className="text-5xl sm:text-6xl">{"🚲"}</div>
          <h3 className="mt-4 text-xl font-bold text-[#111111] sm:text-2xl">
            Childhood
          </h3>
          <p className="mt-2 max-w-[200px] text-sm text-neutral-600 sm:max-w-[220px] sm:text-base">
            Running behind the kulfiwala after school.
          </p>
        </motion.div>

        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: 180 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mt-6 w-[3px] rounded-full bg-[#E4B95B]"
        />

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="h-6 w-6 rounded-full border-4 border-[#FFF9F2] bg-[#E4B95B] shadow-lg"
        />

        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: 180 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: 0.2,
          }}
          className="w-[3px] rounded-full bg-[#E4B95B]"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className="mt-6 flex flex-col items-center text-center"
        >
          <div className="text-5xl sm:text-6xl">{"🍦"}</div>
          <h3 className="mt-4 text-xl font-black text-[#0D47B7] sm:text-2xl">
            FIRKI
          </h3>
          <p className="mt-2 max-w-[200px] text-sm text-neutral-600 sm:max-w-[220px] sm:text-base">
            The same memories, handcrafted for today.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
