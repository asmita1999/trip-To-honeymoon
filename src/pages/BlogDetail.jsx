import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaLink,
} from 'react-icons/fa';
import { FiShare2 } from 'react-icons/fi';
import image from "../assets/images/complaint.jpg";

const BlogDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [showShare, setShowShare] = useState(false);

  if (!state) {
    return <div className="p-10 text-center">No blog found.</div>;
  }

  const { title, desc, img, content, date, id } = state;
  const blogUrl = `https://example.com/blog/${id}`;

  const toggleShare = () => {
    setShowShare((prev) => !prev);
  };

  return (
    <div className="bg-white m-4 md:m-14 min-h-screen">
      {/* Top Bar with Back and Share */}
      <div className="px-4 md:px-10 max-w-5xl mx-auto mt-6 flex justify-between items-center relative">
        <div
          onClick={() => navigate(-1)}
          className="text-yellow-600 font-medium text-sm cursor-pointer hover:underline"
        >
          ← Back to All Articles
        </div>

        {/* Share Icon */}
        <div className="relative">
          <FiShare2
            onClick={toggleShare}
            className="text-gray-600 hover:text-blue-600 cursor-pointer text-xl"
          />
          {showShare && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full bg-white border rounded-lg shadow-md flex flex-wrap md:flex-nowrap space-x-2 md:space-x-3 p-2 w-max z-50">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(blogUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 p-2 hover:bg-gray-100 rounded"
              >
                <FaFacebookF />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(blogUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-500 hover:text-blue-700 p-2 hover:bg-gray-100 rounded"
              >
                <FaTwitter />
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(blogUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-700 hover:text-blue-900 p-2 hover:bg-gray-100 rounded"
              >
                <FaLinkedinIn />
              </a>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(`Check this out: ${blogUrl}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-600 hover:text-green-800 p-2 hover:bg-gray-100 rounded"
              >
                <FaWhatsapp />
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(blogUrl);
                  alert('Link copied to clipboard!');
                }}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 p-2 hover:bg-gray-100 rounded"
              >
                <FaLink />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Image */}
      <div className="flex justify-center mt-6">
        <div className="relative w-full sm:w-[90%] md:w-[70%] h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden rounded-b-xl shadow">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="px-4 md:px-10 py-6 max-w-5xl mx-auto">
        <div className="text-xs md:text-sm text-gray-800 mb-2">
          Published: {date} • 1 min read
        </div>

        <h1 className="text-xl md:text-3xl font-bold mb-2">{title}</h1>
        <p className="text-sm md:text-base text-gray-600 mb-4">{desc}</p>

        <div className="text-sm md:text-base text-gray-800 leading-relaxed border-t pt-4 whitespace-pre-line">
          {content || 'This is the full blog content coming from BlogSection.'}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
