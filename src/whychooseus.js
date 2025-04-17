"use client";
import Image from "next/image";

const points = [
  "Data-driven SEO strategies",
  "Transparent reporting & progress tracking",
  "Proven results across industries",
  "Personalized approach to each client",
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12">
        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Why <span className="text-blue-600">Choose Us</span>
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            We’re not just another digital service provider — we’re your growth partner.
            Our SEO strategies are built on real results, not empty promises.
            Trust us to boost your visibility, authority, and conversions.
          </p>
          <ul className="text-left space-y-3 text-gray-900">
            {points.map((point, index) => (
              <li key={index}>✅ {point}</li>
            ))}
          </ul>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex flex-col gap-6 w-full">
          <div className="relative shadow-sm shadow-blue-600 w-full h-40 rounded-xl overflow-hidden ">
            <Image
              src="/stat1.jpg"
              alt="SEO Growth Graph 1"
              fill
              className=""
            />
          </div>
          <div className="relative w-full shadow-sm shadow-blue-600 h-40 rounded-xl overflow-hidden ">
            <Image
              src="/stat2.jpg"
              alt="SEO Growth Graph 2"
              fill
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
