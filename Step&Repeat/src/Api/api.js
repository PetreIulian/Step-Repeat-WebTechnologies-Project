export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

export async function fetchSwiper() {
  const response = await fetch(`${API_URL}/swiper`);
  if (!response.ok) {
    throw new Error(`Eroare server: ${response.status}`);
  }
  return response.json();
}

export async function fetchQuestions() {
  const response = await fetch(`${API_URL}/questions`);
  if(!response.ok){
    throw new Error(`Eroare server: ${response.status}`);
  }
  return response.json();
}

export async function fetchShop() {
  const response = await fetch(`${API_URL}/products`);
  if(!response.ok){
    throw new Error(`Eroare server: ${response.status}`);
  }
  return response.json();
}

export async function fetchProduct(id) {
  let response = await fetch(`${API_URL}/products/${id}`);
  if (response.status === 404) {
    response = await fetch(`${API_URL}/swiper/${id}`);
  }
  if (!response.ok) {
    throw new Error(`Eroare server: ${response.status}`);
  }
  return response.json();
}

async function send(path, method, body) {
  const response = await fetch(`${API_URL}${path}`, {
    method,
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!response.ok) {
    throw new Error(`Eroare server: ${response.status}`);
  }
  return method === "DELETE" ? null : response.json();
}

export const fetchReviews = (productId) => send(`/reviews?productId=${productId}`, "GET");
export const addReview = (review) => send("/reviews", "POST", review);
export const updateReview = (id, changes) => send(`/reviews/${id}`, "PATCH", changes);
export const deleteReview = (id) => send(`/reviews/${id}`, "DELETE");
