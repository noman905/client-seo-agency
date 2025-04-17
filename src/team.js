"use client";
import Image from "next/image";

const teamMembers = [
  {
    name: "Nazia Babar",
    role: "Content Writer",
    image: "/team/team1.webp",
  },
  {
    name: "M. Uzair",
    role: "SEO Expert",
    image: "/team/team2.webp",
  },
  
  {
    name: "Umm Fatima",
    role: "Content Writer",
    image: "/team/team3.webp",
  },
  
  {
    name: "Kinza Arshad",
    role: "SEO Expert",
    image: "/team/team4.webp",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-black py-16 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Team</h2>
        <p className="mb-10 text-gray-300 text-base md:text-lg">
          Meet the talented professionals behind our success — experts dedicated to delivering results and value.
        </p>

        <div className="flex flex-wrap justify-between gap-y-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-[48%] sm:w-[48%] md:w-[30%] lg:w-[22%] bg-white p-4 rounded-xl shadow-lg hover:shadow-[#155dfc] transition-all duration-300"
            >
              <div className="w-full aspect-[4/5] relative rounded-xl overflow-hidden mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-lg font-semibold mb-1 text-black">{member.name}</h4>
              <p className="text-[#155dfc] font-bold text-sm">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="#contact"
            className="inline-block px-6 py-2 border border-[#155dfc] rounded-md bg-[#155dfc] text-white hover:bg-white hover:text-[#155dfc] transition font-semibold"
          >
            Book A Discovery Call
          </a>
        </div>
      </div>
    </section>
  );
}
