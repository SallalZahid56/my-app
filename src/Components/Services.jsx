import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import cyber1 from '../assets/Cyber1.jpeg';
import cyber2 from '../assets/Cyber2.jpeg';
import cyber3 from '../assets/Cyber3.jpeg';
import ai1 from '../assets/1.png';
import ai2 from '../assets/2.png';
import ai3 from '../assets/3.png';

const webSteps = [
  {
    title: 'Web Development',
    description: 'We craft responsive, scalable frontend solutions using modern tech like React and Tailwind.',
    image: img1,
  },
  {
    title: 'React Development',
    description: 'Build component-driven applications with powerful state management and fast performance.',
    image: img2,
  },
  {
    title: 'MERN Stack',
    description: 'End-to-end development with MongoDB, Express, React, and Node.js.',
    image: img3,
  },
];

const cyberSteps = [
  {
    title: 'Cybersecurity Consulting',
    description: 'We assess your infrastructure and identify risks before they become breaches.',
    image: cyber1,
  },
  {
    title: 'Threat Detection & Monitoring',
    description: '24/7 monitoring with advanced threat detection systems and reporting.',
    image: cyber2,
  },
  {
    title: 'Compliance & Auditing',
    description: 'Ensure your organization meets ISO, SOC2, and GDPR compliance standards.',
    image: cyber3,
  },
];

const aiSteps = [
  {
    title: 'AI-Powered Automation',
    description: 'Boost efficiency by automating tasks with advanced machine learning algorithms.',
    image: ai1,
  },
  {
    title: 'Predictive Analytics',
    description: 'Leverage historical data to predict trends and enhance business decisions.',
    image: ai2,
  },
  {
    title: 'Deep Learning & NLP',
    description: 'Empower your solutions with state-of-the-art neural networks and language models.',
    image: ai3,
  },
];

const SectionSlider = ({ steps, reverse = false, bgColor = '#050A2B' }) => {
  const titleRef = useRef(null);
  const [step, setStep] = useState(0);
  const [active, setActive] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const lockScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  const unlockScroll = () => {
    document.body.style.overflow = '';
  };

  const handleScroll = useCallback(
    (event) => {
      if (!active || scrolling) return;
      event.preventDefault();

      setScrolling(true);
      const direction = event.deltaY > 0 ? 1 : -1;

      setStep((prev) => {
        const next = prev + direction;

        if (direction > 0 && next >= steps.length) {
          setActive(false);
          return prev;
        }

        if (direction < 0 && next < 0) {
          setActive(false);
          return prev;
        }

        return Math.max(0, Math.min(next, steps.length - 1));
      });

      setTimeout(() => setScrolling(false), 600);
    },
    [active, scrolling, steps.length]
  );

  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.7) {
          setActive(true);
        } else {
          setActive(false);
        }
      },
      { threshold: [0.7] }
    );

    observer.observe(title);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (active) {
      lockScroll();
      window.addEventListener('wheel', handleScroll, { passive: false });
    } else {
      unlockScroll();
      window.removeEventListener('wheel', handleScroll);
    }

    return () => {
      unlockScroll();
      window.removeEventListener('wheel', handleScroll);
    };
  }, [active, handleScroll]);

  return (
    <section
      className="min-h-screen w-full flex items-center justify-center px-4 py-16 sticky top-0 overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className={`space-y-6 text-center md:text-left ${reverse ? 'md:order-2' : ''}`}>
          <h2 ref={titleRef} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            {steps[step].title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-md mx-auto md:mx-0">
            {steps[step].description}
          </p>
          <button
            className="mt-4 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-lg transition duration-300"
            onClick={() => setStep((prev) => (prev + 1) % steps.length)}
          >
            Next Slide
          </button>
        </div>

        {/* Animated Image */}
        <div className={`relative h-[250px] sm:h-[300px] md:h-[400px] overflow-hidden rounded-2xl shadow-xl ${reverse ? 'md:order-1' : ''}`}>
          <AnimatePresence mode="wait">
            <motion.img
              key={steps[step].image}
              src={steps[step].image}
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-100%', opacity: 0 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <div className="w-full">
      {/* Section Heading */}
      <div className="py-16 bg-[#050A2B] text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Services We Offer
        </h2>
        <p className="text-sm sm:text-base text-gray-400 mt-2">
          Discover our core technical solutions
        </p>
      </div>

      {/* Sliders */}
      <SectionSlider steps={webSteps} bgColor="#050A2B" />
      <SectionSlider steps={cyberSteps} reverse bgColor="#050A2B" />
      <SectionSlider steps={aiSteps} bgColor="#050A2B" />
    </div>
  );
};

export default Services;
