"use client";

import Image from "next/image";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "600", "700"], display: "swap" });

export default function ContactGetInTouch() {
  return (
    <section className={`${nunito.className} w-full bg-white py-16 px-8 md:px-20`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* LEFT: Form / Text */}
        <div className="pr-4 ml-20">
          <h3 className="text-3xl font-bold text-black mb-3">Get in Touch</h3>
          <p className="text-lg text-black max-w-[480px] mb-8 leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
          </p>

          <form className="space-y-6 max-w-md">
            <div>
              <label className="block text-lg mt-10 text-[#444444] mb-2">Full name</label>
              <input
                type="text"
                placeholder=""
                className="w-full bg-transparent border-0 border-b border-[#D11417] focus:outline-none focus:border-[#D11417] px-0 py-2 placeholder-gray-300"
              />
            </div>

            <div>
              <label className="block text-lg text-[#444444] mb-2">Email</label>
              <input
                type="email"
                className="w-full bg-transparent border-0 border-b border-[#D11417] focus:outline-none focus:border-[#D11417] px-0 py-2 placeholder-gray-300"
              />
            </div>

            <div>
              <label className="block text-lg text-[#444444] mb-2">Subject</label>
              <input
                type="text"
                className="w-full bg-transparent border-0 border-b border-[#D11417 focus:outline-none focus:border-[#D11417] px-0 py-2 placeholder-gray-300"
              />
            </div>

            <div>
              <label className="block text-lg text-[#444444] mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full bg-transparent border-0 border-b border-[#D11417] focus:outline-none focus:border-[#D11417] px-0 py-2 placeholder-gray-300 resize-none"
              />
            </div>

            <div>
             <button
             type="submit"
              className="inline-block h-12 bg-[#D11417] text-white px-5 py-2 shadow-md hover:shadow-lg transition-shadow
             rounded-tl-2xl rounded-br-xl rounded-tr-sm rounded-bl-sm"
            >
              Send Message
            </button>

            </div>
          </form>
        </div>

        {/* RIGHT: pink accent */}
<div className="relative flex justify-center lg:justify-end">

  {/* pink block (behind) */}
  <div
    aria-hidden
    className="absolute -right-40 -top-16 w-[470px] h-[640px] bg-[#FBE8E8] z-0"
    style={{ transform: "translateZ(0)" }}
  />

  {/* map card (front) */}
  <div className="w-full h-[550px] rounded-sm overflow-hidden shadow-md z-10 relative">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57728.74162553496!2d55.3256035!3d25.26902615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434f37cdae93%3A0xde756363a1b78491!2sDeira%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2slk!4v1765167670932!5m2!1sen!2slk"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>




        </div>
      </div>
    </section>
  );
}
