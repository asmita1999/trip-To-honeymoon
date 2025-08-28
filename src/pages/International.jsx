// import React from "react";
// import video from "../assets/videos/hero1.mp4"; 
// import { internationalPackages } from "../../src/data/packages"; 

// const International = () => {
//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="relative w-full h-[80vh] flex items-center justify-center text-center text-white">
//         {/* Background Video */}
//         <video
//           src={video}
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover"
//         />

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//         {/* Content */}
//         <div className="relative z-10 px-4">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             Discover International Destinations
//           </h1>
//           <p className="text-xl mb-8">Explore amazing international locations</p>

//           <div className="max-w-md mx-auto relative">
//             <input
//               type="text"
//               placeholder="Search international destinations..."
//               className="w-full py-3 px-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Popular International Destinations */}
//       <section className="py-12 container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-8">
//           Popular International Destinations
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {internationalPackages.flat().map((pkg) => (
//             <div
//               key={pkg.id}
//               className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-transform duration-300"
//             >
//               {/* Package Image */}
//               <div
//                 className="h-48 bg-gray-300 flex items-center justify-center bg-cover bg-center"
//                 style={{ backgroundImage: `url(${pkg.image})` }}
//               />

//               {/* Package Details */}
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
//                 <p className="text-gray-600 text-sm mb-2">{pkg.location}</p>
//                 <p className="text-blue-600 font-bold mb-4">{pkg.price}</p>
//                 <a
//                   href={pkg.link || "#"}
//                   className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors inline-block"
//                 >
//                   Explore
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Testimonials Section (unchanged) */}
//       <section className="bg-gray-100 py-12 px-4">
//         <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
//         <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
//           {[1, 2].map((testimonial) => (
//             <div
//               key={testimonial}
//               className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
//             >
//               <p className="text-gray-600 mb-4">
//                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio."
//               </p>
//               <h4 className="font-semibold">Client {testimonial}</h4>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Moments Section (unchanged) */}
//       <section className="py-12 px-4">
//         <h2 className="text-3xl font-bold text-center mb-8">
//           Unforgettable Moments
//         </h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {[1, 2, 3, 4, 5, 6, 7, 8].map((moment) => (
//             <div
//               key={moment}
//               className="h-40 bg-gray-300 flex items-center justify-center rounded-lg hover:opacity-80 transition-opacity"
//             >
//               <span className="text-gray-600">Moment {moment}</span>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default International;
import React from "react";
import video from "../assets/videos/hero1.mp4";
import { internationalPackages } from "../../src/data/packages";
import { Link } from "react-router-dom";

const International = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center text-center text-white">
        {/* Background Video */}
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover International Destinations
          </h1>
          <p className="text-xl mb-8">Explore amazing international locations</p>
        </div>
      </section>

      {/* Popular International Destinations */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center uppercase mb-8">
          Popular International Destinations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {internationalPackages.flat().map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-transform duration-300"
            >
              {/* Package Image */}
              <div
                className="h-48 bg-gray-300 flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url(${pkg.image})` }}
              />

              {/* Package Details */}
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{pkg.location}</p>
                <p className="text-blue-600 font-bold mb-4">{pkg.price}</p>

                {/* Explore Button with Link */}
                <Link
                  to={`/destination/${pkg.title.replace(/\s+/g, "-").toLowerCase()}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors inline-block"
                >
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default International;

