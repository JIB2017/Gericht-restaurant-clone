import React from 'react';
import spoon from "../../assets/spoon.png";
import welcome from "../../assets/welcome.png";
import "./Header.scss";

function Header() {
  return (
    <div className='app__header'>
      <div className='app__header-content'>
        <p>Chase The New Flavour</p>
        <img src={spoon} alt="Spoon" />
        <h1>The Key To Fine Dining</h1>
        <p>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
        <button type='button'>Explore Menu</button>
      </div>
      <div className='app__header-image'>
        <img src={welcome} alt="Welcome" />
      </div>
    </div>
  )
}

export default Header