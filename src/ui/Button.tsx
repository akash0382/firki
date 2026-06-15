import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
}

export default function Button({
  children,
  className = "",
  href,
}: ButtonProps) {
  const sharedClassName = `
    group
    inline-flex
    items-center
    justify-center
    gap-3

    w-full
    min-w-0
    sm:w-fit
    sm:min-w-[240px]

    rounded-full
    border-2
    border-[#E4B95B]
    bg-[#0D47B7]
    px-6
    py-3
    sm:px-8

    text-sm
    font-semibold
    text-white
    whitespace-nowrap

    shadow-lg
    transition-all
    duration-300

    hover:-translate-y-1
    hover:shadow-[0_18px_40px_rgba(13,71,183,0.35)]

    ${className}
  `;

  const content = (
    <>
      <span>{children}</span>

      <span
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={sharedClassName}>
        {content}
      </a>
    );
  }

  return <button className={sharedClassName}>{content}</button>;
}
