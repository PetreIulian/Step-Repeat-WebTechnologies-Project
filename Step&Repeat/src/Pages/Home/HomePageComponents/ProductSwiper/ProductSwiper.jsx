import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import AirForce from "../../../../Assets/Images/AirForce.svg";
import "./ProductSwiper.css";

const Products = [
      { id: 1, name: "Nike 03 Air Force", color: "01 Color", image: AirForce, price: 105.99 },
      { id: 2, name: "Nike 03 Air Force", color: "01 Color", image: AirForce, price: 105.99 },
      { id: 3, name: "Nike 03 Air Force", color: "01 Color", image: AirForce, price: 105.99 },
      { id: 4, name: "Nike 03 Air Force", color: "01 Color", image: AirForce, price: 105.99 },
      { id: 5, name: "Nike 03 Air Force", color: "01 Color", image: AirForce, price: 105.99 }
];

const ProductSwiper = () => {
      const [prevEl, setPrevEl] = useState(null);
      const [nextEl, setNextEl] = useState(null);

      return (
            <section className="product-swiper-section">
                  <div className="heading-container">
                        <h1 className="swiper-heading">Our Popular Products</h1>
                        <button className="explore-button">
                              Explore More
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                              </svg>
                        </button>
                  </div>
                  
                  <div className="swiper-container-wrapper">
                        <button ref={(node) => setPrevEl(node)} className="nav-arrow" aria-label="Previous">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="19" y1="12" x2="5" y2="12"></line>
                                    <polyline points="12 19 5 12 12 5"></polyline>
                              </svg>
                        </button>

                        <div className="swiper-track">
                              <Swiper
                                    modules={[Navigation]}
                                    spaceBetween={24}
                                    slidesPerView={3}
                                    navigation={{
                                          prevEl,
                                          nextEl,
                                    }}
                                    breakpoints={{
                                          320: {
                                                slidesPerView: 1,
                                                spaceBetween: 20
                                          },
                                          768: {
                                                slidesPerView: 2,
                                                spaceBetween: 24
                                          },
                                          1024: {
                                                slidesPerView: 3,
                                                spaceBetween: 24
                                          }
                                    }}
                              >
                                    {Products.map((product) => (
                                          <SwiperSlide key={product.id}>
                                                <div className="product-card">
                                                      <div className="card-header">
                                                            <div className="product-info">
                                                                  <h3>{product.name}</h3>
                                                                  <p>{product.color}</p>
                                                            </div>
                                                            <button className="favorite-btn" aria-label="Add to favorites">
                                                                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                                                  </svg>
                                                            </button>
                                                      </div>
                                                      
                                                      <div className="card-image">
                                                            <img src={product.image || AirForce} alt={product.name} />
                                                      </div>
                                                      
                                                      <div className="card-footer">
                                                            <span className="price">${product.price}</span>
                                                            <button className="add-to-cart-btn">Add To Cart</button>
                                                      </div>
                                                </div>
                                          </SwiperSlide>
                                    ))}
                              </Swiper>
                        </div>

                        <button ref={(node) => setNextEl(node)} className="nav-arrow" aria-label="Next">
                               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                              </svg> 
                        </button>
                  </div>
            </section>
      );
};

export default ProductSwiper;