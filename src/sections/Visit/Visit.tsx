import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import Container from "../../components/layout/Container";
import BrandLogo from "../../components/BrandLogo/BrandLogo";
import swiggyLogo from "../../assets/icons/Swiggy.png";
import zomatoLogo from "../../assets/icons/zomato.png";

const visitDetails = [
  {
    icon: MapPin,
    label: "Address",
    value: "Firki Kulfiwala, Lucknow, Gorakhpur",
  },
  {
    icon: Clock3,
    label: "Timings",
    value: "2 PM - 12 AM, daily",
  },
  {
    icon: Phone,
    label: "Call",
    value: "+91 76788 57820",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@firki.in",
  },
];

const phoneNumber = "+91 76788 57820";
const emailAddress = "hello@firki.in";

function getTelHref(value: string) {
  const sanitized = value.trim().replace(/[^\d+]/g, "");
  return sanitized.startsWith("+") ? `tel:${sanitized}` : `tel:+${sanitized}`;
}

function getMailHref(value: string) {
  return `mailto:${value.trim()}`;
}

export default function Visit() {
  return (
    <section
      id="visit"
      className="
        relative
        overflow-hidden
        bg-[#FFF9F2]
        scroll-mt-32
        !py-16
        sm:py-24
        lg:py-32
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          left-[-120px]
          top-20
          h-[260px]
          w-[260px]
          rounded-full
          bg-[#E4B95B]/12
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

      <Container className="relative z-10 flex flex-col items-center">
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
            "
          >
            Visit Us
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
              lg:text-[88px]
            "
          >
            Come for the kulfi.
            <br />
            Stay for the moment.
          </h2>

          <div className="mx-auto !mt-6 flex w-full flex-col items-center gap-4">
            <p className="max-w-[780px] text-center text-[16px] leading-8 text-neutral-600 sm:text-[18px]">
              Find us for takeaway, a quick pause, or a proper summer treat.
              We&apos;ve kept the experience simple, warm, and easy to reach.
              Also available for home delivery on Swiggy and Zomato.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://www.swiggy.com"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-2 transition-transform hover:-translate-y-0.5"
                aria-label="Open Swiggy"
              >
                <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-[#FC8019]/25 bg-white shadow-[0_10px_24px_rgba(252,128,25,0.18)]">
                  <img
                    src={swiggyLogo}
                    alt="Swiggy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </a>

              <a
                href="https://www.zomato.com"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-2 transition-transform hover:-translate-y-0.5"
                aria-label="Open Zomato"
              >
                <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-[#D74C4C]/25 bg-white shadow-[0_10px_24px_rgba(215,76,76,0.18)]">
                  <img
                    src={zomatoLogo}
                    alt="Zomato"
                    className="h-full w-full scale-125 object-cover"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div aria-hidden="true" className="!h-10 bg-[#FFF9F2] !sm:h-16 !lg:h-20" />

        <div className="mt-14 grid w-full max-w-[1440px] justify-items-center gap-6 sm:mt-20 lg:grid-cols-1 lg:gap-5 xl:gap-6">
          <div
            className="
              w-full
              max-w-[1120px]
              overflow-hidden
              rounded-[38px]
              border
              border-[#E4B95B]
              bg-gradient-to-br
              from-[#FFFDF8]
              to-[#FFF4DD]
              !p-6
              shadow-[0_20px_60px_rgba(0,0,0,0.05)]
              !sm:p-8
              !lg:p-10
            "
          >
            <div
              className="
                flex
                min-h-[420px]
                h-full
                flex-col
                items-center
                justify-center
                rounded-[32px]
                border
                border-dashed
                border-[#E4B95B]/25
                bg-white/60
                !p-6
                text-center
                sm:min-h-[460px]
                sm:p-8
              "
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#FFF3D8] text-[#0D47B7]">
                <MapPin size={38} />
              </div>

              <BrandLogo large />

              <p className="!mt-8 max-w-lg text-[16px] leading-8 text-neutral-700 sm:text-[18px]">
                A calm, premium stop for families, friends, and anyone who wants
                kulfi without the noise.
              </p>

              <div className="!mt-8 grid w-full max-w-[760px] !gap-4 sm:grid-cols-2">
                {visitDetails.map((detail) => {
                  const Icon = detail.icon;
                  const isCall = detail.label === "Call";
                  const isEmail = detail.label === "Email";

                  return (
                    <div
                      key={detail.label}
                      className="
                        flex
                        items-start
                        !gap-4
                        rounded-2xl
                        border
                        border-[#E4B95B]/15
                        bg-[#FCFAF5]
                        !p-4
                      "
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFF3D8] text-[#0D47B7]">
                        <Icon size={20} />
                      </div>

                      <div className="text-left">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C89A2B]">
                          {detail.label}
                        </p>

                        {isCall ? (
                          <a
                            href={getTelHref(phoneNumber)}
                            className="
                              !mt-2
                              inline-flex
                              items-center
                              rounded-full
                              border
                              border-[#0D47B7]/15
                              bg-[#0D47B7]/8
                              !px-3
                              !py-1
                              text-[15px]
                              font-semibold
                              leading-none
                              text-[#0D47B7]
                              transition-all
                              hover:-translate-y-0.5
                              hover:bg-[#0D47B7]/12
                              hover:shadow-[0_10px_24px_rgba(13,71,183,0.12)]
                            "
                          >
                            {phoneNumber}
                          </a>
                        ) : isEmail ? (
                          <a
                            href={getMailHref(emailAddress)}
                            className="
                              mt-2
                              inline-flex
                              items-center
                              rounded-full
                              border
                              border-[#0D47B7]/15
                              bg-[#0D47B7]/8
                              !px-3
                              !py-1
                              text-[15px]
                              font-semibold
                              leading-none
                              text-[#0D47B7]
                              transition-all
                              hover:-translate-y-0.5
                              hover:bg-[#0D47B7]/12
                              hover:shadow-[0_10px_24px_rgba(13,71,183,0.12)]
                            "
                          >
                            {emailAddress}
                          </a>
                        ) : (
                          <p className="!px-3 !py-1 mt-2 inline-flex rounded-full border border-[#0D47B7]/12 bg-[#0D47B7]/6 px-5 py-2.5 text-[15px] font-semibold leading-none text-[#0D47B7]">
                            {detail.value}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div aria-hidden="true" className="h-10 bg-[#FFF9F2] sm:h-16 lg:h-20" />
      </Container>
    </section>
  );
}
