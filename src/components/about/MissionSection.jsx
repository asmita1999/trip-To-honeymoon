import React from 'react';
import { motion } from 'framer-motion';

const MissionSection = () => {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-pink-400 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            At TripToHoneymoon, we believe that your honeymoon should be as unique and special as your love story.
            We dedicate ourselves to creating personalized, romantic getaways that mark the perfect beginning
            to your journey as a married couple.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 border-4 border-rose-200 rounded-lg rotate-3 opacity-70"></div>
            <img
              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Romantic getaway"
              className="relative z-10 rounded-lg shadow-xl w-full h-96 object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-blue-700 mb-6">Why Choose Us?</h3>
            <ul className="space-y-4">
              {[
                'Personalized itineraries tailored to your unique love story',
                'Exclusive access to romantic accommodations and experiences',
                '24/7 support during your trip to ensure everything is perfect',
                'Sustainable travel options that respect local communities'
              ].map((text, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-rose-500 text-xl mr-2">✓</span>
                  <span className="text-lg">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
