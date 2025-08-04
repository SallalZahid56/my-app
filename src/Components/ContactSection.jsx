import React from 'react';
import logo from '../assets/logo.png';

const ContactSection = () => {
  return (
    <section className="relative text-white rounded-3xl overflow-hidden my-12 mx-auto max-w-[1100px] px-4">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 z-0 rounded-3xl"
        style={{
          background:
            'radial-gradient(132.49% 169.28% at 5.04% 7.79%, rgba(113, 31, 249, 0.8) 0%, rgba(63, 50, 217, 0.8) 100%)',
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-10 py-16 sm:py-20 gap-10">
        {/* Left Content */}
        <div className="text-center lg:text-left max-w-lg">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-4">
            Contact Us<br />Today!
          </h2>
          <p className="text-base sm:text-lg text-white/80 mb-6">
            Let&apos;s explore the future of AI together
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
            Contact Us
          </button>
        </div>

        {/* Logo for Desktop Only */}
        <div className="hidden lg:block absolute bottom-[-450px] right-[-1280px] z-0 pointer-events-none">
          <img
            src={logo}
            alt="Decorative logo"
            className="w-[1300px] md:w-[1600px] lg:w-[1900px] object-contain"
          />
        </div>

        {/* Optional: Smaller Image for Mobile/Tablet */}
        <div className="lg:hidden w-full flex justify-center">
          <img
            src={logo}
            alt="Decorative logo"
            className="w-[300px] opacity-20 mt-10"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
