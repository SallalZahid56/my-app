import React from 'react';
import bgImage from '../assets/hero.png';

const Hero = () => {
  return (
    <section
      className="min-h-screen relative flex items-center justify-center text-white px-4"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#050A2B] bg-opacity-60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-4 py-16 sm:py-20 md:py-32 lg:py-40">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
          <span className="block text-gray-300">Tech Assignments,</span>
          <span className="block text-white">Handled With Care</span>
          <span className="block mt-2 text-gray-300">Expert Help in</span>
          <span className="block text-white">Every Field</span>
        </h1>

        {/* Paragraph */}
        <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
          From landing pages to data pipelines — we bring your academic & technical projects to life.
          Submit your task, track its status, and receive high-quality results — no guesswork, just delivery.
        </p>

        {/* Button */}
        <button
          className="px-8 py-3 rounded-full text-white font-semibold hover:opacity-90 transition bg-[#6600EF]"
        >
          Our Services
        </button>
      </div>
    </section>
  );
};

export default Hero;
