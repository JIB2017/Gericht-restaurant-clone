import React from "react";
import laurels from "../../assets/laurels.png";
import spoon from "../../assets/spoon.png";
import data from "../../constants/data";
import "./Laurels.scss";

function Laurels() {
  return (
    <div className="app__laurels" id="awards">
      <div className="app__laurels-content">
        <h4>Awards & Recognition</h4>
        <img src={spoon} alt="spoon" />
        <h1>Our Laurels</h1>
        <div className="app__laurels-content_awards">
          {data.awards.map((awards) => (
            <div className="app__laurels-content_award">
              <img src={awards.image} alt="" />
              <div>
                <h4>{awards.title}</h4>
                <p>{awards.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="app__laurels-image">
        <img src={laurels} alt="food" />
      </div>
    </div>
  );
}

export default Laurels;
