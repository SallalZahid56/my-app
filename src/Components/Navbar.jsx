import React, { useState } from 'react';
import logo from '../assets/Diary-3.png';
import { Menu, X } from 'lucide-react'; // Use Lucide icons (or switch to any icon lib you like)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="flex items-center justify-between px-6 py-4 md:px-8 md:py-6">
        {/* Logo and Name */}
        <div className="relative flex items-center">
          <img
            src={logo}
            alt="Taskubar Logo"
            className="h-[40px] w-auto opacity-100 mix-blend-screen"
          />
          <span className="absolute left-[50px] top-[10px] -translate-y-[15%] text-white font-neuePlak font-bold text-[25px] leading-[100%] tracking-[0%]">
            Taskubar
          </span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-white text-lg font-thick mr-[20px]">
          <li><a href="#" className="hover:text-purple-400 transition">Home</a></li>
          <li><a href="#" className="hover:text-purple-400 transition">PDF Reader</a></li>
          <li><a href="#" className="hover:text-purple-400 transition">Services</a></li>
          <li><a href="#" className="hover:text-purple-400 transition">About us</a></li>
        </ul>

        {/* Hamburger Icon - Mobile Only */}
        <div className="md:hidden text-white z-50" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed top-0 left-0 w-full h-screen bg-[#050A2B] bg-opacity-95 flex flex-col items-center justify-center space-y-8 text-white text-xl font-semibold transition-all duration-300">
            <a href="#" onClick={toggleMenu} className="hover:text-purple-400">Home</a>
            <a href="#" onClick={toggleMenu} className="hover:text-purple-400">PDF Reader</a>
            <a href="#" onClick={toggleMenu} className="hover:text-purple-400">Services</a>
            <a href="#" onClick={toggleMenu} className="hover:text-purple-400">About us</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
