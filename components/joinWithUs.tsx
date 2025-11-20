"use client";

import React from "react";
import { Nunito, Open_Sans } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], weight: ["600"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400"] });

export default function JoinWithUs() {
  const bgPath = "/Rectangle 4585.png";

  return (
    <section
      aria-label="Join With Us"
      className="relative w-full overflow-hidden"
      style={{ height: "663px" }}
    >
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center "
        style={{
          backgroundImage: `url("${bgPath}")`,
          backgroundSize: "100%",      
          opacity: 1.3,              
        }}
      />

      <div className="absolute inset-0" />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto py-24 px-6 mt-32 text-center">
        <h2
          className={`text-[36px] leading-9 font-semibold uppercase text-white ${nunito.className}`}
        >
          JOIN WITH US
        </h2>

        <p
          className={`mt-4 text-[14px] leading-6 text-white mx-auto max-w-4xl ${openSans.className}`}
        >
          At Heartland General Trading, we believe in growing together — with our
          people, our partners, and our communities. Join a team that connects
          Sri Lankan excellence with global opportunity, promoting ethical trade,
          innovation, and sustainable growth.
        </p>

        <div className="mt-6">
          <a
            href="#careers"
            className="inline-block bg-[#E60012] hover:bg-[#C11212] transition px-6 py-3 rounded-xl text-white text-sm font-medium"
          >
            See Current Openings
          </a>
        </div>
      </div>
    </section>
  );
}
