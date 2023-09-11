import React from 'react';
import spoon from "../../assets/spoon.png";
import findUs from "../../assets/findus.png"
import "./FindUs.scss";

function FindUs() {
  return (
    <div className='app__findus' id='contact'>
      <div className='app__findus-content'>
        <h4>Contact</h4>
        <img src={spoon} alt="spoon" />
        <h1>Find Us</h1>
        <p>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        <h5>Opening Hours</h5>
        <p>Mon - Fri: 10:00 am - 02:00 am</p>
        <p>Sat - Sun: 10:00 am - 03:00 am</p>
        <button>Visit Us</button>
      </div>
      <div className='app__findus-image'>
        <img src={findUs} alt="spoon" />
      </div>
    </div>
  )
}

export default FindUs