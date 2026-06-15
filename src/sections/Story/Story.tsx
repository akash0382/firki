import Container from "../../components/layout/Container";
import StoryContent from "./components/StoryContent";
import StoryVisual from "./components/StoryVisual";

export default function Story() {
  return (
    <section
      id="story"
      className="
        relative
        overflow-hidden
        bg-[#FFF9F2]
        scroll-mt-32
        pb-32
        pt-32
        sm:pb-40
        sm:pt-36
        lg:pb-56
        lg:pt-48
      "
    >
      {/* Background ornaments */}

      <div className="absolute left-[-120px] top-24 h-[200px] w-[200px] rounded-full bg-[#F5D86B]/20 blur-[120px] sm:h-[280px] sm:w-[280px]" />

      <div className="absolute right-[-150px] bottom-20 h-[220px] w-[220px] rounded-full bg-[#0D47B7]/5 blur-[140px] sm:h-[320px] sm:w-[320px]" />

      <Container className="relative z-10 flex flex-col items-center">
        <div
          className="
            grid
            items-center
            justify-items-center
            grid-cols-1
            w-full
            max-w-[960px]
            gap-16
            md:gap-20
            lg:grid-cols-[1.1fr_0.9fr]
            lg:items-start
            lg:justify-items-stretch
            lg:gap-24
          "
        >
          <div className="lg:justify-self-start">
            <StoryContent />
          </div>

          <div className="lg:justify-self-end">
            <StoryVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
