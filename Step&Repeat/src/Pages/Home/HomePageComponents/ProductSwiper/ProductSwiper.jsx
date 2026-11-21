import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import styles from "./ProductSwiper.module.css";
import { useCart } from "../../../../Context/CartContext.jsx";
import { useFavorites } from "../../../../Context/FavoriteContext.jsx";
import { fetchSwiper } from "../../../../Api/api.js";

const ProductSwiper = () => {
  const [swiper, setSwiper] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToFavorites } = useFavorites();

  useEffect(() => {
    let stop = false;

    async function load() {
      try {
        const data = await fetchSwiper();
        if (!stop) {
          setSwiper(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        if (!stop) {
          setError(err.message || "Failed to load products");
        }
      } finally {
        if (!stop) {
          setLoading(false);
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
      <section className="status-screen" role="status" aria-live="polite">
        <div className="status-screen__spinner" aria-hidden="true" />
        <p className="status-screen__text">Loading popular products...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="status-screen status-screen--error" role="alert">
        <p className="status-screen__text">Error loading products: {error}</p>
      </section>
    );
  }

  return (
    <section id="product-swiper-section" className={styles.productSwiperSection}>
      <div className={styles.headingContainer}>
        <h1 className={styles.swiperHeading}>Our Popular Products</h1>
        <button
          className={styles.exploreButton}
          onClick={() => navigate("/shop")}
        >
          Explore More
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>

      <div className={styles.swiperContainerWrapper}>
        <button
          ref={(node) => setPrevEl(node)}
          className={styles.navArrow}
          aria-label="Previous"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>

        <div className={styles.swiperTrack}>
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={3}
            navigation={{
              prevEl,
              nextEl,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
          >
            {swiper.map((product) => (
              <SwiperSlide key={product.id}>
                <div className={styles.productCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.productInfo}>
                      <Link to={`/products/${product.id}`}>
                        <h3>{product.name}</h3>
                      </Link>
                      <p>{product.color}</p>
                    </div>
                    <button
                      className={styles.favoriteBtn}
                      onClick={() => addToFavorites(product)}
                      aria-label="Add to favorites"
                    >
                      <svg width="18" height="18" fill="none" stroke="grey" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                    </button>
                  </div>

                  <Link to={`/products/${product.id}`} className={styles.cardImage}>
                    <img
                      src={product.image || "/placeholder.png"}
                      alt={product.name}
                    />
                  </Link>

                  <div className={styles.cardFooter}>
                    <span className={styles.price}>{product.price}RON</span>
                    <button
                      className={styles.addToCartBtn}
                      onClick={() => addToCart(product)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <button
          ref={(node) => setNextEl(node)}
          className={styles.navArrow}
          aria-label="Next"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ProductSwiper;