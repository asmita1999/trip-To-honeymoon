import React from 'react';
import { Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
=======

>>>>>>> asmita
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
// import ServicesBanner from './pages/ServicesBanner';
import BestResortforHoneymoon from './pages/BestResortforHoneymoon';
import BlogDetail from './pages/BlogDetail';
import TermsAndConditions from './pages/TermsAndConditions';
<<<<<<< HEAD
=======
import PrivacyPolicy from './pages/PrivacyPolicy';
import FAQs from './components/FAQs';
>>>>>>> asmita


const App = () => {
  return (
    <div>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/aboutUs' element={<AboutUs />}/>
        <Route path='/domestic' element={<Domestic />} />
        <Route path='/international' element={<International />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/contactUs' element={<ContactUs />} />
        <Route path='/Top-Destinations' element={<TopDestinations/>}/>
        <Route path='/Trending-Places' element={<TrendingPlaces/>}/>
        {/* <Route path='/services-banner' element={<ServicesBanner/>}/> */}
        <Route path='/Banner' element={<Banner/>}/>
        <Route path='/Best-Resort-for-Honeymoon' element={<BestResortforHoneymoon/>}/>
      
        <Route path='/blog/:id' element={<BlogDetail />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='Terms-to-use' element={<TermsAndConditions />} />
        <Route path='FAQs' element={<FAQs />} />


        {/* Add more routes here as needed */}
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;