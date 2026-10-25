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
          <a href="#nike" className="image-wrapper">
            <img src={left_image} alt="Nike Sneakers" />
            <div className="hover-text">Nike</div>
          </a>
        </div>

        <div className="grid-center">
          <a href="#puma" className="image-wrapper">
            <img src={center_first} alt="Puma Sneakers" />
            <div className="hover-text">Puma</div>
          </a>
          <a href="#adidas" className="image-wrapper">
            <img src={center_second} alt="Adidas Sneakers" />
            <div className="hover-text">Adidas</div>
          </a>
        </div>

        <div className="grid-right">
          <a href="#newbalance" className="image-wrapper">
            <img src={right_image} alt="New Balance Sneakers" />
            <div className="hover-text">New Balance</div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Collections;