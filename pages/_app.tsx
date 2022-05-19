import "../styles/colors.css";
import "../styles/grid.css";
import "../styles/bootstrap.css";
import "../styles/_globals.css";

import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })


  return (
    <AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;
