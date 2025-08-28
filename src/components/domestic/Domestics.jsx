import React, { useState } from 'react';
import Domestic from '../../pages/Domestic';

const Domestics = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    destination: '',
    travelers: '',
    travelDate: ''
  });

  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert('Thank you for your enquiry! We will contact you shortly.');
    // Reset form
    setFormData({
      name: '',
      phone: '',
      location: '',
      destination: '',
      travelers: '',
      travelDate: ''
    });
  };

  const handleCallNow = () => {
    window.location.href = 'tel:+911234567890';
  };

  const packages = [
    { 
      id: 1, 
      name: "Heavenly Escape-Kashmir Tour Package", 
      duration: "5N/6D", 
      originalPrice: "₹22999", 
      discountedPrice: "₹21666",
      description: "Experience the paradise on earth with our comprehensive Kashmir tour package."
    },
    { 
      id: 2, 
      name: "Kashmir Honeymoon Tour Package", 
      duration: "4N/5D", 
      originalPrice: "₹29999", 
      discountedPrice: "₹28499",
      description: "Romantic getaway for couples with special honeymoon inclusions."
    },
    { 
      id: 3, 
      name: "Best Of Kashmir Tour", 
      duration: "4N/5D", 
      originalPrice: "₹17999", 
      discountedPrice: "₹14999",
      description: "See the best of Kashmir's attractions in this comprehensive tour."
    },
    { 
      id: 4, 
      name: "Kashmir College Trip", 
      duration: "5N/6D", 
      originalPrice: "₹17599", 
      discountedPrice: "₹14599",
      description: "Special package for student groups with budget-friendly options."
    }
  ];

  const faqs = [
    {
      question: "What are the best places to visit in Kashmir?",
      answer: "Dal Lake, Gulmarg, Pahalgam, Sonamarg, and Srinagar are among the top attractions."
    },
    {
      question: "Is it Safe to Visit Kashmir?",
      answer: "Yes, Kashmir is generally safe for tourists. However, it's always recommended to check current travel advisories."
    },
    {
      question: "What Food should I try in Kashmir?",
      answer: "Don't miss Rogan Josh, Gushtaba, Yakhni, and Kashmiri Pulao."
    },
    {
      question: "Which activities to do in Kashmir?",
      answer: "Shikara ride on Dal Lake, Gondola ride in Gulmarg, skiing, and visiting Mughal gardens."
    }
  ];

  const articles = [
    {
      title: "Kashmir in December",
      excerpt: "Kashmir in December is nothing short of a magical winter wonderland. As the snow begins to blanket the majestic valleys...",
      readTime: "5 min read"
    },
    {
      title: "Exploring Magic of Kashmir in November",
      excerpt: "As November steps in, Kashmir begins its transformation into a winter wonderland. The last traces of autumn fade away...",
      readTime: "4 min read"
    },
    {
      title: "Best Time To Visit Kashmir",
      excerpt: "Kashmir, a place that stands top of every traveler's bucket list, after all, it's the most beautiful place in the world...",
      readTime: "6 min read"
    },
    {
      title: "Kashmir Travel Tips with Do's & Don'ts",
      excerpt: "A piece of paradise that reflects the beauty of heaven with its glorious landscape and peaceful surrounding...",
      readTime: "7 min read"
    },
    {
      title: "Winter in Kashmir–Winter Activities in Kashmir",
      excerpt: "As winter is around the corner, daydreaming of lovely snowfall across the mountains is quite obvious...",
      readTime: "5 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header Section */}
      <header className="bg-blue-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Visit Kashmir</h1>
          <button 
            onClick={handleCallNow}
            className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg font-semibold transition-colors"
          >
            Call Now
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-12 px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Get upto 50% off</h2>
        <p className="text-xl mb-2">Book A Holiday Package</p>
        <p className="text-xl font-semibold mb-8">In 10 Minutes & Get <span className="text-yellow-300">Upto 50% Off</span></p>
        
        <div className="mb-8">
          <p className="text-lg mb-2">Introducing</p>
          <h3 className="text-3xl font-bold bg-white text-blue-800 inline-block px-6 py-2 rounded-lg">10 Mins Booking</h3>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Let us Help!</h2>
          <p className="text-center text-gray-600 mb-8">We make sure you get your desired travel services with minimal efforts.</p>
          
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Type here..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="99xxxxx7x5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-gray-700 mb-2">Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Type here..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="destination" className="block text-gray-700 mb-2">Destination</label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleInputChange}
                  placeholder="E.g., Kashmir"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="travelers" className="block text-gray-700 mb-2">No. Of Travelers</label>
                <input
                  type="number"
                  id="travelers"
                  name="travelers"
                  value={formData.travelers}
                  onChange={handleInputChange}
                  placeholder="Type here..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="travelDate" className="block text-gray-700 mb-2">Date Of Travel</label>
                <input
                  type="date"
                  id="travelDate"
                  name="travelDate"
                  value={formData.travelDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            
            <div className="flex items-center mb-6">
              <input 
                type="checkbox" 
                id="secure" 
                className="h-5 w-5 text-blue-600 focus:ring-blue-500"
                required
              />
              <label htmlFor="secure" className="ml-2 text-gray-700">We Are Safe And Secure</label>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Stay</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Meals</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Transportation</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">More</span>
            </div>
            
            <div className="text-center mb-6">
              <p className="text-gray-500 line-through">Starting from ₹9999</p>
              <p className="text-2xl font-bold text-green-600">₹7999 Per Person</p>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </section>

      {/* Tour Packages Section */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Kashmir Tour Packages</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{pkg.name}</h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{pkg.duration}</span>
                  <div className="text-right">
                    <p className="text-gray-500 line-through text-sm">{pkg.originalPrice}</p>
                    <p className="text-lg font-bold text-green-600">{pkg.discountedPrice}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{pkg.description}</p>
                <button 
                  onClick={() => setSelectedPackage(pkg)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Kashmir Travel Guides</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-semibold">Read more</span>
                  <span className="text-gray-500 text-sm">{article.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Time to Visit Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Best Time To Visit Kashmir</h2>
            <p className="text-gray-600 mb-4">
              Kashmir, a place that stands top of every traveler's bucket list, after all, it's the most beautiful place in the world. 
              But the most common concern of travelers; what is the best time to visit Kashmir? The answer is, it depends on what you 
              want to experience.
            </p>
            <p className="text-gray-600 mb-4">
              The greatest season to visit Kashmir is between September and June, when the weather is good and allows you to enjoy 
              the snow while still seeing the ultimate beauty of Kashmir. Book Kashmir tour package around the said time to enjoy 
              a lovely vacation to the fullest.
            </p>
            <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
              Read more
            </button>
          </div>
        </div>
      </section>

      {/* Package Details Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h3 className="text-2xl font-bold mb-4">{selectedPackage.name}</h3>
            <div className="flex justify-between mb-4">
              <span className="font-semibold">Duration:</span>
              <span>{selectedPackage.duration}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="font-semibold">Original Price:</span>
              <span className="line-through text-gray-500">{selectedPackage.originalPrice}</span>
            </div>
            <div className="flex justify-between mb-6">
              <span className="font-semibold">Discounted Price:</span>
              <span className="text-green-600 font-bold text-xl">{selectedPackage.discountedPrice}</span>
            </div>
            <p className="text-gray-600 mb-6">{selectedPackage.description}</p>
            <div className="flex space-x-4">
              <button 
                onClick={() => setSelectedPackage(null)}
                className="flex-1 bg-gray-300 hover:bg-gray-400 py-3 rounded-lg font-semibold transition-colors"
              >
                Close
              </button>
              <button 
                onClick={handleCallNow}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="mb-4">© 2025 Kashmir Tour Packages. All rights reserved.</p>
          <a 
            href="https://invisit.in/kashmir-tour-packages.php" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-100"
          >
        
          </a>
        </div>
      </footer>

      {/* Floating Call Button */}
      <div className="fixed bottom-4 right-4">
        <button 
          onClick={handleCallNow}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Domestics;