import { Open_Sans } from "next/font/google";
import Image from "next/image";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function ContactHeader() {
  return (
    <div className="px-10">
      <section
  className={`relative w-full h-[353px] py-16 px-4 bg-[#000000] text-center text-white overflow-hidden ${openSans.className}`}
>

        {/* Background Image */}
        <Image
          src="/MAP.png"
          alt="Background Map"
          className="absolute top-6 right-60 w-[800px] h-80 opacity-100 items-center pointer-events-none select-none"
        />

        <div className="relative z-10 mt-2">
          <p className="text-[12px] tracking-[6px] uppercase mb-2">
            get in touch
          </p>

          <h2 className="text-[55px] font-bold">Contact Us</h2>

          <p className="text-[29px] max-w-[850px] mx-auto mt-3 opacity-90">
            We are alwasy ready to help you and answer your questions
          </p>

          {/* Centered social row */}
          <div className="flex justify-center items-center gap-4 mt-14">
            <p className="font-semibold">follow us</p>
            <a
               href="https://www.facebook.com/p/Heartland-General-Trading-Co-LLC-61556223026571/?_rdc=2&_rdr#"
               target="_blank"
               rel="noopener noreferrer"
               >
             <Image src="/fbwhite.png" alt="Facebook" className="w-5 h-5" />
            </a>
            <Image src="/instawhite.png" alt="Instagram" className="w-5 h-5" />
            <Image src="/ytwhite.png" alt="YouTube" className="w-5 h-5" />
          </div>
        </div>
      </section>
    </div>
  );
}
