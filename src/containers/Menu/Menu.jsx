import React from "react";
import spoon from "../../assets/spoon.png";
import menu from "../../assets/menu.png";
import MenuItem from "../../components/MenuItem/MenuItem";
import data from "../../constants/data";
import "./Menu.scss";

function Menu() {
  return (
    <div className="app__menu" id="menu">
      <div className="app__menu-title">
        <h4>Menu That Fits Your Palette</h4>
        <img src={spoon} alt="spoon" />
        <h1>Today's Special</h1>
      </div>
      <div className="app__menu-content">
        <div className="app__menu-content_wine">
          <h3>Wine & Beer</h3>
          <div className="app__menu-content_wine-details">
            {data.wines.map((wines, index) => (
              <MenuItem
                title={wines.title}
                price={wines.price}
                tag={wines.tag}
                key={wines.title + index}
              />
            ))}
          </div>
        </div>
        <img src={menu} alt="menu" />
        <div className="app__menu-content_cocktails">
          <h3>Cocktails</h3>
          <div className="app__menu-content_cocktails-details">
            {data.cocktails.map((cocktails, index) => (
              <MenuItem
                title={cocktails.title}
                price={cocktails.price}
                tag={cocktails.tag}
                key={cocktails.title + index}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="app__menu-button">
        <button type="button" className="btn">View More</button>
      </div>
    </div>
  );
}

export default Menu;
