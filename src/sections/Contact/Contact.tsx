import Container from "../../components/layout/Container";
import { Phone, Mail } from "lucide-react";
import instagramLogo from "../../assets/icons/instagram.png";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-[#FFF9F2]
        scroll-mt-32
        !py-16
        !sm:py-24
        !lg:py-32
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-[-120px]
          top-20
          h-[260px]
          w-[260px]
          rounded-full
          bg-[#E4B95B]/10
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-140px]
          bottom-10
          h-[300px]
          w-[300px]
          rounded-full
          bg-[#0D47B7]/8
          blur-[160px]
        "
      />

      <Container className="!mx-auto relative z-10 flex flex-col items-center">
        <div className="w-full max-w-[1300px]">
          {/* Header */}
          <div className="text-center">
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
                text-sm
                font-semibold
                uppercase
                tracking-[0.25em]
                text-white
              "
            >
              Contact Us
            </p>

            <h2
              className="
                !mt-7
                text-[40px]
                font-black
                leading-[0.95]
                tracking-[-0.05em]
                text-[#111111]
                sm:text-[56px]
                md:text-[72px]
              "
            >
              Let's Start A Conversation
            </h2>

            <p
              className="
                !mx-auto
                !mt-6
                max-w-[700px]
                text-[18px]
                leading-8
                text-neutral-600
              "
            >
              Questions, franchise enquiries,
              collaborations or feedback —
              we'd love to hear from you.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="mt-8 flex flex-col items-center gap-5">
            <a
              href="tel:+917678857820"
              className="
                flex
                items-center
                gap-3
                text-lg
                font-medium
                text-neutral-700
                transition
                hover:text-[#0D47B7]
              "
            >
              <Phone size={18} />
              +91 76788 57820
            </a>
          
            <a
              href="mailto:hello@firki.in"
              className="
                flex
                items-center
                gap-3
                text-lg
                font-medium
                text-neutral-700
                transition
                hover:text-[#0D47B7]
              "
            >
              <Mail size={18} />
              hello@firki.in
            </a>
          
            <a
              href="https://www.instagram.com/firki.by.kulfiwala?igsh=MXBvdnF5cmRua2JoMQ=="
              target="_blank"
              rel="noreferrer"
              className="
                !mx-auto
                !mt-8
                inline-flex
                items-center
                gap-4
                rounded-full
                border
                border-[#E4B95B]
                bg-white
                !px-5
                !py-3
                shadow-[0_10px_30px_rgba(0,0,0,0.05)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_20px_40px_rgba(228,185,91,0.18)]
              "
            >
              <div>
                <img
                  src={instagramLogo}
                  alt="Instagram"
                  className="h-10 w-10"
                />
              </div>
            
              <div className="text-left">
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                  Follow Us
                </p>
            
                <p className="font-semibold text-[#111111]">
                  @firki.kulfi
                </p>
              </div>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}