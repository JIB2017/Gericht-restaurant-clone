import React from "react";
import chef from "../../assets/chef.png";
import spoon from "../../assets/spoon.png";
import quote from "../../assets/quote.png";
import sign from "../../assets/sign.png";
import "./Chef.scss";

function Chef() {
  return (
    <div className="app__chef">
      <div className="app__chef-image">
        <img src={chef} alt="chef" />
      </div>
      <div className="app__chef-content">
        <h4>Chef's Word</h4>
        <img src={spoon} alt="spoon" />
        <h1>What We Believe In</h1>
        <div className="app__chef-content_quote">
          <img src={quote} alt="quote" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
          </p>
        </div>
        <p className="quote">
          auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
          Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
          lectus eu. Congue iaculis integer curabitur semper sit nunc.
        </p>
        <div className="app__chef-content_sign">
          <h4>Kevin Luo</h4>
          <p>Chef & Founder</p>
          <img src={sign} alt="sign" />
        </div>
      </div>
    </div>
  );
}

export default Chef;
