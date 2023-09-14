import React, { useRef } from "react";
import spoon from "../../assets/spoon.png";
import { motion, useInView } from "framer-motion";
import "./Newsletter.scss";

function NewsLetter() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  // Animation for the title
  const variants = {
    hidden: {
      transform: "rotateX(-180deg)",
      opacity: 0,
      transition: {
        delay: 0.3,
      },
    },
    visible: {
      transform: isInView ? "rotateX(0deg)" : "rotateX(-360deg)",
      opacity: isInView ? 1 : 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div className="app__newsLetter">
      <h4>Newsletter</h4>
      <img src={spoon} alt="spoon" />
      <motion.h1 variants={variants} initial="hidden" animate="visible" ref={ref}>Subscribe to Our Newsletter</motion.h1>
      <p>And never miss latest Updates!</p>
      <div className="app__newsLetter-form">
        <input type="email" placeholder="Email Adress" />
        <button type="button" className="btn">Suscribe</button>
      </div>
    </div>
  );
}

export default NewsLetter;
