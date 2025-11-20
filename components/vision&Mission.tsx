"use client";
import React, { useEffect, useRef } from "react";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });

export default function VisionMission() {
  const visionRef = useRef(null);
  const missionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // You can implement parallax here if needed
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-10 bg-white">
      <div>
        {/* Heading */}
        <div className={`text-center space-y-12 leading-8 mb-20 mx-auto ${nunito.className}`}>
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900 transition-transform duration-500 hover:scale-[1.02]">
            Our Identity Vision and Mission
          </h2>

          <p className="mt-4 font-medium md:text-xl text-black max-w-4xl mx-auto leading-relaxed">
            We are dedicated to redefining the way Sri Lankan food products reach
            international markets. With a focus on quality, authenticity, and
            trust, we aim to represent the rich heritage of Sri Lankan flavors
            through modern, reliable distribution and sustainable partnerships.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-12 max-w-4xl mx-auto">

          {/* Card 1 */}
          <div
            ref={visionRef}
            className="relative transition-transform duration-700 ease-out will-change-transform"
          >
            {/* Accent Bar */}
            <div
              className="absolute right-24 top-1/2 -translate-y-1/2 bg-[#D11417] rounded-full"
              style={{ width: 20, height: 180 }}
            />

            {/* Card */}
            <div className="bg-[#EBEBEB] rounded-2xl p-6 w-3xl md:p-8 pl-12 md:pl-20 shadow-sm hover:scale-[1.01] hover:shadow-lg transition-all duration-500">
              <h3 className="text-3xl font-semibold text-[#D11417] mb-2">
                Our Vision
              </h3>

              <p className="text-xl text-black leading-relaxed">
                To deliver high-quality local food products from Sri Lanka to the United Arab Emirates through reliable and efficient distribution.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            ref={missionRef}
            className="relative md:ml-24 transition-transform duration-700 ease-out will-change-transform"
          >
            {/* Accent Bar */}
            <div
              className="absolute -left-9 top-1/2 -translate-y-1/2 bg-[#D11417] rounded-full"
              style={{ width: 20, height: 180 }}
            />

            {/* Card */}
            <div className="bg-[#EBEBEB] rounded-2xl w-3xl p-6 md:p-8 pl-12 md:pl-8 md:pr-17 shadow-sm hover:scale-[1.01] hover:shadow-lg transition-all duration-500">
              <h3 className="text-3xl font-semibold text-[#D11417] mb-2 text-right">
                Our Mission
              </h3>

              <p className="text-xl text-black leading-relaxed text-right">
                To be the leading supplier of diverse and niche local food products from Sri Lanka in the United Arab Emirates.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
