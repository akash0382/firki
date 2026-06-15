interface BrandLogoProps {
  large?: boolean;
}

export default function BrandLogo({
  large = false,
}: BrandLogoProps) {
  return (
    <div className="select-none leading-none">
      <h1
        className={`
          font-black
          tracking-[-0.04em]
          text-[#F7E8CF]
          drop-shadow-[2px_2px_0px_#C89D37]
          ${large ? "text-7xl" : "text-5xl"}
        `}
        style={{
          fontFamily: '"Cinzel Decorative", serif',
        }}
      >
        FIRKI
      </h1>

      <div className="mt-1 flex items-end gap-2">
        <span
          className={`
            text-[#E4B95B]
            leading-none
            ${large ? "text-4xl" : "text-2xl"}
          `}
          style={{
            fontFamily: '"Great Vibes", cursive',
          }}
        >
          by
        </span>

        <span
          className={`
            text-[#E4B95B]
            leading-none
            ${large ? "text-4xl" : "text-3xl"}
          `}
          style={{
            fontFamily: '"Great Vibes", cursive',
          }}
        >
          Kulfiwala
        </span>
      </div>
    </div>
  );
}
