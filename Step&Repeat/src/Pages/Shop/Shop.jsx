import React, { useState } from "react";
import Footer from "../../Components/Footer/Footer.jsx";
import ProductList from "./ShopPageComponents/ProductList.jsx";
import shoe_image from "../../Assets/Images/AirForce.svg";
import { useCart } from "../../Context/CartContext";
import { useFavorites } from "../../Context/FavoriteContext.jsx";
import "./Shop.css";

const Shop = () => {
  const { addToCart } = useCart();
  const { addToFavorites } = useFavorites();
  const [activeTab, setActiveTab] = useState("All Products");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const [allProducts] = useState([
    { id: 1, title: "Nike 03 Air Force", category: "Lifestyle", brand: "Nike", size: "8", price: 120, color: "Black", colorCount: "01 Color", image: shoe_image },
    { id: 2, title: "Adidas Ultraboost", category: "Running", brand: "Adidas", size: "9", price: 140, color: "White", colorCount: "02 Colors", image: shoe_image },
    { id: 3, title: "New Balance 574", category: "Lifestyle", brand: "New Balance", size: "10", price: 90, color: "Red", colorCount: "01 Color", image: shoe_image },
    { id: 4, title: "Nike Pegasus", category: "Running", brand: "Nike", size: "11", price: 160, color: "Blue", colorCount: "03 Colors", image: shoe_image },
    { id: 5, title: "Adidas Stan Smith", category: "Lifestyle", brand: "Adidas", size: "8", price: 95, color: "White", colorCount: "01 Color", image: shoe_image },
    { id: 6, title: "Nike ZoomX", category: "New Arrivals", brand: "Nike", size: "9", price: 180, color: "Black", colorCount: "02 Colors", image: shoe_image },
    { id: 7, title: "New Balance Fresh Foam", category: "Running", brand: "New Balance", size: "10", price: 130, color: "Blue", colorCount: "01 Color", image: shoe_image },
    { id: 8, title: "Adidas Forum", category: "New Arrivals", brand: "Adidas", size: "11", price: 110, color: "Red", colorCount: "02 Colors", image: shoe_image },
    { id: 9, title: "Nike Blazer Mid", category: "Lifestyle", brand: "Nike", size: "8", price: 105, color: "Black", colorCount: "01 Color", image: shoe_image },
  ]);

  const handleReset = () => {
    setActiveTab("All Products");
    setSelectedSize("");
    setSelectedBrand("");
    setSelectedPrice("");
    setSelectedColor("");
  };

  const filteredProducts = allProducts.filter((product) => {
    if (activeTab !== "All Products" && product.category !== activeTab) {
      return false;
    }
    if (selectedSize && selectedSize !== "None" && product.size !== selectedSize) {
      return false;
    }
    if (selectedBrand && selectedBrand !== "None" && product.brand !== selectedBrand) {
      return false;
    }
    if (selectedColor && selectedColor !== "None" && product.color !== selectedColor) {
      return false;
    }
    if (selectedPrice && selectedPrice !== "None") {
      if (selectedPrice === "Under RON100" && product.price >= 100) return false;
      if (selectedPrice === "RON100–RON150" && (product.price < 100 || product.price > 150)) return false;
      if (selectedPrice === "RON150+" && product.price <= 150) return false;
    }

    return true;
  });

  return (
    <>
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
              <button className="reset-btn" onClick={handleReset}>Reset</button>
            </div>

            <div className="filter-grid">
              <div className="filter-group">
                <label>Size</label>
                <div className="filter-options">
                  {["None", "8", "9", "10", "11"].map((size) => (
                    <button
                      key={size}
                      className={`pill-btn ${(selectedSize === size || (!selectedSize && size === "None")) ? "selected" : ""}`}
                      onClick={() => setSelectedSize(size === "None" ? "" : size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="filter-group">
                <label>Brand</label>
                <div className="filter-options">
                  {["None", "Nike", "Adidas", "New Balance"].map((brand) => (
                    <button
                      key={brand}
                      className={`pill-btn ${(selectedBrand === brand || (!selectedBrand && brand === "None")) ? "selected" : ""}`}
                      onClick={() => setSelectedBrand(brand === "None" ? "" : brand)}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </div>

              <div className="filter-group">
                <label>Price</label>
                <div className="filter-options">
                  {["None", "Under RON100", "RON100–RON150", "RON150+"].map((price) => (
                    <button
                      key={price}
                      className={`pill-btn ${(selectedPrice === price || (!selectedPrice && price === "None")) ? "selected" : ""}`}
                      onClick={() => setSelectedPrice(price === "None" ? "" : price)}
                    >
                      {price}
                    </button>
                  ))}
                </div>
              </div>

              <div className="filter-group">
                <label>Color</label>
                <div className="filter-options">
                  {["None", "Black", "White", "Red", "Blue"].map((color) => (
                    <button
                      key={color}
                      className={`pill-btn ${(selectedColor === color || (!selectedColor && color === "None")) ? "selected" : ""}`}
                      onClick={() => setSelectedColor(color === "None" ? "" : color)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="filtered-by-box">
              <span className="filtered-title">Filtered by</span>
              <p>Size: {selectedSize || "None"}</p>
              <p>Brand: {selectedBrand || "None"}</p>
              <p>Price: {selectedPrice || "None"}</p>
              <p>Color: {selectedColor || "None"}</p>
            </div>
          </div>

          <ProductList 
            products={filteredProducts} 
            onAddToCart={addToCart} 
            addToFavorites={addToFavorites} 
          />

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