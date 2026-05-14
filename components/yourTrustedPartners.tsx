"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import PartnersMarquee from "@/components/PartnersMarquee";

export default function Partners() {
  const slowRef = React.useRef<HTMLDivElement>(null);
  const mediumRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let raf = 0;

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;

        if (slowRef.current) {
          slowRef.current.style.transform = `translate3d(0, ${y * 0.04}px, 0)`;
        }

        if (mediumRef.current) {
          mediumRef.current.style.transform = `translate3d(0, ${y * 0.08}px, 0)`;
        }
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section className="py-10 md:py-20 bg-white overflow-x-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="mx-auto w-full max-w-[1440px] 2xl:max-w-[1700px] 3xl:max-w-[1900px] px-6 lg:px-12">
          {/* Full-width Gradient Section */}
          <div className="py-12">
            <h2 className="text-center text-2xl sm:text-3xl md:text-[40px] font-nunito font-bold text-black mb-10">
              Our Trusted Partners
            </h2>

            <div className="w-full">
              <PartnersMarquee />
            </div>
          </div>

          {/* About Section   */}
          <div className="mx-auto mb-0 mt-1 md:mt-6 px-1 md:px-8 lg:px-0 text-center lg:text-left font-openSans">
            <p className="text-[#6D7D7D] text-[16px] lg:text-[16px] tracking-[0.4rem] uppercase mt-1 md:mt-6 lg:mt-8 mb-6 md:mb-0">
              About
            </p>

            <h3 className="text-[16px] sm:text-[26px] md:text-[32px] lg:text-[40px] font-nunito font-bold text-black leading-normal mb-4 lg:mb-5 tracking-wide">
              Your Trusted Partner in Sri Lankan Food Distribution
            </h3>

            <p className="block lg:hidden text-center text-[12px] mt-1 mb-6 leading-relaxed w-full mx-auto text-[#6A6969]">
              <span className="font-bold">
                Heartland General Trading Co. LLC
              </span>{" "}
              is a leading importer and distributor of premium Sri Lankan food
              products in the UAE. Based in Dubai, we connect authentic Sri
              Lankan flavors with global markets through trusted partnerships
              and modern logistics.
            </p>

            <p className="hidden lg:block lg:text-left md:text-lg lg:text-xl mt-1 mb-6 lg:mb-6 leading-relaxed -tracking-normal max-w-6xl lg:mx-0">
              <span className="font-openSans lg:font-normal">
                At Heartland General Trading, every product in our growing range
                is a testament to our dedication to authenticity and flavor. We
                invite you to explore the essence of Sri Lanka with us.
              </span>
            </p>

            {/* Read More button - Mobile only */}
            <div className="flex justify-center lg:hidden mt-8 mb-10">
              <Link href="/About">
                <button
                  type="button"
                  className="bg-[#D11417] text-white cursor-pointer px-6 py-2 rounded-full font-semibold border-2 border-[#D11417] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg hover:-translate-y-1 transform-gpu hover:bg-white hover:text-[#D11417]"
                >
                  Read More
                </button>
              </Link>
            </div>

            {/* Stats section - Mobile */}
            <div className="flex lg:hidden justify-center gap-8 sm:gap-12 md:gap-14 px-4 sm:px-8 mb-2">
              {/* 15+ Years Expertise */}
              <div className="text-center flex-1">
                <h4 className="font-nunito font-semibold text-[25px] sm:text-[40px] leading-tight text-black mb-2">
                  25
                </h4>
                <p className="font-normal text-[12px] sm:text-[10px] leading-tight uppercase text-black tracking-[0.4em] whitespace-nowrap">
                  YEARS
                </p>
                <p className="font-normal text-[12px] sm:text-[10px] leading-tight uppercase text-black tracking-[0.4em] whitespace-nowrap">
                  EXPERTISE
                </p>
              </div>

              {/* 30+ Partner Brands */}
              <div className="text-center flex-1">
                <h4 className="font-nunito font-semibold text-[25px] sm:text-[40px] leading-tight text-black mb-2">
                  30+
                </h4>
                <p className="font-normal text-[12px] sm:text-[10px] leading-tight uppercase text-black tracking-[0.4em] whitespace-nowrap">
                  PARTNER
                </p>
                <p className="font-normal text-[12px] sm:text-[10px] leading-tight uppercase text-black tracking-[0.4em] whitespace-nowrap">
                  BRANDS
                </p>
              </div>

              {/* 1000+ Happy Clients */}
              <div className="text-center flex-1">
                <h4 className="font-nunito font-semibold text-[25px] sm:text-[40px] leading-tight text-black mb-2">
                  1000+
                </h4>
                <p className="font-normal text-[12px] sm:text-[10px] leading-tight uppercase text-black tracking-[0.4em] whitespace-nowrap">
                  HAPPY
                </p>
                <p className="font-normal text-[12px] sm:text-[10px] leading-tight uppercase text-black tracking-[0.4em] whitespace-nowrap">
                  CLIENTS
                </p>
              </div>
            </div>
          </div>

          {/* Two-column section - Desktop only */}
          <div className="relative hidden lg:block">
            <div className="relative min-h-[620px] xl:min-h-[700px] 2xl:min-h-[760px]">
              {/* Left: image group */}
              <div
                ref={slowRef}
                className="relative flex flex-nowrap gap-5 justify-start"
                style={{ willChange: "transform" }}
              >
                {/* Market image */}
                <div className="w-[230px] h-[420px] overflow-hidden">
                  <Image
                    src="/market.png"
                    alt="Food market"
                    width={243}
                    height={442}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Rice image */}
                <div className="w-[230px] h-[420px] overflow-hidden">
                  <Image
                    src="/Rice.png"
                    alt="Rice"
                    width={241}
                    height={442}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Spices image */}
                <div className="w-[230px] h-[270px] overflow-hidden rounded-tr-[50px]">
                  <Image
                    src="/Spices.png"
                    alt="Spices"
                    width={243}
                    height={290}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right: Read More button - Desktop */}
              <div
                className="absolute"
                style={{
                  top: "clamp(140px, 18vw, 190px)",
                  right: "clamp(120px, 15vw, 280px)",
                }}
              >
                <Link href="/About">
                  <button
                    type="button"
                    className="bg-[#D11417] text-white cursor-pointer px-9 py-4 rounded-full font-semibold border-2 border-[#D11417] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg hover:-translate-y-1 transform-gpu hover:bg-white hover:text-[#D11417]"
                  >
                    Read More
                  </button>
                </Link>
              </div>

              {/* Stats section - Desktop */}
              <div
                className="absolute w-full lg:max-w-[750px] flex justify-end gap-28 px-10"
                style={{
                  top: "clamp(240px, 32vw, 380px)",
                  right: "clamp(60px, 6vw, 120px)", // ← moved left
                }}
              >
                {/* 25 Years Expertise */}
                <div className="text-left">
                  <h4 className="font-nunito font-normal text-[36px] leading-none text-[#6D7D7D]">
                    25+
                  </h4>
                  <div className="mt-4 space-y-1">
                    <p className="text-[11px] uppercase tracking-[0.45em] text-black/70">
                      Years
                    </p>
                    <p className="text-[11px] uppercase tracking-[0.45em] text-black/70">
                      Expertise
                    </p>
                  </div>
                </div>

                {/* 30+ Partner Brands */}
                <div className="text-left">
                  <h4 className="font-nunito font-normal text-[36px] leading-none text-[#6D7D7D]">
                    30+
                  </h4>
                  <div className="mt-4 space-y-1">
                    <p className="text-[11px] uppercase tracking-[0.45em] text-black/70">
                      Partner
                    </p>
                    <p className="text-[11px] uppercase tracking-[0.45em] text-black/70">
                      Brands
                    </p>
                  </div>
                </div>

                {/* 1000+ Happy Clients */}
                <div className="text-left">
                  <h4 className="font-nunito font-normal text-[36px] leading-none text-[#6D7D7D]">
                    1000+
                  </h4>
                  <div className="mt-4 space-y-1">
                    <p className="text-[11px] uppercase tracking-[0.45em] text-black/70">
                      Happy
                    </p>
                    <p className="text-[11px] uppercase tracking-[0.45em] text-black/70">
                      Clients
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className="mt-12" />
      </div>
    </section>
  );
}
