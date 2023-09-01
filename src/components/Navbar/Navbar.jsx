import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import logo from "../../assets/gericht.png";
//import images from '../../assets/images';
import "./Navbar.scss";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="app__navbar-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#pages">Pages</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#landing">Landing</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login">Log In / Registration</a>
        <div />
        <a href="#table">Book Table</a>
      </div>
      <div className="app__navbar-mobile">
        <GiHamburgerMenu size={27} onClick={() => setMobileMenu(true)} />
        {mobileMenu && (
          <div className="app__navbar-mobile_container slide-bottom">
            <MdOutlineRestaurantMenu size={27} onClick={() => setMobileMenu(false)} />
            <ul className="app__navbar-mobile__links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#pages">Pages</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#landing">Landing</a>
              </li>
            </ul>
            <div className="app__navbar-mobile_login">
              <a href="#login">Log In / Registration</a>
              <div />
              <a href="#table">Book Table</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
