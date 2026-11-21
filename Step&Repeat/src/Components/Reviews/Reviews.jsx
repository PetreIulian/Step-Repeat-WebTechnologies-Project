import { useEffect, useState } from "react";
import { fetchReviews, addReview, updateReview, deleteReview } from "../../Api/api.js";
import ReviewForm from "./ReviewsPageComponents/ReviewForm.jsx";
import ReviewList from "./ReviewsPageComponents/ReviewList.jsx";
import styles from "./Reviews.module.css";

export default function Reviews({ productId }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchReviews(productId)
      .then(setReviews)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [productId]);

  async function handleAdd(review) {
    const saved = await addReview({ ...review, productId });
    setReviews((prev) => [...prev, saved]);
  }

  async function handleToggle(review) {
    const saved = await updateReview(review.id, { recommended: !review.recommended });
    setReviews((prev) => prev.map((r) => (r.id === saved.id ? saved : r)));
  }

  async function handleDelete(id) {
    await deleteReview(id);
    setReviews((prev) => prev.filter((r) => r.id !== id));
  }

  return (
    <section className={styles.page}>
      <h2>Reviews</h2>
      <ReviewForm onAdd={handleAdd} />
      {loading && <p data-testid="loading">Loading reviews...</p>}
      {error && <p data-testid="error">Error loading reviews: {error}</p>}
      {!loading && !error && (
        <ReviewList reviews={reviews} onToggle={handleToggle} onDelete={handleDelete} />
      )}
    </section>
  );
}
