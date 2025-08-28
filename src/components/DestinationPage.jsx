// // import React from "react";
// import { useParams, Link } from "react-router-dom";

// const DestinationPage = () => {
//   const { slug } = useParams();

//   // Demo packages (you can customize per destination later)
//   const packages = [
//     {
//       id: 1,
//       name: `${slug} Luxury Escape`,
//       image: "https://via.placeholder.com/400x250",
//       price: "₹45,000",
//     },
//     {
//       id: 2,
//       name: `${slug} Adventure Trip`,
//       image: "https://via.placeholder.com/400x250",
//       price: "₹38,000",
//     },
//     {
//       id: 3,
//       name: `${slug} Romantic Getaway`,
//       image: "https://via.placeholder.com/400x250",
//       price: "₹55,000",
//     },
//     {
//       id: 4,
//       name: `${slug} Family Holiday`,
//       image: "https://via.placeholder.com/400x250",
//       price: "₹42,000",
//     },
//   ];

//   return (
//     <div className="container mx-auto py-12 px-4">
//       <h1 className="text-3xl font-bold text-center mb-8">
//         Packages for {slug.replace("-", " ")}
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {packages.map((pkg) => (
//           <div
//             key={pkg.id}
//             className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
//           >
//             <img src={pkg.image} alt={pkg.name} className="h-40 w-full object-cover" />
//             <div className="p-4">
//               <h3 className="text-lg font-semibold">{pkg.name}</h3>
//               <p className="text-blue-600 font-bold">{pkg.price}</p>
//               <Link
//                 to={`/package/${pkg.id}`}
//                 state={{ pkg }}
//                 className="bg-blue-600 text-white px-3 py-1 rounded mt-2 inline-block"
//               >
//                 View Details
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DestinationPage;
import { useParams, Link } from "react-router-dom";

const DestinationPage = () => {
  const { slug } = useParams();

  // Demo packages (can be dynamic later)
  const packages = [
    {
      id: 1,
      name: `${slug} Luxury Escape`,
      image:
        "https://cdn.pixabay.com/photo/2020/09/06/09/05/beach-5548446_1280.jpg",
      price: "₹45,000",
    },
    {
      id: 2,
      name: `${slug} Adventure Trip`,
      image:
        "https://cdn.pixabay.com/photo/2020/09/06/09/05/beach-5548446_1280.jpg",
      price: "₹38,000",
    },
    {
      id: 3,
      name: `${slug} Romantic Getaway`,
      image:
        "https://cdn.pixabay.com/photo/2020/09/06/09/05/beach-5548446_1280.jpg",
      price: "₹55,000",
    },
    {
      id: 4,
      name: `${slug} Family Holiday`,
      image:
        "https://cdn.pixabay.com/photo/2020/09/06/09/05/beach-5548446_1280.jpg",
      price: "₹42,000",
    },
  ];

  return (
    <div className="container mx-auto py-8 px-6">
      <h1 className="text-4xl font-bold text-center capitalize mb-8">
        Packages for {slug.replace("-", " ")}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            {/* Image with hover zoom */}
            <div className="overflow-hidden">
              <img
                src={pkg.image}
                alt={pkg.name}
                className="h-60 w-full object-cover transform hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content below image */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold capitalize">{pkg.name}</h3>
              <p className="text-blue-600 font-bold">{pkg.price}</p>

              <Link
                to={`/package/${pkg.id}`}
                state={{ pkg }} // pass package data
                className="bg-blue-600 text-white px-3 py-1 rounded mt-2 inline-block"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationPage;


