import React from "react";
import spoon from "../../assets/spoon.png";
import "./Newsletter.scss";

function NewsLetter() {
  return (
    <div className="app__newsLetter">
      <h4>Contact</h4>
      <img src={spoon} alt="spoon" />
      <h1>Find Us</h1>
      <p>And never miss latest Updates!</p>
      <input type="text" placeholder="Email Adress"/>
      <button type="button">Suscribe</button>
    </div>
  );
}

export default NewsLetter;
