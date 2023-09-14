import React, { useRef } from "react";
import spoon from "../../assets/spoon.png";
import letter from "../../assets/G.png";
import knife from "../../assets/knife.png";
import { motion, useInView } from "framer-motion";
import "./AboutUs.scss";

function AboutUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: isInView ? 1 : 0,
      x: isInView ? 0 : -50,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.div variants={variants} initial="hidden" animate="visible" className="app__about" id="about" >
      <div className="app__about-overlay">
        <img src={letter} alt="letter" />
      </div>
      <div className="app__about-us">
        <motion.h1 variants={item} initial="hidden" animate="visible">About Us</motion.h1>
        <img src={spoon} alt="Spoon" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button type="button" className="btn">Know More</button>
      </div>
      <div className="app__about-images">
        <img src={knife} className="knife" alt="knife" />
      </div>
      <div className="app__about-history" ref={ref}>
        <motion.h1 variants={item} initial="hidden" animate="visible">Our History</motion.h1>
        <img src={spoon} alt="Spoon" />
        <p>
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
          Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
          odio nec aliquet.
        </p>
        <button type="button" className="btn">Know More</button>
      </div>
    </motion.div>
  );
}

export default AboutUs;
