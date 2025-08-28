import React from 'react';

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Honeymoon Destinations",
      desc: "Explore the most romantic destinations to make your honeymoon memorable.",
      img: "https://source.unsplash.com/400x250/?beach,couple",
    },
    {
      id: 2,
      title: "Budget-Friendly Honeymoon Tips",
      desc: "Plan your dream honeymoon without breaking the bank.",
      img: "https://source.unsplash.com/400x250/?mountains,travel",
    },
    {
      id: 3,
      title: "Best International Trips for Couples",
      desc: "Discover the charm of international travel with your partner.",
      img: "https://source.unsplash.com/400x250/?paris,couple",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Our Blogs</h2>
        <p className="text-lg text-gray-600 mt-2">
          Get inspired with travel tips, honeymoon ideas, and destination guides.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.map(post => (
          <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
            <img src={post.img} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.desc}</p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;

