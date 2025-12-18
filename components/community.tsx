"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Open_Sans, Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "600", "700"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function CommunitySection() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * 0.15);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`w-full   flex justify-center py-20 bg-white ${openSans.className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-36 items-center -mt-10 md:-mt-30">

 <div className="relative w-[800px]  h-[300px] md:h-[450px] lg:h-[400px]  overflow-hidden">
          
     <Image
  src="/community-hero.png"
  alt="Community"
  width={1200}
  height={800}
  className="w-full max-w-full h-full rounded-r-[200px] object-cover"
/>
</div>



        {/* TEXT */}
        <div className="md:ml-24 ml-4">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Be part of our community
          </h2>

          <p className="text-[20px] text-[#000000] font-semibold leading-7">
            We love what we do and we do it with passion.<br />
            We value the experimentation of the message <br />
            and smart incentives.
          </p>

           <Link href="/About"> 
          <button
            className={`${nunito.className} cursor-pointer mt-6 px-8 py-3 text-[19px] font-bold border-2 border-[#E60012] 
            text-[#E60012] rounded-2xl transition-all duration-300 ease-out hover:bg-[#E60012] hover:text-white hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1`}
          >
            Partner With Us
          </button></Link>
        </div>
      </div>
    </section>
  );
}  