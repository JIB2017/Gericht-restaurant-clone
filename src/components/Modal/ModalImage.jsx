import { motion } from "framer-motion";
import Backdrop from "../Backdrop/Backdrop";

const ModalImage = ({ handleClose, img }) => {
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
        className="modal__gallery"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="modal__gallery-content">
          <img src={img} alt="" />
          <div className="modal__gallery-content_button">
            <button onClick={handleClose} className="btn-close">
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default ModalImage;
