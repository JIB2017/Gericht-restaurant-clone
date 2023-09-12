import React from "react";
import logo from "../../assets/gericht.png";
import spoon from "../../assets/spoon.png";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import NewsLetter from "../../components/Newsletter/Newsletter";
import "./Footer.scss";

function Footer() {
  return (
    <div className="app__footer">
      <div className="app__footer-overlay">
        <div className="app__footer-overlay-black" />
        <div className="app__footer-overlay-img" />
      </div>
      <NewsLetter />
      <div className="app__footer-content">
        <div className="app__footer-content_contact">
          <h4>Contact Us</h4>
          <p>9 W 53rd St, New York, NY 10019, USA</p>
          <div />
          <p>+1 212-344-1230</p>
          <p>+1 212-555-1230</p>
        </div>
        <div className="app__footer-content_logo">
          <img src={logo} alt="logo" />
          <p>
            "The best way to find yourself is to lose yourself in the service of
            others.”
          </p>
          <img src={spoon} alt="spoon" />
          <div className="app__footer-content_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
        <div className="app__footer-content_hours">
          <h4>Working Hours</h4>
          <p>Monday-Friday: 08:00 am -12:00 am</p>
          <p>Saturday-Sunday: 07:00am -11:00 pm</p>
        </div>
      </div>
      <div className="app__footer-rights">
        <p>2021 Gericht. All Rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
