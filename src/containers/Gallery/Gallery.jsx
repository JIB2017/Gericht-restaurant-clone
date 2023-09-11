import React from "react";
import spoon from "../../assets/spoon.png";
import "./Gallery.scss";

function Gallery() {
  return (
    <div className="app__gallery">
      <div className="app__gallery-content">
        <h4>Instagram</h4>
        <img src={spoon} alt="spoon" />
        <h1>Photo Gallery</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button type="button">View More</button>
      </div>
      <div className="app__gallery-images"></div>
    </div>
  );
}

export default Gallery;
