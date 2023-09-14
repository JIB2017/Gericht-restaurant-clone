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
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#awards">Awards</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login">Log In / Registration</a>
        <div />
        <a href="#table">Book Table</a>
      </div>
      <div className="app__navbar-mobile">
        {/* Icons for dropdown menu */}
        {mobileMenu ? (
          <MdOutlineRestaurantMenu
            size={27}
            onClick={() => setMobileMenu(false)}
          />
        ) : (
          <GiHamburgerMenu size={27} onClick={() => setMobileMenu(true)} />
        )}
        {/* Dropdown menu */}
        {mobileMenu && (
          <div className="app__navbar-mobile_container slide-bottom">
            <ul className="app__navbar-mobile__links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#menu">Menu</a>
              </li>
              <li>
                <a href="#awards">Awards</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
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
