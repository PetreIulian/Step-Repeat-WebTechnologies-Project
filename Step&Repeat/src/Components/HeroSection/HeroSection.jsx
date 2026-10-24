import React from "react"
import hero_bg from "../../Assets/Images/FullBackground.svg" 
import sneaker from "../../Assets/Images/Shoe.svg"
import "./HeroSection.css"

const HeroSection = () => {
      return (
            <section 
                  className="hero-section" 
                  style={{ backgroundImage: `url(${hero_bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <div className="left-grid">
                        <div className="text-container">
                              <h1 className="hero-heading">Walk with Style, Step with Confidence</h1>
                              <h2 className="hero-subheading">Discover the perfect blend of style, comfort and quality. Our<br/>collection of shoes is designed to elevate your every step.</h2>
                              <div className="cta-container">
                                    <button className="button-first">Shop Now</button>
                                    <button className="button-second">Browse Sneakers</button>
                              </div>
                        </div>
                  </div>

                  <div className="right-grid">
                        <img src={sneaker} alt="sneaker"></img>
                  </div>
            </section>
      );
}

export default HeroSection;