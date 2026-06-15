import type { ReactNode } from "react";

interface Props {
  title: string;
  subtitle: string;
  children: ReactNode;
  isPremium?: boolean;
}

export default function CollectionSection({
  title,
  subtitle,
  children,
  isPremium = false,
}: Props) {
  return (
    <section
      className="
        relative
        w-full
        py-16
        sm:py-20
        lg:py-24
        overflow-hidden
      "
    >
      {isPremium && (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#D8B04C] to-transparent" />
      )}

      {/* Decorative Divider */}

      <div className="flex items-center gap-5">
        <div className={`h-px flex-1 ${isPremium ? "bg-[#D8B04C]/60" : "bg-[#E4B95B]/35"}`} />

        <div className={`h-2 w-2 rounded-full ${isPremium ? "bg-[#D8B04C]" : "bg-[#E4B95B]"}`} />

        <div className={`h-px flex-1 ${isPremium ? "bg-[#D8B04C]/60" : "bg-[#E4B95B]/35"}`} />
      </div>

      {/* Heading */}

      <div className="mt-8 text-center">
        <h2
          className="
            text-[#0D47B7]

            font-black
            tracking-[-0.05em]

            text-[42px]

            sm:text-[54px]

            md:text-[68px]

            lg:text-[82px]
            drop-shadow-[0_1px_0_rgba(216,176,76,0.18)]
          "
        >
          {title}
        </h2>

        {isPremium && (
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.32em] text-[#C89A2B]">
            Premium Signature
          </p>
        )}

        <p
          className="
            mt-3

            text-neutral-500

            text-base

            sm:text-lg

            lg:text-xl
          "
        >
          {subtitle}
        </p>
      </div>

      {/* Cards */}

      <div className={isPremium ? "mt-14" : "mt-12"}>
        {children}
      </div>
    </section>
  );
}
