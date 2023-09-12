import React from "react";
import spoon from "../../assets/spoon.png";
import "./Newsletter.scss";

function NewsLetter() {
  return (
    <div className="app__newsLetter">
      <h4>Newsletter</h4>
      <img src={spoon} alt="spoon" />
      <h1>Subscribe to Our Newsletter</h1>
      <p>And never miss latest Updates!</p>
      <div className="app__newsLetter-form">
        <input type="email" placeholder="Email Adress" />
        <button type="button" className="btn">Suscribe</button>
      </div>
    </div>
  );
}

export default NewsLetter;
