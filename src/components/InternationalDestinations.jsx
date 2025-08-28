import React from "react";
import { Link } from "react-router-dom";

const destinations = [
  {
    id: 1,
    name: "Bali Special Package",
    location: "Bali, Indonesia",
    price: "₹On Request",
    image: "https://images.unsplash.com/photo-1589308078054-832d0a4bd6e9",
    slug: "bali",
  },
  {
    id: 2,
    name: "European Wonders Tour",
    location: "Paris, Rome, Venice",
    price: "On Request",
    image: "https://images.unsplash.com/photo-1543340713-8a6f3d5b8f3b",
    slug: "europe",
  },
  {
    id: 3,
    name: "Dubai Shopping Festival",
    location: "Dubai",
    price: "₹On Request",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
    slug: "dubai",
  },
  {
    id: 4,
    name: "Thailand Beach Vacation",
    location: "Phuket, Bangkok",
    price: "₹On Request",
    image: "https://images.unsplash.com/photo-1549887534-7af2b85a6e13",
    slug: "thailand",
  },
  {
    id: 5,
    name: "Singapore City Tour",
    location: "Singapore",
    price: "On Request",
    image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc",
    slug: "singapore",
  },
  {
    id: 6,
    name: "Maldives Honeymoon",
    location: "Male, Maldives",
    price: "On Request",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    slug: "maldives",
  },
];

const InternationalDestinations = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6">
        popular international destinations
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {destinations.map((dest) => (
          <div
            key={dest.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={dest.image}
              alt={dest.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{dest.name}</h3>
              <p className="text-gray-500">{dest.location}</p>
              <p className="text-blue-600 font-semibold">{dest.price}</p>
              <Link
                to={`/destination/${dest.slug}`}
                className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded"
              >
                Explore
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternationalDestinations;
