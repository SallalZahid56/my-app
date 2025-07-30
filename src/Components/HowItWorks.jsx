import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Submit Task',
    description: 'Fill out a simple form with your project details.',
  },
  {
    title: 'Get Quote',
    description: 'Receive a transparent quote tailored to your needs.',
  },
  {
    title: 'Approve & Pay',
    description: 'Review the proposal, approve it, and make secure payment.',
  },
  {
    title: 'Get Your Work',
    description: 'Receive high-quality deliverables on time.',
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-[#050A2B] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12">
          How It Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-[#0A1A30] rounded-2xl p-6 shadow-lg text-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-purple-400 mb-4">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
