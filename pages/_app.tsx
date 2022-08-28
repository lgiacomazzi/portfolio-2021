import "../styles/colors.css";
import "../styles/grid.css";
import "../styles/bootstrap.css";
import "../styles/_globals.css";

import ThemeContextProvider from "../contexts/ThemeContext";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import { AnimatePresence } from "framer-motion";

import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());


function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
      <Footer />
    </ThemeContextProvider>
  );
}

export default MyApp;
