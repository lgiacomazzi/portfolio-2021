import "../styles/colors.css";
import "../styles/grid.css";
import "../styles/bootstrap.css";
import "../styles/_globals.css";

import ThemeContextProvider from "../contexts/ThemeContext";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import { AnimatePresence } from "framer-motion";

import { NextIntlProvider } from 'next-intl'; // 

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <NextIntlProvider messages={pageProps.messages}>
        <Header />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} />
        </AnimatePresence>
        <Footer />
      </NextIntlProvider>
    </ThemeContextProvider>
  );
}

export default MyApp;
