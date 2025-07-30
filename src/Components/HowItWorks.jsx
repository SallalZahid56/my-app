import React from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  DollarSign,
  CheckCircle2,
  Inbox,
} from 'lucide-react';

const steps = [
  {
    title: 'Submit Task',
    description: 'Fill out a simple form with your project details.',
    icon: <FileText size={40} className="text-purple-400 mb-4" />,
  },
  {
    title: 'Get Quote',
    description: 'Receive a transparent quote tailored to your needs.',
    icon: <DollarSign size={40} className="text-purple-400 mb-4" />,
  },
  {
    title: 'Approve & Pay',
    description: 'Review the proposal, approve it, and make secure payment.',
    icon: <CheckCircle2 size={40} className="text-purple-400 mb-4" />,
  },
  {
    title: 'Get Your Work',
    description: 'Receive high-quality deliverables on time.',
    icon: <Inbox size={40} className="text-purple-400 mb-4" />,
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-[#050A2B] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12">
          How It Works
        </h2>

        {/* Steps Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative overflow-visible">
                {/* Floating Number partially hidden under card */}
                <div className="absolute top-0 -left-2 z-0 transform -translate-y-1/2 -translate-x-1/2">
                  <div className="bg-purple-600 text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center shadow-md">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </div>
                </div>

                {/* Card */}
                <motion.div
                  className="relative z-10 bg-[#0A1A30] rounded-2xl p-6 pt-10 shadow-lg text-white flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {step.icon}
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-300">{step.description}</p>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Connector Arrows */}
          <div className="hidden lg:flex absolute top-1/2 left-0 right-0 justify-between items-center px-4 z-0 pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-6 h-6 border-t-2 border-r-2 border-purple-500 rotate-45 transform translate-x-4"
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full transition"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
