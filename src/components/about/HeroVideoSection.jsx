import React, { useState, useEffect } from "react";
// import { getHeroSection } from "../api/api";
import HeroVideo from "../../assets/videos/hero.mp4"
const HeroVideoSection = () => {
  const [videoUrl, setVideoUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        setLoading(true);

        // Uncomment this and provide real API logic
        // const { data } = await getHeroSection("about");
        // setVideoUrl(data?.publicUrl[0]);

        setVideoUrl("https://www.w3schools.com/html/mov_bbb.mp4"); // Temporary video
      } catch (error) {
        console.error("Error loading video:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, []);

  return (
    <div className="relative w-full h-screen max-h-[80vh] overflow-hidden">
      <video autoPlay loop muted playsInline className="w-full h-full object-cover">
        {videoUrl && <source src={HeroVideo} type="video/mp4" />}
        Your browser does not support the video tag.
      </video>

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
  );
};

export default HeroVideoSection;
