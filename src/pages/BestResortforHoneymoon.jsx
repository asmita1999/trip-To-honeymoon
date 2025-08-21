import React, { useState } from "react";

const HoneymoonResorts = () => {
  const allResorts = [
    {
      id: 1,
      name: "The Yhami Resort",
      phone: "9878746753",
      tag: "Honeymoon",
      price: "Rs 29899.00",
      images: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      rating: 4.5,
      location: "Pokhara, Nepal"
    },
    {
      id: 2,
      name: "The Yhami Resort",
      phone: "9878746753",
      tag: "Honeymoon",
      price: "Rs 29899.00",
      images: [
        "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      rating: 4.2,
      location: "Kathmandu, Nepal"
    },
    {
      id: 3,
      name: "The Yhami Resort",
      phone: "9878746753",
      tag: "Honeymoon",
      price: "Rs 29899.00",
      images: [
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      rating: 4.7,
      location: "Chitwan, Nepal"
    },
    {
      id: 4,
      name: "The Yhami Resort",
      phone: "9878746753",
      tag: "Honeymoon",
      price: "Rs 29899.00",
      images: [
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      rating: 4.3,
      location: "Lumbini, Nepal"
    },
    {
      id: 5,
      name: "Mountain View Resort",
      phone: "9878746754",
      tag: "Honeymoon",
      price: "Rs 32899.00",
      images: [
        "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      rating: 4.8,
      location: "Nagarkot, Nepal"
    },
    {
      id: 6,
      name: "Lakeside Paradise",
      phone: "9878746755",
      tag: "Honeymoon",
      price: "Rs 35899.00",
      images: [
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      rating: 4.6,
      location: "Pokhara, Nepal"
    },
    {
      id: 7,
      name: "Royal Heritage Resort",
      phone: "9878746756",
      tag: "Honeymoon",
      price: "Rs 38899.00",
      images: [
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      rating: 4.9,
      location: "Kathmandu, Nepal"
    },
    {
      id: 8,
      name: "Wilderness Retreat",
      phone: "9878746757",
      tag: "Honeymoon",
      price: "Rs 27899.00",
      images: [
        "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      rating: 4.4,
      location: "Chitwan, Nepal"
    }
  ];

  const [currentImages, setCurrentImages] = useState(
    allResorts.reduce((acc, resort) => {
      acc[resort.id] = 0;
      return acc;
    }, {})
  );
  
  const [showAll, setShowAll] = useState(false);
  
  // Show only 4 resorts initially, or all if showAll is true
  const displayedResorts = showAll ? allResorts : allResorts.slice(0, 4);

  const nextImage = (resortId) => {
    setCurrentImages(prev => ({
      ...prev,
      [resortId]: (prev[resortId] + 1) % allResorts.find(r => r.id === resortId).images.length
    }));
  };

  const prevImage = (resortId) => {
    setCurrentImages(prev => ({
      ...prev,
      [resortId]: (prev[resortId] - 1 + allResorts.find(r => r.id === resortId).images.length) % 
                  allResorts.find(r => r.id === resortId).images.length
    }));
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Best Resort For Honeymoon</h2>
        <button 
          onClick={toggleShowAll}
          className="text-indigo-600 font-medium flex items-center hover:text-indigo-800 transition-colors"
        >
          {showAll ? 'Show Less' : 'See All'}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-4 w-4 ml-1 transition-transform ${showAll ? 'rotate-180' : ''}`} 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Resort Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedResorts.map((resort) => (
          <div key={resort.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            {/* Resort Image with Icons */}
            <div className="relative h-48 overflow-hidden group">
              <img 
                src={resort.images[currentImages[resort.id]]} 
                alt={resort.name} 
                className="w-full h-full object-cover"
              />
              
              {/* Heart Icon - Top Right */}
              <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-pink-50 transition-colors z-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 hover:text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </button>
              
              {/* Star Rating - Bottom Left */}
              <div className="absolute bottom-3 left-3 bg-black bg-opacity-60 text-white px-2 py-1 rounded-md flex items-center z-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-xs font-medium">{resort.rating}</span>
              </div>
              
              {/* Navigation Arrows */}
              {resort.images.length > 1 && (
                <>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage(resort.id);
                    }}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage(resort.id);
                    }}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </>
              )}
              
              {/* Image Indicator Dots */}
              {resort.images.length > 1 && (
                <div className="absolute bottom-3 right-3 flex space-x-1 z-10">
                  {resort.images.map((_, index) => (
                    <div 
                      key={index} 
                      className={`h-2 w-2 rounded-full ${currentImages[resort.id] === index ? 'bg-white' : 'bg-white bg-opacity-50'}`}
                    ></div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Resort Details */}
            <div className="p-4">
              {/* Resort Name and Location in one row */}
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center">
                  {/* Nepal Map Icon */}
                  <svg className="h-5 w-5 text-indigo-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <h3 className="font-bold text-gray-800 text-lg">{resort.name}</h3>
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <svg className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>{resort.location}</span>
                </div>
              </div>
              
              {/* Phone and Tag */}
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center text-gray-600 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  {resort.phone}
                </div>
                <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2 py-1 rounded flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  {resort.tag}
                </span>
              </div>
              
              {/* Price and Book Button */}
              <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">
                <span className="font-bold text-gray-800">{resort.price}</span>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors flex items-center">
                  Book now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoneymoonResorts;