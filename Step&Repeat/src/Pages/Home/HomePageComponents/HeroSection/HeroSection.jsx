import React from "react";
import hero_bg from "../../../../Assets/Images/FullBackground.svg";
import sneaker from "../../../../Assets/Images/Shoe.svg";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section 
      className={styles.heroSection} 
      style={{ backgroundImage: `url(${hero_bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className={styles.leftGrid}>
        <div className={styles.textContainer}>
          <h1 className={styles.heroHeading}>Walk with Style, Step with Confidence</h1>
          <h2 className={styles.heroSubheading}>
            Discover the perfect blend of style, comfort and quality. Our<br />
            collection of shoes is designed to elevate your every step.
          </h2>
          <div className={styles.ctaContainer}>
            <button className={styles.buttonFirst}>Shop Now</button>
            <button className={styles.buttonSecond}>Browse Sneakers</button>
          </div>
        </div>
      </div>

      <div className={styles.rightGrid}>
        <img src={sneaker} alt="sneaker" />
      </div>
    </section>
  );
};

export default HeroSection;