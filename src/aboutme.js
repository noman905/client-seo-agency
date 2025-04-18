"use client";

import Image from "next/image";

const skills=[
  'Digital Marketing ',
  'SEO',

  'Off‑Page SEO',
  'ON Page SEO',
  'Web Designing',
  'Content Writing',
]


const trustedBy = [
  '/testi/testi1.jpg',
  '/testi/testi4.jpg',
  '/testi/testi3.jpg',
];

export default function AboutMe() {
  return (
    <section
      id="about"
      className="bg-white py-16 px-4 md:px-12 lg:px-20"
    >
      {/* Heading */}
      <h2 className="text-4xl lg:text-5xl font-bold text-center text-black mb-12">
        About Me
      </h2>

      {/* Flex Layout */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
       {/* Left - Circular Image */}
<div className="w-full md:w-1/2 flex flex-col items-center">
  <div className="relative w-[250px] h-[250px] sm:w-[280px] sm:h-[280px] md:w-[300px] md:h-[300px] lg:w-[340px] lg:h-[340px]">
    <div className="absolute inset-0 bg-[#0633e8] rounded-full z-0 "></div>
    <div className="relative z-10 w-full h-full rounded-full overflow-hidden  ">
      <Image
        src="/aboutme/about.png"
        alt="Profile"
        fill
        className=" "
      />
  
</div>















     
  <div className='absolute bottom-20 hidden lg:block lg:-bottom-20 lg:-left-[1px] '>
  <div className="flex items-center gap-1 bg-[#ffffff] px-1 py-1 rounded-xl shadow-[#0633e8] shadow-lg">
  
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











        {/* Right - Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          
          <p className="text-lg pl-4 font-normal text-start text-black mb-4">
            I am Mohsin Arshad, a results-driven Digital Marketer with over <strong>3 years of expertise</strong> and a proven track record of success for <strong>100+ clients</strong>. I don’t just execute campaigns—I engineer high-impact strategies that deliver measurable growth and long-term market dominance.
          </p>

          <p className="text-lg pl-4 font-normal text-start text-black mb-4">
  <strong>What I Deliver:</strong>
</p>

<div className="flex flex-wrap gap-4 pl-4 mb-4">
  {skills.map((skill, index) => (
    <span
      key={index}
      className="bg-[#0633e8] text-white border border-gray-200 px-5 py-2 rounded-full shadow-xl text-sm md:text-base font-medium hover:shadow-2xl transition duration-300"
    >
      {skill}
    </span>
  ))}
</div>

          <p className="text-lg pl-4 font-normal text-start text-black">
            Ready to transform your online presence and accelerate revenue? Let’s craft your next success story—together.
          </p>

          <a href="#services">
            <button className="bg-black ml-4 text-white px-5 py-3 rounded-lg hover:bg-[#082fca] font-semibold mt-6 transition duration-300">
              Contact ME
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
