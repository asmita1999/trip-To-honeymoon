import React from "react";
import { useLocation } from "react-router-dom";

const AllImagesPage = () => {
  const location = useLocation();
  const images = location.state?.images || [];

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">All Images</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`All ${index}`}
            className="w-full h-[200px] object-cover rounded-lg shadow"
          />
        ))}
      </div>
    </div>
  );
};

export default AllImagesPage;
