import React from "react";
import s from "../Shop.module.css";
import ProductCard from "./ProductCard.jsx";

export default function ProductList({ products, onAddToCart, addToFavorites }) {
  if (!products || products.length === 0) {
    return <p className={s["empty"]}>Nu există niciun produs disponibil.</p>;
  }

  return (
    <div className={s["products-grid"]}>
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onAddToCart={onAddToCart} 
          addToFavorites={addToFavorites}
        />
      ))}
    </div>
  );
}