import React, { useRef } from "react";
import spoon from "../../assets/spoon.png";
import welcome from "../../assets/welcome.png";
import { motion, useInView } from "framer-motion";
import "./Header.scss";

function Header() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  // Animation delay for the children of a section 
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: isInView ? 1 : 0,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  // Animation for each element
  const item = {
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
  }

  return (
    <div className="app__header" id="home" >
      <motion.div variants={variants} initial="hidden" animate="visible" className="app__header-content" ref={ref}>
        <motion.h4 variants={item}>Chase The New Flavour</motion.h4>
        <motion.img variants={item} src={spoon} alt="Spoon" />
        <motion.h1 variants={item}>The Key To Fine Dining</motion.h1>
        <motion.p variants={item}>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus{" "}
        </motion.p>
        <motion.button variants={item} type="button" className="btn">
          Explore Menu
        </motion.button>
      </motion.div>
      <motion.div variants={item} initial="hiddenImg" animate="visibleImg" className="app__header-image">
        <img src={welcome} alt="Welcome" />
      </motion.div>
    </div>
  );
}

export default Header;
