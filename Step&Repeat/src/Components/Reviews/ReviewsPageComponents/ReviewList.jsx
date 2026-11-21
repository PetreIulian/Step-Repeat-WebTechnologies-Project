import ReviewCard from "./ReviewCard.jsx";
import styles from "./ReviewList.module.css";

export default function ReviewList({ reviews, onToggle, onDelete }) {
  if (reviews.length === 0) {
    return <p data-testid="empty">No reviews yet.</p>;
  }

  return (
    <ul className={styles.list} data-testid="list">
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}
