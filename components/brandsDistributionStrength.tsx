"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function BrandsDistributionStrength() {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // subtle movement values
  const cardY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const imageY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20 xl:py-24">
      <div className="w-full mx-auto px-4 sm:px-6 md:px-10 lg:px-[100px] xl:px-[120px] 2xl:px-[160px]">
        {/* Heading */}
        <div className="text-center">
          <h2
            className="font-nunito text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[42px] 2xl:text-[48px] font-bold text-black"
          >
            Our Brands & Distribution Strength
          </h2>

          <p
            className="font-openSans mt-3 md:mt-4 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] leading-5 md:leading-[22px] lg:leading-[26px] xl:leading-[30px] text-black max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto"
          >
            Beyond our distribution services, Heartland is the proud home of
            Kelani Lanka, a brand synonymous with premium quality and authentic
            Sri Lankan taste. While Heartland manages the logistics, Kelani
            Lanka represents our commitment to excellence in every household.
          </p>
        </div>

        {/* Card */}
        <motion.div
          ref={cardRef}
          style={{ y: cardY }}
          className="mt-8 lg:mt-10 xl:mt-12 bg-white rounded-2xl lg:rounded-3xl border border-[#EAEAEA] shadow-sm p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-14"
        >
          <h3
            className="font-openSans text-[13px] sm:text-[14px] md:text-[15px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-bold text-black"
          >
            Sole Distributor for Sri Lanka’s Most Iconic Global Brands
          </h3>

          <p
            className="font-openSans mt-1 lg:mt-2 text-[10px] sm:text-[10px] md:text-[12px] lg:text-[12px] xl:text-[14px] 2xl:text-[18px] text-black"
          >
            Furthermore, our strength as a market leader is cemented by our role
            as the Sole Distributor for:
          </p>

          {/* Pills */}
          <div className="mt-5 lg:mt-8 xl:mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-28 lg:gap-32 xl:gap-40">
            {/* Pill 1 */}
            <div className="flex items-center gap-3 lg:gap-4 rounded-[25px] lg:rounded-[35px] border border-[#D0D0D0] px-1 lg:px-2 xl:px-3 py-2 lg:py-3 xl:py-3 w-full sm:w-[280px] lg:w-[320px] xl:w-[360px] 2xl:w-[400px]">
              <div className="w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded-full bg-[#D11417] flex items-center justify-center shrink-0">
                <Icon
                  icon="streamline-ultimate-color:award-trophy-1"
                  width={30}
                  height={30}
                />
              </div>
              <div className="min-w-0">
                <p
                  className="font-openSans text-[13px] mb-3 lg:text-[15px] xl:text-[17px] 2xl:text-[18px] font-bold text-black leading-tight"
                >
                  Maliban
                </p>
                <p
                  className="font-openSans text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[15px] text-black leading-tight"
                >
                  The taste of Sri Lankan heritage.
                </p>
              </div>
            </div>

            {/* Pill 2 */}
            <div className="flex items-center gap-3 lg:gap-4 rounded-[25px] lg:rounded-[35px] border border-[#D0D0D0] px-1 lg:px-2 xl:px-3 py-2 lg:py-3 xl:py-3 w-full sm:w-[300px] lg:w-[340px] xl:w-[380px] 2xl:w-[420px]">
              <div className="w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded-full bg-[#D11417] flex items-center justify-center shrink-0">
                <Icon
                  icon="streamline-ultimate-color:award-trophy-1"
                  width={30}
                  height={30}
                />
              </div>
              <div className="min-w-0">
                <p
                  className="font-openSans text-[13px] mb-3 lg:text-[15px] xl:text-[17px] 2xl:text-[18px] font-bold text-black leading-tight"
                >
                  Prima Kottumee
                </p>
                <p
                  className="font-openSans text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[15px] text-black leading-tight"
                >
                  The island&apos;s favorite instant indulgence.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <motion.div
            style={{ y: imageY }}
            className="mt-8 lg:mt-15 xl:mt-20 rounded-2xl lg:rounded-3xl overflow-hidden w-full h-40 sm:h-[140px] md:h-[180px] lg:h-[200px] xl:h-[220px] 2xl:h-[250px] relative"
          >
            <Image
              src="/distribution-yard.png"
              alt="Distribution strength"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, (max-width: 1536px) 70vw, 1400px"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
