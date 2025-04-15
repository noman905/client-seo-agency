import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-2 md:px-12 lg:px-18    via-[#ffffff] to-[#0033ff]">
      {/* Text Content */}
      <div className="lg:w-1/2 text-center lg:text-left space-y-5">
        <h1 className="text-[35px] text-center lg:text-start lg:pl-9 sm:text-[40px] md:text-[40px] lg:text-[42px] font-bold mt-11 text-black">
          Mohsin Arshad
        </h1>
        <h2 className="text-[30px] sm:text-[41px] md:text-[41px] lg:text-[54px] lg:leading-16 font-bold text-black">
          Digital Marketer <span className="text-blue-600">& <br /> SEO Expert</span>
        </h2>
        <p className="text-black sm:px-10 md:px-11 lg:px-0 md:text-center lg:text-start text-base md:text-lg mt-5">
          A one-stop solution for Digital Marketing, Web Design, SEO, and Content Writing to take your business to the next level.
        </p>
        <button className="bg-black text-white px-5 py-3 rounded-lg font-semibold mt-4 hover:bg-[#082fca] transition duration-300">
          View Our Services
        </button>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 mb-10 lg:mb-0 flex justify-center lg:justify-end">
        {/* Mobile-only blue circle with shadow */}
        <div className="block  mt-5 bg-[#0633e8] p-5 rounded-full shadow-3xl">
          <Image
            src="/hero2.png"
            alt="Mohsin Arshad"
            width={280}
            height={280}
            className="w-[250px] h-[250px] sm:h-[320px] sm:w-[320px] md:h-[380px] md:w-[380px]   lg:h-[430px] lg:w-[430px] object-contain rounded-full"
          />
        </div>

        {/* Desktop/Tablet normal image */}
        {/* <div className="hidden md:block">
          <Image
            src="/hero2.png"
            alt="Mohsin Arshad"
            width={410}
            height={410}
            className=" md:h-[510px] md:w-[510px] rounded-xl object-contain"
          />
        </div> */}
      </div>
    </section>
  );
}
