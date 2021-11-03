import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="main">
      <motion.h1 layoutId="title" className="title">
        My Shop
      </motion.h1>
      <div className="images-container">
        {["apple", "headphones", "shoes"].map((product, idx) => (
          <Link href={`/${product}`} key={idx}>
            <a>
              <motion.img
                layoutId={product}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                className="product"
                src={`/${product}.jpg`}
                alt="product"
              />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
