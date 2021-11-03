import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Product() {
  const {
    query: { product },
  } = useRouter();

  return (
    <div className="main">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
        // layoutId="title"
        className="title">
        {product}
      </motion.h2>
      <motion.img
        layoutId={product}
        className="single-image"
        src={`/${product}.jpg`}
        alt={product}
      />
    </div>
  );
}
