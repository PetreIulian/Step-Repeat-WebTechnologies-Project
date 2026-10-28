import React, { useState } from "react";
import "./Questions.css";

const faqData = [
  {
    id: 1,
    question: "How do I choose the right size?",
    answer: "Compare your foot measurements with any sizing guidance provided for the product. If you are unsure about the fit, contact our team before placing your order."
  },
  {
    id: 2,
    question: "Where can I find a specific product?",
    answer: "Browse the Shop and Collection pages to explore sneakers. For questions about a particular model or size, contact our team to confirm availability."
  },
  {
    id: 3,
    question: "What payment methods do you accept?",
    answer: "Review the payment options shown at checkout before placing your order. Contact our team if you need clarification about an available method."
  },
  {
    id: 4,
    question: "How long does shipping take?",
    answer: "Review the available delivery information before completing your order. For questions about delivery estimates or an existing order, contact our team with your order details."
  },
  {
    id: 5,
    question: "Can I return or exchange an order?",
    answer: "Contact our team with your order details to confirm the applicable return or exchange conditions and next steps before sending an item back."
  },
  {
    id: 6,
    question: "How can I contact the Step & Repeat team?",
    answer: "Reach us by email at contact@stepandrepeat.com or call +40 766 542 882. You can also use the contact form below and we will get back to you as soon as possible."
  }
];

const ContainerQuestions = () => {
  const [openId, setOpenId] = useState(null);

  const toggleQuestion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="questions-container-page">
      <section className="header-grid-container">
        <div className="grid-left">
          <h1 className="grid-left-heading">Questions & answers</h1>
          <p className="grid-left-text">
            Browse common questions about sizing, product availability, checkout, shipping, returns, and how to contact our team.
          </p>
        </div>
        <div className="grid-right">
          <h2 className="grid-right-heading">Need help?</h2>
          <ul className="grid-right-contact">
            <li>Email: contact@stepandrepeat.com</li>
            <li>Phone: +40 766 542 882</li>
            <li>Address: Splaiul Independenței 313, Bucharest, Romania</li>
          </ul>
        </div>
      </section>

      <section className="questions-list-section">
        {faqData.map((bundle) => {
          const isOpen = openId === bundle.id;

          return (
            <article className="bundle" key={bundle.id}>
              <div 
                className="question-header" 
                onClick={() => toggleQuestion(bundle.id)}
                style={{ cursor: "pointer" }}
              >
                <h3 className="question">{bundle.question}</h3>
                <span className="icon-toggle" aria-hidden="true">
                  {isOpen ? "−" : "+"}
                </span>
              </div>
              
              {isOpen && (
                <p className="answer">{bundle.answer}</p>
              )}
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default ContainerQuestions;