import { useState } from "react";
interface Props {
onClose?: () => void;
}

export default function FranchiseForm({ onClose }: Props) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div
        className="
          w-full
          max-w-[950px]
          rounded-[28px]
          border-[4px]
          border-[#E4B95B]/15
          bg-[#FFF9F2]
          !p-12
          !md:p-14
          text-center
          shadow-[12px_12px_0px_#5A4343]
        "
      >
        <h2 className="text-2xl md:text-4xl font-bold text-[#0D47B7]">
          Application Submitted 🎉
        </h2>
  
        <p className="mt-8 text-lg text-gray-600">
          Thank you for your interest in FIRKI.
        </p>
  
        <p className="mt-3 text-lg text-gray-600">
          Our team will contact you soon.
        </p>
        {onClose && (
          <button
            onClick={() => onClose?.()}
            className="
              mt-8
              rounded-xl
              border-[3px]
              border-[#5A4343]
              bg-[#F7C600]
              !px-6
              !py-2
              text-lg
              font-semibold
              text-[#5A4343]
              shadow-[6px_6px_0px_#5A4343]
            "
          >
            Close
          </button>
        )}
      </div>
    );
  }

  return ( <div
     className="
       relative
       w-full
       max-w-[950px]
       max-h-[90vh]
       overflow-y-auto
       rounded-[28px]
       border-[4px]
       border-[#E4B95B]/15
       bg-[#FFF9F2]
       !p-5
       !sm:p-8
       !md:p-16
       shadow-[12px_12px_0px_#5A4343]
        "
           > 
    {onClose && (
      <button
        onClick={() => onClose?.()}
        aria-label="Close"
        className="
          absolute
          right-1
          top-1
          flex
          !h-10
          !w-10
          items-center
          justify-center
          rounded-full
          border-2
          border-[#E4B95B]/40
          bg-[#F4E7C7]
          text-[#5A4343]
          shadow-sm
          transition-all
          hover:scale-105
          hover:bg-[#E4B95B]/20
        "
      >
        <span className="text-[32px] leading-none">×</span>
      </button>
    )}
  
    <div className="h-12" />
  
    <div className="mx-auto w-full max-w-[700px] flex flex-col">
      <h2
        className="
          text-center
          text-[40px]
          sm:text-5xl
          md:text-[42px]
          font-bold
          text-[#0D47B7]
          tracking-tight
          leading-tight
        "
      >
        Bring FIRKI To Your City
      </h2>
  
      <p
        className="
          !mt-6
          text-center
          text-base
          leading-relaxed
          text-gray-600
          md:text-lg
        "
      >
        Join a growing premium kulfi brand built on
        tradition, purity and unforgettable taste.
      </p>
  
      <form
        className="!mt-6 flex flex-col flex-1"
        onSubmit={async (e) => {
          e.preventDefault();
      
          const formData = new FormData(e.currentTarget);
      
          fetch(
            "https://docs.google.com/forms/d/e/1FAIpQLScmUfwfd24sB4Ldrlz1TLnwMjIX_0LXYpumRDLdzMX40ZgoVg/formResponse",
            {
              method: "POST",
              mode: "no-cors",
              body: new URLSearchParams({
                "entry.609843095": formData.get("name") as string,
                "entry.2110633607": formData.get("location") as string,
                "entry.1175558985": formData.get("phone") as string,
                "entry.531526574": formData.get("email") as string,
                "entry.476579072": formData.get("message") as string,
              }),
            }
          );
          
          setSubmitted(true);
        }}
      >
        {/* Honeypots */}
        <input
          type="text"
          name="_honey"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />
      
        <input
          type="text"
          name="company_website"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />
      
        <div className="grid md:grid-cols-2 gap-x-6 gap-y-8">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            pattern="^[a-zA-Z\s]{2,50}$"
            required
            className="
              h-12
              rounded-xl
              border-2
              border-[#5A4343]
              bg-[#F4E7C7]
              px-4
              !pl-[10px]
              outline-none
            "
          />
      
          <input
            type="text"
            name="location"
            placeholder="City / State"
            required
            
            className="
              h-12
              rounded-xl
              border-2
              border-[#5A4343]
              bg-[#F4E7C7]
              px-4
              !pl-[10px]
              outline-none
            "
          />
        
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            pattern="[6-9][0-9]{9}"
            required
            onInput={(e) => {
              e.currentTarget.value = e.currentTarget.value
                .replace(/\D/g, "")
                .slice(0, 10);
            }}
            className="
              h-12
              rounded-xl
              border-2
              border-[#5A4343]
              bg-[#F4E7C7]
              px-4
              !pl-[10px]
              outline-none
            "
          />
      
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="
              h-12
              rounded-xl
              border-2
              border-[#5A4343]
              bg-[#F4E7C7]
              px-4
              !pl-[10px]
              outline-none
            "
          />
        </div>
  
  
        <div className="h-8" />
        <div className="h-32">
          <textarea
            name="message"
            rows={4}
            placeholder="Any message for us? (Optional)"
            className="
              w-full
              rounded-xl
              border-2
              border-[#5A4343]
              bg-[#F4E7C7]
              px-5
              py-4
              !pl-[10px]
              resize-none
              outline-none
            "
          />
        </div>
      
        <div className="mt-auto">
          <button
            type="submit"
            className="
              w-full
              rounded-2xl
              border-[3px]
              border-[#5A4343]
              bg-[#F7C600]
              py-5
              text-2xl
              font-semibold
              text-[#5A4343]
              shadow-[8px_8px_0px_#5A4343]
              transition-all
            "
          >
            Submit Application →
          </button>
        </div>
      </form>
    </div>
  </div>
  
  );
  }
