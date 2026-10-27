import React from "react";
import placeholder from "../../Assets/Images/placeholder.svg";
import Footer from "../../Components/Footer/Footer.jsx"
import QuestionsContainer from "./FAQPageComponents/Questions.jsx";
import "./FAQ.css"

const FAQ = () => {
 return(
    <div className="faq-page-wrapper">
      <section className="contact-header-container">
        <div className="contact-header-card image-card">
          <img src={placeholder} alt="Contact Banner - Sneakers" />
        </div>
        <div className="contact-header-card text-card">
          <h1>Frequently asked questions</h1>
          <p>Find answers about sizing, checkout, shipping, returns, and how to get in touch with our team.</p>
        </div>
      </section>

      <QuestionsContainer />  

      <Footer />
    </div>
 );
}

export default FAQ;