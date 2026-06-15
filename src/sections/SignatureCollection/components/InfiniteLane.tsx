import { useEffect, useRef } from "react";
import type { FlavourItem } from "../data";
import CollectionCard from "./CollectionCard";

interface Props {
  items: FlavourItem[];
  isPremium?: boolean;
}

export default function InfiniteLane({ items, isPremium = false }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const paused = useRef(false);
  const resumeTimeout = useRef<number | null>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;

    if (!wrapper || items.length === 0) return;

    const speed = 1;
    const centerScroll = () => {
      wrapper.scrollLeft = (wrapper.scrollWidth - wrapper.clientWidth) / 2;
    };

    centerScroll();

    const animate = () => {
      if (!paused.current && !isDragging.current) {
        wrapper.scrollLeft += speed;

        const max = wrapper.scrollWidth - wrapper.clientWidth - 5;

        if (wrapper.scrollLeft >= max) {
          centerScroll();
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }

      if (resumeTimeout.current !== null) {
        window.clearTimeout(resumeTimeout.current);
      }
    };
  }, [items.length]);

  const pause = () => {
    paused.current = true;

    if (resumeTimeout.current !== null) {
      window.clearTimeout(resumeTimeout.current);
    }
  };

  const resume = () => {
    if (resumeTimeout.current !== null) {
      window.clearTimeout(resumeTimeout.current);
    }

    resumeTimeout.current = window.setTimeout(() => {
      paused.current = false;
    }, 750);
  };

  function beginDrag(clientX: number) {
    const wrapper = wrapperRef.current;

    if (!wrapper) return;

    isDragging.current = true;
    paused.current = true;

    if (resumeTimeout.current !== null) {
      window.clearTimeout(resumeTimeout.current);
    }

    startX.current = clientX;
    scrollStart.current = wrapper.scrollLeft;
  }

  function drag(clientX: number) {
    if (!isDragging.current) return;

    const wrapper = wrapperRef.current;

    if (!wrapper) return;

    const delta = clientX - startX.current;
    wrapper.scrollLeft = scrollStart.current - delta;
  }

  function endDrag() {
    isDragging.current = false;
    resume();
  }

  if (items.length === 0) {
    return (
      <div className="flex justify-center py-20">
        <div
          className="
            rounded-full
            border
            border-[#E4B95B]
            px-[clamp(1.5rem,2vw,2.25rem)]
            py-[clamp(0.75rem,1vw,1.1rem)]
            text-[clamp(18px,1.4vw,20px)]
            font-bold
            text-[#0D47B7]
            whitespace-nowrap
            leading-none
          "
        >
          Coming Soon
        </div>
      </div>
    );
  }

  if (items.length === 1) {
    const item = items[0];

    return (
      <div className="flex justify-center py-2">
        <div className={isPremium ? "w-[92vw] sm:w-[78vw] md:w-[62vw] lg:w-[44vw] xl:w-[36vw]" : "w-[86vw] sm:w-[72vw] md:w-[52vw] lg:w-[34vw] xl:w-[28vw]"}>
          <CollectionCard
            title={item.title}
            image={item.image}
            description={item.description}
            ingredients={item.ingredients}
            tagline={item.tagline}
            isPremium={isPremium}
          />
        </div>
      </div>
    );
  }

  const repeated = Array.from({ length: 24 }, (_, index) => items[index % items.length]);

  return (
    <div
      ref={wrapperRef}
      className="
        relative
        w-full
        overflow-x-auto
        overflow-y-visible
        scrollbar-hide
        cursor-grab
        active:cursor-grabbing
        select-none
        touch-pan-y
      "
      onMouseEnter={pause}
      onMouseLeave={endDrag}
      onMouseDown={(e) => {
        e.preventDefault();
        beginDrag(e.clientX);
      }}
      onMouseMove={(e) => {
        drag(e.clientX);
      }}
      onMouseUp={endDrag}
      onTouchStart={(e) => {
        beginDrag(e.touches[0].clientX);
      }}
      onTouchMove={(e) => {
        drag(e.touches[0].clientX);
      }}
      onTouchEnd={endDrag}
    >
      <div className="flex w-max gap-10 px-2 py-6">
        {repeated.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="
              shrink-0
              w-[86vw]
              sm:w-[72vw]
              md:w-[52vw]
              lg:w-[34vw]
              xl:w-[28vw]
              2xl:w-[24vw]
            "
          >
            <CollectionCard
              title={item.title}
              image={item.image}
              description={item.description}
              ingredients={item.ingredients}
              tagline={item.tagline}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
