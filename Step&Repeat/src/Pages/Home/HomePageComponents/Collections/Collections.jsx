import React from "react";
import styles from "./Collections.module.css";
import left_image from "../../../../Assets/Images/left-img.svg";
import center_first from "../../../../Assets/Images/center1-img.svg";
import center_second from "../../../../Assets/Images/center2-img.svg";
import right_image from "../../../../Assets/Images/right-img.svg";

const Collections = () => {
  return (
    <section className={styles.collectionsContainer}>
      <h1 className={styles.collectionsHeading}>Explore Our Most Popular Brands</h1>
      
      <div className={styles.gridContainer}>
        <div className={styles.gridLeft}>
          <a href="#nike" className={styles.imageWrapper}>
            <img src={left_image} alt="Nike Sneakers" />
            <div className={styles.hoverText}>Nike</div>
          </a>
        </div>

        <div className={styles.gridCenter}>
          <a href="#puma" className={styles.imageWrapper}>
            <img src={center_first} alt="Puma Sneakers" />
            <div className={styles.hoverText}>Puma</div>
          </a>
          <a href="#adidas" className={styles.imageWrapper}>
            <img src={center_second} alt="Adidas Sneakers" />
            <div className={styles.hoverText}>Adidas</div>
          </a>
        </div>

        <div className={styles.gridRight}>
          <a href="#newbalance" className={styles.imageWrapper}>
            <img src={right_image} alt="New Balance Sneakers" />
            <div className={styles.hoverText}>New Balance</div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Collections;