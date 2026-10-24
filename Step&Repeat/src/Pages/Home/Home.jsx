import React from 'react';
import HeroSection from "../../Components/HeroSection/HeroSection.jsx"
import Footer from "../../Components/Footer/Footer.jsx"
import ProductSwiper from '../../Components/ProductSwiper/ProductSwiper.jsx';
import Collections from '../../Components/Collections/Collections.jsx';

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
