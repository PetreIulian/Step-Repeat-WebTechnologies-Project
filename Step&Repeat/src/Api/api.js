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
    throw new Error ('Eroare server: ${response.status}');
  }
  return response.json();
}

export async function fetchProduct(id) {
  const response = await fetch(`${API_URL}/swiper/${id}`);
  if (!response.ok) {
    throw new Error(`Eroare server: ${response.status}`);
  }
  return response.json();
}