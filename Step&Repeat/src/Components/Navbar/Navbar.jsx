import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchIcon from '../../Assets/Icons/Search.svg';
import FavoriteIcon from '../../Assets/Icons/Favorite.svg';
import BagIcon from '../../Assets/Icons/Bag.svg';
import ProfileIcon from '../../Assets/Icons/Profile.svg';
import Logo from '../../Assets/Logo.svg';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <button className={styles['action-button']} aria-label="Search" onClick={() => setIsMenuOpen(false)}> 
            <img src={SearchIcon} alt="Search" /> 
          </button>
          <button className={styles['action-button']} aria-label="Favorites" onClick={() => setIsMenuOpen(false)}> 
            <img src={FavoriteIcon} alt="Favorite" /> 
          </button>
          <button className={styles['action-button']} aria-label="Shopping Bag" onClick={() => setIsMenuOpen(false)}> 
            <img src={BagIcon} alt="Bag" /> 
          </button>
          <button className={styles['action-button']} aria-label="Profile" onClick={() => setIsMenuOpen(false)}> 
            <img src={ProfileIcon} alt="Profile" /> 
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