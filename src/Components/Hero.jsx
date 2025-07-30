import React from 'react';
import bgImage from '../assets/hero.png'; // Your blurred colorful background image

const Hero = () => {
  return (
    <section
      className="min-h-[200vh] relative flex items-center justify-center text-white px-4"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#050A2B] bg-opacity-10 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mt-[-300px] md:mt-[-400px] lg:mt-[-500px] px-2">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 leading-tight">
          <div>
            <span className="text-gray-300">Tech Assignments,</span>{' '}
            <span className="text-white">Handled With Care</span>
          </div>
          <div>
            <span className="text-gray-300">Expert Help in</span>{' '}
            <span className="text-white">Every Field</span>
          </div>
        </h1>

        {/* Paragraph */}
        <p className="text-gray-300 text-base md:text-lg font-regular mb-8 leading-relaxed">
          <div>From landing pages to data pipelines — we bring your academic & technical projects to life.</div>
          <div>Submit your task, track its status, and receive high-quality results — no guesswork, just delivery.</div>
        </p>

        {/* Button */}
        <button
          className="px-8 py-3 rounded-full text-white font-semibold hover:opacity-90 transition"
          style={{ backgroundColor: '#6600EF' }}
        >
          Our Services
        </button>
      </div>
    </section>
  );
};

export default Hero;