import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer Web Development, Cybersecurity, and Data Science & AI services tailored to your business needs.",
  },
  {
    question: "How long does a project typically take?",
    answer:
      "Project timelines vary based on complexity, but we always strive to deliver on or before the committed deadline.",
  },
  {
    question: "What is your payment process?",
    answer:
      "After receiving a quote, you approve and pay securely. We accept various payment methods.",
  },
  {
    question: "Do you offer post-project support?",
    answer:
      "Yes, we provide ongoing support and maintenance depending on the service package selected.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="bg-[#050A2B] py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 text-left">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-[#0A1A30] text-white rounded-xl overflow-hidden shadow-md">
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center p-6 focus:outline-none"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={24} className="text-purple-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 pb-4 text-sm text-gray-300"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
