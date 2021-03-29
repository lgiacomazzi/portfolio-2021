import "../styles/colors-dark.css";
import "../styles/globals.css";

import Background from "../components/Background";

import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <Background>
      <Component {...pageProps} />
    </Background>
  );
}

export default MyApp;
