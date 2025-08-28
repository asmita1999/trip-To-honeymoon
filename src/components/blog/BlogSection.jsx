import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiShare2 } from 'react-icons/fi';
import { FaFacebookF, FaLinkedinIn, FaLink, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const BlogSection = () => {
  const [activeShare, setActiveShare] = useState(null);
  const navigate = useNavigate();

  const toggleShare = (id) => {
    setActiveShare((prev) => (prev === id ? null : id));
  };

  const blogPosts = [
  {
    id: 1,
    title: "Top 10 Honeymoon Destinations",
    desc: "Explore the most romantic destinations to make your honeymoon memorable.",
    img: "https://source.unsplash.com/400x250/?beach,couple",
    date: "7/26/2025",
    intro: "Introduction to dreamy honeymoon places",
    content: `
Your honeymoon is a once-in-a-lifetime trip, and choosing the right destination can set the tone for your new life together. Here are the top 10 honeymoon destinations that combine romance, adventure, and unforgettable beauty:

1. **Santorini, Greece** – Famous for its white-washed buildings and sunset views.
2. **Bora Bora, French Polynesia** – Overwater bungalows and turquoise lagoons.
3. **Maui, Hawaii** – Waterfalls, volcano hikes, and stunning beaches.
4. **Bali, Indonesia** – Spiritual vibes, lush jungles, and affordable luxury.
5. **Amalfi Coast, Italy** – Coastal drives, charming villages, and fine dining.
6. **Kyoto, Japan** – Tranquil temples, cherry blossoms, and cultural experiences.
7. **Paris, France** – The eternal city of love.
8. **Maldives** – Ultimate privacy with private island resorts.
9. **Iceland** – For adventurous couples—hot springs, glaciers, and Northern Lights.
10. **Banff, Canada** – Snowy mountains and cozy cabins for winter romance.

No matter your taste, there's a destination on this list perfect for your style and budget.
    `.trim()
  },
  {
    id: 2,
    title: "Budget-Friendly Honeymoon Tips",
    desc: "Plan your dream honeymoon without breaking the bank.",
    img: "https://source.unsplash.com/400x250/?mountains,travel",
    date: "8/5/2025",
    intro: "Tips to save money on your trip",
    content: `
A romantic honeymoon doesn't have to cost a fortune. Here are practical tips to plan an unforgettable trip without overspending:

1. **Set a realistic budget** – Know how much you can comfortably spend.
2. **Travel off-season** – Enjoy lower rates and fewer crowds.
3. **Choose nearby destinations** – Domestic getaways can be just as romantic.
4. **Use flight deal websites** – Try Skyscanner or Google Flights for the best deals.
5. **Book early** – Hotels and flights are usually cheaper when booked months in advance.
6. **All-inclusive resorts** – Save by bundling meals, drinks, and entertainment.
7. **Consider Airbnb or boutique hotels** – They often offer better value and privacy.
8. **Use travel reward points** – Credit card rewards can reduce your expenses significantly.
9. **Plan experiences over luxury** – Sunset hikes or cooking classes can be more meaningful than a fancy suite.
10. **Stick to your plan** – Impulse upgrades can quickly blow your budget.

With the right planning, you can have a beautiful honeymoon and still return home with money in your account.
    `.trim()
  },

  {
    id: 3,
    title: "Best International Trips for Couples",
    desc: "Discover the charm of international travel with your partner.",
    img: "https://source.unsplash.com/400x250/?paris,couple",
    date: "8/14/2025",
    intro: "Romantic destinations worldwide",
    content: `
Exploring a new country with your partner is one of the most enriching experiences you can share. Here are some top international travel destinations for couples:

1. **Paris, France** – From Eiffel Tower views to Seine River cruises, romance is in the air.
2. **Venice, Italy** – Take a gondola ride and explore art, architecture, and wine.
3. **Kyoto, Japan** – A mix of tradition and tranquility—perfect for slow, meaningful travel.
4. **Bali, Indonesia** – A paradise for spiritual and nature-loving couples.
5. **Barcelona, Spain** – Colorful streets, delicious tapas, and vibrant culture.
6. **Reykjavik, Iceland** – Adventure meets serenity with geysers, hot springs, and waterfalls.
7. **Prague, Czech Republic** – Fairytale charm with beautiful castles and cobbled streets.
8. **Cape Town, South Africa** – For couples who love mountains, beaches, and wine.
9. **Queenstown, New Zealand** – Thrill-seeking couples can bungee jump, ski, and explore.
10. **Buenos Aires, Argentina** – Passion, tango, and culture in every corner.

Wherever you go, international travel as a couple will strengthen your bond and fill your scrapbook with unforgettable memories.
    `.trim()
  },
];



  const goToDetail = (post) => {
    navigate(`/blog/${post.id}`, { state: post });
  };

  return (
    <div className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Our Blogs</h2>
        <p className="text-lg text-gray-600 mt-2">
          Get inspired with travel tips, honeymoon ideas, and destination guides.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-md overflow-visible hover:shadow-lg transition relative"
          >
            {/* Image clickable */}
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-48 object-cover cursor-pointer"
              onClick={() => goToDetail(post)}
            />
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-1">{post.date}</p>
              <p className="text-sm text-gray-600 italic mb-1">{post.intro}</p>
              {/* Title clickable */}
              <h3
                className="text-xl font-semibold mb-2 cursor-pointer"
                onClick={() => goToDetail(post)}
              >
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">{post.desc}</p>

              <div className="flex justify-between items-center relative">
                <button
                  className="text-blue-600 hover:text-blue-800 font-medium"
                  onClick={() => goToDetail(post)}
                >
                  Read More →
                </button>

                {/* Share Icon */}
                <div className="relative z-50">
                <FiShare2
                  className="text-gray-500 hover:text-blue-600 cursor-pointer"
                  onClick={() => toggleShare(post.id)}
                />

                {activeShare === post.id && (
                  <div className="absolute top-0 right-0 -translate-y-full mb-2 bg-white border rounded-lg shadow-md flex items-center space-x-1 sm:space-x-2 px-2 py-1">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=https://example.com/blog/${post.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-800 hover:bg-gray-100 px-2 py-1 rounded"
                    >
                      <FaFacebookF /> 
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=https://example.com/blog/${post.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-500 hover:text-blue-700 hover:bg-gray-100 px-2 py-1 rounded"
                    >
                      <FaTwitter />
                    </a>
                    <a
                        href={`https://www.linkedin.com/shareArticle?mini=true&url=https://example.com/blog/${post.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-blue-900  rounded hover:bg-gray-100"
                      >
                        <FaLinkedinIn />
                      </a>
                    <a
                      href={`https://wa.me/?text=Check%20this%20out:%20https://example.com/blog/${post.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-green-600 hover:text-green-800 hover:bg-gray-100 px-2 py-1 rounded"
                    >
                      <FaWhatsapp /> 
                    </a>
                     <button
                        onClick={() => {
                          const blogUrl = `https://example.com/blog/${post.id}`;
                          navigator.clipboard.writeText(blogUrl);
                          alert('Link copied to clipboard!');
                        }}
                        className="text-gray-600 hover:text-gray-800  rounded hover:bg-gray-100"
                      >
                        <FaLink />
                      </button>
                  </div>
                )}
              </div>


              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
