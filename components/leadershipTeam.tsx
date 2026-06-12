"use client";
import React from "react";
import Image from "next/image";

const team = [
  {
    name: "Fazal Mawjood",
    role: "Managing Director",
    img: "/Fazal Mawjood2.png",
    bio: "Fazal Mawjood is the Managing Director of Heartland General Trading and founded the company in 2001. He provides overall leadership and strategic direction and has been instrumental in building Heartland into a trusted trading and distribution business. With decades of experience in the industry, he continues to guide the company's progress through strong supplier and customer relations and an emphasis on sustainable growth.",
  },
  {
    name: "Usaamah Fazal",
    role: "Director",
    img: "/Usaamah Fazal2.png",
    bio: "Usaamah Fazal is a Director of Heartland General Trading with an academic and professional background in agricultural science and agri-food product development. He has experience across agricultural R&D, logistics, and international trade. At Heartland, he oversees the company's meat and agricultural commodity trading operations, while also contributing to strategic planning, operational improvement, and long-term growth initiatives.",
  },
];

export default function LeadershipTeam() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-nunito font-bold text-black mb-6">
            Our Directors
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto font-openSans">
            As a family-operated business, Heartland General Trading is built on
            strong relationships, hands-on involvement, and a commitment to
            reliable service.
          </p>
        </div>

        {/* Directors Grid — 2 columns, centered */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pt-16 max-w-4xl mx-auto">
          {team.map((person, index) => (
            <div
              key={index}
              className="flex flex-col group relative mx-12 lg:mx-0"
            >
              {/* Card with pop-out image */}
              <div className="relative aspect-[4/5] mb-8 flex items-end justify-center">
                {/* Red background box */}
                <div className="absolute bottom-0 left-0 right-0 h-[85%] bg-[#E60012] rounded-3xl z-0 transition-all duration-500 group-hover:shadow-xl" />

                {/* Clipping container */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[85%] z-10 pointer-events-none"
                  style={{
                    clipPath: "inset(-100% 0 0 0 round 0 0 1.5rem 1.5rem)",
                  }}
                >
                  {/* Person image */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] h-[147%] transition-all duration-500 group-hover:scale-105 origin-bottom">
                    <Image
                      src={person.img}
                      alt={person.name}
                      fill
                      className="object-contain object-bottom"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    />
                  </div>
                </div>
              </div>

              {/* Name & Role */}
              <div className="mb-4">
                <h3 className="text-xl font-nunito font-bold text-black mb-1 group-hover:text-[#E60012] transition-colors">
                  {person.name}
                </h3>
                <p className="text-gray-500 text-xs uppercase tracking-widest font-openSans font-semibold">
                  {person.role}
                </p>
              </div>

              {/* Bio */}
              <p className="text-gray-600 text-sm md:text-base font-openSans leading-relaxed">
                {person.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
