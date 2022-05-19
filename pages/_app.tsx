import "../styles/colors.css";
import "../styles/grid.css";
import "../styles/bootstrap.css";
import "../styles/_globals.css";

import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  const variants = {
    pageInitial: {
      opacity: 0
    },
    pageAnimate: {
      opacity: 1
    },
    pageExit: {
      opacity: 0
    }
  }
  return (
    <Component {...pageProps} />
  );
  {/* return (
     <AnimateSharedLayout>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          exit="pageExit"
          variants={variants}>
        <Component {...pageProps} />
       </motion.div> 
      </AnimatePresence>
    </AnimateSharedLayout> 
  );*/}
}

export default MyApp;
