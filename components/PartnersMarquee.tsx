"use client";

import Image from "next/image";

const logos = [
  { src: "/logo1.png", alt: "Kottu Mee" },
  { src: "/logo2.png", alt: "Elephant House" },
  { src: "/logo3.png", alt: "Maliban" }, 
   { src: "/logo1.png", alt: "Kottu Mee" },
  { src: "/logo2.png", alt: "Elephant House" },
  { src: "/logo3.png", alt: "Maliban" },
];
export default function PartnersMarquee() {
  const loop = [...logos, ...logos]; // duplicate once = seamless with -50%

  return (
    <div className="partners-marquee">
      <div className="partners-track">
        {loop.map((logo, i) => (
          <div key={i} className="partners-item">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={250}
              height={120}
              className="partners-logo"
              priority={i < logos.length}
            />
          </div>
        ))}
      </div>
    </div>
  );
}