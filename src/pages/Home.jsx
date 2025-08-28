import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import DestinationCard from '../components/DestinationCard';
import TrendingPlaces from './Trendingplaces';
import BestResortforHoneymoon from './BestResortforHoneymoon'
import Hero from '../components/homeComponent/Hero';
import Banner from '../components/Banner';
import ServicesWeOffer from '../components/ServicesWeOffer';


const Home = () => {
  return (
    <div className="font-sans text-gray-800 overflow-hidden">
    <Hero />
    <DestinationCard />
    <TrendingPlaces />
    <Banner />
     <ServicesWeOffer />  
    <BestResortforHoneymoon />
    
      

    
    
   
    
    </div>
  );
};
export default Home;