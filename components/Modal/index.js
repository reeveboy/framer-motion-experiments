import { motion } from "framer-motion";
import Backdrop from "../Backdrop";

export default function index({ handleClose, text }) {
  const dropIn = {
    hidden: {
      y: -1000,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: 1000,
      opacity: 0,
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
        exit="exit">
        {text}
      </motion.div>
    </Backdrop>
  );
}
