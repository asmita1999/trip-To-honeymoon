import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

const tabs = ["Overview", "Itinerary", "Inclusions/Exclusions", "Terms", "Payment Modes"];

// Demo images (replace with real images)
const images = [
  // "https://via.placeholder.com/800x500?text=Main+Image",
  // "https://via.placeholder.com/200x150?text=Image+1",
  // "https://via.placeholder.com/200x150?text=Image+2",
  // "https://via.placeholder.com/200x150?text=Image+3",
  // "https://via.placeholder.com/200x150?text=Image+4",
  // "https://via.placeholder.com/200x150?text=Image+5",
  "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg",
  "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg",
  "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg",
  "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg",
  "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg",
  "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg",
  "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg",
  "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg",
   "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg",
    "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg",
     "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg",
      "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg",
       "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg",
        "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg",
         "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg",
          "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg",
  
];

const InternationalSpecialDetails = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const [mainImage, setMainImage] = useState(images[0]);

  const location = useLocation();
  const navigate = useNavigate();

  const pkg = location.state?.pkg || {
    name: "Package Not Found",
    image: images[0],
    price: "N/A",
  };

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">
      {/* Hero Section */}
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{pkg.name}</h1>
        <p className="text-gray-500">Special Package Details</p>
        <p className="text-blue-600 font-bold mt-1">{pkg.price}</p>
      </div>

      {/* Images Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {/* Big Image */}
        <div className="md:col-span-2">
          <img
            src={mainImage}
            alt="Main"
            className="w-full h-[400px] object-cover rounded-lg shadow"
          />
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-2 gap-2">
          {images.slice(1, 5).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumb ${index}`}
              className="w-full h-[95px] object-cover rounded-lg cursor-pointer hover:opacity-80"
              onClick={() => setMainImage(img)}
            />
          ))}
          <button
            onClick={() => navigate("/all-images", { state: { images } })}
            className="col-span-2 bg-gray-200 text-center py-8 rounded-lg font-medium text-blue-600 hover:bg-gray-300"
          >
            View All Images
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-6 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 font-medium ${
              activeTab === tab
                ? "text-red-500 border-b-2 border-red-500"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        {activeTab === "Overview" && (
          <p className="text-gray-700">
            Welcome to {pkg.name}! This package offers a great escape with curated stays and activities.
          </p>
        )}
        {activeTab === "Itinerary" && (
          <ul className="list-disc pl-6 text-gray-700">
            <li>Day 1: Arrival</li>
            <li>Day 2: Sightseeing</li>
            <li>Day 3: Adventure activities</li>
          </ul>
        )}
        {activeTab === "Inclusions/Exclusions" && (
          <ul className="list-disc pl-6 text-gray-700">
            <li>✅ Accommodation, Meals, Sightseeing</li>
            <li>❌ Airfare/Train fare</li>
          </ul>
        )}
        {activeTab === "Terms" && (
          <p className="text-gray-700">
            Terms and conditions apply. Ensure valid ID proof during travel.
          </p>
        )}
        {activeTab === "Payment Modes" && (
          <ul className="list-disc pl-6 text-gray-700">
            <li>👉 40% advance at confirmation</li>
            <li>👉 40% before 21 days from journey</li>
            <li>👉 Remaining balance before 15 days</li>
          </ul>
        )}
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => navigate("/book-now", { state: { pkg } })}
          className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600"
        >
          Book Now
        </button>
        <button className="bg-gray-700 text-white px-5 py-2 rounded hover:bg-gray-800">
          Enquire Now
        </button>
        <button
          onClick={() => navigate("/all-images", { state: { images } })}
          className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600"
        >
          View All Images
        </button>
      </div>

      {/* Reviews */}
      <div className="bg-gray-50 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        <div className="mb-4">
          <p className="italic text-gray-700">
            "This tour exceeded expectations. The hotels were excellent and the itinerary was perfect."
          </p>
          <p className="font-semibold mt-2">- Rajesh Kumar, March 2023</p>
        </div>
        <div>
          <p className="italic text-gray-700">
            "Excellent package for the price. The guide was knowledgeable and transportation comfortable."
          </p>
          <p className="font-semibold mt-2">- Priya Sharma, Jan 2023</p>
        </div>
      </div>
    </div>
  );
};

export default InternationalSpecialDetails;
