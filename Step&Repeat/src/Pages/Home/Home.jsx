import React from 'react';
import HeroSection from "./HomePageComponents/HeroSection/HeroSection.jsx"
import Footer from "../../Components/Footer/Footer.jsx"
import ProductSwiper from './HomePageComponents/ProductSwiper/ProductSwiper.jsx';
import Collections from './HomePageComponents/Collections/Collections.jsx';

const Home = () => {
  return (
    <section className="home=page">
      <HeroSection />
      <ProductSwiper />
      <Collections/>
      <Footer />
    </section>
  );
}

export default Home;
