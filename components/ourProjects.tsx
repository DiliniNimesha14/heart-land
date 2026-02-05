"use client";

import Image from "next/image";
import { Nunito, Open_Sans } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function OurProjects() {
  return (
    <section className="w-full bg-white py-2 md:py-6">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-14">
          {/* LEFT */}
          <div className="text-left  md:ml-20 ">
            <h2 className={`${nunito.className} text-[22px] text-center md:text-left sm:text-[25px] md:text-[40px] font-semibold text-black mb-12`}>
              Our CSR Initiative
            </h2>

            <div className="flex items-start gap-4 mt-1">
              {/* Red Vertical Bar */}
              <div
                className="hidden md:block shrink-0 self-stretch rounded-[30px]"
                style={{
                  width: "20px",
                  backgroundColor: "#D11417",
                }}
              />

              <p className={`${openSans.className} text-[17px] text-center md:text-left text-black sm:text-[18px] md:text-[20px]
                 leading-[22px] md:leading-7 md:min-w-[550px]`}>
                Through our signature Corporate Social Responsibility (CSR) initiative, &ldquo;Heartland
                <span className="text-[#D11417] font-semibold"> ♥ </span>
                 Homeland,&rdquo; we allocate a portion of our annual profits to support vital cancer-related projects in Sri Lanka.
                This initiative reinforces the deep-rooted ties between our operations in the UAE and the well-being
                of families back home.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex md:justify-end justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] h-[220px] sm:h-[240px] 
            md:h-[360px] rounded-2xl overflow-hidden">
              <Image
                src="/csr-initiative.png" 
                alt="CSR Initiative"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 420px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}