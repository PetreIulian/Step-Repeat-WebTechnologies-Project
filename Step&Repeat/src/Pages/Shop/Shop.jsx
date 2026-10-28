import React, { useState } from "react";
import Footer from "../../Components/Footer/Footer.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import shoe_image from "../../Assets/Images/AirForce.svg"
import "./Shop.css";

const Shop = () => {
  const [activeTab, setActiveTab] = useState("All Products");
  const [selectedSize, setSelectedSize] = useState("8");
  const [selectedBrand, setSelectedBrand] = useState("Nike");
  const [selectedPrice, setSelectedPrice] = useState("$100–$150");
  const [selectedColor, setSelectedColor] = useState("Black");

  const products = Array.from({ length: 9}, (_, index) => ({
    id: index + 1,
    title: "Nike 03 Air Force",
    colorCount: "01 Color",
    price: "$105.99",
    image: shoe_image
  }));

  return (
    <>
      <Navbar />

      <section className="products-store-wrapper">
        <div className="shop-container">
          <div className="filters-header">
            <span className="filters-label">Filters</span>
            <div className="filter-tabs">
              {["All Products", "Running", "Lifestyle", "New Arrivals"].map((tab) => (
                <button
                  key={tab}
                  className={`filter-tab-btn ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="advanced-filters-card">
            <div className="advanced-filters-top">
              <h3>Advanced Filters</h3>
              <button className="reset-btn">Reset</button>
            </div>

            <div className="filter-grid">
              <div className="filter-group">
                <label>Size</label>
                <div className="filter-options">
                  {["8", "9", "10", "11"].map((size) => (
                    <button
                      key={size}
                      className={`pill-btn ${selectedSize === size ? "selected" : ""}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="filter-group">
                <label>Brand</label>
                <div className="filter-options">
                  {["Nike", "Adidas", "New Balance"].map((brand) => (
                    <button
                      key={brand}
                      className={`pill-btn ${selectedBrand === brand ? "selected" : ""}`}
                      onClick={() => setSelectedBrand(brand)}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </div>

              <div className="filter-group">
                <label>Price</label>
                <div className="filter-options">
                  {["Under $100", "$100–$150", "$150+"].map((price) => (
                    <button
                      key={price}
                      className={`pill-btn ${selectedPrice === price ? "selected" : ""}`}
                      onClick={() => setSelectedPrice(price)}
                    >
                      {price}
                    </button>
                  ))}
                </div>
              </div>

              <div className="filter-group">
                <label>Color</label>
                <div className="filter-options">
                  {["Black", "White", "Red", "Blue"].map((color) => (
                    <button
                      key={color}
                      className={`pill-btn ${selectedColor === color ? "selected" : ""}`}
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="filtered-by-box">
              <span className="filtered-title">Filtered by</span>
              <p>Size: {selectedSize}</p>
              <p>Brand: {selectedBrand}</p>
              <p>Price: {selectedPrice}</p>
              <p>Color: {selectedColor}</p>
            </div>
          </div>

          <div className="products-grid">
            {products.map((product) => (
              <div className="product-card" key={product.id}>
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
            ))}
          </div>

          <div className="load-more-container">
            <button className="load-more-btn">
              Load More Products
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Shop;