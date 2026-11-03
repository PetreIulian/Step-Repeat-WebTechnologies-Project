import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext.jsx";
const MoonIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>
  </svg>
);
const FavoriteIcon = (props) => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M18.2578 2C18.9078 1.99939 19.5513 2.14413 20.1506 2.42575C20.75 2.70736 21.2931 3.12018 21.7482 3.64C22.6859 4.70638 23.2115 6.14316 23.2115 7.64C23.2115 9.13685 22.6859 10.5736 21.7482 11.64L12.5 22.13L3.25179 11.64C2.3141 10.5736 1.78849 9.13685 1.78849 7.64C1.78849 6.14316 2.3141 4.70638 3.25179 3.64C3.70714 3.12055 4.25032 2.70795 4.84961 2.42629C5.4489 2.14464 6.09229 1.99957 6.74218 1.99957C7.39208 1.99957 8.03546 2.14464 8.63475 2.42629C9.23404 2.70795 9.77723 3.12055 10.2326 3.64L12.5 6.24L14.7585 3.66C15.2122 3.13398 15.7559 2.71586 16.3572 2.43064C16.9584 2.14542 17.6049 1.99895 18.2578 2ZM18.2578 2.68285e-06C17.3701 -0.000840038 16.4913 0.196858 15.6727 0.581505C14.8541 0.966151 14.1124 1.53 13.4909 2.24L12.5 3.36L11.5091 2.24C10.8869 1.53129 10.1449 0.968412 9.3265 0.584193C8.50808 0.199974 7.62957 0.00209743 6.74218 0.00209743C5.8548 0.00209743 4.97629 0.199974 4.15787 0.584193C3.33945 0.968412 2.59749 1.53129 1.97525 2.24C0.709312 3.68363 0 5.62636 0 7.65C0 9.67364 0.709312 11.6164 1.97525 13.06L12.5 25L23.0248 13.06C24.2907 11.6164 25 9.67364 25 7.65C25 5.62636 24.2907 3.68363 23.0248 2.24C22.4027 1.53091 21.6608 0.967646 20.8423 0.583064C20.0239 0.198482 19.1453 0.000276098 18.2578 2.68285e-06Z" fill="currentColor"/>
  </svg>
);
const BagIcon = (props) => (
  <svg width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M18.75 6.25H15V5C15 3.67392 14.4732 2.40215 13.5355 1.46447C12.5979 0.526784 11.3261 0 10 0C8.67392 0 7.40215 0.526784 6.46447 1.46447C5.52678 2.40215 5 3.67392 5 5V6.25H1.25C0.918479 6.25 0.600537 6.3817 0.366117 6.61612C0.131696 6.85054 0 7.16848 0 7.5V21.25C0 22.2446 0.395088 23.1984 1.09835 23.9016C1.80161 24.6049 2.75544 25 3.75 25H16.25C17.2446 25 18.1984 24.6049 18.9017 23.9016C19.6049 23.1984 20 22.2446 20 21.25V7.5C20 7.16848 19.8683 6.85054 19.6339 6.61612C19.3995 6.3817 19.0815 6.25 18.75 6.25ZM7.5 5C7.5 4.33696 7.76339 3.70107 8.23223 3.23223C8.70107 2.76339 9.33696 2.5 10 2.5C10.663 2.5 11.2989 2.76339 11.7678 3.23223C12.2366 3.70107 12.5 4.33696 12.5 5V6.25H7.5V5ZM17.5 21.25C17.5 21.5815 17.3683 21.8995 17.1339 22.1339C16.8995 22.3683 16.5815 22.5 16.25 22.5H3.75C3.41848 22.5 3.10054 22.3683 2.86612 22.1339C2.6317 21.8995 2.5 21.5815 2.5 21.25V8.75H5V10C5 10.3315 5.1317 10.6495 5.36612 10.8839C5.60054 11.1183 5.91848 11.25 6.25 11.25C6.58152 11.25 6.89946 11.1183 7.13388 10.8839C7.3683 10.6495 7.5 10.3315 7.5 10V8.75H12.5V10C12.5 10.3315 12.6317 10.6495 12.8661 10.8839C13.1005 11.1183 13.4185 11.25 13.75 11.25C14.0815 11.25 14.3995 11.1183 14.6339 10.8839C14.8683 10.6495 15 10.3315 15 10V8.75H17.5V21.25Z" fill="currentColor"/>
  </svg>
);
const ProfileIcon = (props) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M1 18.5C1 17.1739 1.52678 15.9021 2.46447 14.9645C3.40215 14.0268 4.67392 13.5 6 13.5H16C17.3261 13.5 18.5979 14.0268 19.5355 14.9645C20.4732 15.9021 21 17.1739 21 18.5C21 19.163 20.7366 19.7989 20.2678 20.2678C19.7989 20.7366 19.163 21 18.5 21H3.5C2.83696 21 2.20107 20.7366 1.73223 20.2678C1.26339 19.7989 1 19.163 1 18.5Z" strokeWidth="2" strokeLinejoin="round" stroke="currentColor"/>
    <path d="M14.75 4.75C14.75 6.82107 13.0711 8.5 11 8.5C8.92893 8.5 7.25 6.82107 7.25 4.75C7.25 2.67893 8.92893 1 11 1C13.0711 1 14.75 2.67893 14.75 4.75Z" strokeWidth="2" stroke="currentColor"/>
  </svg>
);
import Logo from '../../Assets/Logo.svg';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { cartItems, removeFromCart, subtotal, totalItems } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isBagOpen, setIsBagOpen] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setIsDark(initialDark);
    document.documentElement.setAttribute('theme', initialDark ? 'dark' : 'light');
  }, []);

  const toggleDarkTheme = () => {
    const newDarkState = !isDark;
    setIsDark(newDarkState);
    const themeValue = newDarkState ? 'dark' : 'light';
    document.documentElement.setAttribute('theme', themeValue);
    localStorage.setItem('theme', themeValue);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsBagOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsBagOpen(false);
    }, 200);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""} ${isMenuOpen ? styles['menu-open'] : ""}`}>
      <section className={styles['logo-container']}>
        <img className={styles.logo} src={Logo} alt="Logo" />
        <h1 className={styles['logo-title']}>Step & Repeat</h1>
      </section>  
      
      <div className={`${styles['nav-menu-wrapper']} ${isMenuOpen ? styles.active : ""}`}>
        <ul className={styles['links-container']}>
          <li className={styles['nav-link']}><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li className={styles['nav-link']}><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
          <li className={styles['nav-link']}><Link to="/shop" onClick={() => setIsMenuOpen(false)}>Shop</Link></li>
          <li className={styles['nav-link']}><Link to="/faq" onClick={() => setIsMenuOpen(false)}>FAQs</Link></li>
          <li className={styles['nav-link']}><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
        </ul>
        
        <section className={styles['action-buttons-container']}>
          <button className={styles['action-button']} aria-label="Theme" onClick={() => { toggleDarkTheme(); setIsMenuOpen(false); }}> 
            <MoonIcon style={{color: 'var(--primary-accents)'}} /> 
          </button>
          
          <button className={styles['action-button']} aria-label="Favorites" onClick={() => setIsMenuOpen(false)}> 
            <FavoriteIcon style={{color: 'var(--primary-accents)'}} /> 
          </button>
          
          {/* Coș de cumpărături */}
          <div 
            className={styles['bag-container']}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              className={styles['action-button']} 
              aria-label="Shopping Bag" 
              onClick={() => setIsBagOpen(!isBagOpen)}
            > 
              <BagIcon style={{color: 'var(--primary-accents)'}} /> 
            </button>

            {isBagOpen && (
              <div className={styles['bag-dropdown']}>
                <div className={styles['bag-header']}>
                  <h3 className={styles['bag-title']}>Your shopping bag</h3>
                  <span className={styles['bag-badge']}>{totalItems} items</span>
                </div>

                <div className={styles['bag-items']}>
                  {cartItems.length === 0 ? (
                    <p className={styles['empty-bag-text']}>Your bag is empty.</p>
                  ) : (
                    cartItems.map((item) => (
                      <div className={styles['bag-item']} key={item.id}>
                        <div className={styles['item-img-bg']}>
                          <img src={item.image} alt={item.name} className={styles['item-img']} />
                        </div>
                        <div className={styles['item-details']}>
                          <div className={styles['item-text-info']}>
                            <h4 className={styles['item-name']}>{item.name}</h4>
                            <p className={styles['item-variant']}>{item.variant}</p>
                            <span className={styles['item-price']}>{item.price} RON</span>
                          </div>
                          <div className={styles['item-actions']}>
                            <span className={styles['item-qty']}>Qty: {item.quantity}</span>
                            <button 
                              className={styles['remove-btn']} 
                              aria-label="Remove item"
                              onClick={() => removeFromCart(item.id)}
                            >
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {cartItems.length > 0 && (
                  <div className={styles['bag-footer']}>
                    <div className={styles['subtotal-row']}>
                      <span className={styles['subtotal-label']}>Subtotal</span>
                      <span className={styles['subtotal-amount']}>{subtotal.toLocaleString()} RON</span>
                    </div>
                    <p className={styles['shipping-note']}>Shipping calculated at checkout.</p>

                    <button className={styles['checkout-btn']}>
                      Checkout 
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>

                    <Link to="/cart" className={styles['view-bag-link']} onClick={() => setIsBagOpen(false)}>
                      View shopping bag
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>

          <button className={styles['action-button']} aria-label="Profile" onClick={() => setIsMenuOpen(false)}> 
            <ProfileIcon style={{color: 'var(--primary-accents)'}} /> 
          </button>
        </section>
      </div>
      
      <button className={styles['menu-toggle']} onClick={toggleMenu} aria-label="Toggle Menu">
        {isMenuOpen ? (
          <svg className={styles['menu-icon']} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg className={styles['menu-icon']} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        )}
      </button>
    </nav>
  );
}

export default Navbar;