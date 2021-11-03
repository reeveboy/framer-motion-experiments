import { AnimateSharedLayout } from "framer-motion";
import "../styles/globals.css";
import "../styles/Home.css";

function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
      <Component {...pageProps} />
    </AnimateSharedLayout>
  );
}

export default MyApp;
