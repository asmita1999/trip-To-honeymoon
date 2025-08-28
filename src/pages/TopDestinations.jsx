// src/components/TopDestination.jsx
import React from "react";
import { Heart, Sun, Moon, User } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";

const destinations = [
  {
    id: 1,
    name: "Kerala",
    image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
    days: "6 Nights & 7 Days",
    price: "Rs 2999.00",
  },
  {
    id: 2,
    name: "Nepal",
    image: "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg",
    days: "6 Nights & 7 Days",
    price: "Rs 2999.00",
  },
  {
    id: 3,
    name: "Varanasi",
    image: "https://images.pexels.com/photos/631292/pexels-photo-631292.jpeg",
    days: "6 Nights & 7 Days",
    price: "Rs 2999.00",
  },
  {
    id: 4,
    name: "Sunset Trip",
    image: "https://images.pexels.com/photos/207896/pexels-photo-207896.jpeg",
    days: "6 Nights & 7 Days",
    price: "Rs 2999.00",
  },
];

const TopDestination = () => {
  const navigate = useNavigate();

  return (
    <section className="px-6 py-10">
      {/* Heading + See All */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          <span className="text-indigo-700">Top Most</span> Destination
        </h2>
        <button
          onClick={() => navigate("/destinations")}
          className="border border-indigo-600 text-indigo-700 px-4 py-1 rounded-md hover:bg-indigo-700 hover:text-white transition"
        >
          See All
        </button>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {destinations.map((dest) => (
          <SwiperSlide key={dest.id}>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              {/* Image + Heart Icon */}
              <div className="relative">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-48 object-cover"
                />
                <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-indigo-50">
                  <Heart className="w-5 h-5 text-indigo-600" />
                </button>
              </div>

              {/* Card Content */}
              <div className="p-4">
                <h3 className="font-semibold text-lg">{dest.name}</h3>

                {/* Row with Top & Bottom Separator */}
                <div className="border-t border-b py-2 mt-2">
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    {/* Nights & Days */}
                    <div className="flex items-center gap-2">
                      <Moon className="w-4 h-4 text-indigo-600" />
                      <Sun className="w-4 h-4 text-indigo-600" />
                      {dest.days}
                    </div>

                    {/* Travel Guide */}
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-indigo-600" />
                      Travel Guide
                    </div>
                  </div>
                </div>

                {/* Price + Button */}
                <div className="flex justify-between items-center mt-4">
                  <p className="font-semibold text-gray-800">{dest.price}</p>
                  <button className="bg-indigo-700 text-white px-4 py-2 rounded-md shadow hover:bg-indigo-800 transition">
                    Book now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TopDestination;
