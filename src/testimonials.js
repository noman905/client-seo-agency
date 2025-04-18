"use client";
import { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Nathan Cross",
    title: "SEO (Search Engine Optimization) Review",
    message:
      "Mohsin Arshad's SEO services have taken my website to top rankings on search engines. His detailed approach and customized strategies significantly boosted my online visibility. If you want to rank your website, I highly recommend Mohsin's SEO expertise",
    image: "/testi/testi1.jpg",
  },
  {
    name: "Julian Blake",
    title: "Local SEO Review",
    message:
       "Mohsin Arshad's local SEO service has been a game-changer for my local business. He optimized my website to appear on top in local searches, and his approach is highly effective. Thanks to his services, I now have direct connections with my target audience in the local area.",
    image: "/testi/testi2.jpg",
  },
  {
    name: "Ethan Cole",
    title: "Digital Marketing Review",
    message:
       "Mohsin Arshad's digital marketing services have given my brand a new identity. He effectively utilized multiple channels like social media and Google ads, which directly impacted my business by generating leads and conversions. His work is exceptional and highly effective.",
    image: "/testi/testi3.jpg",
  },
  {
    name: "Areeba",
    title: "Web Designing Review",
    message:
       "Mohsin Arshad's web designing services gave my website a modern and professional look. He made it so user-friendly that visitors can easily navigate through it. The speed and responsiveness of my site have also greatly improved. Highly recommended!",
    image: "/testi/testi4.jpg",
  },
  {
    name: "Sana",
    title: "Off-Page SEO Review",
    message:
    "Mohsin Arshad's off-page SEO strategies have benefited my website greatly. By using quality backlinks and other off-page tactics, he significantly improved my website's authority and trust score. His approach is highly effective and results-driven."
,
    image: "/testi/testi5.jpg",
  },
  {
    name: "Sana",
    title: "Content Writing Review",
    message:
     "Mohsin Arshad's content writing service is outstanding. He wrote engaging, SEO-optimized, and informative content for my website, which connects well with my audience. His writing style perfectly matches my brand voice. Highly professional and top-notch quality!"
,
    image: "/testi/testi6.jpg",
  }
  
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      position: "absolute",
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative",
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      position: "absolute",
    }),
  };

  return (
    <section className="py-16 bg-gray-50 px-4 md:px-12 lg:px-20" id="testimonials">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-black mb-4">What Clients Say</h2>
        <p className="mb-10 text-gray-600">
          Explore what others are saying about their experiences — honest feedback that reflects
          real growth and results.
        </p>

        <div className="relative bg-white rounded-xl shadow-md shadow-[#155dfc] overflow-hidden min-h-[300px]">
          {/* Centered Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-1 -translate-y-1/2 z-10 bg-white border border-[#155dfc] text-[#155dfc] rounded-full p-2 hover:bg-[#155dfc] hover:text-white transition"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 -translate-y-1/2 z-10 bg-white border border-[#155dfc] text-[#155dfc] rounded-full p-2 hover:bg-[#155dfc] hover:text-white transition"
          >
            <FaChevronRight />
          </button>

          {/* Testimonial Content */}
          <div className="relative h-[490px] sm:h-[300px] flex items-center justify-center">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="w-full px-8 flex flex-col items-center text-center"
              >
                <div className="flex text-[#facc15] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <h1 className="text-[20px] font-semibold">{testimonials[current].title}</h1>
                <p className="text-black pl-1.5 lg:pl-0  lg:text-center mb-6 text-lg max-w-xl">
                  “{testimonials[current].message}”
                </p>
                <div className="flex items-center gap-3 justify-center">
                  <div className="w-12 h-12 relative rounded-full overflow-hidden border-2 border-[#155dfc]">
                    <Image
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      fill
                      className=""
                    />
                  </div>
                  <h4 className="text-black font-semibold text-base">{testimonials[current].name}</h4>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > current ? 1 : -1);
                setCurrent(index);
              }}
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
