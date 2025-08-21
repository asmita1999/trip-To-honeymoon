import React from 'react';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className="bg-indigo-900 text-white p-4 rounded-lg flex flex-col sm:flex-row flex-wrap items-center gap-4 w-full max-w-4xl mx-auto">
      <span className="font-medium text-lg">Find Your Holiday</span>

      <div className="flex items-center gap-2 border-l sm:border-l border-white pl-4">
        <FaMapMarkerAlt />
        <input
          type="text"
          placeholder="Where"
          className="bg-white text-black rounded px-3 py-1 w-32 sm:w-48 outline-none"
        />
      </div>

      <div className="flex items-center gap-2">
        <FaCalendarAlt />
        <input
          type="date"
          className="bg-white text-black rounded px-3 py-1 w-32 sm:w-48 outline-none"
        />
      </div>

      <button className="bg-white text-indigo-900 px-4 py-1 rounded hover:bg-gray-100 transition">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
