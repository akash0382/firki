export default function FloatingShapes() {
  return (
    <>
      {/* Top Circle */}

      <div
        className="
          absolute
          top-10
          left-10
          h-24
          w-24
          rounded-full
          bg-yellow-200/40
          blur-xl
        "
      />

      {/* Right Circle */}

      <div
        className="
          absolute
          bottom-20
          right-10
          h-32
          w-32
          rounded-full
          bg-yellow-300/30
          blur-2xl
        "
      />

      {/* Small Ring */}

      <div
        className="
          absolute
          top-32
          right-20
          h-12
          w-12
          rounded-full
          border
          border-yellow-400
          opacity-40
        "
      />
    </>
  );
}