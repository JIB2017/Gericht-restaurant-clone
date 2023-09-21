import React, { useRef } from "react";
import laurels from "../../assets/laurels.webp";
import spoon from "../../assets/spoon.png";
import data from "../../constants/data";
import { motion, useInView } from "framer-motion";
import "./Laurels.scss";

function Laurels() {
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

  return (
    <div className="app__laurels" id="awards">
      <div className="app__laurels-content" ref={ref}>
        <h4 variants={variants}>Awards & Recognition</h4>
        <img variants={variants} src={spoon} alt="spoon" />
        <motion.h1 variants={variants} initial="hidden" animate="visible" >Our Laurels</motion.h1>
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
