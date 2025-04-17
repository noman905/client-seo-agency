"use client";

import Image from "next/image";

// Example project entries
const projects = [
  { image: "/projects/project1.jpg", },
  { image: "/projects/project2.jpg", },
  { image: "/projects/project3.jpg",  },
  { image: "/projects/project4.jpg", },
  { image: "/projects/project5.jpg",  },
  { image: "/projects/project6.jpg",  },
];

export default function RecentProjects() {
  return (
    <section className="bg-white py-16 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Recent <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We bring ideas to life through creative design, SEO, and marketing strategies. Here’s a look at our latest work.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
