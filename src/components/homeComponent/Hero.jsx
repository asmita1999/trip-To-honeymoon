import React, { useState } from 'react';
import SearchBar from './SearchBar';
import 'react-image-lightbox/style.css';
import Lightbox from 'react-image-lightbox';

const cards = [
  {
    title: 'Nepal',
    img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/d6/96/36/photo4jpg.jpg?w=1400&h=500&s=1',
  },
  {
    title: 'Maldives',
    img: 'https://www.sunsiyam.com/media/qnfnzgmq/ssiv_general_04.jpg?width=782&height=521&mode=max',
  },
  {
    title: 'Darjeeling',
    img: 'https://siliguritourism.com/wp-content/uploads/2024/01/Darjeeling-West-Bengal-1536x864.jpg',
  },
  {
    title: 'Kerala',
    img: 'https://static.toiimg.com/photo/58490365/.jpg',
  },
];

const DestinationCard = ({ title, img, onClick }) => (
  <div
    onClick={onClick}
    className="w-40 h-32 xs:w-44 xs:h-36 sm:w-48 sm:h-40 md:w-52 md:h-44 lg:w-56 lg:h-48 xl:w-60 xl:h-52 flex-shrink-0 rounded-xl shadow-lg relative overflow-hidden transform hover:scale-105 transition duration-300 cursor-pointer"
  >
    <img src={img} alt={title} className="w-full h-full object-cover" />
    <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-2 font-semibold text-sm xs:text-base">
      {title}
    </div>
  </div>
);

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <section className="relative bg-cover bg-center min-h-[70vh] sm:min-h-[80vh] lg:min-h-[85vh] overflow-hidden pb-10">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="src/assets/videos/hero.mp4" type="video/mp4" />

        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-start pt-6 sm:pt-8 h-full">
        <div className="text-center text-white mb-8">
          <h1 className="text-4xl font-bold">TripToHoneymoon</h1>
          <p className="text-lg opacity-80">Your journey to paradise begins here</p>
        </div>
        {/* SearchBar */}
        <div className="px-4 sm:px-6 md:px-10 lg:px-12 mb-6">
          <SearchBar />
        </div>

        {/* Text + Cards */}
        <div className="mt-6 sm:mt-12 flex flex-col md:flex-row items-center md:items-start justify-between px-4 sm:px-6 md:px-10 gap-6 md:gap-10">
          {/* Left: Text */}
          <div className="text-white w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
              Majestic Ladakh
            </h1>
            <p className="mb-4 text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
              Discover the unexplored beauty of Ladakh. Snow-capped peaks, ancient monasteries, and unforgettable adventures await.
            </p>
            <button className="bg-indigo-900 px-5 py-2 rounded text-white font-medium hover:bg-indigo-800 transition text-sm sm:text-base">
              Explore Now <span className="ml-2">&raquo;&raquo;</span>
            </button>
          </div>

          {/* Right: Cards */}
          <div className="w-full md:w-1/2 overflow-hidden">
            <div className="flex gap-4 animate-marquee whitespace-nowrap min-w-max">
              {[...cards, ...cards].map((card, idx) => (
                <DestinationCard
                  key={idx}
                  title={card.title}
                  img={card.img}
                  onClick={() => openLightbox(idx % cards.length)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {isOpen && (
        <Lightbox
          mainSrc={cards[photoIndex].img}
          nextSrc={cards[(photoIndex + 1) % cards.length].img}
          prevSrc={cards[(photoIndex + cards.length - 1) % cards.length].img}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + cards.length - 1) % cards.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % cards.length)
          }
          imageTitle={cards[photoIndex].title}
        />
      )}
</section>

  );
};

export default Hero;

// {/* Text + Cards */}
// <div className="mt-10 md:mt-40 flex flex-col md:flex-row justify-between items-center px-4 md:px-16 gap-6 md:gap-10">
//   {/* Left: Text */}
//   <div className="text-white max-w-full md:max-w-[30%]">
//     <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
//       Majestic Ladakh
//     </h1>
//     <p className="mb-4 text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
//       Discover the unexplored beauty of Ladakh. Snow-capped peaks, ancient monasteries, and unforgettable adventures await.
//     </p>
//     <button className="bg-indigo-900 px-5 py-2 rounded text-white font-medium hover:bg-indigo-800 transition">
//       Explore Now <span className="ml-2">&raquo;&raquo;</span>
//     </button>
//   </div>

//   {/* Right: Cards */}
//   <div className="w-full md:w-[70%] overflow-x-auto scrollbar-hide">
//     <div className="flex gap-4 animate-marquee whitespace-nowrap min-w-max">
//       {[...cards, ...cards].map((card, idx) => (
//         <DestinationCard
//           key={idx}
//           title={card.title}
//           img={card.img}
//           onClick={() => openLightbox(idx % cards.length)}
//         />
//       ))}
//     </div>
//   </div>
// </div>
