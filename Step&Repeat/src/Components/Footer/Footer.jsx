import React from "react";
import Logo from "../../Assets/Logo.svg";
import "./Footer.css";

const links = ['Home', 'About', 'Collection', 'Shop', 'FQA'];

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-description-container">
        <div className="logo-header">
          <div className="logo-bg">
            <img className="logo" src={Logo} alt="Logo" />
          </div>
          <h1 className="logo-name">Step & Repeat</h1>
        </div>
        <p className="footer-description">
          Romanian based sneakers<br />
          online shop, ready to impress<br />
          in any circumstances.
        </p>
        <div className="social-links">
          <a href="#facebook" className="social-icon" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a href="#instagram" className="social-icon" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="#linkedin" className="social-icon" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
      </section>

      <section className="quick-links-container">
        <h2 className="section-title">Quick Links</h2>
        <ul className="links-list">
          {links.map((link) => (
            <li key={link}>
              <a href={`/${link.toLowerCase()}`} className="footer-link">{link}</a>
            </li>
          ))}
        </ul>
      </section>

      <section className="contact-container">
        <h2 className="section-title">Contact</h2>
        <ul className="contact-list">
          <li className="contact-item">
            <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>+40 723 672 023</span>
          </li>
          <li className="contact-item">
            <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>Splaiul Independenței 313,<br />București, România</span>
          </li>
          <li className="contact-item">
            <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <span>stepandrepeat@gmail.com</span>
          </li>
        </ul>
      </section>

      <section className="copyright-container">
        <p className="copyright">© 2026 Step&Repeat - All Rights Reserved</p>
      </section>
    </footer>
  );
};

export default Footer;