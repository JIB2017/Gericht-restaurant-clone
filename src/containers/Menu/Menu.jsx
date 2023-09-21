import React, { useRef } from "react";
import spoon from "../../assets/spoon.png";
import menu from "../../assets/menu.webp";
import MenuItem from "../../components/MenuItem/MenuItem";
import data from "../../constants/data";
import { motion, useInView } from "framer-motion";
import "./Menu.scss";

function Menu() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
    <div className="app__menu" id="menu">
      <div className="app__menu-title" >
        <h4>Menu That Fits Your Palette</h4>
        <img src={spoon} alt="spoon" />
        <motion.h1 variants={variants} initial="hidden" animate="visible" ref={ref}>
          Today's Special
        </motion.h1>
      </div>
      <div className="app__menu-content">
        <div className="app__menu-content_wine">
          <h3>Wine & Beer</h3>
          <div className="app__menu-content_wine-details">
            {data.wines.map((wines, index) => (
              <MenuItem
                title={wines.title}
                price={wines.price}
                tag={wines.tag}
                key={wines.title + index}
              />
            ))}
          </div>
        </div>
        <img src={menu} alt="menu" />
        <div className="app__menu-content_cocktails">
          <h3>Cocktails</h3>
          <div className="app__menu-content_cocktails-details">
            {data.cocktails.map((cocktails, index) => (
              <MenuItem
                title={cocktails.title}
                price={cocktails.price}
                tag={cocktails.tag}
                key={cocktails.title + index}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="app__menu-button">
        <button type="button" className="btn">
          View More
        </button>
      </div>
    </div>
  );
}

export default Menu;
