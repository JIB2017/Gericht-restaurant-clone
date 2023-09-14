import { motion } from "framer-motion";
import Backdrop from "../Backdrop/Backdrop";

const Modal = ({ handleClose, title, text }) => {
  const dropIn = {
    hidden: {
      opacity: 0,
      scale: 0.75,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: "easeOut",
        duration: 0.15,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.75,
      transition: {
        ease: "easeIn",
        duration: 0.15,
      },
    },
  };

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="modal__content">
          <h1 className="title">{title}</h1>
          <p className="opensans">{text}</p>
          <div className="modal__content-buttons">
            <button onClick={handleClose} className="btn-close">
              Close
            </button>
            <button className="btn">See Offer</button>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
