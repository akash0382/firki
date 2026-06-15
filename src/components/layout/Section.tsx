import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Section({
  children,
  className = "",
}: Props) {
  return (
    <section
      className={`w-full py-24 lg:py-32 ${className}`}
    >
      {children}
    </section>
  );
}