import React from 'react';
import spoon from "../../assets/spoon.png";
import menu from "../../assets/menu.png";
import "./Menu.scss";

function Menu() {
  return (
    <div className='app__menu'>
      <div className='app__menu-title'>
        <h4>Menu That Fits Your Palette</h4>
        <img src={spoon} alt="spoon" />
        <h1>Today's Special</h1>
      </div>
      <div className='app__menu-content'>
        <div className='app__menu-content_wine'>
          <h3>Wine & Beer</h3>
        </div>
        <img src={menu} alt="menu" />
        <div className='app__menu-content_cocktails'>
          <h3>Cocktails</h3>
        </div>
      </div>
      <div className='app__menu-button'>
        <button type='button'>View More</button>
      </div>
    </div>
  )
}

export default Menu