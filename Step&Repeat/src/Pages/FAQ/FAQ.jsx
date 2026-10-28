import React from "react";
import placeholder from "../../Assets/Images/placeholder.svg";
import Footer from "../../Components/Footer/Footer.jsx";
import QuestionsContainer from "./FAQPageComponents/Questions.jsx";
import styles from "./FAQ.module.css";

const FAQ = () => {
 return(
    <>
      <div className={styles.faqPageWrapper}>
        <section className={styles.fqaHeaderContainer}>
          <div className={`${styles.fqaHeaderCard} ${styles.imageCard}`}>
            <img src={placeholder} alt="Contact Banner - Sneakers" />
          </div>
          <div className={`${styles.fqaHeaderCard} ${styles.textCard}`}>
            <h1>Frequently asked questions</h1>
            <p>Find answers about sizing, checkout, shipping, returns, and how to get in touch with our team.</p>
          </div>
        </section>

        <QuestionsContainer />  
      </div>
      <Footer />
    </>  
 );
}

export default FAQ;