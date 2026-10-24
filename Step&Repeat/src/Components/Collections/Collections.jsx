import React from "react";
import "./Collections.css";
import left_image from "../../Assets/Images/left-img.svg";
import center_first from "../../Assets/Images/center1-img.svg";
import center_second from "../../Assets/Images/center2-img.svg";
import right_image from "../../Assets/Images/right-img.svg";

const Collections = () => {
  return (
    <section className="collections-container">
      <h1 className="collections-heading">Explore Our Most Popular Brands</h1>
      
      <div className="grid-container">
        <div className="grid-left">
          <img src={left_image} alt="Popular Brand Left" />
        </div>

        <div className="grid-center">
          <img src={center_first} alt="Popular Brand Center First" />
          <img src={center_second} alt="Popular Brand Center Second" />
        </div>

        <div className="grid-right">
          <img src={right_image} alt="Popular Brand Right" />
        </div>
      </div>
    </section>
  );
}

export default Collections;