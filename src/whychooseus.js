"use client";

import Image from "next/image";

const points = [
  {
    heading: "Proven Track Record",
    content:
      "Over 100+ clients have seen double-digit improvements in traffic, conversions, and ROI thanks to our tailored approach.",
  },
  {
    heading: "Holistic Expertise",
    content:
      "SEO, Local SEO, Off-Page Optimization, Digital Marketing, and Web Design—fully integrated for maximum synergy.",
  },
  {
    heading: "Data-Driven Decisions",
    content:
      "We leverage advanced analytics and A/B testing to refine every tactic and squeeze more performance from your budget.",
  },
  {
    heading: "Transparent Communication",
    content:
      "Real-time dashboards and clear reporting mean you always know exactly how your campaigns are performing.",
  },
  {
    heading: "Relentless Optimization",
    content:
      "We never settle. Continuous monitoring, testing, and iteration ensure your strategy stays ahead of the curve.",
  },
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
          <p className="text-lg text-black text-start  pl-2 lg:pl-0 mb-6">
            When you partner with us, you’re not just hiring another agency—you’re gaining a dedicated growth
            partner committed to your success. We combine deep industry know-how with a data-driven mindset
            and creative vision to craft strategies that deliver real, measurable business impact. From the first
            consultation through every optimization cycle, our focus is squarely on driving the metrics that matter most:
            visibility, leads, and revenue.
          </p>
          <ul className="text-left space-y-6 text-gray-900">
            {points.map((point, index) => (
              <li key={index}>
                <p className="font-semibold text-lg">✅ {point.heading}</p>
                <p className="text-base leading-relaxed">{point.content}</p>
              </li>
            ))}
          </ul>
          <p className="text-lg text-gray-800 mt-6">
            Elevate your brand with a team that combines deep technical skill, creative vision, and an unwavering focus on results.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex flex-col gap-6 w-full">
          <div className="relative shadow-sm shadow-blue-600 w-full h-40 rounded-xl overflow-hidden ">
            <Image
              src="/stat1.jpg"
              alt="SEO Growth Graph 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full shadow-sm shadow-blue-600 h-40 rounded-xl overflow-hidden ">
            <Image
              src="/stat2.jpg"
              alt="SEO Growth Graph 2"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
