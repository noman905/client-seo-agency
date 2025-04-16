import Image from 'next/image';

export default function Hero() {
  return (

    // bg-gradient-to-r from-[#ffffff] via-[#f0f4ff] to-[#092fc8bd]
    <section className="flex flex-col lg:flex-row items-center justify-between px-2 md:px-12 lg:px-18  ">
      {/* Text Content */}
      <div className="lg:w-1/2 text-center lg:text-left space-y-0">
        <h1 className="text-[35px] text-center lg:text-start sm:text-[40px] md:text-[40px] lg:text-[42px] font-bold mt-11 lg:mt-8 text-black">
          Mohsin Arshad
        </h1>
        <h2 className="text-[30px] sm:text-[41px] md:text-[41px] lg:text-[46px] lg:leading-16 font-bold text-black">
          Digital Marketer <span className="text-blue-600">&amp; <br /> SEO Expert</span>
        </h2>
        <p className="text-black sm:px-10 md:px-11 lg:px-0 md:text-center lg:text-start text-base md:text-lg mt-2">
          A one-stop solution for Digital Marketing, Web Design, SEO, and Content Writing to take your business to the next level.
        </p>
        <button className="bg-black  text-white px-5 py-3 rounded-lg font-semibold mt-6 hover:bg-[#082fca] transition duration-300">
          View Our Services
        </button>
      </div>

     {/* Image Section */}
     <div className="lg:w-1/2 mb-10 lg:mt-0 flex justify-center lg:justify-end">
  <div className="relative flex items-center justify-center">
    {/* Blue Glow Behind Image */}
    <div className="absolute mt-24 z-0 w-[300px] h-[300px] sm:w-[370px] sm:h-[370px] md:w-[430px] md:h-[430px] lg:w-[400px] lg:h-[400px] rounded-full bg-[#0051ff] blur-2xl opacity-100"></div>
    <div className="absolute mt-24 z-0 w-[300px] h-[300px] sm:w-[370px] sm:h-[370px] md:w-[430px] md:h-[430px] lg:w-[400px] lg:h-[400px] rounded-full bg-[#0051ff] blur-2xl opacity-70"></div>
    {/* Hero Image with Circle */}
    <div className="mt-15 bg-[#0633e8] p-0 rounded-full shadow-3xl relative z-10">
      <Image
        src="/hero.png"
        alt="Mohsin Arshad"
        width={280}
        height={280}
        className="w-[250px] h-[250px] sm:h-[320px] sm:w-[320px] md:h-[380px] md:w-[380px] lg:h-[408px] lg:w-[408px] object-contain rounded-full"
      />

       {/* Decorative Images */}
    <Image
      src="/hero1.webp"
      alt="Decorative Image 1"
      width={280}
      height={280}
      className="absolute -top-10 right-1 lg:-right-10 h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] md:h-[120px] md:w-[120px] lg:h-[130px] lg:w-[130px] object-contain shadow-2xl rounded-xl"
    />
    <Image
      src="/hero2.webp"
      alt="Decorative Image 2"
      width={280}
      height={280}
      className="absolute -bottom-10 lg:bottom-0 right-28 lg:-right-16 h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] md:h-[120px] md:w-[120px] lg:h-[110px] lg:w-[110px] object-contain shadow-2xl rounded-xl"
    />
    <Image
      src="/hero3.webp"
      alt="Decorative Image 3"
      width={280}
      height={280}
      className="absolute  -top-10 lg:top-24 lg:bottom-50 left-1 lg:-left-32 h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] md:h-[120px] md:w-[120px] lg:h-[130px] lg:w-[130px] object-contain shadow-2xl rounded-xl"
    />
    </div>

   
  </div>
</div>
    </section>
  );
}
