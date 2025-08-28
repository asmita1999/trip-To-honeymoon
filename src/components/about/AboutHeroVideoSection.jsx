import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import HeroVideo from "../../assets/videos/hero.mp4";
// import { getHeroSection } from "../api/api"; 

const AboutHeroVideoSection = () => {
  const [heroData, setHeroData] = useState({
    title: "",
    subtitle: "",
    videoUrl: "",
    posterUrl: "",
  });
  
  const [loading, setLoading] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        setLoading(true);

        // Replace this block with actual API call
        // const { data } = await getHeroSection("about");
        // setHeroData({
        //   title: data.title,
        //   subtitle: data.subtitle,
        //   videoUrl: data.publicUrl[0],
        //   posterUrl: data.posterUrl,
        // });

        // TEMPORARY STATIC DATA
        
      } catch (error) {
        console.error("Failed to fetch hero data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Autoplay prevented:", err);
      });
    }
  }, [heroData.videoUrl]);

  return (
    <div className="relative w-full h-screen max-h-[80vh] overflow-hidden">
      {/* Video Background */}
      {heroData.videoUrl || (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster={heroData.posterUrl}
        >
          <source src={HeroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
       {/* ✅ Always Visible Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
             TripToHoneymoon 
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
            Crafting unforgettable honeymoon experiences tailored just for you.
          </p>
        </motion.div>
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {heroData.title}
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
            {heroData.subtitle}
          </p>
        </motion.div>
      </div>

      {/* Loading Overlay */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 z-20">
          <p className="text-white text-xl">Loading hero section...</p>
        </div>
      )}

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
         className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-4xl z-10"
      >
        ⌵
      </motion.div>
    </div>
  );
};

export default AboutHeroVideoSection;
