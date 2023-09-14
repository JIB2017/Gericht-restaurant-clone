import React, { useRef } from "react";
import spoon from "../../assets/spoon.png";
import { BsArrowLeftShort, BsArrowRightShort, BsInstagram } from "react-icons/bs";
import image1 from "../../assets/gallery01.png";
import image2 from "../../assets/gallery02.png";
import image3 from "../../assets/gallery03.png";
import image4 from "../../assets/gallery04.png";
import { motion, useInView } from "framer-motion";
import "./Gallery.scss";

function Gallery() {
  const scrollRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  // Animation for title
  const variants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: isInView ? 1 : 0,
      x: isInView ? 0 : -50,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Arrows controls
  const scroll = (direction) => {
    const {current} = scrollRef;
    direction === 'left' ? current.scrollLeft -=300 : current.scrollLeft += 300;
    
  }

  return (
    <div className="app__gallery">
      <div className="app__gallery-content">
        <h4>Instagram</h4>
        <img src={spoon} alt="spoon" />
        <motion.h1 variants={variants} initial="hidden" animate="visible" ref={ref} >Photo Gallery</motion.h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type="button" className="btn">View More</button>
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
