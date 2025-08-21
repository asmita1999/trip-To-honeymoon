import React from "react";
import { FaHotel, FaPlane, FaUmbrellaBeach, FaSpa } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";

const ServicesBanner = [
  {
    id: 1,
    title: "Hotels",
    icon: <FaHotel className="text-indigo-600 text-3xl" />,
    description: "We Provide The Following :",
    features: ["Deluxe Room", "Affordable Cost", "Affordable Cost"],
  },
  {
    id: 2,
    title: "Travel",
    icon: <FaPlane className="text-indigo-600 text-3xl" />,
    description: "We Provide The Following :",
    features: ["Deluxe Room", "Affordable Cost", "Affordable Cost"],
  },
  {
    id: 3,
    title: "Holiday",
    icon: <FaUmbrellaBeach className="text-indigo-600 text-3xl" />,
    description: "We Provide The Following :",
    features: ["Deluxe Room", "Affordable Cost", "Affordable Cost"],
  },
  {
    id: 4,
    title: "Beauty & Spa",
    icon: <FaSpa className="text-indigo-600 text-3xl" />,
    description: "We Provide The Following :",
    features: ["Deluxe Room", "Affordable Cost", "Affordable Cost"],
  },
];

const Services = () => {
  return (
    <div className="py-12 px-6 md:px-16">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold">
          <span className="text-indigo-600">Services</span> We Offer
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-3">
          Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent .
        </p>
      </div>

      {/* Services Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="border rounded-md shadow-sm hover:shadow-md transition bg-white"
          >
            {/* Header with Icon */}
            <div className="flex items-center gap-3 p-4 border-b">
              {service.icon}
              <div>
                <h3 className="font-semibold text-lg">{service.title}</h3>
                <p className="text-gray-500 text-sm">
                  {service.description}
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="p-4 space-y-3">
              {service.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-gray-700"
                >
                  {idx === 0 ? (
                    <FaBed className="text-orange-500" />
                  ) : (
                    <FaDollarSign className="text-orange-500" />
                  )}
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesBanner;
