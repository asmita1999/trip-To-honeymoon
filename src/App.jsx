// import React from 'react';
// import { Routes, Route } from 'react-router-dom';

// import NavBar from './components/NavBar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import ContactUs from './pages/ContactUs';
// import AboutUs from './pages/AboutUs';
// import Domestic from './pages/Domestic';
// import International from './pages/International';
// import Blogs from './pages/Blogs';
// import TopDestinations from './pages/TopDestinations';
// import TrendingPlaces from './pages/Trendingplaces';
// import Banner from './components/Banner';
// import InternationalDestinations from "./components/InternationalDestinations";
// import DestinationPage from "./components/DestinationPage";
// import PackageDetail from "./components/PackageDetail";
// // import ServicesBanner from './pages/ServicesBanner';
// import BestResortforHoneymoon from './pages/BestResortforHoneymoon';
// import InternationalSpecialDetails from "./components/InternationalSpecialDetails";
// import AllImagesPage from "./components/AllImagesPage";
// import BookNowPage from "./components/BookNowPage";
// import Domestics from "./components/domestic/Domestics";
// import DestinationDropdown from "./components/domestic/DestinationDropdown";
// import StatePage from "./components/domestic/StatePage";
// // import Domestic from "./pages/Domestic"; 

// const App = () => {
//   return (
//     <div>
//       <NavBar />
//        <div className="p-6 bg-gray-100 min-h-screen">
//         <h1 className="text-3xl font-bold text-center mb-6">Domestic Destinations</h1>

//         {/* Dropdown */}
//         <div className="flex justify-center">
//           <DestinationDropdown />
//         </div>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path='/aboutUs' element={<AboutUs />}/>
//         <Route path='/domestic' element={<Domestic />} />
//         <Route path='/international' element={<International />} />
//         <Route path='/blogs' element={<Blogs />} />
//         <Route path='/contactUs' element={<ContactUs />} />
//         <Route path='/Top-Destinations' element={<TopDestinations/>}/>
//         <Route path='/Trending-Places' element={<TrendingPlaces/>}/>
//         {/* <Route path='/services-banner' element={<ServicesBanner/>}/> */}
//         <Route path='/Banner' element={<Banner/>}/>
//         <Route path="/" element={<InternationalDestinations />} />
//         <Route path="/destination/:slug" element={<DestinationPage />} />
//         <Route path="/destination/:slug/:packageId" element={<PackageDetail />} />
//         <Route path='/Best-Resort-for-Honeymoon' element={<BestResortforHoneymoon/>}/>
//         <Route path="/package/:id" element={<InternationalSpecialDetails />} />
//         <Route path="/all-images" element={<AllImagesPage />} />
//         <Route path="/book-now" element={<BookNowPage />} />
//         <Route path="/domestic" element={<Domestics />} />
//         <Route path="/destination/:state" element={<StatePage />} />
//         <Route path="/Destination-Dropdown" element={<DestinationDropdown/>} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Domestic from './pages/Domestic';
import International from './pages/International';
import Blogs from './pages/Blogs';
import TopDestinations from './pages/TopDestinations';
import TrendingPlaces from './pages/Trendingplaces';
import Banner from './components/Banner';
import InternationalDestinations from "./components/InternationalDestinations";
import DestinationPage from "./components/DestinationPage";
import PackageDetail from "./components/PackageDetail";
import BestResortforHoneymoon from './pages/BestResortforHoneymoon';
import InternationalSpecialDetails from "./components/InternationalSpecialDetails";
import AllImagesPage from "./components/AllImagesPage";
import BookNowPage from "./components/BookNowPage";
import Domestics from "./components/domestic/Domestics";
import DestinationDropdown from "./components/domestic/DestinationDropdown";
import StatePage from "./components/domestic/StatePage";

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="p-6 bg-gray-100 min-h-screen">
        
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path='/aboutUs' element={<AboutUs />}/>
          <Route path='/domestic' element={<Domestic />} />
          <Route path='/international' element={<International />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/contactUs' element={<ContactUs />} />
          <Route path='/Top-Destinations' element={<TopDestinations/>}/>
          <Route path='/Trending-Places' element={<TrendingPlaces/>}/>
          <Route path='/Banner' element={<Banner/>}/>
          <Route path='/Best-Resort-for-Honeymoon' element={<BestResortforHoneymoon/>}/>
          
          {/* Destination & Packages */}
          <Route path="/destination/:slug" element={<DestinationPage />} />
          <Route path="/destination/:slug/:packageId" element={<PackageDetail />} />
          <Route path="/package/:id" element={<InternationalSpecialDetails />} />
          
          {/* Extra Pages */}
          <Route path="/all-images" element={<AllImagesPage />} />
          <Route path="/book-now" element={<BookNowPage />} />
          
          {/* Domestic Dropdown -> StatePage */}
          <Route path="/domestic-list" element={<Domestics />} />
          <Route path="/Destination-Dropdown" element={<DestinationDropdown />} />
          <Route path="/destination/:state" element={<StatePage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
