import React, { useRef } from 'react';
import spoon from "../../assets/spoon.png";
import findUs from "../../assets/findus.png";
import { motion, useInView } from "framer-motion";
import "./FindUs.scss";

function FindUs() {
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
    hiddenImg: {
      opacity: 0,
      x: 50,
    },
    visibleImg: {
      opacity: isInView ? 1 : 0,
      x: isInView ? 0 : 50,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className='app__findus' id='contact'>
      <div className='app__findus-content'>
        <h4>Contact</h4>
        <img src={spoon} alt="spoon" />
        <motion.h1 variants={variants} initial="hidden" animate="visible" ref={ref}>Find Us</motion.h1>
        <p>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        <h5>Opening Hours</h5>
        <p>Mon - Fri: 10:00 am - 02:00 am</p>
        <p>Sat - Sun: 10:00 am - 03:00 am</p>
        <button type='button' className='btn btn-findus'>Visit Us</button>
      </div>
      <div className='app__findus-image'>
        <motion.img variants={variants} initial="hiddenImg" animate="visibleImg" src={findUs} alt="spoon" />
      </div>
    </div>
  )
}

export default FindUs