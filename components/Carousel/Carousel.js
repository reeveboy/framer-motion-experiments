import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const imgs = ["1", "2", "3", "4", "5", "6"];

let paths = [];

imgs.forEach((img) => {
  paths.push(`/more_images/${img}.jpg`);
});

function Carousel() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [width]);
  return (
    <motion.div
      ref={carousel}
      whileTap={{ cursor: "grabbing" }}
      style={{
        cursor: "grab",
        overflow: "hidden",
        margin: "10% 15%",
      }}>
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        style={{
          display: "flex",
        }}>
        {paths.map((img, idx) => {
          return (
            <motion.div
              whileTap={{ scale: 1.1 }}
              key={idx}
              style={{
                minHeight: "300px",
                minWidth: "300px",
                margin: "1rem",
              }}>
              <img
                src={img}
                width={"100%"}
                height={"100%"}
                style={{
                  borderRadius: "10px",
                  pointerEvents: "none",
                }}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

export default Carousel;
