"use client";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-[#155dfc] mb-2">Mohsin Arshad</h2>
          <p className="text-white text-sm leading-relaxed">
            Helping brands grow with strategy, design, and visibility.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-[#155dfc]">Quick Links</h4>
          <ul className="space-y-2 text-white text-sm">
            <li><a href="#services" className="hover:text-[#155dfc] transition">Services</a></li>
            <li><a href="#portfolio" className="hover:text-[#155dfc] transition">Portfolio</a></li>
            <li><a href="#testimonials" className="hover:text-[#155dfc] transition">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-[#155dfc] transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-[#155dfc]">Connect With Me</h4>
          <div className="flex gap-4 text-2xl text-[#ffffff]">
            <a href="#" aria-label="Facebook" className="hover:text-[#155dfc] transition"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter" className="hover:text-[#155dfc] transition"><FaTwitter /></a>
            <a href="#" aria-label="Instagram" className="hover:text-[#155dfc] transition"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#155dfc] transition"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t hover:text-[#155dfc]  border-gray-800 pt-4 text-center text-sm text-white">
        © {new Date().getFullYear()} Mohsin Arshad. All rights reserved.
      </div>
    </footer>
  );
}
