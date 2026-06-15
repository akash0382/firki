import type { FlavourItem } from "../data";
import CollectionCard from "./CollectionCard";

interface Props {
  items: FlavourItem[];
  sectionTitle: string;
}

export default function AutoScrollLane({
  items,
}: Props) {
  const repeated =
    items.length === 0
      ? []
      : Array.from(
          { length: Math.max(8, items.length * 2) },
          (_, i) => items[i % items.length]
        );

  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex gap-8 w-max py-2">
        {repeated.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="
              shrink-0
              w-[84vw]
              sm:w-[68vw]
              md:w-[52vw]
              lg:w-[40vw]
              xl:w-[32vw]
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
