"use client";
import React from "react";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="relative w-full overflow-visible mt-10 mb-36">
        
      {/* Red banner */}
      <div className="bg-[#D11417] w-full">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="relative flex items-center justify-center h-[300px] md:h-[220px] lg:h-[260px]">
            {/* Left circular image (cropped) */}
            <div
              className="hidden md:block absolute left-10 top-[90px] -translate-y-1/2"
              style={{ width: 220, height: 220, marginLeft: -110 }}
            >
              <div className="w-[300px] h-[300px] overflow-hidden">
                <Image
                  src="/left-circle.png"
                  alt="spices circle"
                  width={300}
                  height={300}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right decorative image */}
            <div
              className="absolute right-0 top-0 -translate-y-1/2 pointer-events-none"
              style={{ width: 370, height: 370, marginRight: -60 }}
            >
              <Image
                src="/chili.png"
                alt="chili splash"
                width={370}
                height={370}
                className="object-contain"
              />
            </div>

            {/* Content block */}
            <div className="relative z-20 ml-20 flex flex-col items-start text-left text-white px-6">
              {/* Heading */}
              <h1
                className="font-openSans font-bold text-[40px] leading-10 text-white"
                style={{ maxWidth: 800 }}
              >
                Let’s make things happen
              </h1>

              {/* Paragraph */}
              <p
                className="mt-4 text-[16px] leading-6 text-[#FAFAFA] max-w-[550px]"
                style={{ opacity: 1 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              {/* CTA */}
              <button
                className="mt-6 inline-flex items-center justify-center px-9 py-2 rounded-full border border-white text-white font-openSans font-semibold text-[16px] leading-4 tracking-[0.43em] transition-colors duration-200"
                style={{ textTransform: "uppercase" }}
              >
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </div>
 
    </section>
  );
}
