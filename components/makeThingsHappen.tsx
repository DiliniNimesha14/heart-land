"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroBanner() {
  const chiliRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative w-full overflow-visible mt-6 sm:mt-10  sm:mb-28 md:mb-36">
      {/* Red banner */}
      <div className="bg-[#D11417] w-full">
        <div className="w-full px-4 sm:px-6 lg:px-[clamp(48px,3.43vw,89px)] py-5 sm:py-6 md:py-5 pb-8 lg:py-[clamp(20px,1.43vw,37px)]">
          <div className="max-w-full lg:max-w-[clamp(1200px,100vw,2412px)] mx-auto">
            {/* Desktop Layout (lg and above) */}
            <div className="hidden lg:block">
              <div
                className="relative flex items-center justify-center"
                style={{ minHeight: "clamp(260px, 18.57vw, 481px)" }}
              >
                {/* Left circular image */}
                <div
                  className="absolute top-1/2 -translate-y-1/2"
                  style={{
                    width: "clamp(300px, 21.43vw, 555px)",
                    height: "clamp(300px, 21.43vw, 555px)",
                    left: "clamp(40px, 2.86vw, 74px)",
                    marginLeft: "clamp(-287px, -11.07vw, -155px)",
                  }}
                >
                  <div className="w-full h-full overflow-hidden">
                    <Image
                      src="/left-circle.png"
                      alt="spices circle"
                      width={555}
                      height={555}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

                {/* Right decorative chili image */}
                <div
                  ref={chiliRef}
                  className="absolute pointer-events-none flex items-center justify-center"
                  style={{
                    width: "clamp(420px, 30vw, 777px)",
                    height: "clamp(420px, 30vw, 777px)",
                    right: "clamp(-148px, -5.71vw, -80px)",
                    top: "clamp(-222px, -8.57vw, -120px)",
                  }}
                >
                  <Image
                    src="/chili.png"
                    alt="chili splash"
                    width={685}
                    height={685}
                    className="object-contain h-auto"
                    style={{ width: "clamp(370px, 26.43vw, 685px)" }}
                  />
                </div>

                {/* Content block */}
                <div
                  className="relative z-20 flex flex-col items-start text-left text-white"
                  style={{ maxWidth: "clamp(576px, 41.14vw, 1066px)" }}
                >
                  <h1
                    className="font-nunito font-bold text-white"
                    style={{
                      fontSize: "clamp(40px, 2.86vw, 74px)",
                      lineHeight: "clamp(40px, 2.86vw, 74px)",
                    }}
                  >
                    {" "}
                    Get in Touch
                  </h1>

                  <p
                    className="text-[#FAFAFA] max-w-full font-openSans"
                    style={{
                      opacity: 1,
                      marginTop: "clamp(16px, 1.14vw, 30px)",
                      fontSize: "clamp(16px, 1.14vw, 30px)",
                      lineHeight: "clamp(24px, 1.71vw, 44px)",
                    }}
                  >
                    We&apos;d love to hear from you! Whether you have questions
                    about our products or need assistance, our team is here to
                    help. Please fill out the contact form or reach out to us
                    directly. Your feedback is important to us!
                  </p>

                  <Link href="/Contact">
                    <button
                      className="inline-flex items-center justify-center cursor-pointer rounded-full border border-white text-white font-openSans font-semibold leading-4 tracking-[0.43em] transition-all duration-300 ease-out hover:scale-110 hover:shadow-[0_12px_24px_rgba(255,255,255,0.2)] hover:-translate-y-2 hover:bg-white hover:text-[#D11417] transform-gpu uppercase"
                      style={{
                        marginTop: "clamp(24px, 1.71vw, 44px)",
                        paddingLeft: "clamp(36px, 2.57vw, 67px)",
                        paddingRight: "clamp(36px, 2.57vw, 67px)",
                        paddingTop: "clamp(8px, 0.57vw, 15px)",
                        paddingBottom: "clamp(8px, 0.57vw, 15px)",
                        fontSize: "clamp(16px, 1.14vw, 30px)",
                      }}
                    >
                      CONTACT US
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile/Tablet Layout (below lg) */}
            <div className="lg:hidden">
              <div className="relative flex items-center justify-between ">
                {/* Content block - left side */}
                <div className="relative z-20 flex flex-col items-start text-left text-white px-2 font-openSans max-w-[400px] sm:max-w-[55%] md:max-w-[70%]">
                  <h1 className="font-nunito font-bold text-[22px] sm:text-[28px] md:text-[32px] leading-[1.2] text-white mb-3 sm:mb-4">
                    Get in Touch
                  </h1>

                  <p className="font-openSans text-[14px]  leading-[1.5] sm:leading-6 text-[#FAFAFA] mb-5 sm:mb-6">
                    We&apos;d love to hear from you! Whether you have questions
                    about our products or need assistance, our team is here to
                    help. Please fill out the contact form or reach out to us
                    directly. Your feedback is important to us!
                  </p>

                  <Link href="/Contact">
                    <button className="font-openSans inline-flex items-center justify-center cursor-pointer px-6 sm:px-8 md:px-9 py-3 sm:py-3.5 md:py-2 rounded-full border-1 border-white text-white font-normal text-[15px] sm:text-[14px] md:text-[16px] leading-4 tracking-[0.3em] sm:tracking-[0.43em] transition-all duration-300 ease-out hover:scale-105 hover:bg-white hover:text-[#D11417] transform-gpu uppercase">
                      CONTACT US
                    </button>
                  </Link>
                </div>

                {/* Right decorative chili image - right side, positioned lower */}
                <div className="absolute pointer-events-none -right-[15px] sm:-right-[20px] md:-right-[30px] top-[85%] sm:top-[65%] md:top-[60%] -translate-y-1/2 w-[90px] h-[180px] sm:w-[170px] sm:h-[320px] md:w-[220px] md:h-[400px]">
                  <Image
                    src="/chili.png"
                    alt="chili splash"
                    width={90}
                    height={180}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
