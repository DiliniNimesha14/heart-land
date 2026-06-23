"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/data/blogs";

export default function Blog() {
  const blogCarouselRef = useRef<HTMLDivElement | null>(null);
  const [activeCard, setActiveCard] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const isProgrammatic = useRef(false);

  // Show the three most recent posts, linked to their full articles.
  const blogCards = blogs.slice(0, 3).map((post) => ({
    slug: post.slug,
    image: post.image,
    alt: post.title,
    topic: post.title,
  }));

  // Scroll to card
  useEffect(() => {
    const container = blogCarouselRef.current;
    if (!container) return;
    isProgrammatic.current = true;
    container.scrollTo({
      left: activeCard * container.offsetWidth,
      behavior: "smooth",
    });
    const timer = setTimeout(() => {
      isProgrammatic.current = false;
    }, 600);
    return () => clearTimeout(timer);
  }, [activeCard]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % blogCards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [blogCards.length, isPaused]);

  useEffect(() => {
    const container = blogCarouselRef.current;
    if (!container) return;
    const handleScroll = () => {
      if (isProgrammatic.current) return;
      const index = Math.round(container.scrollLeft / container.offsetWidth);
      setActiveCard(index);
    };
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-8 md:py-20 bg-black font-openSans">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-full lg:max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto">
          {/* Header */}
          <div className="text-center mb-5 md:mb-16">
            <p className="text-white text-base md:text-sm tracking-[0.3em] uppercase mb-4 font-light">
              BLOG
            </p>
            <h2 className="text-white text-[16px] md:text-4xl lg:text-5xl font-nunito font-bold">
              The latest article
            </h2>
          </div>

          {/* Desktop Layout - 3 cards in a row */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
            {blogCards.map((card) => (
              <Link
                key={card.slug}
                href={`/blog/${card.slug}`}
                className="group flex flex-col h-full"
              >
                <div className="relative overflow-hidden mb-6">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    width={400}
                    height={300}
                    className="w-full h-[280px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-white text-base mb-4 leading-relaxed flex-grow font-openSans transition-colors group-hover:text-red-500">
                  {card.topic}
                </p>
                <span className="inline-flex items-center text-white text-sm tracking-[0.3em] uppercase group-hover:text-red-500 transition-colors">
                  LEARN MORE
                  <span className="ml-2 text-lg">›</span>
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Layout - Carousel/Slider style */}
          <div className="md:hidden">
            <div className="relative">
              {/* Horizontal Scroll Container */}
              <div
                ref={blogCarouselRef}
                className="flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {blogCards.map((card, index) => (
                  <Link
                    key={index}
                    href={`/blog/${card.slug}`}
                    className="shrink-0 w-full snap-start snap-always"
                  >
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
                      <p className="text-white text-base mb-3 leading-relaxed">
                        {card.topic}
                      </p>
                      <span className="inline-flex items-center text-[#757575] text-[12px] tracking-[0.3em] uppercase">
                        LEARN MORE
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Dots Navigation */}
              <div className="flex justify-center gap-2 mt-6">
                {blogCards.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveCard(idx);
                      setIsPaused(true);
                      setTimeout(() => setIsPaused(false), 5000);
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
