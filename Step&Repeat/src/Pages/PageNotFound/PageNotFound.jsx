import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Footer from "../../Components/Footer/Footer.jsx";
import styles from "./PageNotFound.module.css";

const PageNotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <div className={styles.notFoundWrapper}>
        <section className={styles.notFoundCard} data-testid="not-found">
          <h1 className={styles.errorCode}>404</h1>
          <h2 className={styles.title}>Page not found</h2>
          <p className={styles.message}>
            Looks like this pair walked away. The page{" "}
            <span className={styles.path}>{location.pathname}</span> doesn't
            exist or has been moved.
          </p>

          <div className={styles.actions}>
            <Link to="/" className={`${styles.button} ${styles.primaryButton}`}>
              Back to home
            </Link>
            <Link to="/shop" className={`${styles.button} ${styles.secondaryButton}`}>
              Go to shop
            </Link>
          </div>

          <button
            type="button"
            className={styles.backLink}
            onClick={() => navigate(-1)}
          >
            ← Go back to previous page
          </button>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default PageNotFound;
