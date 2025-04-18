"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

// Services Array
const services = [
  {
    title: 'Digital Marketing',
    icon: '/Services/service1.png',
  },
  {
    title: 'SEO',
    icon: '/Services/service2.png',
  },
  {
    title: 'Off Page SEO',
    icon: '/Services/service5.png',
  },
  {
    title: 'ON Page SEO',
    icon: '/Services/service6.png',
  },
  {
    title: 'Web Designing',
    icon: '/Services/service3.png',
  },
  {
    title: 'Content Writing',
    icon: '/Services/service4.png',
  },
];

export default function Services() {
  const containerRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      setScrollWidth(container.scrollWidth / 2); // half since we duplicate the array
    }
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1 }}
      viewport={{ once: true }}
      className="bg-white py-16 px-4 md:px-12 lg:px-20"
      id="services"
    >
      <div className="max-w-7xl mx-auto mt-5  text-center">
        <h2 className="text-4xl lg:text-[46px] font-bold text-black mb-4">Our Services</h2>
        <p className="text-lg text-black mb-10 max-w-2xl mx-auto">
          We offer a full suite of digital solutions to help your brand grow online.
        </p>

        {/* Scrolling Boxes */}
        <div className="overflow-hidden relative">
          <motion.div
            ref={containerRef}
            className="flex gap-6 whitespace-nowrap"
            animate={{ x: -scrollWidth }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration: 10,
              ease: 'linear',
            }}
          >
            {[...services, ...services].map((service, index) => (
              <AnimatedCard key={`${service.title}-${index}`} {...service} />
            ))}
          </motion.div>
        </div>

        {/* CTA Button */}
        <Link href='allservices'>
        <motion.button
          whileHover={{ scale: 1.02 }}
          className="mt-10 bg-[#155dfc] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-black transition-all duration-300"
        >
          View All Services
        </motion.button>
        </Link>
      </div>
    </motion.section>
  );
}

const AnimatedCard = ({ icon, title }) => {
  return (
    <motion.div
      className="min-w-[240px] border-2 border-[#0633e8]    bg-white   rounded-xl p-6 flex flex-col items-center justify-center   transition-transform duration-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.1 }}
    >
      <Image
        src={icon}
        alt={title}
        width={90}
        height={90}
        className="object-contain mb-4"
      />
      <h3 className="text-black font-semibold text-lg">{title}</h3>
    </motion.div>
  );
};
