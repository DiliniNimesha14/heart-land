import Image from "next/image";

export default function ContactHeader() {
  return (
    <div className="px-0 sm:px-6 md:px-10">
      <section
        className="relative w-full h-[250px] sm:h-[280px] md:h-[320px] lg:h-[353px] py-8 sm:py-12 md:py-16 px-0 sm:px-4 bg-[#000000] text-center text-white overflow-hidden font-openSans"
      >
        {/* Background Image */}
        <div className="absolute inset-0 flex items-center justify-center lg:justify-center lg:items-center">
          <Image
            src="/MAP.png"
            alt="Background Map"
            width={800}
            height={320}
            className="opacity-100 lg:opacity-100 pointer-events-none select-none w-full h-full object-contain lg:w-[800px] lg:h-[450px] lg:object-contain"
          />
        </div>

        <div className="relative z-10 mt-1 sm:mt-2">
          <p className="text-[15px] sm:text-[10px] md:text-[11px] lg:text-[12px] tracking-[6px] sm:tracking-[4px] md:tracking-[5px] lg:tracking-[6px] uppercase mb-3 sm:mb-2 font-light">
            get in touch
          </p>

          <h2 className="text-[20px] sm:text-[32px] md:text-[45px] lg:text-[55px] font-nunito font-bold mb-4 sm:mb-0">
            Contact Us
          </h2>

          <p className="text-[14px] sm:text-[18px] md:text-[24px] lg:text-[29px] max-w-[300px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[850px] mx-auto mt-4 sm:mt-3 opacity-90">
            We are always ready to help you and answer your questions
          </p>

          {/* Centered social row */}
          <div className="flex justify-center items-center mt-10 sm:mt-10 md:mt-12 lg:mt-14">
            <p className="font-semibold text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] mr-10 sm:mr-6 md:mr-8">
              Follow Us
            </p>

            <div className="flex items-center gap-4 sm:gap-5 md:gap-6">
              <a
                href="https://web.facebook.com/HeartlandGeneralTrading"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/fbwhite.png"
                  alt="Facebook"
                  width={20}
                  height={20}
                  className="transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-1 w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] md:w-[19px] md:h-[19px] lg:w-[20px] lg:h-[20px]"
                />
              </a>

              <a
                href="https://www.instagram.com/heartlandgeneral/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/instawhite.png"
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-1 w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] md:w-[19px] md:h-[19px] lg:w-[20px] lg:h-[20px]"
                />
              </a>

              {/*<a
                href="https://web.facebook.com/HeartlandGeneralTrading"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/ytwhite.png"
                  alt="YouTube"
                  width={20}
                  height={20}
                  className="transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-1 w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] md:w-[19px] md:h-[19px] lg:w-[20px] lg:h-[20px]"
                />
              </a>*/}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
