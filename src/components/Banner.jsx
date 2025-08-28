import React from 'react';
import bannerImage from './../assets/banner/banner2.jpg'

const stats = [
  { label: "Listing", value: 344, icon: "📋" },
  { label: "Users", value: 344, icon: "👤" },
  { label: "Categories", value: 344, icon: "📂" },
  { label: "Listing Types", value: 344, icon: "🗂️" },
];

const Banner = () => {
  return (
    <section
      className="relative w-full h-[300px] bg-cover bg-center border-y-4 border-gray-500 mb-6"
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Stats Content */}
      <div className="relative z-10 max-w-6xl mx-auto h-full flex items-center justify-between px-4">
        {stats.map((stat, index) => (
          <div key={index} className="text-white text-center space-y-1 flex-1">
            <div className="text-3xl">{stat.icon}</div>
            <h2 className="text-4xl font-bold">{stat.value}</h2>
            <p className="text-lg font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;

