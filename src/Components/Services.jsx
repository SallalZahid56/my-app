import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import cyber1 from '../assets/Cyber1.jpeg';
import cyber2 from '../assets/Cyber2.jpeg';
import cyber3 from '../assets/Cyber3.jpeg';

const webSteps = [
  { title: 'Web Development', description: 'We craft responsive, scalable frontend solutions using modern tech like React and Tailwind.', image: img1 },
  { title: 'React Development', description: 'Build component-driven applications with powerful state management and fast performance.', image: img2 },
  { title: 'MERN Stack', description: 'End-to-end development with MongoDB, Express, React, and Node.js.', image: img3 },
];

const cyberSteps = [
  { title: 'Cybersecurity Consulting', description: 'We assess your infrastructure and identify risks before they become breaches.', image: cyber1 },
  { title: 'Threat Detection & Monitoring', description: '24/7 monitoring with advanced threat detection systems and reporting.', image: cyber2 },
  { title: 'Compliance & Auditing', description: 'Ensure your organization meets ISO, SOC2, and GDPR compliance standards.', image: cyber3 },
];

const SectionSlider = ({ steps, reverse = false, bgColor = '#050A2B' }) => {
  const sectionRef = useRef(null);
  const [step, setStep] = useState(0);
  const [active, setActive] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  // Scroll behavior inside the section
  const handleScroll = useCallback(
    (event) => {
      if (!active || scrolling) return;
      event.preventDefault();

      setScrolling(true);

      const direction = event.deltaY > 0 ? 1 : -1;

      setStep((prev) => {
        const next = prev + direction;

        // Unlock scroll only when we're at the end and scrolling down
        if (direction > 0 && next >= steps.length) {
          setActive(false);
          return prev;
        }

        return Math.max(0, Math.min(next, steps.length - 1));
      });

      setTimeout(() => setScrolling(false), 600);
    },
    [active, scrolling, steps.length]
  );

  // Intersection Observer
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio === 1) {
          setActive(true);
        }
      },
      { threshold: 1.0 }
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
    };
  }, []);

  // Enable/Disable wheel listener
  useEffect(() => {
    if (active) {
      window.addEventListener('wheel', handleScroll, { passive: false });
    } else {
      window.removeEventListener('wheel', handleScroll);
    }

    return () => window.removeEventListener('wheel', handleScroll);
  }, [active, handleScroll]);

  return (
    <section
      ref={sectionRef}
      className="h-screen w-full flex items-center justify-center px-6 py-16 sticky top-0"
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className={`space-y-6 text-center md:text-left ${reverse ? 'md:order-2' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white">{steps[step].title}</h2>
          <p className="text-lg text-gray-300 max-w-md">{steps[step].description}</p>
          <p className="text-sm text-purple-400">(Scroll to navigate slides)</p>
        </div>

        {/* Animated Image */}
        <div className={`relative h-[400px] overflow-hidden rounded-2xl shadow-xl ${reverse ? 'md:order-1' : ''}`}>
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
      <SectionSlider steps={webSteps} bgColor="#050A2B" />
      <SectionSlider steps={cyberSteps} reverse bgColor="#0A1A30" />
    </div>
  );
};

export default Services;
