import React from "react";
import { useLocation } from "react-router-dom";

const BookNowPage = () => {
  const location = useLocation();
  const pkg = location.state?.pkg || { name: "Unknown Package" };

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">Book Now - {pkg.name}</h1>
      <form className="grid grid-cols-1 gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="border p-3 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border p-3 rounded"
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="border p-3 rounded"
        />
        <textarea
          placeholder="Message"
          className="border p-3 rounded"
          rows="4"
        ></textarea>
        <button className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600">
          Submit Booking
        </button>
      </form>
    </div>
  );
};

export default BookNowPage;
