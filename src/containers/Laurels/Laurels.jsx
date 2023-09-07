import React from "react";
import laurels from "../../assets/laurels.png";
import spoon from "../../assets/spoon.png";
import "./Laurels.scss";

function Laurels() {
  return (
    <div className="app__laurels" id="awards">
      <div className="app__laurels-content">
        <h4>Awards & Recognition</h4>
        <img src={spoon} alt="spoon" />
        <h1>Our Laurels</h1>
        <div className="app__laurels-content-awards"></div>
      </div>
      <div className="app__laurels-image">
        <img src={laurels} alt="food" />
      </div>
    </div>
  );
}

export default Laurels;
