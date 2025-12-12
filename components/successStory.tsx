// app/components/BlogsSuccessStory.tsx
"use client";

import { useRef } from "react";
import Image from "next/image";
import { Open_Sans, Nunito } from "next/font/google";
import { useRouter } from "next/navigation";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-open-sans",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-nunito",
});

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
    title: "Seeds of Change: Farmers Growing Beyond Boundaries",
    description:
      "Discover how smallholder farmers in Sri Lanka are transforming their livelihoods through Heartland’s sustainable agriculture training and fair-trade partnerships. These stories showcase resilience, innovation, and pride in every harvest.",
  },
  {
    image: "/Frame 61 (3).png",
    date: "Aug 10, 2025",
    title: "Women Leading the Way in Food Enterprise",
    description:
      "Meet the women redefining Sri Lanka’s food industry — from homegrown spice producers to export-ready entrepreneurs. Heartland’s mentoring and micro-support programs are helping them achieve financial independence and global recognition.",
  },
  {
    image: "/Frame 62.png",
    date: "Aug 10, 2025",
    title: "From Local Fields to Global Shelves",
    description:
      "Follow the journey of Sri Lankan produce as it reaches international markets through ethical sourcing and transparent trade practices. Heartland’s supply chain connects community farmers directly with UAE consumers, ensuring fairness at every step.",
  },
  {
    image: "/Frame 63.png",
    date: "Aug 10, 2025",
    title: "Sustainability in Action: Protecting Tomorrow’s Resources",
    description:
      "Learn how Heartland is introducing eco-friendly packaging, water conservation systems, and waste-free logistics to make food exports more sustainable for future generations.",
  },
];

export default function BlogsSuccessStory() {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // width of one card + gap between cards (keep in sync with CSS below)
  const CARD_WIDTH = 280; // card width
  const GAP = 30; // gap between cards
  const CARD_STEP = CARD_WIDTH + GAP; // amount to scroll per click

  const scrollLeft = () => {
    const el = scrollRef.current;
    if (!el) return;
    const target = Math.max(0, el.scrollLeft - CARD_STEP);
    el.scrollTo({ left: target, behavior: "smooth" });
  };

  const scrollRight = () => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const target = Math.min(maxScroll, el.scrollLeft + CARD_STEP);
    el.scrollTo({ left: target, behavior: "smooth" });
  };

  return (
    <section
      className={`${openSans.variable} ${nunito.variable}`}
      style={{
        width: "100%",
        maxWidth: "1317px",
        margin: "120px auto 120px",
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        paddingLeft: "24px",
        paddingRight: "24px",
        boxSizing: "border-box",
      }}
    >
      {/* Heading */}
      <header
        style={{
          width: "594px",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          marginLeft: "20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span
            style={{
              fontFamily: "var(--font-open-sans)",
              fontSize: "18px",
              lineHeight: "160%",
            }}
          >
            Inspiring Voices, Real Change
          </span>
          <span style={{ width: "80px", height: "1px", background: "#000" }} />
        </div>

        <h2
          style={{
            fontFamily: "var(--font-nunito)",
            fontWeight: 600,
            fontSize: "30px",
            lineHeight: "140%",
            margin: 0,
          }}
        >
          Blogs & Success Story
        </h2>
      </header>

      {/* Cards */}
      <div style={{ position: "relative" }}>
        {/* Scroll container - give it a class so CSS targets the right element */}
        <div
          ref={scrollRef}
          className="cards-scroll-container"
          style={{
            overflowX: "auto",
            padding: "20px 12px",
            scrollBehavior: "smooth",
            display: "flex",
            gap: `${GAP}px`,
            // ensure it can overflow even when parent is full width
            WebkitOverflowScrolling: "touch",
          }}
        >
          {cards.map((card, index) => (
            <article
              key={index}
              style={{
                width: `${CARD_WIDTH}px`,
                borderRadius: "24px",
                background: "#fff",
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                boxShadow: "0px 16px 32px -4px rgba(0,0,0,0.15)",
                flex: "0 0 auto", // IMPORTANT: prevents shrinking so overflow works
                overflow: "hidden",
              }}
            >
              {/* Image Wrapper */}
              <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  style={{ objectFit: "cover" }}
                />

                <button
                  onClick={() => router.push("/")}
                  aria-label="Open article"
                  style={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    width: 44,
                    height: 36,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "transparent",
                    border: 0,
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  <Image
                    src="/whiteArrow.png"
                    alt="Open"
                    width={56}
                    height={56}
                    style={{ objectFit: "contain" }}
                  />
                </button>
              </div>

              {/* Content */}
              <div style={{ padding: "15px" }}>
                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <Image src="/building.png" alt="Clock" width={18} height={20} />
                  <span
                    style={{
                      fontFamily: "var(--font-open-sans)",
                      fontSize: "14px",
                      color: "#999",
                    }}
                  >
                    {card.date}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-nunito)",
                    fontWeight: 700,
                    fontSize: "20px",
                    margin: "8px 0 0 0",
                    color: "#243C4B",
                  }}
                >
                  {card.title}
                </h3>

                <p
                  style={{
                    whiteSpace: "pre-line",
                    fontFamily: "var(--font-open-sans)",
                    fontSize: "16px",
                    color: "#6D6D6D",
                    lineHeight: "160%",
                    marginTop: "5px",
                  }}
                >
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* hide scrollbar for WebKit browsers and keep layout-specific targeting */}
        <style jsx>{`
          .cards-scroll-container::-webkit-scrollbar {
            height: 0px;
            display: none;
          }
          /* keep the scrollbar hidden on Firefox */
          .cards-scroll-container {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
        `}</style>

        {/* Arrows - placed above and aligned to the fourth card area */}
        <nav
          style={{
            position: "absolute",
            top: -70,
            right: 36, // small padding from right edge (adjust as you please)
            display: "flex",
            gap: "20px",
            height: "56px",
            alignItems: "center",
            zIndex: 20,
          }}
        >
          <button
            onClick={scrollLeft}
            aria-label="Scroll left"
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: 0,
              cursor: "pointer",
              background: "transparent",
              padding: 0,
            }}
          >
            <Image src="/leftArrow.png" alt="Left" width={22} height={22} />
          </button>

          <button
            onClick={scrollRight}
            aria-label="Scroll right"
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: 0,
              cursor: "pointer",
              background: "transparent",
              padding: 0,
            }}
          >
            <Image src="/rightArrow.png" alt="Right" width={22} height={22} />
          </button>
        </nav>
      </div>
    </section>
  );
}
