"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// First row of logos
const brandLogosRow1 = [
  "/brands/brand1.avif",
  "/brands/brand2.avif",
  "/brands/brand3.avif",
  "/brands/brand4.avif",
  "/brands/brand6.avif",
  
  
];

// Second row of brands
const brandLogosRow2 = [
  "/brands/brand8.avif",
  "/brands/brand9.webp",
  "/brands/brand10.webp",
  "/brands/brand11.avif",
  "/brands/brand12.avif",
  "/brands/brand8.avif",
];

export default function TrustedByTopBrands() {
  return (
    <section className="py-16  px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4x lg:text-[43px] font-bold text-black mb-2">
          Trusted by <span className="text-blue-600">Top Brands</span>
        </h2>
        <p className="text-lg text-gray-700 mb-10">
          Brands that demand results choose us. From startups to industry leaders, we’re proud to be the digital partner of choice.
        </p>

        {/* First Row */}
        <div className="overflow-hidden mb-6">
          <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
            }}
          >
            {[...brandLogosRow1, ...brandLogosRow1].map((logo, index) => (
              <div key={index} className="w-60 h-46 relative flex-shrink-0">
                <Image
                  src={logo}
                  alt={`Brand Logo Row 1 - ${index + 1}`}
                  fill
                  className=""
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second Row */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
            }}
          >
            {[...brandLogosRow2, ...brandLogosRow2].map((logo, index) => (
              <div key={index} className="w-60 h-46 relative flex-shrink-0">
                <Image
                  src={logo}
                  alt={`Brand Logo Row 2 - ${index + 1}`}
                  fill
                  className=""
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
