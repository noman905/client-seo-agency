"use client";

import Image from 'next/image';

// Updated services array with descriptions
const services = [
  {
    title: 'Digital Marketing',
    icon: '/Services/service1.png',
    description: 'Grow your online presence through data-driven digital marketing strategies tailored to your goals.',
  },
  {
    title: 'SEO',
    icon: '/Services/service2.png',
    description: 'Improve your website’s visibility and rank higher on search engines with effective SEO techniques.',
  },
  {
    title: 'Off Page SEO',
    icon: '/Services/service5.png',
    description: 'Boost your domain authority with backlinks, outreach, and off-site optimization strategies.',
  },
  {
    title: 'ON Page SEO',
    icon: '/Services/service6.png',
    description: 'Optimize content, meta tags, and site structure for better user experience and search rankings.',
  },
  {
    title: 'Web Designing',
    icon: '/Services/service3.png',
    description: 'Create modern, responsive, and user-friendly websites that engage and convert visitors.',
  },
  {
    title: 'Content Writing',
    icon: '/Services/service4.png',
    description: 'Engage your audience with SEO-friendly, valuable content tailored to your brand’s voice.',
  },
];

export default function AllServices() {
  return (
    <section className="bg-white py-16 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            All <span className="text-blue-600">Our Services</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Explore our core offerings — crafted to drive growth and deliver measurable results.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-black shadow-sm shadow-blue-600  rounded-xl p-6 flex flex-col items-center text-center bg-white hover:shadow-md transition"
            >
              <Image
                src={service.icon}
                alt={service.title}
                width={80}
                height={80}
                className="object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-black mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
