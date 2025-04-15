import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-2 md:px-12 lg:px-18 bg-gradient-to-b lg:bg-gradient-to-r from-white via-white to-[#0633e8]">
      <div className="lg:w-1/2 text-center lg:text-left space-y-5">
        <h1 className="text-3xl pl-9 md:text-4xl lg:text-[42px] font-bold mt-11 text-black">
          Mohsin Arshad
        </h1>
        <h2 className="text-3xl md:text-3xl lg:text-[54px] lg:leading-16 font-bold text-black">
          Digital Marketer  <span className="text-blue-600">& <br /> SEO Expert</span>
        </h2>
        <p className="text-black text-base md:text-lg mt-5">
          A one-stop solution for Digital Marketing, Web Design, SEO, and Content Writing to take your business to the next level.
        </p>
        <button className="bg-black text-white px-5 py-3 rounded-lg font-semibold mt-4 hover:bg-[#082fca] transition duration-300">
         View Our Services
        </button>
      </div>
      <div className="lg:w-1/2 mb-10 lg:mb-0 flex justify-center lg:justify-end">
        <Image 
          src="/hero2.png" 
          alt="Mohsin Arshad" 
          width={400} 
          height={500} 
          className=" lg:h-[510px] lg:w-[510px] rounded-xl object-contain"
        />
      </div>
    </section>
  );
}
