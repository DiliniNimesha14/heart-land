import Image from 'next/image';

export default function ExpandingMission() {
  return (
    <section className="w-full py-12 md:py-18 lg:py-30">
<div className="w-full mx-auto px-4 sm:px-6 lg:px-[120px] max-w-none">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 
            className="text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] font-semibold text-black mb-4 md:mb-8"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            Expanding Our Mission
          </h2>
          <p 
            className="text-base md:text-lg lg:text-[24px]  max-w-[1000px] mx-auto leading-relaxed"
            style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 400 }}
          >
            Looking ahead, we are proud to be expanding this mission. We are currently in the process of partnering with prominent Sri Lankan cricketers who lead dedicated cancer projects, ensuring our contributions provide maximum impact and support to those who need it most.
          </p>
        </div>

        {/* Images Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8 max-w-[1200px] 2xl:max-w-[1600px] mx-auto">
          {/* Image 1 */}
          <div className="relative w-full h-[300px] md:h-[350px] lg:h-[391px] overflow-hidden rounded-[20px] shadow-md">
            <Image
              src="/P1.png"
              alt="Healthcare Support"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Image 2 */}
          <div className="relative w-full h-[300px] md:h-[350px] lg:h-[391px] overflow-hidden rounded-[20px] shadow-md">
            <Image
              src="/P2.png"
              alt="Cancer Awareness"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}