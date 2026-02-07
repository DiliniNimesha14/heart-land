"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  const blogCarouselRef = useRef<HTMLDivElement | null>(null);
  const [activeCard, setActiveCard] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const blogCards = [
    { image: "/Rectangle 15.png", alt: "Star anise spices" },
    { image: "/Rectangle 15 (1).png", alt: "Spices on spoons" },
    { image: "/Rectangle 15 (2).png", alt: "Spice market shop" },
  ];

  const scrollToCard = (index: number) => {
    const container = blogCarouselRef.current;
    if (!container) return;

    const scrollLeft = index * container.offsetWidth;
    container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    setActiveCard(index);
  };

  // Pause auto-scroll temporarily
  const pauseAutoScroll = () => {
    setIsPaused(true);

    // Clear existing timeout
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }

    // Resume after 5 seconds
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  // Update active card on scroll
  useEffect(() => {
    const container = blogCarouselRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.offsetWidth;
      const currentIndex = Math.round(scrollLeft / cardWidth);
      setActiveCard(currentIndex);
    };

    const handleTouchStart = () => {
      pauseAutoScroll();
    };

    container.addEventListener("scroll", handleScroll);
    container.addEventListener("touchstart", handleTouchStart);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      container.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  // Auto-scroll every 3 seconds (only when not paused)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      requestAnimationFrame(() => {
        setActiveCard((prev) => {
          const next = (prev + 1) % blogCards.length;
          scrollToCard(next);
          return next;
        });
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [blogCards.length, isPaused]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="py-8 md:py-20 bg-black" style={{ fontFamily: 'Open Sans' }}>
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-full lg:max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="text-center mb-5 md:mb-16">
          <p className="text-white text-base md:text-sm tracking-[0.3em] uppercase mb-4 font-light"style={{ fontFamily: 'Open Sans' }}>
            BLOG
          </p>
          <h2 className="text-white text-[16px] md:text-4xl lg:text-5xl font-bold"style={{ fontFamily: 'Open Sans' }}>
            The latest article
          </h2>
        </div>

        {/* Desktop Layout - 3 cards in a row */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 2xl:gap-12" style={{ fontFamily: 'Open Sans' }}>
          {/* Card 1 */}
          <div className="group flex flex-col h-full">

            <div className="relative overflow-hidden mb-6">
              <Image
                src="/Frame 61 (3).png"
                alt="Star anise spices"
                width={400}
                height={300}
                className="w-full h-[280px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
<p className="text-white text-base mb-4 leading-relaxed flex-grow">
Supporting Sri Lanka with Compassion and Purpose            </p>
              <Link
              href="#"
              className="inline-flex items-center text-white text-sm tracking-[0.3em] uppercase hover:text-gray-300 transition-colors"
            >
              LEARN MORE
              <span className="ml-2 text-lg">›</span>
            </Link>  
          </div>

          {/* Card 2 */}
          <div className="group flex flex-col h-full">

            <div className="relative overflow-hidden mb-6">
              <Image
                src="/Frame 62.png"
                alt="Spices on spoons"
                width={400}
                height={300}
                className="w-full h-[280px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
<p className="text-white text-base mb-4 leading-relaxed flex-grow">
Empowering Smallholders, Cultivating Growth            </p>
              <Link
              href="#"
              className="inline-flex items-center text-white text-sm tracking-[0.3em] uppercase hover:text-gray-300 transition-colors"
            >
              LEARN MORE
              <span className="ml-2 text-lg">›</span>
            </Link> 
          </div>

          {/* Card 3 */}
          <div className="group flex flex-col h-full">

            <div className="relative overflow-hidden mb-6">
              <Image
                src="/Frame 63.png"
                alt="Spice market shop"
                width={400}
                height={300}
                className="w-full h-[280px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
<p className="text-white text-base mb-4 leading-relaxed flex-grow">
Heartland General Trading: A Leader in Quality and Authenticity            </p>
              <Link
              href="#"
              className="inline-flex items-center text-white text-sm tracking-[0.3em] uppercase hover:text-gray-300 transition-colors"
            >
              LEARN MORE
              <span className="ml-2 text-lg">›</span>
            </Link> 
          </div>
        </div>

        {/* Mobile Layout - Carousel/Slider style */}
        <div className="md:hidden">
          <div className="relative">
            {/* Horizontal Scroll Container */}
            <div
              ref={blogCarouselRef}
              className="flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {blogCards.map((card, index) => (
                <div key={index} className="shrink-0 w-full snap-start snap-always">
                  <div className="relative overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      width={500}
                      height={400}
                      className="w-full h-[280px] sm:h-80 object-cover"
                    />
                  </div>

                  <div className="text-center px-4 mt-6">
                    <p className="text-white text-md sm:text-lg mb-3 leading-relaxed font-light" style={{ fontFamily: 'Open Sans' }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <Link
                      href="#"
                      className="inline-flex items-center text-[#757575] text-[12px] tracking-[0.3em] uppercase hover:text-gray-300 transition-colors"
                    >
                      LEARN MORE
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-6">
              {blogCards.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    scrollToCard(idx);
                    pauseAutoScroll();
                  }}
                  aria-label={`Go to blog ${idx + 1}`}
                  className={`w-[6px] h-[6px] rounded-full cursor-pointer transition-all ${
                    idx === activeCard ? "bg-white" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}