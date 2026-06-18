import FranchiseForm from "../../components/FranchisePopup/FranchiseForm";

const benefits = [
  {
    icon: "📈",
    title: "Growing Demand",
    text: "Consumers are actively seeking authentic Indian desserts and premium experiences.",
  },
  {
    icon: "🤝",
    title: "Complete Business Support",
    text: "From store setup to branding and operations, we help you every step of the way.",
  },
  {
    icon: "🌟",
    title: "A Brand With Character",
    text: "FIRKI combines nostalgia, quality and modern branding to create a memorable customer experience.",
  },
  {
    icon: "🎯",
    title: "Simple & Scalable Operations",
    text: "A focused product range makes daily operations efficient, consistent and easier to manage.",
  },
  {
    icon: "📍",
    title: "Flexible Store Formats",
    text: "FIRKI adapts to kiosks, takeaway counters and high-footfall retail locations.",
  },
];

export default function Franchise() {
  return (
    <section
      id="franchise"
      className="bg-[#FFF9F2] !py-24 !scroll-mt-10"
    >
      <div className="!mx-auto max-w-7xl !px-6">

        <div className="text-center w-full flex flex-col items-center">

          <div
            className="
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-[#0D47B7]
              !px-5
              !py-1
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
              text-white
            "
          >
            Franchise Opportunity
          </div>
          <h2
            className="
              !mt-6
              text-[42px]
              md:text-[88px]
              font-black
              leading-[0.95]
              text-black
            "
          >
            Why Own A FIRKI Franchise?
          </h2>

          <p
            className="
              !mt-6
              mx-auto
              max-w-4xl
              text-lg
              md:text-2xl
              leading-relaxed
              text-[#5A4343]
            "
          >
            Partner with FIRKI and start your entrepreneurial journey
            with a premium kulfi brand built on tradition, quality and
            growing demand.
          </p>
        </div>

        <div className="!mt-20 grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">

          {/* Left Side */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-[#0D47B7] text-center lg:text-left">
              Why Partner With FIRKI?
            </h3>

            <div className="!mt-10 !space-y-8">
              {benefits.map((item) => (
                <div
                  key={item.title}
                  className="border-b border-[#E4B95B]/30 pb-8"
                >
                  <div className="flex gap-6">
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-[#F4E7C7]
                        text-2xl
                      "
                    >
                      {item.icon}
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-[#5A4343]">
                        {item.title}
                      </h4>

                      <p className="mt-2 text-gray-600 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div>
            <FranchiseForm />
          </div>

        </div>
      </div>
    </section>
  );
}