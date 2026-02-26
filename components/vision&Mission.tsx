"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function VisionMission() {
  const visionRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const [visionVisible, setVisionVisible] = useState(false);
  const [missionVisible, setMissionVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (visionRef.current) {
        const visionRect = visionRef.current.getBoundingClientRect();
        const visionInView =
          visionRect.top < window.innerHeight * 0.8 && visionRect.bottom > 0;
        if (visionInView && !visionVisible) setVisionVisible(true);
      }

      if (missionRef.current) {
        const missionRect = missionRef.current.getBoundingClientRect();
        const missionInView =
          missionRect.top < window.innerHeight * 0.8 && missionRect.bottom > 0;
        if (missionInView && !missionVisible) setMissionVisible(true);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visionVisible, missionVisible]);

  return (
    <section className="pt-0 pb-12 sm:py-16 md:py-24 lg:py-36 bg-white">
      {/* Image - Mobile Only */}
      <div className="md:hidden mt-2 mb-10">
        <Image
          src="/Group 1171275026.png"
          alt="Vision Mission Icon"
          width={400}
          height={300}
          className="w-full h-auto"
        />
      </div>

      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 font-nunito">
        {/* Evolution paragraph */}
        <p
          id="evolution-section"
          className="text-center text-[#676767] text-[12px] sm:text-md md:text-[16px] lg:text-lg xl:text-[20px] leading-relaxed max-w-5xl xl:max-w-6xl mx-auto mb-15 md:mb-20 scroll-mt-20"
        >
          Our Evolution: From Local Roots to Global Trading. While we began as a
          trusted local distributor, Heartland’s vision has always been global.
          In 2013, Heartland General Trading expanded its horizons by launching
          our international commodity trading arm. By leveraging the UAE’s
          strategic central location, we facilitate the seamless transport of
          high-value agrifood products across global borders.
          <br />
          <br />
          With specialized expertise in Frozen and Chilled Seafood, Red Meat,
          Poultry, Pulses, and Grains, we have built a reliable supply network
          spanning Asia and the Middle East. We source only the finest products
          from across Europe, Australia, the Americas, and Asia, ensuring
          Heartland remains a trusted link in the global food supply chain.
        </p>

        {/* Heading + Identity */}
        <div className="text-center space-y-4 md:space-y-6 lg:space-y-8 leading-6 md:leading-8 lg:leading-10 mb-8 md:mb-12 lg:mb-16 mx-auto">
          <h2 className="text-[18px] sm:text-2xl md:text-4xl lg:text-[52px] xl:text-[58px] 2xl:text-[64px] font-semibold text-gray-900 transition-transform duration-500 hover:scale-[1.02] px-4 mb-10">
            Our Identity Vision and Mission
          </h2>

          <p className="
  mt-4 font-medium
  text-[14px] sm:text-lg md:text-xl lg:text-[22px] xl:text-[24px]
  max-w-2xl md:max-w-6xl xl:max-w-7xl mx-auto
  leading-[1.7] sm:leading-relaxed
  px-6 sm:px-4
  text-justify sm:text-center
  mb-12 md:mb-20
">
  We are dedicated to redefining the way Sri Lankan food products
  reach international markets. With a focus on quality, authenticity,
  and trust, we aim to represent the rich heritage of Sri Lankan
  flavors through modern, reliable distribution and sustainable
  partnerships.
</p>
        </div>

        {/* Cards */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12 max-w-4xl lg:max-w-5xl xl:max-w-6xl md:mx-auto">
          {/* Card 1 - Vision */}
          <div
            ref={visionRef}
            className="relative transition-transform duration-700 ease-out will-change-transform md:max-w-3xl lg:max-w-4xl xl:max-w-5xl"
          >
            <div className="absolute right-4 sm:-right-8 md:-right-8 lg:-right-9 xl:-right-10 top-1/2 -translate-y-1/2 bg-[#D11417] rounded-full hidden md:block md:w-5 md:h-[200px] lg:h-60 xl:h-[260px]" />

            {/* Mobile Layout */}
            <div className="md:hidden flex items-center gap-4 -mr-8">
              <h3
                className={`text-[36px] font-bold shrink-0 mx-5 leading-[42px] transition-all duration-700 ${
                  visionVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{ fontFamily: "Open Sans" }}
              >
                Our <br />
                Vision
              </h3>
              <div
                className={`bg-[#B10003] rounded-l-2xl pl-5 pr-4 py-5 flex-1 shadow-sm transition-all duration-700 ${
                  visionVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0"
                }`}
              >
                <p
                  className="text-[12px] text-white leading-relaxed italic"
                  style={{ fontFamily: "Nunito" }}
                >
                  To be the premier link between Sri Lankan culture and the UAE,
                  enhancing lives through authentic food products that celebrate
                  our rich heritage and strengthen community ties.
                </p>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:block bg-[#EBEBEB] rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 pl-6 sm:pl-8 md:pl-12 lg:pl-20 xl:pl-24 pr-4 sm:pr-6 lg:pr-8 shadow-sm hover:scale-[1.01] hover:shadow-lg transition-all duration-500">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-semibold text-[#D11417] mb-2 lg:mb-3">
                Our Vision
              </h3>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[26px] leading-relaxed">
                To be the premier link between Sri Lankan culture and the UAE,
                enhancing lives through authentic food products that celebrate
                our rich heritage and strengthen community ties.
              </p>
            </div>
          </div>

          {/* Card 2 - Mission */}
          <div
            ref={missionRef}
            className="relative transition-transform duration-700 ease-out will-change-transform md:max-w-3xl lg:max-w-4xl xl:max-w-5xl md:ml-auto"
          >
            <div className="absolute -left-2 sm:-left-8 md:-left-8 lg:-left-9 xl:-left-10 top-1/2 -translate-y-1/2 bg-[#D11417] rounded-full hidden md:block md:w-5 md:h-[300px] lg:h-[340px] xl:h-[360px]" />

            {/* Mobile Layout */}
            <div className="md:hidden flex items-center gap-4 -ml-8">
              <div
                className={`bg-[#B10003] rounded-r-2xl pl-4 pr-5 py-5 flex-1 shadow-sm transition-all duration-700 ${
                  missionVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0"
                }`}
              >
                <p
                  className="text-[12px] text-white leading-relaxed italic text-right"
                  style={{ fontFamily: "Nunito" }}
                >
                  Heartland General Trading is dedicated to providing
                  high-quality Sri Lankan food products that bring the essence
                  of home to every household. Our commitment to supporting local
                  farmers and entrepreneurs ensures sustainability and
                  authenticity in our offerings. We strive to enhance the
                  well-being of our community through meaningful initiatives and
                  partnerships.
                </p>
              </div>

              <h3
                className={`text-[36px] font-bold text-right shrink-0 mx-5 leading-[42px] transition-all duration-700 ${
                  missionVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{ fontFamily: "Open Sans" }}
              >
                Our <br />
                Mission
              </h3>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:block bg-[#EBEBEB] rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 pl-4 sm:pl-6 lg:pl-8 pr-6 sm:pr-8 md:pr-12 lg:pr-20 xl:pr-24 shadow-sm hover:scale-[1.01] hover:shadow-lg transition-all duration-500">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-semibold text-[#D11417] mb-2 lg:mb-3 text-right">
                Our Mission
              </h3>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[26px] leading-relaxed text-right">
                Heartland General Trading is dedicated to providing high-quality
                Sri Lankan food products that bring the essence of home to every
                household. Our commitment to supporting local farmers and
                entrepreneurs ensures sustainability and authenticity in our
                offerings. We strive to enhance the well-being of our community
                through meaningful initiatives and partnerships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
