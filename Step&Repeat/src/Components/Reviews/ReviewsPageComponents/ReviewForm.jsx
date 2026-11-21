import { useState } from "react";
import styles from "./ReviewForm.module.css";

export default function ReviewForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  function valideaza() {
    if (!title.trim()) return "Title is required";
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const msg = valideaza();
    setError(msg);
    if (msg) return;

    setSending(true);
    try {
      await onAdd({ title: title.trim(), text: text.trim(), recommended: false });
      setTitle("");
      setText("");
    } catch (err) {
      setError(`Could not save review: ${err.message}`);
    } finally {
      setSending(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} data-testid="form">
      <input
        className={styles.input}
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        data-testid="form-title"
      />
      <textarea
        className={styles.input}
        placeholder="Your review"
        value={text}
        onChange={(e) => setText(e.target.value)}
        data-testid="form-text"
      />
      {error && <p className={styles.error} data-testid="form-error">{error}</p>}
      <button className={styles.button} type="submit" disabled={sending} data-testid="form-submit">
        {sending ? "Sending..." : "Add review"}
      </button>
    </form>
  );
}
