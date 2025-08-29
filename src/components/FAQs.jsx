import React, { useState } from "react";

const faqs = [
  {
    question: "Which honeymoon destinations are currently the most popular?",
    answer:
      "Our most popular destinations include the Maldives, Bali, Santorini, Paris, Mauritius, and Phuket. We continuously update our packages based on seasonal trends and traveler preferences.",
  },
  {
    question: "Can we fully customize our honeymoon itinerary?",
    answer:
      "Yes, all our honeymoon packages are fully customizable — from flights and accommodations to romantic experiences like private dinners, spa treatments, and excursions.",
  },
  {
    question: "Do you help with visas, flights, and travel insurance?",
    answer:
      "Absolutely. We assist with visa documentation, flight bookings, and travel insurance to ensure your trip is stress-free from start to finish.",
  },
  {
    question: "Is it possible to plan a last-minute honeymoon?",
    answer:
      "Yes, we offer last-minute honeymoon planning services depending on availability. We recommend contacting us at least 2 weeks in advance for better options and smoother arrangements.",
  },
  {
    question: "Are there any budget-friendly honeymoon options?",
    answer:
      "Definitely! We offer a range of packages to suit different budgets without compromising on the romantic experience. Speak with our consultants to find the best fit for your needs.",
  },
  {
    question: "Do you offer special add-ons like candlelight dinners or surprise gifts?",
    answer:
      "Yes, we can include a variety of romantic add-ons such as private beach dinners, couple spa treatments, honeymoon room décor, and surprise welcome gifts.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-pink-200 rounded-lg shadow-md transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 focus:outline-none flex justify-between items-center bg-pink-50 hover:bg-pink-100"
            >
              <span className="font-semibold text-black">{faq.question}</span>
              <span className="text-pink-600 text-xl">
                {openIndex === index ? "-" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 text-gray-700 bg-white">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
