import "../styles/colors.css";
import "../styles/grid.css";
import "../styles/bootstrap.css";
import "../styles/_globals.css";

import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');

  const handleThemeChange = (e) => {
    console.log("handle change start")
    if (e.matches) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

  }

  useEffect(() => {
    console.log("useEffect start")
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    handleThemeChange(darkModeMediaQuery);
    darkModeMediaQuery.addEventListener("change", handleThemeChange)
    return () => {
      darkModeMediaQuery.removeEventListener('change', handleThemeChange)
    }
  })


  return (
    // <AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
    <Component {...pageProps} />
    // </AnimatePresence>
  );
}

export default MyApp;
