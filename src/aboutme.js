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
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-64 h-64 shadow-lg shadow-blue-600 bg-[#0633e8] lg:w-76 lg:h-76 relative rounded-full overflow-hidden drop-shadow-[0_0_30px_white]">
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
          <h1 className="pl-4 mb-3.5 text-[#0633e8] text-2xl font-semibold">
            Your Strategic Growth Accelerator
          </h1>
          <p className="text-lg pl-4 font-normal text-start text-black mb-4">
            I’m Mohsin Arshad, a results-driven Digital Marketer with over <strong>3 years of expertise</strong> and a proven track record of success for <strong>100+ clients</strong>. I don’t just execute campaigns—I engineer high-impact strategies that deliver measurable growth and long-term market dominance.
          </p>

          <p className="text-lg pl-4 font-normal text-start text-black mb-4">
            <strong>What I Deliver:</strong>
          </p>
          <ul className="text-start text-black text-lg pl-8 list-disc space-y-2 mb-4">
            <li><strong>SEO & Off‑Page SEO:</strong> Elevate your website to the top of search results with rigorous audits, advanced on‑page tactics, and authoritative link acquisition.</li>
            <li><strong>Local SEO:</strong> Command your local market by optimizing for “near me” searches, driving foot traffic and high‑intent inquiries.</li>
            <li><strong>Digital Marketing:</strong> Deploy data‑driven PPC, social media, and content campaigns that consistently exceed ROI targets.</li>
            <li><strong>Web Design:</strong> Build conversion‑optimized, mobile‑first websites that capture attention and close deals.</li>
          </ul>

          <p className="text-lg pl-4 font-normal text-start text-black">
            Ready to transform your online presence and accelerate revenue? Let’s craft your next success story—together.
          </p>

          <a href="#services">
            <button className="bg-black ml-4 text-white px-5 py-3 rounded-lg font-semibold mt-6 hover:bg-[#082fca] transition duration-300">
              Contact ME
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
