"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Who have you worked with before?",
    answer:
      "We’ve collaborated with startups, e-commerce brands, agencies, and international clients — delivering results-driven solutions tailored to their goals.",
  },
  {
    question: "What makes your services different from others?",
    answer:
      "We combine creativity, strategy, and data to deliver unique, ROI-focused solutions — not just pretty designs or rankings, but real business growth.",
  },
  {
    question: "Can I see some of your previous work?",
    answer:
      "Yes! You can view case studies and project samples in the Portfolio section to get an idea of our design style and success stories.",
  },
  {
    question: "Do you offer long-term support or just one-time services?",
    answer:
      "We offer both! Whether you need a one-time project or ongoing support (monthly SEO, website maintenance, etc.), we’ve got you covered.",
  },
  {
    question: "How soon can we start working together?",
    answer:
      "We usually onboard new clients within 2–3 business days. Just reach out via the contact form, and we’ll schedule a quick call to discuss your project.",
  },
];

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-16 px-4 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto lg:flex lg:items-start lg:justify-between gap-12">
        
        {/* Heading section */}
        <div className="text-center lg:text-left mb-12 lg:mb-0 lg:max-w-md flex-shrink-0">
          <h2 className="text-[33px] md:text-4xl lg:leading-14 lg:text-5xl font-bold text-black mb-4">
            <span className="text-blue-600">Frequently</span> asked questions!
          </h2>
          <p className="text-black text-lg">
            Answers to the most common questions people ask before working with us.
          </p>
        </div>
  
        {/* FAQs section */}
        <div className="max-w-4xl mx-auto w-full space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border shadow-sm shadow-blue-600 rounded-xl overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 flex justify-between items-center text-left bg-white transition"
                onClick={() => toggle(index)}
              >
                <span className="text-lg font-semibold text-black">{faq.question}</span>
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
  
              <div
                className={`px-6 text-black text-[16px] overflow-hidden transition-all duration-500 ${
                  activeIndex === index ? "max-h-40 py-4" : "max-h-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
}
