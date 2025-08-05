import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // <-- ADD THIS
import logo from '../assets/Diary-3.png';
import { Menu, X, LogIn } from 'lucide-react'; // You can use LogIn icon or any other

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="flex items-center justify-between px-6 py-4 md:px-8 md:py-6">
        {/* Logo */}
        <div className="relative flex items-center">
          <img
            src={logo}
            alt="Taskubar Logo"
            className="h-[40px] w-auto opacity-100 mix-blend-screen"
          />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-8 text-white text-lg font-medium mr-4">
          <li><a href="#Hero" className="hover:text-purple-400 transition">Home</a></li>
          <li><a href="#Services" className="hover:text-purple-400 transition">Services</a></li>
          <li><a href="#HowItWorks" className="hover:text-purple-400 transition">How It Works</a></li>
          <li><a href="#Testimonials" className="hover:text-purple-400 transition">Testimonials</a></li>
          <li><a href="#FAQ" className="hover:text-purple-400 transition">FAQs</a></li>
          <li><a href="#ContactSection" className="hover:text-purple-400 transition">Contact Us</a></li>
          
          {/* ✅ Login Link/Button */}
          <li>
            <Link
              to="/login"
              className="bg-purple-600 hover:bg-purple-700 transition text-white px-4 py-2 rounded-md text-sm"
            >
              Login
            </Link>
          </li>
        </ul>

        {/* Hamburger - Mobile */}
        <div className="md:hidden text-white z-50" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed top-0 left-0 w-full h-screen bg-[#050A2B] bg-opacity-95 flex flex-col items-center justify-center space-y-8 text-white text-xl font-semibold transition-all duration-300">
            <a href="#Hero" onClick={toggleMenu} className="hover:text-purple-400">Home</a>
            <a href="#Services" onClick={toggleMenu} className="hover:text-purple-400">Services</a>
            <a href="#HowItWorks" onClick={toggleMenu} className="hover:text-purple-400">How It Works</a>
            <a href="#Testimonials" onClick={toggleMenu} className="hover:text-purple-400">Testimonials</a>
            <a href="#FAQ" onClick={toggleMenu} className="hover:text-purple-400">FAQs</a>
            <a href="#ContactSection" onClick={toggleMenu} className="hover:text-purple-400">Contact Us</a>
            
            {/* ✅ Login Button in Mobile */}
            <Link
              to="/login"
              onClick={toggleMenu}
              className="bg-purple-600 hover:bg-purple-700 transition text-white px-6 py-2 rounded-md text-lg"
            >
              Login
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
