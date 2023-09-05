import React from "react";
import "./MenuItem.scss";

function MenuItem({ title, price, tag }) {
  return (
    <div className="app__menu-item">
      <div className="app__menu-itemUp">
        <h5>{title}</h5>
        <div />
        <h5>{price}</h5>
      </div>
      <p>{tag}</p>
    </div>
  );
}

export default MenuItem;
