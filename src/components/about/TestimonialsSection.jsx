import React from 'react';
import { motion } from 'framer-motion';


const testimonials = [
  {
    quote:
      "Our honeymoon was a dream come true thanks to this amazing service!",
    author: "Ayesha & Sameer",
    location: "Karachi, Pakistan",
  },
  {
    quote:
      "The perfect blend of adventure and relaxation. Highly recommend!",
    author: "Fatima & Ali",
    location: "Lahore, Pakistan",
  },
  {
    quote:
      "Every detail was flawless, making our honeymoon unforgettable.",
    author: "Sara & Bilal",
    location: "Islamabad, Pakistan",
  },
];

const TestimonialsSection = () => {
  return (
     <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-rose-800 mb-4">
            Love Stories
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Hear from couples who began their forever journey with us
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-rose-500 text-4xl mb-4">"</div>
              <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
              <div className="border-t border-rose-100 pt-4">
                <p className="font-bold text-rose-700">{testimonial.author}</p>
                <p className="text-gray-600">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
