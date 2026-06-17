interface BrandLogoProps {
  large?: boolean;
}

export default function BrandLogo({
  large = false,
}: BrandLogoProps) {
  return (
    <div className="select-none flex flex-col items-center leading-none">
      <h1
        className={`
          font-black
          tracking-[-0.05em]
          text-[#F7E8CF]
          drop-shadow-[2px_2px_0px_#C89D37]
          ${large ? "text-7xl" : "text-[3.2rem]"}
        `}
        style={{
          fontFamily: '"Cinzel Decorative", serif',
        }}
      >
        FIRKI
      </h1>

      <p
        className="!mt-1 flex items-center gap-1"
        style={{
          fontFamily: '"Great Vibes", cursive',
        }}
      >
        <span
          className={`text-[#E4B95B] ${
            large ? "text-2xl" : "text-[1.2rem]"
          }`}
        >
          by
        </span>
      
        <span
          className={`text-[#E4B95B] ${
            large ? "text-4xl" : "text-[1.9rem]"
          }`}
        >
          Kulfiwala
        </span>
      </p>
    </div>
  );
}