interface CollectionCardProps {
  title: string;
  image: string;
  description: string;
  ingredients: string[];
  tagline: string;
  isPremium?: boolean;
}

export default function CollectionCard({
  title,
  image,
  description,
  ingredients,
  tagline,
  isPremium = false,
}: CollectionCardProps) {
  const cardClassName = isPremium
    ? `
        group
        relative
        mx-auto
        flex
        h-full
        max-w-[640px]
        w-full
        flex-col
        justify-between
        overflow-hidden
        rounded-[40px]
        border
        border-[#D8B04C]
        bg-gradient-to-b
        from-[#FFFDF8]
        via-[#FFF8E9]
        to-[#FFF1D1]
        shadow-[0_24px_70px_rgba(216,176,76,0.16)]
        transition-all
        duration-500
        ease-out
        hover:-translate-y-3
        hover:scale-[1.01]
        hover:shadow-[0_32px_90px_rgba(216,176,76,0.24)]
      `
    : `
        group
        relative
        mx-auto
        flex
        h-full
        max-w-[560px]
        w-full
        flex-col
        justify-between
        overflow-hidden
        rounded-[36px]
        border
        border-[#E4C97D]
        bg-gradient-to-b
        from-white
        to-[#FFFBF4]
        transition-all
        duration-500
        ease-out
        hover:-translate-y-3
        hover:scale-[1.01]
        hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)]
      `;

  const imageRingClassName = isPremium
    ? "bg-[#FFF0C8]"
    : "bg-[#FFF6E7]";

  const imageClassName = isPremium
    ? `
        max-h-[138px]
        max-w-[138px]
        object-contain
        transition-all
        duration-500
        group-hover:scale-110
        group-hover:-translate-y-2
        sm:max-h-[166px]
        sm:max-w-[166px]
      `
    : `
        max-h-[126px]
        max-w-[126px]
        object-contain
        transition-all
        duration-500
        group-hover:scale-105
        group-hover:-translate-y-2
        sm:max-h-[150px]
        sm:max-w-[150px]
      `;

  return (
    <div className={cardClassName}>
      <div
        className={`absolute left-6 right-6 top-0 h-[2px] sm:left-10 sm:right-10 ${isPremium ? "bg-[#D8B04C]" : "bg-[#D8B04C]/60"}`}
      />

      {isPremium && (
        <div className="absolute right-5 top-5 rounded-full border border-[#D8B04C]/30 bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-[#C89A2B] backdrop-blur">
          Premium
        </div>
      )}

      <div className={isPremium ? "px-6 py-8 sm:px-10 sm:py-12" : "px-5 py-7 sm:px-8 sm:py-10"}>
        <div className="flex justify-center">
          <div
            className={`flex h-[156px] w-[156px] items-center justify-center rounded-full transition-all duration-500 group-hover:scale-105 sm:h-[188px] sm:w-[188px] ${imageRingClassName}`}
          >
            <img src={image} alt={title} className={imageClassName} />
          </div>
        </div>

        <h3
          className={`mt-7 text-center font-black tracking-[-0.03em] text-[#0D47B7] ${isPremium ? "text-[clamp(2rem,3vw,3.25rem)]" : "text-2xl sm:text-3xl md:text-4xl"}`}
        >
          {title}
        </h3>

        <p
          className={`mt-2 text-center text-[10px] font-semibold uppercase tracking-[0.35em] text-[#C89A2B] ${isPremium ? "sm:text-[11px]" : ""}`}
        >
          {tagline}
        </p>

        <p
          className={`mx-auto mt-4 text-center text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7 md:text-[17px] md:leading-8 ${isPremium ? "max-w-[36rem]" : "max-w-md"}`}
        >
          {description}
        </p>

        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {ingredients.map((item) => (
            <span
              key={item}
              className={`rounded-full px-3 py-1.5 text-xs font-medium sm:text-sm ${isPremium ? "bg-[#FFF0C8] text-[#8A6720]" : "bg-[#FFF3D8] text-[#8A6720]"}`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 pb-5 sm:pb-6">
        <div className={`h-[1px] w-8 sm:w-10 ${isPremium ? "bg-[#D8B04C]" : "bg-[#D8B04C]/60"}`} />
        <div className={`h-2 w-2 rounded-full ${isPremium ? "bg-[#D8B04C]" : "bg-[#D8B04C]"}`} />
        <div className={`h-[1px] w-8 sm:w-10 ${isPremium ? "bg-[#D8B04C]" : "bg-[#D8B04C]/60"}`} />
      </div>
    </div>
  );
}
