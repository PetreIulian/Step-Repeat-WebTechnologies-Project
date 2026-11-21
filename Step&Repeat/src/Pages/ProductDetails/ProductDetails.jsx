import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchProduct } from "../../Api/api.js";
import { useCart } from "../../Context/CartContext.jsx";
import styles from "./ProductDetails.module.css";
import Reviews from "../../Components/Reviews/Reviews.jsx";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { addToCart } = useCart();

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    setError(null);

    fetchProduct(id)
      .then((data) => {
        if (!ignore) {
          setProduct(data);
          setError(null);
        }
      })
      .catch((err) => {
        if (!ignore) setError(err.message);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [id]);

  if (loading) {
    return <p data-testid="loading">Loading product...</p>;
  }

  if (error) {
    return (
      <section className={styles.detailContainer}>
        <p data-testid="error">Produsul nu a putut fi încărcat: {error}</p>
        <Link to="/">Înapoi la pagina principală</Link>
      </section>
    );
  }

  const name = product.name ?? product.title;

  return (
    <section className={styles.detailContainer} data-testid="detail">
      <Link to="/" className={styles.backLink}>
        Înapoi
      </Link>

      <div className={styles.content}>
        <img
          src={product.image || "/placeholder.png"}
          alt={name}
          className={styles.image}
        />

        <div className={styles.info}>
          <h2 data-testid="detail-title">{name}</h2>
          <p>{product.colorCount ?? product.color}</p>
          <p className={styles.price}>{product.price} RON</p>
          {product.description && <p>{product.description}</p>}

          <button onClick={() => addToCart(product)}>Add To Cart</button>
        </div>
      </div>

      <Reviews productId={id} />
    </section>
  );
};

export default ProductDetailPage;