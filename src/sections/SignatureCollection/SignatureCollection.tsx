import Container from "../../components/layout/Container";
import { collection } from "./data";

import CollectionSection from "./components/CollectionSection";
import InfiniteLane from "./components/InfiniteLane";

export default function SignatureCollection() {
  return (
      <section
      id="collection"
      className="
        relative
        overflow-hidden
        bg-[#FFF9F2]
        scroll-mt-32
        !pb-32
        !pt-20
        !sm:pb-44
        !sm:pt-24
        !lg:pb-64
        !lg:pt-40
      "
    >
      <Container className="relative z-10 flex flex-col items-center !mx-auto">

        {/* Background Decoration */}

        <div
          className="
            pointer-events-none
            absolute
            left-[-180px]
            top-[180px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#E4B95B]/10
            blur-[180px]
          "
        />
        
        <div
          className="
            pointer-events-none
            absolute
            right-[-180px]
            bottom-[120px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#0D47B7]/5
            blur-[180px]
          "
        />

        {/* Main Heading */}

        <div className="w-full max-w-5xl text-center">
          <p
            className="
              inline-flex
              items-center
              justify-center
              rounded-full
              border
              border-[#0D47B7]
              bg-[#0D47B7]
              !px-5
              !py-1
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
            {"\u00A0"}OUR COLLECTION{"\u00A0"}
          </p>

          <h2
            className="
              !mt-6
              font-black
              tracking-[-0.05em]
              text-[#111111]
              text-5xl
              sm:text-6xl
              lg:text-[84px]
            "
          >
            Signature Collection
          </h2>

          <div className="mx-auto !mt-6 flex w-full justify-center">
            <p
              className="
                max-w-[780px]
                text-center
                text-lg
                leading-8
                text-neutral-600
              "
            >
              Made using 100% pure milk, real ingredients,
              no preservatives and no added sugar.
            </p>
          </div>
        </div>

        {/* Sections */}

        <div className="!mt-16 w-full max-w-[1180px] !space-y-16 !sm:mt-20 !sm:space-y-20 !lg:mt-32 !lg:space-y-32">
          {collection.map((section) => (
            <CollectionSection
              key={section.title}
              title={section.title}
              subtitle={section.subtitle}
              isPremium={section.title === "MATKA KULFI"}
            >
              <InfiniteLane
                items={section.items}
                isPremium={section.title === "MATKA KULFI"}
              />
            </CollectionSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
