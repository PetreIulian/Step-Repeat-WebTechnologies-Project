import React from "react";
import "./Contact.css";
import placeholder from "../../Assets/Images/placeholder.svg";
import Footer from "../../Components/Footer/Footer.jsx"

const FacebookSVG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramSVG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinSVG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const YoutubeSVG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const SendArrowSVG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const EmailSVG = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#222525" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const PhoneSVG = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#222525" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const PinSVG = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#222525" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const Socials = [
  { icon: <LinkedinSVG />, link: "https://www.linkedin.com" },
  { icon: <InstagramSVG />, link: "https://www.instagram.com" },
  { icon: <FacebookSVG />, link: "https://www.facebook.com" },
  { icon: <YoutubeSVG />, link: "https://www.youtube.com" }
];

const DefaultContactInfo = [
  { image: <EmailSVG />, title: "CONTACT EMAIL", value: "contact@stepandrepeat.com" },
  { image: <PhoneSVG />, title: "CONTACT PHONE", value: "+40 766 542 882" },
  { image: <PinSVG />, title: "TEAM ADDRESS", value: "Splaiul Independenței 313\nBucharest, Romania" }
];


const ContactCTA = ({ ContactInfo = DefaultContactInfo, banner, handleSubmit, handleChange, formData, isSending, statusMessage }) => {

  return (
    <div className="contact-page-wrapper">
      <section className="contact-header-container">
        <div className="contact-header-card text-card">
          <h1>Get in Touch with US</h1>
          <p>Complete the form to get answers for every question you have.</p>
        </div>
        <div className="contact-header-card image-card">
          <img src={banner || placeholder} alt="Contact Banner - Sneakers" />
        </div>
      </section>

      <section className="contact-cta-container">
        <div className="ccta-form-container">
          <div className="ccta-from-grid">
            
            <div className="ccta-form-grid-left">
              <div className="ccta-contact-info">
                {ContactInfo.map((info, index) => (
                  <div key={index} className="ccta-contact-info-item">
                    <div className="ccta-contact-image">
                      {typeof info.image === 'string' ? <img src={info.image} alt={info.title} /> : info.image}
                    </div>
                    <div className="ccta-contact-text-wrapper">
                      <h3 className="ccta-contact-title">{info.title}</h3>
                      <p className="ccta-contact-value" style={{ whiteSpace: "pre-line" }}>{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <span className="ccta-grid-left-line"></span>

              <div className="ccta-socials">
                {Socials.map((social, index) => (
                  <a href={social.link} key={index} className="ccta-social-link" target="_blank" rel="noopener noreferrer">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="ccta-form-grid-right">
              <div className="ccta-form-heading-container">
                <h1 className="ccta-form-heading">FILL OUT THE FORM TO RECEIVE MORE INFORMATION ABOUT US</h1>
                <h2 className="ccta-form-subheading">Please fill out the form below. We will contact you within 3 business days.</h2>
              </div>

              <form className="ccta-form" onSubmit={handleSubmit}>
                <div className="ccta-form-inner-layout">
                  
                  <div className="ccta-form-group third-width">
                    <label className="ccta-form-label" htmlFor="entity">INDIVIDUAL / COMPANY *</label>
                    <input className="ccta-form-input" type="text" id="entity" name="entity" value={formData?.entity || ''} onChange={handleChange} placeholder="E.g. Tech Solutions SRL" required />
                  </div>

                  <div className="ccta-form-group third-width">
                    <label className="ccta-form-label" htmlFor="name">CONTACT PERSON *</label>
                    <input className="ccta-form-input" type="text" id="name" name="contactName" value={formData?.contactName || ''} onChange={handleChange} placeholder="Full name" required />
                  </div>

                  <div className="ccta-form-group third-width">
                    <label className="ccta-form-label" htmlFor="email">EMAIL ADDRESS *</label>
                    <input className="ccta-form-input" type="email" id="email" name="email" value={formData?.email || ''} onChange={handleChange} placeholder="john_doe@gmail.com" required />
                  </div>

                  <div className="ccta-form-group half-width">
                    <label className="ccta-form-label" htmlFor="requestType">REQUEST TYPE *</label>
                    <select className="ccta-form-select" id="requestType" name="requestType" value={formData?.requestType || ''} onChange={handleChange} required>
                      <option value="" disabled>Select an option</option>
                      <option value="Parteneriat">Partenership</option>
                      <option value="Întrebări tehnice">Questions</option>
                      <option value="Colaborare">Colaborations</option>
                    </select>
                  </div>

                  <div className="ccta-form-group half-width">
                    <label className="ccta-form-label" htmlFor="phone">PHONE *</label>
                    <input className="ccta-form-input" type="tel" id="phone" name="phone" value={formData?.phone || ''} onChange={handleChange} placeholder="+40 700 000 000" required />
                  </div>

                  <div className="ccta-form-group two-thirds-width">
                    <label className="ccta-form-label" htmlFor="details">DETAILED MESSAGE</label>
                    <textarea className="ccta-form-textarea" id="details" name="details" value={formData?.details || ''} onChange={handleChange} placeholder="Please provide a few details ..." required></textarea>
                  </div>

                  <div className="ccta-form-group third-width ccta-btn-wrapper">
                    {statusMessage && statusMessage.text && (
                      <div className={`ccta-status-message ${statusMessage.type}`}>
                        {statusMessage.text}
                      </div>
                    )}
                    <button className="ccta-form-button" type="submit" disabled={isSending}>
                      <span>{isSending ? "SENDING..." : "SEND REQUEST"}</span>
                      {!isSending && <SendArrowSVG />}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const Contact = () => {
  return (
    <>
      <ContactCTA/>
      <Footer/> 
    </>
  );
}

export default Contact;