import React from 'react'

const services = [
  {
    title: 'Hotels',
    icon: '🏨',
    features: ['Deluxe Room', 'Affordable Cost', 'Affordable Cost'],
  },
  {
    title: 'Travel',
    icon: '✈️',
    features: ['Deluxe Room', 'Affordable Cost', 'Affordable Cost'],
  },
  {
    title: 'Holiday',
    icon: '🏖️',
    features: ['Deluxe Room', 'Affordable Cost', 'Affordable Cost'],
  },
  {
    title: 'Beauty & Spa',
    icon: '💆‍♀️',
    features: ['Deluxe Room', 'Affordable Cost', 'Affordable Cost'],
  },
];
const ServicesWeOffer = () => {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-10 animate-fade-in-up">
        <h2 className="text-3xl font-bold">
          <span className="text-indigo-700">Services</span> We Offer
        </h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Plan your perfect honeymoon trip with our exclusive services and make memories that last forever.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="border rounded-lg p-6 w-64 text-center hover:shadow-lg transition animate-fade-in-up"
            style={{ animationDelay: `${idx * 150}ms` }}  // stagger animation delay
          >
            <div className="text-4xl mb-3">{service.icon}</div>
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-gray-500 text-sm mb-3">
              We Provide The Following:
            </p>
            <ul className="text-left text-sm text-gray-700 space-y-1">
              {service.features.map((f, i) => (
                <li key={i}>🔸 {f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};


export default ServicesWeOffer

