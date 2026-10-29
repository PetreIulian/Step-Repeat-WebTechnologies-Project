import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-card-header">
        <div>
          <h4>{product.title}</h4>
          <span className="product-color-info">{product.colorCount}</span>
        </div>
        <button className="wishlist-btn">
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>
      
      <div className="product-image-container">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="product-card-footer">
        <span className="product-price">{product.price}</span>
        <button className="add-to-cart-btn">Add To Cart</button>
      </div>
    </div>
  );
}