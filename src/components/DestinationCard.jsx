import React, { useRef } from "react";
import { Heart, Sun, User } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const destinations = [
  {
    id: 1,
    name: "Kerala",
    image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
    days: "6 Nights & 7 Days",
    price: "2999.00",
  },
  {
    id: 2,
    name: "Nepal",
    image: "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg",
    days: "6 Nights & 7 Days",
    price: "2999.00",
  },
  {
    id: 3,
    name: "Varanasi",
    image: "https://images.pexels.com/photos/631292/pexels-photo-631292.jpeg",
    days: "6 Nights & 7 Days",
    price: "2999.00",
  },
  {
    id: 4,
    name: "Goa",
    image: "https://images.pexels.com/photos/248771/pexels-photo-248771.jpeg",
    days: "6 Nights & 7 Days",
    price: "2999.00",
  },
  {
    id: 5,
    name: "Jaipur",
    image: "https://images.pexels.com/photos/356968/pexels-photo-356968.jpeg",
    days: "5 Nights & 6 Days",
    price: "2799.00",
  },
  {
    id: 6,
    name: "Manali",
    image: "https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg",
    days: "4 Nights & 5 Days",
    price: "2599.00",
  },
];

export default function TopDestination() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">
            <span className="text-indigo-700">Top Most</span> Destination
          </h2>
          <button className="rounded-lg border border-indigo-600 px-4 py-2 text-indigo-700 hover:bg-indigo-700 hover:text-white transition">
            See All
          </button>
        </div>

        {/* Slider Controls */}
        <div className="absolute top-[50%] -left-6 z-10">
          <button
            ref={prevRef}
            className="bg-indigo-700 text-white p-3 rounded-full shadow hover:bg-indigo-800 transition"
          >
            ‹
          </button>
        </div>
        <div className="absolute top-[50%] -right-6 z-10">
          <button
            ref={nextRef}
            className="bg-indigo-700 text-white p-3 rounded-full shadow hover:bg-indigo-800 transition"
          >
            ›
          </button>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {destinations.map((d) => (
            <SwiperSlide key={d.id}>
              <div className="rounded-2xl bg-white shadow-md overflow-hidden">
                {/* Image + like */}
                <div className="relative aspect-[16/10]">
                  <img
                    src={d.image}
                    alt={d.name}
                    className="h-full w-full object-cover"
                  />
                  <button className="absolute top-3 right-3 rounded-full bg-white/95 p-2 shadow hover:bg-indigo-50">
                    <Heart className="h-5 w-5 text-indigo-700" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{d.name}</h3>

                  <div className="mt-3 flex items-center gap-6 text-sm text-gray-600">
                    <span className="inline-flex items-center gap-1">
                      <Sun className="h-4 w-4 text-indigo-700" />
                      {d.days}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <User className="h-4 w-4 text-indigo-700" />
                      Travel Guide
                    </span>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <p className="font-semibold">Rs {d.price}</p>
                    <button className="rounded-xl bg-indigo-700 px-5 py-2 text-white hover:bg-indigo-800 transition">
                      Book now
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
