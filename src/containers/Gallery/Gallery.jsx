import React, { useRef } from "react";
import spoon from "../../assets/spoon.png";
import { BsArrowLeftShort, BsArrowRightShort, BsInstagram } from "react-icons/bs";
import image1 from "../../assets/gallery01.png";
import image2 from "../../assets/gallery02.png";
import image3 from "../../assets/gallery03.png";
import image4 from "../../assets/gallery04.png";
import "./Gallery.scss";

function Gallery() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const {current} = scrollRef;
    direction === 'left' ? current.scrollLeft -=300 : current.scrollLeft += 300;
    
  }

  return (
    <div className="app__gallery">
      <div className="app__gallery-content">
        <h4>Instagram</h4>
        <img src={spoon} alt="spoon" />
        <h1>Photo Gallery</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type="button">View More</button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[image1, image2, image3, image4].map((image, index) => (
            <div className="app__gallery-images_card" key={index}>
              <img src={image} alt="gallery_image" />
              <BsInstagram size={40} className="app__gallery-images_icon"/>
            </div>
          ))}
        </div>
        <div className="app__gallery-arrows">
          <BsArrowLeftShort className="app__gallery-arrows_icons" onClick={() => scroll('left')}/>
          <BsArrowRightShort className="app__gallery-arrows_icons" onClick={() => scroll('right')}/>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
