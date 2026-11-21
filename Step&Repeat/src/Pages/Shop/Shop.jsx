import React, { useState, useEffect } from "react";
import Footer from "../../Components/Footer/Footer.jsx";
import ProductList from "./ShopPageComponents/ProductList.jsx";
import { useCart } from "../../Context/CartContext";
import { useFavorites } from "../../Context/FavoriteContext.jsx";
import s from "./Shop.module.css";
import { fetchShop } from "../../Api/api.js";
 
const PAGE_SIZE = 6;
 
const Shop = () => {
  const { addToCart } = useCart();
  const { addToFavorites } = useFavorites();
 
  const [activeTab, setActiveTab] = useState("All Products");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
 
  const [products, setProducts] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
 
  const handleReset = () => {
    setActiveTab("All Products");
    setSelectedSize("");
    setSelectedBrand("");
    setSelectedPrice("");
    setSelectedColor("");
  };
 
  useEffect(() => {
    let stop = false;
 
    async function load() {
      try {
        const data = await fetchShop();
        if (!stop) {
          setProducts(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        if (!stop) {
          setError(err.message || "Failed to load shop");
        }
      } finally {
        if (!stop) {
          setIsLoading(false);
        }
      }
    }
 
    load();
 
    return () => {
      stop = true;
    };
  }, []);
 
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [activeTab, selectedSize, selectedBrand, selectedPrice, selectedColor]);
 
  if (loading) {
    return (
      <section className="status-screen" role="status">
        <div className="status-screen__spinner" />
        <p className="status-screen__text">Loading shop...</p>
      </section>
    );
  }
 
  if (error) {
    return (
      <section className="status-screen status-screen--error">
        <p className="status-screen__text">Error loading shop: {error}</p>
      </section>
    );
  }
 
  const filteredProducts = products.filter((item) => {
    const price = Number(item.price);
 
    if (activeTab !== "All Products" && item.category !== activeTab) return false;
    if (selectedSize && String(item.size) !== selectedSize) return false;
    if (selectedBrand && item.brand !== selectedBrand) return false;
    if (selectedColor && item.color !== selectedColor) return false;
 
    if (selectedPrice === "Under RON100" && price >= 100) return false;
    if (selectedPrice === "RON100–RON150" && (price < 100 || price > 150)) return false;
    if (selectedPrice === "RON150+" && price <= 150) return false;
 
    return true;
  });
 
  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;
 
  return (
    <>
      <section className={s["products-store-wrapper"]}>
        <div className={s["shop-container"]}>
          <div className={s["filters-header"]}>
            <span className={s["filters-label"]}>Filters</span>
            <div className={s["filter-tabs"]}>
              {["All Products", "Running", "Lifestyle", "New Arrivals"].map((tab) => (
                <button
                  key={tab}
                  className={`${s["filter-tab-btn"]} ${activeTab === tab ? s["active"] : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
 
          <div className={s["advanced-filters-card"]}>
            <div className={s["advanced-filters-top"]}>
              <h3>Advanced Filters</h3>
              <button className={s["reset-btn"]} onClick={handleReset}>Reset</button>
            </div>
 
            <div className={s["filter-grid"]}>
              <div className={s["filter-group"]}>
                <label>Size</label>
                <div className={s["filter-options"]}>
                  {["None", "8", "9", "10", "11"].map((size) => (
                    <button
                      key={size}
                      className={`${s["pill-btn"]} ${(selectedSize === size || (!selectedSize && size === "None")) ? s["selected"] : ""}`}
                      onClick={() => setSelectedSize(size === "None" ? "" : size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
 
              <div className={s["filter-group"]}>
                <label>Brand</label>
                <div className={s["filter-options"]}>
                  {["None", "Nike", "Adidas", "New Balance"].map((brand) => (
                    <button
                      key={brand}
                      className={`${s["pill-btn"]} ${(selectedBrand === brand || (!selectedBrand && brand === "None")) ? s["selected"] : ""}`}
                      onClick={() => setSelectedBrand(brand === "None" ? "" : brand)}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </div>
 
              <div className={s["filter-group"]}>
                <label>Price</label>
                <div className={s["filter-options"]}>
                  {["None", "Under RON100", "RON100–RON150", "RON150+"].map((price) => (
                    <button
                      key={price}
                      className={`${s["pill-btn"]} ${(selectedPrice === price || (!selectedPrice && price === "None")) ? s["selected"] : ""}`}
                      onClick={() => setSelectedPrice(price === "None" ? "" : price)}
                    >
                      {price}
                    </button>
                  ))}
                </div>
              </div>
 
              <div className={s["filter-group"]}>
                <label>Color</label>
                <div className={s["filter-options"]}>
                  {["None", "Black", "White", "Red", "Blue"].map((color) => (
                    <button
                      key={color}
                      className={`${s["pill-btn"]} ${(selectedColor === color || (!selectedColor && color === "None")) ? s["selected"] : ""}`}
                      onClick={() => setSelectedColor(color === "None" ? "" : color)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            </div>
 
            <div className={s["filtered-by-box"]}>
              <span className={s["filtered-title"]}>Filtered by</span>
              <p>Size: {selectedSize || "None"}</p>
              <p>Brand: {selectedBrand || "None"}</p>
              <p>Price: {selectedPrice || "None"}</p>
              <p>Color: {selectedColor || "None"}</p>
            </div>
          </div>
 
          <ProductList
            products={visibleProducts}
            onAddToCart={addToCart}
            addToFavorites={addToFavorites}
          />
 
          {hasMore && (
            <div className={s["load-more-container"]}>
              <button
                className={s["load-more-btn"]}
                onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
              >
                Load More Products
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>
 
      <Footer />
    </>
  );
};
 
export default Shop;
 