import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`
        w-full
        max-w-[1320px]
        mx-auto

        px-6
        sm:px-8
        md:px-10
        lg:px-12
        xl:px-14
        2xl:px-16

        ${className}
      `}
    >
      {children}
    </div>
  );
}
