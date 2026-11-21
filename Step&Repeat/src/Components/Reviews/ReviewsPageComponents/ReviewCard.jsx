import styles from "./ReviewCard.module.css";

export default function ReviewCard({ review, onToggle, onDelete }) {
  return (
    <li className={`${styles.card} ${review.recommended ? styles.recommended : ""}`} data-testid="item">
      <h4 data-testid="item-title">{review.title}</h4>
      {review.text && <p>{review.text}</p>}
      <div className={styles.actions}>
        <button onClick={() => onToggle(review)} data-testid="item-toggle">
          {review.recommended ? "Recommended ✓" : "Recommend"}
        </button>
        <button onClick={() => onDelete(review.id)} data-testid="item-delete">
          Delete
        </button>
      </div>
    </li>
  );
}
