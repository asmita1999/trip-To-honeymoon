import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Luxury Accommodations",
    description: "Stay at the world's most romantic resorts and boutique hotels handpicked for their exceptional service and intimate settings.",
    icon: "🏨"
  },
  {
    title: "Personalized Itineraries",
    description: "Every journey is custom-crafted to reflect your unique love story and preferences.",
    icon: "✈️"
  },
  {
    title: "Romantic Experiences",
    description: "From private dinners on the beach to couples spa treatments, we create magical moments you'll cherish forever.",
    icon: "🌹"
  },
  {
    title: "24/7 Support",
    description: "Our dedicated concierge team is available around the clock to ensure your honeymoon is flawless.",
    icon: "📱"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-4"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto"
        >
          We handle every detail so you can focus on celebrating your love
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-rose-700 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
