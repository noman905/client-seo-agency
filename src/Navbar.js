"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiChevronDown } from 'react-icons/fi';

// Nav links array
const navLinks = [
  'Home',
  'Services',
  'Blog',
  'Experience',
  
  'Courses',
  'About Us',
];

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/logo.png" alt="Logo" width={140} height={40} />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-6 items-center text-black font-medium">
            {navLinks.map((item, i) => (
              <div key={i} className="relative group cursor-pointer">
                <a
                  href={`#${item}`}
                  className="transition-all duration-300 hover:text-blue-600"
                >
                  <div className="flex items-center">
                    {item}
                    {['Blog', 'Courses', 'About Us'].includes(item) && (
                      <FiChevronDown className="w-4 h-4 ml-1" />
                    )}
                  </div>
                </a>
                <div className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
              </div>
            ))}

            {/* CTA Button */}
            <Link href="/contact">
              <button className="ml-4 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#082fca] transition duration-300">
                Book 1:1 Discover call
              </button>
            </Link>
          </nav>

          {/* Mobile Toggle Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-black focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    !isMobileMenuOpen
                      ? 'M4 6h16M4 12h16M4 18h16'
                      : 'M6 18L18 6M6 6l12 12'
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden flex flex-col items-center text-center space-y-4 pb-4 text-black font-medium animate-fadeIn">
            {navLinks.map((item, i) => (
              <Link
                key={i}
                href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="hover:text-blue-600"
              >
                {item}
              </Link>
            ))}
            <Link href="/contact">
              <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#082fca] transition duration-300">
                Book 1:1 Discover call
              </button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
