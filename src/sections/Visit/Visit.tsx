import Container from "../../components/layout/Container";
import swiggyLogo from "../../assets/icons/Swiggy.png";
import zomatoLogo from "../../assets/icons/zomato.png";
import gorakhpur1 from "../../assets/outlets/Gorakhpur1.jpeg";
import gorakhpur2 from "../../assets/outlets/Gorakhpur2.jpeg";

// temporary
import lucknowImage from "../../assets/outlets/gorakhpur1.jpeg";


const gorakhpurSwiggy = "#";
const gorakhpurZomato = "#";


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
        !sm:py-24
        !lg:py-32
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          left-[-120px]
          top-20
          !h-[260px]
          !w-[260px]
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
          !h-[300px]
          !w-[300px]
          rounded-full
          bg-[#0D47B7]/8
          blur-[160px]
        "
      />

      <Container className="relative z-10 flex flex-col items-center !mx-auto">
        <div aria-hidden="true" className="!h-10 bg-[#FFF9F2] !sm:h-16 !lg:h-20" />

        <div className="w-full max-w-[1400px]">
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
              Now Serving In
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
              Find Firki Near You
            </h2>
        
            <p
              className="
                !mx-auto
                !mt-6
                max-w-[720px]
                text-[18px]
                leading-8
                text-neutral-600
              "
            >
              Pure milk. Real ingredients. Available across Lucknow &
              Gorakhpur.
            </p>
          </div>
        
          {/* Outlet Cards */}
          <div className="
                !mt-8
                !mx-auto
                grid
                max-w-[320px]
                gap-8
                sm:max-w-none
                sm:max-w-[700px]
                lg:max-w-[1200px]
                lg:grid-cols-3">
            {/* Lucknow */}
            <div
              className="
                flex
                h-full
                flex-col
                overflow-hidden
                rounded-[36px]
                border
                border-[#E4B95B]
                bg-white
                shadow-[0_20px_60px_rgba(0,0,0,0.06)]
                transition-all
                duration-300
                hover:-translate-y-2
              "
            >
              <div className="aspect-[1] overflow-hidden">
                <img
                  src={lucknowImage}
                  alt="Lucknow Outlet"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
        
              <div className="flex flex-1 flex-col !p-6">
                <h3 className="text-[32px] font-black text-[#111111]">
                  Lucknow
                </h3>
        
                <div className="!mt-2 space-y-2">
                  <p className="text-neutral-600">
                    Firki's Flagship Cart
                    <br />
                    Infront of Sahu Cinema,
                    <br />
                    Hazratganj, Lucknow
                  </p>
                
                  <p className="text-sm font-semibold text-[#C89A2B]">
                    Open Daily • 2 PM – 12 AM
                  </p>
                </div>


                <a
                  href="https://maps.app.goo.gl/NnNaDwoDPj8PnVau7"
                  className="
                    !mt-15
                    flex
                    justify-center
                    rounded-full
                    border
                    border-[#0D47B7]
                    !px-5
                    !py-2
                    font-semibold
                    text-[#0D47B7]
                    transition-all
                    duration-300
                    hover:bg-[#0D47B7]
                    hover:text-white
                    !mx-auto
                    !w-fit
                    !px-20
                  "
                >
                  Directions
                </a>
        
                <div className="!mt-4 flex items-center justify-center gap-4">
                  <a
                    href="https://www.swiggy.com/menu/1386948?source=sharing"
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-full
                      border
                      border-[#FC8019]/25
                      bg-white
                      shadow-[0_10px_24px_rgba(252,128,25,0.18)]
                      transition-all
                      hover:-translate-y-1
                    "
                  >
                    <img
                      src={swiggyLogo}
                      alt="Swiggy"
                      className="h-full w-full object-cover"
                    />
                  </a>
                
                  <a
                    href="https://zomato.onelink.me/xqzv/zbii5lfa"
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-full
                      border
                      border-[#D74C4C]/25
                      bg-white
                      shadow-[0_10px_24px_rgba(215,76,76,0.18)]
                      transition-all
                      hover:-translate-y-1
                    "
                  >
                    <img
                      src={zomatoLogo}
                      alt="Zomato"
                      className="h-full w-full scale-125 object-cover"
                    />
                  </a>
                </div>
              </div>
            </div>
        
            {/* Gorakhpur 1 */}
            <div
              className="
                flex
                h-full
                flex-col
                overflow-hidden
                rounded-[36px]
                border
                border-[#E4B95B]
                bg-white
                shadow-[0_20px_60px_rgba(0,0,0,0.06)]
                transition-all
                duration-300
                hover:-translate-y-2
              "
            >
              <div className="aspect-[1] overflow-hidden">
                <img
                  src={gorakhpur1}
                  alt="Gorakhpur Outlet 1"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
        
              <div className="flex flex-1 flex-col !p-6">
                <h3 className="text-[32px] font-black text-[#111111]">
                  Gorakhpur
                </h3>
        
                <div className="!mt-2 space-y-2">
                  <p className="text-neutral-600 leading-relaxed">
                    Firki at Jatt Rolls
                    <br />
                    Beside Belgian Waffle,
                    <br />
                    Near Maruti Suzuki Showroom
                    <br />
                    Mohaddipur, Gorakhpur
                  </p>
                
                  <p className="text-sm font-semibold text-[#C89A2B]">
                    Open Daily • 11 AM – 12 AM
                  </p>
                </div>
        
                <a
                  href="https://maps.app.goo.gl/zqPg77dhfgtbzawr9"
                  className="
                    !mt-6
                    flex
                    justify-center
                    rounded-full
                    border
                    border-[#0D47B7]
                    !px-5
                    !py-2
                    font-semibold
                    text-[#0D47B7]
                    transition-all
                    duration-300
                    hover:bg-[#0D47B7]
                    hover:text-white
                    !mx-auto
                    !w-fit
                    !px-20
                  "
                >
                  Directions
                </a>
        
                <div className="!mt-4 flex items-center justify-center gap-4">
                  <a
                    href={gorakhpurSwiggy}
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-full
                      border
                      border-[#FC8019]/25
                      bg-white
                      shadow-[0_10px_24px_rgba(252,128,25,0.18)]
                      transition-all
                      hover:-translate-y-1
                    "
                  >
                    <img
                      src={swiggyLogo}
                      alt="Swiggy"
                      className="h-full w-full object-cover"
                    />
                  </a>
                
                  <a
                    href={gorakhpurZomato}
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-full
                      border
                      border-[#D74C4C]/25
                      bg-white
                      shadow-[0_10px_24px_rgba(215,76,76,0.18)]
                      transition-all
                      hover:-translate-y-1
                    "
                  >
                    <img
                      src={zomatoLogo}
                      alt="Zomato"
                      className="h-full w-full scale-125 object-cover"
                    />
                  </a>
                </div>
              </div>
            </div>
        
            {/* Gorakhpur 2 */}
            <div
              className="
                flex
                h-full
                flex-col
                overflow-hidden
                rounded-[36px]
                border
                border-[#E4B95B]
                bg-white
                shadow-[0_20px_60px_rgba(0,0,0,0.06)]
                transition-all
                duration-300
                hover:-translate-y-2
              "
            >
              <div className="aspect-[1] overflow-hidden">
                <img
                  src={gorakhpur2}
                  alt="Gorakhpur Outlet 2"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
        
              <div className="flex flex-1 flex-col !p-6">
                <h3 className="text-[32px] font-black text-[#111111]">
                  Gorakhpur
                </h3>
        
                <div className="!mt-2 space-y-2">
                  <p className="text-neutral-600 leading-relaxed">
                    Firki at Jatt Rolls
                    <br />
                    Medical College Road,
                    <br />
                    Near HP Petrol Pump,
                    
                    Basharatpur, Siva Puram,
                    <br />
                    Gorakhpur
                  </p>
                
                  <p className="text-sm font-semibold text-[#C89A2B]">
                    Open Daily • 11 AM – 12 AM
                  </p>
                </div>
        
                <a
                  href="https://maps.app.goo.gl/MgYGkMUrUZVrpTxUA"
                  className="
                    !mt-6
                    flex
                    justify-center
                    rounded-full
                    border
                    border-[#0D47B7]
                    !px-5
                    !py-2
                    font-semibold
                    text-[#0D47B7]
                    transition-all
                    duration-300
                    hover:bg-[#0D47B7]
                    hover:text-white
                    !mx-auto
                    !w-fit
                    !px-20
                  "
                >
                  Directions
                </a>
        
                <div className="!mt-4 flex items-center justify-center gap-4">
                  <a
                    href={gorakhpurSwiggy}
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-full
                      border
                      border-[#FC8019]/25
                      bg-white
                      shadow-[0_10px_24px_rgba(252,128,25,0.18)]
                      transition-all
                      hover:-translate-y-1
                    "
                  >
                    <img
                      src={swiggyLogo}
                      alt="Swiggy"
                      className="h-full w-full object-cover"
                    />
                  </a>
                
                  <a
                    href={gorakhpurZomato}
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-full
                      border
                      border-[#D74C4C]/25
                      bg-white
                      shadow-[0_10px_24px_rgba(215,76,76,0.18)]
                      transition-all
                      hover:-translate-y-1
                    "
                  >
                    <img
                      src={zomatoLogo}
                      alt="Zomato"
                      className="h-full w-full scale-125 object-cover"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        
          {/* Coming Soon */}
          <div
            className="
              !mt-16
              !mx-auto
              max-w-[340px]
              sm:max-w-[720px]
              lg:max-w-[1100px]
              overflow-hidden
              rounded-[36px]
              border
              border-[#E4B95B]
              bg-gradient-to-br
              from-[#FFF8EA]
              via-[#FFF4DF]
              to-[#FFF1D1]
              shadow-[0_25px_80px_rgba(228,185,91,0.18)]
              !px-8
              !py-14
              text-center
              relative
            "
          >
            {/* Decorative Blobs */}
            <div
              className="
                absolute
                -left-16
                -top-16
                h-40
                w-40
                rounded-full
                bg-[#E4B95B]/10
                blur-3xl
              "
            />
          
            <div
              className="
                absolute
                -bottom-16
                -right-16
                h-40
                w-40
                rounded-full
                bg-[#0D47B7]/10
                blur-3xl
              "
            />
          
            <div className="relative z-10">
              <div className="text-6xl">🚀✨</div>
          
              <h3
                className="
                  !mt-5
                  text-[36px]
                  font-black
                  leading-none
                  text-[#111111]
                  sm:text-[42px]
                "
              >
                Coming To Your City Soon
              </h3>
          
              <div className="!mx-auto !mt-5 h-[3px] w-20 rounded-full bg-[#E4B95B]" />
          
              <p
                className="
                  !mx-auto
                  !mt-4
                  max-w-[700px]
                  text-lg
                  leading-8
                  text-neutral-600
                "
              >
                Lucknow. Gorakhpur. What's next?
                <br />
                We're expanding rapidly and bringing Firki
                closer to every kulfi lover.
              </p>
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}
