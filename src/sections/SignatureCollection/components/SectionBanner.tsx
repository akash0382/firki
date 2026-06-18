interface SectionBannerProps {
  title: string;
  subtitle: string;
}

export default function SectionBanner({
  title,
  subtitle,
}: SectionBannerProps) {
  return (
    <div className="mx-auto mb-14 max-w-5xl">
      {/* Top Line */}

      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-[#E4B95B]/30" />

        <div className="h-2 w-2 rounded-full bg-[#E4B95B]" />

        <div className="h-px flex-1 bg-[#E4B95B]/30" />
      </div>

      {/* Heading */}

      <div className="!mt-7 text-center">
        <h2
          className="
            text-[42px]
            font-black
            tracking-[-0.05em]
            text-[#0D47B7]
            sm:text-[56px]
            lg:text-[72px]
          "
        >
          {title}
        </h2>

        <p
          className="
            !mx-auto
            !mt-4
            max-w-2xl
            text-[16px]
            leading-8
            text-neutral-500

            sm:text-[18px]
          "
        >
          {subtitle}
        </p>
      </div>

      {/* Bottom Line */}

      <div className="!mt-7 flex items-center gap-4">
        <div className="!h-px flex-1 bg-[#E4B95B]/30" />

        <div className="text-[#E4B95B] text-lg">
          ✦
        </div>

        <div className="!h-px flex-1 bg-[#E4B95B]/30" />
      </div>
    </div>
  );
}