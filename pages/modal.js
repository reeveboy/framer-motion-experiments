import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "../components/Modal";

export default function modal() {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => (modalOpen ? close() : open())}>
        Launch Modal
      </motion.button>

      <AnimatePresence
        initial={false}
        onExitComplete={() => null}
        exitBeforeEnter={true}>
        {modalOpen && <Modal handleClose={close} modalOpen={modalOpen} />}
      </AnimatePresence>
    </div>
  );
}
