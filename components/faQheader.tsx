import Image from "next/image";

export default function FAQHeader() {
  return (
    <div className="px-0 md:px-10">
      <section
        className="relative w-full h-auto md:h-[353px] py-10 md:py-16 px-4 bg-[#000000] text-center text-white overflow-hidden font-openSans"
      >
        {/* Background question marks */}
<div className="absolute inset-0 pointer-events-none select-none">

  {/* MOBILE: Background image */}
  <div className="relative w-full h-full flex items-center justify-center md:hidden opacity-60">
    <div className="relative w-[120%] h-[140%]">
      <Image
        src="/questionmarks.png"
        alt="Background Questions"
        fill
        className="object-contain brightness-[1.8]"
      />
    </div>
  </div>

  {/* DESKTOP: images */}
  <div className="hidden md:flex justify-between items-center w-full h-full opacity-100">
    
    {/* LEFT */}
    <div className="relative w-1/2 h-full">
      <Image
        src="/questionmarks.png"
        alt="Background Questions"
        fill
        className="object-contain brightness-[1.8]"
      />
    </div>

    {/* RIGHT */}
    <div className="relative w-1/2 h-full">
      <Image
        src="/questionmarks.png"
        alt="Background Questions"
        fill
        className="object-contain brightness-[1.8]"
      />
    </div>

  </div>
</div>

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col items-center px-6 md:px-2">
          <p className="text-[12px] md:text-[12px] tracking-[4px] md:tracking-[6px] uppercase mb-2">
            F A Q
          </p>

          <h2 className="text-[18px] leading-tight md:text-[50px] font-nunito font-bold">
            Frequently Asked Questions
          </h2>

          <p className="text-[12px] md:text-[18px] max-w-[900px] mx-auto mt-3 md:mt-8 opacity-90 leading-relaxed">
            Welcome to our Frequently Asked Questions (FAQ) section. Here, we aim to address common queries and provide you with the information you need about Heartland General Trading and our products. Whether you’re looking for details about our offerings, ordering process, or shipping, you’ll find answers to help guide your experience with us.
          </p>
        </div>
      </section>
    </div>
  );
}
