"use client";

import React from "react";
import Image from "next/image";

const team = [
  {
    name: "Mohamed Fazal Mawjood",
    role: "Managing Director",
    img: "/Fazal Mawjood2.png",
    color: "bg-[#EF4444]", // Red
  },
  {
    name: "Usaamah Fazal",
    role: "Director",
    img: "/Usaamah Fazal2.png",
    color: "bg-[#EF4444]", // Red
  },
  {
    name: "Rizvi Farook",
    role: "General Manager",
    img: "/Rizvi Farook2.png",
    color: "bg-[#EF4444]", // Red
  },
  {
    name: "Manoj Kumar",
    role: "Senior Sales Manager",
    img: "/Manoj Kumar2.png",
    color: "bg-[#EF4444]", // Red
  },
];

export default function LeadershipTeam() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-nunito font-bold text-black mb-6">
            Our Team
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto font-openSans">
            With decades of combined experience, our dedicated team at Heartland General Trading is at the helm, committed to delivering the best Sri Lankan food products.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 pt-16">
          {team.map((person, index) => (
            <div key={index} className="flex flex-col group relative mx-12 lg:mx-0">
              {/* Card Container with Pop-out Effect */}
              <div className="relative aspect-[4/5] mb-8 flex items-end justify-center">
                {/* 1. The Red Background Box (the "Card") */}
                <div className="absolute bottom-0 left-0 right-0 h-[85%] bg-[#E60012] rounded-3xl z-0 transition-all duration-500 group-hover:shadow-xl" />
                
                {/* 2. Clipping Container (Matches Card exactly) */}
                <div className="absolute bottom-0 left-0 right-0 h-[85%] z-10 pointer-events-none"
                  style={{ clipPath: 'inset(-100% 0 0 0 round 0 0 1.5rem 1.5rem)' }}>
                  {/* Person Image - Centered and Popping Out */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] h-[147%] transition-all duration-500 group-hover:scale-105 origin-bottom">
                    <Image
                      src={person.img}
                      alt={person.name}
                      fill
                      className="object-contain object-bottom"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div>
                <h3 className="text-xl font-nunito font-bold text-black mb-1 group-hover:text-[#E60012] transition-colors">
                  {person.name}
                </h3>
                <p className="text-gray-500 text-xs uppercase tracking-widest font-openSans font-semibold">
                  {person.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
