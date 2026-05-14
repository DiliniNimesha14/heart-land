import Image from 'next/image';

const partners = [
  { name: 'Nesto' },
  { name: 'Al Maya' },
  { name: 'West Zone' },
  { name: 'Talal' },
  { name: 'Madina' },
  { name: 'Passons' },
  { name: 'Safari' },
  { name: 'Baqer Mohebi' },
];

export default function HeartlandB2BNetwork() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[580px] xl:h-[650px] 2xl:h-[720px] overflow-hidden mt-2 mb-8 md:my-8">
      {/* Background Image */}
      <Image
        src="/string hoppers.jpg"
        alt="B2B Network Background"
        fill
        className="object-cover"
        priority
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full w-full mx-auto px-4 sm:px-6 lg:px-[100px] xl:px-[120px] 2xl:px-[160px] flex flex-col justify-center">
        {/* Heading */}
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[46px] 2xl:text-[52px] font-nunito font-bold text-white mb-5 md:mb-10"
        >
          The Heartland B2B Network
        </h2>

        {/* Description */}
        <p
          className="text-sm sm:text-base font-openSans font-extralight md:text-lg lg:text-xl xl:text-[22px] 2xl:text-[24px] text-white/70 max-w-[600px] xl:max-w-[700px] 2xl:max-w-[800px] mb-8 md:mb-10 leading-6 xl:leading-8"
        >
          Our operational excellence and ISO/HACCP certifications have made us the trusted partner for the UAE&apos;s leading retail giants. 
          You can find our extensive range of products across all major hypermarkets and supermarkets, including:
        </p>

        {/* Partner Pills/Tabs - Desktop View (2 rows) */}
        <div className="hidden md:flex flex-col gap-4 lg:gap-5 xl:gap-6">
          {/* First Row - 4 items */}
          <div className="flex flex-wrap gap-3 lg:gap-4 xl:gap-5">
            {partners.slice(0, 4).map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-[20px] border border-[#D11417] px-6 xl:px-8 py-4 w-[160px] lg:w-[180px] xl:w-[200px] 2xl:w-[220px] h-[56px] lg:h-[62px] xl:h-[68px] 2xl:h-[72px] flex items-center justify-center shadow-sm hover:shadow-md transition-all hover:bg-[#FFF5F5] cursor-pointer"
              >
                <span
                  className="text-base lg:text-xl xl:text-[22px] 2xl:text-[24px] font-light text-black text-center"
                >
                  {partner.name}
                </span>
              </div>
            ))}
          </div>

          {/* Second Row - 4 items */}
          <div className="flex flex-wrap gap-3 lg:gap-4 xl:gap-5">
            {partners.slice(4, 8).map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-[20px] border border-[#D11417] px-6 xl:px-8 py-4 w-[160px] lg:w-[180px] xl:w-[200px] 2xl:w-[220px] h-[56px] lg:h-[62px] xl:h-[68px] 2xl:h-[72px] flex items-center justify-center shadow-sm hover:shadow-md transition-all hover:bg-[#FFF5F5] cursor-pointer"
              >
                <span
                  className="text-base lg:text-xl xl:text-[22px] 2xl:text-[24px] font-light text-black text-center"
                >
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Pills/Tabs - Mobile View (scrollable or wrapped) */}
        <div className="flex md:hidden flex-wrap gap-2 sm:gap-3">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-[16px] sm:rounded-[20px] border border-[#D11417] px-3 sm:px-5 py-2 sm:py-3 w-[110px] sm:w-[140px] h-[42px] sm:h-[48px] flex items-center justify-center shadow-sm"
            >
              <span className="text-xs sm:text-sm font-openSans font-semibold text-black text-center">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}