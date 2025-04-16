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
          <div className=" w-64 h-64 lg:w-70 lg:h-70 relative rounded-full overflow-hidden shadow-lg">
            <Image
              src="/aboutme/about.jpg" // 🔁 Replace with your image path
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right - Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-lg pl-4 font-normal text-start text-black mb-4">
          Hi, I’m Mohsin Arshad — digital marketer and SEO expert with 3+ years of experience. I help businesses grow through tailored strategies.

We focus on WordPress, SEO, content writing, and social media marketing to build strong online brands.


          </p>
          <p className="text-lg pl-4 font-normal text-start text-black">
          Unlike others, we don’t just offer services we craft solutions that match your goals and drive success.

Let’s take your business to the next level!
          </p>
        </div>
      </div>
    </section>
  );
}
