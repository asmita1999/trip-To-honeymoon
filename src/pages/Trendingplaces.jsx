import React, { useState, useEffect } from "react";

const domesticPlaces = [
  { id: 1, name: "Kashmir", price: "Rs 29999.00", img: "https://wanderon-images.gumlet.io/gallery/new/2025/08/08/1754654165130-places-to-visit-in-kashmir.jpg" },
  { id: 2, name: "Athirappilly Waterfalls", price: "Rs 15999.00", img: "https://wanderon-images.gumlet.io/blogs/new/2025/01/24/gondola-ride-in-autumn-in-kashmir-2023-11-08t181453.226-min.png" },
  { id: 3, name: "India Gate", price: "Rs 24999.00", img: "https://images.pexels.com/photos/13819269/pexels-photo-13819269.jpeg?cs=srgb&dl=pexels-mnannapaneni-13819269.jpg&fm=jpg" },
  { id: 4, name: "Taj Mahal", price: "Rs 18999.00", img: "https://cdn.pixabay.com/photo/2020/06/05/21/09/cultural-tourism-5264542_1280.jpg" },
  { id: 5, name: "Dal Lake", price: "Rs 21999.00", img: "https://media.istockphoto.com/id/856540198/photo/white-shikara-in-dal-lake-kashmir-india.jpg?s=2048x2048&w=is&k=20&c=sQwTRMKg55k9NJj0onYDPYe0FrGjlc-JV7CpGK4818U=" },
  { id: 6, name: "UTTARAKHAND", price: "Rs 29999.00", img: "https://www.holidify.com/images/bgImages/RISHIKESH.jpg" },
  { id: 7, name: "HIMACHAL", price: "Rs 15999.00", img: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTWNR93D2R5V3ksOgAaU1qdfSKB2W5ZnFGDuhtQqoT5JbMoAJIP55KiUPYCQccdRKGsPDwxccLgwDLCcFJc4ftRMycOZ9kCt2xVBwQ3RA" },
  { id: 8, name: "MAHARASHTRA.", price: "Rs 24999.00", img: "https://media2.thrillophilia.com/images/photos/000/152/587/original/1603951915_shutterstock_1242281908.jpg?w=753&h=450&dpr=1.5" },
  { id: 9, name: "GOA", price: "Rs 18999.00", img: "https://media2.thrillophilia.com/images/photos/000/256/983/original/1589194376_dudhsagar8.jpg?w=753&h=450&dpr=1.5" },
  { id: 10, name: "Shimla", price: "Rs 21999.00", img: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/a4/47/00.jpg" },
];

const internationalPlaces = [
  { id: 11, name: "Eiffel Tower", price: "Rs 49999.00", img: "https://media1.thrillophilia.com/filestore/2mwwljyr8ps2opqgedmxxqhxj7mv_shutterstock_394896406.jpg?h=459&w=auto&dpr=1.125" },
  { id: 12, name: "Great Wall", price: "Rs 45999.00", img: "https://media.istockphoto.com/id/164242812/photo/landscape-of-the-great-wall-of-china.jpg?s=2048x2048&w=is&k=20&c=WSTcLb8mchCkI3jBcr4fw9BDR5VA1640JwUxM5NLUW0=" },
  { id: 13, name: "Maldives", price: "Rs 55999.00", img: "https://as1.ftcdn.net/v2/jpg/01/96/61/04/1000_F_196610432_AiDoArVwXmnFhSJA5n8mUQLUxlzIHoiH.jpg" },
  { id: 14, name: "Bali", price: "Rs 42999.00", img: "https://as1.ftcdn.net/v2/jpg/01/11/28/88/1000_F_111288833_YIh3Br4p3lzSlFjDutcVIjJMj9EkWlKv.jpg" },
  { id: 15, name: "Dubai", price: "Rs 39999.00", img: "https://res.cloudinary.com/dtljonz0f/image/upload/c_auto,ar_4:3,w_1920,g_auto/f_auto/q_auto/v1/shutterstock_2414539851_ss_non-editorial_dcx0bm?_a=BAVAZGE70" },
  { id: 16, name: "Macau China", price: "Rs 49999.00", img: "https://www.holidify.com/images/bgImages/MACAU.jpg" },
  { id: 17, name: "Germany", price: "Rs 45999.00", img: "https://www.planetware.com/wpimages/2019/02/germany-best-places-to-visit-cologne.jpg" },
  { id: 18, name: "Serbia", price: "Rs 55999.00", img: "https://blog.dookinternational.com/images/post-media/nRFpH1696323522.jpg" },
  { id: 19, name: "Ukraine", price: "Rs 42999.00", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Lavra_Kyiv.JPG/1280px-Lavra_Kyiv.JPG" },
  { id: 20, name: "Switzerland", price: "Rs 39999.00", img: "https://www.holidify.com/images/cmsuploads/compressed/Rhine_Rhein_Basel_2006_896_20230522172954.JPG" },
];

const TrendingPlaces = () => {
  const [activeTab, setActiveTab] = useState("domestic");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const places = activeTab === "domestic" ? domesticPlaces : internationalPlaces;
  const totalPages = Math.ceil(places.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPlaces = places.slice(startIndex, startIndex + itemsPerPage);

  // 🔥 Auto switch Domestic <-> International every 10 sec
  useEffect(() => {
    const tabInterval = setInterval(() => {
      setActiveTab((prev) => (prev === "domestic" ? "international" : "domestic"));
      setCurrentPage(1);
    }, 10000);
    return () => clearInterval(tabInterval);
  }, []);

  // 🔥 Auto-slide pages every 3 sec
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentPage((prev) => (prev < totalPages ? prev + 1 : 1));
    }, 3000);
    return () => clearInterval(slideInterval);
  }, [totalPages, activeTab]);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-800">Trending Places</h2>
        <div className="flex border border-gray-300 rounded-lg overflow-hidden">
          <button
            onClick={() => { setActiveTab("domestic"); setCurrentPage(1); }}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === "domestic" ? "bg-indigo-600 text-white" : "bg-white text-gray-800 hover:bg-gray-100"
            }`}
          >
            Domestic
          </button>
          <button
            onClick={() => { setActiveTab("international"); setCurrentPage(1); }}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === "international" ? "bg-indigo-600 text-white" : "bg-white text-gray-800 hover:bg-gray-100"
            }`}
          >
            International
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="grid grid-rows-2 gap-6">
          {paginatedPlaces[0] && <PlaceCard place={paginatedPlaces[0]} small />}
          {paginatedPlaces[1] && <PlaceCard place={paginatedPlaces[1]} small />}
        </div>
        <div>
          {paginatedPlaces[2] && <PlaceCard place={paginatedPlaces[2]} big />}
        </div>
        <div className="grid grid-rows-2 gap-6">
          {paginatedPlaces[3] && <PlaceCard place={paginatedPlaces[3]} small />}
          {paginatedPlaces[4] && <PlaceCard place={paginatedPlaces[4]} small />}
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-10 flex items-center gap-2">
        <button onClick={handlePrev} disabled={currentPage === 1}
          className="p-2 border rounded hover:bg-gray-100 disabled:opacity-50">{"<"}</button>
        <span className="font-medium">{currentPage}/{totalPages}</span>
        <button onClick={handleNext} disabled={currentPage === totalPages}
          className="p-2 border rounded hover:bg-gray-100 disabled:opacity-50">{">"}</button>
      </div>
    </div>
  );
};

// Card Component
const PlaceCard = ({ place, small, big }) => {
  return (
    <div className={`relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow ${big ? "h-[500px]" : "h-[240px]"}`}>
      <img src={place.img} alt={place.name} className="w-full h-full object-cover" />
      <div className="absolute bottom-4 left-4 text-white drop-shadow-md">
        <h3 className="font-bold capitalize">{place.name}</h3>
        <p>{place.price}</p>
      </div>
      <button className="absolute bottom-4 right-4 bg-white text-indigo-600 px-3 py-1 rounded-full text-sm font-medium shadow">
        Know More
      </button>
    </div>
  );
};

export default TrendingPlaces;
