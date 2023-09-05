import React from "react";
import spoon from "../../assets/spoon.png";
import letter from "../../assets/G.png";
import knife from "../../assets/knife.png";
import "./AboutUs.scss";

function AboutUs() {
  return (
    <div className="app__about">
      <div className="app__about-overlay">
        <img src={letter} alt="letter" />
      </div>
      <div className="app__about-us">
        <h2>About Us</h2>
        <img src={spoon} alt="Spoon" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button type="button">Know More</button>
      </div>
      <div className="app__about-images">
        <img src={knife} className="knife" alt="knife" />
      </div>
      <div className="app__about-history">
        <h2>Our History</h2>
        <img src={spoon} alt="Spoon" />
        <p>
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
          Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
          odio nec aliquet.
        </p>
        <button type="button">Know More</button>
      </div>
    </div>
  );
}

export default AboutUs;
