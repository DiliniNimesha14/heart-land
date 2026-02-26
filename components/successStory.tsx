"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type ScrollableDescriptionProps = {
  description: string;
  textSize?: string;
};

function ScrollableDescription({
  description,
  textSize = "text-sm",
}: ScrollableDescriptionProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const [isScrollable, setIsScrollable] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  const checkScrollable = useCallback(() => {
    const el = containerRef.current;
    if (el) {
      const scrollable = el.scrollHeight > el.clientHeight;
      setIsScrollable(scrollable);
      if (!scrollable) setIsAtBottom(false);
    }
  }, []);

  const handleScroll = () => {
    const el = containerRef.current;
    if (el) {
      const atBottom =
        Math.abs(el.scrollHeight - el.clientHeight - el.scrollTop) < 5;
      setIsAtBottom(atBottom);
    }
  };

  const scrollToPosition = () => {
    const el = containerRef.current;
    if (el) {
      if (isAtBottom) {
        el.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    checkScrollable();
    window.addEventListener("resize", checkScrollable);
    return () => window.removeEventListener("resize", checkScrollable);
  }, [checkScrollable, description]);

  return (
    <div className="relative flex-1 min-h-0">
      <p
        ref={containerRef}
        onScroll={handleScroll}
        className={`font-openSans ${textSize} leading-[160%] text-[#666666] overflow-y-auto h-full pr-1 ${isScrollable ? "pb-8" : ""}`}
      >
        {description}
      </p>
      {isScrollable && (
        <div
          onClick={scrollToPosition}
          className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white via-white/80 to-transparent flex items-end justify-center pb-1 cursor-pointer"
        >
          <svg
            className={`w-4 h-4 text-[#999999] transition-transform duration-300 ${isAtBottom ? "" : "animate-bounce"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{
              transform: isAtBottom ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

type Card = {
  image: string;
  date: string;
  title: string;
  description: string;
};

const cards: Card[] = [
  {
    image: "/Frame 61 (2).png",
    date: "Aug 10, 2025",
    title: "Supporting Sri Lanka with Compassion and Purpose",
    description:
      "At Heartland General Trading, our mission goes far beyond distributing authentic Sri Lankan flavors; it is rooted in a deep commitment to making a lasting impact on the lives of our people. We are proud to introduce our dedicated CSR initiative, ‘Heartland ♥ Homeland,’ a long-term pledge to support the fight against cancer in Sri Lanka. Business with a Soul As a core part of this initiative, Heartland allocates a percentage of our annual profits to support vital cancer-related projects and treatment facilities across the island. We view this not as a one-time gesture, but as a serious, sustained responsibility to our homeland.",
  },
  {
    image: "/Frame 61 (3).png",
    date: "Aug 10, 2025",
    title: "Empowering Smallholders, Cultivating Growth",
    description:
      "As a leading distributor of Sri Lankan food products in the UAE, we recognize the vital role that small and medium-scale entrepreneurs play in preserving the rich culinary heritage of our homeland . That's why we've made it our mission to assist these dedicated farmers by facilitating the marketing of their products in Dubai.",
  },
  {
    image: "/Frame 62.png",
    date: "Aug 10, 2025",
    title: "Women Leading the Way in Food Enterprise",
    description:
      "At Heartland General Trading, we celebrate the incredible contributions of women in the food industry, particularly those who are redefining the landscape of food enterprises in Sri Lanka. From farmers to entrepreneurs, women are taking the lead, fostering innovation and resilience while preserving the rich culinary traditions of our homeland.",
  },
  {
    image: "/Frame 63.png",
    date: "Aug 10, 2025",
    title: "A Leader in Quality and Authenticity",
    description:
      "Heartland General Trading has been a pioneer in the distribution of Sri Lankan food products since its establishment. With over 2 decades of experience, we have built a strong reputation for quality and authenticity, ensuring that every product reflects the rich culinary heritage of Sri Lanka. Our extensive network of suppliers and partnerships with local farmers allow us to source the highest quality ingredients. This commitment to excellence has made us the trusted choice for customers seeking genuine Sri Lankan flavors.",
  },
];

export default function BlogsSuccessStory() {
  const router = useRouter();

  return (
    <section id="SuccessStory" className="w-full max-w-[1440px] flex flex-col gap-6 py-8 px-4 md:py-[40px] md:px-[60px] mx-auto pb-8 md:pb-10 mb-8 md:mb-10">
      {/* Heading */}
      <header className="w-full flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-2">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2.5">
            <span className="font-openSans text-[12px] md:text-lg text-[#666666] tracking-wide">
              Change Begins with a Voice
            </span>
            <span className="hidden md:block w-[100px] h-[1px] bg-[#999999]" />
          </div>
          <h2 className="font-nunito font-semibold text-[24px] md:text-[30px] text-black leading-tight">
            Inspiring Voices, Real Change
          </h2>
        </div>
      </header>

      {/* Cards Container */}
      <div className="relative">
        {/* Mobile */}
        <div className="flex md:hidden flex-col items-center gap-6 w-full py-4">
          {cards.map((card, index) => (
            <article
              key={index}
              className="w-full max-w-[306px] h-[585px] rounded-[30px] bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.08)] overflow-hidden pb-[30px]"
            >
              {/* Image */}
              <div className="relative h-[224px] overflow-hidden rounded-t-[24px]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => router.push("/")}
                  className="absolute top-3 right-3 w-12 h-12 rounded-full bg-[#C4161C] cursor-pointer flex items-center justify-center"
                  aria-label="Read more"
                >
                  <Image src="/whiteArrow.png" alt="" width={50} height={50} />
                </button>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col h-[calc(100%-224px)]">
                <div className="flex items-center gap-2 mb-3">
                  {/* <Image src="/building.png" alt="" width={16} height={16} /> */}
                  {/* <span className="font-openSans text-xs text-[#999999]">
                    {card.date}
                  </span> */}
                </div>
                <h3 className="font-nunito font-bold text-lg mb-2 text-black leading-tight">
                  {card.title}
                </h3>
                <ScrollableDescription
                  description={card.description}
                  textSize="text-sm"
                />
              </div>
            </article>
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-6 pb-8">
          {cards.map((card, index) => (
            <article
              key={index}
              className="h-[585px] lg:h-[620px] xl:h-[660px] 2xl:h-[700px] rounded-[30px] bg-white shadow-[0px_4px_30px_rgba(0,0,0,0.08)] overflow-hidden pb-[30px] transition-shadow duration-200 hover:shadow-[0px_8px_30px_rgba(0,0,0,0.12)]"
            >
              {/* Image */}
              <div className="relative h-[224px] overflow-hidden rounded-t-[24px]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => router.push("/")}
                  className="absolute top-3 right-3 w-12 h-12 rounded-full bg-[#C4161C] cursor-pointer flex items-center justify-center hover:bg-[#A01217] transition-colors"
                  aria-label="Read more"
                >
                  <Image src="/whiteArrow.png" alt="" width={50} height={50} />
                </button>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col h-[calc(100%-224px)]">
                <div className="flex items-center gap-2 mb-3">
                  {/* <Image src="/building.png" alt="" width={16} height={16} /> */}
                  {/* <span className="font-openSans text-xs text-[#999999]">
                    {card.date}
                  </span> */}
                </div>
                <h3 className="font-nunito font-bold text-xl mb-2 text-black leading-tight">
                  {card.title}
                </h3>
                <ScrollableDescription
                  description={card.description}
                  textSize="text-[14px] leading-[10px]"
                />
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Hide scrollbar CSS */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
