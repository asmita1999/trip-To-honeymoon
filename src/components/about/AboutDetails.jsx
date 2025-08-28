import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { getHeroSection } from "../api/api";

const AboutDetails = () => {
  const navigate = useNavigate();

  const [videoUrl, setVideoUrl] = useState();
  const [loading, setLoading] = useState(true);
  console.log("video url-->", videoUrl);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        setLoading(true);

        const { data } = await getHeroSection("about");
        console.log(data);

        setVideoUrl(data?.publicUrl[0]);
      } catch (error) {
        console.error("Error loading video:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, []);

  return (
    <div className="relative">
      {/* Hero Video Section */}
      <div className="relative w-full h-screen max-h-[80vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          {videoUrl && <source src={videoUrl} type="video/mp4" />}
          Your browser does not support the video tag.
        </video>

        {/* Video overlay with text */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Discover the World with TipToHoneymon
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
              Crafting unforgettable journeys for your perfect honeymoon
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 space-y-28 text-gray-800">
        {/* Introduction Section */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-pink-600">
            Welcome to TipToHoneymon!
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            TipToHoneymon is your trusted partner for crafting unforgettable honeymoon experiences tailored just for you. With years of expertise in creating magical journeys, we help you start your new chapter with memories to last a lifetime.
          </p>
        </div>

        {/* About Us Section with Video */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <video
            src="https://images.pexels.com/photos/540977/pexels-photo-540977.jpeg"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto rounded-xl shadow-lg"
          />
          <div className="space-y-4">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-pink-600">About Us</h2>
              <p className="max-w-3xl mx-auto text-lg text-gray-600">
                We specialize in honeymoon planning, ensuring every moment of your romantic journey is seamless, luxurious, and personalized.
              </p>
            </div>
            <h3 className="text-3xl font-semibold text-pink-600">Our Story</h3>
            <p className="text-lg text-gray-700">
              Born out of passion for travel and love, TipToHoneymon began to transform honeymoon dreams into reality. We combine expert knowledge with personal touch to curate exclusive experiences just for you.
            </p>
          </div>
        </div>

        {/* What Sets Us Apart Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h3 className="text-3xl font-semibold text-pink-600">
              What Sets Us Apart
            </h3>
            <p className="text-lg text-gray-700">
              From tailored itineraries to 24/7 support, TipToHoneymon is committed to making your honeymoon stress-free and magical. Our dedicated team works with you personally to craft every detail.
            </p>
          </div>
          <img
            alt="Difference"
            loading="lazy"
            className="rounded-xl shadow-lg w-full h-auto"
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fHww"
          />
        </div>

        {/* Our Values Section */}
        <div className="text-center space-y-4">
          <h3 className="text-3xl font-semibold text-pink-600">Our Values</h3>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            Transparency, passion, and personalized service guide everything we do. Your happiness is our success, and we build every trip with care and dedication.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h3 className="text-3xl font-semibold text-pink-600">
              Why Choose TipToHoneymon
            </h3>
            <ul className="space-y-2 text-lg text-gray-700 list-disc list-inside">
              <li>
                <strong>Experience:</strong> Years of crafting honeymoon journeys that delight couples worldwide.
              </li>
              <li>
                <strong>Personalized Service:</strong> Tailored trips that fit your unique love story.
              </li>
              <li>
                <strong>Transparency:</strong> Clear pricing and honest communication every step of the way.
              </li>
              <li>
                <strong>24/7 Support:</strong> We’re here whenever you need us, ensuring peace of mind.
              </li>
            </ul>
          </div>
          <img
            alt="Why Choose Us"
            loading="lazy"
            className="rounded-xl shadow-lg w-full h-auto"
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D"
          />
        </div>

        {/* CTA Section */}
        <div className="bg-pink-600 text-white rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-4xl font-bold mb-4">Start Your Honeymoon Journey</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
            Whether it’s a tropical beach escape or an adventurous mountain retreat, TipToHoneymon is here to make it perfect.
          </p>
          <button
            onClick={() => navigate("/contactUs")}
            className="bg-white text-pink-600 font-bold px-10 py-3 rounded-full shadow-lg hover:bg-pink-100 transition"
          >
            Contact
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutDetails;
