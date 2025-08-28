import React from "react";
import { useParams } from "react-router-dom";

const demoPackages = {
  kerala: {
    title: "Kerala Backwaters & Hill Station Tour",
    duration: "5 Nights / 6 Days",
    price: "₹22,999",
    location: "Kerala, India",
    image: "https://cdn.pixabay.com/photo/2017/01/20/00/30/india-1999324_1280.jpg",
    overview:
      "Explore the lush green hills of Munnar, backwaters of Alleppey, and beaches of Kovalam.",
    itinerary: [
      "Day 1: Arrival in Kochi, transfer to Munnar",
      "Day 2: Munnar sightseeing (Tea Gardens, Eravikulam Park)",
      "Day 3: Drive to Thekkady, Periyar wildlife sanctuary",
      "Day 4: Alleppey houseboat stay",
      "Day 5: Kovalam beach leisure",
      "Day 6: Departure from Trivandrum",
    ],
    inclusions: ["Hotel + Houseboat Stay", "Breakfast & Dinner", "Transfers"],
    exclusions: ["Flights", "Personal expenses"],
  },

  goa: {
    title: "Goa Beach & Nightlife Getaway",
    duration: "4 Nights / 5 Days",
    price: "₹15,499",
    location: "Goa, India",
    image: "https://cdn.pixabay.com/photo/2018/11/08/10/41/beach-3808541_1280.jpg",
    overview:
      "Relax on the golden beaches of Goa, enjoy vibrant nightlife, and explore Portuguese heritage.",
    itinerary: [
      "Day 1: Arrival in Goa, leisure on beach",
      "Day 2: North Goa sightseeing",
      "Day 3: South Goa sightseeing",
      "Day 4: Water sports & leisure",
      "Day 5: Departure",
    ],
    inclusions: ["Hotel Stay", "Breakfast", "Airport Transfer", "Sightseeing"],
    exclusions: ["Airfare", "Personal expenses"],
  },

  kashmir: {
    title: "Heavenly Escape - Kashmir Tour",
    duration: "5 Nights / 6 Days",
    price: "₹21,999",
    location: "Srinagar, Pahalgam, Gulmarg",
    image: "https://cdn.pixabay.com/photo/2017/07/25/12/39/kashmir-2532305_1280.jpg",
    overview:
      "Kashmir - Paradise on Earth with snow, valleys, lakes, and breathtaking mountains.",
    itinerary: [
      "Day 1: Arrival in Srinagar, Shikara ride",
      "Day 2: Gulmarg excursion",
      "Day 3: Pahalgam valley tour",
      "Day 4: Sonmarg visit",
      "Day 5: Srinagar local sightseeing",
      "Day 6: Departure",
    ],
    inclusions: ["Hotel + Houseboat", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Flights", "Adventure activities"],
  },

  // बाकी states भी इसी तरह image: "url" के साथ जोड़ सकते हो
  // Example Himachal:
  himachal: {
    title: "Unforgettable Honeymoon with Photo Shoot",
    duration: "3 Nights / 4 Days",
    price: "₹19,999",
    location: "Manali, Himachal Pradesh",
    image: "https://cdn.pixabay.com/photo/2017/01/20/00/30/india-1999324_1280.jpg",
    overview:
      "Snow-capped mountains, Mall Road, Solang Valley & more adventure.",
    itinerary: [
      "Day 1: Delhi to Manali",
      "Day 2: Manali sightseeing",
      "Day 3: Solang Valley excursion",
      "Day 4: Kullu-Manikaran",
    ],
    inclusions: ["Hotel Stay", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Airfare", "Personal expenses"],
  },
};

const StatePage = () => {
  const { state } = useParams();
  const stateName = state.replace(/-/g, " ");

  const pkg = demoPackages[state.toLowerCase()] || null;

  return (
    <div className="mt-6 max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      {pkg ? (
        <>
          {/* Banner Image */}
          {pkg.image && (
            <img
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-64 object-cover"
            />
          )}

          {/* Package Content */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-2">{pkg.title}</h2>
            <p className="text-gray-700 mb-4">
              <strong>Duration:</strong> {pkg.duration} |{" "}
              <strong>Location:</strong> {pkg.location}
            </p>
            <p className="text-gray-600 mb-4">{pkg.overview}</p>

            <h3 className="text-xl font-semibold mt-4">Day Wise Itinerary</h3>
            <ul className="list-disc ml-6 text-gray-700">
              {pkg.itinerary.map((item, idx) => (
                <li key={idx} className="mb-1">{item}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mt-4">Inclusions</h3>
            <ul className="list-disc ml-6 text-gray-700">
              {pkg.inclusions.map((item, idx) => (
                <li key={idx} className="mb-1">{item}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mt-4">Exclusions</h3>
            <ul className="list-disc ml-6 text-gray-700">
              {pkg.exclusions.map((item, idx) => (
                <li key={idx} className="mb-1">{item}</li>
              ))}
            </ul>

            <div className="mt-6 text-center">
              <span className="text-2xl font-bold text-green-600">
                Starting at {pkg.price} / Person
              </span>
            </div>
          </div>
        </>
      ) : (
        <h2 className="text-2xl font-bold text-gray-700 text-center p-6">
          Welcome to {stateName}
        </h2>
      )}
    </div>
  );
};

export default StatePage;
