import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import chef from "../../assets/chef.png";
import spoon from "../../assets/spoon.png";
import quote from "../../assets/quote.png";
import sign from "../../assets/sign.png";
import "./Chef.scss";

function Chef() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: isInView ? 1 : 0,
      x: isInView ? 0 : 50,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <div className="app__chef">
      <div className="app__chef-image">
        <img src={chef} alt="chef" />
      </div>
      <div className="app__chef-content">
        <h4>Chef's Word</h4>
        <img src={spoon} alt="spoon" />
        <motion.h1 variants={variants} initial="hidden" animate="visible" ref={ref}>What We Believe In</motion.h1>
        <div className="app__chef-content_quote">
          <img src={quote} alt="quote" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
          </p>
        </div>
        <p className="quote">
          auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
          Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
          lectus eu. Congue iaculis integer curabitur semper sit nunc.
        </p>
        <div className="app__chef-content_sign">
          <h4>Kevin Luo</h4>
          <p>Chef & Founder</p>
          <img src={sign} alt="sign" />
        </div>
      </div>
    </div>
  );
}

export default Chef;
