"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Open_Sans } from "next/font/google";
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans" });


export default function CommunitySection() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * 0.15);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
<section className={`w-full flex justify-center py-20 bg-white ${openSans.className}`}>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* IMAGE */}
        <Image
  src="/unsplash.png"
  alt="Community"
  width={700}         
  height={600}
  className="max-w-[1500px] w-auto h-auto rounded-r-[70px] transition-transform duration-300"
/>



        {/* TEXT */}
        <div className="ml-24">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4 ">
            Be part of our community
          </h2>

          <p className="text-[20px] text-[#000000] font-semibold leading-7  ">
            We love what we do and we do it with passion.<br />
            We value the experimentation of the message <br />and smart incentives.
          </p>

          <button
            className="mt-6 px-8 py-3 text-[18px] font-semibold border-2 border-[#E60012] text-[#E60012] rounded-2xl
            transition-all hover:bg-[#E60012] hover:text-white hover:shadow-lg"
          >
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  );
}
