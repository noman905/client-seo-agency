"use client";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Ayesha Khan",
    message: "Impressed with the SEO services! They understood my goals and boosted my site's rankings, traffic, and conversions. Highly committed to results. Outstanding work! ",
  },
  {
    name: "John Smith",
    message: "Mohsin Arshad is a content genius! The well-researched, engaging content perfectly aligned with my brand and captivated my audience. Highly impressive! ",
  },
  {
    name: "Sana Malik",
    message: "Working with Mohsin Arshad was a pleasure! His custom strategy boosted audience engagement and ROI. Professional, creative, and highly effective. Highly recommend!",
  },
  {
    name: "Sana Malik",
    message: "Working with Mohsin Arshad was a pleasure! His custom strategy boosted audience engagement and ROI. Professional, creative, and highly effective. Highly recommend!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50 px-4 md:px-12 lg:px-20" id="testimonials">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-black mb-10">What Clients Say</h2>
            <p className="mb-4 lg:px-20">Explore what others are saying about their experiences, highlighting key insights and honest feedback to help you make informed decisions.</p>
        <div className="flex flex-col md:flex-row gap-6 items-stretch justify-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-1 bg-white p-6 rounded-xl shadow-md text-left flex flex-col justify-between"
            >
              {/* 5 Stars */}
              <div className="flex text-[#facc15] mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Message */}
              <p className="text-gray-700 mb-4">{testimonial.message}</p>

              {/* Name */}
              <h4 className="text-black font-semibold mt-auto">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
