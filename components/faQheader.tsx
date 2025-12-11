import { Open_Sans } from "next/font/google";
import Image from "next/image";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function FAQHeader() {
  return (
    <div className="px-10"> 
  <section
    className={`relative w-full h-[353px] py-16 px-4 bg-[#000000] text-center text-white overflow-hidden ${openSans.className}`}
  >


      {/* Background question marks */}
<div className="absolute inset-0 flex justify-between items-center pointer-events-none select-none opacity-100">

  {/* LEFT */}
  <Image
    src="/questionmarks.png"
    alt="Background Questions"
    className="w-1/2 h-full object-contain brightness-[1.8]"
  />

  {/* RIGHT */}
  <Image
    src="/questionmarks.png"
    alt="Background Questions"
    className="w-1/2 h-full object-contain brightness-[1.8]"
  />
</div>



      <div className="relative z-10 mt-2">
        <p className="text-[12px] tracking-[6px] uppercase mb-2">
          F A Q
        </p>

        <h2 className="text-[50px] font-bold">
          Frequently Asked Questions
        </h2>

        <p className="text-[23px] max-w-[850px] mx-auto mt-8 opacity-90">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </section>
    </div>
  );
}
