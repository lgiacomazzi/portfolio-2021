import "../styles/colors.css";
import "../styles/grid.css";
import "../styles/bootstrap.css";
import "../styles/_globals.css";

import ThemeContextProvider from "../contexts/ThemeContext";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import { AnimatePresence } from "framer-motion";


function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <AnimatePresence exitBeforeEnter>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </AnimatePresence>
    </ThemeContextProvider>
  );
}

export default MyApp;
