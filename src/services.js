"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';

// Array of services
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
    title: 'Web Designing',
    icon: '/Services/service3.png',
  },
  {
    title: 'Content Writing',
    icon: '/Services/service4.png',
  },
];

export default function Services() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white py-16 px-4 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto mt-5 text-center">
        {/* Heading */}
        <h2 className="text-4xl lg:text-[46px] font-bold text-black mb-4">Our Services</h2>
        <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
          We offer a full suite of digital solutions to help your brand grow online.
        </p>

        {/* Scrolling Boxes */}
        <div className="overflow-hidden  relative">
          <motion.div
            className="flex gap-6 whitespace-nowrap"
            initial={{ x: 0 }}
            animate={{ x: '-50%' }}
            transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
          >
            {[...services, ...services].map((service, index) => (
              <AnimatedCard key={`${service.title}-${index}`} {...service} />
            ))}
          </motion.div>
        </div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-10 bg-[#155dfc] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-black transition-all duration-300"
        >
          View All Services
        </motion.button>
      </div>
    </motion.section>
  );
}

// ✅ Named export (not default)
const AnimatedCard=({ icon, title })=> {
  return (
    <div className=''>
    <motion.div
      className="min-w-[240px] bg-[#ffffff] border border-[#000] rounded-xl p-6 flex flex-col items-center justify-center shadow-md hover:scale-105 transition-transform duration-300"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
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
    </div>
  );
}
