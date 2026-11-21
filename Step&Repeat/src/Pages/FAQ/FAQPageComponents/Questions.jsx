import React, { useEffect, useState } from "react";
import styles from "./Questions.module.css";
import { fetchQuestions } from "../../../Api/api";

const ContainerQuestions = () => {
  const [questions, setQuestions] = useState("");
  const [loading, setIsLoading] =  useState(true);
  const [error, setError] = useState(null);

  const [openId, setOpenId] = useState(null);

  const toggleQuestion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  useEffect(() => {
    let stop = false;

    async function load() {
      try{
        const data = await fetchQuestions();
        if(!stop) {
          setQuestions(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        if (!stop) {
          setError(err.message || "Failed to load questions");
        }
      } finally {
        if(!stop) {
          setIsLoading(false);
        }
      }
    }

    load();

    return () => {
      stop = true;
    };
  }, []);

  if (loading) {
    return (
      <section className="status-screen" role="status">
        <div className="status-screen__spinner" />
        <p className="status-screen__text">Loading questions...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="status-screen status-screen--error">
        <p className="status-screen__text">Error loading questions: {error}</p>
      </section>
    );
  }

  return (
    <div className={styles.questionsContainerPage}>
      <section className={styles.headerGridContainer}>
        <div>
          <h1 className={styles.gridLeftHeading}>Questions & answers</h1>
          <p className={styles.gridLeftText}>
            Browse common questions about sizing, product availability, checkout, shipping, returns, and how to contact our team.
          </p>
        </div>
        <div className={styles.gridRight}>
          <h2 className={styles.gridRightHeading}>Need help?</h2>
          <ul className={styles.gridRightContact}>
            <li>Email: contact@stepandrepeat.com</li>
            <li>Phone: +40 766 542 882</li>
            <li>Address: Splaiul Independenței 313, Bucharest, Romania</li>
          </ul>
        </div>
      </section>

      <section className={styles.questionsListSection}>
        {questions.map((bundle) => {
          const isOpen = openId === bundle.id;

          return (
            <article className={styles.bundle} key={bundle.id}>
              <button
                type="button"
                className={`${styles.questionBox} ${isOpen ? styles.questionBoxOpen : ""}`}
                onClick={() => toggleQuestion(bundle.id)}
                aria-expanded={isOpen}
              >
                <h3 className={styles.question}>{bundle.question}</h3>
                <span className={styles.iconToggle} aria-hidden="true">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <div className={styles.answerBox}>
                  <p className={styles.answer}>{bundle.answer}</p>
                </div>
              )}
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default ContainerQuestions;