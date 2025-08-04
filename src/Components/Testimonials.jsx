import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Jane Doe',
    role: 'Product Manager, TechCorp',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    quote: 'Outstanding work! They delivered beyond expectations with professionalism and speed.',
  },
  {
    name: 'John Smith',
    role: 'Founder, DevStart',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'Truly impressed with the UI and performance of the final product. Highly recommended.',
  },
  {
    name: 'Emily Chen',
    role: 'CTO, Innovexa',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'Superb communication and clean code — a joy to work with from start to finish.',
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000); // Auto-slide every 6s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#050A2B] py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12">
          What Our Clients Say
        </h2>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="flex flex-col items-center bg-[#0f2340] text-white p-8 rounded-2xl shadow-xl max-w-xl mx-auto"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={testimonials[index].image}
                alt={testimonials[index].name}
                className="w-20 h-20 rounded-full object-cover border-4 border-purple-500 mb-4"
              />
              <p className="text-sm sm:text-base text-gray-300 italic mb-4">
                “{testimonials[index].quote}”
              </p>
              <h4 className="font-semibold text-lg">{testimonials[index].name}</h4>
              <span className="text-purple-400 text-sm">{testimonials[index].role}</span>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mt-8 px-8">
            <button
              onClick={prevSlide}
              className="text-purple-400 hover:text-purple-500 transition"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={nextSlide}
              className="text-purple-400 hover:text-purple-500 transition"
            >
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
