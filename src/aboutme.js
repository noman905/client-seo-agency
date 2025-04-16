"use client";

import Image from "next/image";

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
      <div className="max-w-7xl  mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
        <div className="w-64 h-64 bg-[#0633e8] lg:w-76 lg:h-76 relative rounded-full overflow-hidden shadow-lg drop-shadow-[0_0_30px_white]">
  <Image
    src="/aboutme/about.png"
    alt="Profile"
    fill
    className="object-cover"
  />
</div>

        </div>

        {/* Right - Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="pl-4 mb-3.5 text-[#0633e8] text-2xl font-semibold">Welcome to Digital Marketing Agency!</h1>
          <p className="text-lg pl-4 font-normal text-start text-black mb-4">
          Hi, I’m Mohsin Arshad — digital marketer and SEO expert with 3+ years of experience. I help businesses grow through tailored strategies.

We focus on WordPress, SEO, content writing, and social media marketing to build strong online brands.


          </p>
          <p className="text-lg pl-4 font-normal text-start text-black">
          Unlike others, we don’t just offer services we craft solutions that match your goals and drive success.

Let’s take your business to the next level!
          </p>

          <a href='#services'>
        <button className="bg-black ml-4 text-white px-5 py-3 rounded-lg font-semibold mt-6 hover:bg-[#082fca] transition duration-300">
          Contact ME
        </button>
        </a>
      
        </div>
      </div>
    </section>
  );
}
