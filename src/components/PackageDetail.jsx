import React, { useState } from "react";

const tabs = ["Overview", "Itinerary", "Inclusions/Exclusions", "Terms", "Payment Modes"];

const PackageDetail = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">
      {/* Hero Section */}
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Blissful Andaman</h1>
        <p className="text-gray-500">Andaman • Custom • As per the destination</p>
        <p className="text-yellow-500 mt-1">(24 reviews)</p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-6 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 font-medium ${
              activeTab === tab ? "text-red-500 border-b-2 border-red-500" : "text-gray-600"
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
            Welcome to Blissful Andaman! This package offers a serene escape to Andaman
            islands with perfectly curated stays and activities.
          </p>
        )}
        {activeTab === "Itinerary" && (
          <ul className="list-disc pl-6 text-gray-700">
            <li>Day 1: Arrival at Port Blair</li>
            <li>Day 2: Havelock Island tour</li>
            <li>Day 3: Neil Island and return</li>
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
            <li>👉 Airfare/Train fare require 100% at booking</li>
            <li>👉 Minimum 40% advance at confirmation</li>
            <li>👉 40% before 21 days from journey</li>
            <li>👉 Remaining balance before 15 days</li>
          </ul>
        )}
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mb-10">
        <button className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600">
          Book Now
        </button>
        <button className="bg-gray-700 text-white px-5 py-2 rounded hover:bg-gray-800">
          Enquire Now
        </button>
        <button className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600">
          View All Images
        </button>
      </div>

      {/* Customer Reviews */}
      <div className="bg-gray-50 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        <div className="mb-4">
          <p className="italic text-gray-700">
            "This tour exceeded all our expectations. The hotels were excellent and the
            itinerary was perfectly planned."
          </p>
          <p className="font-semibold mt-2">- Rajesh Kumar, March 2023</p>
        </div>
        <div>
          <p className="italic text-gray-700">
            "For the price we paid, this was an excellent package. The guide was
            knowledgeable and the transportation was comfortable."
          </p>
          <p className="font-semibold mt-2">- Priya Sharma, Jan 2023</p>
        </div>
      </div>
    </div>
  );
};

export default PackageDetail;
