"use client";
import { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

const testimonials = [
  {
    name: "Ayesha Khan",
    message:
      "Impressed with the SEO services! They understood my goals and boosted my site's rankings, traffic, and conversions.",
    image: "/team/team1.webp",
  },
  {
    name: "John Smith",
    message:
      "Mohsin Arshad is a content genius! The well-researched, engaging content perfectly aligned with my brand.",
    image: "/team/team2.webp",
  },
  {
    name: "Sana Malik",
    message:
      "Working with Mohsin Arshad was a pleasure! His custom strategy boosted audience engagement and ROI.",
    image: "/team/team3.webp",
  },
  {
    name: "Ali Raza",
    message:
      "From strategy to execution, everything was top-tier. I highly recommend working with this agency!",
    image: "/team/team4.webp",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section
      className="py-16 bg-gray-50 px-4 md:px-12 lg:px-20"
      id="testimonials"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-black mb-4">What Clients Say</h2>
        <p className="mb-10 text-gray-600">
          Explore what others are saying about their experiences — honest feedback that reflects
          real growth and results.
        </p>

        {/* Card */}
        <div className="relative bg-white p-8 rounded-xl shadow-md shadow-[#155dfc] transition-all duration-500">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white border border-[#155dfc] text-[#155dfc] rounded-full p-2 hover:bg-[#155dfc] hover:text-white transition"
          >
            <FaChevronLeft />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white border border-[#155dfc] text-[#155dfc] rounded-full p-2 hover:bg-[#155dfc] hover:text-white transition"
          >
            <FaChevronRight />
          </button>

          {/* Testimonial Content */}
          <div className="flex flex-col items-center text-center transition-opacity duration-500">
            <div className="flex text-[#facc15] mb-3">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="text-gray-700 mb-6 text-lg max-w-xl">
              “{testimonials[current].message}”
            </p>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 relative rounded-full overflow-hidden border-2 border-[#155dfc]">
                <Image
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-black font-semibold text-base">{testimonials[current].name}</h4>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === index ? "bg-[#155dfc]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
