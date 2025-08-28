import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Consultation',
    desc: 'We understand your vision and preferences.',
    icon: '🗣️',
  },
  {
    title: 'Customization',
    desc: 'Tailored itinerary designed to match your love story.',
    icon: '📝',
  },
  {
    title: 'Confirmation',
    desc: 'Finalize and book your dream honeymoon.',
    icon: '✅',
  },
  {
    title: 'Celebrate',
    desc: 'Enjoy a romantic getaway of a lifetime!',
    icon: '🎉',
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-pink-500 mb-12"
        >
          How It Works
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-10">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-rose-50 p-6 rounded-lg shadow text-center"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
