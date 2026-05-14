"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HaveQ() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallax = (multiplier: number) => scrollY * multiplier;

  const sectionClass =
    "relative w-full h-[260px] md:mb-50 md:h-[303px] flex flex-col justify-center bg-[#000000] text-white overflow-hidden md:rounded-tr-[50px] font-openSans";

  return (
    <section suppressHydrationWarning className={sectionClass}>
      {/* TEXT */}
      <div className="relative z-10 text-start md:text-left px-5 md:px-0">
        <h2 className="text-[20px] md:text-[40px] md:ml-52 font-nunito font-bold">
          Still have questions ?
        </h2>

        <p className="text-[12px] md:text-[16px] max-w-xl md:max-w-[560px] md:ml-52 mt-3 opacity-90">
          We’re here to help. Reach out anytime and our team will get back to
          you as soon as possible.
        </p>
      </div>

      {/* CTA */}
      <div className="flex justify-start px-5 md:px-0">
        <Link href="/Contact">
          <button
            className="
              mt-6 inline-flex items-center justify-center
              px-8 md:px-12 py-2
              rounded-full border-1 border-white
              text-white   text-[13px] md:text-[15px]
              tracking-[0.35em] md:tracking-[0.43em]
              transition-all duration-300
              hover:scale-[1.02] hover:bg-white hover:text-black
              md:ml-52
            "
            style={{ textTransform: "uppercase" }}
          >
            CONTACT US
          </button>
        </Link>
      </div>

      {/* PARALLAX IMAGE */}
      <div
        className="
    absolute
    right-4 md:right-28
    top-[65%] md:top-1/2
    pointer-events-none
    w-30 h-25 md:w-[220px] md:h-[220px]
  "
        style={{
          transform: `translateY(calc(-80% + ${parallax(0.05)}px))`,
        }}
      >
        <Image
          src="/questionPerson.png"
          alt="question person"
          width={150}
          height={150}
          className="object-contain w-full h-full"
        />
      </div>
    </section>
  );
}
