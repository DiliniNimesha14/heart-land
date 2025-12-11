"use client";
import { useState } from "react";
import { Nunito, Open_Sans } from "next/font/google";
import Image from "next/image";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function GeneralFaqs() {
  const faqs = [
    {
      question: "Do you deliver across the UAE?",
      answer: `Yes, we provide nationwide delivery across all seven emirates in the UAE.
      Our efficient logistics network ensures that products are transported safely
      and arrive fresh. Whether you’re in Dubai, Abu Dhabi, or other regions, we
      guarantee timely and reliable delivery right to your doorstep.`,
    },
    {
      question: "What payment method do you accept ?",
      answer: "We accept major credit cards, bank transfers, and cash on delivery.",
    },
    {
      question: "How long does delivery take?",
      answer: "Delivery usually takes 2–5 business days depending on your location.",
    },
    {
      question: "What is your return policy?",
      answer: "Products can be returned within 7 days if unopened and in original condition.",
    },
    {
      question: "Do you deliver across the UAE?",
      answer: "Products can be returned within 7 days if unopened and in original condition.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0); 

  return (
    <section className="relative w-full py-36 px-10">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5 mt-10 pointer-events-none">
        <Image
          src="/WRLD-EPS-02-4001 1.png"
          alt="World Map Background"
          className="w-[1030px] h-[600px] object-left"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl  mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* LEFT SIDE */}
        <div className="ml-32">
          <h2 className={`text-[32px]  font-bold text-black ${nunito.className}`}>
            General FAQs
          </h2>

          <p
            className={`text-[18px] mt-4 max-w-[400px] text-[#333] leading-[28px] ${nunito.className}`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
          </p>
        </div>

        <div className="space-y-5 -ml-20 max-w-[650px]">
  {faqs.map((faq, index) => (
    <div key={index}>
      <p
        className={`text-[18px] py-2 cursor-pointer font-semibold ${openSans.className} ${
          openIndex === index
            ? "text-[#D11417]"  
            : "text-black border-b border-[#D11417]"  
        }`}
        onClick={() =>
          setOpenIndex(openIndex === index ? null : index)
        }
      >
        {faq.question}
      </p>

      {openIndex === index && (
        <p className={`text-[16px] text-[#333] leading-[26px] mt-2 ${nunito.className}`}>
          {faq.answer}
        </p>
      )}
    </div>
  ))}
</div>


      </div>
    </section>
  );
}
