import Container from "../../components/layout/Container";
import PromiseCard from "./components/PromiseCard";

import milkIcon from "../../assets/icons/milk.svg";
import fruitsIcon from "../../assets/icons/fruits.svg";
import leavesIcon from "../../assets/icons/leaves.svg";

const promises = [
  {
    icon: milkIcon,
    title: "Pure Milk",
    description:
      "Made only with rich, fresh milk for an authentic kulfi experience.",
  },
  {
    icon: fruitsIcon,
    title: "Real Fruits/Ingredients",
    description:
      "Real fruits, nuts and natural flavors—no artificial shortcuts.",
  },
  {
    icon: leavesIcon,
    title: "No Preservatives",
    description:
      "Handcrafted in small batches without added preservatives.",
  },
  {
    emoji: "🚫",
    title: "No Sugar",
    description:
      "Sweet flavour without sugar, crafted for a lighter indulgence.",
  },
];

export default function Promise() {
  return (
    <section
      id="promise"
      className="
        relative
        overflow-hidden
        bg-[#FCFAF5]
        scroll-mt-32
        pb-44
        pt-32
        sm:pb-52
        sm:pt-36
        lg:pb-72
        lg:pt-48
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          left-[-120px]
          top-20
          h-[200px]
          w-[200px]
          rounded-full
          bg-[#E4B95B]/15
          blur-[120px]
        "
      />

      <div
        className="
          absolute
          right-[-100px]
          bottom-10
          h-[220px]
          w-[220px]
          rounded-full
          bg-[#0D47B7]/5
          blur-[140px]
        "
      />

      <Container className="relative z-10 flex flex-col items-center">
        {/* Heading */}

        <div className="w-full max-w-[760px] text-center">
          <p
            className="
              inline-flex
              items-center
              justify-center
              rounded-full
              border
              border-[#0D47B7]
              bg-[#0D47B7]
              px-[clamp(1.5rem,2vw,2.25rem)]
              py-[clamp(0.9rem,1.1vw,1.15rem)]
              text-[clamp(15px,1.1vw,18px)]
              font-semibold
              uppercase
              tracking-[clamp(0.18em,0.24vw,0.34em)]
              text-white
              shadow-[0_14px_34px_rgba(13,71,183,0.25)]
              whitespace-nowrap
              leading-none
              max-w-[calc(100vw-1rem)]
            "
          >
            {"\u00A0"}OUR PROMISE{"\u00A0"}
          </p>

          <h2
            className="
              mt-7
              text-[34px]
              font-black
              leading-[0.95]
              tracking-[-0.05em]
              text-[#111111]

              sm:text-[48px]
              md:text-[68px]
              lg:text-[82px]
            "
          >
            Simple Ingredients.
            <br />
            Exceptional Memories.
          </h2>

          <div className="mx-auto mt-8 flex w-full justify-center">
            <p
              className="
                max-w-[780px]
                text-center
                text-[16px]
                leading-8
                text-neutral-600
                sm:text-[18px]
                sm:leading-8
              "
            >
              Every Firki kulfi is handcrafted using authentic ingredients,
              traditional recipes, and a commitment to quality that never
              compromises.
            </p>
          </div>
        </div>
        <div
        aria-hidden="true"
        className="h-24 bg-[#FFF9F2] sm:h-32 lg:h-10"
      />

        {/* Cards */}

        <div
          className="
            mt-24
            grid
            w-full
            max-w-[1440px]
            grid-cols-1
            justify-items-center
            gap-6
            sm:mt-28
            md:grid-cols-2
            lg:grid-cols-4
            lg:gap-5
            xl:gap-6
          "
        >
          {promises.map((item) => (
            <PromiseCard
              key={item.title}
              icon={item.icon}
              emoji={item.emoji}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}
