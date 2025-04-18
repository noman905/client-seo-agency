import Image from 'next/image';

const button=[
  { icon: '❓', text: 'No leads?' },
  { icon: '❌', text: 'No revenue?' },
  { icon: '🚫', text: 'No traffic?' },
  { icon: '😞', text: 'No business growth?' },
]

const trustedBy = [
  '/testi/testi1.jpg',
  '/testi/testi4.jpg',
  '/testi/testi3.jpg',
];


export default function Hero() {
  return (

    // bg-gradient-to-r from-[#ffffff] via-[#f0f4ff] to-[#092fc8bd]
    <section className="flex flex-col lg:flex-row items-center justify-between px-2 md:px-12 lg:px-18  ">
      {/* Text Content */}
      <div className="lg:w-1/2 text-center lg:text-left space-y-0">
      
        <h1 className="text-[35px] text-center lg:text-start sm:text-[40px] md:text-[40px] lg:text-[42px] font-bold mt-11 lg:mt-8 text-black">
          Mohsin Arshad
        </h1>
        <div className="flex mb-3 flex-wrap justify-center lg:justify-start gap-3 mt-4">
  {button.map((item, index) => (
    <div
      key={index}
      className="flex items-center gap-1 bg-white border border-gray-200 shadow-lg px-1 py-1 rounded-full text-black text-sm sm:text-base font-medium hover:scale-105 transition duration-300"
    >
      <span>{item.icon}</span> {item.text}
    </div>
  ))}
</div>
        <h4 className='font-semibold'>✨ You are in the right place.</h4>
        <p className="text-black text-start ml-4 lg:ml-0 sm:px-10 md:px-11 lg:px-0 md:text-center lg:text-start text-base md:text-lg mt-2">
        We help businesses achieve powerful online visibility through expert  SEO, 📍 Local SEO, 📈 Digital Marketing, and 🎨 stunning Web Design. Whether you are a small business or a growing brand, we  build the strategy that brings results — not just promises.
        </p>
        <a href='#services'>
        <button className="bg-black  text-white px-5 py-3 rounded-lg font-semibold mt-6 hover:bg-[#082fca] transition duration-300">
        Get My Free Strategy Session
        </button>
        </a>
      </div>

     {/* Image Section */}
     <div className="lg:w-1/2 mb-10 lg:mt-0 flex justify-center lg:justify-end">
  <div className="relative flex items-center justify-center">
    
    <div className="mt-15 shadow-2xl shadow-blue-600 bg-[#0633e8] p-0 rounded-full shadow-3xl relative z-10">
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



    
<div className='absolute -bottom-27 lg:-bottom-5 lg:-left-[180px] '>
<div className="flex items-center gap-1 bg-[#ffffff] px-1 py-1 rounded-xl shadow-[#0633e8] shadow-md">

  {/* Google Icon */}
  <Image
      src="/google.png"
      alt="Google Icon"
      width={50}
      height={50}
      className="h-10 w-10"
    />

  <span className="text-black text-[12px] sm:text-[12px] font-semibold">

    TRUSTED BY
  </span>
  <div className="flex items-center -space-x-3">
    {trustedBy.map((src, i) => (
      <Image
      key={i}
      src={src}
      alt={`images`}
      width={40}
      height={40}
      className="w-[40px] h-[40px] rounded-full border-0 border-black "
    />
    ))}
  </div>
  <span className="text-black text-sm sm:text-[12px] ml-1 font-semibold">
    & many more...
  </span>
</div>
</div>

   
    
    </div>

   
  </div>
</div>
    </section>
  );
}
