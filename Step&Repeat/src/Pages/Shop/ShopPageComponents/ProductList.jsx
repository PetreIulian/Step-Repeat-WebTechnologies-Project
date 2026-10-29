import React from "react";
import ProductCard from "./ProductCard.jsx";

export default function ProductList({ products }) {
  if (!products || products.length === 0) {
    return <p className="empty">Nu există niciun produs disponibil.</p>;
  }

  return (
    <div className="products-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}