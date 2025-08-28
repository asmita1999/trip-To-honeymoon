import React from 'react';
import travelVideo from '../../assets/videos/hero.mp4';

const BlogHero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src={travelVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay (for readability) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 text-center text-white">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Welcome to TripToHoneymoon
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Discover amazing places, plan unforgettable trips, and live the journey of your dreams.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
